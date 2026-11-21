# Research Track · 消化道肿瘤研究图谱

从临床证据、分子分型到免疫微环境：用可追溯原文的互动文献图谱，持续梳理消化道肿瘤研究。每个专题重点回答三个问题：**哪个课题组做的、发现了什么、证据能支持到哪一步？**

**[打开在线图谱 →](https://seqworld.com/researchTrack/)**

## 五个研究专题

| 专题 | 关注的问题 | 入口 |
| --- | --- | --- |
| 结直肠癌影像分子识别 | CT、MRI、PET 和 H&E 能否识别实测分子特征？外部验证表现如何？ | [互动图谱](https://seqworld.com/researchTrack/crc-radiogenomics/interactive.html) · [配图](https://seqworld.com/researchTrack/crc-radiogenomics/) |
| 胃癌免疫微环境 | T 细胞、髓系细胞、CAF 和 TLS 如何随治疗变化？不同队列的结论为何不同？ | [互动图谱](https://seqworld.com/researchTrack/gastric-immune-tme/interactive.html) · [配图](https://seqworld.com/researchTrack/gastric-immune-tme/) |
| 原发性食管小细胞癌 | 病理和分子分型如何演进？不同阶段的治疗依据来自什么研究？ | [互动图谱](https://seqworld.com/researchTrack/scce/interactive.html) · [配图](https://seqworld.com/researchTrack/scce/) |
| 结直肠癌 CMS 与基因组分型 | 转录组 CMS 与 DNA 分型在哪些队列中有关联，又在哪些情况下不能互推？ | [互动图谱](https://seqworld.com/researchTrack/crc-cms/interactive.html) · [配图](https://seqworld.com/researchTrack/crc-cms/) |
| 食管癌新辅助治疗免疫微环境 | 治疗前后，免疫和基质如何重塑？哪些是治疗后关联，哪些是治疗前标志物候选？ | [互动图谱](https://seqworld.com/researchTrack/esophageal-neoadjuvant-tme/) · [横向文献图](https://seqworld.com/researchTrack/esophageal-neoadjuvant-tme/overview.svg) |

## 收录与更新

- **收录优先级：**优先同行评议的人体原创研究，尤其是有配对组织、外部验证或明确临床结局的工作。关键试验、共识或基础研究在适用专题单独标注，不与人体机制或疗效验证混为一谈。
- **核对原始证据：**从原文核实作者、课题组、队列、设计、主要发现及局限。按 DOI／PMID 去重；同一试验或队列的后续分析不计为独立验证。在线首发与卷期日期不同时，以首发追踪。
- **每周自动筛查：**只在有核实、符合各专题标准的证据时更新。互动图谱与配图同步，历史补录与新发表分开标记。地图中的分子代理或探索性标志物不等于标准检测，也不直接用于选药。

## 本地预览与发布

站点是纯静态网页，使用 HTML、CSS、JavaScript 和图像资源，不需要构建或后端服务。

```bash
git clone https://github.com/likelet/researchTrack.git
cd researchTrack
python -m http.server 8000
```

浏览器访问 [localhost:8000](http://localhost:8000/)。首页为 `index.html`，各专题在独立目录中，公共样式在 `assets/`。GitHub Pages 从 `main` 分支根目录发布；修改时保留相对路径和 `.nojekyll`。

## 反馈与勘误

欢迎通过 [GitHub Issues](https://github.com/likelet/researchTrack/issues) 提交漏收和勘误。请附上专题、DOI／PMID 与需要核实的具体内容。请勿提交患者信息或未公开的研究数据。

*本项目用于科研阅读与证据梳理，不替代临床指南、标准检测或临床决策。*
