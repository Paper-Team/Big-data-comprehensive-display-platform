$(function () {
  baseInfo("majorOpration/majorOprationBase");
  // 就业总人数
  jiuye("employmentEcharts", "majorOpration/majorEmploymentRate");
  engineerBackground("engineerBackgroundEcharts",
    "majorOpration/engineerBackground");
  // 学生分布地图
  studentsMap();
})

function baseInfo(url) {
  $.ajax({
    url: url,
    dataType: 'json',
    async: false,
    type: 'GET',
    success: function (data) {
      var item1, item2, item3, item4, item5;
      item1 = getItemFromList(data, "合作院校");
      item2 = getItemFromList(data, "运营团队");
      item3 = getItemFromList(data, "支撑人员");
      item4 = getItemFromList(data, "在校学生");
      item5 = getItemFromList(data, "就业总人数");

      // 合作院校
      countUp("d1-hezuoyuanxiao", 0, item1.dataUndergraduate
        + item1.dataVocational, 0);
      countUp("d1-benke", 0, item1.dataUndergraduate, 0);
      countUp("d1-gaozhi", 0, item1.dataVocational, 0);
      // 在校学生
      countUp("d2-zaixiaoxuesheng", 0, item4.dataUndergraduate
        + item4.dataVocational, 0);
      countUp("d2-benke", 0, item4.dataUndergraduate, 0);
      countUp("d2-gaozhi", 0, item4.dataVocational, 0);

//					$("#d2-zaixiaoxuesheng").text(item4.dataUndergraduate
//							+ item4.dataVocational);
//					$("#d2-benke").text(item4.dataUndergraduate);
//					$("#d2-gaozhi").text(item4.dataVocational);

      // 运营团队
      countUp("d3-yunyingtuandui", 0, item2.dataUndergraduate
        + item2.dataVocational, 0);
      countUp("d3-benke", 0, item2.dataUndergraduate, 0);
      countUp("d3-gaozhi", 0, item2.dataVocational, 0);

//					$("#d3-yunyingtuandui").text(item2.dataUndergraduate
//							+ item2.dataVocational);
//					$("#d3-benke").text(item2.dataUndergraduate);
//					$("#d3-gaozhi").text(item2.dataVocational);

      // 支撑人员
      countUp("d4-zhichengrenyuan", 0, item3.dataUndergraduate
        + item3.dataVocational + item3.dataOther, 0);
      countUp("d4-yanfa", 0, item3.dataUndergraduate, 0);
      countUp("d4-sheji", 0, item3.dataVocational, 0);
      countUp("d4-shishi", 0, item3.dataOther, 0);


//					$("#d4-zhichengrenyuan").text(item3.dataUndergraduate
//							+ item3.dataVocational + item3.dataOther);
//					$("#d4-yanfa").text(item3.dataUndergraduate);
//					$("#d4-sheji").text(item3.dataVocational);
//					$("#d4-shishi").text(item3.dataOther);
      // 就业总人数
      loadNumbers("d5-jiuyezongrenshu", 5, item5.dataOther,
        "peopleNumbLi")
    },
    error: function () {
    }
  })
}

// 学生人数分布地图
function studentsMap() {
  var chart = echarts.init(document.getElementById('map'), "darkTheme",{devicePixelRatio: 1});
  $.ajax({
    url: "majorOpration/queryProvinceSchoolNumberList",
    dataType: 'json',
    async: false,
    type: 'GET',
    success: function (result) {
      var option = chinaMap(result);

      result.push({
          name: "天津",
          value: 0
        },{
          name: "西藏",
          value: 0
        }, {
          name: "海南",
          value: 0
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
        }
      )

      option.visualMap.min = 1;
      option.visualMap.max = 5;
      option.visualMap.inRange = {
        color: ['#febf64', '#f99f1d', '#F0AB15', '#e1822b', '#df2d0d', '#cb0008']
      };

      option.geo.label = {
        normal: {
          fontSize: 18,
          color: '#640802',
          show: true
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
      option.geo.aspectScale = 0.5;

      option.tooltip.textStyle = {
        fontSize: 20
      };
      option.tooltip.formatter = '{b}：{c}所';
      option.series[0].map = 'china2'; // china2是china.js中registerMap的值，这样可以去掉“南海诸岛”

      chart.on("click", showProvince);
      chart.clear();
      chart.setOption(option);

      // changesCanvas('map', 1, 0.5);
      // chart.resize();
      // window.onresize = function () {
      //   chart.resize();
      // }
    },
    error: function () {
    }

  })
}

/**
 * 显示省图
 *
 * @param param 省名
 */
function showProvince(param) {

  if (param.data.value == 0) {

  } else {
    var name = param.data.name;
    $.get('js/chinaMap/' + name + '.json', function (geoJson) {

      echarts.registerMap(name, geoJson);

      var chart = echarts.init(document.getElementById('map'));

      chart.clear();

      $.get('majorOpration/getProvinceSchoolList?province=' + name,
        function (data) {

          chart.clear();
          chart.off("click", showProvince);
          chart.setOption(provinceMap(data, name));

        });

    });
  }


}

/**
 * 省市地图
 *
 * @param {}
 *            data
 * @param {}
 *            title
 * @return {}
 */
function provinceMap(data, title) {
  var seriesdata = [];
  var schoolName = [];
  var color = ['#c23531', '#2f4554', '#2b46a8', '#d48265', '#f500ff', '#45ea00', '#ff9f10', '#bda29a', '#6e7074', '#73a7f6', '#ffe100'];
  if (data != null && data != "") {
    for (var i = 0; i < data.length; i++) {
      schoolName.push(data[i].name);
      seriesdata.push({
        name: data[i].name,
        value: data[i].value.split(",")
      });
    }
  }
  var series = [];

  for (var i = 0; i < seriesdata.length; i++) {
    var value = [];
    value.push(seriesdata[i]);
    series.push({
      name: seriesdata[i].name,
      type: 'effectScatter',
      coordinateSystem: 'geo',
      data: value,
      symbolSize: 20,
      showEffectOn: 'render',
      rippleEffect: {
        period: 3,
        scale: 4,
        brushType: 'fill'
      },
      hoverAnimation: true,
      label: {
        normal: {
          formatter: '{b}',
          position: 'right',
          fontSize: 16,
          color: '#fff',
          show: false
        }
      },
      itemStyle: {
        normal: {
          color: color[i],
          shadowBlur: 10,
          shadowColor: '#fff'
        }
      },
      zlevel: 1
    })
  }

  option = {
    title: {
      show: false,
      text: title,
      left: 'center',
      textStyle: {
        fontSize: 50,
        color: '#fff'
      }
    },
    graphic: {
      id: 'closeBtn',
      type: 'circle',
      shape: {
        r: 20
      },
      style: {
        text: 'X',
        fill: '#eee'
      },
      right: 10,
      top: 10,
      onclick: function () {
        studentsMap();
      }
    },
    tooltip: {
      textStyle: {
        fontSize: 20
      },
      formatter: '{b}',
    },
    legend: {
      orient: 'vertical',
      left: 1,
      data: schoolName,
      textStyle: {
        color: '#fff',
        fontSize: 20
      }
    },
    geo: {
      map: title,
      aspectScale: 0.5,
      label: {
        normal: {
          show: false
        },
        emphasis: {
          show: false
        }
      },
      roam: true,
      itemStyle: {
        normal: {
          areaColor: '#549AD7',
          borderColor: '#111'
        },
        emphasis: {
          show: true
        }
      }
    },
    series: series
  };
  return option;
}

// 就业总人数
function jiuye(id, url) {
  // 如果要ajax后获取请求到的参数，必须用同步, async: false
  var myChart = echarts.init(document.getElementById(id), "darkTheme");
  $.ajax({
    url: url,
    dataType: 'json',
    async: true,
    type: 'GET',
    success: function (data) {
      for (var c in data) {
        data[c].value = data[c].value * 100;
      }
      var option = barChartSingleVertical(data, "专业就业率（%）");
      option.xAxis.data = convertData(data);
      option.legend.show = false;
      option.title.textStyle.fontSize = 18;
      option.series[0].barWidth = 40;
      option.series[0].itemStyle = {
        normal: {
          // 颜色渐变
          color: new echarts.graphic.LinearGradient(0, 0, 0,
            1, [{
              offset: 0,
              color: '#4ADCBB'
            }, {
              offset: 0.5,
              color: '#49D3BD'
            }, {
              offset: 1,
              color: '#427F9F'
            }]),
          label: { // 柱状图顶端显示标签
            show: true,
            position: 'top',
            textStyle: {
              color: 'white',
              fontSize: labelSize
            },
            formatter: function (echartsData) {
              if (echartsData.value > 0.0) {
                return '';
              } else {
                return '本\n专\n业\n方\n向\n暂\n无\n毕\n业\n生\n\n\n\n';
              }
            }
          }
        }
      };
      option.tooltip.formatter = '{c}%';
      option.backgroundColor = '#202554';
      myChart.setOption(option);

    },
    error: function () {
    }
  })
}

// 工程师行业背景
function engineerBackground(id, url) {
  // 如果要ajax后获取请求到的参数，必需用同步, async: false
  var myChart = echarts.init(document.getElementById(id), "darkTheme");
  $.ajax({
    url: url,
    dataType: 'json',
    async: true,
    type: 'GET',
    success: function (data) {
      var center = ['40%', '60%'];
      var option = rosePie(data, "");

      option.color = ['#6EE420', '#FFC760', '#FB497C', '#6EE420',
        '#FFC760', '#FB497C'];
      option.toolbox.show = false;
      option.legend = {
        data: convertData(data),
        orient: 'vertical',
        right: 30,
        textStyle: {
          fontSize: 24
        },
        itemGap: 20,// 图例间隔
        y: 'center'
      }
      option.series[0].center = center;
      option.series[0].clockwise = false;
      option.series[0].radius = [40, 110];
      option.series[0].startAngle = 90;
      option.series[0].name = '行业背景人数';
      option.series[0].label.normal.show = true;
      option.series[0].label.normal.formatter = '{b}\n{c}人';
      option.series[0].label.normal.fontSize = 20;
      option.series[0].itemStyle = {
        normal: {
          shadowBlur: 200,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }

      var series = {
        name: '半径模式',
        type: 'pie',
        radius: [33],
        center: center,
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
      option.backgroundColor = '#202554';
      myChart.setOption(option);

    },
    error: function () {
    }
  })
}
