$(function () {
    baseInfo("smartLearningStu/smartLearningBase");
    // 项目部学习热度top5
    depStudyHot("smartLearningStu/studyHot");
    // 最近30天学习行为记录
    studyBehavior("studyBehavior", "smartLearningStu/studyRecord");
    // 最近30天各专业学习人数占比
    majorNum("majorNum", "smartLearningStu/majorNum");
    // 接入方式占比
    loginWay("loginWay", "smartLearningStu/loginWay");
    // 在线学生人数
    onlinetstu();
    // 24小时平均在线情况
    hourOnline("hourOnline", "smartLearningStu/onlineState");
    // 移动学习分布地图
    mobileStudyDistribute();
    // 在线学生5个方框
    getOnlineStuFive();
})

/**
 * 移动学习分布地图
 *
 */
function mobileStudyDistribute() {
    var chart = echarts.init(document.getElementById('mobileStudyDistribute'),
        "darkTheme");

    var data = [{
        name: "北京",
        value: 82
    }, {
        name: "天津",
        value: 42
    }, {
        name: "河北",
        value: 102
    }, {
        name: "山西",
        value: 578
    }, {
        name: "内蒙古",
        value: 198
    }, {
        name: "辽宁",
        value: 1692
    }, {
        name: "吉林",
        value: 1767
    }, {
        name: "黑龙江",
        value: 703
    }, {
        name: "上海",
        value: 671
    }, {
        name: "江苏",
        value: 3537
    }, {
        name: "浙江",
        value: 765
    }, {
        name: "安徽",
        value: 125
    }, {
        name: "福建",
        value: 2322
    }, {
        name: "江西",
        value: 1983
    }, {
        name: "山东",
        value: 1633
    }, {
        name: "河南",
        value: 1919
    }, {
        name: "湖北",
        value: 2189
    }, {
        name: "湖南",
        value: 948
    }, {
        name: "重庆",
        value: 1492
    }, {
        name: "四川",
        value: 1299
    }, {
        name: "贵州",
        value: 62
    }, {
        name: "云南",
        value: 591
    }, {
        name: "西藏",
        value: 9
    }, {
        name: "陕西",
        value: 1218
    }, {
        name: "甘肃",
        value: 1505
    }, {
        name: "青海",
        value: 303
    }, {
        name: "宁夏",
        value: 283
    }, {
        name: "新疆",
        value: 670
    }, {
        name: "广东",
        value: 2965
    }, {
        name: "广西",
        value: 3150
    }, {
        name: "海南",
        value: 14
    }, {
        name: "香港",
        value: 0
    }, {
        name: "澳门",
        value: 0
    }, {
        name: "台湾",
        value: 0
    }, {
        name: "钓鱼岛",
        value: 4
    }];

    var option = chinaMap(data);

    option.visualMap.min = 1
    option.visualMap.max = 1500;
    option.backgroundColor = '#202554';
    option.title.text = '移动学习分布';
    option.title.top = 20;
    option.title.left = 5;
    option.title.textStyle.color = '#F4C612';
    option.geo.label = {
        normal: {
            fontSize: 18,
            color: '#640802',
            show: false
        },
        emphasis: {
            show: true
        }
    };

    option.geo.itemStyle = {
        normal: {
            borderWidth: 0,
            areaColor: '#031525',
            borderColor: '#fff'
        },
        emphasis: {
            areaColor: '#2B91B7'
        }
    };
    option.geo.zoom = 1.2;
    option.geo.center = [103.23, 35.33];
    option.tooltip.textStyle = {
        fontSize: 20
    };
    option.tooltip.formatter = '{b}：{c}人';
    option.visualMap.max = 1000;
    option.series[0].map = 'china2'; // china2是china.js中registerMap的值，这样可以去掉“南海诸岛”

    chart.setOption(option);
}


// 24小时平均在线情况
function hourOnline(id, url) {
    // 如果要ajax后获取请求到的参数，必需用同步, async: false
    var myChart = echarts.init(document.getElementById(id), "darkTheme");
    var name = [];
    var app = [];
    var pc = [];
    $.ajax({
        url: url,
        dataType: 'json',
        type: 'GET',
        success: function (data) {
            for (var i = 0; i < data.length; i++) {
                name.push(data[i].name);
                app.push(data[i].app);
                pc.push(data[i].pc)
            }
            var option = baseBarTwoSource(name, app, pc, "");

            option.title.text = '24小时平均在线情况';
            option.backgroundColor = '#202554';
            option.title.textStyle.color = '#08f2f2';
            option.legend.data = ['app', 'pc'];
            option.xAxis[0].axisLabel.formatter = '{value}时';
            option.dataZoom[0].end = '100';
            option.dataZoom[0].show = false;
            option.series[0].name = 'app';
            option.series[1].name = 'pc';
            option.series[0].type = 'line';
            option.series[1].type = 'line';
            option.tooltip.formatter = '{a0}：{c0}<br/>{a1}：{c1}';

            myChart.setOption(option);
        },
        error: function () {
        }
    })
}

// 实时学生人数
function onlinetstu() {
    var myChart = echarts.init(document.getElementById('onlineUser'), "darkTheme");
    var name = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11',
        '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22',
        '23'];
    var result = [{"name": "0", "value": 57}, {"name": "1", "value": 24}, {"name": "2", "value": 10}, {
        "name": "3",
        "value": 5
    }, {"name": "4", "value": 2}, {"name": "5", "value": 5}, {"name": "6", "value": 9}, {
        "name": "7",
        "value": 30
    }, {"name": "8", "value": 108}, {"name": "9", "value": 157}, {"name": "10", "value": 207}, {
        "name": "11",
        "value": 232
    }, {"name": "12", "value": 300}, {"name": "13", "value": 242}, {"name": "14", "value": 229}, {
        "name": "15",
        "value": 225
    }, {"name": "16", "value": 232}, {"name": "17", "value": 270}, {"name": "18", "value": 371}, {
        "name": "19",
        "value": 645
    }, {"name": "20", "value": 512}, {"name": "21", "value": 629}, {"name": "22", "value": 644}, {
        "name": "23",
        "value": 0
    }];
    var nowValue = [];
    getOnlineUser();

    function getOnlineUser() {
        var myDate = new Date();
        // 得到当前时间的整点
        var nowHour = myDate.getHours().toString();
        for (var i = 0; i < result.length; i++) {
            if (result[i].name != nowHour) {
                nowValue.push(result[i].value);
            } else {
                nowValue.push(result[i].value);
                break;
            }
        }
        var option = baseLine(name, nowValue);
        option.backgroundColor = '#202554';
        option.yAxis[0].min = 0;
        option.tooltip.formatter = '{c}';
        myChart.setOption(option);

    }
}

// 在线学生5个方框
function getOnlineStuFive(url) {
    //round是四舍五入最接近的整数的随机数
    var num = Math.random();
    num = Math.round(num * 15)+220;
    loadNumbers("getOnlineStuFive", 5, num, "peopleNumbLi")
    var timesRun = 0;

    // 切换页面后停止刷新实时数字
    $(".pre").click(function () {
        clearTimeout(interval);
    });
    $(".next").click(function () {
        clearTimeout(interval);
    });

    var i = 0;
    var interval = setInterval(function () {
        var value = [223, 225, 223, 226, 231, 229, 234, 240, 241, 238, 235, 229]
        loadNumbers("getOnlineStuFive", 5, value[i++], "peopleNumbLi")
        if (i == value.length) {
            i = 0;
        }
    }, 5000);
}

function baseInfo(url) {
    $.ajax({
        url: url,
        dataType: 'json',
        type: 'GET',
        success: function (data) {
            var item1, item2, item3;
            item11 = getItemFromList(data, "学校");
            item12 = getItemFromList(data, "教师人数");
            item13 = getItemFromList(data, "班级");
            item14 = getItemFromList(data, "学生人数");

            item21 = getItemFromList(data, "学生平均上线率");
            item22 = getItemFromList(data, "通信");
            item23 = getItemFromList(data, "移动互联");
            item24 = getItemFromList(data, "云计算");
            item25 = getItemFromList(data, "物联网");
            item26 = getItemFromList(data, "智能制造");

            item31 = getItemFromList(data, "当日总点击量");
            item32 = getItemFromList(data, "课程点击量");
            item33 = getItemFromList(data, "微课视频点击量");
            item34 = getItemFromList(data, "录播视频点击量");
            item35 = getItemFromList(data, "课件点击量");

            // 基本信息
            countUp(xuexiao, 0, item11.value, '');
            countUp(jiaoshi, 0, item12.value, '');
            countUp(banji, 0, item13.value, '');
            countUp(xuesheng, 0, item14.value, '');
            // 学生上线情况
            var myChart1 = echarts.init(document.getElementById("canvas1"),
                "darkTheme");
            myChart1.setOption(percentPie(item21.value, '#FBCB10'));
            var myChart2 = echarts.init(document.getElementById("canvas2"),
                "darkTheme");
            myChart2.setOption(percentPie(item22.value, '#FB497C'));
            var myChart3 = echarts.init(document.getElementById("canvas3"),
                "darkTheme");
            myChart3.setOption(percentPie(item23.value, '#4FCCFF'));
            var myChart4 = echarts.init(document.getElementById("canvas4"),
                "darkTheme");
            myChart4.setOption(percentPie(item24.value, '#4ADCBB'));
            var myChart5 = echarts.init(document.getElementById("canvas5"),
                "darkTheme");
            myChart5.setOption(percentPie(item25.value, '#6ADC1F'));
            var myChart6 = echarts.init(document.getElementById("canvas6"),
                "darkTheme");
            myChart6.setOption(percentPie(item26.value, '#FC76FF'));

            // 当日总点击量
            loadNumbers("d3-zongdianjiliang", 5, item31.value, "peopleNumbLi");
            var option = {
                useEasing: true,
                useGrouping: true,
                separator: ',',
                decimal: '.'
            };
            countUp(kecheng, 0, item32.value, '', option);
            countUp(weike, 0, item33.value, '');
            countUp(lubo, 0, item34.value, '');
            countUp(kejian, 0, item35.value, '');
        },
        error: function () {
        }
    })
}

// 项目部学习热度top5
function depStudyHot(url) {
    $.ajax({
        url: url,
        dataType: 'json',
        type: 'GET',
        success: function (data) {
            for (var i = 0; i < data.length; i++) {
                item1 = getItemFromList(data, data[0].name);
                item11 = getItemFromList(data, data[0].name);
                item2 = getItemFromList(data, data[1].name);
                item22 = getItemFromList(data, data[1].name);
                item3 = getItemFromList(data, data[2].name);
                item33 = getItemFromList(data, data[2].name);
                item4 = getItemFromList(data, data[3].name);
                item44 = getItemFromList(data, data[3].name);
                item5 = getItemFromList(data, data[4].name);
                item55 = getItemFromList(data, data[4].name);

                $("#top1").text(item1.name);
                countUp(top11, 0, item11.value, '');
                $("#top2").text(item2.name);
                countUp(top22, 0, item22.value, '');
                $("#top3").text(item3.name);
                countUp(top33, 0, item33.value, '');
                $("#top4").text(item4.name);
                countUp(top44, 0, item44.value, '');
                $("#top5").text(item5.name);
                countUp(top55, 0, item55.value, '');

            }
        },
        error: function () {
        }
    })
}

// 最近30天学习行为记录
function studyBehavior(id, url) {
    var myChart = echarts.init(document.getElementById(id), "darkTheme");
    var name = [];
    var app = [];
    var pc = [];
    $.ajax({
        url: url,
        dataType: 'json',
        type: 'GET',
        success: function (data) {
            for (var i = 0; i < data.length; i++) {
                name.push(data[i].name);
                app.push(data[i].app);
                pc.push(data[i].pc)
            }
            var option = baseBarTwoSource(name, app, pc, "");

            option.dataZoom[0].show = false;
            option.dataZoom[0].end = 100;
            option.title.text = '最近30天学习行为记录';
            option.title.y = '3%';
            option.title.textStyle.color = '#48D5B8';
            option.legend.y = '3%';
            option.legend.data = ['app', 'pc'];
            option.yAxis.min = 'dataMin';
            option.yAxis.max = 'dataMax';

            option.series[0].name = 'app';
            option.series[1].name = 'pc';
            option.series[1].barMinHeight = 6;  //可用于防止某数据项的值过小而影响交互。
            myChart.setOption(option);
        },
        error: function () {
        }
    })
}

// 最近30天各专业学习人数占比
function majorNum(id, url) {
    var myChart = echarts.init(document.getElementById(id), "darkTheme");
    $.ajax({
        url: url,
        dataType: 'json',
        type: 'GET',
        success: function (data) {
            var option = basePie(data, "");

            option.title.text = '最近30天各专业学习人数占比';
            option.legend.orient = 'vertical';
            option.series[0].center = ['50%', '46%'];
            option.series[0].label.normal.formatter = '{b}\n({d}%)';
            option.legend.data = getLegend(convertData(data), 2);
            option.title.textStyle.color = '#34BF37';
            option.legend.y = '80%';
            option.series[0].radius = '47%';
            option.series[0].color = ['#61C6B0', '#61BEFF', 'yellow', '#FF5088', 'pink', 'white'];

            myChart.setOption(option);
        },
        error: function () {
        }
    })
}

// 接入方式占比
function loginWay(id, url) {
    var myChart = echarts.init(document.getElementById(id), "darkTheme");
    $.ajax({
        url: url,
        dataType: 'json',
        type: 'GET',
        success: function (data) {
            var option = rosePie(data, "");

            option.color = ['#6EE420', '#FFC760', '#FB497C', '#6EE420',
                '#FFC760', '#FB497C'];
            option.toolbox.show = false;
            option.legend = {
                data: ['pc', 'app'],
                orient: 'horizontal',
                y: '80%',
                itemGap: 20
                // 图例间隔
            }
            option.title = {
                text: title,
                x: 'center',
                textStyle: {
                    color: '#F8C911'
                }
            }
            option.title.text = '接入方式占比';
            option.title.x = 'left';
            option.series[0].center = ['50%', '45%'];
            option.series[0].clockwise = false;
            option.series[0].radius = [30, 80];
            option.series[0].startAngle = 0;
            option.series[0].name = '接入方式';
            option.series[0].label.normal.show = true;
//			option.series[0].label.normal.position = 'inner'; // 将百分比加在饼图上
            option.series[0].label.normal.formatter = '{b}\n{d}%';
//			option.series[0].label.normal.fontSize = 17;
//			option.series[0].label.normal.color = 'white';

            option.series[0].itemStyle = {
                normal: {
                    shadowBlur: 200,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
            var series = {
                name: '半径模式',
                type: 'pie',
                radius: [22],
                center: ['50%', '45%'],
                itemStyle: {
                    normal: {
                        color: ['#fff']
                    }
                },
                label: {
                    normal: {
                        show: false
                    }
                },
                lableLine: {
                    normal: {
                        show: false
                    }
                },
                data: [1]
            };
            option.series.push(series);

            myChart.setOption(option);

        },
        error: function () {
        }
    })
}

function convertToMultiLine(data, name, v1, v2) {
    var nameList = new Array(data.length), v1List = new Array(data.length), v2List = new Array(
        data.length);

    for (c in data) {
        nameList[c] = data[c][name];
        v1List[c] = data[c][v1];
        v2List[c] = data[c][v2];
    }

    var r = {};
    r['name'] = nameList;

    var vMap = {};
    vMap[v1] = v1List;
    vMap[v2] = v2List;
    r['value'] = vMap;
    return r;
}
