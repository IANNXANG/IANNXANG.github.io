const publications = [
    {
        title: "SpatialCLI: Learning to Reason With Spatial Tools, Then Without Them",
        authors: "Yang Zhou, Zixuan Huang, Sunzhu Li, Zhuo Yang, Chen Zhang, Shunian Chen, Caijun Yan, Jianyao Xu, Shunyu Liu, Weijie Fu, Peiliang Li, Xiaozhi Chen, Yuxiang Cai",
        venue: "arXiv preprint arXiv:2607.27703, 2026",
        arxiv: "https://arxiv.org/abs/2607.27703",
        code: "https://github.com/IANNXANG/SpatialCLI",
        data: "https://huggingface.co/datasets/ZYT-MFM/SpatialCLI-Data",
        image: "assets/publications/spatialcli.webp"
    },
    {
        title: "Replay Failures as Successes: Sample-Efficient Reinforcement Learning for Instruction Following",
        authors: "Kongcheng Zhang, Qi Yao, Shunyu Liu, Wenjian Zhang, Min Cen, Yang Zhou, Wenkai Fang, Yiru Zhao, Baisheng Lai, Mingli Song",
        venue: "International Conference on Machine Learning (<strong>ICML</strong>), 2026",
        arxiv: "https://arxiv.org/abs/2512.23457",
        code: "https://github.com/sastpg/HIR",
        image: "assets/publications/hir.webp"
    },
    {
        title: "RubricHub: A Comprehensive and Highly Discriminative Rubric Dataset via Automated Coarse-to-Fine Generation",
        authors: "Sunzhu Li, Jiale Zhao, Miteto Wei, Huimin Ren, Yang Zhou, Jingwen Yang, Shunyu Liu, Kaike Zhang, Wei Chen",
        venue: "Annual Meeting of the Association for Computational Linguistics (<strong>ACL</strong>), 2026",
        arxiv: "https://arxiv.org/abs/2601.08430",
        code: "https://github.com/teqkilla/RubricHub",
        data: "https://huggingface.co/datasets/sojuL/RubricHub_v1",
        image: "assets/publications/rubrichub.webp"
    },
    {
        title: "Breaking the Exploration Bottleneck: Rubric-Scaffolded Reinforcement Learning for General LLM Reasoning",
        authors: "Yang Zhou, Sunzhu Li, Shunyu Liu, Wenkai Fang, Kongcheng Zhang, Jiale Zhao, Jingwen Yang, Yihe Zhou, Jianwei Lv, Tongya Zheng, Hengtong Lu, Wei Chen, Yan Xie, Mingli Song",
        venue: "International Conference on Machine Learning (<strong>ICML</strong>), 2026",
        arxiv: "https://arxiv.org/abs/2508.16949",
        code: "https://github.com/IANNXANG/RuscaRL",
        image: "assets/publications/ruscarl.webp"
    },
    {
        title: "VeriGUI: Verifiable Long-Chain GUI Dataset",
        authors: "Shunyu Liu, Minghao Liu, Huichi Zhou, Zhenyu Cui, Yang Zhou, Yuhao Zhou, Wendong Fan, Ge Zhang, Jiajun Shi, Weihao Xuan, Jiaxing Huang, Shuang Luo, Fang Wu, Heli Qi, Qingcheng Zeng, Ziqi Ren, Jialiang Gao, Jindi Lv, Junjie Wang, Aosong Feng, Heng Zhou, Wangchunshu Zhou, Zhenfei Yin, Wenlong Zhang, Guohao Li, Wenhao Yu, Irene Li, Lei Ma, Lei Bai, Qunshu Lin, Mingli Song, Dacheng Tao",
        venue: "arXiv preprint arXiv:2508.04026, 2025",
        arxiv: "https://arxiv.org/abs/2508.04026",
        code: "https://github.com/VeriGUI-Team/VeriGUI",
        data: "https://huggingface.co/datasets/2077AIDataFoundation/VeriGUI",
        image: "assets/publications/verigui.webp"
    },
    {
        title: "SeRL: Self-Play Reinforcement Learning for Large Language Models with Limited Data",
        authors: "Wenkai Fang, Shunyu Liu, Yang Zhou, Kongcheng Zhang, Tongya Zheng, Kaixuan Chen, Mingli Song, Dacheng Tao",
        venue: "Conference on Neural Information Processing Systems (<strong>NeurIPS</strong>), 2025",
        arxiv: "https://arxiv.org/abs/2505.20347",
        code: "https://github.com/wantbook-book/SeRL",
        image: "assets/publications/serl.webp"
    },
    {
        title: "A Survey of Direct Preference Optimization",
        authors: "Shunyu Liu, Wenkai Fang, Zetian Hu, Junjie Zhang, Yang Zhou, Kongcheng Zhang, Rongcheng Tu, Ting-En Lin, Fei Huang, Mingli Song, Yongbin Li, Dacheng Tao",
        venue: "arXiv preprint arXiv:2503.11701, 2025",
        arxiv: "https://arxiv.org/abs/2503.11701",
        code: "https://github.com/liushunyu/awesome-direct-preference-optimization",
        image: "assets/publications/dpo-survey.webp"
    },
    {
        title: "A Survey on Explainable Reinforcement Learning: Concepts, Algorithms, Challenges",
        authors: "Yunpeng Qing, Shunyu Liu, Jie Song, Yang Zhou, Kaixuan Chen, Huiqiong Wang, Mingli Song",
        venue: "arXiv preprint arXiv:2211.06665, 2022",
        arxiv: "https://arxiv.org/abs/2211.06665",
        code: "https://github.com/Plankson/awesome-explainable-reinforcement-learning",
        image: "assets/publications/xrl-survey.webp"
    }
];

// Function to render publications
function renderPublications() {
    const publicationsContainer = document.getElementById('publications-list');
    if (!publicationsContainer) return;
    
    let html = '';
    publications.forEach(pub => {
        // Highlight Yang Zhou's name with bold and underline
        const highlightedAuthors = pub.authors.replace(/Yang Zhou/g, '<strong><u>Yang Zhou</u></strong>');
        
        const titleMarkup = pub.arxiv
            ? `<a class="publication-title" href="${pub.arxiv}" target="_blank" rel="noopener"><strong>${pub.title}</strong></a>`
            : `<span class="publication-title"><strong>${pub.title}</strong></span>`;

        const imageMarkup = pub.image
            ? `<a class="publication-figure-link" href="${pub.arxiv || pub.image}" target="_blank" rel="noopener" aria-label="View ${pub.title}">
                    <img class="publication-figure" src="${pub.image}" alt="Method overview for ${pub.title}" loading="lazy" decoding="async" />
               </a>`
            : '';

        html += `
            <li class="publication-card">
                ${imageMarkup}
                <div class="publication-content">
                    ${titleMarkup}
                    <div class="publication-authors">${highlightedAuthors}</div>
                    <div class="publication-venue">${pub.venue}</div>
                `;
        
        // Add links in the format [arXiv] [Code] or [Paper] [arXiv] [Code]
        const links = [];
        
        // Check if it's a published paper (not arXiv preprint)
        if (!pub.venue.includes('arXiv preprint')) {
            // For published papers, we could add a [Paper] link if we had the official paper URL
            // For now, we'll use arXiv as the main link
        }
        
        if (pub.arxiv) {
            links.push(`<a class="publication-link" href="${pub.arxiv}" target="_blank" rel="noopener">arXiv</a>`);
        }
        
        if (pub.code) {
            links.push(`<a class="publication-link" href="${pub.code}" target="_blank" rel="noopener">Code</a>`);
        }
        
        if (pub.data) {
            links.push(`<a class="publication-link" href="${pub.data}" target="_blank" rel="noopener">Data</a>`);
        }
        
        if (links.length > 0) {
            html += `<div class="publication-links">${links.join('')}</div>`;
        }
        
        html += `
                </div>
            </li>
        `;
    });
    
    publicationsContainer.innerHTML = html;
}

// Load publications when DOM is ready
document.addEventListener('DOMContentLoaded', renderPublications);
