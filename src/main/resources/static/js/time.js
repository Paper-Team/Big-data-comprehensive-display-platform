function showtime() {
	var today, hour, second, minute, year, month, date;
	var strDate;

	today = new Date();

	var n_day = today.getDay();

	switch(n_day) {
		case 0:
			{
				strDate = "星期日"
				break;
			}
		case 1:
			{
				strDate = "星期一"
				break;
			}
		case 2:
			{
				strDate = "星期二"
				break;
			}
		case 3:
			{
				strDate = "星期三"
				break;
			}
		case 4:
			{
				strDate = "星期四"
				break;
			}
		case 5:
			{
				strDate = "星期五"
				break;
			}
		case 6:
			{
				strDate = "星期六"
				break;
			}
		case 7:
			{
				strDate = "星期日"
				break;
			}

	}

	year = today.getFullYear();
	month = today.getMonth() + 1;
	date = today.getDate();
	hour = today.getHours();
	minute = today.getMinutes();
	second = today.getSeconds();

	if(month >= 1 && month <= 9) {
		month = "0" + month;
	}

	if(date >= 0 && date <= 9) {
		date = "0" + date;
	}

	if(hour >= 0 && hour <= 9) {
		hour = "0" + hour;
	}

	if(minute >= 0 && minute <= 9) {
		minute = "0" + minute;
	}

	if(second >= 0 && second <= 9) {
		second = "0" + second;
	}
	var dates = year + "年" + month + "月" + date + "日" + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + strDate;
	var time = hour + ":" + minute + ":" + second;
	//  document.getElementById('current-time').innerHTML =year + "年" + month + "月" + date + "日" +"  "+ strDate +"   " + hour + ":" + minute + ":" + second; //显示时间
	$(".date").html(dates);
	$(".time").html(time);

	setTimeout("showtime();", 1000); //设定函数自动执行时间为 1000 ms(1 s)

}
$(function() {

	showtime();
})

//*************页面显示辅助函数*****************

// 判断是否为空
function isNull(data){
	if(data==undefined || data.length==0){
		return true;
	}
	return false;
}

// 从列表中取name为指定值的一项
function getItemFromList(data, name){
	if(!isNull(data)){
		for(item in data){
			if(data[item].name==name){
				return data[item];
			}
		}
	}
	
}

