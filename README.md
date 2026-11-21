# Research Track: Gastrointestinal Cancer Literature Atlas

Research Track maps evidence in gastrointestinal oncology, from clinical studies and molecular classifications to the tumor immune microenvironment. Each interactive map links back to the original sources and asks three questions: **Who did the work? What did they find? How far does the evidence go?**

**[Open the English atlas](https://seqworld.com/researchTrack/?lang=en)** · [中文图谱](https://seqworld.com/researchTrack/?lang=zh)

## Research topics

| Topic | Research question | Explore |
| --- | --- | --- |
| Colorectal cancer radiogenomics | Can CT, MRI, PET, or H&E slides identify directly measured molecular features? How well do the models perform on external cohorts? | [Interactive map](https://seqworld.com/researchTrack/crc-radiogenomics/interactive.html?lang=en) · [Original figure](https://seqworld.com/researchTrack/crc-radiogenomics/?lang=en) |
| Gastric cancer immune microenvironment | How do T cells, myeloid cells, cancer-associated fibroblasts, and tertiary lymphoid structures change during treatment? Why might findings differ across cohorts? | [Interactive map](https://seqworld.com/researchTrack/gastric-immune-tme/interactive.html?lang=en) · [Original figure](https://seqworld.com/researchTrack/gastric-immune-tme/?lang=en) |
| Primary small-cell carcinoma of the esophagus | How have pathological and molecular classifications evolved, and what evidence supports treatment choices in different settings? | [Interactive map](https://seqworld.com/researchTrack/scce/interactive.html?lang=en) · [Original figure](https://seqworld.com/researchTrack/scce/?lang=en) |
| Colorectal cancer CMS and genomic subtypes | Where do transcriptomic consensus molecular subtypes (CMS) and DNA-based classifications align, and where can one not be inferred from the other? | [Interactive map](https://seqworld.com/researchTrack/crc-cms/interactive.html?lang=en) · [Original figure](https://seqworld.com/researchTrack/crc-cms/?lang=en) |
| Esophageal cancer immune microenvironment during neoadjuvant therapy | How do immune and stromal compartments change after treatment? Which findings are post-treatment associations, and which are candidate pretreatment biomarkers? | [Interactive map](https://seqworld.com/researchTrack/esophageal-neoadjuvant-tme/?lang=en) · [English timeline](https://seqworld.com/researchTrack/esophageal-neoadjuvant-tme/overview.en.svg) |

Use **中文 / English** to switch languages. The site remembers your choice. You can share either language directly by adding `?lang=en` or `?lang=zh` to a map URL. Archival PNG figures remain in their original language.

## Evidence and updates

- **Inclusion.** We prioritize peer-reviewed original research in humans, especially studies with paired tissue samples, external validation, or clearly defined clinical outcomes. Key trials, consensus statements, and preclinical studies are labeled separately where relevant.
- **Source verification.** Authors, research groups, cohorts, study design, findings, and limitations are checked against the original publications. DOI and PMID are used to identify duplicates. Follow-up analyses of the same trial or cohort are not counted as independent validation. When online and issue dates differ, the first online publication date is used for tracking.
- **Weekly screening.** Maps are updated when verified evidence meets the topic-specific criteria. Historical additions are distinguished from new publications. A molecular proxy or exploratory biomarker is not a substitute for a standard assay and does not by itself support treatment selection.

## Local preview and deployment

The atlas is a static website built with HTML, CSS, JavaScript, and image assets. It needs no build step or backend.

```bash
git clone https://github.com/likelet/researchTrack.git
cd researchTrack
python -m http.server 8000
```

Open [localhost:8000](http://localhost:8000/). The homepage is `index.html`; each topic has its own directory and shared assets live in `assets/`. GitHub Pages publishes from the root of `main`. Preserve relative paths and `.nojekyll` when making changes. When adding or correcting a record, update both language versions and keep evidence metadata, source links, and any live timeline in sync.

## Corrections and suggestions

Open a [GitHub issue](https://github.com/likelet/researchTrack/issues) with the topic, DOI or PMID, and the specific omission or statement to check. Do not submit patient information or unpublished research data.

*This atlas is for research and evidence review. It does not replace clinical guidelines, standard tests, or clinical judgment.*
