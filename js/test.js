const echarts = require('echarts');
const fs = require('fs');
const { JSDOM } = require('jsdom');

// 使用 jsdom 创建一个模拟的 DOM 环境
const dom = new JSDOM('<!DOCTYPE html><html><body><div id="main" style="width: 600px; height: 400px;"></div></body></html>');

// 设置全局 document 和 window
const document = dom.window.document;
const window = dom.window;

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
                }
            ]
        }
    ]
};

// 基于准备好的dom，初始化echarts实例
// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('main'));

// 配置项
var option = {
    tooltip: {
        trigger: 'item',
        triggerOn: 'click',
        enterable: true, //鼠标是否可进入提示框浮层中
        formatter: formatterHover, //修改鼠标悬停显示的内容
    },
    series: [{
        type: 'tree',
        data: [data],
        top: '1%',
        left: '7%',
        bottom: '1%',
        right: '20%',
        symbolSize: 7,
        label: {
            position: 'left',
            verticalAlign: 'middle',
            align: 'right',
            fontSize: 14
        },
        leaves: {
            label: {
                position: 'right',
                verticalAlign: 'middle',
                align: 'left'
            }
        },
        emphasis: {
            focus: 'descendant'
        },
        expandAndCollapse: true,
        animationDuration: 550,
        animationDurationUpdate: 750
    }]
};

// 设置图表选项
myChart.setOption(option);

// 格式化悬停内容
// 格式化悬停内容
function formatterHover(params) {
    var diseaseName = params.data.name;
    var description = params.data.description || '';
    var symptoms = params.data.symptoms ? "症状: " + params.data.symptoms.join(", ") : '';
    var treatments = params.data.treatments ? "治疗方法: " + params.data.treatments.join(", ") : '';

    // 返回显示内容
    return `
        <strong>${diseaseName}</strong><br>
        ${description}<br>
        ${symptoms}<br>
        ${treatments}
    `;
}


// 将图表渲染到文件（例如 PNG）
const canvas = myChart.getDom();
const buffer = canvas.toBuffer('image/png');
fs.writeFileSync('chart.png', buffer);

console.log("Chart has been saved to chart.png.");