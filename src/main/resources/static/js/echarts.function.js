var labelSize = 16;
var titleSize = 24;
var titlePositionY = "3%";
var titleWeight = "normal";

//基础折线图
function baseLine(xdata, ydata) {
  var option = {

    tooltip: {
      trigger: 'axis'
    },
    dataZoom: {
      show: false,
      start: 0,
      end: 100
    },
    grid: {
      top: '3%',
      left: '3%',
      right: '4%',
      bottom: '3%',
      zoom: 5,
      containLabel: true
    },
    xAxis: [{
      type: 'category',
      boundaryGap: false,
      axisLine: {
        lineStyle: {
          // color : '#000'
        }
      },
      axisLabel: {
    	interval:'0',
        formatter: '{value}\n时',
        textStyle: {
          fontSize: labelSize
        }
      },
      data: xdata
    }],
    yAxis: [{
      type: 'value',
      scale: false,
      max: 'dataMax',
      splitNumber: 3,
      minInterval: 1,
      maxInterval: 100,
      // interval: 1,
      min: 0,
      // interval : 2, y轴间隔
      boundaryGap: [0.2, 0.2],
      axisLine: {
        lineStyle: {}
      },
      axisLabel: {
        textStyle: {
          fontSize: labelSize
        }
      }
    }],
    series: [{
      type: 'line',
      data: ydata
    }]
  };
  return option;
}


// 基础饼图
function basePie(data, titleText) {
  var option = {
    title: {
      text: '',
      x: 'left',
      textStyle: {
        color: "#fff"
      }
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      data: data,
      x: 'center',
      y: 'bottom'
    },
    series: [{
      name: '',
      type: 'pie',
      radius: '60%', // 图形大小
      center: ['49%', '40%'],
      data: data,
      label: {
        normal: {}
      }
    }]
  };
  return option;
}

// 基础柱状图
function baseBar(xdata, ydata, title) {
  var option = {
    title: {
      text: '',
      x: 'left'
    },
    tooltip: {
      trigger: 'axis'
    },
    xAxis: {
      data: xdata
    },
    yAxis: {},
    series: [{
      name: '',
      type: 'bar',
      data: ydata
    }]
  };
  return option;
}

// 基础柱状图(柱状渐变色)
function baseBarChange(xdata, ydata, title) {
  var option = {
    title: {
      text: '',
      x: 'left'
    },
    tooltip: {
      trigger: 'axis'
    },
    xAxis: {
      data: xdata
    },
    yAxis: {},
    dataZoom: [{
      show: true,
      realtime: true,
      start: 1,
      end: 20
    }],
    series: [{
      name: '',
      type: 'bar',
      data: ydata,
      barCategoryGap: 30, // 同一类底下单个柱之间的距离
      itemStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0,
            1, [{
              offset: 0,
              color: '#FDBD4F'
            }, {
              offset: 0.5,
              color: '#F7B244'
            }, {
              offset: 1,
              color: '#E38719'
            }])
        }
      }
    }]
  };
  return option;
}

// 基础柱状图(双数据源+渐变色)
function baseBarTwoSource(xdata, ydata, y1data, title) {
  var option = {
    title: {
      text: '',
      x: 'left',
      y: '5%',
      textStyle: {
        color: "#fff"
      }
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {
      x: 'right',
      y: '5%',
      data: ['必修课程', '精品课程']
    },
    xAxis: [{
      type: 'category',
      data: xdata,
      axisLabel: {
        // X轴刻度配置
        interval: 'auto'
        // 0：表示全部显示不间隔；auto:表示自动根据刻度个数和宽度自动设置间隔个数
      }
    }],
    yAxis: {},
    dataZoom: [{
      show: true,
      start: 1,
      end: 20
    }],
    series: [{
      name: '必修课程',
      type: 'bar',
      barGap: 0.8, // 同一类底下两个住之间的距离
      data: ydata,
      barWidth: 15, // 柱状的宽度
      itemStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0,
            1, [{
              offset: 0,
              color: '#08f2f2'
            }, {
              offset: 0.5,
              color: '#08f2f2'
            }, {
              offset: 1,
              color: '#14d4d4'
            }]),
//          barBorderRadius: [30, 30, 30, 30]
          // 柱状变圆角
        }
      }
    }, {
      name: '精品课程',
      type: 'bar',
      barWidth: 15,
      data: y1data,
      itemStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0,
            1, [{
              offset: 0,
              color: '#f29508'
            }, {
              offset: 0.5,
              color: '#f2c010'
            }, {
              offset: 1,
              color: '#a88a1c'
            }]),
//          barBorderRadius: [30, 30, 30, 30]
        }
      }
    }]
  };
  return option;
}

/* 饼图 圆 */

/* myLabelSize */
function pieChartCircle(data, title) {
  var option = {

    title: {
      show: false,
      text: title,
      x: 'center',
      y: titlePositionY,
      textStyle: {
        fontSize: titleSize,
        fontWeight: titleWeight,
        color: "#fff"
      }
    },
    legend: {
      orient: 'vertical',
      x: 'right',
      data: convertData(data)
    },
    tooltip: {
      trigger: 'item',
      formatter: "{b}: {c}\n({d}%)"
    },
    series: [{
      name: '',
      type: 'pie',
      radius: '75%',
      center: ['50%', '50%'],
      selectedMode: 'single',
      avoidLabelOverlap: true,
      data: data,
      label: {
        normal: {
          show: false,
          position: 'top',
          textStyle: {
            fontSize: labelSize
            // color: "#fff"
          },
          formatter: "{b}:\n{c}({d}%)"
        }
      },

      labelLine: {
        normal: {
          show: false,
          lineStyle: {
            // color: "#fff"
          }
        }
      }
    }]
  };
  return option;
}

/* 饼图 双环 */
function pieChartRing(data_inner, data_outer, title) {
  var option = {

    title: {
      text: "",
      subtext: "",
      left: "center",
      textStyle: {
        color: "#fff",
        fontSize: 18
      }
    },
    tooltip: {
      trigger: 'item',
      formatter: "{a} <br/>{b}:({d}%)"
    },
    series: [{
      name: '事业线',
      type: 'pie',
      radius: ['10%', '50%'],
      color: ['#ec5d51', '#59abe1', '#f4cf42', '#3dc6a8'],
      label: {
        normal: {
          position: 'inner'
        }
      },
      data: data_inner
    }, {
      name: '分组',
      type: 'pie',
      radius: ['54%', '72%'],
      color: ['#a0dca0', '#60bbb6', '#f78db3', '#feadac',
        '#fae395', '#91d4e5', '#8eb3e8'],
      label: {
        normal: {
          formatter: '{b}\n{d}%'
        }
      },
      data: data_outer
    }]
  };
  return option;
}

var convertData = function (data) {
  var res = [];
  for (var i = 0; i < data.length; i++) {
    var geoCoord = data[i].name;
    if (geoCoord) {
      res.push(geoCoord);
    }
  }
  return res;
};

function getValue(data) {
  var res = [];
  for (var i = 0; i < data.length; i++) {
    var geoCoord = data[i].value;
    if (geoCoord) {
      res.push(geoCoord);
    }
  }
  return res;
}

/* 折线图 多线 数据1，数据2，x轴数据，图例，标题，x轴名字，y轴名字 */
function lineChartMultiple(data1, data2, xData, legend, title, xTitle, yTitle) {

  var option = {
    legend: {
      data: legend,
      textStyle: {
        fontSize: labelSize

      }
    },
    title: [{
      text: title,
      left: 'center',
      subtext: '',
      subtextStyle: {
        align: "center",
        verticalAlign: "middle"
      },
      textStyle: {
        fontSize: titleSize,
        fontWeight: titleWeight,
      }
    }],
    tooltip: {
      trigger: 'axis',
      formatter: function (params) {
        var res = params[0].name;
        for (var i = 0, l = params.length; i < l; i++) {
          res += '<br/>' + params[i].seriesName + ' : '
            + params[i].value;
        }
        return res;
      }
    },
    /*
		 * grid: { x: gridBottomX_noZoom, y: gridBottomY_noZoom, x2:
		 * gridTopX_noLegend, y2: gridTopY_noLegend, containLabel: true },
		 */
    grid: {
      // left : '5%',
      // right : '5%',
      bottom: '1%',
      top: '25%',
      axisLine: {
        lineStyle: {
          color: '#000'
        }
      },
      axisLabel: { // 强制显示所有label
        interval: 0,
        textStyle: {
          color: '#000',
          show: false
        }
      },
      containLabel: true
    },
    xAxis: {
      name: xTitle,
      show: true,
      type: 'category',
      boundaryGap: false,
      axisLine: {
        lineStyle: {
          // color : '#000'
        }
      },
      axisLabel: { // 强制显示所有label
        interval: 0,
        textStyle: {
          fontSize: 12,
          // color : '#000',
          show: false
        }
      },
      data: xData
    },
    yAxis: {
      name: yTitle,
      type: 'value',
      axisTick: {
        show: false
      },
      axisLine: {
        lineStyle: {
          // color : '#000'
        }
      },
      axisLabel: {
        margin: 10,
        textStyle: {
          fontSize: 12
          // color : '#000'
        }
      },
      splitLine: {
        lineStyle: {
          color: '#ccc'
        }
      }
    },
    series: [{
      name: legend[0],
      type: 'line',
      data: data1
    }, {
      name: legend[1],
      type: 'line',
      data: data2
    }]
  };
  return option;
}

/* 柱状图 单数据源 水平 */
function barChartSingleHorizontal(data, title, inverse, itemColor) {
  var echartsData = data;
  var yLabelPosition = 'left';
  if (inverse == true) {
    yLabelPosition = 'right'
  }
  var option = {
    title: {
      text: title,
      x: 'center',
      y: titlePositionY,
      textStyle: {
        fontSize: titleSize,
        fontWeight: titleWeight,
        color: "#fff"

      }
    },

    textStyle: {
      color: "#fff"
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      },
      formatter: '{b}: {c}'
    },
    grid: {
      right: '4%',
      bottom: titlePositionY,
      containLabel: true
    },
    xAxis: [{
      type: 'value',
      inverse: inverse,
      axisLine: {
        show: false,
        lineStyle: {
          color: '#fff'
        }
      },

      axisTick: {
        show: false,
        alignWithLabel: false

      },
      axisLabel: {
        show: false,
        textStyle: {
          fontSize: labelSize
        }
      },
      splitLine: {
        show: false,
        lineStyle: {
          // color: 'rgba(90,177,239, 0.15)'
        }
      }

    }],
    yAxis: {
      type: 'category',
      position: yLabelPosition,
      data: convertData(echartsData),
      axisLine: {
        show: false,
        lineStyle: {
          color: '#fff'
        }
      },
      axisTick: {
        show: false,
        alignWithLabel: false
      },

      axisLabel: {
        textStyle: {
          fontSize: labelSize,
          color: "#fff"
        }
      },
      splitLine: {
        show: false
      }

    },
    series: [{
      data: echartsData,
      type: 'bar',
      barMaxWidth: "20",
      label: {
        normal: {
          show: true,
          position: 'insideRight',
          textStyle: {
            color: '#fff',
            fontSize: labelSize
          }
        }
      },
      itemStyle: {
        normal: {
          color: itemColor
        }
      }
    }]
  };
  return option;
}

/* 柱状图 单数据源 竖直 */
function barChartSingleVertical(data, title, yName) {
  var echartsData = data;
  var option = {

    legend: {},
    title: {
      text: title,
      x: 'left',
      y: titlePositionY,
      textStyle: {
        fontSize: titleSize,
        fontWeight: titleWeight
      }
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      },
      formatter: function (params) {
        var tar = params[0];
        return tar.name + '：' + tar.value;
      }
    },
    grid: {
      left: titlePositionY,
      right: '4%',
      bottom: titlePositionY,
      containLabel: true
    },
    xAxis: {
      type: 'category',
      boundaryGap: true,
      nameTextStyle: {
        fontSize: doubleBarFontSize
      },
      axisLine: {
        show: false,
        lineStyle: {
          // color : '#000000'

        }
      },
      axisLabel: { // 强制显示所有label
        interval: 0,
        textStyle: {
          fontSize: doubleBarFontSize
          // color : '#000'
        }
      },
      data: []
    },
    yAxis: {
      name: yName,
      // min: getMinValue(data),
      type: 'value',
      axisTick: {
        show: false
      },
      axisLine: {
        show: false,
        lineStyle: {
          // color : '#000000'
        }
      },
      nameTextStyle: {
        fontSize: doubleBarFontSize
      },
      axisLabel: {
        margin: 10,
        textStyle: {
          fontSize: doubleBarFontSize
          // color : '#000'
        }
      },
      splitLine: {
        lineStyle: {
          // color : '#57617B'
        }
      }
    },
    series: [{
      name: '数量',
      type: 'bar',
      barWidth: '60%',
      data: echartsData,
      itemStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 1, 0,
            0, [{
              offset: 0,
              color: 'rgba(90,177,239, 0.6)' // 0%
              // 处的颜色
            }, {
              offset: 1,
              color: 'rgba(90,177,239, 1)' // 100%
              // 处的颜色
            }]),
          shadowColor: 'rgba(0, 0, 0, 0.1)',
          shadowBlur: 1,
          borderColor: 'rgba(90,177,239, 0.8)',
          // borderWidth:2,
          barBorderRadius: [3, 3, 3, 3],
          opacity: 0.9,
          label: { // 柱状图顶端显示标签
            show: false,
            position: 'top',
            textStyle: {
              color: '#000000',
              fontSize: labelSize
            }
          }
        }
      }
    }]
  };
  return option;
}

// 中国地图
function chinaMap(data) {
  var option = {
    title: {
      textStyle: {},
      show: true
    },
    tooltip: {
      trigger: 'item',
      showDelay: 0,
      transitionDuration: 0.2,
      textStyle: {},
      formatter: function (params) {
        var value = (params.value + '').split('.');
        value = value[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g,
          '$1,');
        return params.seriesName + '<br/>' + params.name + ': ' + value;
      }
    },
    visualMap: {
      show: false,
      left: 'right',
      min: 1,
      max: 150,
      //热力图颜色
      inRange: {
        color: ['#febf64', '#f99f1d', '#F0AB15', '#e1822b', '#df2d0d', '#cb0008']
      },
      text: ['High', 'Low'], // 文本，默认为数值文本
      calculable: true
    },
    toolbox: {
      show: false,
      // orient: 'vertical',
      left: 'left',
      top: 'top',
      feature: {
        dataView: {
          readOnly: false
        },
        restore: {},
        saveAsImage: {}
      }
    },
    itemStyle: {
      normal: {
        borderWidth: 0
      }
    },
    geo: {
      show: true,
//			center : [103.23, 35.33],
      map: 'china2',
      label: {
        normal: {
          show: true
        },
        emphasis: {
          show: true
        }
      },
      roam: true,
      itemStyle: {
        normal: {
          areaColor: '#031525',
          borderColor: '#fff'
        },
        emphasis: {
          areaColor: '#2B91B7'
        }
      }
    },
    series: [{
      type: 'map',
      map: 'china2',
      geoIndex: 0,
      aspectScale: 0.75, // 长宽比
      showLegendSymbol: false, // 存在legend时显示
      label: {
        normal: {
          show: true
        },
        emphasis: {
          show: false,
          textStyle: {
            color: '#fff'
          }
        }
      },
      roam: true,
      itemStyle: {
        normal: {
          areaColor: '#fff',
          borderColor: '#000'
        },
        emphasis: {
          areaColor: '#2B91B7'
        }
      },
      animation: false,
      data: data
    }]
  }
  return option;
}

function chinaMapChart(id, data, geoCoordMap, title) {
  var option = {
    backgroundColor: '#404a59',
    title: {
      text: title,
      left: 'center',
      textStyle: {
        color: '#fff'
      }
    },
    tooltip: {
      trigger: 'item',
      formatter: function (params) {
        return params.value[2] + '人';
      }
    },
    geo: {
      map: 'china',
      zoom: 1.25,
      label: {
        emphasis: {
          show: false
        }
      },
      roam: true,
      itemStyle: {
        normal: {
          areaColor: '#323c48',
          borderColor: '#111'
        },
        emphasis: {
          areaColor: '#2a333d'
        }
      }
    },
    series: [
      /*
				 * { name: 'network', type: 'scatter', coordinateSystem: 'geo',
				 * data: convertData(data), symbolSize: function (val) { return
				 * val[2] / 30; }, label: { normal: { formatter: '{b}',
				 * position: 'right', show: false }, emphasis: { show: true } },
				 * itemStyle: { normal: { color: '#C87233' } } },
				 */
      {
        name: 'Top 5',

        type: 'effectScatter',
        coordinateSystem: 'geo',
        data: convertDataMap(data, geoCoordMap),
        symbolSize: function (val) {
          return val[2] / 30;
        },
        showEffectOn: 'render',
        rippleEffect: {
          brushType: 'stroke'
        },
        hoverAnimation: true,
        label: {
          normal: {
            formatter: '{b}',
            position: 'right',
            show: true
          }
        },
        itemStyle: {
          normal: {
            color: '#F5EA50',
            shadowBlur: 5,
            shadowColor: '#333'
          }
        },
        zlevel: 1
      }]
  };
  return option;

}

var convertDataMap = function (data, geoCoordMap) {
  var res = [];
  for (var i = 0; i < data.length; i++) {
    var geoCoord = geoCoordMap[data[i].name];
    if (geoCoord) {
      res.push({
        name: data[i].name,
        value: geoCoord.concat(data[i].value)
      });
    }
  }
  return res;
};

function dynamicLineChart(data) {
  var option = {

    tooltip: {
      trigger: 'axis'
    },
    dataZoom: {
      show: false,
      start: 0,
      end: 100
    },
    grid: {
      top: '3%',
      left: '3%',
      right: '4%',
      bottom: '3%',
      zoom: 5,
      containLabel: true
    },
    xAxis: [{
      type: 'category',
      boundaryGap: false,
      axisLine: {
        lineStyle: {
          // color : '#000'
        }
      },
      axisLabel: {
        textStyle: {
          fontSize: labelSize
          // color : '#000'
        }
      },
      data: (function () {
        var now = new Date();
        var res = [];
        var len = 10;
        while (len--) {
          res.unshift(now.toLocaleTimeString("zh-CN").replace(/^\D*/,
            ''));
          now = new Date(now - 2000);
        }
        return res;
      })()
    }],
    yAxis: [{
      type: 'value',
      scale: false,
      max: 'dataMax',
      splitNumber: 3,
      minInterval: 1,
      maxInterval: 100,
      // interval: 1,
      min: 0,
      // interval : 2, y轴间隔
      boundaryGap: [0.2, 0.2],
      axisLine: {
        lineStyle: {
          // color : '#000000'
        }
      },
      axisLabel: {
        textStyle: {
          fontSize: labelSize
          // color : '#000'
        }
      }
    }],
    series: [{
      type: 'line',
      data: data
    }]
  };

  var axisData = (new Date()).toLocaleTimeString("zh-CN").replace(/^\D*/, '');
  option.xAxis[0].data.shift();
  option.xAxis[0].data.push(axisData);

  return option;
}

// 折线图
function lineChart(data, title, type, unit) {
  var startVal = data[0].name;
  var len = data.length;
  var endVal = data[len - 1].name;
  option = {

    title: {
      text: title,
      x: 'center',
      y: titlePositionY,
      textStyle: {
        fontSize: titleSize,
        fontWeight: titleWeight
      }
    },
    tooltip: {
      trigger: 'axis',
      formatter: function (params) {
        return params[0].name + ': ' + params[0].value
          + (unit === undefined ? "" : unit);
      }
    },
    grid: {
      top: '3%',
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      min: startVal,
      max: endVal,
      axisLine: {
        lineStyle: {
          color: '#000'

        }
      },
      data: convertData(data)
    },
    yAxis: {
      type: 'value',
      axisTick: {
        show: false
      },
      axisLine: {
        lineStyle: {
          color: '#000'
        }
      },
      axisLabel: {
        margin: 10,
        formatter: function (value) {
          if (unit === undefined) {
            return value;
          }
          return value + unit;
        },
        textStyle: {
          fontSize: labelSize,
          color: '#000'
        }
      },
      splitLine: {
        lineStyle: {
          color: '#666'
        }
      }
    },
    series: [{
      type: 'line',
      data: data
    }]
  };
  return option;
}

function lineBarChart(data, title, unit1, unit2) {
  var series = [], xAxis = "", legend = [];
  for (var ob in data) {
    if (ob === "时长") {
      legend.push(ob);
      series.push({
        name: ob,
        type: 'bar',
        barMaxWidth: '30',
        data: data[ob]
      });
    } else if (ob === "场次") {
      legend.push(ob);
      series.push({
        name: ob,
        type: 'line',
        yAxisIndex: 1,
        data: data[ob]
      });
    } else {
      xAxis = data[ob];
    }
  }

  var option = {

    color: ['#5ab1ef', '#C05151'],
    title: {
      show: false,
      text: title,
      left: 'center',
      top: 0,
      textStyle: {
        color: '#fff'
      }
    },
    legend: {
      data: legend,
      textStyle: {
        color: '#000'
      },
      top: 'auto',
      left: 'center'
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        crossStyle: {
          color: '#999'
        }
      }
    },
    xAxis: [{
      type: 'category',
      data: xAxis,
      /*
					 * axisPointer: { type: 'shadow' }
					 */
      axisLine: {
        lineStyle: {
          color: '#000'
        }
      },
      axisLabel: {
        margin: 10,
        textStyle: {
          fontSize: labelSize,
          color: '#000'
        }
      }
    }],
    yAxis: [{
      type: 'value',
      name: '时长',
      // min: 0,
      max: 'dataMax',
      minInterval: 1,
      maxInterval: 100,
      axisLabel: {
        formatter: '{value}' + unit1,
        margin: 10,
        textStyle: {
          fontSize: labelSize,
          color: '#000'
        }
      },
      axisLine: {
        lineStyle: {
          color: '#000'
        }
      }
    }, {
      type: 'value',
      name: '场次',
      // min: 1.5,
      max: 'dataMax',
      minInterval: 1,
      maxInterval: 100,
      axisLabel: {
        formatter: '{value}' + unit2,
        margin: 10,
        textStyle: {
          fontSize: labelSize,
          color: '#000'
        }
      },
      axisLine: {
        lineStyle: {
          color: '#000'
        }
      }
    }],
    series: series
  };
  return option;
}

function getMinMaxValue(data) {
  var result = [100, 0];
  for (var ob in data) {
    for (var item in data[ob]) {
      if (data[ob][item] < result[0]) {
        result[0] = data[ob][item];
      }
      if (data[ob][item] > result[1]) {
        result[1] = data[ob][item];
      }
    }
  }
  result[0] = Math.floor(result[0] / 10) * 10;
  result[1] = Math.ceil(result[1] / 10) * 10;

  return result;
}

// 仪表盘
function dashboard(data, title) {
  var option = {
    tooltip: {
      formatter: "{a} <br/>{b} : {c}%"
    },
    series: [{
      name: '',
      type: 'gauge',
      detail: {
        formatter: '{value}%'
      },
      data: [{
        value: data,
        name: title
      }],
      axisLine: {
        show: true,
        lineStyle: {
          color: [[0.2, '#E9726E'], [0.8, '#2FC8CA'], [1, '#5EB263']]
        }
      }
    }]
  };
  return option;
}

// 玫瑰图
function rosePie(data, title) {
  var option = {

    title: {
      text: title,
      x: 'center'
    },
    tooltip: {
      trigger: 'item',
      formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
      data: ['rose1', 'rose2', 'rose3', 'rose4', 'rose5', 'rose6',
        'rose7', 'rose8'],
      testStyle: {
        fontSize: 28
      }
    },
    toolbox: {
      show: true,
      feature: {
        mark: {
          show: true
        },
        dataView: {
          show: true,
          readOnly: false
        },
        magicType: {
          show: true,
          type: ['pie', 'funnel']
        },
        restore: {
          show: true
        },
        saveAsImage: {
          show: true
        }
      }
    },
    calculable: true,
    series: [{
      name: '半径模式',
      type: 'pie',
      radius: [20, 110],
      center: ['25%', '50%'],
      roseType: 'radius',
      label: {
        normal: {
          show: false
        },
        emphasis: {
          show: true
        }
      },
      lableLine: {
        normal: {
          show: false
        },
        emphasis: {
          show: true
        }
      },
      data: data
    }]
  };
  return option;
}

var doubleBarFontSize = 16;

/* 柱状图 双数据源 竖直 doubleBarChartSingleVertical(数据1，数据2，x轴数据，图例，x轴名字，y轴名字 */
function doubleBarChartSingleVertical(data1, data2, xData, legend, xName, yName) {
  var option = {
    title: [{
      text: ''
    }],
    legend: {
      data: legend,
      textStyle: {
        fontSize: doubleBarFontSize
      }
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
      left: titlePositionY,
      right: '4%',
      bottom: titlePositionY,
      containLabel: true
    },
    xAxis: {
      name: xName,
      nameGap: -2,
      type: 'category',
      boundaryGap: true,
      axisLine: {},
      nameTextStyle: {
        fontSize: doubleBarFontSize
      },
      axisLabel: {
        fontSize: doubleBarFontSize
      },
      data: xData
    },
    yAxis: {
      axisLine: {},
      name: yName,
      type: 'value',
      nameTextStyle: {
        fontSize: doubleBarFontSize
      },
      axisLabel: {
        fontSize: doubleBarFontSize
      }
    },
    series: [{
      name: legend[0],
      type: 'bar',
      data: data1,
      animationDelay: function (idx) {
        // 越往后的数据延迟越大
        return idx * 100;
      },
      animationDelayUpdate: function (idx) {
        // 越往后的数据延迟越大
        return idx * 100;
      },
      barGap: '30%',
      itemStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0,
            1, [{
              offset: 0,
              color: '#FDBD4E'
            }, {
              offset: 0.5,
              color: '#EB9829'
            }, {
              offset: 1,
              color: '#E69021'
            }]),
          label: { // 柱状图顶端显示标签
            show: false,
            position: 'top',
            textStyle: {
              fontSize: labelSize
            }
          }
        }
      }
    }, {
      name: legend[1],
      type: 'bar',
      data: data2,
      barGap: '30%',
      animationDelay: function (idx) {
        // 越往后的数据延迟越大
        return idx * 100;
      },
      animationDelayUpdate: function (idx) {
        // 越往后的数据延迟越大
        return idx * 100;
      },
      itemStyle: {
        normal: {
          // 颜色渐变
          color: new echarts.graphic.LinearGradient(0, 0, 0,
            1, [{
              offset: 0,
              color: '#4ADBBB'
            }, {
              offset: 0.5,
              color: '#45BFC0'
            }, {
              offset: 1,
              color: '#42A6C5'
            }]),
          label: { // 柱状图顶端显示标签
            show: false,
            position: 'top',
            textStyle: {
              fontSize: labelSize
            }
          }
        }
      }
    }]
  };
  return option;
}

/* 饼图 圆 就业岗位分布图专用 */
function pieChartCircleEmploymentPosition(data, title) {
  var option = {

    title: {
      show: false,
      text: title,
      x: 'center',
      y: titlePositionY,
      textStyle: {
        fontSize: titleSize,
        fontWeight: titleWeight,
        color: "#fff"
      }
    },
    legend: {
      textStyle: {}
    },
    tooltip: {
      trigger: 'item',
      formatter: "{b}: {c}\n({d}%)"
    },
    series: [{
      name: '',
      type: 'pie',
      radius: '75%',
      center: ['50%', '40%'],
      selectedMode: 'single',
      animationDelay: function (idx) {
        // 越往后的数据延迟越大
        return idx * 100;
      },
      animationDelayUpdate: function (idx) {
        // 越往后的数据延迟越大
        return idx * 100;
      },
      avoidLabelOverlap: true,
      data: data
      //   .sort(function (a, b) {
      //   return a.value - b.value;
      // })
      ,
      label: {
        normal: {
          show: true,
          position: 'top',
          textStyle: {
            fontSize: labelSize
            // color: "#fff"
          },
          formatter: "{b}:\n{c}({d}%)"
        }
      },

      labelLine: {
        normal: {
          show: true,
          lineStyle: {
            // color: "#fff"
          }
        }
      }
    }]
  };
  return option;
}

// 获取legend(数据源, 行数)
function getLegend(data, row) {
  var legend = data;
  var count = 0;
  for (var i = 0; i < legend.length; i++) {
    count++;
    if (count == row) {
      legend.splice(i + 1, 0, '\n');
      i += 1;
      count = 0;
    }
  }
  return legend;
}

/* 柱状图 多数据源 竖直 */
function barChartMultipleVertical(data, title) {
  var series = [];
  var legendData = [];
  var xAxis = data.name;
  var jsonData = data.value;
  for (var ob in jsonData) {
    series.push({
      name: ob,
      type: 'bar',
      data: jsonData[ob]
    });
    legendData.push(ob);
  }

  var option = {
    title: {
      text: title,
      x: 'center',
      y: titlePositionY,
      textStyle: {
        fontSize: titleSize,
        fontWeight: titleWeight
      }
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      show: false,
      data: legendData
    },
    grid: {
      right: '7%',
      bottom: '7%',
      containLabel: true
    },
    xAxis: [{
      type: 'category',
      data: xAxis,
      axisLine: {
        lineStyle: {
          color: '#000000'

        }
      }
    }],
    yAxis: [{
      type: 'value',
      axisLine: {
        lineStyle: {
          color: '#000000'

        }
      }
    }],
    series: series
  };
  return option;
}

/* 雷达图 */
function radarChart(data, title) {
  var value = [];
  var name = [];
  for (var i in data) {
    name.push({
      name: data[i].name,
      max: 100,
      min: 0
    });
    value.push(data[i].value);
  }

  var option = {
    title: {
      text: title,
      x: 'left',
      textStyle: {
        fontSize: titleSize,
        fontWeight: titleWeight
      }
    },
    tooltip: {},
    radar: {
      radius: '60%',
      splitNumber: 8,
      axisLine: {
        lineStyle: {
          color: '#fff',
          opacity: .2
        }
      },
      name: {
        textStyle: {
          fontSize: '10'
        }
      },
      splitLine: {
        lineStyle: {
          color: '#fff',
          opacity: .2
        }
      },
      splitArea: {
        areaStyle: {
          color: 'rgba(127,95,132,.3)',
          opacity: 1,
          shadowBlur: 45,
          shadowColor: 'rgba(0,0,0,.5)',
          shadowOffsetX: 0,
          shadowOffsetY: 15
        }
      },
      indicator: name
    },
    series: [{
      name: '',
      type: 'radar',
      symbolSize: 0,
      areaStyle: {
        normal: {
          shadowBlur: 13,
          shadowColor: 'rgba(0,0,0,.2)',
          shadowOffsetX: 0,
          shadowOffsetY: 0,
          opacity: 0.5
        }
      },
      data: [{
        value: value,
        name: '数量'
      }]
    }]
  };
  return option;
}

/* 雷达图 双层 */
function doubleRadarChart(data1, data2, indicator, title) {
  var option = {
    radar: {
      center: ['50%', '50%']
    },
    title: {
      text: title,
      x: 'left',
      textStyle: {
        fontSize: titleSize,
        fontWeight: titleWeight
      }
    },
    legend: {
      show: true
    },
    tooltip: {},
    radar: {
      radius: '60%',
      splitNumber: 8,
      axisLine: {
        lineStyle: {
          color: '#fff',
          opacity: .2
        }
      },
      name: {
        textStyle: {
          fontSize: '10'
        }
      },
      splitLine: {
        lineStyle: {
          color: '#fff',
          opacity: .2
        }
      },
      splitArea: {
        areaStyle: {
          color: 'rgba(127,95,132,.3)',
          opacity: 1,
          shadowBlur: 45,
          shadowColor: 'rgba(0,0,0,.5)',
          shadowOffsetX: 0,
          shadowOffsetY: 15
        }
      },
      indicator: indicator
    },
    series: [{
      name: '',
      type: 'radar',
      symbolSize: 0,
      areaStyle: {
        normal: {
          shadowBlur: 13,
          shadowColor: 'rgba(0,0,0,.2)',
          shadowOffsetX: 0,
          shadowOffsetY: 0,
          opacity: 0.5
        }
      },
      data: [data1, data2]
    }]
  };
  return option;
}

/* 百分比图 */
function barChartSingleVerticalRotateLimit(data, title) {
  var echartsData = data;
  var option = {
    title: {
      text: title,
      x: 'center',
      y: titlePositionY,
      textStyle: {
        fontSize: titleSize,
        fontWeight: titleWeight
      }
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      },
      formatter: "{b}: {c}%"
    },
    grid: {
      right: '7%',
      bottom: '7%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      boundaryGap: true,
      axisLine: {
        lineStyle: {
          color: '#000000'

        }
      },
      axisLabel: { // 强制显示所有label
        rotate: -20,
        interval: 0,
        textStyle: {
          fontSize: labelSize
        }
      },
      data: convertData(echartsData)
    },
    yAxis: {
      type: 'value',
      min: getMinValue(data),
      max: 100,
      axisTick: {
        show: false
      },
      axisLine: {
        lineStyle: {
          color: '#000000'
        }
      },
      axisLabel: {
        margin: 10,
        textStyle: {
          fontSize: labelSize
        }
      },
      splitLine: {
        lineStyle: {
          color: '#57617B'
        }
      }
    },
    series: [{
      name: '数量',
      type: 'bar',
      barWidth: '60%',
      data: echartsData,
      itemStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 1, 0,
            0, [{
              offset: 0,
              color: 'rgba(90,177,239, 0.6)' // 0%
              // 处的颜色
            }, {
              offset: 1,
              color: 'rgba(90,177,239, 1)' // 100%
              // 处的颜色
            }]),
          shadowColor: 'rgba(0, 0, 0, 0.1)',
          shadowBlur: 1,
          borderColor: 'rgba(90,177,239, 0.8)',
          // borderWidth:2,
          barBorderRadius: [3, 3, 3, 3],
          opacity: 0.9,
          label: { // 柱状图顶端显示标签
            show: true,
            position: 'top',
            textStyle: {
              color: '#000000',
              fontSize: labelSize
            },
            formatter: "{c}%"
          }
        }
      }
    }]
  };
  return option;
}

// 象形柱图
function pictorialBar(manData, womanData) {
  var option = {
    tooltip: {
      show: false,
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
      containLabel: true,
      left: 20
    },
    yAxis: {
      data: ['本科', '高职'],
      inverse: true,
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        margin: 30,
        textStyle: {
          fontSize: 24
        }
      },
      axisPointer: {
        label: {
          show: true,
          margin: 30
        }
      }
    },
    xAxis: {
      splitLine: {
        show: false
      },
      axisLabel: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLine: {
        show: false
      }
    },
    series: [{
      name: '男',
      type: 'pictorialBar',
      label: {
        show: true,
        textStyle: {
          fontSize: 24
        },
        align: 'right',
        position: [430, 0],
        formatter: '{c}人'
      },
      symbolRepeat: true,
      symbolSize: [30, 60],
      barCategoryGap: '41%',
      symbol: 'image://img/jobanalysis5/jyfx_man.png',
      data: manData
    }, {
      name: '女',
      type: 'pictorialBar',
      barGap: '250%',
      label: {
        show: true,
        textStyle: {
          fontSize: 24
        },
        align: 'right',
        position: [430, 0],
        formatter: '{c}人'
      },
      symbolRepeat: true,
      symbolSize: [30, 60],
      barCategoryGap: '41%',
      symbol: 'image://img/jobanalysis5/jyfx_woman.png',
      data: womanData
    }]
  }
  return option;
}

// 百分比饼图
function percentPie(data, color) {
  var option = {
    title: {
      text: data + '%',
      x: 'center',
      y: 'center',
      textStyle: {
        fontWeight: 'normal',
        color: color,
        fontSize: '18'
      }
    },
    color: ['rgba(176, 212, 251, 1)'],
    legend: {
      show: false,
      itemGap: 12,
      data: ['01', '02']
    },

    series: [{
      name: 'Line 1',
      type: 'pie',
      clockWise: true,
      radius: ['65%', '75%'],
      itemStyle: {
        normal: {
          label: {
            show: false
          },
          labelLine: {
            show: false
          }
        }
      },
      hoverAnimation: false,
      data: [{
        value: data,
        name: '01',
        itemStyle: {
          normal: {
            color: { // 完成的圆环的颜色
              colorStops: [{
                offset: 0,
                color: color
                // 0% 处的颜色
              }, {
                offset: 1,
                color: color
                // 100% 处的颜色
              }]
            },
            label: {
              show: false
            },
            labelLine: {
              show: false
            }
          }
        }
      }, {
        name: '02',
        value: (100 - data),
        itemStyle: {
          normal: {
            color: {
              colorStops: [{
                offset: 0,
                color: '#74778f' // 0%
                // 处的颜色
              }, {
                offset: 1,
                color: '#74778f' // 100%
                // 处的颜色
              }]
            },
            label: {
              show: false
            },
            labelLine: {
              show: false
            }
          }
        }
      }]
    }]
  };
  return option;
}
