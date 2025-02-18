var data = {
    "name": "疾病分类",
    "children": [
        {
            "name": "癌症",
            "children": [
                {
                    "name": "肺癌",
                    "description": "肺部的恶性肿瘤。",
                    "symptoms": ["咳嗽", "胸痛", "呼吸急促"],
                    "treatments": ["化疗", "放疗", "手术"],
                    "value": 1000
                },
                {
                    "name": "乳腺癌",
                    "description": "女性乳腺的恶性肿瘤。",
                    "symptoms": ["乳房肿块", "乳头溢液", "腋窝肿大"],
                    "treatments": ["手术", "化疗", "靶向治疗"],
                    "value": 800
                },
                {
                    "name": "胃癌",
                    "description": "胃部的恶性肿瘤。",
                    "symptoms": ["上腹痛", "恶心呕吐", "体重减轻"],
                    "treatments": ["手术", "化疗", "放疗"],
                    "value": 600
                },
                {
                    "name": "肝癌",
                    "description": "肝脏的恶性肿瘤。",
                    "symptoms": ["食欲减退", "腹痛", "黄疸"],
                    "treatments": ["手术", "化疗", "肝移植"],
                    "value": 500
                }
            ]
        },
        {
            "name": "心脏病",
            "children": [
                {
                    "name": "冠心病",
                    "description": "冠状动脉出现斑块或血栓，导致心脏缺氧。",
                    "symptoms": ["胸痛", "呼吸困难", "乏力"],
                    "treatments": ["药物", "冠脉介入", "搭桥手术"],
                    "value": 500
                },
                {
                    "name": "高血压",
                    "description": "长期高血压导致心脏负担过重。",
                    "symptoms": ["头痛", "头晕", "耳鸣"],
                    "treatments": ["降压药物", "生活方式改善"],
                    "value": 700
                },
                {
                    "name": "心力衰竭",
                    "description": "心脏不能有效地泵血以满足身体需求。",
                    "symptoms": ["呼吸急促", "浮肿", "疲劳"],
                    "treatments": ["药物", "手术", "心脏移植"],
                    "value": 400
                }
            ]
        },
        {
            "name": "传染病",
            "children": [
                {
                    "name": "流感",
                    "description": "由流感病毒引起的呼吸道疾病。",
                    "symptoms": ["发热", "咳嗽", "肌肉酸痛"],
                    "treatments": ["抗病毒药物", "疫苗预防"],
                    "value": 200
                },
                {
                    "name": "新冠病毒",
                    "description": "由SARS-CoV-2病毒引起的传染病。",
                    "symptoms": ["发热", "干咳", "呼吸困难"],
                    "treatments": ["抗病毒药物", "支持治疗", "疫苗预防"],
                    "value": 300
                },
                {
                    "name": "乙型肝炎",
                    "description": "由乙型肝炎病毒引起的肝脏疾病。",
                    "symptoms": ["食欲不振", "黄疸", "恶心呕吐"],
                    "treatments": ["抗病毒药物", "肝移植"],
                    "value": 400
                },
                {
                    "name": "结核",
                    "description": "由结核分枝分枝分枝分枝分枝分枝分枝分枝分枝分枝分枝分枝细菌引起的慢性呼吸道感染。",
                    "symptoms": ["持续咳嗽", "胸痛", "发热"],
                    "treatments": ["抗生素", "全程治疗"],
                    "value": 250
                }
            ]
        },
        {
            "name": "糖尿病",
            "children": [
                {
                    "name": "1型糖尿病",
                    "description": "胰岛素分泌不足，通常发生在儿童或青少年。",
                    "symptoms": ["口渴", "多尿", "体重减轻"],
                    "treatments": ["胰岛素注射", "饮食管理", "运动"],
                    "value": 400
                },
                {
                    "name": "2型糖尿病",
                    "description": "胰岛素抵抗，通常与肥胖和不良生活方式相关。",
                    "symptoms": ["口渴", "疲劳", "视力模糊"],
                    "treatments": ["口服降糖药", "胰岛素", "生活方式改变"],
                    "value": 600
                },
                {
                    "name": "妊娠期糖尿病",
                    "description": "妊娠期出现的糖尿病，通常在分娩后恢复正常。",
                    "symptoms": ["口渴", "多尿", "疲劳"],
                    "treatments": ["饮食管理", "胰岛素治疗"],
                    "value": 300
                }
            ]
        },
        {
            "name": "神经系统疾病",
            "children": [
                {
                    "name": "阿尔茨海默病",
                    "description": "一种神经退行性疾病，影响记忆和认知功能。",
                    "symptoms": ["记忆丧失", "语言困难", "性格变化"],
                    "treatments": ["药物治疗", "认知训练", "支持治疗"],
                    "value": 500
                },
                {
                    "name": "帕金森病",
                    "description": "影响运动控制的神经系统疾病。",
                    "symptoms": ["震颤", "肌肉僵硬", "动作迟缓"],
                    "treatments": ["药物治疗", "深脑刺激", "物理治疗"],
                    "value": 700
                },
                {
                    "name": "中风",
                    "description": "脑血管阻塞或出血导致的突发性神经损害。",
                    "symptoms": ["突发偏瘫", "语言障碍", "视觉障碍"],
                    "treatments": ["抗凝治疗", "康复治疗", "手术"],
                    "value": 600
                }
            ]
        }
    ]
};


// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('main'));


var option = {
    tooltip: {
        trigger: 'item',
        triggerOn: 'mousemove',
        enterable: true,
        formatter: function(params) {
            var diseaseName = params.data.name;
            var description = params.data.description || '';
            var symptoms = params.data.symptoms ? "症状: " + params.data.symptoms.join(", ") : '';
            var treatments = params.data.treatments ? "治疗方法: " + params.data.treatments.join(", ") : '';

            return `
                <div style="white-space: normal; word-wrap: break-word; text-align: center; max-width: 300px;">
                    <strong>${diseaseName}</strong><br>
                    ${description}<br>
                    ${symptoms}<br>
                    ${treatments}
                </div>
            `;
        },
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        padding: [10, 15],
        borderRadius: 5,
        textStyle: {
            color: '#fff',
            fontSize: 14
        },
        confine: true,
        maxWidth: 300
    },
    series: [{
        type: 'tree',
        data: [data],
        top: '1%',
        left: '7%',
        bottom: '1%',
        right: '20%',
        symbolSize: 10,
        label: {
            position: 'left',
            verticalAlign: 'middle',
            align: 'right',
            fontSize: 16,  // 设置字体大小
            color: '#white',  // 设置字体颜色（橙色）
            fontWeight: 'bold'  // 设置字体加粗
        },
        leaves: {
            label: {
                position: 'right',
                verticalAlign: 'middle',
                align: 'left',
                fontSize: 16,  // 设置字体大小
                color: 'white',  // 设置字体颜色（橙色）
                fontWeight: 'bold'  // 设置字体加粗
            }
        },
        emphasis: {
            focus: 'descendant'
        },
        expandAndCollapse: true,
        animationDuration: 550,
        animationDurationUpdate: 750,
        initialTreeDepth: 1
    }]
};

// 应用配置
myChart.setOption(option);

