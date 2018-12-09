var theme = "darkTheme";

$(function () {
  loadMajorList();
  timeLoop(0);
})

// 循环、定时切换
function timeLoop(count) {
  var t;
  $("#tab-li" + (count)).removeClass("tab-li");
  $(".clearfix").parent().find(".tab-li").removeClass("active");
  $("#tab-li" + (count)).addClass("tab-li active");

  thrEcharts($("#tab-li" + (count))[0].innerText);
  if (count == 4) {
    count = -1;
  }
//   t = setTimeout("timeLoop(" + (++count) + ")", 10000); // 轮播

  var random = Math.random();//设置随机数为点击事件的命名空间，防止第二页与第五页冲突
  $("#main").on("click." + random, ".tab-li", function () {
    // clearTimeout(t);
    $(this).parent().find("li").removeClass("active");
    $(this).addClass("active");
    thrEcharts($(this)[0].innerText);
  })
  // 切换页面后停止轮播
  $(".pre").click(function () {
    $("#main").off("click." + random); // 移除点击事件

    clearTimeout(t);
  });
  $(".next").click(function () {
    clearTimeout(t);
    $("#main").off("click." + random); // 移除点击事件
  });
}

// 同时加载三张图及左边的基础数据
function thrEcharts(majorName) {
  $('#analysisEchers1').show();
  $('#noDataMsg').hide();
  if ((majorName == '移动互联方向') || (majorName == '智能制造方向') || (majorName == '云计算方向')) {
    $('#analysisEchers1').hide();
    $('#noDataMsg').show();
  } else {
    loadEmploymentPositionPie(majorName);
  }
  loadGradeDistributedBar(majorName);
  // loadDoubleCreateBar(majorName);
  loadBasicInfo(majorName);
}

// 加载课程列表
function loadMajorList() {
  $.ajax({
    type: 'get',
    async: false, //必须是同步请求否则轮播会产生bug
    url: 'majorAnalysis/majorNames',// 请求数据的地址
    dataType: "json", // 返回数据形式为json
    success: function (result) {
      for (var i = 0; i < result.length; i++) {
        if (i == 0) {
          $(".tab").append("<li class='tab-li' id=tab-li" + i + "><span class='disc'></span><i>" + result[i] + "</i></li>");
        } else {
          $(".tab").append("<li class='tab-li' id=tab-li" + i + "><span class='disc'></span><i>" + result[i] + "</i></li>");
        }
      }
    },
    error: function (errorMsg) {
      // 请求失败时执行该函数
      // alert("请求数据失败!");
    }
  });
}

// 加载左侧基本信息
function loadBasicInfo(majorName) {
  $.ajax({
    type: 'get',
    // async : true,
    url: 'majorAnalysis/baseInfo',// 请求数据的地址
    dataType: "json", // 返回数据形式为json
    data: {
      majorName: majorName
    },
    success: function (result) {
      var schoolNum = parseInt(result.undergraduate)
        + parseInt(result.vocational);

      var options = {
        useEasing: true,
        useGrouping: true,
        separator: '',
        decimal: '.'
      };
      // 开设时间
      countUp("setupTime", 0, result.setupTime.substr(0, 4), 0,
        options);
      // 学生人数
      countUp("majorStudent", 0, result.majorStudent, 0);
      countUp("majorBook", 0, result.majorBook, 0);// 教材
      countUp("majorTeacher", 0, result.majorTeacher, 0);// 师资团队
      countUp("majorCourse", 0, result.majorCourse, 0);// 课程数
      countUp("majorCourseHour", 0, result.majorCourseHour, 0);// 课时数
      countUp("schoolNum", 0, schoolNum, 0);// 合作院校
      countUp("undergraduate", 0x0, result.undergraduate, 0);// 本科
      countUp("HigherVocational", 0, result.vocational, 0);// 高职
      countUp("majorSatisfaction", 0, result.majorSatisfaction * 100, 0);// 满意度
    },
    error: function (errorMsg) {
      // 请求失败时执行该函数
      // alert("请求数据失败!");
    }
  });

}

// 加载就业岗位分布饼图
function loadEmploymentPositionPie(majorName) {
  var Chart = echarts.init(document.getElementById("analysisEchers1"), theme);

  $.ajax({
    type: 'get',
    // async : true,
    url: 'majorAnalysis/employmentPosition',// 请求数据的地址
    dataType: "json", // 返回数据形式为json
    data: {
      majorName: majorName
    },
    success: function (result) {
      var option = pieChartCircleEmploymentPosition(result, "");

      option.series[0].label.normal.formatter = '{c}人  ({d}%)';
      option.series[0].labelLine.normal.show = true;
      option.series[0].labelLine.normal.length = 5;
      option.series[0].labelLine.normal.length2 = 25;
      option.series[0].label.normal.textStyle.fontSize = 20;
      option.series[0].radius = '43%';
      option.series[0].center = ['50%', '30%'];
      option.legend.bottom = '60';
      option.legend.orient = 'vertical';
      option.legend.textStyle.fontSize = 20;

      if (majorName == '物联网方向') {
        option.legend.itemGap = 100;
        option.legend.bottom = '100';
        option.legend.data = getLegend(convertData(result), 2);
      } else {
        option.legend.data = getLegend(convertData(result), 5);


      }

      option.legend.itemGap = 25;
      option.backgroundColor = '#202554';
      Chart.setOption(option);

    }
    ,
    error: function (errorMsg) {
      // 请求失败时执行该函数
      // alert("图表请求数据失败!");
    }
  });
}

// 加载历年录取人数柱图
function loadGradeDistributedBar(majorName) {
  var Chart = echarts.init(document.getElementById("analysisEchers2"), theme);

  // Chart.showLoading();

  var undergraduate = [];// 本科录取人数
  var vocational = [];// 高职录取人数
  var grade = [];// 录取年份
  var legend = ['单招', '高考'];
  var xName = '年份';
  var yName = '人数';

  $.ajax({
    type: 'get',
    // async : true,
    url: 'majorAnalysis/gradeDistributed',// 请求数据的地址
    dataType: "json", // 返回数据形式为json
    data: {
      majorName: majorName
    },
    success: function (result) {
      Chart.hideLoading(); // 隐藏加载动画
      for (var i = 0; i < result.length; i++) {
        undergraduate.push(result[i].undergraduate);
        vocational.push(result[i].vocational);
        grade.push(result[i].grade);
      }
      var option = doubleBarChartSingleVertical(undergraduate,
        vocational, grade, legend, xName, yName);

      option.legend.right = 5;
      option.legend.itemGap = 40;
      option.series[0].barWidth = 20;
      option.series[1].barWidth = 20;
      option.xAxis.nameGap = -13;
      option.xAxis.axisLine.show = false;
      option.yAxis.axisLine.show = false;
      option.series[0].itemStyle.normal.color = new echarts.graphic.LinearGradient(
        0, 0, 0, 1, [{
          offset: 0,
          color: '#4ADBBB'
        }, {
          offset: 0.5,
          color: '#45BFC0'
        }, {
          offset: 1,
          color: '#42A6C5'
        }]);
      option.series[1].itemStyle.normal.color = new echarts.graphic.LinearGradient(
        0, 0, 0, 1, [{
          offset: 0,
          color: '#FDBD4E'
        }, {
          offset: 0.5,
          color: '#EB9829'
        }, {
          offset: 1,
          color: '#E69021'
        }]);
      option.backgroundColor = '#202554';
      Chart.setOption(option);
    },
    error: function (errorMsg) {
      // 请求失败时执行该函数
      // alert("图表请求数据失败!");
    }
  });
}

// 加载历年双创产品和团队柱图
function loadDoubleCreateBar(majorName) {
  var Chart = echarts.init(document.getElementById("analysisEchers3"), theme);

  // Chart.showLoading();

  var product = [];// 产品
  var team = [];// 团队
  var yearAchievement = [];// 年份
  var legend = ['产品', '团队'];
  var xName = '年份';
  var yName = '个数';

  $.ajax({
    type: 'get',
    // async : true,
    url: 'majorAnalysis/doubleCreate',// 请求数据的地址
    dataType: "json", // 返回数据形式为json
    data: {
      majorName: majorName
    },
    success: function (result) {
      Chart.hideLoading(); // 隐藏加载动画
      for (var i = 0; i < result.length; i++) {
        product.push(result[i].product);
        team.push(result[i].team);
        yearAchievement.push(result[i].yearAchievement);
      }
      var option = doubleBarChartSingleVertical(product, team,
        yearAchievement, legend, xName, yName);

      option.legend.right = 5;
      option.legend.itemGap = 40;
      option.series[0].barWidth = 100;
      option.series[1].barWidth = 100;
      option.series[1].barGap = 1;
      option.xAxis.nameGap = -13;
      option.xAxis.axisLine.show = false;
      option.yAxis.axisLine.show = false;

      option.series[0].itemStyle.normal.color = new echarts.graphic.LinearGradient(
        0, 0, 0, 1, [{
          offset: 0,
          color: '#29B1FB'
        }, {
          offset: 0.5,
          color: '#169DF6'
        }, {
          offset: 1,
          color: '#088EF2'
        }]);
      option.series[1].itemStyle.normal.color = new echarts.graphic.LinearGradient(
        0, 0, 0, 1, [{
          offset: 0,
          color: '#F6936F'
        }, {
          offset: 0.5,
          color: '#ED8257'
        }, {
          offset: 1,
          color: '#DB6025'
        }]);
      option.backgroundColor = '#202554';
      Chart.setOption(option);
    },
    error: function (errorMsg) {
      // 请求失败时执行该函数
      // alert("图表请求数据失败!");
    }
  });
}