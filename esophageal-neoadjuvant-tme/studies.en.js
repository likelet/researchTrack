// English text keyed by DOI, in the same order as the Chinese source where possible.
// Add an entry alongside each new study in studies.js.
window.ESOPHAGEAL_EN = {
  "10.1186/s12943-022-01666-x": {
    summary: "T-cell activation and exhaustion coexist after chemotherapy in EAC.",
    team: "University of Birmingham / Queen Elizabeth Hospital Birmingham; Paul Moss and Ewen A. Griffiths.",
    design: "Single-cell RNA sequencing of eight patients with esophageal adenocarcinoma: four untreated and four after neoadjuvant chemotherapy.",
    finding: "The study found a marked T-cell response alongside exhaustion, extrinsic immune regulation, and limited antigen presentation. It also mapped stromal subpopulations.",
    limit: "Cross-sectional comparison of different patients, not within-patient pairing. It cannot establish benefit from immunotherapy."
  },
  "10.1016/j.ebiom.2022.104371": {
    author: "Jing Wen et al.",
    summary: "Post-chemoradiotherapy: more CD8⁺ T cells, exhaustion and myeloid remodeling.",
    team: "Sun Yat-sen University Cancer Center and Guangdong Provincial Institute of Esophageal Cancer; corresponding authors: Hong Yang, Jianhua Fu, and Qianwen Liu.",
    design: "Eight men contributed 15 specimens (eight pretreatment biopsies and seven resection specimens) after neoadjuvant chemoradiotherapy and surgery. scRNA-seq profiled 111,784 cells.",
    finding: "CD8⁺ T-cell infiltration increased after chemoradiotherapy, with changes in exhaustion. cDC1 maturation and M2-associated macrophage markers increased, while cDC2 decreased.",
    limit: "There was no combined immunotherapy, so changes cannot be attributed to checkpoint inhibition. The sample was small, two chemotherapy backbones were used, and ligand–receptor interactions were largely inferred."
  },
  "10.1016/j.isci.2023.106480": {
    summary: "The chemotherapy group had stronger CD8⁺ T-cell memory and less exhaustion.",
    team: "Kyushu University; Kenoki Ohuchida’s team.",
    design: "Nineteen patients contributed 18 ESCC and 12 normal esophageal specimens. The study profiled 83,151 CD45⁺ cells, comparing groups with and without neoadjuvant chemotherapy.",
    finding: "The chemotherapy group had stronger CD8⁺ memory signatures, less exhaustion, lower Treg suppression scores, and higher cDC1 antigen-presentation scores. Th1 and effector CD8⁺ T cells expressed more IFNG.",
    limit: "Not a strictly paired within-patient comparison. Chemotherapy regimens, sampling sites, and specimen types differed. Comparison with chemoradiotherapy studies does not isolate a radiotherapy effect."
  },
  "10.1186/s13073-024-01320-9": {
    author: "Gang Ji and Qi Yang (co-first authors)",
    summary: "Pretreatment CD8⁺ T and NK cell IFNγ programs were stronger in patients with pCR.",
    team: "Xijing and Tangdu hospitals, Air Force Medical University; corresponding authors at Tangdu Hospital: Tao Jiang, Ming-gao Zhao, and Qiang Lu.",
    design: "Twenty-two patients (21 squamous, one adenosquamous); 46 tumor and adjacent tissue specimens (22 baseline, 24 post-treatment) underwent scRNA-seq. Pathological response was assessed in 18 patients: seven pCR, six MPR, five incomplete responses.",
    finding: "Pretreatment effector CD8⁺ T cells and NK cells in pCR cases showed stronger IFNγ-related transcriptional programs. Treg proportions declined after treatment in better responders.",
    limit: "The 46 specimens did not represent 46 patients; complete pre/post pairing was limited. These subgroup associations were exploratory, not validated predictors."
  },
  "10.1038/s41591-024-03064-w": {
    author: "Jianjun Qin et al.",
    summary: "ESCORT-NEO: pCR rates were 28.0%, 15.4%, and 4.7% across the three groups.",
    team: "Cancer Hospital, Chinese Academy of Medical Sciences / National Cancer Center; Jie He, Yin Li, and the multicenter collaboration.",
    design: "Open-label phase III trial in 391 patients with resectable, locally advanced thoracic ESCC: camrelizumab + nab-paclitaxel/cisplatin (132), camrelizumab + paclitaxel/cisplatin (130), or paclitaxel/cisplatin (129). Camrelizumab continued after surgery in the immunotherapy groups.",
    finding: "The co-primary endpoints were pathological complete response (pCR) and event-free survival (EFS). Intention-to-treat pCR was 28.0%, 15.4%, and 4.7%; both immunotherapy groups differed significantly from control. EFS was immature in this report.",
    limit: "pCR is not evidence of EFS or OS benefit on its own. There was no neoadjuvant chemoradiotherapy control. The nab-paclitaxel arm differed from control in two components, and PD-L1 subgroup analyses were post hoc."
  },
  "10.1016/S0140-6736(24)00745-1": {
    author: "Ken Kato et al.",
    summary: "JCOG1109: triplet chemotherapy improved overall survival versus the doublet.",
    team: "National Cancer Center, Japan; Ken Kato and the JCOG1109 collaboration.",
    design: "Japanese multicenter, open-label phase III trial in 601 patients with locally advanced resectable ESCC. Patients received neoadjuvant CF, DCF, or CF plus radiotherapy, then surgery.",
    finding: "The primary endpoint was overall survival. Three-year OS was 62.6%, 72.1%, and 68.3%, respectively. DCF improved OS versus CF; CF plus radiotherapy did not differ significantly from CF.",
    limit: "No immunotherapy was included. This was a non-ICI benchmark for interpreting neoadjuvant ESCC trials, not a basis for ranking treatments by pCR across trials."
  },
  "10.1038/s41388-024-03123-z": {
    author: "Chao Wu, Guoqing Zhang, Lin Wang, and Jinlong Hu (co-first authors)",
    summary: "Spatial CD8⁺ T/B-cell organization in TLS was linked to pathological response.",
    team: "Fifth Medical Center of the Chinese PLA General Hospital led the clinical study; corresponding authors: Yi Hu, Xiaobin Hou, Jianpeng Sheng, and Wei Zhang; multicenter collaboration.",
    design: "The single-arm phase II trial enrolled 60 patients. Imaging mass cytometry profiled spatial protein expression in specimens collected before and after treatment; the public archive records 68 regions of interest, not 60 paired cases.",
    finding: "Differences in pathological response were associated with CD8⁺ T/B-cell organization in TLS and with S100A9⁺ inflammatory macrophages in fibrotic regions.",
    limit: "The full trial size is not the number of spatially profiled pairs. Spatial findings and machine-learning results were exploratory and do not establish causal interactions or external prediction performance."
  },
  "10.1038/s41467-024-52977-0": {
    author: "Zhenlin Yang, He Tian, Xiaowei Chen, and Bozhao Li (co-first authors)",
    summary: "Baseline CXCL13⁺ CD8⁺ T cells tracked with response; post-treatment states differed.",
    team: "National Cancer Center / Cancer Hospital, Chinese Academy of Medical Sciences, Departments of Thoracic Surgery and Pathology; corresponding authors: Shugeng Gao and Liyan Xue.",
    design: "Eighteen patients contributed 23 scRNA-seq/scTCR-seq samples (seven pretreatment biopsies, 16 resection specimens, five complete pairs). Additional validation used 54 retrospective bulk RNA cases and tissue staining in 96 cases.",
    finding: "Baseline CXCL13⁺ CD8⁺ T-cell enrichment was associated with response. After treatment, nonresponders were enriched for terminally exhausted-like CXCL13⁺/STMN1⁺ CD8⁺ cells and TNFRSF4⁺ Tregs. Mouse experiments supported a role for CXCL13; the human baseline transcriptomic signature had a prediction AUC of about 0.65.",
    limit: "The baseline and postoperative signals are not interchangeable. There were only five complete pairs, and biopsy and resection specimens may differ systematically. The marker cannot independently guide treatment selection."
  },
  "10.1186/s12943-025-02332-8": {
    author: "Heng Jiao, Siyun Lin, Jianmin Gu, Dongxian Jiang, Peng Cui et al.",
    summary: "Nivolumab plus chemotherapy did not significantly increase pCR (15.0% vs 13.3%).",
    team: "Zhongshan Hospital, Fudan University; Lijie Tan, Tianshu Liu, Jun Yin, and the five-center collaboration.",
    design: "Five-center, double-blind phase II trial in 90 patients with stage II–III thoracic ESCC: nivolumab plus paclitaxel/cisplatin (60) or placebo plus the same chemotherapy (30). Patients without pCR could receive postoperative nivolumab.",
    finding: "Intention-to-treat pCR, the primary endpoint, did not differ significantly: 9/60 (15.0%) vs 4/30 (13.3%), P = 0.832. Two-year EFS was 63.11% vs 60.47% (HR 0.97, 95% CI 0.49–1.92). Exploratory ctDNA clearance was 89% vs 62.5% (P = 0.01).",
    limit: "The sample was small, survival confidence intervals were wide, and non-pCR patients could receive the same postoperative immunotherapy. Exploratory ctDNA clearance does not overturn the negative primary endpoint."
  },
  "10.1016/j.xcrm.2025.102334": {
    author: "Zhichao Liu, Guoqiang Wang, Yang Yang et al.",
    summary: "Adding ctDNA to routine reassessment improved sensitivity for detecting non-pCR.",
    team: "Shanghai Chest Hospital (Zhigang Li and Chunguang Li), Burning Rock Biotech (Shangli Cai), and the multicenter preSINO collaboration.",
    design: "Of 242 patients in the prospective preSINO diagnostic cohort, 132 had eligible tumor/blood specimens for ctDNA analysis, totaling 489 blood draws. The study included neoadjuvant chemoradiotherapy, clinical reassessment, surgical pathology, and follow-up.",
    finding: "Adding individualized tumor-informed ctDNA to routine reassessment increased non-pCR detection sensitivity from 78.4%–80.7% to 92.0%–93.2%. MRD positivity after chemoradiotherapy or surgery was associated with worse survival.",
    limit: "This was not a neoadjuvant chemoimmunotherapy cohort. Adjuvant immunotherapy benefit by MRD status was explored nonrandomly; this cannot justify withholding surgery or drug therapy."
  },
  "10.3389/fimmu.2026.1770662": {
    author: "Yan Zheng et al.",
    summary: "Same-day vs staggered immunotherapy: no significant pCR difference.",
    team: "Affiliated Cancer Hospital of Zhengzhou University / Henan Cancer Hospital; Wenqun Xing.",
    design: "Open-label phase II trial in 70 patients with resectable locally advanced ESCC. Both groups received paclitaxel/cisplatin on day 1; toripalimab was randomized to day 3 (34) or the same day (36). Fifty-four patients underwent surgery.",
    finding: "The primary pCR endpoint did not differ significantly: 5/28 vs 7/26 among surgical patients (P = 0.636) and 5/34 vs 7/36 in intention-to-treat analysis (P = 0.754). No DFS or OS superiority was demonstrated.",
    limit: "A small trial of checkpoint inhibitor timing within the same cycle, not checkpoint blockade versus no blockade. Exploratory toxicity differences did not establish a safer schedule."
  },
  "10.1136/jitc-2025-014249": {
    author: "Zhongjian Yu, Wenjia Li, Shiting Xu, Meng Xu, and Qi Lin (co-first authors)",
    summary: "A collagen-rich endothelial and fibroblast niche was linked to resistance.",
    team: "Affiliated Cancer Hospital of Guangzhou Medical University and Guangzhou Laboratory; corresponding authors: Yanfang Zheng, Ming Zhou, and Shengbao Suo.",
    design: "Nine patients contributed 18 biopsies before and after two cycles for scRNA-seq/scTCR-seq. The study also profiled spatial transcriptomes from four surgeries (one untreated, one CR, one PR, one SD), with multiplex IHC and animal experiments.",
    finding: "Responders had ACKR1⁺ endothelium and CFD⁺ fibroblasts alongside CD8⁺ T-cell infiltration at the tumor margin. Resistance was associated with a collagen-rich niche involving tumor VEGFA, RGCC⁺/VEGFR2-high endothelium, and MMP11⁺ fibroblasts. VEGFR2 blockade improved response in preclinical models.",
    limit: "Human evidence relied mainly on spatial localization and associations. The spatial comparison had one patient per group and was not paired. Preclinical intervention does not establish clinical efficacy."
  },
  "10.1038/s41467-026-76959-6": {
    author: "Yahui Zhao, Ruixiang Zhang, Yang Li, Songming Liu, Cheng Liu, and Yuhao Wang (co-first authors)",
    summary: "Responding tumors were enriched for cytotoxic CX3CR1⁺ CD8⁺ effector T cells.",
    team: "Thoracic Surgery and Molecular Oncology, National Cancer Center / Cancer Hospital, Chinese Academy of Medical Sciences, with Beijing BTZJ Intelliseq; corresponding authors: Zhihua Liu, Yin Li, and Zhaoren He.",
    design: "The translational cohort of a phase III trial enrolled 63 patients. Fifty-two patients contributed 81 scRNA/scTCR samples (36 camrelizumab plus chemotherapy, 11 chemotherapy, five unspecified). Twenty-five responded, 16 did not, and 11 were unevaluable. Paired TCR clonal analysis included 16 responders and 13 nonresponders.",
    finding: "Responding tumors were enriched for CX3CR1⁺GZMB⁺ and CX3CR1⁺CD107a⁺ CD8⁺ effectors. Clonal tracking and functional experiments supported an antigen-driven, highly cytotoxic state.",
    limit: "Fifty-two patients did not mean 52 pairs; not all received immunotherapy. Response meant Mandard grades 1–2, not pCR alone. Several comparisons were unpaired, and functional cytotoxicity does not establish clinical benefit from targeting CX3CR1."
  },
  "10.1136/gutjnl-2026-339071": {
    author: "Si Li, Jiyu Guo, Jianqun Ma et al.",
    summary: "Coordinated T, B and macrophage programs tracked with response to PD-L1 blockade.",
    team: "Harbin Medical University and its Cancer Hospital; Yongsheng Li was guarantor, and Yongsheng Li, Hang Yin, Xiaoyuan Wang, and Qinghua Jiang led study conception and design.",
    design: "Prospective single-arm phase II trial of neoadjuvant PD-L1 blockade: 13 patients (six responders, seven nonresponders), with 12 pretreatment and 18 post-treatment specimens including normal, adjacent, and tumor tissue, profiled by scRNA/TCR/BCR. Twenty sections from five patients were profiled by Visium.",
    finding: "Baseline response tracked with a coordinated program involving CXCL13⁺ exhausted-like CD8⁺ T cells, TNFRSF9⁺ Tregs, atypical memory B cells, and APOE⁺ macrophages. Postoperative nonresponders showed an immunosuppressive state. Combined LAG3 and PD-L1 blockade improved antitumor activity in mice.",
    limit: "This single-arm mechanistic study did not compare PD-L1 blockade with standard PD-1 plus chemotherapy. Multiple sections or specimens do not represent independent patients. Spatial deconvolution and co-occurrence do not prove direct interactions, and this study did not test dual blockade efficacy in patients."
  },
  "10.1016/j.drup.2026.101502": {
    author: "Zihang Mai et al.",
    title: "The Th17–CAF–B-cell axis and de novo tertiary lymphoid structures",
    summary: "Functional experiments support a Th17–CAF–B-cell axis linked to new TLS.",
    team: "Department of Thoracic Surgery, Sun Yat-sen University Cancer Center / Guangdong Provincial Institute of Esophageal Cancer, with Sun Yat-sen Memorial Hospital; corresponding authors include Jianhua Fu and Xuan Xie.",
    design: "Twenty patients with ESCC provided paired samples before and after neoadjuvant chemoimmunotherapy. The study used single-cell RNA, TCR/BCR, spatial profiling, and functional experiments.",
    finding: "Th17 cells increased after treatment in responders. The authors linked IL-22 to transition of IL22RA1⁺ CAFs toward a CCL19⁺ state and TLS formation, and IL-17A to a TNFSF9⁺ B-cell state. Pretreatment IL22RA1⁺ CAFs were a candidate response marker.",
    limit: "Twenty patients were profiled longitudinally, not a clinical prediction-validation cohort. Spatial and animal evidence does not show patient benefit or guide treatment selection. The study is dated by first online publication in 2026."
  },
  "10.1016/j.xcrm.2026.103162": {
    summary: "CD8⁺ T-cell clonal changes varied by neoadjuvant regimen.",
    team: "Shanghai Chest Hospital, Shanghai Jiao Tong University School of Medicine; Xiao-Long Fu, Zhi-Gang Li, Wen Yu et al.",
    design: "Integrated paired pre/post-treatment scRNA/TCR-seq data from neoadjuvant chemoimmunotherapy, chemoradiotherapy alone, and chemoradiotherapy plus immunotherapy.",
    finding: "Chemoimmunotherapy response was associated with retention of pre-existing CXCL13⁺PD-1⁺ CD8⁺ T cells and enrichment of CXCR4⁺ progenitor-like exhausted T cells. Chemoradiotherapy was associated with contraction of pre-existing exhausted clones and enrichment of PD-1⁻ NIBAN1⁺ cytotoxic effector T cells in responders.",
    limit: "Cross-regimen molecular integration was not a randomized head-to-head comparison. Cell-state differences are not evidence of one regimen’s superiority or a basis for treatment selection."
  },
  "10.1002/advs.202515207": {
    "author": "Dijian Shen, Rui Li, Yong She, Xuefei Liu, Yuanyang Huang, and Yongling Ji (co-first authors)",
    "summary": "PRDM1⁺ tumor cells rose after nICRT in non-MPR, alongside Tregs and TREM2⁺ TAMs.",
    "team": "Zhejiang Cancer Hospital and Sun Yat-sen University Cancer Center collaborated; the clinical trial was conducted at Zhejiang Cancer Hospital. Corresponding authors: Xuan Li, Qi Zhao, and Ming Chen (Sun Yat-sen University Cancer Center), and Qixun Chen (Zhejiang Cancer Hospital).",
    "design": "Single-center, single-arm phase II trial NCT03940001 of neoadjuvant sintilimab with concurrent chemoradiotherapy (nICRT): 22 in the full analysis set, 17 underwent surgery. Nine patients contributed 26 single-cell RNA/TCR specimens: nine pretreatment biopsies, eight postoperative tumor specimens, and nine non-tumor specimens. Eight patients had paired tumor samples. The earlier surgical outcomes report (DOI 10.21037/jgo-24-295) included the same 17 operated patients from this trial.",
    "finding": "Post-treatment specimens from patients without a major pathological response (non-MPR) were enriched for PRDM1⁺ malignant epithelial cells. Multiplex staining and functional evidence supported immunosuppressive interactions with regulatory T cells via IL1A–IL1R2 and TREM2⁺ lipid-associated tumor-associated macrophages (TAMs) via CD47–SIRPA.",
    "limit": "The trial was single-center and single-arm, with nine patients and eight paired tumors in the single-cell subset. Post-treatment enrichment does not establish a pretreatment predictor; tissue and in vitro evidence do not establish benefit in patients from targeting the pathway."
  },
  "10.1038/s41419-026-09371-z": {
    "author": "Yuchen Zhang, Pingjing Zhou, and Hongyu Zhang (co-first authors)",
    "summary": "UDP-GlcNAc marked nonresponse; models support Treg ferroptosis resistance.",
    "team": "Thoracic Surgery, Zhongshan Hospital, Fudan University, with Shanghai Fifth People’s Hospital and Fudan University. Corresponding authors: Jun Yin, Jie Gu, and Di Ge (Zhongshan Hospital), and Ronghua Liu (Shanghai Fifth People’s Hospital/Fudan University).",
    "design": "After neoadjuvant chemoimmunotherapy containing anti-PD-1, 22 resection tumors were profiled by untargeted metabolomics and a 20-patient cohort by multiplex immunofluorescence. A third cohort of 20 with pretreatment biopsies and resections was used for staining, flow cytometry, and mass spectrometry. The investigators also integrated two published single-cell datasets (17 patients, 24 specimens) and performed functional experiments.",
    "finding": "Post-treatment tumors without a major pathological response had more UDP-GlcNAc, and their regulatory T cells showed higher O-GlcNAcylation. Functional experiments supported a role for the EIF3H–LTF pathway in Treg ferroptosis resistance and maintenance of immunosuppression.",
    "limit": "Bulk post-treatment metabolomics cannot determine which cell type made the metabolite. The public single-cell data were reanalyzed rather than newly profiled. Neither the patient associations nor the preclinical interventions establish pretreatment prediction or therapeutic benefit."
  }
};
