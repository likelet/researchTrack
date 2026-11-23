const crcEn = {
  "pageTitle": "Colorectal cancer: CMS and genomic subtypes · Interactive comparison",
  "description": "Compare colorectal cancer CMS transcriptomic and DNA-based genomic subtypes, explore associations, and read original studies.",
  "labels": {
    "home": "Research Track · Literature atlas",
    "original": "Archived CMS figure",
    "eyebrow": "04 / INTERACTIVE COMPARISON",
    "title": "Colorectal cancer: CMS and genomic subtypes",
    "introStart": "The left panel shows tissue-level RNA expression states; the right shows DNA alterations and chromosomal copy-number patterns. Select any subtype for its definition and links across systems. Highlights indicate published enrichment or shared features. They ",
    "introStrong": "do not imply a one-to-one mapping",
    "punct": ".",
    "full": "View archived figure",
    "download": "Download archived PNG",
    "reset": "Clear selection",
    "rnaTitle": "CMS transcriptomic subtypes",
    "rnaDesc": "Guinney et al.: 4,151 patients across 18 datasets; percentages are from the 3,962-case classification set. ",
    "dnaTitle": "DNA-based genomic subtypes",
    "dnaDesc": "Liu et al. compared 921 gastrointestinal adenocarcinomas. Only the colorectal-relevant types are shown here; 921 is not the colorectal case count. ",
    "cms1": "MSI immune",
    "cms2": "Canonical",
    "cms3": "Metabolic",
    "cms4": "Mesenchymal",
    "mixed": "Mixed / unclassified",
    "cms1sm": "MSI-H, high mutation burden and immune activation",
    "cms2sm": "Epithelial programs, WNT/MYC activation",
    "cms3sm": "Enhanced metabolic programs and enrichment for KRAS mutations",
    "cms4sm": "TGF-β, EMT and stromal remodeling",
    "mism": "Not a fifth subtype",
    "msism": "Microsatellite instability",
    "hmsm": "Hypermutated, predominantly single-nucleotide variants",
    "cinsm": "Chromosomal instability",
    "gssm": "Genomically stable",
    "read": "How to read this atlas",
    "initial": "Click any subtype, or use Tab to focus it and press Enter or Space. MSI is enriched in CMS1, which may also include HM-SNV. CMS2 often shows CIN features. GS is enriched in CMS3, but the two are not equivalent. CMS4 stromal features do not define a DNA subtype.",
    "noscript": "JavaScript is disabled. Open the full-size figure to see the complete comparison.",
    "dnaEvo": "How DNA classifications evolved",
    "tcga": "TCGA 2012: 276 cases underwent multi-omic analysis. Among 224 cases with exome data, approximately 16% were hypermutated and 84% were non-hypermutated. ",
    "cornish": "Cornish et al. 2024: whole-genome sequencing of 2,023 cases identified MSI, polymerase proofreading-associated (POL), and MSS groups. Untreated primary MSS tumors were further classified as WGD-A, WGD-B, GS or LOH. Cohorts and classification thresholds are not interchangeable across studies. ",
    "refs": "Original studies",
    "footer": "For research reading, not a substitute for standard MSI/MMR testing or clinical guidelines.",
    "newEvidence": "New evidence and historical additions",
    "porterTitle": "2026-10-29 · Porter et al. · CMS and iCMS in early-onset colorectal cancer",
    "porterTeam": "Co-corresponding authors: Ramnik J. Xavier (Broad Institute / Massachusetts General Hospital), Ana C. Anderson (Brigham and Women’s Hospital), and Kimmie Ng (Dana-Farber Cancer Institute).",
    "porterFinding": "Single-nucleus RNA sequencing profiled 189 primary tumors (54 early-onset and 135 average-onset); pseudobulk CMS was assigned in 170. CMS2 was more frequent in early-onset tumors in the unadjusted comparison, but the association with continuous age was not significant after sidedness and other covariates were included. Multiplex immunofluorescence in 712 external MSS tumors confirmed differences in cell composition, not CMS calls. Neither age nor the expression subtype determines the DNA class of an individual tumor.",
    "zhaoTitle": "2022 · Zhao et al. · ChangKang historical addition",
    "zhaoTeam": "Feng Wang and Rui-Hua Xu (Sun Yat-sen University Cancer Center) were co-corresponding authors. Qi Zhao, Feng Wang, Yan-Xing Chen, and Shifu Chen contributed equally.",
    "zhaoFinding": "Exomes from 1,015 Chinese patients were used to propose HM, CIN-HR, CIN-LR, and GS. The CMS comparison in Fig. 5e used a separate TCGA-CRC cohort, with 10q11.21 amplification as a proxy within CIN. The resulting CIN-HR group had the largest CMS4 fraction. This was not matched RNA validation in the 1,015 patients and does not equate CIN-HR with CMS4; no subtype link is added."
  },
  "details": {
    "cms1": [
      "CMS1 · MSI immune",
      "Often shows a high mutation burden and marked immune-cell infiltration, with enrichment for MSI-H and BRAF mutations. In Liu et al.’s lower gastrointestinal cohort, CMS1 could not distinguish DNA-level MSI from HM-SNV."
    ],
    "cms2": [
      "CMS2 · Canonical",
      "Characterized by epithelial expression programs, WNT/MYC activation, and frequent chromosomal instability and somatic copy-number alterations. The CIN link indicates shared features, not that every CMS2 case is CIN."
    ],
    "cms3": [
      "CMS3 · Metabolic",
      "Shows enhanced metabolic programs, enrichment for KRAS mutations and relatively few copy-number alterations. Not all cases are MSS. Liu et al. found GS enriched in CMS3, but CMS overall could not reliably distinguish CIN from GS."
    ],
    "cms4": [
      "CMS4 · Mesenchymal",
      "Features TGF-β, EMT, angiogenesis and stromal remodeling, with prominent stromal and fibroblast signals. Single-cell work shows that CMS4 may contain iCMS2 or iCMS3 epithelium. No unique DNA subtype can be assigned on this basis."
    ],
    "mixed": [
      "Mixed / unclassified · Not a fifth subtype",
      "About 13% in Guinney et al. had mixed features or could not be confidently assigned. This does not infer a DNA subtype, and the proportion should not be generalized directly to other cohorts."
    ],
    "msi": [
      "MSI · Microsatellite instability",
      "Associated with mismatch-repair deficiency and more insertion/deletion variants; some cases show MLH1 methylation and silencing. MSI-H is enriched in CMS1, but CMS1 is not an MSI/MMR test."
    ],
    "hm": [
      "HM-SNV · Hypermutated, predominantly single-nucleotide variants",
      "Variants are predominantly single-nucleotide changes. Some cases have defective POLE proofreading, but this is not synonymous with a POLE mutation. CMS1 cannot distinguish this group from MSI."
    ],
    "cin": [
      "CIN · Chromosomal instability",
      "Characterized by aneuploidy and more somatic copy-number alterations. CMS2 often shows CIN-related features, but an expression subtype cannot determine a DNA class in an individual case."
    ],
    "gs": [
      "GS · Genomically stable",
      "Shows relatively few chromosomal copy-number alterations and is not hypermutated, but may still harbor driver mutations. GS was enriched in CMS3 in Liu et al.’s cohort; the categories are not equivalent."
    ]
  }
};

