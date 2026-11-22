window.ONC_AI_STUDIES = [
  {
    date:'2023-08-24', title:'Use of Artificial Intelligence Chatbots for Cancer Treatment Information', author:'Shan Chen et al.', venue:'JAMA Oncology', doi:'10.1001/jamaoncol.2023.2954', kind:'Clinical evaluation', key:true,
    team:['布里格姆妇女医院、哈佛医学院与纪念斯隆凯特琳癌症中心团队','Brigham and Women’s Hospital, Harvard Medical School, and Memorial Sloan Kettering collaborators'],
    summary:['用乳腺癌、前列腺癌和肺癌情境对照 NCCN 指南，评估 GPT-3.5 的治疗回答。104 条含建议的回答中，33 条同时包含至少一项不符合指南的建议。','A study of GPT-3.5 recommendations for breast, prostate and lung cancer found that 33 of 104 answers containing recommendations included at least one option discordant with NCCN guidelines.'],
    limit:['测试的是旧版本、模拟提问；不能外推到现有模型，也不能将部分正确视为整条建议安全。','This was a historical model tested on vignettes. It neither estimates current-model performance nor makes a partly correct answer safe.']
  },
  {
    date:'2024-06-12', title:'A multimodal generative AI copilot for human pathology', author:'Ming Y. Lu, Bowen Chen et al.', venue:'Nature', doi:'10.1038/s41586-024-07618-3', kind:'Vision–language', key:true,
    team:['Faisal Mahmood 团队，布里格姆妇女医院／哈佛医学院','Faisal Mahmood’s group, Brigham and Women’s Hospital and Harvard Medical School'],
    summary:['PathChat 将病理图像与临床文字一起用于问答。在 105 道诊断选择题中，图像加临床背景时准确率为 89.5%，图像加问题时为 78.1%。','PathChat combined histology and clinical text for question answering. Across 105 diagnostic multiple-choice questions, accuracy was 89.5% with clinical context versus 78.1% with images and questions alone.'],
    limit:['病理医师预选代表性区域；不是不经人工定位的全切片诊断，也不是前瞻性临床验证。','A pathologist selected representative regions. This was not autonomous whole-slide diagnosis or prospective clinical validation.']
  },
  {
    date:'2024-06-18', title:'Performance of Large Language Models on Medical Oncology Examination Questions', author:'Jack B. Longwell et al.', venue:'JAMA Network Open', doi:'10.1001/jamanetworkopen.2024.17641', kind:'Clinical evaluation', key:false,
    team:['Robert C. Grant 与 Rahul G. Krishnan 等，多伦多大学／Princess Margaret 癌症中心','Robert C. Grant, Rahul G. Krishnan and colleagues at Princess Margaret Cancer Centre and the University of Toronto'],
    summary:['在 ASCO、ESMO 风格的肿瘤学选择题中，表现最好的商用模型答对 85.0%；错误解释仍可能误读或遗漏较新的证据。','The strongest proprietary model answered 85.0% of oncology exam questions correctly; incorrect explanations could still misread or miss recent evidence.'],
    limit:['题库成绩衡量的是封闭题任务；无法代替真实临床情境中的安全性、工作流程和患者结局验证。','An exam score measures a closed-question task, not safety, workflow performance or patient outcomes in practice.']
  },
  {
    date:'2024-10-28', title:'PRISM: Patient Records Interpretation for Semantic clinical trial Matching system using large language models', author:'Shashi Gupta, Aditya Basu et al.', venue:'npj Digital Medicine', doi:'10.1038/s41746-024-01274-7', kind:'Clinical language', key:true,
    team:['Triomics、威斯康星医学院与匹兹堡大学；通讯 Hrituraj Singh、Anai N. Kothari、Yanshan Wang','Triomics, Medical College of Wisconsin and University of Pittsburgh; Hrituraj Singh, Anai N. Kothari and Yanshan Wang'],
    summary:['PRISM 用真实肿瘤病历核查试验条件。720 条条件问答中，微调后的 OncoLLM 准确率 63%，GPT-3.5 Turbo 为 53%，GPT-4 为 68%。','PRISM assessed trial criteria from actual oncology records. On 720 criterion-level questions, its fine-tuned OncoLLM scored 63%, compared with 53% for GPT-3.5 Turbo and 68% for GPT-4.'],
    limit:['微调病历来自一家癌症中心，医生仅在 109 道子集题上作比较；不等于自动判定资格或提高入组率。','Fine-tuning used records from one cancer center. The clinician comparator covered 109 questions only; neither automatic eligibility nor better accrual was established.']
  },
  {
    date:'2024-11-18', title:'Matching patients to clinical trials with large language models', author:'Qiao Jin et al.', venue:'Nature Communications', doi:'10.1038/s41467-024-53081-z', kind:'Clinical language', key:false,
    team:['美国 NIH 国家医学图书馆、国家癌症研究所与 Jimeng Sun 团队；Zhiyong Lu 等','NIH National Library of Medicine, National Cancer Institute and Jimeng Sun’s team; Zhiyong Lu and colleagues'],
    summary:['TrialGPT 将试验检索、逐条匹配与排序拆开。以 183 名合成患者测试，抽样条件判定准确率为 87.3%；小型用户研究的筛查时间平均减少 42.6%。','TrialGPT separated retrieval, criterion-level matching and ranking. It was evaluated on 183 synthetic patients; sampled criterion-level accuracy was 87.3%, and screening was 42.6% faster in a small user study.'],
    limit:['合成患者和筛查计时不能证明真实肿瘤试验入组增加；不能用该准确率直接比较使用真实病历的 PRISM。','Synthetic cases and screening times do not establish real oncology accrual. Its accuracy is not directly comparable with PRISM’s real-record benchmark.']
  },
  {
    date:'2025-06-27', title:'Open-Source Hybrid Large Language Model Integrated System for Extraction of Breast Cancer Treatment Pathway From Free-Text Clinical Notes', author:'Amara Tariq et al.', venue:'JCO Clinical Cancer Informatics', doi:'10.1200/CCI-25-00002', kind:'Clinical language', key:true,
    team:['梅奥诊所 Imon Banerjee 等与斯坦福大学、埃默里大学、加州大学戴维斯分校团队','Imon Banerjee and colleagues at Mayo Clinic, with Stanford, Emory and UC Davis collaborators'],
    summary:['用医学词汇解析器与微调 LLM，把有时间戳的乳腺癌自由文本病历转为纵向治疗路径，用于研究数据抽取。','A medical vocabulary parser and a fine-tuned LLM extracted longitudinal breast cancer treatment pathways from timestamped free-text notes for research use.'],
    limit:['病历里没有写、日期存在歧义或跨系统记录不一致时，仍需人工核对；抽取治疗史不是推荐未来治疗。','Missing documentation, ambiguous dates and inconsistent records still require manual review. Reconstructing treatment history is not recommending future treatment.']
  },
  {
    date:'2026-02-20', title:'CancerLLM: a large language model in cancer domain', author:'Mingchen Li et al.', venue:'npj Digital Medicine', doi:'10.1038/s41746-026-02441-8', kind:'Clinical language', key:false,
    team:['Rui Zhang 团队，明尼苏达大学双城分校，联合约翰斯·霍普金斯大学、UTHealth Houston 与耶鲁大学','Rui Zhang’s group at the University of Minnesota Twin Cities, with Johns Hopkins, UTHealth Houston and Yale collaborators'],
    summary:['将 7B 模型在覆盖 17 个癌种的临床病历和病理报告上继续训练，内部文本基准的表型抽取和诊断文字生成 F1 分别为 91.78% 和 86.81%。','A 7B model was adapted using notes and pathology reports covering 17 cancer types. Internal text benchmarks reported F1 of 91.78% for phenotype extraction and 86.81% for diagnosis generation.'],
    limit:['文本匹配分数不等于诊断准确率或临床获益，跨机构可迁移性需独立检验。','Text-matching scores are not clinical diagnostic accuracy or benefit. Transportability requires independent institutional validation.']
  },
  {
    date:'2026-04-29', title:'An agentic framework for autonomous scientific discovery in cancer pathology', author:'Florian Trost, Bide Zhang et al.', venue:'Nature Medicine', doi:'10.1038/s41591-026-04357-y', kind:'Research agents', key:true,
    team:['Yuri Tolkach 团队，科隆大学医院病理研究所及多中心合作','Yuri Tolkach’s group at the University Hospital Cologne Institute of Pathology and multicenter collaborators'],
    summary:['SPARK 将病理假设生成、编码与检验串联，在 5 个癌种、18 个队列、超过 5,400 例资料中检验生成的组织特征，也分析空间乳腺癌数据。','SPARK linked hypothesis generation, coding and testing, evaluating tissue features in 18 cohorts across five cancer types with over 5,400 patients, alongside a spatial breast cancer dataset.'],
    limit:['静态图像推断的演进模式并非直接观察；队列关联生成的是候选标志物，仍需独立、前瞻性验证。','Progression inferred from static images is not directly observed; cohort associations yield candidate biomarkers, not established prospective utility.']
  },
  {
    date:'2026-08-10', title:'Data Extraction From Oncology Imaging Reports by Large Language Models: A Comparative Accuracy Study', author:'Johannes M. Schwenke et al.', venue:'JCO Clinical Cancer Informatics', doi:'10.1200/CCI-26-00002', kind:'Clinical evaluation', key:false,
    team:['巴塞尔大学／巴塞尔大学医院肿瘤科与临床流行病学团队','University of Basel and University Hospital Basel medical oncology and clinical epidemiology teams'],
    summary:['从肿瘤影像报告文字抽取原发肿瘤类别、转移和疗效。400 份报告中 300 份用于测试；最佳本地 LLM 的主要终点准确率为 78.3%，低于人工比较组。','The study extracted oncology variables from report text, not from images. Of 400 reports, 300 formed the test set; the best local LLM achieved 78.3% on the primary accuracy endpoint, below the human comparator.'],
    limit:['单中心回顾性报告，结果依赖任务、语言与提示词；不能用来评价影像诊断本身。','This was a retrospective single-center text benchmark, sensitive to task, language and prompts, not a measure of image interpretation.']
  },
  {
    date:'2026-09-01', title:'SlideChat is a multimodal generative artificial intelligence assistant for whole-slide computational pathology across cancer types', author:'Ying Chen et al.', venue:'Nature Cancer', doi:'10.1038/s43018-026-01220-4', kind:'Vision–language', key:true,
    team:['通讯 Rongshan Yu、Junjun He、Yuanfeng Ji；厦门大学、上海交通大学、斯坦福大学等合作','Rongshan Yu, Junjun He and Yuanfeng Ji; collaborators from Xiamen University, Shanghai Jiao Tong University, Stanford and other institutions'],
    summary:['继 2025 年 CVPR 会议版后，扩展版支持整张切片问答与报告生成；5 个队列涵盖 31 个癌种，评测包括 8,836 道封闭题、129 道开放题和 3,149 份切片报告。','Following the CVPR 2025 version, the expanded SlideChat handled whole-slide questions and report generation. Evaluation spanned five cohorts, 31 cancer types, 8,836 closed-ended questions, 129 open-ended questions and 3,149 reports.'],
    limit:['评测是回顾性任务基准，不等于常规临床阅片的安全性、周转改善或诊断结局；生成报告需病理医师核验。','These were retrospective benchmarks, not proof of safety, faster turnaround or improved diagnosis in practice. Generated reports need pathologist review.']
  }
];
