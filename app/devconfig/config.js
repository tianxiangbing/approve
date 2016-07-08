//import 'whatwg-fetch';
import qwest from 'qwest';

import "cssconfig.js";

import cookie from 'react-cookie';
import './bridge';
/*window.setSmallMap=(d)=>{
	alert(JSON.parse(d).lng)
}*/
let Config = {
	ajaxList: {},
	ajax: function(url, param) {
		//测试
		//cookie.save('userId','82977736', { path: '/' });
		var args = Array.prototype.slice.call(arguments, 0);
		args[0] = "/mock/" + args[0] + ".json";
		/*if(typeof args[1]=="string"){
			args[0]+="?"+args[1];
			args.pop();
		}*/
		args[0] = this.makeUrl(url, param);
		/*return fetch.apply(null,args).then((response) => {
			return response.json()
		});*/
		let method = 'get';
		let data = {}
		typeof param == "string" ? null : data = param;
		let t = null;
		if (typeof args[1] == "object") {
			method = args[1].method.toLowerCase()
				//alert(JSON.stringify(args[1].body))
			data = JSON.parse(args[1].body);
			//alert(JSON.stringify(data))
			t = args[1].headers ? {
				dataType: "json"
			} : null;
			if (args[1].urlParam) {
				args[0] += "&" + args[1].urlParam;
			}
			method = 'post'
		}
		//qwest.setDefaultDataType('json');
		data.ts = +new Date();
		data.token = cookie.load('token');
		data.uid = cookie.load('userId');
		data.orgId = localStorage.getItem('orgId') || cookie.load('orgId');
		data.uname = cookie.load('username');
		data.deptName = localStorage.getItem("deptName");
		data.orgName = localStorage.getItem("orgName");
		data.userType = cookie.load('orgType');
		for (let key in this.ajaxList) {
			if (args[0] == this.ajaxList[key] && url != 'upload') {
				console.log('loading...')
				return {
					then: function() {}
				}; //正在请求
			}
		}
		this.ajaxList[+new Date()] = args[0]
		this.deleteUrl();
		return qwest[method](args[0], data, t).then((res, data) => {
			for (let key in this.ajaxList) {
				if (args[0] == this.ajaxList[key]) {
					delete this.ajaxList[key];
				}
			}
			return data;
		})
	},
	deleteUrl: function() {
		setTimeout(function() {
			for (let key in this.ajaxList) {
				if (key + 1000 < +new Date()) {
					delete this.ajaxList[key];
				}
			}
		}, 5000)
	},
	makeUrl: function(key, param) {
		//alert(document.cookie)
		//CONFIG.domain = CONFIG.domain || "http://10.1.40.6/";
		//var domain = CONFIG.domain + 'signin/api/';
		let domain = "/approve/";
		var orgId = localStorage.getItem('orgId') || cookie.load('orgId');
		/*if(typeof param != "string"){
			param='?debug=true&uid='+cookie.load('userId')+'&orgId='+orgId;
		}else{
			param='?debug=true&uid='+cookie.load('userId')+'&orgId='+orgId+"&"+param;
		}*/
		let h5tRandom = "random";
		/*if (typeof param != "string") {
			param = '?orgId=' + orgId;
		} else {
			param = '?orgId=' + orgId + "&" + param;
		}*/
		switch (key) {
			case "save":
				{
					return domain + 'apply/save?h5t=' + h5tRandom
					break;
				}
			case 'upload':
				{
					return domain + 'approve/uploadImage?h5t=' + h5tRandom
					break;
				}
			case 'queryApplyDetail':
				{
					return domain + 'apply/queryApplyDetail?h5t=' + h5tRandom
					break;
				}
			case 'lastSelected':
				{
					return domain + 'extraknower/lastSelected?h5t=' + h5tRandom
					break;
				}
			case 'getFlowByType':
				{
					return domain + 'flow/getFlowByType?h5t=' + h5tRandom
					break;
				}
			case 'queryMyApply':
				{
					return domain + 'apply/queryMyApply?h5t=' + h5tRandom
				}
			case 'zhrList':
				{
					return domain + 'extraknower/list?h5t=' + h5tRandom
				}
			case "update":
				{
					return domain + "approve/updateApprove?h5t=" + h5tRandom
				}
			case 'retract':
				{
					return domain + "apply/retractApply?h5t=" + h5tRandom
				}
			case 'queryMyApprove':
				{
					return domain + 'approve/queryMyApprove?h5t=' + h5tRandom
					break;
				}
			case 'extraKnownForMe':
				{
					return domain + 'approve/extraKnownForMe?h5t=' + h5tRandom
					break;
				}
			case 'querylist':
				{
					return domain + 'org/queryList?h5t=' + h5tRandom
					break;
				}
		}
	},
	native: function(method, data) {
		//window.locateIOS&&window.locateIOS();
		let isAndr = navigator.userAgent.indexOf('Android') > -1 || navigator.userAgent.indexOf('Adr') > -1;
		let orgId = localStorage.getItem('orgId');
		let orgName = localStorage.getItem('orgName');
		var t = null;
		switch (method) {
			case 'locate':
				{
					window.locate = function(data) {
						data = JSON.parse(decodeURI(data));
						let result = {
							code: 200,
							data: data
						};
						t && t.call(null, result)
					};
					if (!isAndr) {
						window.locateIOS && window.locateIOS();
					} else {
						window.Native_Bridge_uban.onJsCall('locate', 'locate');
					}
					return {
						then: function(f) {
							t = f;
						}
					}
					break;
				}
			case 'getorglist':
				{
					window.setOrgCookie = function(data) {
						data = JSON.parse(decodeURI(data));
						let result = {
							code: 200,
							data: data
						};
						t && t.call(null, result)
					};
					if (!isAndr) {
						window.getOrgIOS && window.getOrgIOS();
					} else {
						window.Native_Bridge_uban.onJsCall('setOrgCookie', 'getOrginfo');
					}
					return {
						then: function(f) {
							t = f;
						}
					}
					break;
				}
			case 'selectPictures':
				{
					//window.selectPictureIOS&&window.selectPictureIOS(data.count,data.sum);
					window.AndroidUploadImage = function(data) {
						//alert(1)
						data = JSON.parse(decodeURI(data));
						let result = {
							code: 200,
							data: data
						};
						t && t.call(null, result)
					};
					if (!isAndr) {
						window.selectPictureIOS && window.selectPictureIOS(data.count, data.sum);
					} else {
						window.Native_Bridge_uban.onJsCall('AndroidUploadImage', 'selectPicture', data.count + "&" + data.sum);
					}
					return {
						then: function(f) {
							t = f;
						}
					}
					break;
				}

			case "setTime":
				{
					window.setTime = function(data) {
						//data = JSON.parse(data);
						let result = {
							code: 200,
							data: data
						};
						try {
							t && t.call(null, result)
						} catch (ex) {
							alert(ex)
						}
					}
					if (!isAndr) {
						selectTimeIOS();
					} else {
						window.Native_Bridge_uban.onJsCall('setTime', 'getTime');
					}
					return {
						then: function(f) {
							t = f;
						}
					}
					break;
				}
			case 'selectPeopleIOS':
				{
					//window.selectPeopleIOS&&window.selectPeopleIOS("500",localStorage.getItem('orgId'),localStorage.getItem('orgName'));
					try {
						window.AndroidChoosePeople = function(data) {
							//alert(1)
							data = JSON.parse(data);
							let result = {
								code: 200,
								data: data
							};
							t && t.call(null, result)
						};
						//alert("500&" + orgId + "&" + orgName)
						if (!isAndr) {
							window.selectPeopleIOS && window.selectPeopleIOS("500", orgId, orgName);
						} else {
							//alert("500&"+orgId+"&"+orgName)
							window.Native_Bridge_uban.onJsCall('AndroidChoosePeople', 'selectPeople', "500&" + orgId + "&" + orgName);
						}
					} catch (ex) {
						alert(ex)
					}
					return {
						then: function(f) {
							t = f;
						}
					}
					break;
				}
			case 'showImage':
				{
					if (!isAndr) {
						window.viewPicturesIOS && window.viewPicturesIOS(data.position, JSON.stringify(data.picsArr));
					} else {
						location.href = 'uban://start/showImage?position=' + data.position + '&urls=' + JSON.stringify(data.picsArr);
					}
					return {
						then: function(f) {
							t = f;
						}
					}
					break;
				}
			case "fqsx":
				{
					if (!isAndr) {
						newEventIOS(data.uid, data.uname, data.content);
					} else {
						window.location.href = 'uban://start/createNote?uid=' + data.uid + "&uname=" + data.uname + "&mobile=" + data.mobile + "&content=" + data.content;
					}
					return {
						then: function(f) {
							t = f;
						}
					}
					break;
				}
			default:
				{
					setTimeout(() => {
						window.JSBridge.requestHybrid({
							method: method,
							data: data,
							callback: function(result) {
								t && t(result)
							}
						});
					}, 0)
					return {
						then: function(f) {
							t = f;
						}
					}
					break;
				}
		}

		return fetch("/mock/" + method + ".json").then((response) => {
			return response.json()
		});
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
	goOUtType: ["公交", "地铁", "出租车", "其他"],
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