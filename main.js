import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

//过滤器
Vue.filter('timeFilter', function(value) {
	let time = new Date(),
		y = time.getFullYear(),
		m = time.getMonth() + 1,
		d = time.getDate();

	function checktime(i) {
		if (i < 10) {
			i = "0" + i;
		}
		return i;
	}
	m = checktime(m);
	d = checktime(d);
	let timeDate = y + "-" + m + "-" + d;
	let v = value.substring(0, value.indexOf("T"));
	if (Date.parse(v) === Date.parse(timeDate)) {
		return '今日力推';
	} else {
		return v;
	}
});
Vue.filter('dateFilter', function(value) {
	return value.substring(0, value.indexOf(" "));
});
Vue.filter('imgUrl', function(value) {
	return value.replace("\"", "").replace("\"", "");
});

App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()
