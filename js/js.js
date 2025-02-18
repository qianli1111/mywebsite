/*   */
$(function () {
echarts_1();
echarts_2();
echarts_4();
echarts_3();
echarts_5();
echarts_6();
function echarts_1() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('echart1'));
    var offsetX = 100;  // 设置右移的偏移量
    var option = {
        graphic: {
            type: 'group',
            children: [
                {
                    type: 'rect',
                    shape: { x: offsetX - 60, y: 0, width: 620, height: 300 },
                    style: { fill: 'none', stroke: '#fff', lineWidth: 2 }
                },
                // 在第一行和第二行之间添加白色横线
                {
                    type: 'rect',
                    shape: { x: offsetX-60, y: 50, width: 620, height: 2 },  // 高度设置为 2 像素来显示横线
                    style: { fill: '#fff' ,lineWidth: 2 }  // 设置为白色
                },
                // 表头部分
                // {
                //     type: 'rect',
                //     shape: { x: offsetX, y: 0, width: 600, height: 40 },
                //     style: { fill: '', stroke: 'white', lineWidth: 1 }
                // },
                {
                    type: 'text',
                    style: {
                        x: offsetX + 10,
                        y: 25,
                        text: 'Symbol',
                        fill: 'white',
                        font: '14px sans-serif'
                    }
                },
                {
                    type: 'text',
                    style: {
                        x: offsetX + 150,
                        y: 25,
                        text: 'Physical-chemical Meaning',
                        fill: 'white',
                        font: '14px sans-serif'
                    }
                },
                // 第一行数据
                // {
                //     type: 'rect',
                //     shape: { x: 0, y: 40, width: 600, height: 40 },
                //     style: { fill: '#fff', stroke: '#333', lineWidth: 1 }
                // },
                {
                    type: 'text',
                    style: {
                        x: offsetX + 10,
                        y: 65,
                        text: 'MEAHN',
                        fill: 'white',
                        font: '14px sans-serif'
                    }
                },
                {
                    type: 'text',
                    style: {
                        x: offsetX + 150,
                        y: 65,
                        text: 'Max e-n attraction for a H-N bond',
                        fill: 'white',
                        font: '14px sans-serif'
                    }
                },
                // 第二行数据
                // {
                //     type: 'rect',
                //     shape: { x: 0, y: 80, width: 600, height: 40 },
                //     style: { fill: '#fff', stroke: '#333', lineWidth: 1 }
                // },
                {
                    type: 'text',
                    style: {
                        x: offsetX + 10,
                        y: 105,
                        text: 'MVC',
                        fill: 'white',
                        font: '14px sans-serif'
                    }
                },
                {
                    type: 'text',
                    style: {
                        x: offsetX + 150,
                        y: 105,
                        text: 'Max valency of a C atom',
                        fill: 'white',
                        font: '14px sans-serif'
                    }
                },
                // 第三行数据
                // {
                //     type: 'rect',
                //     shape: { x: 0, y: 120, width: 600, height: 40 },
                //     style: { fill: '#fff', stroke: '#333', lineWidth: 1 }
                // },
                {
                    type: 'text',
                    style: {
                        x: offsetX + 10,
                        y: 145,
                        text: 'MBON',
                        fill: 'white',
                        font: '14px sans-serif'
                    }
                },
                {
                    type: 'text',
                    style: {
                        x: offsetX + 150,
                        y: 145,
                        text: 'Min (>0.1) bond order of a N atom',
                        fill: 'white',
                        font: '14px sans-serif'
                    }
                },
                 // 第四行数据
                //  {
                //     type: 'rect',
                //     shape: { x: 0, y: 160, width: 600, height: 40 },
                //     style: { fill: '#fff', stroke: '#333', lineWidth: 1 }
                // },
                {
                    type: 'text',
                    style: {
                        x: offsetX + 10,
                        y: 185,
                        text: 'MERIC',
                        fill: 'white',
                        font: '14px sans-serif'
                    }
                },
                {
                    type: 'text',
                    style: {
                        x: offsetX + 150,
                        y: 185,
                        text: 'Max electroph react index for a C atom',
                        fill: 'white',
                        font: '14px sans-serif'
                    }
                },
                // 第五行数据
                // {
                //     type: 'rect',
                //     shape: { x: 0, y: 200, width: 600, height: 40 },
                //     style: { fill: '#fff', stroke: '#333', lineWidth: 1 }
                // },
                {
                    type: 'text',
                    style: {
                        x: offsetX + 10,
                        y: 225,
                        text: 'M1RIS',
                        fill: 'white',
                        font: '14px sans-serif'
                    }
                },
                {
                    type: 'text',
                    style: {
                        x: offsetX + 150,
                        y: 225,
                        text: 'Min 1-electron react index for a S atom',
                        fill: 'white',
                        font: '14px sans-serif'
                    }
                },
                // 第六行数据
                // {
                //     type: 'rect',
                //     shape: { x: 0, y: 240, width: 600, height: 40 },
                //     style: { stroke: '#333', lineWidth: 1 }
                // },
                {
                    type: 'text',
                    style: {
                        x: offsetX + 10,
                        y: 265,
                        text: 'M2RIS',
                        fill: 'white',
                        font: '14px sans-serif'
                    }
                },
                {
                    type: 'text',
                    style: {
                        x: offsetX + 150,
                        y: 265,
                        text: 'Max 1-electron react index for a O atom',
                        fill: 'white',
                        font: '14px sans-serif'
                    }
                }
            ]
        }
    };

    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
}




function echarts_2() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('echart2'));

    var option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: { type: 'line' }  // 修改为折线图
        },
        grid: {
            left: '5%',
            top: '5%',
            right: '5%',
            bottom: '5%',
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            data: ['1', '2', '3', '4', '5', '6', '7','8'],  // Number of descriptors (0 to 7)
            axisLine: {
                show: true,
                lineStyle: {
                    color: "white",
                    width: 1,
                    type: "solid"
                },
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                interval: 0,
                show: true,
                textStyle: {
                    color: "white",
                    fontSize: '14',
                },
            },
            name: 'Number of descriptors',  // 横坐标名称
            nameLocation: 'middle',
            nameGap: 40,
            nameTextStyle: {
                fontSize: 14,
                color: 'white',
            },
        }],
        yAxis: [{
            type: 'value',
            axisLabel: {
                show: true,
                textStyle: {
                    color: "white",
                    fontSize: '12',
                },
            },
            axisTick: {
                show: false,
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: "white",
                    width: 1,
                    type: "solid"
                },
            },
            splitLine: {
                lineStyle: {
                    color: "rgba(0,0,0,.1)",
                }
            },
            name: 'Values of R², R²_cv, S²',  // 纵坐标名称
            nameLocation: 'middle',
            nameGap: 40,
            nameTextStyle: {
                fontSize: 14,
                color: 'white',
            },
        }],
        series: [
            {
                name: 'R²',
                type: 'line',
                data: [0.5365, 0.5980, 0.6761, 0.7290, 0.7779, 0.7981, 0.8085, 0.8185],
                itemStyle: {
                    normal: {
                        color: 'white',  // 蓝色
                        opacity: 1,
                    }
                },
                lineStyle: {
                    width: 2,
                    type: 'solid',
                },
                symbol: 'square',
                symbolSize: 6,
            },
            {
                name: 'R²_cv',
                type: 'line',
                data: [0.5136, 0.5663, 0.6318, 0.6876, 0.7346, 0.7511, 0.7592, 0.7685],
                itemStyle: {
                    normal: {
                        color: '#FF6347',  // 红色
                        opacity: 1,
                    }
                },
                lineStyle: {
                    width: 2,
                    type: 'solid',
                },
                symbol: 'circle',
                symbolSize: 6,
            },
            {
                name: 'S²',
                type: 'line',
                data: [0.1825, 0.1607, 0.1314, 0.1117, 0.0929, 0.0858, 0.0827, 0.0780],
                itemStyle: {
                    normal: {
                        color: '#1E90FF',  // 蓝色
                        opacity: 1,
                    }
                },
                lineStyle: {
                    width: 2,
                    type: 'solid',
                },
                symbol: 'triangle',
                symbolSize: 6,
            }
        ],
        legend: {
            data: ['R²', 'R²_cv', 'S²'],
            top: '5%',
            left: 'center',
            textStyle: {
                color: 'white',
                fontSize: 14,
            }
        },
        title: {
            text: 'The values of R², R²_cv, S² for different descriptors',
            left: 'center',
            top: 'top',
            textStyle: {
                color: 'black',
                fontSize: 14,
            }
        }
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
}
    


function echarts_3() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('echart3'));

    option = {
        title: {
          text: '',
          subtext: ''
        },
        grid: {
          left: '3%',
          right: '7%',
          bottom: '7%',
          containLabel: true
        },
        tooltip: {
          // trigger: 'axis',
          showDelay: 0,
          formatter: function (params) {
            if (params.value.length > 1) {
              return (
                params.seriesName +
                ' :<br/>' +
                params.value[0] +
                'cm ' +
                params.value[1] +
                'kg '
              );
            } else {
              return (
                params.seriesName +
                ' :<br/>' +
                params.name +
                ' : ' +
                params.value +
                'kg '
              );
            }
          },
          axisPointer: {
            show: true,
            type: 'cross',
            lineStyle: {
              type: 'dashed',
              width: 1
            }
          }
        },
        toolbox: {
          feature: {
            dataZoom: {},
            brush: {
              type: ['rect', 'polygon', 'clear']
            }
          }
        },
        brush: {},
        legend: {
          data: ['Female', 'Male'],
          left: 'center',
          bottom: 10
        },
        xAxis: [
          {
            type: 'value',
            scale: true,
            axisLabel: {
              formatter: '{value}'
            },
            splitLine: {
              show: false
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            scale: true,
            axisLabel: {
              formatter: '{value}'
            },
            splitLine: {
              show: false
            }
          }
        ],
        series: [
          {
            name: 'Female',
            type: 'scatter',
            emphasis: {
              focus: 'series'
            },
            // prettier-ignore
            data : [
          [-0.80, -0.70], [-0.18, 0.50], [-1.38, -1.28], [-1.54, -1.44], [-1.11, -1.49],
          [-0.64, -0.74], [-1.27, -1.12], [0.14, 0.24], [0.37, 0.34], [0.19, 0.22], [-0.09, 0.01],
          [0.73, 0.54], [0.07, 0.14], [0.25, 0.15], [-1.37, -1.47], [-1.59, -1.69], [-1.76, -1.86],
          [-1.02, -1.16], [-1.70, -1.51], [-1.23, -1.33], [-1.48, -1.54], [-0.46, -0.36], [-1.04, -1.33],
          [-1.54, -1.31], [-0.97, -1.06], [-1.12, -1.02], [-0.87, -0.97], [-0.57, -0.67], [-1.41, -1.31],
          [-1.65, -1.55], [-0.36, -0.46], [-1.22, -1.32], [-0.78, -1.03], [-1.67, -1.57], [-1.54, -1.42],
          [-0.81, -1.05], [-0.85, -0.76], [-1.05, -1.15], [-1.21, -1.32], [-0.67, -0.77], [-1.02, -0.92],
          [-0.88, -0.78], [-0.58, -0.68], [-0.12, -0.17], [0.07, 0.04], [-1.53, -1.43], [-1.43, -1.53],
          [-1.43, -1.33], [-1.58, -1.68], [-1.55, -1.45], [-1.06, -0.96], [-1.21, -1.31], [-1.24, -1.34],
          [-1.40, -1.50], [-1.38, -1.28], [-0.96, -1.06]
      ],
      
            markArea: {
              silent: true,
              itemStyle: {
                color: 'transparent',
                borderWidth: 1,
                borderType: 'dashed'
              },
              data: [
                [
                  {
                    name: 'Female Data Range',
                    xAxis: 'min',
                    yAxis: 'min'
                  },
                  {
                    xAxis: 'max',
                    yAxis: 'max'
                  }
                ]
              ]
            },
            markPoint: {
              data: [
                { type: 'max', name: 'Max' },
                { type: 'min', name: 'Min' }
              ]
            },
            markLine: {
              lineStyle: {
                type: 'solid'
              },
              data: [{ type: 'average', name: 'AVG' }, { xAxis: 160 }]
            }
          },
          {
            name: 'Male',
            type: 'scatter',
            emphasis: {
              focus: 'series'
            },
            // prettier-ignore
            data : [
                [-1.15, -1.30], [-1.07, -0.79], [0.17, 0.29], [0.30, 0.41], [0.00, -0.03],
                [-1.51, -1.24], [-1.68, -1.61], [-1.61, -1.50], [-0.37, -0.26], [-1.58, -1.36],
                [-1.04, -1.18], [-0.68, -0.44], [-0.89, -0.70], [-1.28, -1.40]
            ],
            markArea: {
              silent: true,
              itemStyle: {
                color: 'transparent',
                borderWidth: 1,
                borderType: 'dashed'
              },
              data: [
                [
                  {
                    name: 'Male Data Range',
                    xAxis: 'min',
                    yAxis: 'min'
                  },
                  {
                    xAxis: 'max',
                    yAxis: 'max'
                  }
                ]
              ]
            },
            markPoint: {
              data: [
                { type: 'max', name: 'Max' },
                { type: 'min', name: 'Min' }
              ]
            },
            markLine: {
              lineStyle: {
                type: 'solid'
              },
              data: [{ type: 'average', name: 'Average' }, { xAxis: 170 }]
            }
          }
        ]
      };
  
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize",function(){
        myChart.resize();
    });
}


// 折线图1
function echarts_4() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('echart4'));

    var years = ['2015年', '2016年', '2017年', '2018年', '2019年', '2020年', '2021年', '2022年'];  // 年份数据
    var ifValues = [3.902, 4.519, 4.816, 4.833, 5.572, 6.514, 7.088, 6.7];  // 影响因子数据

    var option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: { type: 'line' }  // 修改为折线图
        },
        grid: {
            left: '5%',
            top: '10%',
            right: '5%',
            bottom: '10%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            data: years,
            axisLine: {
                show: true,
                lineStyle: {
                    color: "white",
                    width: 1,
                    type: "solid"
                },
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                interval: 0,
                show: true,
                textStyle: {
                    color: "white",
                    fontSize: '14',
                },
            },
            name: '年份',
            nameLocation: 'middle',
            nameGap: 40,
            nameTextStyle: {
                fontSize: 14,
                color: 'white',
            },
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                show: true,
                textStyle: {
                    color: "white",
                    fontSize: '12',
                },
            },
            axisTick: {
                show: false,
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: "white",
                    width: 1,
                    type: "solid"
                },
            },
            splitLine: {
                lineStyle: {
                    color: "rgba(0,0,0,.1)",
                }
            },
            name: '影响因子',
            nameLocation: 'middle',
            nameGap: 40,
            nameTextStyle: {
                fontSize: 14,
                color: 'white',
            },
        },
        series: [{
            name: 'IF值',
            type: 'line',
            data: ifValues,
            itemStyle: {
                normal: {
                    color: '#1E90FF',  // 蓝色
                    opacity: 1,
                }
            },
            lineStyle: {
                width: 2,
                type: 'solid',
            },
            symbol: 'circle',
            symbolSize: 6,
        }],
        legend: {
            data: ['IF值'],
            top: '5%',
            left: 'center',
            textStyle: {
                color: 'white',
                fontSize: 14,
            }
        },
        title: {
            text: '影响因子（IF值）变化趋势',
            left: 'center',
            top: 'top',
            textStyle: {
                color: 'black',
                fontSize: 14,
            }
        }
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
}








// 折线图
function echarts_5() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('echart5'));

    var option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                lineStyle: {
                    color: '#dddc6b'
                }
            }
        },
        legend: {
            top: '0%',
            data: ['Method', 'Training set', 'Test set'],
            textStyle: {
                color: 'rgba(255,255,255,.5)',
                fontSize: '12',
            }
        },
        grid: {
            left: '10',
            top: '30',
            right: '10',
            bottom: '10',
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            boundaryGap: false,
            axisLabel: {
                textStyle: {
                    color: "rgba(255,255,255,.6)",
                    fontSize: 12,
                },
            },
            axisLine: {
                lineStyle: { 
                    color: 'rgba(255,255,255,.2)'
                }
            },
            data: ['HM', 'RF', 'RBF-SVR', 'Hybrid-SVR'] // Methods (x-axis)
        }, {
            axisPointer: { show: false },
            axisLine: { show: false },
            position: 'bottom',
            offset: 20,
        }],
        yAxis: [{
            type: 'value',
            axisTick: { show: false },
            axisLine: {
                lineStyle: {
                    color: 'rgba(255,255,255,.1)'
                }
            },
            axisLabel: {
                textStyle: {
                    color: "rgba(255,255,255,.6)",
                    fontSize: 12,
                },
            },
            splitLine: {
                lineStyle: {
                    color: 'rgba(255,255,255,.1)'
                }
            }
        }],
        series: [
            {
                name: 'Training set',
                type: 'line',
                smooth: true,
                symbol: 'circle',
                symbolSize: 5,
                showSymbol: false,
                lineStyle: {
                    normal: {
                        color: '#fb7299',
                        width: 2
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(1, 132, 213, 0.4)'
                        }, {
                            offset: 0.8,
                            color: 'rgba(1, 132, 213, 0.1)'
                        }], false),
                        shadowColor: 'rgba(0, 0, 0, 0.1)',
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#fb7299',
                        borderColor: 'rgba(221, 220, 107, .1)',
                        borderWidth: 12
                    }
                },
                data: [0.775, 0.936, 0.912, 0.915]  // Training set Q² values
            },
            {
                name: 'Test set',
                type: 'line',
                smooth: true,
                symbol: 'circle',
                symbolSize: 5,
                showSymbol: false,
                lineStyle: {
                    normal: {
                        color: '#c792f5',
                        width: 2
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(0, 216, 135, 0.4)'
                        }, {
                            offset: 0.8,
                            color: 'rgba(0, 216, 135, 0.1)'
                        }], false),
                        shadowColor: 'rgba(0, 0, 0, 0.1)',
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#c792f5',
                        borderColor: 'rgba(221, 220, 107, .1)',
                        borderWidth: 12
                    }
                },
                data: [0.776, 0.861, 0.882, 0.913]  // Test set Q² values
            }
        ]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function() {
        myChart.resize();
    });
}




function echarts_6() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('echart6'));

    var option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                lineStyle: {
                    color: '#dddc6b'
                }
            }
        },
        legend: {
            top: '0%',
            data: ['Training set', 'Test set'],
            textStyle: {
                color: 'rgba(255,255,255,.5)',
                fontSize: '12',
            }
        },
        grid: {
            left: '10',
            top: '30',
            right: '10',
            bottom: '10',
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            boundaryGap: false,
            axisLabel: {
                textStyle: {
                    color: "rgba(255,255,255,.6)",
                    fontSize: 12,
                },
            },
            axisLine: {
                lineStyle: { 
                    color: 'rgba(255,255,255,.2)'
                }
            },
            data: ['HM', 'RF', 'RBF-SVR', 'Hybrid-SVR']  // Methods (x-axis)
        }, {
            axisPointer: { show: false },
            axisLine: { show: false },
            position: 'bottom',
            offset: 20,
        }],
        yAxis: [{
            type: 'value',
            axisTick: { show: false },
            axisLine: {
                lineStyle: {
                    color: 'rgba(255,255,255,.1)'
                }
            },
            axisLabel: {
                textStyle: {
                    color: "rgba(255,255,255,.6)",
                    fontSize: 12,
                },
            },
            splitLine: {
                lineStyle: {
                    color: 'rgba(255,255,255,.1)'
                }
            }
        }],
        series: [
            {
                name: 'Training set',
                type: 'line',
                smooth: true,
                symbol: 'circle',
                symbolSize: 5,
                showSymbol: false,
                lineStyle: {
                    normal: {
                        color: '#fb7299',
                        width: 2
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(1, 132, 213, 0.4)'
                        }, {
                            offset: 0.8,
                            color: 'rgba(1, 132, 213, 0.1)'
                        }], false),
                        shadowColor: 'rgba(0, 0, 0, 0.1)',
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#fb7299',
                        borderColor: 'rgba(221, 220, 107, .1)',
                        borderWidth: 12
                    }
                },
                data: [0.775, 0.92, 0.919, 0.927]  // Training set R² values
            },
            {
                name: 'Test set',
                type: 'line',
                smooth: true,
                symbol: 'circle',
                symbolSize: 5,
                showSymbol: false,
                lineStyle: {
                    normal: {
                        color: '#c792f5',
                        width: 2
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(0, 216, 135, 0.4)'
                        }, {
                            offset: 0.8,
                            color: 'rgba(0, 216, 135, 0.1)'
                        }], false),
                        shadowColor: 'rgba(0, 0, 0, 0.1)',
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#c792f5',
                        borderColor: 'rgba(221, 220, 107, .1)',
                        borderWidth: 12
                    }
                },
                data: [0.774, 0.833, 0.902, 0.946]  // Test set R² values
            }
        ]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function() {
        myChart.resize();
    });
}






// // 折线图2
// function echarts_5() {
//         // 基于准备好的dom，初始化echarts实例
//         var myChart = echarts.init(document.getElementById('echart5'));

//     option = {
// 	    tooltip: {
//         trigger: 'axis',
//         axisPointer: {
//             lineStyle: {
//                 color: '#dddc6b'
//             }
//         }
//     },
// 		    legend: {
//     top:'0%',
//         data:['人工扬子鳄','野生扬子鳄',
//         // ,'IOS'
//     ],
//                 textStyle: {
//            color: 'rgba(255,255,255,.5)',
// 			fontSize:'12',
//         }
//     },
//     grid: {
//         left: '10',
// 		top: '30',
//         right: '10',
//         bottom: '10',
//         containLabel: true
//     },

//     xAxis: [{
//         type: 'category',
//         boundaryGap: false,
// axisLabel:  {
//                 textStyle: {
//  					color: "rgba(255,255,255,.6)",
// 					fontSize:12,
//                 },
//             },
//         axisLine: {
// 			lineStyle: { 
// 				color: 'rgba(255,255,255,.2)'
// 			}

//         },

//    data: ['2000', '2005', '2010', '2015', '2020'
// ]

//     }, {

//         axisPointer: {show: false},
//         axisLine: {  show: false},
//         position: 'bottom',
//         offset: 20,

       

//     }],

//     yAxis: [{
//         type: 'value',
//         axisTick: {show: false},
//         axisLine: {
//             lineStyle: {
//                 color: 'rgba(255,255,255,.1)'
//             }
//         },
//        axisLabel:  {
//                 textStyle: {
//  					color: "rgba(255,255,255,.6)",
// 					fontSize:12,
//                 },
//             },

//         splitLine: {
//             lineStyle: {
//                  color: 'rgba(255,255,255,.1)'
//             }
//         }
//     }],
//     series: [
// 		{
//         name: '人工扬子鳄',
//         type: 'line',
//          smooth: true,
//         symbol: 'circle',
//         symbolSize: 5,
//         showSymbol: false,
//         lineStyle: {
			
//             normal: {
// 				color: '#fb7299',
//                 width: 2
//             }
//         },
//         areaStyle: {
//             normal: {
//                 color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
//                     offset: 0,
//                     color: 'rgba(1, 132, 213, 0.4)'
//                 }, {
//                     offset: 0.8,
//                     color: 'rgba(1, 132, 213, 0.1)'
//                 }], false),
//                 shadowColor: 'rgba(0, 0, 0, 0.1)',
//             }
//         },
// 			itemStyle: {
// 			normal: {
// 				color: '#fb7299',
// 				borderColor: 'rgba(221, 220, 107, .1)',
// 				borderWidth: 12
// 			}
// 		},
//         data: [150, 330, 1350, 3700, 10000]

//     }, 

// {
//         name: '野生扬子鳄',
//         type: 'line',
//         smooth: true,
//         symbol: 'circle',
//         symbolSize: 5,
//         showSymbol: false,
//         lineStyle: {
			
//             normal: {
// 				color: '#c792f5',
//                 width: 2
//             }
//         },
//         areaStyle: {
//             normal: {
//                 color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
//                     offset: 0,
//                     color: 'rgba(0, 216, 135, 0.4)'
//                 }, {
//                     offset: 0.8,
//                     color: 'rgba(0, 216, 135, 0.1)'
//                 }], false),
//                 shadowColor: 'rgba(0, 0, 0, 0.1)',
//             }
//         },
// 			itemStyle: {
// 			normal: {
// 				color: '#c792f5',
// 				borderColor: 'rgba(221, 220, 107, .1)',
// 				borderWidth: 12
// 			}
// 		},
//         data: [100,300,500,1000,1800,4000]

//     }, 
	
// 		 ]

// };
      
//         // 使用刚指定的配置项和数据显示图表。
//         myChart.setOption(option);
//         window.addEventListener("resize",function(){
//             myChart.resize();
//         });
//     }




function echarts_6() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('echart6'));

    var option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                lineStyle: {
                    color: '#dddc6b'
                }
            }
        },
        legend: {
            top: '0%',
            data: ['Training set (R²)', 'Test set (R²)', 'Training set (MSE)', 'Test set (MSE)'],
            textStyle: {
                color: 'rgba(255,255,255,.5)',
                fontSize: '12',
            }
        },
        grid: {
            left: '10',
            top: '30',
            right: '10',
            bottom: '10',
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            boundaryGap: false,
            axisLabel: {
                textStyle: {
                    color: "rgba(255,255,255,.6)",
                    fontSize: 12,
                },
            },
            axisLine: {
                lineStyle: { 
                    color: 'rgba(255,255,255,.2)'
                }
            },
            data: ['HM', 'RF', 'RBF-SVR', 'Hybrid-SVR']  // Methods (x-axis)
        }, {
            axisPointer: { show: false },
            axisLine: { show: false },
            position: 'bottom',
            offset: 20,
        }],
        yAxis: [{
            type: 'value',
            axisTick: { show: false },
            axisLine: {
                lineStyle: {
                    color: 'rgba(255,255,255,.1)'
                }
            },
            axisLabel: {
                textStyle: {
                    color: "rgba(255,255,255,.6)",
                    fontSize: 12,
                },
            },
            splitLine: {
                lineStyle: {
                    color: 'rgba(255,255,255,.1)'
                }
            }
        }],
        series: [
            {
                name: 'Training set (R²)',
                type: 'line',
                smooth: true,
                symbol: 'circle',
                symbolSize: 5,
                showSymbol: false,
                lineStyle: {
                    normal: {
                        color: '#fb7299',
                        width: 2
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(1, 132, 213, 0.4)'
                        }, {
                            offset: 0.8,
                            color: 'rgba(1, 132, 213, 0.1)'
                        }], false),
                        shadowColor: 'rgba(0, 0, 0, 0.1)',
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#fb7299',
                        borderColor: 'rgba(221, 220, 107, .1)',
                        borderWidth: 12
                    }
                },
                data: [0.775, 0.92, 0.919, 0.927]  // Training set R² values
            },
            {
                name: 'Test set (R²)',
                type: 'line',
                smooth: true,
                symbol: 'circle',
                symbolSize: 5,
                showSymbol: false,
                lineStyle: {
                    normal: {
                        color: '#c792f5',
                        width: 2
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(0, 216, 135, 0.4)'
                        }, {
                            offset: 0.8,
                            color: 'rgba(0, 216, 135, 0.1)'
                        }], false),
                        shadowColor: 'rgba(0, 0, 0, 0.1)',
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#c792f5',
                        borderColor: 'rgba(221, 220, 107, .1)',
                        borderWidth: 12
                    }
                },
                data: [0.774, 0.833, 0.902, 0.946]  // Test set R² values
            },
            {
                name: 'Training set (MSE)',
                type: 'line',
                smooth: true,
                symbol: 'circle',
                symbolSize: 5,
                showSymbol: false,
                lineStyle: {
                    normal: {
                        color: '#ff8c00',
                        width: 2
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(255, 140, 0, 0.4)'
                        }, {
                            offset: 0.8,
                            color: 'rgba(255, 140, 0, 0.1)'
                        }], false),
                        shadowColor: 'rgba(0, 0, 0, 0.1)',
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#ff8c00',
                        borderColor: 'rgba(221, 220, 107, .1)',
                        borderWidth: 12
                    }
                },
                data: [0.083, 0.03, 0.03, 0.027]  // Training set MSE values
            },
            {
                name: 'Test set (MSE)',
                type: 'line',
                smooth: true,
                symbol: 'circle',
                symbolSize: 5,
                showSymbol: false,
                lineStyle: {
                    normal: {
                        color: '#8bc34a',
                        width: 2
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(139, 195, 74, 0.4)'
                        }, {
                            offset: 0.8,
                            color: 'rgba(139, 195, 74, 0.1)'
                        }], false),
                        shadowColor: 'rgba(0, 0, 0, 0.1)',
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#8bc34a',
                        borderColor: 'rgba(221, 220, 107, .1)',
                        borderWidth: 12
                    }
                },
                data: [0.092, 0.07, 0.042, 0.023]  // Test set MSE values
            }
        ]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function() {
        myChart.resize();
    });
}
}
)