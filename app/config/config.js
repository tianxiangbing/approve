//import 'whatwg-fetch';
import qwest from 'qwest';

import 'cssconfig.js';

let Config = {
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
	applyType: ["请假", "外出", "出差", "调休", "报销", "采购", "通用"],
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
	}
}
export default Config;