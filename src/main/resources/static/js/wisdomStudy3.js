$(function () {
    JobTeacherLogin("thirtyDayLogin",
        "smartLearningTea/teacherLogin");
    compulsoryGoodCourse("compulsoryGoodCourse",
        "smartLearningTea/createCourse");
    informationCourse("informationCourse",
        "smartLearningTea/courseInfo");
    numResources("numResources",
        "smartLearningTea/resourcePercent");
    courseInfo();
    onlinetea();
    //在线学生5个方框（测试）
    getOnlineTeaFive();
//alert($('#ipAndPort').attr("data-id"))
})

//在线教师人数
function onlinetea() {
    var myChart = echarts.init(document.getElementById('onlineUser'), "darkTheme");
    var name = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'];
    var result = [{"name": "0", "value": 7}, {"name": "1", "value": 1}, {"name": "2", "value": 0}, {
        "name": "3",
        "value": 0
    }, {"name": "4", "value": 0}, {"name": "5", "value": 0}, {"name": "6", "value": 1}, {
        "name": "7",
        "value": 12
    }, {"name": "8", "value": 76}, {"name": "9", "value": 63}, {"name": "10", "value": 72}, {
        "name": "11",
        "value": 43
    }, {"name": "12", "value": 22}, {"name": "13", "value": 32}, {"name": "14", "value": 56}, {
        "name": "15",
        "value": 51
    }, {"name": "16", "value": 84}, {"name": "17", "value": 35}, {"name": "18", "value": 29}, {
        "name": "19",
        "value": 20
    }, {"name": "20", "value": 15}, {"name": "21", "value": 31}, {"name": "22", "value": 21}, {
        "name": "23",
        "value": 15
    }];
    var nowValue = [];
    getOnlineUser();

    function getOnlineUser() {
        var myDate = new Date();
        //得到当前时间的整点
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

//在线教师5个方框
function getOnlineTeaFive(url) {
    //round是四舍五入最接近的整数的随机数
    var num = Math.random();
    num = Math.round(num * 15) + 58;
    loadNumbers("getOnlineTeaFive", 5, num, "peopleNumbLi")

    // 切换页面后停止刷新实时数字
    $(".pre").click(function () {
        clearTimeout(interval);
    });
    $(".next").click(function () {
        clearTimeout(interval);
    });

    var i = 0;
    var interval = setInterval(function () {
        var value = [59, 61, 63, 60, 57, 58, 62, 64, 65, 68, 71, 68, 66, 62, 63]
        loadNumbers("getOnlineTeaFive", 5, value[i++], "peopleNumbLi")
        if (i == value.length) {
            i = 0;
        }
    }, 5000);
}

//非echarts的更新数据
function courseInfo() {
    $.ajax({
        url: "smartLearningTea/smartLearningBase",
        dataType: 'json',
        type: 'GET',
        success: function (datas) {
            item11 = getItemFromList(datas, "学校");
            item12 = getItemFromList(datas, "教师人数");
            item13 = getItemFromList(datas, "班级");
            item14 = getItemFromList(datas, "学生人数");

            item21 = getItemFromList(datas, "作业数量/份");
            item22 = getItemFromList(datas, "课件数量/份");
            item23 = getItemFromList(datas, "试卷数量/份");
            item24 = getItemFromList(datas, "视频容量/G");
            item25 = getItemFromList(datas, "视频时长/h");
            item26 = getItemFromList(datas, "视频数量/个");

            item31 = getItemFromList(datas, "当日新建/维护课程数量");
            item32 = getItemFromList(datas, "当日上传视频数量");
            item33 = getItemFromList(datas, "当日上传课件数量");
            item34 = getItemFromList(datas, "当日发布直播数量");

            //基本信息
            // countUp(schoolnum, 0, item11.value, '');
            countUp(schoolnum, 0, '陕西国防学院', '');
            countUp(teachernum, 0, item12.value, '');
            countUp(classnum, 0, item13.value, '');
            countUp(studentnum, 0, item14.value, '');

            countUp(zuoye, 0, item21.value, '');
            countUp(kejian, 0, item22.value, '');
            countUp(shijuan, 0, item23.value, '');
            countUp(shiping, 0, item24.value, '');
            countUp(shipingtime, 0, item25.value, '');
            countUp(videonum, 0, item26.value, '');

            //平台数据
            countUp(weihucourse, 0, item31.value, '');
            countUp(upvideo, 0, item32.value, '');
            countUp(upcourse, 0, item33.value, '');
            countUp(uplive, 0, item34.value, '');
        },
        error: function () {
        }
    });
    $.ajax({
        url: "smartLearningTea/courseNum",
        dataType: 'json',
        type: 'GET',
        success: function (datas) {
            item11 = getItemFromList(datas, "精品课程");
            item12 = getItemFromList(datas, "必修课程");

            //课程信息
            countUp(bixiu, 0, item12.value, '');
            countUp(jingping, 0, item11.value, '');
            countUp(coursesum, 0, item12.value + item11.value, '');
        }
    })
}

// 数字资源化
function numResources(echartsId, url) {
    var myChart = echarts.init(document.getElementById(echartsId), "darkTheme");
    $.ajax({
        type: 'get',
        url: url,// 请求数据的地址
        dataType: "json", // 返回数据形式为json
        success: function (data) {
            var option = rosePie(data, "");

            option.color = ['#9BCA63', '#E87C25', '#27727A', '#FE8463', '#FCCE12', '#FAD85F'];
            // option.color = [ '#aee434', '#FFC760', '#FB497C', '#a1e44b', '#FFC760', '#FB497C' ];
            option.toolbox.show = false;
            option.legend = {
                data: getLegend(convertData(data), 2),
                orient: 'horizontal',
                y: '80%'
            }
            option.title = {
                text: title,
                x: 'center',
                textStyle: {
                    color: '#F8C911'
                }
            };
            option.legend.orient = 'vertical';
            option.title.text = '数字化资源占比';
            option.title.x = 'left';
            option.series[0].center = ['50%', '47%'];
            option.series[0].clockwise = false;
            option.series[0].radius = [25, 60];
            option.series[0].startAngle = 90;
            option.series[0].name = '接入方式';
            option.series[0].label.normal.show = true;
//			option.series[0].label.normal.position = 'inner';    //将百分比加在饼图上
            option.series[0].label.normal.formatter = '{b}\n({d}%)';
            option.series[0].label.normal.fontSize = 15;
            option.series[0].itemStyle = {
                normal: {
                    shadowBlur: 200,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
            var series = {
                name: '半径模式',
                type: 'pie',
                radius: [18],
                center: ['50%', '47%'],
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
//			option.backgroundColor = '#202554';
            myChart.setOption(option);
        },
        error: function (errorMsg) {
            // 请求失败时执行该函数
            // alert("图表请求数据失败!");
        }
    });
}

// 课程类别
function informationCourse(echartsId, url) {
    var myChart = echarts.init(document.getElementById(echartsId), "darkTheme");
    $.ajax({
        type: 'get',
        url: url,// 请求数据的地址
        dataType: "json", // 返回数据形式为json
        success: function (result) {
            myChart.hideLoading(); // 隐藏加载动画
            var option = basePie(result, "");

            option.series[0].label.normal.formatter = '{b}\n({d}%)';
            option.legend.orient = 'vertical';
            option.legend.data = getLegend(convertData(result), 2);
            option.legend.y = '80%';
            option.title.text = '课程类别占比';
            option.title.textStyle.color = '#34BF37';
            option.series[0].center = ['50%', '47%'];
            option.series[0].radius = '38%';
//			option.backgroundColor = '#202554';
            // option.series[0].color = ['yellow','green','#FF5088','#61C6B0','pink'];

            myChart.setOption(option);
        },
        error: function (errorMsg) {
            // 请求失败时执行该函数
            // alert("图表请求数据失败!");
        }
    });
}

// 最近30天新建课程数量
function compulsoryGoodCourse(echartsId, url) {
    var myChart = echarts.init(document.getElementById(echartsId), "darkTheme");
    // var name = [];
    var name = [];
    var compulsory = [];
    var goods = [];

    for (var i= 30; i>=1;i--){
        var myDate = new Date();
        var dayOfMonth = myDate.getDate();
        myDate.setDate(dayOfMonth - i);
        name.push(myDate.toISOString().split('T')[0]);
    }

    $.ajax({
        type: 'get',
        url: url,
        dataType: "json",
        success: function (result) {

            for (var i = 0; i < result.length; i++) {

                //判断key是否为0或1，为0时push给compulsory，为1时给goods
                if (result[i].key == 1) {
                    compulsory.push(result[i].value);
                } else {
                    goods.push(result[i].value);
                }
            }
            myChart.hideLoading(); // 隐藏加载动画
            // 加载数据图表
            var option = baseBarTwoSource(name, compulsory, goods, '');

            option.title.text = '最近30天新建课程数量';
            option.title.textStyle.color = '#F8C911';
            option.dataZoom[0].end = '100';
            option.dataZoom[0].show = false;
            option.series[0].barGap = '0.3';
            option.series[0].barWidth = '5';
            option.series[1].barWidth = '5';

            myChart.setOption(option);
        },
        error: function (errorMsg) {
            // 请求失败时执行该函数
            // alert("图表请求数据失败!");
            leftChart.hideLoading();
        }
    });
}

// 30天教师登录人次
function JobTeacherLogin(echartsId, url) {
    var myChart = echarts.init(document.getElementById(echartsId), "darkTheme");
    var name = [];
    var value = [];

    for (var i= 30; i>=1;i--){
        var myDate = new Date();
        var dayOfMonth = myDate.getDate();
        myDate.setDate(dayOfMonth - i);
        name.push(myDate.toISOString().split('T')[0]);
    }

    $.ajax({
        type: 'get',
        url: url,
        dataType: "json",
        success: function (result) {
            for (var i = 0; i < result.length; i++) {
                value.push(result[i].value);
            }
            myChart.hideLoading(); // 隐藏加载动画
            // 加载数据图表
            var option = baseBarChange(name, value, "");
            option.yAxis.min = '0';
            option.yAxis.max = 'dataMax';
            option.title = {
                text: title,
                x: 'left',
                textStyle: {
                    color: '#5394E6'
                }
            };
            option.title.text = '最近30天登录教师人次';
            option.dataZoom[0].end = '100';
            option.dataZoom[0].show = false;
            option.series[0].barCategoryGap = 0;
            option.series[0].barWidth = 15;
            option.backgroundColor = '#202554';
            myChart.setOption(option);
        },
        error: function (errorMsg) {
            // 请求失败时执行该函数
            // alert("图表请求数据失败!");
            leftChart.hideLoading();
        }
    });
}