const publications = [
    {
        title: "Breaking the Exploration Bottleneck: Rubric-Scaffolded Reinforcement Learning for General LLM Reasoning",
        authors: "Yang Zhou, Sunzhu Li, Shunyu Liu, Wenkai Fang, Jiale Zhao, Jingwen Yang, Jianwei Lv, Kongcheng Zhang, Yihe Zhou, Hengtong Lu, Wei Chen, Yan Xie, Mingli Song",
        venue: "arXiv preprint arXiv:2508.16949, 2025",
        arxiv: "https://arxiv.org/abs/2508.16949"
    },
    {
        title: "VeriGUI: Verifiable Long-Chain GUI Dataset",
        authors: "Shunyu Liu, Minghao Liu, Huichi Zhou, Zhenyu Cui, Yang Zhou, Yuhao Zhou, Wendong Fan, Ge Zhang, Jiajun Shi, Weihao Xuan, Jiaxing Huang, Shuang Luo, Fang Wu, Heli Qi, Qingcheng Zeng, Ziqi Ren, Jialiang Gao, Jindi Lv, Junjie Wang, Aosong Feng, Heng Zhou, Wangchunshu Zhou, Zhenfei Yin, Wenlong Zhang, Guohao Li, Wenhao Yu, Irene Li, Lei Ma, Lei Bai, Qunshu Lin, Mingli Song, Dacheng Tao",
        venue: "arXiv preprint arXiv:2508.04026, 2025",
        arxiv: "https://arxiv.org/abs/2508.04026"
    },
    {
        title: "SeRL: Self-Play Reinforcement Learning for Large Language Models with Limited Data",
        authors: "Wenkai Fang, Shunyu Liu, Yang Zhou, Kongcheng Zhang, Tongya Zheng, Kaixuan Chen, Mingli Song, Dacheng Tao",
        venue: "arXiv preprint arXiv:2505.20347, 2025",
        arxiv: "https://arxiv.org/abs/2505.20347"
    },
    {
        title: "A Survey of Direct Preference Optimization",
        authors: "Shunyu Liu, Wenkai Fang, Zetian Hu, Junjie Zhang, Yang Zhou, Kongcheng Zhang, Rongcheng Tu, Ting-En Lin, Fei Huang, Mingli Song, Yongbin Li, Dacheng Tao",
        venue: "arXiv preprint arXiv:2503.11701, 2025",
        arxiv: "https://arxiv.org/abs/2503.11701"
    },
    {
        title: "A Survey on Explainable Reinforcement Learning: Concepts, Algorithms, Challenges",
        authors: "Yunpeng Qing, Shunyu Liu, Jie Song, Yang Zhou, Kaixuan Chen, Huiqiong Wang, Mingli Song",
        venue: "arXiv preprint arXiv:2211.06665, 2022",
        arxiv: "https://arxiv.org/abs/2211.06665"
    }
];

// Function to render publications
function renderPublications() {
    const publicationsContainer = document.getElementById('publications-list');
    if (!publicationsContainer) return;
    
    let html = '';
    publications.forEach(pub => {
        // Highlight Yang Zhou's name
        const highlightedAuthors = pub.authors.replace(/Yang Zhou/g, '<strong>Yang Zhou</strong>');
        
        html += `
            <li>
                <strong><a href="${pub.arxiv}">${pub.title}</a></strong><br/>
                ${highlightedAuthors}<br/>
                <em>${pub.venue}</em>
            </li>
        `;
    });
    
    publicationsContainer.innerHTML = html;
}

// Load publications when DOM is ready
document.addEventListener('DOMContentLoaded', renderPublications);