sourceURL = "jobanAlysis5.js";

$(function () {
  getMajor();
  timeLoop(0);
});

/**
 *
 * 加载所有图表
 *
 */
function loadAllEcharts(majorName) {
  $('#employmentMap').show();
  $('#employmentRadio').show(); //就业率
  $('#graduateSalary').show(); //薪资跟踪
  $('#salaryCompared').show(); //薪资走势
  $('#graduateAbility').show(); //毕业生能力
  $('#allGraduationNum').show(); //累计毕业生数量
  $('#employment').show(); //高职本科毕业生数量
  $('#employmentStructure').show(); //就业结构
  $('.subtitle').show(); //标题
  $('#noDataMsg').hide();
  if ((majorName == '移动互联') || (majorName == '智能制造') || (majorName == '云计算')) {
    $('#employmentMap').hide(); //地图
    $('#employmentRadio').hide(); //就业率
    $('#graduateSalary').hide(); //薪资跟踪
    $('#salaryCompared').hide(); //薪资走势
    $('#graduateAbility').hide(); //毕业生能力
    $('#allGraduationNum').hide(); //累计毕业生数量
    $('#employment').hide(); //高职本科毕业生数量
    $('#employmentStructure').hide(); //就业结构
    $('.subtitle').hide(); //标题
    $('#noDataMsg').show();
  } else {
    graduateSalary(majorName); // 毕业生薪资与行业薪资走势
    graduateAbility(majorName); // 毕业生能力分析
    employmentRadio(majorName); // 就业率
    salaryCompared(majorName); // 毕业生平均薪资跟踪
    employment(majorName); // 累计毕业人数
    employmentStructure(majorName); // 毕业生就业结构
    employmentMap(majorName); // 毕业生就业地图
  }
}

/**
 * 循环、定时切换
 *
 *
 */
function timeLoop(count) {
  var t;
  $("#tab-li" + (count)).removeClass("tab-li");
  $(".clearfix").parent().find(".tab-li").removeClass("active");
  $("#tab-li" + (count)).addClass("tab-li active");

  loadAllEcharts($("#tab-li" + (count))[0].innerText);

  // switch (count) {
  //   case 0 :
  //     loadAllEcharts("全部专业方向");
  //     $("#5").removeClass("active");
  //     break;
  //   case 1 :
  //     loadAllEcharts("云计算");
  //     break;
  //   case 2 :
  //     loadAllEcharts("智能制造");
  //     break;
  //   case 3 :
  //     loadAllEcharts("物联网");
  //     break;
  //   case 4 :
  //     loadAllEcharts("移动互联");
  //     break;
  //   case 5 :
  //     loadAllEcharts("通信");
  //     count = -1;
  //     break;
  // }
  // t = setTimeout("timeLoop(" + (++count) + ")", 30000000); // 轮播

  var random = Math.random();//设置随机数为点击事件的命名空间，防止第二页与第五页冲突
  // 点击事件
  $("#main").on("click." + random, ".tab-li", function () {
    // clearTimeout(t);
    $(this).parent().find("li").removeClass("active");
    $(this).addClass("active");
    loadAllEcharts($(this)[0].innerText);
  })

  // 切换页面后停止轮播
  $(".pre").click(function () {
    clearTimeout(t);
    $("#main").off("click." + random); // 移除点击事件
  });
  $(".next").click(function () {
    clearTimeout(t);
    $("#main").off("click." + random); // 移除点击事件
  });

}

/**
 * 毕业生就业地图
 *
 * @param {}
 *            majorName
 */
function employmentMap(majorName) {
  var chart = echarts.init(document.getElementById('employmentMap'),
    "darkTheme");

  $.ajax({
    type: 'get',
    url: 'employment/graduateEmployment',// 请求数据的地址
    data: {
      majorName: majorName
    },
    dataType: "json", // 返回数据形式为json
    success: function (result) {
      var data = [];
      for (var i = 0; i < result.length; i++) {
        data.push({
          name: result[i].province,
          value: result[i].graduateNum
        })
      }

      var option = chinaMap(data);
      option.backgroundColor = '#202554';
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
      option.geo.center = [103.23, 35.33];
      option.geo.zoom = 1.2;
      option.tooltip.textStyle = {
        fontSize: 20
      };
      option.tooltip.formatter = '{b}：{c}人';
      option.series[0].map = 'china2'; // china2是china.js中registerMap的值，这样可以去掉“南海诸岛”

      option.visualMap.max = 300;
      option.visualMap.inRange.color = ['#feec63', '#f99445', '#f08d2a', '#e17415', '#df663b', '#cb511f','#cb531e','#cb4d1c','#cb4a0d','#cb0008'];
      chart.setOption(option);

    },
    error: function (errorMsg) {
    }
  });


}

/**
 *
 * 累计毕业人数
 *
 */
function employment(majorName) {
  var Chart = echarts
    .init(document.getElementById("employment"), "darkTheme");

  // [本科，高职]
  var man = [];
  var woman = [];

  $.ajax({
    type: 'get',
    url: 'employment/employmentNum',// 请求数据的地址
    data: {
      majorName: majorName
    },
    dataType: "json", // 返回数据形式为json
    success: function (result) {
      var len = result.length;
      if (len != 0) {
        man.push(result.undergraduateMale);
        // man.push(result.vocationalMale);
        woman.push(result.undergraduateFemale);
        // woman.push(result.vocationalFemale);
        var allGraduationNum = man[0] + man[1] + woman[0]
          + woman[1]; // 累计毕业生数量
        var allGraduationNum = man[0] + woman[0] ; // 累计毕业生数量
      }

      var option = pictorialBar(man, woman);

      // var coe = 2;// 保证象形图label右对齐
      // man[0] > man[1]
      //   ? option.xAxis.max = man[0] * coe
      //   : option.xAxis.max = man[1] * coe;
      //
      // woman[0] > woman[1]
      //   ? option.xAxis.max = woman[0] * coe
      //   : option.xAxis.max = woman[1] * coe;
      option.series[0].label.position = [560, 0];
      option.series[1].label.position = [560, 0];
      Chart.setOption(option);
      // 加载累计毕业生数量
      loadNumbers('allGraduationNum',
        5,
        allGraduationNum, 'peopleNumbLi');
    },
    error: function (errorMsg) {
      // 请求失败时执行该函数
      // alert("图表请求数据失败!");
    }
  });
}

/**
 * 毕业生就业结构
 *
 */
function employmentStructure(majorName) {

  var Chart = echarts.init(document.getElementById("employmentStructure"),
    "darkTheme");
  var value = [];
  var name = [];
  $.ajax({
    type: 'get',
    url: 'employment/structureNum',// 请求数据的地址
    data: {
      majorName: majorName
    },
    dataType: "json", // 返回数据形式为json
    success: function (result) {
      var len = result.length;
      if (len !== 0) {
        for (var i = 0; i < len; i++) {
          value.push(result[i].value);
          name.push(result[i].name);
        }
        var option = barChartSingleVertical(value, '毕业生就业结构（近3年）', '');
        option.xAxis.data = name;
        option.series[0].barWidth = 40;
        option.series[0].itemStyle.normal.color = new echarts.graphic.LinearGradient(
          0, 0, 0, 1, [{
            offset: 0,
            color: '#4ADCBB'
          }, {
            offset: 0.5,
            color: '#49D6BC'
          }, {
            offset: 1,
            color: '#42A5C6'
          }]);

        option.legend.show = false;
        option.grid.bottom = '25px';
        Chart.setOption(option);
      }
    },
    error: function (errorMsg) {
      // 请求失败时执行该函数
      // alert("图表请求数据失败!");
    }
  });

}

/**
 * 专业名称
 *
 */
function getMajor() {
  var majorUl = $("#majorUl");
  $.ajax({
    type: 'get',
    url: 'majorAnalysis/majorNames',// 请求数据的地址
    async: false,
    dataType: "json", // 返回数据形式为json
    success: function (result) {
      var len = result.length;
      if (len !== 0) {
        majorUl.empty();
        majorUl
          .append("<li class='tab-li active' id=tab-li0><span class='disc'></span><i>全部专业方向</i></li>");
        for (var i = 0; i < len; i++) {
          majorUl.append("<li class='tab-li' id=tab-li" + i + 1
            + "><span class='disc'></span><i>"
            + result[i].substring(0, result[i].length - 2)
            + "</i></li>");
        }
      }
      majorUl.find("li").eq(0).addClass("active");
    },
    error: function (errorMsg) {
      // 请求失败时执行该函数
      // alert("图表请求数据失败!");
    }
  })
  ;
}

/**
 * 毕业生薪资与行业薪资走势
 *
 */
function graduateSalary(majorName) {
  var Chart = echarts.init(document.getElementById("salaryCompared"),
    "darkTheme");
  $.ajax({
    type: 'get',
    url: 'employment/salaryCompared',// 请求数据的地址
    data: {
      majorName: majorName
    },
    dataType: "json", // 返回数据形式为json
    success: function (result) {
      var len = result.length;
      if (len !== 0) {
        var grade = []; // 毕业年份
        var averageSalary = []; // 毕业薪资
        var graduateSalary = []; // 行业平均薪资

        // debugger;
        for (var i = 0; i < len; i++) {
          grade.push(result[i].grade);
          averageSalary.push(result[i].averageSalary);
          graduateSalary.push(result[i].graduateSalary)
        }
        var legend = ['毕业生薪资', '北京行业薪资'];

        // lineChartMultiple(数据1，数据2，x轴数据，图例，标题，x轴名字，y轴名字)
        var option = lineChartMultiple(graduateSalary,
          averageSalary, grade, legend, '毕业生薪资与行业薪资走势',
          '', '');

//        option.title[0].subtext = '行业数据来源于北京地区';
        // option.legend.right = 1;
        option.legend.top = '15%';
        // option.legend.textStyle.fontSize = 16;
        option.backgroundColor = '#202554';
        option.grid.bottom = '15px';
        option.title.top = '50%';
        option.grid.top = '30%';

        Chart.setOption(option);
      }
    },
    error: function (errorMsg) {
      // 请求失败时执行该函数
      // alert("图表请求数据失败!");
    }
  });
}

/**
 * 毕业生能力分析
 *
 */
function graduateAbility(majorName) {

  var Chart = echarts.init(document.getElementById("graduateAbility"),
    "darkTheme");
  var nullValue = [0, 0, 0, 0, 0];
  // 本科
  var undergraduate = {
    name: '本科',
    value: []
  };
  // 高职
  var vocational = {
    name: '高职',
    value: []
  };
  // 维度名
  var indicator = [];
  $.ajax({
    type: 'get',
    url: 'employment/graduateAbility',// 请求数据的地址
    data: {
      majorName: majorName
    },
    dataType: "json", // 返回数据形式为json
    success: function (result) {
      var len = result.length;
      if (len !== 0) {
        for (var i = 0; i < len; i++) {
          if (result[i].type == '本科') {
            indicator.push({
              name: result[i].ability,
              max: 100,
              min: 0
            });
            undergraduate.value.push(result[i].abilityValue);
          } else {
            vocational.value.push(result[i].abilityValue);
          }
        }
      } else {
        indicator = [{name: "技术能力", max: 100, min: 0},
          {name: "执行力", max: 100, min: 0},
          {name: "职业素质", max: 100, min: 0},
          {name: "沟通能力", max: 100, min: 0},
          {name: "学习能力", max: 100, min: 0}];
        undergraduate.value.push(nullValue);
        vocational.value.push(nullValue);
      }

      var option = doubleRadarChart(undergraduate,
        vocational, indicator, '毕业生能力分析');

      option.legend.right = 2;
      option.legend.top = 6;
      option.radar.center = ['50%', '60%'];
      option.backgroundColor = '#202554';
      Chart.setOption(option);

    },
    error: function (errorMsg) {
      // 请求失败时执行该函数
      // alert("图表请求数据失败!");
    }
  });
}

/**
 *
 * 就业率
 *
 */
function employmentRadio(majorName) {

  var Chart = echarts.init(document.getElementById("employmentRadio"),
    "darkTheme");

  var name = [];
  var value = [];
  $.ajax({
    type: 'get',
    url: 'employment/employmentRadio',// 请求数据的地址
    data: {
      majorName: majorName
    },
    dataType: "json", // 返回数据形式为json
    success: function (result) {
      var len = result.length;
      if (len !== 0) {
        for (var i = 0; i < len; i++) {
          name.push(result[i].name);
          value.push(result[i].value);
        }
        var option = barChartSingleVertical(value, '', '百分比');
        option.xAxis.data = name;
        option.series[0].barWidth = 40;
        option.series[0].itemStyle.normal.color = new echarts.graphic.LinearGradient(
          0, 0, 0, 1, [{
            offset: 0,
            color: '#FEBD4F'
          }, {
            offset: 0.5,
            color: '#F9B546'
          }, {
            offset: 1,
            color: '#E79022'
          }]);
        option.legend.show = false;
        option.xAxis.axisLabel.formatter = '{value}年';
        option.backgroundColor = '#191E46';
        option.tooltip.formatter = '{c}%';
        Chart.setOption(option);
      }
    },
    error: function (errorMsg) {
      // 请求失败时执行该函数
      // alert("图表请求数据失败!");
    }
  });

}

/**
 *
 * 毕业生平均薪资跟踪
 *
 */
function salaryCompared(majorName) {
  var Chart = echarts.init(document.getElementById("graduateSalary"),
    "darkTheme");
  $.ajax({
    type: 'get',
    url: 'employment/graduateSalary',// 请求数据的地址
    data: {
      majorName: majorName
    },
    dataType: "json", // 返回数据形式为json
    success: function (result) {
      var len = result.length;
      if (len !== 0) {
        var graduationDuration = []; // 毕业时间
        var averageSalary = []; // 行业平均薪资
        var graduateSalary = []; // 毕业薪资

        // debugger;
        for (var i = 0; i < len; i++) {
          graduationDuration.push(result[i].graduationDuration);
          averageSalary.push(result[i].averageSalary);
          graduateSalary.push(result[i].graduateSalary)
        }

        var option = doubleBarChartSingleVertical(averageSalary,
          graduateSalary, graduationDuration, ["毕业生平均薪资（北京）",
            "毕业生平均薪资"], '', '');
        option.title[0] = {
          left: '3%',
          textStyle: {
            fontSize: 14,
            color: '#8F91A3',
          }
        }
//        option.title[0].text = '行业数据来源于北京地区';
        option.xAxis.axisLine.show = false;
        option.yAxis.axisLine.show = false;
        option.legend.itemGap = 50;
        option.legend.top = 14;
        option.series[0].barWidth = 20;
        option.series[1].barWidth = 20;
        option.series[0].itemStyle.normal.color = new echarts.graphic.LinearGradient(
          0, 0, 0, 1, [{
            offset: 0,
            color: '#37C0FF'
          }, {
            offset: 0.5,
            color: '#26AEFA'
          }, {
            offset: 1,
            color: '#098EF2'
          }]);
        option.series[1].itemStyle.normal.color = new echarts.graphic.LinearGradient(
          0, 0, 0, 1, [{
            offset: 0,
            color: '#F6936F'
          }, {
            offset: 0.5,
            color: '#EF875D'
          }, {
            offset: 1,
            color: '#DB6125'
          }]);
        option.xAxis.axisLabel.formatter = '第{value}年';
        option.backgroundColor = '#202554';
        option.tooltip.formatter = '{a0}: {c0}<br />{a1}: {c1}';

        Chart.setOption(option);
      }
    },
    error: function (errorMsg) {
      // 请求失败时执行该函数
      // alert("图表请求数据失败!");
    }
  });
}
