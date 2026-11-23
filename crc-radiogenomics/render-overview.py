"""Render both static timelines from interactive.html (Python 3, no dependencies).
Run: python crc-radiogenomics/render-overview.py .
"""
from pathlib import Path
from html import escape
import json
import re
p = Path(__file__).resolve().parent
base = (p / 'interactive.html').read_text(encoding='utf-8')
items = json.loads(re.search(r'<script[^>]+id="papers"[^>]*>(.*?)</script>', base, re.S)[1])
periods = sorted({max(2021, x['year']) for x in items})
groups = {y: sorted((x for x in items if max(2021, x['year']) == y), key=lambda x:(x.get('date',str(x['year'])),x['id'])) for y in periods}
step=238
width=52+step*len(periods)
height=211+93*max(map(len,groups.values()))
palette={'H&E':'#1d7868','CT':'#236093','MRI':'#744986','PET/CT':'#97612d'}
def text(x,y,s,size,color='#1a3245',weight=500):
    return f'<text x="{x}" y="{y}" font-size="{size}" fill="{color}" font-weight="{weight}">{escape(s)}</text>'
def short(s,n):
    return s if len(s)<=n else s[:n-1].rstrip()+'…'
def display_author(s):
    return (s.split(' et al.')[0].split(',')[0].split(' & ')[0]+' et al.') if len(s)>25 else s
for en,suffix in [(False,''),(True,'-en')]:
    title='Colorectal cancer radiogenomics' if en else '结直肠癌影像分子图谱'
    caption=f'{len(items)} studies · First online publication · Click a card for its DOI' if en else f'{len(items)} 项研究 · 按首次在线发表排列 · 点击卡片打开原文 DOI'
    footer='Imaging estimates do not replace molecular assays. Full details and filters are in the interactive atlas.' if en else '影像推断不替代分子检测；完整设计、验证指标与证据边界见互动图谱。'
    font='Arial, sans-serif' if en else 'Arial, Microsoft YaHei, Noto Sans CJK SC, sans-serif'
    out=[f'<svg xmlns="http://www.w3.org/2000/svg" width="{width}" height="{height}" viewBox="0 0 {width} {height}" role="img" aria-labelledby="title desc" xml:lang="{"en" if en else "zh"}">',f'<title id="title">{escape(title)}</title><desc id="desc">{escape(caption)}</desc><rect width="{width}" height="{height}" rx="24" fill="#f2f7fa"/><g font-family="{font}">',text(28,48,title,32,weight=700),text(28,80,caption,16)]
    for i,yr in enumerate(periods):
        x=26+i*step
        out.append(text(x,120,'2019–2021' if yr==2021 else str(yr),20,'#315970',700))
        for j,item in enumerate(groups[yr]):
            y=134+j*93
            label=item['target']
            if label=='疗效评估' and en: label='Treatment response'
            doi=item['doi']
            color=palette.get(item['mode'],'#5c6191')
            a=short(display_author(item['author']),28)
            out.append(f'<a href="https://doi.org/{escape(doi,quote=True)}" target="_blank" aria-label="{escape(item["author"]+" · "+doi,quote=True)}"><title>{escape(item["author"]+" · "+item["journal"]+" · "+doi)}</title><rect x="{x}" y="{y}" width="222" height="80" rx="10" fill="#fff" stroke="#d3e2eb"/><rect x="{x}" y="{y+5}" width="4" height="70" rx="2" fill="{color}"/>')
            out.extend([text(x+13,y+22,short(item['mode']+' · '+label,25),13,color,700),text(x+13,y+48,a,16,weight=700),text(x+13,y+68,short(item['journal'],30),12,'#456175'),'</a>'])
    out.extend([text(28,height-25,footer,15,'#38556a'),'</g></svg>'])
    (p/f'overview{suffix}.svg').write_text('\n'.join(out)+'\n',encoding='utf-8')
