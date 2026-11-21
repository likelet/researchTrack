// Regenerate the English figure after updating studies.js, studies.en.js and the Chinese SVG.
// Run: node esophageal-neoadjuvant-tme/render-overview-en.mjs (from the repo root).
import {readFileSync,writeFileSync} from 'node:fs';
import {runInNewContext} from 'node:vm';

const read=name=>readFileSync(new URL(name,import.meta.url),'utf8');
const state={window:{}};
for(const source of ['studies.js','studies.en.js'])runInNewContext(read(source),state,{filename:source});
const data=new Map(state.window.ESOPHAGEAL_STUDIES.map(x=>[x.doi,{...x,...state.window.ESOPHAGEAL_EN[x.doi]}]));
const escape=s=>s.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;');
const histology={'鳞癌':'ESCC','腺癌':'EAC'};
const translations={
 '配对动态':'Paired changes','空间机制':'Spatial mechanisms','转化标志物':'Translational markers','随机临床证据':'Randomized clinical evidence',
 '阅读主线':'Reading path',
 '单药或放化疗基线  →  新辅助联合治疗配对  →  随机临床证据与空间机制':'Single-agent or chemoradiotherapy benchmarks → paired combination studies → randomized evidence and spatial mechanisms',
 '阅读口径':'Evidence note',
 '配对与空间结果用于解释细胞变化；随机临床终点不直接证明机制。黄色 ★ 仅标记中山大学肿瘤防治中心署名。':'Paired and spatial studies describe cellular changes; randomized endpoints do not directly establish mechanisms. A yellow star marks a SYSUCC collaboration.'
};
// An Arial-like width estimate prevents overlong lines without a font dependency.
function width(s){
 return [...s].reduce((sum,ch)=>sum+(' ilI.,:;!⁺⁻–-()/|\''.includes(ch)?0.31:'MWmw%Θ'.includes(ch)?0.88:/[A-Z\d]/.test(ch)?0.61:0.54),0);
}
function lines(s,limit){
 const out=[];
 for(const word of s.trim().split(/\s+/)){
  const i=out.length-1;
  if(i===-1||width(out[i]+' '+word)>limit)out.push(word);
  else out[i]+=' '+word;
 }
 return out;
}
const seen=new Set();
let svg=read('overview.svg')
 .replace('<svg xmlns=','<svg xml:lang="en" xmlns=')
 .replace(/<title id="overview-title">[^<]+<\/title>/, `<title id="overview-title">Neoadjuvant therapy and the esophageal cancer immune microenvironment | ${data.size} original studies</title>`)
 .replace(/<desc id="overview-desc">[^<]+<\/desc>/,'<desc id="overview-desc">Horizontal timeline by first online publication date. Each card lists the author, journal, summary, and DOI. Squamous cell carcinoma and adenocarcinoma are labeled separately.</desc>')
 .replace('font-family:"Noto Sans CJK SC","Microsoft YaHei","PingFang SC",sans-serif','font-family:Arial,Helvetica,sans-serif')
 .replace(/研究时间轴 \/ ([^<]+)/,'Research timeline / $1')
 .replace('食管癌新辅助治疗｜免疫微环境核心文献地图','Neoadjuvant Therapy and the Esophageal Cancer Immune Microenvironment')
 .replace(/\d+ 项原始研究[^<]+/,`${data.size} original studies · ESCC and EAC shown separately · first online publication`)
 .replace(/font-size="55"/,'font-size="50"')
 .replace(/<g><title>[^<]+<\/title>[\s\S]*?<\/g>/g,g=>{
  const last=[...g.matchAll(/<text [^>]*>([^<]*)<\/text>/g)].at(-1);
  const row=data.get(last?.[1]);
  if(!row||!state.window.ESOPHAGEAL_EN[row.doi]?.summary)throw new Error(`Missing English entry for ${last?.[1]}`);
  if(seen.has(row.doi))throw new Error(`Duplicate DOI in SVG: ${row.doi}`);
  seen.add(row.doi);
  const label=histology[row.histology]||row.histology;
  const title=escape(`${row.title} — ${row.author}, ${row.journal}, ${row.date}. ${label}. ${row.summary} DOI ${row.doi}`);
  const found=g.match(/<text (x="[^"]+") y="(\d+)" font-size="18" ([^>]+)>[^<]*<\/text>/);
  if(!found)throw new Error(`Could not find the card summary for ${row.doi}`);
  let dy=18, size=18, brief=lines(row.summary,21);
  if(brief.length>2){size=16;dy=17;brief=lines(row.summary,23.5);}
  if(brief.length>2)throw new Error(`Summarize in at most two lines: ${row.doi}`);
  const summary=brief.map((line,i)=>`<text ${found[1]} y="${+found[2]+i*dy}" font-size="${size}" ${found[3]}>${escape(line)}</text>`).join('\n');
  return g.replace(/<title>[^<]*<\/title>/,'<title>'+title+'</title>')
   .replace(/ · (鳞癌|腺癌)</,` · ${label}<`)
   .replace(/<text [^>]*font-size="18"[^>]*>[^<]*<\/text>(?:\n<text [^>]*font-size="18"[^>]*>[^<]*<\/text>)*/,summary);
 })
 .replace(/>([^<>]+)<\/text>/g,(all,value)=>translations[value]?all.replace(value,translations[value]):all)
 .replace('x="181" y=','x="205" y=');
if(seen.size!==data.size)throw new Error(`Chinese SVG has ${seen.size} cards, expected ${data.size}`);
if(/[\u3400-\u9FFF]/.test(svg))throw new Error('Untranslated text in the English figure');
writeFileSync(new URL('overview.en.svg',import.meta.url),svg);
