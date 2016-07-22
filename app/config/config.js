//import 'whatwg-fetch';
import qwest from 'qwest';

import 'cssconfig.js';
window.signRecord = 'https://signin.api.jituancaiyun.com/signin/pages/index.html?orgId=' + localStorage.getItem('orgId') + '#/record';

import cookie from 'react-cookie';
cookie.save('userId', '924064')
let Config = {
	getQuery: function(name, type, win) {
		var reg = new RegExp("(^|&|#)" + name + "=([^&]*)(&|$|#)", "i");
		win = win || window;
		var Url = win.location.href;
		var u, g, StrBack = '';
		if (type == "#") {
			u = Url.split("#");
		} else {
			u = Url.split("?");
		}
		if (u.length == 1) {
			g = '';
		} else {
			g = u[1];
		}
		if (g != '') {
			var gg = g.split(/&|#/);
			var MaxI = gg.length;
			var str = arguments[0] + "=";
			for (var i = 0; i < MaxI; i++) {
				if (gg[i].indexOf(str) == 0) {
					StrBack = gg[i].replace(str, "");
					break;
				}
			}
		}
		return decodeURI(StrBack);
	},
	ajax: function(url, param) {
		var args = Array.prototype.slice.call(arguments, 0);
		args[0] = "/mock/" + args[0] + ".json";
		if (typeof args[1] == "string") {
			args[0] += "?" + args[1];
			args.pop();
		}
		console.log(args)
		args[1] && (args[1].method = "GET");
		if (args[1] && typeof args[1] == "object") {
			args[0] += "?" + args[1].body;
			delete args[1]
		}
		return qwest.get(args[0], args[1]).then((res, data) => {
				return data;
			})
			/*return fetch.apply(null,args).then((response) => {
				return response.json()
			});*/
	},
	native: function(method, data) {
		/*	return fetch("/mock/" + method + ".json").then((response) => {
				return response.json()
			});*/
		console.log(data)
		return qwest.get("/mock/" + method + ".json").then((res, data) => {
			return data;
		})
	},
	trim: function(str) {
		if (str) {
			return str.replace(/(^\s*)|(\s*$)/g, "");
		} else {
			return "";
		}
	},
	leaveType: ["事假", "病假", "婚假", "产假", "陪产假", "年假", "其他"],
	applyType: ["请假", "外出", "出差", "调休", "报销", "采购", "通用"],
	goOUtType: [{
		key: 2,
		name: "出租车"
	}, {
		key: 1,
		name: "地铁"
	}, {
		key: 0,
		name: "公交"
	}, {
		key: 3,
		name: "其他"
	}],
	applyTypeColor: ['#F17474', '#70A1D9', '#72C474', '#4DC1B4', '#EEBB6A', '#72C474', '#70A1D9'],
	expenseType: ['交通费',
		'住宿费',
		'通讯费',
		'采购费',
		'餐补费',
		'其他'
	],
	isNullShowText: function(value, text) {
		if (typeof value == "undefined" || this.trim(value) == "") {
			return text || "无";
		} else {
			return value;
		}
	},
	dadian: function(key, title) {
		try {
			var param = {
				eventId: key,
				param: title
			};
			this.native('pagestat', param)
		} catch (e) {
			console.log(e);
		}
	}
}
export default Config;