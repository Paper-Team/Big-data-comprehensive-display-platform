//获取到div底下的canvas，并将宽高拉伸为width、height倍，
function changesCanvas(id, width, height) {
  var canvas = $("#" + id + " canvas")[0];
  canvas.width *= width;
  canvas.height *= height;
}

$(function () {
  loadHtml("professionalOperating1");
  $(".pre").click(function () {
    var index = parseInt($(this).attr("data-index"));
    if (index == 5) {
      // window.location=''
      //alert("第一页了");
    } else {
      var next = index;
      var pre = index - 1;
      if (index == 1) {
        pre = 5;
      }
      $(".next").attr("data-index", next);
      $(this).attr("data-index", pre);
      if (index == 1) {
        loadHtml("professionalOperating1");
        $("#title").text("专业运营");
      } else if (index == 2) {
        loadHtml("professionalanalysis2");
        $("#title").text("专业分析");

      } else if (index == 3) {
        loadHtml("wisdomStudy3");
        $("#title").text("智慧学习");

      } else if (index == 4) {
        loadHtml("wisdomStudy4");
        $("#title").text("智慧学习");

      }
    }

  })
  $(".next").click(function () {
    var index = parseInt($(this).attr("data-index"));
    if (index == 6) {
      // window.location=''
      //alert("最后一页了");
    } else {
      var next = index + 1;
      var pre = index;
      $(this).attr("data-index", next);
      $(".pre").attr("data-index", pre);
      if (index == 1) {
        loadHtml("professionalanalysis2");
        $("#title").text("专业分析");

      } else if (index == 2) {
        loadHtml("wisdomStudy3");
        $("#title").text("智慧学习");

      } else if (index == 3) {
        loadHtml("wisdomStudy4");
        $("#title").text("智慧学习");

      } else if (index == 4) {
        loadHtml("jobAnalysis5");
        $("#title").text("就业分析");

      } else if (index == 5) {
        //返回首页
        loadHtml("professionalOperating1");
        $("#title").text("专业运营");
        $(this).attr("data-index", 1);
      }
    }
  })
  /*
   * $("#main").on("click", ".tab-li", function() {
   * $(this).parent().find("li").removeClass("active");
   * $(this).addClass("active"); console.log($(this).index()); })
   */

})

function loadHtml(url) {
  $.ajax({
    url: url,
    dataType: "html",
    async: false,
    success: function (data) {
      $("#main").html(data);
    }
  })
}

// 判断是否为空
function isNull(data) {
  if (data == undefined || data.length == 0) {
    return true;
  }
  return false;
}

// 从列表中取name为指定值的一项
function getItemFromList(data, name) {
  if (!isNull(data)) {
    for (var item = 0; item < data.length; item++) {
      if (data[item].name == name) {
        return data[item];
      }
    }
  }

}

// 加载数字翻牌
function loadNumbers(id, size, num, liClass, startNum) {
  var s = num + "";
  while (s.length < size)
    s = "0" + s;
  var digits = s.split('');
  if (startNum == undefined) {
    startNum = "";
  }
  while (startNum.length < size)
    startNum = "0" + s;
  for (var i = 0; i < size; i++) {
    // $("#" + id).find('.' + liClass).eq(i).text(digits[i]);
    countUp(id + i, startNum[i], digits[i], 0);
  }
}

// 数字动态变化
/**
 *
 * @param {}
 *            target 目标元素的 ID
 * @param {}
 *            startVal 开始值
 * @param {}
 *            endVal 结束值
 * @param {}
 *            decimals 小数点
 */
function countUp(target, startVal, endVal, decimals) {
  new CountUp(target, startVal, endVal, decimals, 1).start();
}

/**
 *
 * @param {}
 *            target 目标元素的 ID
 * @param {}
 *            startVal 开始值
 * @param {}
 *            endVal 结束值
 * @param {}
 *            decimals 小数点
 * @param {}
 *            options 选项 { useEasing: true, useGrouping: true, separator: ',',
 *            decimal: '.', };
 */
function countUp(target, startVal, endVal, decimals, options) {
  new CountUp(target, startVal, endVal, decimals, 1, options).start();
}

/**
 *将“其他”放到最后
 *
 * @param data 数据
 */
function endOther(data) {
  var result = data;
  for (var i = 0; i < result.length; i++) {
    if (result[i].name == '其他') {
      result.push(temp[i]);
      result.splice(i, 1);
    }
  }
  return result;
}