const publications = [
    {
        title: "Breaking the Exploration Bottleneck: Rubric-Scaffolded Reinforcement Learning for General LLM Reasoning",
        authors: "Yang Zhou, Sunzhu Li, Shunyu Liu, Wenkai Fang, Jiale Zhao, Jingwen Yang, Jianwei Lv, Kongcheng Zhang, Yihe Zhou, Hengtong Lu, Wei Chen, Yan Xie, Mingli Song",
        venue: "arXiv preprint arXiv:2508.16949, 2025",
        arxiv: "https://arxiv.org/abs/2508.16949",
        code: "https://github.com/IANNXANG/RuscaRL"
    },
    {
        title: "VeriGUI: Verifiable Long-Chain GUI Dataset",
        authors: "Shunyu Liu, Minghao Liu, Huichi Zhou, Zhenyu Cui, Yang Zhou, Yuhao Zhou, Wendong Fan, Ge Zhang, Jiajun Shi, Weihao Xuan, Jiaxing Huang, Shuang Luo, Fang Wu, Heli Qi, Qingcheng Zeng, Ziqi Ren, Jialiang Gao, Jindi Lv, Junjie Wang, Aosong Feng, Heng Zhou, Wangchunshu Zhou, Zhenfei Yin, Wenlong Zhang, Guohao Li, Wenhao Yu, Irene Li, Lei Ma, Lei Bai, Qunshu Lin, Mingli Song, Dacheng Tao",
        venue: "arXiv preprint arXiv:2508.04026, 2025",
        arxiv: "https://arxiv.org/abs/2508.04026",
        code: "https://github.com/VeriGUI-Team/VeriGUI",
        data: "https://huggingface.co/datasets/2077AIDataFoundation/VeriGUI"
    },
    {
        title: "SeRL: Self-Play Reinforcement Learning for Large Language Models with Limited Data",
        authors: "Wenkai Fang, Shunyu Liu, Yang Zhou, Kongcheng Zhang, Tongya Zheng, Kaixuan Chen, Mingli Song, Dacheng Tao",
        venue: "Advances in Neural Information Processing Systems (<strong>NeurIPS</strong>), 2025",
        arxiv: "https://arxiv.org/abs/2505.20347",
        code: "https://github.com/wantbook-book/SeRL"
    },
    {
        title: "A Survey of Direct Preference Optimization",
        authors: "Shunyu Liu, Wenkai Fang, Zetian Hu, Junjie Zhang, Yang Zhou, Kongcheng Zhang, Rongcheng Tu, Ting-En Lin, Fei Huang, Mingli Song, Yongbin Li, Dacheng Tao",
        venue: "arXiv preprint arXiv:2503.11701, 2025",
        arxiv: "https://arxiv.org/abs/2503.11701",
        code: "https://github.com/liushunyu/awesome-direct-preference-optimization"
    },
    {
        title: "A Survey on Explainable Reinforcement Learning: Concepts, Algorithms, Challenges",
        authors: "Yunpeng Qing, Shunyu Liu, Jie Song, Yang Zhou, Kaixuan Chen, Huiqiong Wang, Mingli Song",
        venue: "arXiv preprint arXiv:2211.06665, 2022",
        arxiv: "https://arxiv.org/abs/2211.06665",
        code: "https://github.com/Plankson/awesome-explainable-reinforcement-learning"
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
        
        html += `
            <li>
                <strong>${pub.title}</strong><br/>
                ${highlightedAuthors}<br/>
                ${pub.venue}<br/>
                `;
        
        // Add links in the format [arXiv] [Code] or [Paper] [arXiv] [Code]
        const links = [];
        
        // Check if it's a published paper (not arXiv preprint)
        if (!pub.venue.includes('arXiv preprint')) {
            // For published papers, we could add a [Paper] link if we had the official paper URL
            // For now, we'll use arXiv as the main link
        }
        
        if (pub.arxiv) {
            links.push(`<a href="${pub.arxiv}" target="_blank" style="text-decoration: none">[arXiv]</a>`);
        }
        
        if (pub.code) {
            links.push(`<a href="${pub.code}" target="_blank" style="text-decoration: none">[Code]</a>`);
        }
        
        if (pub.data) {
            links.push(`<a href="${pub.data}" target="_blank" style="text-decoration: none">[Data]</a>`);
        }
        
        if (links.length > 0) {
            html += links.join(' ');
        }
        
        html += `
            </li>
        `;
    });
    
    publicationsContainer.innerHTML = html;
}

// Load publications when DOM is ready
document.addEventListener('DOMContentLoaded', renderPublications);