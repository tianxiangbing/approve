webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },

/***/ 1:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(35);

	var _reactRouter = __webpack_require__(165);

	var _App = __webpack_require__(227);

	var _App2 = _interopRequireDefault(_App);

	var _App3 = __webpack_require__(232);

	var _App4 = _interopRequireDefault(_App3);

	var _Create = __webpack_require__(257);

	var _Create2 = _interopRequireDefault(_Create);

	var _Detail = __webpack_require__(271);

	var _Detail2 = _interopRequireDefault(_Detail);

	var _List = __webpack_require__(281);

	var _List2 = _interopRequireDefault(_List);

	var _FromMe = __webpack_require__(283);

	var _FromMe2 = _interopRequireDefault(_FromMe);

	var _ExtraMe = __webpack_require__(284);

	var _ExtraMe2 = _interopRequireDefault(_ExtraMe);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/*
	 * Created with Sublime Text 3.
	 * license: http://www.lovewebgames.com
	 * User: 田想兵
	 * Date: 2016-05-30
	 * Time: 10:27:55
	 * Contact: 55342775@qq.com
	 */


	(0, _reactDom.render)(_react2.default.createElement(
		_reactRouter.Router,
		{ history: _reactRouter.hashHistory, __self: undefined
		},
		_react2.default.createElement(_reactRouter.Route, { path: '/', component: _App4.default, __self: undefined
		}),
		_react2.default.createElement(_reactRouter.Route, { path: '/create/:type/:title', component: _Create2.default, __self: undefined
		}),
		_react2.default.createElement(_reactRouter.Route, { path: '/create/:type/:title/:id', component: _Create2.default, __self: undefined
		}),
		_react2.default.createElement(_reactRouter.Route, { path: '/detail/:type/:title/:id', component: _Detail2.default, __self: undefined
		}),
		_react2.default.createElement(_reactRouter.Route, { path: '/detail/:type/:title/:id/:pageType', component: _Detail2.default, __self: undefined
		}),
		_react2.default.createElement(_reactRouter.Route, { path: '/tome', component: _List2.default, __self: undefined
		}),
		_react2.default.createElement(_reactRouter.Route, { path: '/fromme', component: _FromMe2.default, __self: undefined
		}),
		_react2.default.createElement(_reactRouter.Route, { path: '/extrame', component: _ExtraMe2.default, __self: undefined
		})
	), document.getElementById('app'));

/***/ },

/***/ 227:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	"use strict";

/***/ },

/***/ 232:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(165);

	var _reactHelmet = __webpack_require__(233);

	var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

	var _config = __webpack_require__(243);

	var _config2 = _interopRequireDefault(_config);

	var _reactCookie = __webpack_require__(253);

	var _reactCookie2 = _interopRequireDefault(_reactCookie);

	var _Dialog = __webpack_require__(256);

	var _Dialog2 = _interopRequireDefault(_Dialog);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created with Sublime Text 3.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * license: http://www.lovewebgames.com
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * User: 田想兵
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Date: 2016-05-30
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Time: 10:27:55
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Contact: 55342775@qq.com
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

	//import Styles from './_App.scss';


	var Component = _react2.default.Component;
	//import 'whatwg-fetch';

	var App = function (_Component) {
		_inherits(App, _Component);

		function App(props) {
			_classCallCheck(this, App);

			localStorage.removeItem('outInfo');

			var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(App).call(this, props));

			_this2.isLocated = 0;
			_this2.action = 0;
			_this2.signType = 0;
			_this2.state = { corpList: [], currCorp: {}, expand: false, dialog: 0, list: [] };
			return _this2;
		}

		_createClass(App, [{
			key: 'componentWillMount',
			value: function componentWillMount() {
				//http://video.statics.cdn.jituancaiyun.com/FAQ/jtcy/apply.html
				var isNoFirst = localStorage.getItem('isNoFirst');
				if (!isNoFirst) {
					localStorage.setItem('isNoFirst', true);
					_config2.default.native('modal', { title: "审批新增模板啦！", msg: "新增报销、采购、通用审批模板，无纸化办公，效率大幅提升！", img: imgUrl, link: "http://video.statics.cdn.jituancaiyun.com/FAQ/jtcy/apply.html" });
				}
			}
		}, {
			key: 'getQuery',
			value: function getQuery(name, type, win) {
				var reg = new RegExp("(^|&|#)" + name + "=([^&]*)(&|$|#)", "i");
				win = win || window;
				var Url = win.location.href;
				var u,
				    g,
				    StrBack = '';
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
			}
		}, {
			key: 'initCorp',
			value: function initCorp() {
				var _this3 = this;

				_config2.default.native("getorglist") /*.then((res)=>{
	                                         console.log(res)
	                                         return res.data;
	                                         })*/.then(function (data) {
					data = data.data;
					_this3.setState({ corpList: data });
					if (_this3.getQuery('orgId')) {
						_reactCookie2.default.save('orgId', _this3.getQuery('orgId'), { path: '/' });
						localStorage.setItem('orgId', _this3.getQuery('orgId'));
					}
					var orgId = localStorage.getItem('orgId');
					var currCorp = {};
					if (orgId && orgId != "undefined") {
						data.forEach(function (item) {
							if (orgId == item.orgId) {
								currCorp = item;
								//this.setState({currCorp:item});
							}
						});
					} else {
						currCorp = data[0];
						//this.setState({currCorp:data[0]});
					}
					//this.setState({currCorp:currCorp});
					localStorage.setItem('orgName', currCorp.orgName);
					localStorage.setItem('orgId', currCorp.orgId);
					localStorage.setItem('deptName', currCorp.deptName);
					_reactCookie2.default.save('orgId', currCorp.orgId, "/");
					_this3.select(currCorp);
				});
			}
		}, {
			key: 'componentDidMount',
			value: function componentDidMount() {
				var _this = this;
				this.initCorp();
			}
		}, {
			key: 'componentWillUnmount',
			value: function componentWillUnmount() {}
		}, {
			key: 'select',
			value: function select(obj) {
				this.state.currCorp = obj;
				this.setState({ currCorp: obj, expand: false });
				_reactCookie2.default.save('orgId', obj.orgId, { path: '/' });
				localStorage.setItem('orgId', obj.orgId);
				localStorage.setItem('orgName', obj.orgName);
				localStorage.setItem('deptName', obj.deptName);
				this.bindInfo();
			}
		}, {
			key: 'bindInfo',
			value: function bindInfo() {
				var _this4 = this;

				var orgIds = [];
				orgIds = this.state.corpList.map(function (item, index) {
					return item.orgId;
				});
				var params = { approveStatus: 0 };
				params.orgIds = orgIds.join(',');
				_config2.default.ajax('querylist', {
					body: JSON.stringify(params),
					method: 'post'
				}).then(function (res) {
					if (res.status == 200) {
						var data = res.result;
						_this4.setState({ list: data });
					}
				});
			}
		}, {
			key: 'expandOrg',
			value: function expandOrg() {
				this.setState({ expand: !this.state.expand });
			}
		}, {
			key: 'hideOrgList',
			value: function hideOrgList() {
				this.setState({ expand: false });
			}
		}, {
			key: 'hideSign',
			value: function hideSign() {
				this.setState({ isShowSign: false });
			}
		}, {
			key: 'renderDialog',
			value: function renderDialog() {
				console.log(this.state.dialog);
				return _react2.default.createElement(_Dialog2.default, _extends({ stage: this }, this.state.dialog, {
					__self: this
				}));
			}
		}, {
			key: 'hideDialog',
			value: function hideDialog() {
				this.setState({ dialog: 0 });
			}
		}, {
			key: 'willTransitionFrom',
			value: function willTransitionFrom(transition, component) {
				if (component.formHasUnsavedData()) {
					if (!confirm('You have unsaved information,' + 'are you sure you want to leave this page?')) {
						transition.abort();
					}
				}
			}
		}, {
			key: 'render',
			value: function render() {
				var _this5 = this;

				return _react2.default.createElement(
					'div',
					{ className: 'body', __self: this
					},
					_react2.default.createElement(_reactHelmet2.default, { title: '审批', __self: this
					}),
					_react2.default.createElement(
						'div',
						{ className: 'header', __self: this
						},
						_react2.default.createElement(
							'div',
							{ className: 'orgInfo', __self: this
							},
							function () {
								if (_this5.state.corpList.length > 1) {
									return _react2.default.createElement(
										'div',
										{ className: 'focusorg', onClick: _this5.expandOrg.bind(_this5), __self: _this5
										},
										_this5.state.currCorp.orgName,
										' ',
										_react2.default.createElement('i', { className: _this5.state.expand ? "triangle up" : "triangle down", __self: _this5
										})
									);
								} else {
									return _react2.default.createElement(
										'div',
										{ className: 'focusorg', __self: _this5
										},
										_this5.state.currCorp.orgName
									);
								}
							}(),
							function () {
								var returnValue = null;
								(_this5.state.list || []).forEach(function (org) {
									if (org.count > 0 && org.orgId != _this5.state.currCorp.orgId) {
										returnValue = _react2.default.createElement('i', { className: 'redCircle', __self: _this5
										});
									}
								});
								console.log(returnValue);
								return returnValue;
							}(),
							_react2.default.createElement(
								'div',
								{ className: this.state.expand ? "orgList" : "orgList hide", __self: this
								},
								(this.state.corpList || []).map(function (item) {
									return _react2.default.createElement(
										'div',
										{ className: item.orgId == _this5.state.currCorp.orgId ? "focusorg" : "", onClick: _this5.select.bind(_this5, item), __self: _this5
										},
										item.orgName,
										function () {
											var returnValue = null;
											(_this5.state.list || []).forEach(function (org) {
												if (org.orgId == item.orgId && org.count > 0) {
													returnValue = _react2.default.createElement(
														'i',
														{
															__self: _this5
														},
														'（',
														org.count,
														'）'
													);
													return;
												}
											});
											return returnValue;
										}()
									);
								})
							)
						),
						this.state.expand ? _react2.default.createElement('div', { className: 'mask', onClick: this.hideOrgList.bind(this), __self: this
						}) : null
					),
					_react2.default.createElement(
						'div',
						{ className: 'menu', __self: this
						},
						_react2.default.createElement(
							'a',
							{ href: '#tome', onClick: _config2.default.dadian('approval_waitforapproval_click', '审批首页进入“待我审批”列表页面'), __self: this
							},
							_react2.default.createElement('i', { className: 'iconfont icon-111', __self: this
							}),
							'待我审批',
							function () {
								var returnValue = null;
								(_this5.state.list || []).forEach(function (org) {
									if (org.count > 0 && org.orgId == _this5.state.currCorp.orgId) {
										returnValue = _react2.default.createElement(
											'i',
											{ className: 'redCircle', __self: _this5
											},
											org.count
										);
									}
								});
								console.log(returnValue);
								return returnValue;
							}()
						),
						_react2.default.createElement(
							'a',
							{ href: '#fromme', onClick: _config2.default.dadian('approval_myapply_click', '审批首页进入“我发起的”列表页面'), __self: this
							},
							_react2.default.createElement('i', { className: 'iconfont icon-112 ifuck', __self: this
							}),
							'我发起的'
						)
					),
					_react2.default.createElement(
						'a',
						{ className: 'followme', href: '#extrame', onClick: _config2.default.dadian('approval_notify_click', '审批首页进入“知会我的”列表页面'), __self: this
						},
						'知会我的',
						_react2.default.createElement('i', { className: 'iconfont icon-xiayibu', __self: this
						})
					),
					_react2.default.createElement(
						'div',
						{ className: 'menu-list', __self: this
						},
						_react2.default.createElement(
							'a',
							{ href: '#create/0/请假', onClick: _config2.default.dadian('approval_qj_click', '审批首页选择请假'), __self: this
							},
							_react2.default.createElement('i', { className: 'iconfont icon-110', __self: this
							}),
							'请假'
						),
						_react2.default.createElement(
							'a',
							{ href: '#create/1/外出', onClick: _config2.default.dadian('approval_cc_click', '审批首页选择外出'), __self: this
							},
							_react2.default.createElement('i', { className: 'iconfont icon-108', __self: this
							}),
							'外出'
						),
						_react2.default.createElement(
							'a',
							{ href: '#create/2/出差', onClick: _config2.default.dadian('approval_tx_click', '审批首页选择出差'), __self: this
							},
							_react2.default.createElement('i', { className: 'iconfont icon-109', __self: this
							}),
							'出差'
						),
						_react2.default.createElement(
							'a',
							{ href: '#create/3/调休', onClick: _config2.default.dadian('approval_wc_click', '审批首页选择调休'), __self: this
							},
							_react2.default.createElement('i', { className: 'iconfont icon-107', __self: this
							}),
							'调休'
						),
						_react2.default.createElement(
							'a',
							{ href: '#create/4/报销', onClick: _config2.default.dadian('approval_bx_click', '审批首页选择报销'), __self: this
							},
							_react2.default.createElement('i', { className: 'iconfont icon-iconfontshenpicaigou02', __self: this
							}),
							'报销'
						),
						_react2.default.createElement(
							'a',
							{ href: '#create/5/采购', onClick: _config2.default.dadian('approval_cg_click', '审批首页选择采购'), __self: this
							},
							_react2.default.createElement('i', { className: 'iconfont icon-iconfontshenpicaigou01', __self: this
							}),
							'采购'
						),
						_react2.default.createElement(
							'a',
							{ href: '#create/6/通用', onClick: _config2.default.dadian('approval_ty_click', '审批首页选择通用'), __self: this
							},
							_react2.default.createElement('i', { className: 'iconfont icon-shenpi03', __self: this
							}),
							'通用'
						),
						_react2.default.createElement(
							'a',
							{
								__self: this
							},
							_react2.default.createElement('i', { className: 'iconfont', __self: this
							}),
							'　'
						),
						_react2.default.createElement(
							'a',
							{
								__self: this
							},
							_react2.default.createElement('i', { className: 'iconfont', __self: this
							}),
							'　'
						)
					),
					this.state.dialog ? this.renderDialog() : undefined
				);
			}
		}]);

		return App;
	}(Component);

	exports.default = App;

/***/ },

/***/ 233:
/***/ function(module, exports, __webpack_require__) {

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactSideEffect = __webpack_require__(234);

	var _reactSideEffect2 = _interopRequireDefault(_reactSideEffect);

	var _deepEqual = __webpack_require__(237);

	var _deepEqual2 = _interopRequireDefault(_deepEqual);

	var _objectAssign = __webpack_require__(240);

	var _objectAssign2 = _interopRequireDefault(_objectAssign);

	var _HelmetConstantsJs = __webpack_require__(241);

	var _PlainComponent = __webpack_require__(242);

	var _PlainComponent2 = _interopRequireDefault(_PlainComponent);

	var HELMET_ATTRIBUTE = "data-react-helmet";

	var encodeSpecialCharacters = function encodeSpecialCharacters(str) {
	    return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
	};

	var getInnermostProperty = function getInnermostProperty(propsList, property) {
	    var reversedPropsList = [].concat(propsList).reverse();

	    for (var i = 0; i < reversedPropsList.length; i++) {
	        var props = reversedPropsList[i];

	        if (props[property]) {
	            return props[property];
	        }
	    }

	    return null;
	};

	var getTitleFromPropsList = function getTitleFromPropsList(propsList) {
	    var innermostTitle = getInnermostProperty(propsList, "title");
	    var innermostTemplate = getInnermostProperty(propsList, "titleTemplate");

	    if (innermostTemplate && innermostTitle) {
	        return innermostTemplate.replace(/\%s/g, innermostTitle);
	    }

	    var innermostDefaultTitle = getInnermostProperty(propsList, "defaultTitle");

	    return innermostTitle || innermostDefaultTitle || "";
	};

	var getOnChangeClientState = function getOnChangeClientState(propsList) {
	    return getInnermostProperty(propsList, "onChangeClientState") || function () {};
	};

	var getHtmlAttributesFromPropsList = function getHtmlAttributesFromPropsList(propsList) {
	    return propsList.filter(function (props) {
	        return typeof props[_HelmetConstantsJs.TAG_NAMES.HTML] !== "undefined";
	    }).map(function (props) {
	        return props[_HelmetConstantsJs.TAG_NAMES.HTML];
	    }).reduce(function (html, current) {
	        return _extends({}, html, current);
	    }, {});
	};

	var getBaseTagFromPropsList = function getBaseTagFromPropsList(primaryAttributes, propsList) {
	    return propsList.filter(function (props) {
	        return typeof props[_HelmetConstantsJs.TAG_NAMES.BASE] !== "undefined";
	    }).map(function (props) {
	        return props[_HelmetConstantsJs.TAG_NAMES.BASE];
	    }).reverse().reduce(function (innermostBaseTag, tag) {
	        if (!innermostBaseTag.length) {
	            var keys = Object.keys(tag);

	            for (var i = 0; i < keys.length; i++) {
	                var attributeKey = keys[i];
	                var lowerCaseAttributeKey = attributeKey.toLowerCase();

	                if (primaryAttributes.indexOf(lowerCaseAttributeKey) !== -1) {
	                    return innermostBaseTag.concat(tag);
	                }
	            }
	        }

	        return innermostBaseTag;
	    }, []);
	};

	var getTagsFromPropsList = function getTagsFromPropsList(tagName, primaryAttributes, propsList) {
	    // Calculate list of tags, giving priority innermost component (end of the propslist)
	    var approvedSeenTags = {};

	    var tagList = propsList.filter(function (props) {
	        return typeof props[tagName] !== "undefined";
	    }).map(function (props) {
	        return props[tagName];
	    }).reverse().reduce(function (approvedTags, instanceTags) {
	        var instanceSeenTags = {};

	        instanceTags.filter(function (tag) {
	            var primaryAttributeKey = undefined;
	            var keys = Object.keys(tag);
	            for (var i = 0; i < keys.length; i++) {
	                var attributeKey = keys[i];
	                var lowerCaseAttributeKey = attributeKey.toLowerCase();

	                // Special rule with link tags, since rel and href are both primary tags, rel takes priority
	                if (primaryAttributes.indexOf(lowerCaseAttributeKey) !== -1 && !(primaryAttributeKey === _HelmetConstantsJs.TAG_PROPERTIES.REL && tag[primaryAttributeKey].toLowerCase() === "canonical") && !(lowerCaseAttributeKey === _HelmetConstantsJs.TAG_PROPERTIES.REL && tag[lowerCaseAttributeKey].toLowerCase() === "stylesheet")) {
	                    primaryAttributeKey = lowerCaseAttributeKey;
	                }
	                // Special case for innerHTML which doesn't work lowercased
	                if (primaryAttributes.indexOf(attributeKey) !== -1 && (attributeKey === _HelmetConstantsJs.TAG_PROPERTIES.INNER_HTML || attributeKey === _HelmetConstantsJs.TAG_PROPERTIES.CSS_TEXT)) {
	                    primaryAttributeKey = attributeKey;
	                }
	            }

	            if (!primaryAttributeKey) {
	                return false;
	            }

	            var value = tag[primaryAttributeKey].toLowerCase();

	            if (!approvedSeenTags[primaryAttributeKey]) {
	                approvedSeenTags[primaryAttributeKey] = {};
	            }

	            if (!instanceSeenTags[primaryAttributeKey]) {
	                instanceSeenTags[primaryAttributeKey] = {};
	            }

	            if (!approvedSeenTags[primaryAttributeKey][value]) {
	                instanceSeenTags[primaryAttributeKey][value] = true;
	                return true;
	            }

	            return false;
	        }).reverse().forEach(function (tag) {
	            return approvedTags.push(tag);
	        });

	        // Update seen tags with tags from this instance
	        var keys = Object.keys(instanceSeenTags);
	        for (var i = 0; i < keys.length; i++) {
	            var attributeKey = keys[i];
	            var tagUnion = (0, _objectAssign2["default"])({}, approvedSeenTags[attributeKey], instanceSeenTags[attributeKey]);

	            approvedSeenTags[attributeKey] = tagUnion;
	        }

	        return approvedTags;
	    }, []).reverse();

	    return tagList;
	};

	var updateTitle = function updateTitle(title) {
	    document.title = title || document.title;
	};

	var updateHtmlAttributes = function updateHtmlAttributes(attributes) {
	    var htmlTag = document.getElementsByTagName("html")[0];
	    var helmetAttributeString = htmlTag.getAttribute(HELMET_ATTRIBUTE);
	    var helmetAttributes = helmetAttributeString ? helmetAttributeString.split(",") : [];
	    var attributesToRemove = [].concat(helmetAttributes);
	    var attributeKeys = Object.keys(attributes);

	    for (var i = 0; i < attributeKeys.length; i++) {
	        var attribute = attributeKeys[i];
	        var value = attributes[attribute] || "";
	        htmlTag.setAttribute(attribute, value);

	        if (helmetAttributes.indexOf(attribute) === -1) {
	            helmetAttributes.push(attribute);
	        }

	        var indexToSave = attributesToRemove.indexOf(attribute);
	        if (indexToSave !== -1) {
	            attributesToRemove.splice(indexToSave, 1);
	        }
	    }

	    for (var i = attributesToRemove.length - 1; i >= 0; i--) {
	        htmlTag.removeAttribute(attributesToRemove[i]);
	    }

	    if (helmetAttributes.length === attributesToRemove.length) {
	        htmlTag.removeAttribute(HELMET_ATTRIBUTE);
	    } else {
	        htmlTag.setAttribute(HELMET_ATTRIBUTE, helmetAttributes.join(","));
	    }
	};

	var updateTags = function updateTags(type, tags) {
	    var headElement = document.head || document.querySelector("head");
	    var tagNodes = headElement.querySelectorAll(type + "[" + HELMET_ATTRIBUTE + "]");
	    var oldTags = Array.prototype.slice.call(tagNodes);
	    var newTags = [];
	    var indexToDelete = undefined;

	    if (tags && tags.length) {
	        tags.forEach(function (tag) {
	            var newElement = document.createElement(type);

	            for (var attribute in tag) {
	                if (tag.hasOwnProperty(attribute)) {
	                    if (attribute === "innerHTML") {
	                        newElement.innerHTML = tag.innerHTML;
	                    } else if (attribute === "cssText") {
	                        if (newElement.styleSheet) {
	                            newElement.styleSheet.cssText = tag.cssText;
	                        } else {
	                            newElement.appendChild(document.createTextNode(tag.cssText));
	                        }
	                    } else {
	                        var value = typeof tag[attribute] === "undefined" ? "" : tag[attribute];
	                        newElement.setAttribute(attribute, value);
	                    }
	                }
	            }

	            newElement.setAttribute(HELMET_ATTRIBUTE, "true");

	            // Remove a duplicate tag from domTagstoRemove, so it isn't cleared.
	            if (oldTags.some(function (existingTag, index) {
	                indexToDelete = index;
	                return newElement.isEqualNode(existingTag);
	            })) {
	                oldTags.splice(indexToDelete, 1);
	            } else {
	                newTags.push(newElement);
	            }
	        });
	    }

	    oldTags.forEach(function (tag) {
	        return tag.parentNode.removeChild(tag);
	    });
	    newTags.forEach(function (tag) {
	        return headElement.appendChild(tag);
	    });

	    return {
	        oldTags: oldTags,
	        newTags: newTags
	    };
	};

	var generateHtmlAttributesAsString = function generateHtmlAttributesAsString(attributes) {
	    var keys = Object.keys(attributes);
	    var attributeString = "";

	    for (var i = 0; i < keys.length; i++) {
	        var attribute = keys[i];
	        var attr = typeof attributes[attribute] !== "undefined" ? attribute + "=\"" + attributes[attribute] + "\"" : "" + attribute;
	        attributeString += attr + " ";
	    }

	    return attributeString.trim();
	};

	var generateTitleAsString = function generateTitleAsString(type, title) {
	    var stringifiedMarkup = "<" + type + " " + HELMET_ATTRIBUTE + "=\"true\">" + encodeSpecialCharacters(title) + "</" + type + ">";

	    return stringifiedMarkup;
	};

	var generateTagsAsString = function generateTagsAsString(type, tags) {
	    var stringifiedMarkup = tags.map(function (tag) {
	        var attributeHtml = Object.keys(tag).filter(function (attribute) {
	            return !(attribute === "innerHTML" || attribute === "cssText");
	        }).map(function (attribute) {
	            if (typeof tag[attribute] === "undefined") {
	                return attribute;
	            }

	            var encodedValue = encodeSpecialCharacters(tag[attribute]);
	            return attribute + "=\"" + encodedValue + "\"";
	        }).join(" ").trim();

	        var tagContent = tag.innerHTML || tag.cssText || "";

	        return "<" + type + " " + HELMET_ATTRIBUTE + "=\"true\" " + attributeHtml + (type === _HelmetConstantsJs.TAG_NAMES.SCRIPT || type === _HelmetConstantsJs.TAG_NAMES.STYLE ? ">" + tagContent + "</" + type + ">" : "/>");
	    }).join("");

	    return stringifiedMarkup;
	};

	var generateTitleAsReactComponent = function generateTitleAsReactComponent(type, title) {
	    // assigning into an array to define toString function on it
	    var component = [_react2["default"].createElement(_HelmetConstantsJs.TAG_NAMES.TITLE, _defineProperty({
	        key: title
	    }, HELMET_ATTRIBUTE, true), title)];

	    return component;
	};

	var generateTagsAsReactComponent = function generateTagsAsReactComponent(type, tags) {
	    /* eslint-disable react/display-name */
	    var component = tags.map(function (tag, i) {
	        var mappedTag = _defineProperty({
	            key: i
	        }, HELMET_ATTRIBUTE, true);

	        Object.keys(tag).forEach(function (attribute) {
	            var mappedAttribute = _HelmetConstantsJs.REACT_TAG_MAP[attribute] || attribute;

	            if (mappedAttribute === "innerHTML" || mappedAttribute === "cssText") {
	                var content = tag.innerHTML || tag.cssText;
	                mappedTag.dangerouslySetInnerHTML = { __html: content };
	            } else {
	                mappedTag[mappedAttribute] = tag[attribute];
	            }
	        });

	        return _react2["default"].createElement(type, mappedTag);
	    });

	    return component;
	    /* eslint-enable react/display-name */
	};

	var getMethodsForTag = function getMethodsForTag(type, tags) {
	    switch (type) {
	        case _HelmetConstantsJs.TAG_NAMES.TITLE:
	            return {
	                toComponent: function toComponent() {
	                    return generateTitleAsReactComponent(type, tags);
	                },
	                toString: function toString() {
	                    return generateTitleAsString(type, tags);
	                }
	            };
	        case _HelmetConstantsJs.TAG_NAMES.HTML:
	            return {
	                toComponent: function toComponent() {
	                    return tags;
	                },
	                toString: function toString() {
	                    return generateHtmlAttributesAsString(tags);
	                }
	            };
	        default:
	            return {
	                toComponent: function toComponent() {
	                    return generateTagsAsReactComponent(type, tags);
	                },
	                toString: function toString() {
	                    return generateTagsAsString(type, tags);
	                }
	            };
	    }
	};

	var mapStateOnServer = function mapStateOnServer(_ref) {
	    var htmlAttributes = _ref.htmlAttributes;
	    var title = _ref.title;
	    var baseTag = _ref.baseTag;
	    var metaTags = _ref.metaTags;
	    var linkTags = _ref.linkTags;
	    var scriptTags = _ref.scriptTags;
	    var styleTags = _ref.styleTags;
	    return {
	        htmlAttributes: getMethodsForTag(_HelmetConstantsJs.TAG_NAMES.HTML, htmlAttributes),
	        title: getMethodsForTag(_HelmetConstantsJs.TAG_NAMES.TITLE, title),
	        base: getMethodsForTag(_HelmetConstantsJs.TAG_NAMES.BASE, baseTag),
	        meta: getMethodsForTag(_HelmetConstantsJs.TAG_NAMES.META, metaTags),
	        link: getMethodsForTag(_HelmetConstantsJs.TAG_NAMES.LINK, linkTags),
	        script: getMethodsForTag(_HelmetConstantsJs.TAG_NAMES.SCRIPT, scriptTags),
	        style: getMethodsForTag(_HelmetConstantsJs.TAG_NAMES.STYLE, styleTags)
	    };
	};

	var Helmet = function Helmet(Component) {
	    /* eslint-disable react/no-multi-comp */

	    var HelmetWrapper = (function (_React$Component) {
	        _inherits(HelmetWrapper, _React$Component);

	        function HelmetWrapper() {
	            _classCallCheck(this, HelmetWrapper);

	            _get(Object.getPrototypeOf(HelmetWrapper.prototype), "constructor", this).apply(this, arguments);
	        }

	        /* eslint-enable react/no-multi-comp */

	        _createClass(HelmetWrapper, [{
	            key: "shouldComponentUpdate",
	            value: function shouldComponentUpdate(nextProps) {
	                return !(0, _deepEqual2["default"])(this.props, nextProps);
	            }

	            // Component.peek comes from react-side-effect:
	            // For testing, you may use a static peek() method available on the returned component.
	            // It lets you get the current state without resetting the mounted instance stack.
	            // Don’t use it for anything other than testing.
	        }, {
	            key: "render",
	            value: function render() {
	                return _react2["default"].createElement(Component, this.props);
	            }
	        }], [{
	            key: "propTypes",

	            /**
	             * @param {Object} htmlAttributes: {"lang": "en", "amp": undefined}
	             * @param {String} title: "Title"
	             * @param {String} defaultTitle: "Default Title"
	             * @param {String} titleTemplate: "MySite.com - %s"
	             * @param {Object} base: {"target": "_blank", "href": "http://mysite.com/"}
	             * @param {Array} meta: [{"name": "description", "content": "Test description"}]
	             * @param {Array} link: [{"rel": "canonical", "href": "http://mysite.com/example"}]
	             * @param {Array} script: [{"type": "text/javascript", "src": "http://mysite.com/js/test.js"}]
	             * @param {Array} style: [{"type": "text/css", "cssText": "div{ display: block; color: blue; }"}]
	             * @param {Function} onChangeClientState: "(newState) => console.log(newState)"
	             */
	            value: {
	                htmlAttributes: _react2["default"].PropTypes.object,
	                title: _react2["default"].PropTypes.string,
	                defaultTitle: _react2["default"].PropTypes.string,
	                titleTemplate: _react2["default"].PropTypes.string,
	                base: _react2["default"].PropTypes.object,
	                meta: _react2["default"].PropTypes.arrayOf(_react2["default"].PropTypes.object),
	                link: _react2["default"].PropTypes.arrayOf(_react2["default"].PropTypes.object),
	                script: _react2["default"].PropTypes.arrayOf(_react2["default"].PropTypes.object),
	                style: _react2["default"].PropTypes.arrayOf(_react2["default"].PropTypes.object),
	                onChangeClientState: _react2["default"].PropTypes.func
	            },
	            enumerable: true
	        }, {
	            key: "peek",
	            value: Component.peek,
	            enumerable: true
	        }, {
	            key: "rewind",
	            value: function value() {
	                var mappedState = Component.rewind();
	                if (!mappedState) {
	                    // provide fallback if mappedState is undefined
	                    mappedState = mapStateOnServer({
	                        htmlAttributes: [],
	                        title: "",
	                        baseTag: [],
	                        metaTags: [],
	                        linkTags: [],
	                        scriptTags: [],
	                        styleTags: []
	                    });
	                }

	                return mappedState;
	            },
	            enumerable: true
	        }, {
	            key: "canUseDOM",
	            set: function set(canUseDOM) {
	                Component.canUseDOM = canUseDOM;
	            }
	        }]);

	        return HelmetWrapper;
	    })(_react2["default"].Component);

	    return HelmetWrapper;
	};

	var reducePropsToState = function reducePropsToState(propsList) {
	    return {
	        htmlAttributes: getHtmlAttributesFromPropsList(propsList),
	        title: getTitleFromPropsList(propsList),
	        baseTag: getBaseTagFromPropsList([_HelmetConstantsJs.TAG_PROPERTIES.HREF], propsList),
	        metaTags: getTagsFromPropsList(_HelmetConstantsJs.TAG_NAMES.META, [_HelmetConstantsJs.TAG_PROPERTIES.NAME, _HelmetConstantsJs.TAG_PROPERTIES.CHARSET, _HelmetConstantsJs.TAG_PROPERTIES.HTTPEQUIV, _HelmetConstantsJs.TAG_PROPERTIES.PROPERTY], propsList),
	        linkTags: getTagsFromPropsList(_HelmetConstantsJs.TAG_NAMES.LINK, [_HelmetConstantsJs.TAG_PROPERTIES.REL, _HelmetConstantsJs.TAG_PROPERTIES.HREF], propsList),
	        scriptTags: getTagsFromPropsList(_HelmetConstantsJs.TAG_NAMES.SCRIPT, [_HelmetConstantsJs.TAG_PROPERTIES.SRC, _HelmetConstantsJs.TAG_PROPERTIES.INNER_HTML], propsList),
	        styleTags: getTagsFromPropsList(_HelmetConstantsJs.TAG_NAMES.STYLE, [_HelmetConstantsJs.TAG_PROPERTIES.CSS_TEXT], propsList),
	        onChangeClientState: getOnChangeClientState(propsList)
	    };
	};

	var handleClientStateChange = function handleClientStateChange(newState) {
	    var htmlAttributes = newState.htmlAttributes;
	    var title = newState.title;
	    var baseTag = newState.baseTag;
	    var metaTags = newState.metaTags;
	    var linkTags = newState.linkTags;
	    var scriptTags = newState.scriptTags;
	    var styleTags = newState.styleTags;
	    var onChangeClientState = newState.onChangeClientState;

	    updateHtmlAttributes(htmlAttributes);

	    updateTitle(title);

	    var tagUpdates = {
	        baseTag: updateTags(_HelmetConstantsJs.TAG_NAMES.BASE, baseTag),
	        metaTags: updateTags(_HelmetConstantsJs.TAG_NAMES.META, metaTags),
	        linkTags: updateTags(_HelmetConstantsJs.TAG_NAMES.LINK, linkTags),
	        scriptTags: updateTags(_HelmetConstantsJs.TAG_NAMES.SCRIPT, scriptTags),
	        styleTags: updateTags(_HelmetConstantsJs.TAG_NAMES.STYLE, styleTags)
	    };

	    var addedTags = {};
	    var removedTags = {};

	    Object.keys(tagUpdates).forEach(function (tagType) {
	        var _tagUpdates$tagType = tagUpdates[tagType];
	        var newTags = _tagUpdates$tagType.newTags;
	        var oldTags = _tagUpdates$tagType.oldTags;

	        if (newTags.length) {
	            addedTags[tagType] = newTags;
	        }
	        if (oldTags.length) {
	            removedTags[tagType] = tagUpdates[tagType].oldTags;
	        }
	    });

	    onChangeClientState(newState, addedTags, removedTags);
	};

	var SideEffect = (0, _reactSideEffect2["default"])(reducePropsToState, handleClientStateChange, mapStateOnServer);

	// PlainComponent is used to be a blank component decorated by react-side-effect
	exports["default"] = Helmet(SideEffect(_PlainComponent2["default"]));
	module.exports = exports["default"];

/***/ },

/***/ 234:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _fbjsLibExecutionEnvironment = __webpack_require__(235);

	var _fbjsLibExecutionEnvironment2 = _interopRequireDefault(_fbjsLibExecutionEnvironment);

	var _fbjsLibShallowEqual = __webpack_require__(236);

	var _fbjsLibShallowEqual2 = _interopRequireDefault(_fbjsLibShallowEqual);

	module.exports = function withSideEffect(reducePropsToState, handleStateChangeOnClient, mapStateOnServer) {
	  if (typeof reducePropsToState !== 'function') {
	    throw new Error('Expected reducePropsToState to be a function.');
	  }
	  if (typeof handleStateChangeOnClient !== 'function') {
	    throw new Error('Expected handleStateChangeOnClient to be a function.');
	  }
	  if (typeof mapStateOnServer !== 'undefined' && typeof mapStateOnServer !== 'function') {
	    throw new Error('Expected mapStateOnServer to either be undefined or a function.');
	  }

	  function getDisplayName(WrappedComponent) {
	    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
	  }

	  return function wrap(WrappedComponent) {
	    if (typeof WrappedComponent !== 'function') {
	      throw new Error('Expected WrappedComponent to be a React component.');
	    }

	    var mountedInstances = [];
	    var state = undefined;

	    function emitChange() {
	      state = reducePropsToState(mountedInstances.map(function (instance) {
	        return instance.props;
	      }));

	      if (SideEffect.canUseDOM) {
	        handleStateChangeOnClient(state);
	      } else if (mapStateOnServer) {
	        state = mapStateOnServer(state);
	      }
	    }

	    var SideEffect = (function (_Component) {
	      _inherits(SideEffect, _Component);

	      function SideEffect() {
	        _classCallCheck(this, SideEffect);

	        _Component.apply(this, arguments);
	      }

	      SideEffect.peek = function peek() {
	        return state;
	      };

	      SideEffect.rewind = function rewind() {
	        if (SideEffect.canUseDOM) {
	          throw new Error('You may ony call rewind() on the server. Call peek() to read the current state.');
	        }

	        var recordedState = state;
	        state = undefined;
	        mountedInstances = [];
	        return recordedState;
	      };

	      SideEffect.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
	        return !_fbjsLibShallowEqual2['default'](nextProps, this.props);
	      };

	      SideEffect.prototype.componentWillMount = function componentWillMount() {
	        mountedInstances.push(this);
	        emitChange();
	      };

	      SideEffect.prototype.componentDidUpdate = function componentDidUpdate() {
	        emitChange();
	      };

	      SideEffect.prototype.componentWillUnmount = function componentWillUnmount() {
	        var index = mountedInstances.indexOf(this);
	        mountedInstances.splice(index, 1);
	        emitChange();
	      };

	      SideEffect.prototype.render = function render() {
	        return _react2['default'].createElement(WrappedComponent, this.props);
	      };

	      _createClass(SideEffect, null, [{
	        key: 'displayName',

	        // Try to use displayName of wrapped component
	        value: 'SideEffect(' + getDisplayName(WrappedComponent) + ')',

	        // Expose canUseDOM so tests can monkeypatch it
	        enumerable: true
	      }, {
	        key: 'canUseDOM',
	        value: _fbjsLibExecutionEnvironment2['default'].canUseDOM,
	        enumerable: true
	      }]);

	      return SideEffect;
	    })(_react.Component);

	    return SideEffect;
	  };
	};

/***/ },

/***/ 235:
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ExecutionEnvironment
	 */

	'use strict';

	var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

	/**
	 * Simple, lightweight module assisting with the detection and context of
	 * Worker. Helps avoid circular dependencies and allows code to reason about
	 * whether or not they are in a Worker, even if they never include the main
	 * `ReactWorker` dependency.
	 */
	var ExecutionEnvironment = {

	  canUseDOM: canUseDOM,

	  canUseWorkers: typeof Worker !== 'undefined',

	  canUseEventListeners: canUseDOM && !!(window.addEventListener || window.attachEvent),

	  canUseViewport: canUseDOM && !!window.screen,

	  isInWorker: !canUseDOM // For now, this is true - might change in the future.

	};

	module.exports = ExecutionEnvironment;

/***/ },

/***/ 236:
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule shallowEqual
	 * @typechecks
	 * 
	 */

	'use strict';

	var hasOwnProperty = Object.prototype.hasOwnProperty;

	/**
	 * Performs equality by iterating through keys on an object and returning false
	 * when any key has values which are not strictly equal between the arguments.
	 * Returns true when the values of all keys are strictly equal.
	 */
	function shallowEqual(objA, objB) {
	  if (objA === objB) {
	    return true;
	  }

	  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
	    return false;
	  }

	  var keysA = Object.keys(objA);
	  var keysB = Object.keys(objB);

	  if (keysA.length !== keysB.length) {
	    return false;
	  }

	  // Test for A's keys different from B.
	  var bHasOwnProperty = hasOwnProperty.bind(objB);
	  for (var i = 0; i < keysA.length; i++) {
	    if (!bHasOwnProperty(keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
	      return false;
	    }
	  }

	  return true;
	}

	module.exports = shallowEqual;

/***/ },

/***/ 237:
/***/ function(module, exports, __webpack_require__) {

	var pSlice = Array.prototype.slice;
	var objectKeys = __webpack_require__(238);
	var isArguments = __webpack_require__(239);

	var deepEqual = module.exports = function (actual, expected, opts) {
	  if (!opts) opts = {};
	  // 7.1. All identical values are equivalent, as determined by ===.
	  if (actual === expected) {
	    return true;

	  } else if (actual instanceof Date && expected instanceof Date) {
	    return actual.getTime() === expected.getTime();

	  // 7.3. Other pairs that do not both pass typeof value == 'object',
	  // equivalence is determined by ==.
	  } else if (!actual || !expected || typeof actual != 'object' && typeof expected != 'object') {
	    return opts.strict ? actual === expected : actual == expected;

	  // 7.4. For all other Object pairs, including Array objects, equivalence is
	  // determined by having the same number of owned properties (as verified
	  // with Object.prototype.hasOwnProperty.call), the same set of keys
	  // (although not necessarily the same order), equivalent values for every
	  // corresponding key, and an identical 'prototype' property. Note: this
	  // accounts for both named and indexed properties on Arrays.
	  } else {
	    return objEquiv(actual, expected, opts);
	  }
	}

	function isUndefinedOrNull(value) {
	  return value === null || value === undefined;
	}

	function isBuffer (x) {
	  if (!x || typeof x !== 'object' || typeof x.length !== 'number') return false;
	  if (typeof x.copy !== 'function' || typeof x.slice !== 'function') {
	    return false;
	  }
	  if (x.length > 0 && typeof x[0] !== 'number') return false;
	  return true;
	}

	function objEquiv(a, b, opts) {
	  var i, key;
	  if (isUndefinedOrNull(a) || isUndefinedOrNull(b))
	    return false;
	  // an identical 'prototype' property.
	  if (a.prototype !== b.prototype) return false;
	  //~~~I've managed to break Object.keys through screwy arguments passing.
	  //   Converting to array solves the problem.
	  if (isArguments(a)) {
	    if (!isArguments(b)) {
	      return false;
	    }
	    a = pSlice.call(a);
	    b = pSlice.call(b);
	    return deepEqual(a, b, opts);
	  }
	  if (isBuffer(a)) {
	    if (!isBuffer(b)) {
	      return false;
	    }
	    if (a.length !== b.length) return false;
	    for (i = 0; i < a.length; i++) {
	      if (a[i] !== b[i]) return false;
	    }
	    return true;
	  }
	  try {
	    var ka = objectKeys(a),
	        kb = objectKeys(b);
	  } catch (e) {//happens when one is a string literal and the other isn't
	    return false;
	  }
	  // having the same number of owned properties (keys incorporates
	  // hasOwnProperty)
	  if (ka.length != kb.length)
	    return false;
	  //the same set of keys (although not necessarily the same order),
	  ka.sort();
	  kb.sort();
	  //~~~cheap key test
	  for (i = ka.length - 1; i >= 0; i--) {
	    if (ka[i] != kb[i])
	      return false;
	  }
	  //equivalent values for every corresponding key, and
	  //~~~possibly expensive deep test
	  for (i = ka.length - 1; i >= 0; i--) {
	    key = ka[i];
	    if (!deepEqual(a[key], b[key], opts)) return false;
	  }
	  return typeof a === typeof b;
	}


/***/ },

/***/ 238:
/***/ function(module, exports) {

	exports = module.exports = typeof Object.keys === 'function'
	  ? Object.keys : shim;

	exports.shim = shim;
	function shim (obj) {
	  var keys = [];
	  for (var key in obj) keys.push(key);
	  return keys;
	}


/***/ },

/***/ 239:
/***/ function(module, exports) {

	var supportsArgumentsClass = (function(){
	  return Object.prototype.toString.call(arguments)
	})() == '[object Arguments]';

	exports = module.exports = supportsArgumentsClass ? supported : unsupported;

	exports.supported = supported;
	function supported(object) {
	  return Object.prototype.toString.call(object) == '[object Arguments]';
	};

	exports.unsupported = unsupported;
	function unsupported(object){
	  return object &&
	    typeof object == 'object' &&
	    typeof object.length == 'number' &&
	    Object.prototype.hasOwnProperty.call(object, 'callee') &&
	    !Object.prototype.propertyIsEnumerable.call(object, 'callee') ||
	    false;
	};


/***/ },

/***/ 240:
/***/ function(module, exports) {

	'use strict';
	/* eslint-disable no-unused-vars */
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}

			// Detect buggy property enumeration order in older V8 versions.

			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}

			return true;
		} catch (e) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}

	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;

		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);

			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}

			if (Object.getOwnPropertySymbols) {
				symbols = Object.getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};


/***/ },

/***/ 241:
/***/ function(module, exports) {

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var TAG_NAMES = {
	    HTML: "htmlAttributes",
	    TITLE: "title",
	    BASE: "base",
	    META: "meta",
	    LINK: "link",
	    SCRIPT: "script",
	    STYLE: "style"
	};

	exports.TAG_NAMES = TAG_NAMES;
	var TAG_PROPERTIES = {
	    NAME: "name",
	    CHARSET: "charset",
	    HTTPEQUIV: "http-equiv",
	    REL: "rel",
	    HREF: "href",
	    PROPERTY: "property",
	    SRC: "src",
	    INNER_HTML: "innerHTML",
	    CSS_TEXT: "cssText"
	};

	exports.TAG_PROPERTIES = TAG_PROPERTIES;
	var REACT_TAG_MAP = {
	    "charset": "charSet",
	    "http-equiv": "httpEquiv"
	};
	exports.REACT_TAG_MAP = REACT_TAG_MAP;

/***/ },

/***/ 242:
/***/ function(module, exports, __webpack_require__) {

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var PlainComponent = (function (_React$Component) {
	    _inherits(PlainComponent, _React$Component);

	    function PlainComponent() {
	        _classCallCheck(this, PlainComponent);

	        _get(Object.getPrototypeOf(PlainComponent.prototype), "constructor", this).apply(this, arguments);
	    }

	    _createClass(PlainComponent, [{
	        key: "render",
	        value: function render() {
	            return null;
	        }
	    }]);

	    return PlainComponent;
	})(_react2["default"].Component);

	exports["default"] = PlainComponent;
	module.exports = exports["default"];

/***/ },

/***/ 243:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; }; //import 'whatwg-fetch';


	var _qwest = __webpack_require__(244);

	var _qwest2 = _interopRequireDefault(_qwest);

	__webpack_require__(250);

	var _reactCookie = __webpack_require__(253);

	var _reactCookie2 = _interopRequireDefault(_reactCookie);

	__webpack_require__(255);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/*window.setSmallMap=(d)=>{
		alert(JSON.parse(d).lng)
	}*/
	var Config = {
		ajaxList: {},
		getQuery: function getQuery(name, type, win) {
			var reg = new RegExp("(^|&|#)" + name + "=([^&]*)(&|$|#)", "i");
			win = win || window;
			var Url = win.location.href;
			var u,
			    g,
			    StrBack = '';
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
		ajax: function ajax(url, param) {
			var _this = this;

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
			var method = 'get';
			var data = {};
			typeof param == "string" ? null : data = param;
			var t = null;
			if (_typeof(args[1]) == "object") {
				method = args[1].method.toLowerCase();
				//alert(JSON.stringify(args[1].body))
				data = JSON.parse(args[1].body);
				//alert(JSON.stringify(data))
				t = args[1].headers ? {
					dataType: "json"
				} : null;
				if (args[1].urlParam) {
					args[0] += "&" + args[1].urlParam;
				}
				method = 'post';
			}
			//qwest.setDefaultDataType('json');
			data.ts = +new Date();
			data.token = _reactCookie2.default.load('token');
			data.uid = _reactCookie2.default.load('userId');
			data.orgId = this.getQuery('orgId') || localStorage.getItem('orgId') || _reactCookie2.default.load('orgId');
			data.uname = _reactCookie2.default.load('username');
			data.deptName = localStorage.getItem("deptName");
			data.orgName = localStorage.getItem("orgName");
			data.userType = _reactCookie2.default.load('orgType');
			for (var key in this.ajaxList) {
				if (args[0] == this.ajaxList[key] && url != 'upload') {
					console.log('loading...');
					return {
						then: function then() {}
					}; //正在请求
				}
			}
			this.ajaxList[+new Date()] = args[0];
			this.deleteUrl();
			return _qwest2.default[method](args[0], data, t).then(function (res, data) {
				for (var _key in _this.ajaxList) {
					if (args[0] == _this.ajaxList[_key]) {
						delete _this.ajaxList[_key];
					}
				}
				return data;
			});
		},
		deleteUrl: function deleteUrl() {
			setTimeout(function () {
				for (var key in this.ajaxList) {
					if (key + 1000 < +new Date()) {
						delete this.ajaxList[key];
					}
				}
			}, 20000);
		},
		makeUrl: function makeUrl(key, param) {
			//alert(document.cookie)
			//CONFIG.domain = CONFIG.domain || "http://10.1.40.6/";
			//var domain = CONFIG.domain + 'signin/api/';
			var domain = "/approve/";
			var orgId = localStorage.getItem('orgId') || _reactCookie2.default.load('orgId');
			/*if(typeof param != "string"){
	  	param='?debug=true&uid='+cookie.load('userId')+'&orgId='+orgId;
	  }else{
	  	param='?debug=true&uid='+cookie.load('userId')+'&orgId='+orgId+"&"+param;
	  }*/
			var h5tRandom = "random";
			/*if (typeof param != "string") {
	  	param = '?orgId=' + orgId;
	  } else {
	  	param = '?orgId=' + orgId + "&" + param;
	  }*/
			switch (key) {
				case "save":
					{
						return domain + 'apply/save?h5t=' + h5tRandom;
						break;
					}
				case 'upload':
					{
						return domain + 'approve/uploadImage?h5t=' + h5tRandom;
						break;
					}
				case 'queryApplyDetail':
					{
						return domain + 'apply/queryApplyDetail?h5t=' + h5tRandom;
						break;
					}
				case 'lastSelected':
					{
						return domain + 'extraknower/lastSelected?h5t=' + h5tRandom;
						break;
					}
				case 'getFlowByType':
					{
						return domain + 'flow/getFlowByType?h5t=' + h5tRandom;
						break;
					}
				case 'queryMyApply':
					{
						return domain + 'apply/queryMyApply?h5t=' + h5tRandom;
					}
				case 'zhrList':
					{
						return domain + 'extraknower/list?h5t=' + h5tRandom;
					}
				case "update":
					{
						return domain + "approve/updateApprove?h5t=" + h5tRandom;
					}
				case 'retract':
					{
						return domain + "apply/retractApply?h5t=" + h5tRandom;
					}
				case 'queryMyApprove':
					{
						return domain + 'approve/queryMyApprove?h5t=' + h5tRandom;
						break;
					}
				case 'extraKnownForMe':
					{
						return domain + 'approve/extraKnownForMe?h5t=' + h5tRandom;
						break;
					}
				case 'querylist':
					{
						return domain + 'org/queryList?h5t=' + h5tRandom;
						break;
					}
				case 'search':
					{
						return domain + 'city/search?h5t=' + h5tRandom;
						break;
					}
			}
		},
		native: function native(method, data) {
			//window.locateIOS&&window.locateIOS();
			var isAndr = navigator.userAgent.indexOf('Android') > -1 || navigator.userAgent.indexOf('Adr') > -1;
			var orgId = localStorage.getItem('orgId');
			var orgName = localStorage.getItem('orgName');
			var t = null;
			switch (method) {
				case 'locate':
					{
						window.locate = function (data) {
							data = JSON.parse(decodeURI(data));
							var result = {
								code: 200,
								data: data
							};
							t && t.call(null, result);
						};
						if (!isAndr) {
							window.locateIOS && window.locateIOS();
						} else {
							window.Native_Bridge_uban.onJsCall('locate', 'locate');
						}
						return {
							then: function then(f) {
								t = f;
							}
						};
						break;
					}
				case 'getorglist':
					{
						window.setOrgCookie = function (data) {
							confirm(data);
							data = JSON.parse(decodeURI(data));
							confirm(data);
							var result = {
								code: 200,
								data: data
							};
							t && t.call(null, result);
						};
						if (!isAndr) {
							window.getOrgIOS && window.getOrgIOS();
						} else {
							window.Native_Bridge_uban.onJsCall('setOrgCookie', 'getOrginfo');
						}
						return {
							then: function then(f) {
								t = f;
							}
						};
						break;
					}
				case 'selectPictures':
					{
						//window.selectPictureIOS&&window.selectPictureIOS(data.count,data.sum);
						window.AndroidUploadImage = function (data) {
							//alert(1)
							data = JSON.parse(decodeURI(data));
							var result = {
								code: 200,
								data: data
							};
							t && t.call(null, result);
						};
						if (!isAndr) {
							window.selectPictureIOS && window.selectPictureIOS(data.count, data.sum);
						} else {
							window.Native_Bridge_uban.onJsCall('AndroidUploadImage', 'selectPicture', data.count + "&" + data.sum);
						}
						return {
							then: function then(f) {
								t = f;
							}
						};
						break;
					}

				case "setTime":
					{
						window.setTime = function (data) {
							//data = JSON.parse(data);
							var result = {
								code: 200,
								data: data
							};
							try {
								t && t.call(null, result);
							} catch (ex) {
								alert(ex);
							}
						};
						if (!isAndr) {
							selectTimeIOS();
						} else {
							window.Native_Bridge_uban.onJsCall('setTime', 'getTime');
						}
						return {
							then: function then(f) {
								t = f;
							}
						};
						break;
					}
				case 'selectPeopleIOS':
					{
						//window.selectPeopleIOS&&window.selectPeopleIOS("500",localStorage.getItem('orgId'),localStorage.getItem('orgName'));
						try {
							window.AndroidChoosePeople = function (data) {
								//alert(1)
								data = JSON.parse(data);
								var result = {
									code: 200,
									data: data
								};
								t && t.call(null, result);
							};
							//alert("500&" + orgId + "&" + orgName)
							if (!isAndr) {
								window.selectPeopleIOS && window.selectPeopleIOS("500", orgId, orgName);
							} else {
								//alert("500&"+orgId+"&"+orgName)
								window.Native_Bridge_uban.onJsCall('AndroidChoosePeople', 'selectPeople', "500&" + orgId + "&" + orgName);
							}
						} catch (ex) {
							alert(ex);
						}
						return {
							then: function then(f) {
								t = f;
							}
						};
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
							then: function then(f) {
								t = f;
							}
						};
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
							then: function then(f) {
								t = f;
							}
						};
						break;
					}
				default:
					{
						setTimeout(function () {
							window.JSBridge.requestHybrid({
								method: method,
								data: data,
								callback: function callback(result) {
									t && t(result);
								}
							});
						}, 0);
						return {
							then: function then(f) {
								t = f;
							}
						};
						break;
					}
			}

			return fetch("/mock/" + method + ".json").then(function (response) {
				return response.json();
			});
		},
		trim: function trim(str) {
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
		expenseType: ['交通费', '住宿费', '通讯费', '采购费', '餐补费', '其他'],
		isNullShowText: function isNullShowText(value, text) {
			if (typeof value == "undefined" || this.trim(value) == "") {
				return text || "无";
			} else {
				return value;
			}
		},
		dadian: function dadian(key, title) {
			try {
				var param = {
					eventId: key,
					param: title
				};
				this.native('pagestat', param);
			} catch (e) {
				console.log(e);
			}
		}
	};

	/*test
	function updateConnectionStatus(msg, connected) {
		try {
			if (!connected) {
				Config.native('toast', {
					"time": 3,
					"msg": "断网喽,请联网后重试!"
				});
			}
		} catch (e) {

		}
	}

	window.addEventListener('load', function(e) {
		if (navigator.onLine) {
			updateConnectionStatus('Online', true);
		} else {
			updateConnectionStatus('Offline', false);
		}
	}, false);

	window.addEventListener('online', function(e) {
		logger.log("And we're back :)");
		updateConnectionStatus('Online', true);
		// Get updates from server.
	}, false);

	window.addEventListener('offline', function(e) {
		logger.log("Connection is flaky.");
		updateConnectionStatus('Offline', false);
		// Use offine mode.
	}, false);*/

	exports.default = Config;

/***/ },

/***/ 244:
/***/ function(module, exports, __webpack_require__) {

	/*! qwest 4.4.4 (https://github.com/pyrsmk/qwest) */

	module.exports = function() {

		var global = typeof window != 'undefined' ? window : self,
			pinkyswear = __webpack_require__(245),
			jparam = __webpack_require__(249),
			defaultOptions = {},
			// Default response type for XDR in auto mode
			defaultXdrResponseType = 'json',
			// Default data type
			defaultDataType = 'post',
			// Variables for limit mechanism
			limit = null,
			requests = 0,
			request_stack = [],
			// Get XMLHttpRequest object
			getXHR = global.XMLHttpRequest? function(){
				return new global.XMLHttpRequest();
			}: function(){
				return new ActiveXObject('Microsoft.XMLHTTP');
			},
			// Guess XHR version
			xhr2 = (getXHR().responseType===''),

		// Core function
		qwest = function(method, url, data, options, before) {
			// Format
			method = method.toUpperCase();
			data = data || null;
			options = options || {};
			for(var name in defaultOptions) {
				if(!(name in options)) {
					if(typeof defaultOptions[name] == 'object' && typeof options[name] == 'object') {
						for(var name2 in defaultOptions[name]) {
							options[name][name2] = defaultOptions[name][name2];
						}
					}
					else {
						options[name] = defaultOptions[name];
					}
				}
			}

			// Define variables
			var nativeResponseParsing = false,
				crossOrigin,
				xhr,
				xdr = false,
				timeout,
				aborted = false,
				attempts = 0,
				headers = {},
				mimeTypes = {
					text: '*/*',
					xml: 'text/xml',
					json: 'application/json',
					post: 'application/x-www-form-urlencoded',
					document: 'text/html'
				},
				accept = {
					text: '*/*',
					xml: 'application/xml; q=1.0, text/xml; q=0.8, */*; q=0.1',
					json: 'application/json; q=1.0, text/*; q=0.8, */*; q=0.1'
				},
				i, j,
				response,
				sending = false,

			// Create the promise
			promise = pinkyswear(function(pinky) {
				pinky.abort = function() {
					if(!aborted) {
						if(xhr && xhr.readyState != 4) { // https://stackoverflow.com/questions/7287706/ie-9-javascript-error-c00c023f
							xhr.abort();
						}
						if(sending) {
							--requests;
							sending = false;
						}
						aborted = true;
					}
				};
				pinky.send = function() {
					// Prevent further send() calls
					if(sending) {
						return;
					}
					// Reached request limit, get out!
					if(requests == limit) {
						request_stack.push(pinky);
						return;
					}
					// Verify if the request has not been previously aborted
					if(aborted) {
						if(request_stack.length) {
							request_stack.shift().send();
						}
						return;
					}
					// The sending is running
					++requests;
					sending = true;
					// Get XHR object
					xhr = getXHR();
					if(crossOrigin) {
						if(!('withCredentials' in xhr) && global.XDomainRequest) {
							xhr = new XDomainRequest(); // CORS with IE8/9
							xdr = true;
							if(method != 'GET' && method != 'POST') {
								method = 'POST';
							}
						}
					}
					// Open connection
					if(xdr) {
						xhr.open(method, url);
					}
					else {
						xhr.open(method, url, options.async, options.user, options.password);
						if(xhr2 && options.async) {
							xhr.withCredentials = options.withCredentials;
						}
					}
					// Set headers
					if(!xdr) {
						for(var i in headers) {
							if(headers[i]) {
								xhr.setRequestHeader(i, headers[i]);
							}
						}
					}
					// Verify if the response type is supported by the current browser
					if(xhr2 && options.responseType != 'auto') {
						try {
							xhr.responseType = options.responseType;
							nativeResponseParsing = (xhr.responseType == options.responseType);
						}
						catch(e) {}
					}
					// Plug response handler
					if(xhr2 || xdr) {
						xhr.onload = handleResponse;
						xhr.onerror = handleError;
						// http://cypressnorth.com/programming/internet-explorer-aborting-ajax-requests-fixed/
						if(xdr) {
							xhr.onprogress = function() {};
						}
					}
					else {
						xhr.onreadystatechange = function() {
							if(xhr.readyState == 4) {
								handleResponse();
							}
						};
					}
					// Plug timeout
					if(options.async) {
						if('timeout' in xhr) {
							xhr.timeout = options.timeout;
							xhr.ontimeout = handleTimeout;
						}
						else {
							timeout = setTimeout(handleTimeout, options.timeout);
						}
					}
					// http://cypressnorth.com/programming/internet-explorer-aborting-ajax-requests-fixed/
					else if(xdr) {
						xhr.ontimeout = function() {};
					}
					// Override mime type to ensure the response is well parsed
					if(options.responseType != 'auto' && 'overrideMimeType' in xhr) {
						xhr.overrideMimeType(mimeTypes[options.responseType]);
					}
					// Run 'before' callback
					if(before) {
						before(xhr);
					}
					// Send request
					if(xdr) {
						// https://developer.mozilla.org/en-US/docs/Web/API/XDomainRequest
						setTimeout(function() {
							xhr.send(method != 'GET'? data : null);
						}, 0);
					}
					else {
						xhr.send(method != 'GET' ? data : null);
					}
				};
				return pinky;
			}),

			// Handle the response
			handleResponse = function() {
				var i, responseType;
				// Stop sending state
				sending = false;
				clearTimeout(timeout);
				// Launch next stacked request
				if(request_stack.length) {
					request_stack.shift().send();
				}
				// Verify if the request has not been previously aborted
				if(aborted) {
					return;
				}
				// Decrease the number of requests
				--requests;
				// Handle response
				try{
					// Process response
					if(nativeResponseParsing && 'response' in xhr && xhr.response !== null) {
						response = xhr.response;
					}
					else{
						// Guess response type
						responseType = options.responseType;
						if(responseType == 'auto') {
							if(xdr) {
								responseType = defaultXdrResponseType;
							}
							else {
								var ct = xhr.getResponseHeader('Content-Type') || '';
								if(ct.indexOf(mimeTypes.json)>-1) {
									responseType = 'json';
								}
								else if(ct.indexOf(mimeTypes.xml) > -1) {
									responseType = 'xml';
								}
								else {
									responseType = 'text';
								}
							}
						}
						// Handle response type
						switch(responseType) {
							case 'json':
								if(xhr.responseText.length) {
									try {
										if('JSON' in global) {
											response = JSON.parse(xhr.responseText);
										}
										else {
											response = new Function('return (' + xhr.responseText + ')')();
										}
									}
									catch(e) {
										throw "Error while parsing JSON body : "+e;
									}
								}
								break;
							case 'xml':
								// Based on jQuery's parseXML() function
								try {
									// Standard
									if(global.DOMParser) {
										response = (new DOMParser()).parseFromString(xhr.responseText,'text/xml');
									}
									// IE<9
									else {
										response = new ActiveXObject('Microsoft.XMLDOM');
										response.async = 'false';
										response.loadXML(xhr.responseText);
									}
								}
								catch(e) {
									response = undefined;
								}
								if(!response || !response.documentElement || response.getElementsByTagName('parsererror').length) {
									throw 'Invalid XML';
								}
								break;
							default:
								response = xhr.responseText;
						}
					}
					// Late status code verification to allow passing data when, per example, a 409 is returned
					// --- https://stackoverflow.com/questions/10046972/msie-returns-status-code-of-1223-for-ajax-request
					if('status' in xhr && !/^2|1223/.test(xhr.status)) {
						throw xhr.status + ' (' + xhr.statusText + ')';
					}
					// Fulfilled
					promise(true, [xhr, response]);
				}
				catch(e) {
					// Rejected
					promise(false, [e, xhr, response]);
				}
			},

			// Handle errors
			handleError = function(message) {
				if(!aborted) {
					message = typeof message == 'string' ? message : 'Connection aborted';
					promise.abort();
					promise(false, [new Error(message), xhr, null]);
				}
			},
				
			// Handle timeouts
			handleTimeout = function() {
				if(!aborted) {
					if(!options.attempts || ++attempts != options.attempts) {
						xhr.abort();
						sending = false;
						promise.send();
					}
					else {
						handleError('Timeout (' + url + ')');
					}
				}
			};

			// Normalize options
			options.async = 'async' in options ? !!options.async : true;
			options.cache = 'cache' in options ? !!options.cache : false;
			options.dataType = 'dataType' in options ? options.dataType.toLowerCase() : defaultDataType;
			options.responseType = 'responseType' in options ? options.responseType.toLowerCase() : 'auto';
			options.user = options.user || '';
			options.password = options.password || '';
			options.withCredentials = !!options.withCredentials;
			options.timeout = 'timeout' in options ? parseInt(options.timeout, 10) : 30000;
			options.attempts = 'attempts' in options ? parseInt(options.attempts, 10) : 1;

			// Guess if we're dealing with a cross-origin request
			i = url.match(/\/\/(.+?)\//);
			crossOrigin = i && (i[1] ? i[1] != location.host : false);

			// Prepare data
			if('ArrayBuffer' in global && data instanceof ArrayBuffer) {
				options.dataType = 'arraybuffer';
			}
			else if('Blob' in global && data instanceof Blob) {
				options.dataType = 'blob';
			}
			else if('Document' in global && data instanceof Document) {
				options.dataType = 'document';
			}
			else if('FormData' in global && data instanceof FormData) {
				options.dataType = 'formdata';
			}
			if(data !== null) {
				switch(options.dataType) {
					case 'json':
						data = JSON.stringify(data);
						break;
					case 'post':
						data = jparam(data);
				}
			}

			// Prepare headers
			if(options.headers) {
				var format = function(match,p1,p2) {
					return p1 + p2.toUpperCase();
				};
				for(i in options.headers) {
					headers[i.replace(/(^|-)([^-])/g,format)] = options.headers[i];
				}
			}
			if(!('Content-Type' in headers) && method!='GET') {
				if(options.dataType in mimeTypes) {
					if(mimeTypes[options.dataType]) {
						headers['Content-Type'] = mimeTypes[options.dataType];
					}
				}
			}
			if(!headers.Accept) {
				headers.Accept = (options.responseType in accept) ? accept[options.responseType] : '*/*';
			}
			if(!crossOrigin && !('X-Requested-With' in headers)) { // (that header breaks in legacy browsers with CORS)
				headers['X-Requested-With'] = 'XMLHttpRequest';
			}
			if(!options.cache && !('Cache-Control' in headers)) {
				headers['Cache-Control'] = 'no-cache';
			}

			// Prepare URL
			if(method == 'GET' && data && typeof data == 'string') {
				url += (/\?/.test(url)?'&':'?') + data;
			}

			// Start the request
			if(options.async) {
				promise.send();
			}

			// Return promise
			return promise;

		};
		
		// Define external qwest object
		var getNewPromise = function(q) {
				// Prepare
				var promises = [],
					loading = 0,
					values = [];
				// Create a new promise to handle all requests
				return pinkyswear(function(pinky) {
					// Basic request method
					var method_index = -1,
						createMethod = function(method) {
							return function(url, data, options, before) {
								var index = ++method_index;
								++loading;
								promises.push(qwest(method, pinky.base + url, data, options, before).then(function(xhr, response) {
									values[index] = arguments;
									if(!--loading) {
										pinky(true, values.length == 1 ? values[0] : [values]);
									}
								}, function() {
									pinky(false, arguments);
								}));
								return pinky;
							};
						};
					// Define external API
					pinky.get = createMethod('GET');
					pinky.post = createMethod('POST');
					pinky.put = createMethod('PUT');
					pinky['delete'] = createMethod('DELETE');
					pinky['catch'] = function(f) {
						return pinky.then(null, f);
					};
					pinky.complete = function(f) {
						var func = function() {
							f(); // otherwise arguments will be passed to the callback
						};
						return pinky.then(func, func);
					};
					pinky.map = function(type, url, data, options, before) {
						return createMethod(type.toUpperCase()).call(this, url, data, options, before);
					};
					// Populate methods from external object
					for(var prop in q) {
						if(!(prop in pinky)) {
							pinky[prop] = q[prop];
						}
					}
					// Set last methods
					pinky.send = function() {
						for(var i=0, j=promises.length; i<j; ++i) {
							promises[i].send();
						}
						return pinky;
					};
					pinky.abort = function() {
						for(var i=0, j=promises.length; i<j; ++i) {
							promises[i].abort();
						}
						return pinky;
					};
					return pinky;
				});
			},
			q = {
				base: '',
				get: function() {
					return getNewPromise(q).get.apply(this, arguments);
				},
				post: function() {
					return getNewPromise(q).post.apply(this, arguments);
				},
				put: function() {
					return getNewPromise(q).put.apply(this, arguments);
				},
				'delete': function() {
					return getNewPromise(q)['delete'].apply(this, arguments);
				},
				map: function() {
					return getNewPromise(q).map.apply(this, arguments);
				},
				xhr2: xhr2,
				limit: function(by) {
					limit = by;
					return q;
				},
				setDefaultOptions: function(options) {
					defaultOptions = options;
					return q;
				},
				setDefaultXdrResponseType: function(type) {
					defaultXdrResponseType = type.toLowerCase();
					return q;
				},
				setDefaultDataType: function(type) {
					defaultDataType = type.toLowerCase();
					return q;
				},
				getOpenRequests: function() {
					return requests;
				}
			};
		
		return q;

	}();


/***/ },

/***/ 245:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module, setImmediate, process) {/*
	 * PinkySwear.js 2.2.2 - Minimalistic implementation of the Promises/A+ spec
	 * 
	 * Public Domain. Use, modify and distribute it any way you like. No attribution required.
	 *
	 * NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.
	 *
	 * PinkySwear is a very small implementation of the Promises/A+ specification. After compilation with the
	 * Google Closure Compiler and gzipping it weighs less than 500 bytes. It is based on the implementation for 
	 * Minified.js and should be perfect for embedding. 
	 *
	 *
	 * PinkySwear has just three functions.
	 *
	 * To create a new promise in pending state, call pinkySwear():
	 *         var promise = pinkySwear();
	 *
	 * The returned object has a Promises/A+ compatible then() implementation:
	 *          promise.then(function(value) { alert("Success!"); }, function(value) { alert("Failure!"); });
	 *
	 *
	 * The promise returned by pinkySwear() is a function. To fulfill the promise, call the function with true as first argument and
	 * an optional array of values to pass to the then() handler. By putting more than one value in the array, you can pass more than one
	 * value to the then() handlers. Here an example to fulfill a promsise, this time with only one argument: 
	 *         promise(true, [42]);
	 *
	 * When the promise has been rejected, call it with false. Again, there may be more than one argument for the then() handler:
	 *         promise(true, [6, 6, 6]);
	 *         
	 * You can obtain the promise's current state by calling the function without arguments. It will be true if fulfilled,
	 * false if rejected, and otherwise undefined.
	 * 		   var state = promise(); 
	 * 
	 * https://github.com/timjansen/PinkySwear.js
	 */
	(function(target) {
		var undef;

		function isFunction(f) {
			return typeof f == 'function';
		}
		function isObject(f) {
			return typeof f == 'object';
		}
		function defer(callback) {
			if (typeof setImmediate != 'undefined')
				setImmediate(callback);
			else if (typeof process != 'undefined' && process['nextTick'])
				process['nextTick'](callback);
			else
				setTimeout(callback, 0);
		}

		target[0][target[1]] = function pinkySwear(extend) {
			var state;           // undefined/null = pending, true = fulfilled, false = rejected
			var values = [];     // an array of values as arguments for the then() handlers
			var deferred = [];   // functions to call when set() is invoked

			var set = function(newState, newValues) {
				if (state == null && newState != null) {
					state = newState;
					values = newValues;
					if (deferred.length)
						defer(function() {
							for (var i = 0; i < deferred.length; i++)
								deferred[i]();
						});
				}
				return state;
			};

			set['then'] = function (onFulfilled, onRejected) {
				var promise2 = pinkySwear(extend);
				var callCallbacks = function() {
		    		try {
		    			var f = (state ? onFulfilled : onRejected);
		    			if (isFunction(f)) {
			   				function resolve(x) {
							    var then, cbCalled = 0;
			   					try {
					   				if (x && (isObject(x) || isFunction(x)) && isFunction(then = x['then'])) {
											if (x === promise2)
												throw new TypeError();
											then['call'](x,
												function() { if (!cbCalled++) resolve.apply(undef,arguments); } ,
												function(value){ if (!cbCalled++) promise2(false,[value]);});
					   				}
					   				else
					   					promise2(true, arguments);
			   					}
			   					catch(e) {
			   						if (!cbCalled++)
			   							promise2(false, [e]);
			   					}
			   				}
			   				resolve(f.apply(undef, values || []));
			   			}
			   			else
			   				promise2(state, values);
					}
					catch (e) {
						promise2(false, [e]);
					}
				};
				if (state != null)
					defer(callCallbacks);
				else
					deferred.push(callCallbacks);
				return promise2;
			};
	        if(extend){
	            set = extend(set);
	        }
			return set;
		};
	})( false ? [window, 'pinkySwear'] : [module, 'exports']);


	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(246)(module), __webpack_require__(247).setImmediate, __webpack_require__(248)))

/***/ },

/***/ 246:
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },

/***/ 247:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(setImmediate, clearImmediate) {var nextTick = __webpack_require__(248).nextTick;
	var apply = Function.prototype.apply;
	var slice = Array.prototype.slice;
	var immediateIds = {};
	var nextImmediateId = 0;

	// DOM APIs, for completeness

	exports.setTimeout = function() {
	  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
	};
	exports.setInterval = function() {
	  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
	};
	exports.clearTimeout =
	exports.clearInterval = function(timeout) { timeout.close(); };

	function Timeout(id, clearFn) {
	  this._id = id;
	  this._clearFn = clearFn;
	}
	Timeout.prototype.unref = Timeout.prototype.ref = function() {};
	Timeout.prototype.close = function() {
	  this._clearFn.call(window, this._id);
	};

	// Does not start the time, just sets up the members needed.
	exports.enroll = function(item, msecs) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = msecs;
	};

	exports.unenroll = function(item) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = -1;
	};

	exports._unrefActive = exports.active = function(item) {
	  clearTimeout(item._idleTimeoutId);

	  var msecs = item._idleTimeout;
	  if (msecs >= 0) {
	    item._idleTimeoutId = setTimeout(function onTimeout() {
	      if (item._onTimeout)
	        item._onTimeout();
	    }, msecs);
	  }
	};

	// That's not how node.js implements it but the exposed api is the same.
	exports.setImmediate = typeof setImmediate === "function" ? setImmediate : function(fn) {
	  var id = nextImmediateId++;
	  var args = arguments.length < 2 ? false : slice.call(arguments, 1);

	  immediateIds[id] = true;

	  nextTick(function onNextTick() {
	    if (immediateIds[id]) {
	      // fn.call() is faster so we optimize for the common use-case
	      // @see http://jsperf.com/call-apply-segu
	      if (args) {
	        fn.apply(null, args);
	      } else {
	        fn.call(null);
	      }
	      // Prevent ids from leaking
	      exports.clearImmediate(id);
	    }
	  });

	  return id;
	};

	exports.clearImmediate = typeof clearImmediate === "function" ? clearImmediate : function(id) {
	  delete immediateIds[id];
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(247).setImmediate, __webpack_require__(247).clearImmediate))

/***/ },

/***/ 248:
/***/ function(module, exports) {

	// shim for using process in browser

	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	(function () {
	  try {
	    cachedSetTimeout = setTimeout;
	  } catch (e) {
	    cachedSetTimeout = function () {
	      throw new Error('setTimeout is not defined');
	    }
	  }
	  try {
	    cachedClearTimeout = clearTimeout;
	  } catch (e) {
	    cachedClearTimeout = function () {
	      throw new Error('clearTimeout is not defined');
	    }
	  }
	} ())
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = cachedSetTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    cachedClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        cachedSetTimeout(drainQueue, 0);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },

/***/ 249:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * @preserve jquery-param (c) 2015 KNOWLEDGECODE | MIT
	 */
	/*global define */
	(function (global) {
	    'use strict';

	    var param = function (a) {
	        var add = function (s, k, v) {
	            v = typeof v === 'function' ? v() : v === null ? '' : v === undefined ? '' : v;
	            s[s.length] = encodeURIComponent(k) + '=' + encodeURIComponent(v);
	        }, buildParams = function (prefix, obj, s) {
	            var i, len, key;

	            if (Object.prototype.toString.call(obj) === '[object Array]') {
	                for (i = 0, len = obj.length; i < len; i++) {
	                    buildParams(prefix + '[' + (typeof obj[i] === 'object' ? i : '') + ']', obj[i], s);
	                }
	            } else if (obj && obj.toString() === '[object Object]') {
	                for (key in obj) {
	                    if (obj.hasOwnProperty(key)) {
	                        if (prefix) {
	                            buildParams(prefix + '[' + key + ']', obj[key], s, add);
	                        } else {
	                            buildParams(key, obj[key], s, add);
	                        }
	                    }
	                }
	            } else if (prefix) {
	                add(s, prefix, obj);
	            } else {
	                for (key in obj) {
	                    add(s, key, obj[key]);
	                }
	            }
	            return s;
	        };
	        return buildParams('', a, []).join('&').replace(/%20/g, '+');
	    };

	    if (typeof module === 'object' && typeof module.exports === 'object') {
	        module.exports = param;
	    } else if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
	            return param;
	        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else {
	        global.param = param;
	    }

	}(this));


/***/ },

/***/ 250:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(251);

	//window.signRecord = 'https://signin.api.jituancaiyun.com/signin/pages/index.html?orgId=' + localStorage.getItem('orgId') + '#/record';
	if (location.href.indexOf('https') != -1) {
		window.signRecord = 'https://signin.api.jituancaiyun.com/signin/pages/index.html'; //?orgId=' + localStorage.getItem('orgId') + '#/record';
		window.imgUrl = 'http://video.statics.cdn.jituancaiyun.com//approve/caiyun/scjr_yc@3x.png';
	} else {
		window.signRecord = 'http://10.0.10.44/resource/sign/caiyun/index.html'; //?orgId=' + localStorage.getItem('orgId') + '#/record';
		window.imgUrl = 'http://10.0.10.44/resource/approve/caiyun/scjr_yc@3x.png';
	}

/***/ },

/***/ 251:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	"use strict";

/***/ },

/***/ 253:
/***/ function(module, exports, __webpack_require__) {

	var cookie = __webpack_require__(254);

	if (typeof Object.assign != 'function') {
	  Object.assign = function(target) {
	    'use strict';
	    if (target == null) {
	      throw new TypeError('Cannot convert undefined or null to object');
	    }

	    target = Object(target);
	    for (var index = 1; index < arguments.length; index++) {
	      var source = arguments[index];
	      if (source != null) {
	        for (var key in source) {
	          if (Object.prototype.hasOwnProperty.call(source, key)) {
	            target[key] = source[key];
	          }
	        }
	      }
	    }
	    return target;
	  };
	}

	var _rawCookie = {};
	var _res = undefined;

	function _isResWritable() {
	  if(!_res)
	    return false
	  if(_res.headersSent === true)
	    return false
	  return true
	}

	function load(name, doNotParse) {
	  var cookies = (typeof document === 'undefined') ? _rawCookie : cookie.parse(document.cookie);
	  var cookieVal = cookies && cookies[name];

	  if (!doNotParse) {
	    try {
	      cookieVal = JSON.parse(cookieVal);
	    } catch(e) {
	      // Not serialized object
	    }
	  }

	  return cookieVal;
	}

	function select(regex) {
	  var cookies = (typeof document === 'undefined') ? _rawCookie : cookie.parse(document.cookie);
	  if(!cookies)
	    return {}
	  if(!regex)
	    return cookies
	  return Object.keys(cookies)
	    .reduce(function(accumulator, name) {
	      if(!regex.test(name))
	        return accumulator
	      var newCookie = {}
	      newCookie[name] = cookies[name]
	      return Object.assign({}, accumulator, newCookie)
	    }, {})
	}

	function save(name, val, opt) {
	  _rawCookie[name] = val;

	  // allow you to work with cookies as objects.
	  if (typeof val === 'object') {
	    _rawCookie[name] = JSON.stringify(val);
	  }

	  // Cookies only work in the browser
	  if (typeof document !== 'undefined') {
	    document.cookie = cookie.serialize(name, _rawCookie[name], opt);
	  }

	  if (_isResWritable() && _res.cookie) {
	    _res.cookie(name, val, opt);
	  }
	}

	function remove(name, opt) {
	  delete _rawCookie[name];

	  if (typeof opt === 'undefined') {
	    opt = {};
	  } else if (typeof opt === 'string') {
	    // Will be deprecated in future versions
	    opt = { path: opt };
	  }

	  if (typeof document !== 'undefined') {
	    opt.expires = new Date(1970, 1, 1, 0, 0, 1);
	    document.cookie = cookie.serialize(name, '', opt);
	  }

	  if (_isResWritable() && _res.clearCookie) {
	    _res.clearCookie(name, opt);
	  }
	}

	function setRawCookie(rawCookie) {
	  if (rawCookie) {
	    _rawCookie = cookie.parse(rawCookie);
	  } else {
	    _rawCookie = {};
	  }
	}

	function plugToRequest(req, res) {
	  if (req.cookie) {
	    _rawCookie = req.cookie;
	  } else if (req.cookies) {
	    _rawCookie = req.cookies;
	  } else if (req.headers && req.headers.cookie) {
	    setRawCookie(req.headers.cookie);
	  } else {
	    _rawCookie = {};
	  }

	  _res = res;
	  return function unplug() {
	    _res = null;
	    _rawCookie = {};
	  }
	}

	var reactCookie = {
	  load: load,
	  select: select,
	  save: save,
	  remove: remove,
	  setRawCookie: setRawCookie,
	  plugToRequest: plugToRequest
	};

	if (typeof window !== 'undefined') {
	  window['reactCookie'] = reactCookie;
	}

	module.exports = reactCookie;


/***/ },

/***/ 254:
/***/ function(module, exports) {

	/*!
	 * cookie
	 * Copyright(c) 2012-2014 Roman Shtylman
	 * Copyright(c) 2015 Douglas Christopher Wilson
	 * MIT Licensed
	 */

	/**
	 * Module exports.
	 * @public
	 */

	exports.parse = parse;
	exports.serialize = serialize;

	/**
	 * Module variables.
	 * @private
	 */

	var decode = decodeURIComponent;
	var encode = encodeURIComponent;

	/**
	 * RegExp to match field-content in RFC 7230 sec 3.2
	 *
	 * field-content = field-vchar [ 1*( SP / HTAB ) field-vchar ]
	 * field-vchar   = VCHAR / obs-text
	 * obs-text      = %x80-FF
	 */

	var fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;

	/**
	 * Parse a cookie header.
	 *
	 * Parse the given cookie header string into an object
	 * The object has the various cookies as keys(names) => values
	 *
	 * @param {string} str
	 * @param {object} [options]
	 * @return {object}
	 * @public
	 */

	function parse(str, options) {
	  if (typeof str !== 'string') {
	    throw new TypeError('argument str must be a string');
	  }

	  var obj = {}
	  var opt = options || {};
	  var pairs = str.split(/; */);
	  var dec = opt.decode || decode;

	  pairs.forEach(function(pair) {
	    var eq_idx = pair.indexOf('=')

	    // skip things that don't look like key=value
	    if (eq_idx < 0) {
	      return;
	    }

	    var key = pair.substr(0, eq_idx).trim()
	    var val = pair.substr(++eq_idx, pair.length).trim();

	    // quoted values
	    if ('"' == val[0]) {
	      val = val.slice(1, -1);
	    }

	    // only assign once
	    if (undefined == obj[key]) {
	      obj[key] = tryDecode(val, dec);
	    }
	  });

	  return obj;
	}

	/**
	 * Serialize data into a cookie header.
	 *
	 * Serialize the a name value pair into a cookie string suitable for
	 * http headers. An optional options object specified cookie parameters.
	 *
	 * serialize('foo', 'bar', { httpOnly: true })
	 *   => "foo=bar; httpOnly"
	 *
	 * @param {string} name
	 * @param {string} val
	 * @param {object} [options]
	 * @return {string}
	 * @public
	 */

	function serialize(name, val, options) {
	  var opt = options || {};
	  var enc = opt.encode || encode;

	  if (!fieldContentRegExp.test(name)) {
	    throw new TypeError('argument name is invalid');
	  }

	  var value = enc(val);

	  if (value && !fieldContentRegExp.test(value)) {
	    throw new TypeError('argument val is invalid');
	  }

	  var pairs = [name + '=' + value];

	  if (null != opt.maxAge) {
	    var maxAge = opt.maxAge - 0;
	    if (isNaN(maxAge)) throw new Error('maxAge should be a Number');
	    pairs.push('Max-Age=' + maxAge);
	  }

	  if (opt.domain) {
	    if (!fieldContentRegExp.test(opt.domain)) {
	      throw new TypeError('option domain is invalid');
	    }

	    pairs.push('Domain=' + opt.domain);
	  }

	  if (opt.path) {
	    if (!fieldContentRegExp.test(opt.path)) {
	      throw new TypeError('option path is invalid');
	    }

	    pairs.push('Path=' + opt.path);
	  }

	  if (opt.expires) pairs.push('Expires=' + opt.expires.toUTCString());
	  if (opt.httpOnly) pairs.push('HttpOnly');
	  if (opt.secure) pairs.push('Secure');

	  return pairs.join('; ');
	}

	/**
	 * Try decoding a string using a decoding function.
	 *
	 * @param {string} str
	 * @param {function} decode
	 * @private
	 */

	function tryDecode(str, decode) {
	  try {
	    return decode(str);
	  } catch (e) {
	    return str;
	  }
	}


/***/ },

/***/ 255:
/***/ function(module, exports) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	/**
	 * 这个文件主要用于 Hybrid 框架中 Native 和 H5 之间通信，里面根据约定好的接口规范来编写通信 API
	 */

	(function (win) {

	  var ua = win.navigator && win.navigator.userAgent || '';
	  // 工具函数
	  var util = {
	    isIOS: function isIOS() {
	      if (/Mobile/.test(ua) && ua.match(/iPad|iPod|iPhone/)) {
	        return true;
	      }
	      return false;
	    },
	    isAndriond: function isAndriond() {
	      if (/Mobile/.test(ua) && /Android/i.test(ua)) {
	        return true;
	      }
	      return false;
	    }
	  };
	  /* 
	   客户端 v1.2.x 版本以前定好的接口，在这个 hybrid-bridge 项目诞生前的接口
	   在 hybrid-bridge@1.1.0 版本及以后都要兼容这些接口，通过这个方法做兼容中转
	   */
	  function oldApiTrans(apiName) {
	    if (win.JSBridge._SURPPORTED_API && win.JSBridge._SURPPORTED_API[apiName]) {
	      // 如果当前版本客户端已经重写支持了此接口
	      win.JSBridge.requestHybrid({
	        module: 'webview',
	        method: apiName
	      });
	    } else if (util.isAndriond()) {
	      // 如果是老版本且是安卓系统
	      act && act.doAct(apiName);
	    } else {
	      // 如果是老版本且是IOS系统
	      win.location = '/restController/doAct/' + apiName;
	    }
	  }

	  // 所有提供给 Native 或 H5 调用的 API 或者临时生成的唯一的 callback 函数都挂载在这个对象上（临时的 callback 用完要及时 delete 掉）
	  win.JSBridge = {
	    _SURPPORTED_API: null,
	    // (Native主动调用)这个对象上面会挂载所有 Native 调用 H5 的接口，例如H5页面弹框等
	    H5API: {},
	    // 所有回调函数都注册到这里
	    _callback: {},
	    /*
	     * 所有通过 `win.JSBridge.NativeAPI.bindNativeEvent` 注册的事件都挂载在这里
	     * 当 Native 调用 `win.JSBridge.onEvent` 发送事件通知时，都来这里找到对应的事件类型和回调函数一一执行
	     *
	     * @example(经过执行后可能会变成这样)
	     * _event: {  // 事件类型为 key，注册事件回调函数按注册顺序放在数组里
	     *   "activeweb": [
	     *     eventcallback1,
	     *     eventcallback2...
	     *   ],
	     *   "eventType2": [
	     *     eventcallback1,
	     *     eventcallback2...
	     *   ],
	     * }
	     */
	    _event: {},
	    /**
	     当 Native 成功执行完且需回调 H5 方法的时候调用这个方法（一般是在 H5 发起的网络请求中包含了 callback 参数时才需要回调），并按下面的数据格式传递数据
	     @param callbackToken {String} 对应于网络请求中发过去的callback参数值
	     @param response {Object} JSON 对象，具体字段如下：
	     @param response.success {Boolean} 成功与否
	     @param response.msg {String} 相关信息
	     @param response.data {Object} JSON 数据对象
	     @param response.code {Int} 状态码
	       @example
	     // 接着上面“网络请求格式约定”的例子
	     window.JSBridge.onSuccess('token_1439804657177',{
	        code: 200,
	        success: true,
	        msg: '执行成功',
	        data: [
	          {name: '秋知', tel: 15889936061},
	          {name: '移动客服', tel: 10086}
	        ]
	      });
	     */
	    onSuccess: function onSuccess(callbackToken, response) {
	      var self = this;
	      if (typeof callbackToken === 'string' && (typeof response === 'undefined' ? 'undefined' : _typeof(response)) === 'object') {
	        try {
	          JSBridge._callback[callbackToken](response);
	        } catch (err) {
	          // TODO (全局提示、错误日志收集等)
	        }
	      } else {
	        // TODO (调用Native失败率统计等)
	        try {
	          self._callback[callbackToken](response);
	        } catch (err) {
	          // TODO (全局提示、错误日志收集等)
	        }
	      }
	    },
	    /**
	     Native 执行发生错误时回调这个方法，可用在当网络请求中没有 callback 参数时回调这个方法而不是 window.JSBridge.onSuccess(callbackToken, response)；
	     或者在 H5 并没有调用 Native 方法时，发生了错误调用这个方法来统计错误信息等。参数如下：
	     @param error {Object} JSON 对象，错误原因描述
	     @param error.level {Int} 错误等级，值越大越严重
	     @param error.msg {String} 错误描述
	     @param error.stack {String} 可选，错误发生时程序堆栈信息
	     */
	    onError: function onError(error) {
	      // TODO
	    },
	    /**
	     * 调用 Native API（将发出约定格式的请求，由 Native 拦截此请求并执行相应方法）
	     *
	     * Doc: http://wiki.shinemo.com:8090/pages/viewpage.action?pageId=15565665
	     * Example:
	     *   window.JSBridge.requestHybrid({
	    *     module: 'addressmodule',
	    *     method: 'getAddressList',
	    *     data: {
	    *       sort: 'increase'
	    *     },
	    *     callback: function(data) {
	    *       conosle.log(JSON.stringify(data));
	    *     }
	    *   });
	     *
	     * @param {Object} params 传过去的参数对象
	     * @param {String} params.module 必填，要调用的 Native 模块的名称
	     * @param {String} params.method 必填，要调用的 Native API 名称
	     * @param {Object} params.data 选填，传过去参数值
	     * @param {Function} params.callback 选填，Native 完成后的回调函数
	     */
	    requestHybrid: function requestHybrid(params) {
	      var self = this;

	      // 如果有回调函数，则注册在 window.JSBridge._callback 对象上面，由它做统一分发，调用后销毁
	      if (params.callback) {
	        var token = params.callbackName || 'token_' + new Date().getTime();
	        self._callback[token] = function (data) {
	          params.callback(data);
	          delete self._callback[token];
	        };
	        // 将token传给Native回调使用
	        params._token = token;
	      }

	      var createdUrl = self._getUrlByParams(params, params.callbackName);
	      self._postToNative(createdUrl);
	    },

	    /**
	     * 根据参数生成约定格式的 Url
	     */
	    _getUrlByParams: function _getUrlByParams(params) {
	      var totalUrl = '';
	      var protoHead = 'native://';

	      totalUrl += protoHead + params.method;

	      /*  if(params.callback){
	       !params.data && (params.data = {});
	       params.data.callback = params._token;
	       }*/

	      if (params.data) {
	        if (_typeof(params.data) == "object") {
	          params.data = JSON.stringify(params.data);
	        }
	        totalUrl += '?data=' + encodeURIComponent(params.data);
	        totalUrl += '&callback=' + params._token;
	      } else {
	        totalUrl += '?callback=' + params._token;
	      }

	      return totalUrl;
	    },

	    /**
	     * 利用生成的 url 发出网络请求供 Native 拦截并调用相应方法
	     */
	    _postToNative: function _postToNative(createdUrl) {

	      /*
	       @FIXME:
	       通过修改 location 来发起请求通知客户端会导致一个问题：
	       通过 <script src="hybrid-bridge.js"></script> 引入脚本后，如果这个脚本初始化时发出请求
	       native://webview/test 则页面后面的 <script></script> 代码则无法执行
	       方案：在 hybrid-bridge.js 初始化时先不调用 win.JSBridge._confirmSurpportedAPI 发起请求，
	       而是在页面的脚本里面再调用此方法发起请求。
	       */
	      /* if(util.isIOS()) {
	         win.location = createdUrl;
	       }else if(util.isAndriond()){*/
	      var iframe = document.createElement('iframe');
	      iframe.src = createdUrl;
	      iframe.style.display = 'none';
	      document.body.appendChild(iframe);
	      document.body.removeChild(iframe);
	      iframe = null;
	      /*}else{
	        win.location = createdUrl;
	      }*/
	    }
	  };
	})(window);

/***/ },

/***/ 256:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	//import Styles from './Dialog.scss';
	//
	var Component = _react2.default.Component;

	var Dialog = function (_Component) {
		_inherits(Dialog, _Component);

		function Dialog(props) {
			_classCallCheck(this, Dialog);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Dialog).call(this, props));

			_this.state = { show: props.show, msg: props.msg };
			return _this;
		}

		_createClass(Dialog, [{
			key: "componentDidMount",
			value: function componentDidMount() {
				var _this2 = this;

				if (this.props.timer || this.props.type == "alert") {
					this.timer = setTimeout(function () {
						_this2.setState({ show: false });
						_this2.props.stage.setState({ dialog: 0 });
					}, 2000);
				}
			}
		}, {
			key: "hide",
			value: function hide() {
				this.props.hide();
			}
		}, {
			key: "render",
			value: function render() {
				var d = "";
				if (this.state.show) {
					d = _react2.default.createElement(
						"div",
						{
							__self: this
						},
						_react2.default.createElement(
							"div",
							{ className: "dialog " + this.props.type, __self: this
							},
							_react2.default.createElement(
								"div",
								{
									__self: this
								},
								this.props.msg
							),
							this.props.buttons
						),
						this.props.mask ? _react2.default.createElement("div", { className: "dialog-mask", onClick: this.hide.bind(this), __self: this
						}) : undefined
					);
				}
				return _react2.default.createElement(
					"div",
					{
						__self: this
					},
					d
				);
			}
		}]);

		return Dialog;
	}(Component);

	exports.default = Dialog;

/***/ },

/***/ 257:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactHelmet = __webpack_require__(233);

	var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

	var _Caigou = __webpack_require__(258);

	var _Caigou2 = _interopRequireDefault(_Caigou);

	var _config = __webpack_require__(243);

	var _config2 = _interopRequireDefault(_config);

	var _Expense = __webpack_require__(262);

	var _Expense2 = _interopRequireDefault(_Expense);

	var _Generic = __webpack_require__(264);

	var _Generic2 = _interopRequireDefault(_Generic);

	var _reactCookie = __webpack_require__(253);

	var _reactCookie2 = _interopRequireDefault(_reactCookie);

	var _Dialog = __webpack_require__(256);

	var _Dialog2 = _interopRequireDefault(_Dialog);

	var _alert = __webpack_require__(261);

	var _alert2 = _interopRequireDefault(_alert);

	var _reactRouter = __webpack_require__(165);

	var _UserAvatar = __webpack_require__(265);

	var _UserAvatar2 = _interopRequireDefault(_UserAvatar);

	var _Leave = __webpack_require__(266);

	var _Leave2 = _interopRequireDefault(_Leave);

	var _Off = __webpack_require__(267);

	var _Off2 = _interopRequireDefault(_Off);

	var _GoOut = __webpack_require__(268);

	var _GoOut2 = _interopRequireDefault(_GoOut);

	var _Travel = __webpack_require__(269);

	var _Travel2 = _interopRequireDefault(_Travel);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Component = _react2.default.Component;

	var Create = function (_Component) {
		_inherits(Create, _Component);

		function Create(props) {
			_classCallCheck(this, Create);

			var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(Create).call(this, props));

			console.log(props);
			_this2.imgList = [];
			_this2.params = props.params;
			_this2.leaveDays = 0;
			_this2.isloading = false;
			_this2.state = { imgList: [], showUpload: true, authList: [], informList: [], showAddPic: true, dialog: 0, isSet: 0, detail: null };
			return _this2;
		}

		_createClass(Create, [{
			key: 'renderProcess',
			value: function renderProcess() {
				var _this3 = this;

				_config2.default.ajax('getFlowByType', {
					method: 'post',
					body: JSON.stringify({ applyType: this.props.params.type, leaveDays: this.leaveDays })
				}).then(function (res) {
					var data = res; //{"status":200,"total":0,"result":{"isSet":1,"flowInfos":[{"uid":292177,"uname":"青城名字要很长很长才好青城名字要很长很长","mobile":null,"avatar":"http://n1.store.uban360.com:7188/sfs/avatar?uid=292177"}]},"msg":null}
					if (data.status == 200) {
						var arr = (data.result.flowInfos || []).map(function (item) {
							return { name: item.uname, uid: item.uid };
						});
						if (data.result.isSet == 1) {
							_this3.setState({ authList: arr, isSet: data.result.isSet });
						} else if (_this3.state.authList == 0) {
							_this3.setState({ authList: arr, isSet: data.result.isSet });
						} else {
							_this3.setState({ isSet: data.result.isSet });
						}
					} else {
						(0, _alert2.default)('错误码：' + data.status, _this3);
					}
				});
			}
		}, {
			key: 'componentWillMount',
			value: function componentWillMount() {
				var _this4 = this;

				if (this.params.type == 4) {
					this.setState({ showAddPic: false });
				}
				_config2.default.ajax('lastSelected', {
					method: 'post',
					body: JSON.stringify({ applyType: this.props.params.type })
				}).then(function (res) {
					var data = res; //{"status":200,"total":0,"result":{"isSet":0,"flowInfos":[{"uid":292177,"uname":"青城名字要很长很长才好青城名字要很长很长","mobile":null,"avatar":"http://n1.store.uban360.com:7188/sfs/avatar?uid=292177"}]},"msg":null}
					if (data.status == 200) {
						var arr = (data.result.flowInfos || []).map(function (item) {
							return { name: item.uname, uid: item.uid };
						});
						_this4.setState({ informList: arr });
					} else {
						(0, _alert2.default)('错误码：' + data.status, _this4);
					}
				});
				this.renderProcess();
				if (this.params.id) {
					var param = {};
					param.applyId = this.props.params.id;
					_config2.default.ajax('queryApplyDetail', {
						method: 'POST',
						body: JSON.stringify(param)
					}).then(function (res) {
						if (res.status == 200) {
							_this4.setState({
								userInfo: {
									"uid": res.result.uid,
									"name": res.result.uname,
									"avatar": res.result.avatar
								},
								detail: res.result,
								imgList: (res.result.photos || []).map(function (item) {
									return { data: item.photo_url, uploaded: true };
								})
							});
						}
						console.log(res.result);
					});
				}
				console.log('hehe');
				/*if(this.params.type ==3 && localStorage.getItem('detail')) {
	   	//调休
	   	setTimeout(()=>{
	   		let detail = JSON.parse(localStorage.getItem('detail'));
	   		this.setState({detail:detail,imgList:JSON.parse(detail.photoStr),authList:JSON.parse(detail.flowStr),informList:detail.zhrlist});
	   		this.imgList = (JSON.parse(detail.photoStr)).map((item)=>{
	   			return item.data;
	   		});
	   		//localStorage.removeItem('detail');
	   	},100)
	   }*/
			}
			/*shouldComponentUpdate(nextProps,nextState){
	  	if(this.state.dialog !=nextState.dialog){
	  		return false;
	  	}else{
	  		return true;
	  	}
	  }*/

		}, {
			key: 'componentDidMount',
			value: function componentDidMount() {
				/*	this.props.router.setRouteLeaveHook(
	   		this.props.route,
	   		this.routerWillLeave
	   	)*/
			}
		}, {
			key: 'routerWillLeave',
			value: function routerWillLeave(nextLocation) {
				// 返回 false 会继续停留当前页面，
				// 否则，返回一个字符串，会显示给用户，让其自己决定
				return '确认要离开？';
			}
		}, {
			key: 'submit',
			value: function submit() {
				var _this5 = this;

				if (this.refs.myForm.validate()) {
					var _ret = function () {
						if (_this5.state.authList.length == 0) {
							(0, _alert2.default)('请选择审批人', _this5);
							return {
								v: false
							};
						}
						var values = _this5.refs.myForm.getValues();
						console.log(values);
						var params = {};

						params.applyType = _this5.props.params.type;
						params.customStruct = JSON.stringify(values);
						params.beginDate = values.beginDate || new Date();
						params.endDate = values.endDate || new Date();
						params.beginOvertime = values.beginOvertime || new Date();
						params.endOvertime = values.endOvertime || new Date();
						params.outType = values.outType || 0;
						params.flowStr = JSON.stringify(_this5.state.authList);
						params.travelCode = values.travelCode || 0;
						params.travelAddr = values.travelAddr || "";

						var imgList = _this5.imgList.map(function (item, indx) {
							return { id: indx, photoUrl: item };
						});
						params.photoStr = JSON.stringify(imgList);
						var zhrArr = _this5.state.informList.map(function (item) {
							return item.uid;
						});
						params.extraKnowerJarr = JSON.stringify(zhrArr);
						//事由
						params.applyResean = values.applyResean;
						params.leaveType = values.leaveType;
						if (_this5.isloading) {
							(0, _alert2.default)('请勿重复提交', _this5);
							return {
								v: false
							};
						}
						_this5.isloading = true;
						(0, _alert2.default)('正在提交中...', _this5);
						_config2.default.ajax('save', {
							body: JSON.stringify(params),
							method: 'post'
						}).then(function (res) {
							if (res.status == 200) {
								(0, _alert2.default)('您的审批提交成功', _this5);
								setTimeout(function () {
									_this5.isloading = false;
									location.href = "#/detail/" + params.applyType + "/" + _this5.params.title + "/" + res.result + "/fromme";
								}, 2000);
							} else {
								_this5.isloading = false;
								(0, _alert2.default)("失败！状态码：" + data.status + " " + data.msg, _this5);
							}
						});
					}();

					if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
				}
			}
			//选择图片

		}, {
			key: 'selectPictrues',
			value: function selectPictrues() {
				if (!this.state.showUpload) {
					(0, _alert2.default)('最多只能选择4张哦！', this);
					return false;
				}
				var _this = this;
				_config2.default.native('selectPictures', { count: this.state.imgList.length, sum: 4 }).then(function (res) {
					if (res.code == 200) {
						var _data = res.data.map(function (item) {
							return { data: "data:image/png;base64," + item, uploaded: false };
						});
						_data = _this.state.imgList.concat(_data).slice(0, 4);
						console.log(_data);
						_this.setState({ "imgList": _data });
						if (_data.length >= 4) {
							_this.setState({ showUpload: false });
						}
						_this.upload();
					}
				});
			}
		}, {
			key: 'del',
			value: function del(item, index) {
				this.state.imgList.splice(index, 1);
				this.setState({ imgList: this.state.imgList, showUpload: true });
				this.imgList.splice(index, 1);
			}
			//上传

		}, {
			key: 'upload',
			value: function upload() {
				var _this = this;
				this.state.imgList.forEach(function (item, index) {
					if (!item.uploaded && !item.uploading) {
						var param = {
							flag: index.toString(),
							Base64Stream: item.data.substr(21)
						};
						item.uploading = true;
						_config2.default.ajax('upload', {
							/*headers: {
	      	'Accept': 'application/json',
	      	'Content-Type': 'application/json'
	      },*/
							method: 'POST',
							body: JSON.stringify(param)
						}).then(function (res) {
							if (res.code == 200 || res.status == 200) {
								(function () {
									var data = res.result;
									var i = data.flag;
									var arr = _this.state.imgList.map(function (item, index) {
										if (index == i) {
											item.uploaded = true;
										}
										return item;
									});
									_this.setState({
										"imgList": arr
									});
									_this.imgList.push(data.photo_url);
								})();
							} else {
								(0, _alert2.default)("失败！状态码：" + data.status + " " + data.msg);
							}
						});
					}
				});
			}
			//选择人员

		}, {
			key: 'addUser',
			value: function addUser() {
				var _this = this;
				if (this.checkIsUpload()) {
					this.setState({ dialog: { mask: true, show: true, msg: "图片正在上传，请稍后", type: "alert" } });
					return;
				}
				_config2.default.native('selectPeopleIOS').then(function (res) {
					var data = res.data.map(function (item) {
						var ishave = false;
						for (var i = 0; i < _this.state.authList.length; i++) {
							if (item.uid == _this.state.authList[i].uid) {
								ishave = true;
							}
						}
						if (!ishave) {
							return item;
						}
					});
					var authList = _this.state.authList.concat(data.filter(function (x) {
						return x;
					}));
					_this.setState({ authList: authList });
				});
			}
			//选择人员（知会人）

		}, {
			key: 'addUser2',
			value: function addUser2() {
				var _this6 = this;

				if (this.checkIsUpload()) {
					this.setState({ dialog: { mask: true, show: true, msg: "图片正在上传，请稍后", type: "alert" } });
					return;
				}
				_config2.default.native('selectPeopleIOS').then(function (res) {
					var data = res.data.map(function (item) {
						var ishave = false;
						for (var i = 0; i < _this6.state.informList.length; i++) {
							if (item.uid == _this6.state.informList[i].uid) {
								ishave = true;
							}
						}
						if (!ishave) {
							return item;
						}
					});
					var informList = _this6.state.informList.concat(data.filter(function (x) {
						return x;
					}));
					_this6.setState({ informList: informList });
				});
				_config2.default.dadian('approval_creatapproval_addnotify_click', '创建审批页面点击知会人的添加按钮');
			}
		}, {
			key: 'checkIsUpload',
			value: function checkIsUpload() {
				var isuploading = false;
				this.state.imgList.forEach(function (item) {
					if (!item.uploaded) {
						isuploading = true;
					}
				});
				return isuploading;
			}
		}, {
			key: 'delPeople',
			value: function delPeople(index) {
				if (!this.state.isSet) {
					this.state.authList.splice(index, 1);
					this.setState({ authList: this.state.authList });
				}
			}
		}, {
			key: 'delPeople2',
			value: function delPeople2(index) {
				this.state.informList.splice(index, 1);
				this.setState({ informList: this.state.informList });
			}
		}, {
			key: 'bindData',
			value: function bindData() {
				/*let values= this.refs.myForm.getValues();
	   let params = {};
	   params.applyType= this.props.params.type;
	   params.customStruct=JSON.stringify(values);
	   params.beginDate =values.beginDate ;
	   params.endDate = values.endDate ;
	   params.beginOvertime =values.beginOvertime ;
	   params.endOvertime = values.endOvertime ;
	   params.outType = values.outType||0;
	   params.flowStr = JSON.stringify(this.state.authList);
	   params.travelCode=values.travelCode||0;
	   params.travelAddr = values.travelAddr||"";
	   let imgList = this.imgList.map((item,indx)=>{
	   	return {id:indx,data:item,uploaded:true};
	   });
	   params.photoStr = JSON.stringify(imgList);
	   let zhrArr = this.state.informList.map((item)=>{
	   			 	return item.uid
	   			})
	   params.extraKnowerJarr =JSON.stringify( zhrArr);
	   params.zhrlist = this.state.informList;
	   //事由
	   params.applyResean=values.applyResean;
	   params.leaveType= values.leaveType;
	   localStorage.setItem('detail',JSON.stringify(params));*/
			}
		}, {
			key: 'renderForm',
			value: function renderForm() {
				var category = this.params.type;
				switch (parseInt(category)) {
					case 0:
						{
							//请假
							return _react2.default.createElement(_Leave2.default, { renderProcess: this.reComputeDays.bind(this), ref: 'myForm', stage: this, detail: this.state.detail, __self: this
							});
						}
					case 1:
						{
							//外出
							return _react2.default.createElement(_GoOut2.default, { renderProcess: this.reComputeDays.bind(this), ref: 'myForm', stage: this, detail: this.state.detail, __self: this
							});
						}
					case 2:
						{
							//出差
							return _react2.default.createElement(_Travel2.default, { renderProcess: this.reComputeDays.bind(this), ref: 'myForm', stage: this, detail: this.state.detail, __self: this
							});
						}
					case 3:
						{
							//调休
							return _react2.default.createElement(_Off2.default, { bindData: this.bindData.bind(this), renderProcess: this.reComputeDays.bind(this), ref: 'myForm', stage: this, detail: this.state.detail, __self: this
							});
						}
					case 5:
						{
							//采购
							return _react2.default.createElement(_Caigou2.default, { renderProcess: this.reComputeDays.bind(this), ref: 'myForm', stage: this, detail: this.state.detail, __self: this
							});
							break;
						}
					case 4:
						{
							//报销
							return _react2.default.createElement(_Expense2.default, { renderProcess: this.reComputeDays.bind(this), ref: 'myForm', stage: this, detail: this.state.detail, __self: this
							});
							break;
						}
					case 6:
						{
							console.log('通用');
							//通用
							return _react2.default.createElement(_Generic2.default, { renderProcess: this.reComputeDays.bind(this), ref: 'myForm', stage: this, detail: this.state.detail, __self: this
							});
							break;
						}
				}
			}
		}, {
			key: 'renderDialog',
			value: function renderDialog() {
				console.log(this.state.dialog);
				return _react2.default.createElement(_Dialog2.default, _extends({ stage: this }, this.state.dialog, {
					__self: this
				}));
			}
		}, {
			key: 'compateDays',
			value: function compateDays(start, end) {
				var s = start.replace(/-/g, "/"),
				    e = end.replace(/-/g, "/"),
				    sd = new Date(s),
				    ed = new Date(e);
				var c = ed.getTime() - sd.getTime();
				return c;
			}

			//动态计算天数

		}, {
			key: 'reComputeDays',
			value: function reComputeDays(start, end, start2, end2) {
				var _ = this,
				    days = 0;
				// 加班的开始结束时间判断
				if (_.start2) {
					_.compateDays(start2, end2);
				}
				var c = _.compateDays(start, end);
				if (!c) {
					_.leaveDays = 0;
					return false;
				} else {
					days = c / (24 * 3600 * 1000);
					if (days > 0 && days < 1) {
						// 当计算的天数小于1时，天数直接等于0 
						_.leaveDays = 0;
					} else {
						// 大于1 
						_.leaveDays = Math.ceil(days);
					}
					_.renderProcess();
				}
			}
		}, {
			key: 'render',
			value: function render() {
				var _this7 = this;

				return _react2.default.createElement(
					'div',
					{
						__self: this
					},
					_react2.default.createElement(_reactHelmet2.default, { title: _config2.default.applyType[this.props.params.type], __self: this
					}),
					this.renderForm(),
					this.state.showAddPic ? _react2.default.createElement(
						'div',
						{ className: 'row add-photo', __self: this
						},
						_react2.default.createElement(
							'h4',
							{ onClick: this.selectPictrues.bind(this), __self: this
							},
							'照片',
							_react2.default.createElement(
								'span',
								{
									__self: this
								},
								'(最多可添加4张)'
							),
							_react2.default.createElement('i', { className: 'iconfont icon-qiandaotianjiazhaopian', __self: this
							})
						),
						_react2.default.createElement(
							'div',
							{ className: 'upload-list', __self: this
							},
							this.state.imgList.map(function (item, index) {
								console.log(item.uploaded);
								return _react2.default.createElement(
									'div',
									{ key: index, className: 'item', __self: _this7
									},
									!item.uploaded ? _react2.default.createElement(
										'span',
										{ className: 'uploading', __self: _this7
										},
										'上传中...'
									) : _react2.default.createElement('i', { onClick: _this7.del.bind(_this7, item, index), className: 'del iconfont icon-103', __self: _this7
									}),
									_react2.default.createElement('img', { src: item.data, __self: _this7
									})
								);
							})
						)
					) : undefined,
					_react2.default.createElement(
						'div',
						{ className: 'row add-people', __self: this
						},
						_react2.default.createElement(
							'h4',
							{
								__self: this
							},
							'审批人',
							_react2.default.createElement(
								'span',
								{
									__self: this
								},
								this.state.isSet ? "(管理员已设置审批人)" : "(点击头像可删除)"
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'people-list', __self: this
							},
							this.state.authList.map(function (item, index) {
								return _react2.default.createElement(
									'span',
									{
										__self: _this7
									},
									_react2.default.createElement(
										'div',
										{ className: 'item', key: index, onClick: _this7.delPeople.bind(_this7, index), __self: _this7
										},
										_react2.default.createElement(_UserAvatar2.default, { item: item, errorCallback: function errorCallback() {
												_this7.setState({ authList: _this7.state.authList });
											}, __self: _this7
										}),
										_react2.default.createElement(
											'div',
											{ className: 'userName', __self: _this7
											},
											item.name
										)
									),
									_this7.state.isSet && index == _this7.state.authList.length - 1 ? undefined : _react2.default.createElement('i', { className: 'iconfont icon-shenpiliucheng', __self: _this7
									})
								);
							}),
							!this.state.isSet ? _react2.default.createElement(
								'div',
								{ className: 'item', onClick: this.addUser.bind(this), __self: this
								},
								_react2.default.createElement('i', { className: 'iconfont icon-113', __self: this
								})
							) : undefined
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'row add-people', __self: this
						},
						_react2.default.createElement(
							'h4',
							{
								__self: this
							},
							'知会人',
							_react2.default.createElement(
								'span',
								{
									__self: this
								},
								'(点击头像可删除)'
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'people-list', __self: this
							},
							this.state.informList.map(function (item, index) {
								return _react2.default.createElement(
									'div',
									{ className: 'item', key: index, onClick: _this7.delPeople2.bind(_this7, index), __self: _this7
									},
									_react2.default.createElement(_UserAvatar2.default, { item: item, errorCallback: function errorCallback() {
											_this7.setState({ authList: _this7.state.authList });
										}, __self: _this7
									}),
									_react2.default.createElement(
										'div',
										{ className: 'userName', __self: _this7
										},
										item.name
									)
								);
							}),
							_react2.default.createElement(
								'div',
								{ className: 'item', onClick: this.addUser2.bind(this), __self: this
								},
								_react2.default.createElement('i', { className: 'iconfont icon-113', __self: this
								})
							)
						)
					),
					_react2.default.createElement(
						'a',
						{ className: 'btn-submit', onClick: this.submit.bind(this), __self: this
						},
						'提交'
					),
					this.state.dialog ? this.renderDialog() : undefined
				);
			}
		}]);

		return Create;
	}(Component);

	exports.default = (0, _reactRouter.withRouter)(Create);

/***/ },

/***/ 258:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _CaigouDetail = __webpack_require__(259);

	var _CaigouDetail2 = _interopRequireDefault(_CaigouDetail);

	var _config = __webpack_require__(243);

	var _config2 = _interopRequireDefault(_config);

	var _alert = __webpack_require__(261);

	var _alert2 = _interopRequireDefault(_alert);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Component = _react2.default.Component;

	var Caigou = function (_Component) {
		_inherits(Caigou, _Component);

		function Caigou(props) {
			_classCallCheck(this, Caigou);

			var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(Caigou).call(this, props));

			_this2.state = { detail: [{ key: +new Date() }], caigouList: [], sumPrice: "0.00", expectPayDate: undefined, info: {} };
			return _this2;
		}

		_createClass(Caigou, [{
			key: 'getValues',
			value: function getValues() {
				var _this3 = this;

				var arr = [];
				this.state.detail.forEach(function (item, index) {
					var values = _this3.refs['caigouDetail' + item.key].getValues();
					console.log(values);
					arr.push(values);
				});
				return {
					applyResean: this.refs.applyResean.value,
					amount: (Number(this.state.sumPrice) || 0).toFixed(2),
					expectPayDate: this.state.expectPayDate,
					detailJArr: arr
				};
			}
		}, {
			key: 'AddRow',
			value: function AddRow() {
				this.state.detail.push({ key: +new Date() });
				this.setState({ detail: this.state.detail });
			}
		}, {
			key: 'del',
			value: function del(index) {
				var detail = this.state.detail;
				var newDetail = detail;
				newDetail.splice(index, 1);
				this.setState({ detail: newDetail });
			}
			/*reRender(){
	  	this.setState({detail:this.state.detail});
	  }*/

		}, {
			key: 'computeMoney',
			value: function computeMoney() {
				var _this4 = this;

				console.log(this.refs);
				var sumMoney = 0;
				this.state.detail.forEach(function (item, index) {
					var money = _this4.refs['caigouDetail' + item.key].getMoney();
					sumMoney += money;
				});
				this.setState({ sumPrice: (Number(sumMoney) || 0).toFixed(2) });
			}
		}, {
			key: 'validate',
			value: function validate() {
				var returnValue = true;
				if (_config2.default.trim(this.refs.applyResean.value) == "") {
					(0, _alert2.default)('请输入采购事由', this.props.stage);
					return false;
				}
				if (_config2.default.trim(this.state.expectPayDate) == "") {
					(0, _alert2.default)('请选择期望交付日期', this.props.stage);
					return false;
				}
				for (var i = 0, l = this.state.detail.length - 1; i <= l; i++) {
					var item = this.state.detail[i];
					var validate = this.refs['caigouDetail' + item.key].validate();
					if (validate.status == false) {
						returnValue = false;
						(0, _alert2.default)(validate.text, this.props.stage);
						break;
					}
				};
				return returnValue;
			}
		}, {
			key: 'setTime',
			value: function setTime() {
				var _this = this;
				_config2.default.native('setTime').then(function (res) {
					_this.setState({ expectPayDate: res.data });
				});
			}
			//bind

		}, {
			key: 'componentWillReceiveProps',
			value: function componentWillReceiveProps(nextProps) {
				/*console.log('prev',prevProps)
	   console.log('cur',this.props)*/
				if (nextProps.detail) {
					var customJObj = JSON.parse(nextProps.detail.customJObj) || {};
					console.log(customJObj);
					this.setState({ 'info': nextProps.detail, expectPayDate: customJObj.expectPayDate, detail: customJObj.detailJArr, sumPrice: customJObj.amount });
					//console.log(this.state.applyDetail)
				}
			}
		}, {
			key: 'change',
			value: function change(field, e) {
				var value = e.target.value;
				var info = this.state.info;
				info[field] = value;
				this.setState({ info: info });
			}
		}, {
			key: 'render',
			value: function render() {
				var _this5 = this;

				console.log(this.state.sumPrice);
				return _react2.default.createElement(
					'div',
					{
						__self: this
					},
					_react2.default.createElement(
						'div',
						{ className: 'txt-reason', __self: this
						},
						_react2.default.createElement('textarea', { ref: 'applyResean', onChange: this.change.bind(this, 'applyResean'), value: this.state.info.applyResean, maxLength: '60', placeholder: '请输入采购事由（必填）', __self: this
						})
					),
					_react2.default.createElement(
						'div',
						{ className: 'row', onClick: this.setTime.bind(this), __self: this
						},
						_react2.default.createElement(
							'span',
							{
								__self: this
							},
							'期望交付日期'
						),
						_react2.default.createElement(
							'span',
							{ className: 'expectPayDate', __self: this
							},
							!this.state.expectPayDate ? _react2.default.createElement(
								'i',
								{
									__self: this
								},
								'请选择（必填）'
							) : this.state.expectPayDate
						)
					),
					this.state.detail.map(function (item, index) {
						var indx = index + 1;
						return _react2.default.createElement(_CaigouDetail2.default, { detail: _this5.state.detail, ref: "caigouDetail" + item.key, index: indx, computeMoney: _this5.computeMoney.bind(_this5), item: item, key: item.key, k: item.key, del: _this5.del.bind(_this5, index), __self: _this5
						});
					}),
					this.state.detail.length < 10 ? _react2.default.createElement(
						'div',
						{ className: 'row add-row', onClick: this.AddRow.bind(this), __self: this
						},
						_react2.default.createElement('i', { className: 'iconfont icon-113', __self: this
						}),
						'添加采购明细'
					) : undefined,
					_react2.default.createElement(
						'div',
						{ className: 'row sum-price', __self: this
						},
						'总价（元）：',
						_react2.default.createElement(
							'span',
							{
								__self: this
							},
							this.state.sumPrice
						)
					)
				);
			}
		}]);

		return Caigou;
	}(Component);

	exports.default = Caigou;

/***/ },

/***/ 259:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _config = __webpack_require__(243);

	var _config2 = _interopRequireDefault(_config);

	var _Dialog = __webpack_require__(256);

	var _Dialog2 = _interopRequireDefault(_Dialog);

	var _confirm = __webpack_require__(260);

	var _confirm2 = _interopRequireDefault(_confirm);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Component = _react2.default.Component;

	var CaigouDetail = function (_Component) {
		_inherits(CaigouDetail, _Component);

		function CaigouDetail(props) {
			_classCallCheck(this, CaigouDetail);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(CaigouDetail).call(this, props));

			_this.text = [{ field: 'item', text: '名称' }, { field: 'spec', text: '规格' }, { field: 'unit', text: '单位' }, { field: 'price', text: '价格' }, { field: 'quantity', text: '数量' }];
			_this.state = { item: { price: '', quantity: '', spec: '', item: '', unit: '', dialog: 0 } };
			return _this;
		}

		_createClass(CaigouDetail, [{
			key: 'del',
			value: function del(index) {
				var _this2 = this;

				var hasValue = false;
				for (var key in this.state.item) {
					if (this.state.item[key] != "") {
						hasValue = true;
					}
				}
				if (hasValue) {
					(0, _confirm2.default)("确定删除采购明细（" + this.props.index + "）?", this, function () {
						_this2.props.del(_this2.props.index);
						_this2.props.computeMoney(_this2);
					});
				} else {
					this.props.del(this.props.index);
					this.props.computeMoney(this);
				}

				//this.props.reRender();
			}
		}, {
			key: 'componentWillMount',
			value: function componentWillMount() {
				console.log(this.props.item);
				this.setState({ item: Object.assign(this.state.item, this.props.item) });
			}
		}, {
			key: 'componentDidMount',
			value: function componentDidMount() {}
			//console.log("didMount")


			//bind
			/*componentWillReceiveProps( nextProps){
	  	
	  	if(nextProps.item){
	  		console.log(nextProps.item)
	  		this.setState({'item':nextProps.item});
	  		//console.log(this.state.applyDetail)
	  	}
	  }*/

		}, {
			key: 'change',
			value: function change(field, e) {
				var value = e.target.value;
				if (field == "price") {
					var regStr = /^[0-9]+(\.)?([0-9]{1,2})?$/;
					if (!regStr.test(value) && value != "") {
						this.state.item[field] = this.state.item[field];
					} else {
						this.state.item[field] = value;
					}
					this.setState({ item: this.state.item });
				} else if (field == "quantity") {
					//let regStr = /^\d+$/;
					var _regStr = /^[0-9]+(\.)?([0-9]{1,2})?$/;
					if (!_regStr.test(value) && value != "") {
						this.state.item[field] = this.state.item[field];
					} else {
						this.state.item[field] = value;
					}
					this.setState({ item: this.state.item });
				} else {
					this.state.item[field] = value;
					this.setState({ item: this.state.item });
				}
				this.props.computeMoney(this);
			}
		}, {
			key: 'getMoney',
			value: function getMoney() {
				var price = this.state.item.price || 0;
				var quantity = this.state.item.quantity || 0;
				return price * quantity;
			}
		}, {
			key: 'validate',
			value: function validate() {
				var returnValue = { status: true };
				for (var i = this.text.length - 1; i >= 0; i--) {
					var item = this.text[i];
					if (_config2.default.trim(this.state.item[item.field]).length == 0) {
						var indexstr = "";
						this.props.detail.length === 1 ? undefined : indexstr = "（" + this.props.index + "）";
						returnValue = { status: false, text: "请输入采购明细" + indexstr + "的" + item.text };
					}
				};
				return returnValue;
			}
		}, {
			key: 'getValues',
			value: function getValues() {
				var returnValues = {};
				Object.assign(returnValues, this.state.item);
				return returnValues;
			}
		}, {
			key: 'renderDialog',
			value: function renderDialog() {
				console.log(this.state.dialog);
				return _react2.default.createElement(_Dialog2.default, _extends({ stage: this }, this.state.dialog, {
					__self: this
				}));
			}
		}, {
			key: 'render',
			value: function render() {
				console.log('aaaaaaaaaaa', this.state.item.item);
				return _react2.default.createElement(
					'div',
					{
						__self: this
					},
					_react2.default.createElement(
						'div',
						{ className: 'detail', title: this.props.title, __self: this
						},
						_react2.default.createElement(
							'h3',
							{
								__self: this
							},
							'采购明细',
							this.props.detail.length > 1 ? "（" + this.props.index + "）" : undefined,
							' ',
							_react2.default.createElement(
								'a',
								{ onClick: this.del.bind(this), className: this.props.index > 1 ? "del" : "hide", __self: this
								},
								'删除'
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'formbox', __self: this
							},
							_react2.default.createElement(
								'div',
								{ className: 'rowinput', __self: this
								},
								'名称',
								_react2.default.createElement('input', { type: 'text', ref: 'item', maxLength: '60', value: this.state.item.item, onChange: this.change.bind(this, "item"), placeholder: '请输入（必填）', __self: this
								})
							),
							_react2.default.createElement(
								'div',
								{ className: 'rowinput', __self: this
								},
								'规格',
								_react2.default.createElement('input', { type: 'text', ref: 'spec', maxLength: '60', value: this.state.item.spec, onChange: this.change.bind(this, "spec"), placeholder: '请输入（必填）', __self: this
								})
							),
							_react2.default.createElement(
								'div',
								{ className: 'rowinput', __self: this
								},
								'单位',
								_react2.default.createElement('input', { type: 'text', ref: 'unit', maxLength: '60', value: this.state.item.unit, onChange: this.change.bind(this, "unit"), placeholder: '请输入（必填）', __self: this
								})
							),
							_react2.default.createElement(
								'div',
								{ className: 'rowinput', __self: this
								},
								'单价（元）',
								_react2.default.createElement('input', { type: 'text', ref: 'price', maxLength: '12', value: this.state.item.price, onChange: this.change.bind(this, "price"), placeholder: '请输入（必填）', __self: this
								})
							),
							_react2.default.createElement(
								'div',
								{ className: 'rowinput', __self: this
								},
								'数量',
								_react2.default.createElement('input', { type: 'text', ref: 'quantity', maxLength: '12', value: this.state.item.quantity, onChange: this.change.bind(this, "quantity"), placeholder: '请输入（必填）', __self: this
								})
							)
						)
					),
					this.state.dialog ? this.renderDialog() : undefined
				);
			}
		}]);

		return CaigouDetail;
	}(Component);

	exports.default = CaigouDetail;

/***/ },

/***/ 260:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = function (msg, stage, callback) {
		stage.setState({
			dialog: {
				show: true,
				mask: true,
				msg: _react2.default.createElement(
					"div",
					{
						__self: this
					},
					_react2.default.createElement(
						"h3",
						{
							__self: this
						},
						msg
					)
				),
				buttons: _react2.default.createElement(
					"div",
					{ className: "dialog-button", __self: this
					},
					_react2.default.createElement(
						"a",
						{ onClick: function onClick() {
								stage.setState({ dialog: 0 });
							}, __self: this
						},
						"取消"
					),
					_react2.default.createElement(
						"a",
						{ onClick: callback.bind(stage), __self: this
						},
						"确定"
					)
				),
				type: "confirm"
			}
		});
	};

/***/ },

/***/ 261:
/***/ function(module, exports) {

	"use strict";

	module.exports = function (msg, stage) {
		stage.setState({
			dialog: {
				show: true,
				msg: msg,
				type: "alert"
			}
		});
	};

/***/ },

/***/ 262:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _ExpenseDetail = __webpack_require__(263);

	var _ExpenseDetail2 = _interopRequireDefault(_ExpenseDetail);

	var _alert = __webpack_require__(261);

	var _alert2 = _interopRequireDefault(_alert);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Component = _react2.default.Component;

	var Expense = function (_Component) {
		_inherits(Expense, _Component);

		function Expense(props) {
			_classCallCheck(this, Expense);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Expense).call(this, props));

			_this.state = { detail: [{ key: +new Date() }], caigouList: [], sumPrice: "0.00", expectPayDate: undefined };
			return _this;
		}

		_createClass(Expense, [{
			key: 'getValues',
			value: function getValues() {
				var _this2 = this;

				var returnValue = { detailJArr: [] };
				var arr = [];
				this.state.detail.forEach(function (item, index) {
					var values = _this2.refs['caigouDetail' + index].getValues();
					console.log(values);
					arr.push(values);
				});
				returnValue.detailJArr = arr;
				returnValue.amount = (Number(this.state.sumPrice) || 0).toFixed(2);
				returnValue.applyResean = "报销金额：" + returnValue.amount + "元";
				return returnValue;
			}
		}, {
			key: 'AddRow',
			value: function AddRow() {
				this.state.detail.push({ key: +new Date() });
				this.setState({ detail: this.state.detail });
			}
		}, {
			key: 'del',
			value: function del(index) {
				var detail = this.state.detail;
				var newDetail = detail;
				newDetail.splice(index, 1);
				this.setState({ detail: newDetail });
			}
			/*reRender(){
	  	this.setState({detail:this.state.detail});
	  }*/

		}, {
			key: 'computeMoney',
			value: function computeMoney() {
				var _this3 = this;

				setTimeout(function () {
					console.log(_this3.refs);
					var sumMoney = 0;
					_this3.state.detail.forEach(function (item, index) {
						var money = _this3.refs['caigouDetail' + index].getMoney();
						sumMoney += money;
					});
					_this3.setState({ sumPrice: sumMoney.toFixed(2) });
				}, 250);
			}
		}, {
			key: 'validate',
			value: function validate() {
				var returnValue = true;
				for (var i = 0, l = this.state.detail.length - 1; i <= l; i++) {
					var item = this.state.detail[i];
					var validate = this.refs['caigouDetail' + i].validate();
					if (validate.status == false) {
						returnValue = false;
						(0, _alert2.default)(validate.text, this.props.stage);
						break;
					}
				};
				return returnValue;
			}

			//bind

		}, {
			key: 'componentWillReceiveProps',
			value: function componentWillReceiveProps(nextProps) {
				/*console.log('prev',prevProps)
	   console.log('cur',this.props)*/
				if (nextProps.detail) {
					var customJObj = JSON.parse(nextProps.detail.customJObj) || {};
					console.log(customJObj);
					this.setState({ detail: customJObj.detailJArr, sumPrice: customJObj.amount });
					//console.log(this.state.applyDetail)
				}
			}
		}, {
			key: 'setTime',
			value: function setTime() {
				var _this4 = this;

				Config.native('setTime').then(function (res) {
					console.log(res.data);
					_this4.setState({ expectPayDate: res.data });
				});
			}
		}, {
			key: 'render',
			value: function render() {
				var _this5 = this;

				return _react2.default.createElement(
					'div',
					{
						__self: this
					},
					this.state.detail.map(function (item, index) {
						var indx = index + 1;
						return _react2.default.createElement(_ExpenseDetail2.default, { detail: _this5.state.detail, ref: "caigouDetail" + index, index: indx, computeMoney: _this5.computeMoney.bind(_this5), item: item, key: item.key, del: _this5.del.bind(_this5, index), __self: _this5
						});
					}),
					this.state.detail.length < 10 ? _react2.default.createElement(
						'div',
						{ className: 'row add-row', onClick: this.AddRow.bind(this), __self: this
						},
						_react2.default.createElement('i', { className: 'iconfont icon-113', __self: this
						}),
						'添加报销明细'
					) : undefined,
					_react2.default.createElement(
						'div',
						{ className: 'row sum-price', __self: this
						},
						'总价（元）：',
						_react2.default.createElement(
							'span',
							{
								__self: this
							},
							this.state.sumPrice
						)
					)
				);
			}
		}]);

		return Expense;
	}(Component);

	exports.default = Expense;

/***/ },

/***/ 263:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _config = __webpack_require__(243);

	var _config2 = _interopRequireDefault(_config);

	var _Dialog = __webpack_require__(256);

	var _Dialog2 = _interopRequireDefault(_Dialog);

	var _alert = __webpack_require__(261);

	var _alert2 = _interopRequireDefault(_alert);

	var _confirm = __webpack_require__(260);

	var _confirm2 = _interopRequireDefault(_confirm);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Component = _react2.default.Component;

	var ExpenseDetail = function (_Component) {
		_inherits(ExpenseDetail, _Component);

		function ExpenseDetail(props) {
			_classCallCheck(this, ExpenseDetail);

			var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(ExpenseDetail).call(this, props));

			_this2.imgList = [];
			_this2.typeArr = _config2.default.expenseType;
			_this2.text = [{ field: 'money', text: '价格' }];
			_this2.state = { type: 0, imgList: [], showUpload: true, item: { money: '', type: 0, remark: '', photoJArr: '' }, dialog: 0 };
			return _this2;
		}

		_createClass(ExpenseDetail, [{
			key: 'del',
			value: function del(index) {
				var _this3 = this;

				var hasValue = false;
				for (var key in this.state.item) {
					if (this.state.item[key] != "") {
						hasValue = true;
					}
				}
				if (hasValue) {
					(0, _confirm2.default)("确定删除报销明细（" + this.props.index + "）?", this, function () {
						_this3.props.del(_this3.props.index);
						_this3.props.computeMoney(_this3);
					});
				} else {
					this.props.del(this.props.index);
					this.props.computeMoney(this);
				}

				//this.props.reRender();
			}
		}, {
			key: 'componentWillMount',
			value: function componentWillMount() {
				console.log(this.props.item);
				this.setState({ item: Object.assign(this.state.item, this.props.item), imgList: (this.props.item.photoJArr || []).map(function (item) {
						return { uploaded: true, data: item };
					}),
					type: this.props.item.type || 0 });
			}
		}, {
			key: 'change',
			value: function change(field, e) {
				var value = e.target.value;
				if (field == "money") {
					var regStr = /^[0-9]+(\.)?([0-9]{1,2})?$/;
					if (!regStr.test(value) && value != "") {
						this.state.item[field] = this.state.item[field];
					} else {
						this.state.item[field] = value;
					}
					this.setState({ item: this.state.item });
				} else {
					this.state.item[field] = value;
					this.setState({ item: this.state.item });
				}
				this.props.computeMoney(this);
			}
		}, {
			key: 'getMoney',
			value: function getMoney() {
				return Number(this.state.item.money);
			}
		}, {
			key: 'validate',
			value: function validate() {
				var returnValue = { status: true };
				for (var i = this.text.length - 1; i >= 0; i--) {
					var item = this.text[i];
					if (_config2.default.trim(this.state.item[item.field]).length == 0) {
						var indexstr = "";
						this.props.detail.length === 1 ? undefined : indexstr = "（" + this.props.index + "）";
						returnValue = { status: false, text: "请输入报销明细" + indexstr + "的" + item.text };
					}
				};
				return returnValue;
			}
			//选择图片

		}, {
			key: 'selectPictrues',
			value: function selectPictrues() {
				if (!this.state.showUpload || this.state.imgList.length >= 4) {
					(0, _alert2.default)('最多只能选择4张哦！', this);
					return false;
				}
				var _this = this;
				_config2.default.native('selectPictures', { count: this.state.imgList.length, sum: 4 }).then(function (res) {
					if (res.code == 200) {
						var data = res.data.map(function (item) {
							return { data: "data:image/png;base64," + item, uploaded: false };
						});
						data = _this.state.imgList.concat(data);
						console.log(data);
						_this.setState({ "imgList": data });
						if (data.length >= 4) {
							_this.setState({ showUpload: false });
						}
						_this.upload();
					}
				});
			}
		}, {
			key: 'delImg',
			value: function delImg(item, index) {
				this.state.imgList.splice(index, 1);
				this.setState({ imgList: this.state.imgList, showUpload: true });
				this.imgList.splice(index, 1);
			}
			//上传

		}, {
			key: 'upload',
			value: function upload() {
				var _this = this;
				this.state.imgList.forEach(function (item, index) {
					if (!item.uploaded && !item.uploading) {
						var param = {
							flag: index.toString(),
							Base64Stream: item.data.substr(21)
						};
						item.uploading = true;
						_config2.default.ajax('upload', {
							/*headers: {
	      	'Accept': 'application/json',
	      	'Content-Type': 'application/json'
	      },*/
							method: 'POST',
							body: JSON.stringify(param)
						}).then(function (res) {
							console.log(res);
							if (res.code == 200 || res.status == 200) {
								(function () {
									var data = res.result;
									var i = data.flag;
									var arr = _this.state.imgList.map(function (item, index) {
										if (index == i) {
											item.uploaded = true;
										}
										return item;
									});
									_this.setState({
										"imgList": arr
									});
									_this.imgList.push(data.photo_url);
								})();
							}
						});
					}
				});
			}
		}, {
			key: 'selectType',
			value: function selectType(type) {
				this.setState({ type: type });
			}
		}, {
			key: 'getValues',
			value: function getValues() {
				var returnValues = {};
				Object.assign(returnValues, this.state.item, { photoJArr: this.imgList }, { type: this.state.type });
				return returnValues;
			}
		}, {
			key: 'renderDialog',
			value: function renderDialog() {
				console.log(this.state.dialog);
				return _react2.default.createElement(_Dialog2.default, _extends({ stage: this }, this.state.dialog, {
					__self: this
				}));
			}
		}, {
			key: 'render',
			value: function render() {
				var _this4 = this;

				return _react2.default.createElement(
					'div',
					{
						__self: this
					},
					_react2.default.createElement(
						'div',
						{ className: 'detail', title: this.props.title, __self: this
						},
						_react2.default.createElement(
							'h3',
							{
								__self: this
							},
							'报销明细',
							this.props.detail.length > 1 ? "（" + this.props.index + "）" : undefined,
							' ',
							_react2.default.createElement(
								'a',
								{ onClick: this.del.bind(this), className: this.props.index > 1 ? "del" : "hide", __self: this
								},
								'删除'
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'formbox', __self: this
							},
							_react2.default.createElement(
								'div',
								{ className: 'rowinput', __self: this
								},
								'报销类型',
								_react2.default.createElement(
									'div',
									{ className: 'type-list', __self: this
									},
									this.typeArr.map(function (item, index) {
										return _react2.default.createElement(
											'a',
											{ onClick: _this4.selectType.bind(_this4, index), className: _this4.state.type == index ? "focus" : undefined, __self: _this4
											},
											item
										);
									})
								)
							),
							_react2.default.createElement(
								'div',
								{ className: 'rowinput', __self: this
								},
								'金额（元）',
								_react2.default.createElement('input', { type: 'text', ref: 'price', maxLength: '12', value: this.state.item.money, onChange: this.change.bind(this, "money"), placeholder: '请输入（必填）', __self: this
								})
							),
							_react2.default.createElement(
								'div',
								{ className: 'row add-photo rowinput', __self: this
								},
								_react2.default.createElement(
									'h4',
									{ onClick: this.selectPictrues.bind(this), __self: this
									},
									'照片',
									_react2.default.createElement(
										'span',
										{
											__self: this
										},
										'(最多可添加4张)'
									),
									_react2.default.createElement('i', { className: 'iconfont icon-qiandaotianjiazhaopian', __self: this
									})
								),
								_react2.default.createElement(
									'div',
									{ className: 'upload-list', __self: this
									},
									this.state.imgList.map(function (item, index) {
										console.log(item.uploaded);
										return _react2.default.createElement(
											'div',
											{ key: index, className: 'item', __self: _this4
											},
											!item.uploaded ? _react2.default.createElement(
												'span',
												{ className: 'uploading', __self: _this4
												},
												'上传中...'
											) : _react2.default.createElement('i', { onClick: _this4.delImg.bind(_this4, item, index), className: 'del iconfont icon-103', __self: _this4
											}),
											_react2.default.createElement('img', { src: item.data, __self: _this4
											})
										);
									})
								)
							),
							_react2.default.createElement(
								'div',
								{ className: 'txt-reason rowinput', __self: this
								},
								_react2.default.createElement('textarea', { ref: 'applyResean', value: this.state.item.remark, onChange: this.change.bind(this, "remark"), maxLength: '140', placeholder: '备注（非必填）', __self: this
								})
							)
						)
					),
					this.state.dialog ? this.renderDialog() : undefined
				);
			}
		}]);

		return ExpenseDetail;
	}(Component);

	exports.default = ExpenseDetail;

/***/ },

/***/ 264:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _alert = __webpack_require__(261);

	var _alert2 = _interopRequireDefault(_alert);

	var _config = __webpack_require__(243);

	var _config2 = _interopRequireDefault(_config);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*通用*/


	var Component = _react2.default.Component;

	var Generic = function (_Component) {
		_inherits(Generic, _Component);

		function Generic(props) {
			_classCallCheck(this, Generic);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Generic).call(this, props));

			_this.state = { customJObj: {} };
			_this.props.detail = Object.assign({ customJObj: "{}" }, _this.props.detail);
			console.log('constructor');
			return _this;
		}

		_createClass(Generic, [{
			key: 'getValues',
			value: function getValues() {
				return {
					applyDetail: this.refs.applyDetail.value,
					applyResean: this.refs.applyResean.value
				};
			}
		}, {
			key: 'componentDidMount',
			value: function componentDidMount() {
				console.log('did');
			}
		}, {
			key: 'change',
			value: function change(field, e) {
				var value = e.target.value;
				var customJObj = this.state.customJObj;
				customJObj[field] = value;
				this.setState({ customJObj: customJObj });
			}
		}, {
			key: 'validate',
			value: function validate() {
				if (_config2.default.trim(this.refs.applyDetail.value) == "") {
					(0, _alert2.default)('请输入申请内容', this.props.stage);
					return false;
				}
				if (_config2.default.trim(this.refs.applyResean.value) == "") {
					(0, _alert2.default)('请输入申请详情', this.props.stage);
					return false;
				}
				return true;
			}
		}, {
			key: 'componentWillReceiveProps',
			value: function componentWillReceiveProps(nextProps) {
				/*console.log('prev',prevProps)
	   console.log('cur',this.props)*/
				if (nextProps.detail) {
					var customJObj = JSON.parse(nextProps.detail.customJObj) || {};
					this.setState({ 'customJObj': customJObj });
					//console.log(this.state.applyDetail)
				}
			}
		}, {
			key: 'render',
			value: function render() {
				console.log(this.state.customJObj);
				return _react2.default.createElement(
					'div',
					{
						__self: this
					},
					_react2.default.createElement(
						'div',
						{ className: 'row applyDetail', __self: this
						},
						_react2.default.createElement(
							'span',
							{
								__self: this
							},
							'申请内容'
						),
						_react2.default.createElement('input', { type: 'text', value: this.state.customJObj.applyDetail, onChange: this.change.bind(this, 'applyDetail'), ref: 'applyDetail', maxLength: '60', placeholder: '请输入（必填）', __self: this
						})
					),
					_react2.default.createElement(
						'div',
						{ className: 'txt-reason', __self: this
						},
						_react2.default.createElement('textarea', { ref: 'applyResean', value: this.state.customJObj.applyResean, onChange: this.change.bind(this, 'applyResean'), maxLength: '60', placeholder: '请输入申请详情（必填）', __self: this
						})
					)
				);
			}
		}]);

		return Generic;
	}(Component);

	exports.default = Generic;

/***/ },

/***/ 265:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Component = _react2.default.Component;

	var UserAvatar = function (_Component) {
		_inherits(UserAvatar, _Component);

		function UserAvatar(props) {
			_classCallCheck(this, UserAvatar);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(UserAvatar).call(this, props));

			console.log(_this.props.item.userName);
			_this.state = { error: false };
			return _this;
		}

		_createClass(UserAvatar, [{
			key: 'errorImg',
			value: function errorImg(item, e) {
				//console.log(e)
				var avatarColors = ['#f17474', '#7ac47a', '#efbc6b', '#75a4d7', '#45b2e3'];
				var color = avatarColors[item.uid % 5];
				//alert(item.uid+'头像error:::'+color)
				/*  item.error=true;
	     item.color= color;*/
				//this.setState({userInfo:this.state.userInfo});
				//this.props.errorCallback&&this.props.errorCallback.call(this,item);
				//this.setState({item:this.state.item});
				this.setState({ color: color, error: true });
			}
		}, {
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					'span',
					{
						__self: this
					},
					!this.state.error ? _react2.default.createElement('img', { onError: this.errorImg.bind(this, this.props.item), src: "http://n1.store.uban360.com:7188/sfs/avatar?uid=" + this.props.item.uid, __self: this
					}) : _react2.default.createElement(
						'div',
						{ className: 'img', style: { backgroundColor: this.state.color }, __self: this
						},
						(this.props.item.name || "").slice(-2)
					)
				);
			}
		}]);

		return UserAvatar;
	}(Component);

	exports.default = UserAvatar;

/***/ },

/***/ 266:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _config = __webpack_require__(243);

	var _config2 = _interopRequireDefault(_config);

	var _alert = __webpack_require__(261);

	var _alert2 = _interopRequireDefault(_alert);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //请假


	var Component = _react2.default.Component;

	var Leave = function (_Component) {
		_inherits(Leave, _Component);

		function Leave(props) {
			_classCallCheck(this, Leave);

			var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(Leave).call(this, props));

			_this2.state = { applyResean: '', type: 0 };
			_this2.typeArr = _config2.default.leaveType;
			return _this2;
		}

		//bind


		_createClass(Leave, [{
			key: 'componentWillReceiveProps',
			value: function componentWillReceiveProps(nextProps) {
				/*console.log('prev',prevProps)
	   console.log('cur',this.props)*/
				if (nextProps.detail) {
					var customJObj = JSON.parse(nextProps.detail.customJObj) || {};
					console.log(customJObj);
					this.setState({ 'applyResean': nextProps.detail.applyResean,
						type: nextProps.detail.leaveType || 0,
						beginDate: nextProps.detail.beginDate,
						endDate: nextProps.detail.endDate
					});
					//console.log(this.state.applyDetail)
				}
			}
		}, {
			key: 'getValues',
			value: function getValues() {
				return {
					beginDate: this.state.beginDate,
					endDate: this.state.endDate,
					applyResean: this.refs.applyResean.value,
					leaveType: this.state.type
				};
			}
		}, {
			key: 'validate',
			value: function validate() {
				if (_config2.default.trim(this.refs.applyResean.value) == "") {
					(0, _alert2.default)('请输入请假事由', this.props.stage);
					return false;
				}
				if (_config2.default.trim(this.state.beginDate) == "") {
					(0, _alert2.default)('请选择开始时间', this.props.stage);
					return false;
				}
				if (_config2.default.trim(this.state.endDate) == "") {
					(0, _alert2.default)('请选择结束时间', this.props.stage);
					return false;
				}
				return true;
			}
		}, {
			key: 'selectType',
			value: function selectType(type) {
				this.setState({ type: type });
			}
		}, {
			key: 'change',
			value: function change(field, e) {
				var value = e.target.value;
				this.setState({ applyResean: value });
			}
		}, {
			key: 'setTime',
			value: function setTime(type) {
				var _this3 = this;

				var _this = this;
				_config2.default.native('setTime').then(function (res) {
					try {
						if (type === 1) {
							if (+new Date(res.data.replace(/\-/g, '/')) <= +new Date((_this3.state.beginDate || '').replace(/\-/g, '/'))) {
								(0, _alert2.default)('结束时间必须大于开始时间', _this3.props.stage);
							} else {
								_this.setState({ endDate: res.data });
							}
						} else {
							if (+new Date(res.data.replace(/\-/g, '/')) >= +new Date((_this3.state.endDate || '').replace(/\-/g, '/'))) {
								(0, _alert2.default)('结束时间必须大于开始时间', _this3.props.stage);
							} else {
								_this.setState({ beginDate: res.data });
							}
						}
						_this.props.renderProcess(_this3.state.beginDate, _this3.state.endDate);
					} catch (e) {}
				});
			}
		}, {
			key: 'render',
			value: function render() {
				var _this4 = this;

				console.log(this.state.beginDate);
				return _react2.default.createElement(
					'div',
					{ className: 'detail', __self: this
					},
					_react2.default.createElement(
						'div',
						{ className: 'txt-reason', __self: this
						},
						_react2.default.createElement('textarea', { ref: 'applyResean', value: this.state.applyResean, onChange: this.change.bind(this, 'applyResean'), maxLength: '60', placeholder: '请输入请假事由（必填）', __self: this
						})
					),
					_react2.default.createElement(
						'div',
						{ className: 'formbox', __self: this
						},
						_react2.default.createElement(
							'div',
							{ className: 'rowinput', __self: this
							},
							'请假类型',
							_react2.default.createElement(
								'div',
								{ className: 'type-list', __self: this
								},
								this.typeArr.map(function (item, index) {
									return _react2.default.createElement(
										'a',
										{ onClick: _this4.selectType.bind(_this4, index), className: _this4.state.type == index ? "focus" : undefined, __self: _this4
										},
										item
									);
								})
							)
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'formbox', __self: this
						},
						_react2.default.createElement(
							'div',
							{ className: 'rowinput row', onClick: this.setTime.bind(this, 0), __self: this
							},
							'开始时间',
							_react2.default.createElement(
								'span',
								{ className: 'expectPayDate', __self: this
								},
								!this.state.beginDate ? _react2.default.createElement(
									'i',
									{
										__self: this
									},
									'请选择（必填）'
								) : this.state.beginDate
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'rowinput row', onClick: this.setTime.bind(this, 1), __self: this
							},
							'结束时间',
							_react2.default.createElement(
								'span',
								{ className: 'expectPayDate', __self: this
								},
								!this.state.endDate ? _react2.default.createElement(
									'i',
									{
										__self: this
									},
									'请选择（必填）'
								) : this.state.endDate
							)
						)
					)
				);
			}
		}]);

		return Leave;
	}(Component);

	exports.default = Leave;

/***/ },

/***/ 267:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _config = __webpack_require__(243);

	var _config2 = _interopRequireDefault(_config);

	var _alert = __webpack_require__(261);

	var _alert2 = _interopRequireDefault(_alert);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Component = _react2.default.Component;

	var Off = function (_Component) {
		_inherits(Off, _Component);

		function Off(props) {
			_classCallCheck(this, Off);

			var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(Off).call(this, props));

			_this2.state = { applyResean: '', type: 0 };
			return _this2;
		}

		_createClass(Off, [{
			key: 'componentWillMount',
			value: function componentWillMount() {
				if (localStorage.getItem('applyResean')) {
					this.setState({ 'applyResean': localStorage.getItem('applyResean') });
					localStorage.removeItem('applyResean');
				}
			}
			//bind

		}, {
			key: 'componentWillReceiveProps',
			value: function componentWillReceiveProps(nextProps) {
				/*console.log('prev',prevProps)
	   console.log('cur',this.props)*/
				console.log(111);
				if (nextProps.detail) {
					//let customJObj =JSON.parse(nextProps.detail.customJObj)||{};
					//console.log(customJObj)
					this.setState({ 'applyResean': nextProps.detail.applyResean,
						type: nextProps.detail.leaveType || 0,
						beginDate: nextProps.detail.beginDate,
						endDate: nextProps.detail.endDate,
						beginOvertime: nextProps.detail.beginOverTime || nextProps.detail.beginOvertime,
						endOvertime: nextProps.detail.endOverTime || nextProps.detail.endOvertime
					});
					//console.log(this.state.applyDetail)
				}
			}
		}, {
			key: 'getValues',
			value: function getValues() {
				return {
					beginDate: this.state.beginDate,
					endDate: this.state.endDate,
					beginOvertime: this.state.beginOvertime,
					endOvertime: this.state.endOvertime,
					applyResean: this.refs.applyResean.value
				};
			}
		}, {
			key: 'validate',
			value: function validate() {
				if (_config2.default.trim(this.refs.applyResean.value) == "") {
					(0, _alert2.default)('请输入调休事由', this.props.stage);
					return false;
				}
				if (_config2.default.trim(this.state.beginOvertime) == "") {
					(0, _alert2.default)('请选择加班开始时间', this.props.stage);
					return false;
				}
				if (_config2.default.trim(this.state.endOvertime) == "") {
					(0, _alert2.default)('请选择加班结束时间', this.props.stage);
					return false;
				}
				if (_config2.default.trim(this.state.beginDate) == "") {
					(0, _alert2.default)('请选择调休开始时间', this.props.stage);
					return false;
				}
				if (_config2.default.trim(this.state.endDate) == "") {
					(0, _alert2.default)('请选择调休结束时间', this.props.stage);
					return false;
				}
				return true;
			}
		}, {
			key: 'selectType',
			value: function selectType(type) {
				this.setState({ type: type });
			}
		}, {
			key: 'change',
			value: function change(field, e) {
				var value = e.target.value;
				this.setState({ applyResean: value });
			}
		}, {
			key: 'setTime',
			value: function setTime(type) {
				var _this3 = this;

				var _this = this;
				_config2.default.native('setTime').then(function (res) {
					try {
						if (type === 1) {
							if (+new Date(res.data.replace(/\-/g, '/')) <= +new Date((_this3.state.beginDate || '').replace(/\-/g, '/'))) {
								(0, _alert2.default)('调休结束时间必须大于开始时间', _this3.props.stage);
							} else {
								_this.setState({ endDate: res.data });
							}
						} else if (type == 0) {
							if (+new Date(res.data.replace(/\-/g, '/')) >= +new Date((_this3.state.endDate || '').replace(/\-/g, '/'))) {
								(0, _alert2.default)('调休结束时间必须大于开始时间', _this3.props.stage);
							} else {
								_this.setState({ beginDate: res.data });
							}
						} else if (type === 2) {
							if (+new Date(res.data.replace(/\-/g, '/')) >= +new Date((_this3.state.endOvertime || '').replace(/\-/g, '/'))) {
								(0, _alert2.default)('加班结束时间必须大于开始时间', _this3.props.stage);
							} else {
								_this.setState({ beginOvertime: res.data });
							}
						} else if (type === 3) {
							if (+new Date(res.data.replace(/\-/g, '/')) <= +new Date((_this3.state.beginOvertime || '').replace(/\-/g, '/'))) {
								(0, _alert2.default)('加班结束时间必须大于开始时间', _this3.props.stage);
							} else {
								_this.setState({ endOvertime: res.data });
							}
						}
						_this.props.renderProcess(_this3.state.beginDate, _this3.state.endDate, _this3.state.beginOvertime, _this3.state.endOvertime);
					} catch (e) {}
				});
			}
		}, {
			key: 'bindData',
			value: function bindData() {
				//this.props.bindData();
				localStorage.setItem('applyResean', this.state.applyResean);
				location.href = signRecord + '?orgId=' + localStorage.getItem('orgId') + '#/record';
			}
		}, {
			key: 'render',
			value: function render() {
				console.log(this.props.detail);
				return _react2.default.createElement(
					'div',
					{ className: 'detail', __self: this
					},
					_react2.default.createElement(
						'div',
						{ className: 'txt-reason', __self: this
						},
						_react2.default.createElement('textarea', { ref: 'applyResean', value: this.state.applyResean, onChange: this.change.bind(this, 'applyResean'), maxLength: '60', placeholder: '请输入调休事由（必填）', __self: this
						})
					),
					_react2.default.createElement(
						'h3',
						{
							__self: this
						},
						'加班时间',
						_react2.default.createElement(
							'a',
							{ onClick: this.bindData.bind(this), __self: this
							},
							'查看考勤记录'
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'formbox', __self: this
						},
						_react2.default.createElement(
							'div',
							{ className: 'rowinput row', onClick: this.setTime.bind(this, 2), __self: this
							},
							'开始时间',
							_react2.default.createElement(
								'span',
								{ className: 'expectPayDate', __self: this
								},
								!this.state.beginOvertime ? _react2.default.createElement(
									'i',
									{
										__self: this
									},
									'请选择（必填）'
								) : this.state.beginOvertime
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'rowinput row', onClick: this.setTime.bind(this, 3), __self: this
							},
							'结束时间',
							_react2.default.createElement(
								'span',
								{ className: 'expectPayDate', __self: this
								},
								!this.state.endOvertime ? _react2.default.createElement(
									'i',
									{
										__self: this
									},
									'请选择（必填）'
								) : this.state.endOvertime
							)
						)
					),
					_react2.default.createElement(
						'h3',
						{
							__self: this
						},
						'调休时间'
					),
					_react2.default.createElement(
						'div',
						{ className: 'formbox', __self: this
						},
						_react2.default.createElement(
							'div',
							{ className: 'rowinput row', onClick: this.setTime.bind(this, 0), __self: this
							},
							'开始时间',
							_react2.default.createElement(
								'span',
								{ className: 'expectPayDate', __self: this
								},
								!this.state.beginDate ? _react2.default.createElement(
									'i',
									{
										__self: this
									},
									'请选择（必填）'
								) : this.state.beginDate
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'rowinput row', onClick: this.setTime.bind(this, 1), __self: this
							},
							'结束时间',
							_react2.default.createElement(
								'span',
								{ className: 'expectPayDate', __self: this
								},
								!this.state.endDate ? _react2.default.createElement(
									'i',
									{
										__self: this
									},
									'请选择（必填）'
								) : this.state.endDate
							)
						)
					)
				);
			}
		}]);

		return Off;
	}(Component);

	exports.default = Off;

/***/ },

/***/ 268:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _config = __webpack_require__(243);

	var _config2 = _interopRequireDefault(_config);

	var _alert = __webpack_require__(261);

	var _alert2 = _interopRequireDefault(_alert);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Component = _react2.default.Component;

	var GoOut = function (_Component) {
		_inherits(GoOut, _Component);

		function GoOut(props) {
			_classCallCheck(this, GoOut);

			var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(GoOut).call(this, props));

			_this2.state = { applyResean: '', type: 2 };
			_this2.typeArr = _config2.default.goOUtType;
			return _this2;
		}

		//bind


		_createClass(GoOut, [{
			key: 'componentWillReceiveProps',
			value: function componentWillReceiveProps(nextProps) {
				/*console.log('prev',prevProps)
	   console.log('cur',this.props)*/
				if (nextProps.detail) {
					var customJObj = JSON.parse(nextProps.detail.customJObj) || {};
					console.log(customJObj);
					this.setState({ 'applyResean': nextProps.detail.applyResean,
						type: nextProps.detail.outType || 0,
						beginDate: nextProps.detail.beginDate,
						endDate: nextProps.detail.endDate
					});
					//console.log(this.state.applyDetail)
				}
			}
		}, {
			key: 'getValues',
			value: function getValues() {
				return {
					beginDate: this.state.beginDate,
					endDate: this.state.endDate,
					applyResean: this.refs.applyResean.value,
					outType: this.state.type
				};
			}
		}, {
			key: 'validate',
			value: function validate() {
				if (_config2.default.trim(this.refs.applyResean.value) == "") {
					(0, _alert2.default)('请输入外出事由', this.props.stage);
					return false;
				}
				if (_config2.default.trim(this.state.beginDate) == "") {
					(0, _alert2.default)('请选择开始时间', this.props.stage);
					return false;
				}
				if (_config2.default.trim(this.state.endDate) == "") {
					(0, _alert2.default)('请选择结束时间', this.props.stage);
					return false;
				}
				return true;
			}
		}, {
			key: 'selectType',
			value: function selectType(type) {
				this.setState({ type: type });
			}
		}, {
			key: 'change',
			value: function change(field, e) {
				var value = e.target.value;
				this.setState({ applyResean: value });
			}
		}, {
			key: 'setTime',
			value: function setTime(type) {
				var _this3 = this;

				var _this = this;
				_config2.default.native('setTime').then(function (res) {
					try {
						if (type === 1) {
							if (+new Date(res.data.replace(/\-/g, '/')) <= +new Date((_this3.state.beginDate || '').replace(/\-/g, '/'))) {
								(0, _alert2.default)('结束时间必须大于开始时间', _this3.props.stage);
							} else {
								_this.setState({ endDate: res.data });
							}
						} else if (type == 0) {
							if (+new Date(res.data.replace(/\-/g, '/')) >= +new Date((_this3.state.endDate || '').replace(/\-/g, '/'))) {
								(0, _alert2.default)('结束时间必须大于开始时间', _this3.props.stage);
							} else {
								_this.setState({ beginDate: res.data });
							}
						}
						_this.props.renderProcess(_this3.state.beginDate, _this3.state.endDate);
					} catch (e) {}
				});
			}
		}, {
			key: 'render',
			value: function render() {
				var _this4 = this;

				return _react2.default.createElement(
					'div',
					{ className: 'detail', __self: this
					},
					_react2.default.createElement(
						'div',
						{ className: 'txt-reason', __self: this
						},
						_react2.default.createElement('textarea', { ref: 'applyResean', value: this.state.applyResean, onChange: this.change.bind(this, 'applyResean'), maxLength: '60', placeholder: '请输入外出事由（必填）', __self: this
						}),
						_react2.default.createElement(
							'div',
							{ className: 'formbox', __self: this
							},
							_react2.default.createElement(
								'div',
								{ className: 'rowinput', __self: this
								},
								_react2.default.createElement(
									'div',
									{
										__self: this
									},
									'外出方式 ',
									_react2.default.createElement('span', { className: 'tips', __self: this
									})
								),
								_react2.default.createElement(
									'div',
									{ className: 'type-list', __self: this
									},
									this.typeArr.map(function (item, index) {
										return _react2.default.createElement(
											'a',
											{ onClick: _this4.selectType.bind(_this4, item.key), className: _this4.state.type == item.key ? "focus" : undefined, __self: _this4
											},
											item.name
										);
									})
								)
							)
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'formbox', __self: this
						},
						_react2.default.createElement(
							'div',
							{ className: 'rowinput row', onClick: this.setTime.bind(this, 0), __self: this
							},
							'开始时间',
							_react2.default.createElement(
								'span',
								{ className: 'expectPayDate', __self: this
								},
								!this.state.beginDate ? _react2.default.createElement(
									'i',
									{
										__self: this
									},
									'请选择（必填）'
								) : this.state.beginDate
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'rowinput row', onClick: this.setTime.bind(this, 1), __self: this
							},
							'结束时间',
							_react2.default.createElement(
								'span',
								{ className: 'expectPayDate', __self: this
								},
								!this.state.endDate ? _react2.default.createElement(
									'i',
									{
										__self: this
									},
									'请选择（必填）'
								) : this.state.endDate
							)
						)
					)
				);
			}
		}]);

		return GoOut;
	}(Component);

	exports.default = GoOut;

/***/ },

/***/ 269:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _config = __webpack_require__(243);

	var _config2 = _interopRequireDefault(_config);

	var _City = __webpack_require__(270);

	var _City2 = _interopRequireDefault(_City);

	var _alert = __webpack_require__(261);

	var _alert2 = _interopRequireDefault(_alert);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Component = _react2.default.Component;

	var Travel = function (_Component) {
		_inherits(Travel, _Component);

		function Travel(props) {
			_classCallCheck(this, Travel);

			var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(Travel).call(this, props));

			_this2.state = { applyResean: '', type: 0, travelCode: null, travelAddr: '', city: 0 };
			return _this2;
		}

		//bind


		_createClass(Travel, [{
			key: 'componentWillReceiveProps',
			value: function componentWillReceiveProps(nextProps) {
				/*console.log('prev',prevProps)
	   console.log('cur',this.props)*/
				if (nextProps.detail) {
					var customJObj = JSON.parse(nextProps.detail.customJObj) || {};
					console.log(customJObj);
					this.setState({ 'applyResean': nextProps.detail.applyResean, city: 0,
						type: nextProps.detail.goOUtType || 0,
						beginDate: nextProps.detail.beginDate,
						endDate: nextProps.detail.endDate,
						travelAddr: nextProps.detail.travelAddr
					});
					//console.log(this.state.applyDetail)
				}
			}
		}, {
			key: 'getValues',
			value: function getValues() {
				return {
					beginDate: this.state.beginDate,
					endDate: this.state.endDate,
					applyResean: this.refs.applyResean.value,
					travelCode: this.state.travelCode,
					travelAddr: this.state.travelAddr
				};
			}
		}, {
			key: 'validate',
			value: function validate() {
				if (_config2.default.trim(this.refs.applyResean.value) == "") {
					(0, _alert2.default)('请输入出差事由', this.props.stage);
					return false;
				}
				if (_config2.default.trim(this.state.travelAddr) == "") {
					(0, _alert2.default)('请选择出差地点', this.props.stage);
					return false;
				}
				if (_config2.default.trim(this.state.beginDate) == "") {
					(0, _alert2.default)('请选择开始时间', this.props.stage);
					return false;
				}
				if (_config2.default.trim(this.state.endDate) == "") {
					(0, _alert2.default)('请选择结束时间', this.props.stage);
					return false;
				}
				return true;
			}
		}, {
			key: 'selectType',
			value: function selectType(type) {
				this.setState({ type: type });
			}
		}, {
			key: 'change',
			value: function change(field, e) {
				var value = e.target.value;
				this.setState({ applyResean: value });
			}
		}, {
			key: 'setTime',
			value: function setTime(type) {
				var _this3 = this;

				var _this = this;
				_config2.default.native('setTime').then(function (res) {
					try {
						if (type === 1) {
							if (+new Date(res.data.replace(/\-/g, '/')) <= +new Date((_this3.state.beginDate || '').replace(/\-/g, '/'))) {
								(0, _alert2.default)('结束时间必须大于开始时间', _this3.props.stage);
							} else {
								_this.setState({ endDate: res.data });
							}
						} else if (type == 0) {
							if (+new Date(res.data.replace(/\-/g, '/')) >= +new Date((_this3.state.endDate || '').replace(/\-/g, '/'))) {
								(0, _alert2.default)('结束时间必须大于开始时间', _this3.props.stage);
							} else {
								_this.setState({ beginDate: res.data });
							}
						}
						_this.props.renderProcess(_this3.state.beginDate, _this3.state.endDate);
					} catch (e) {}
				});
			}
		}, {
			key: 'setAddress',
			value: function setAddress() {
				this.setState({ 'city': 1 });
			}
		}, {
			key: 'selectArea',
			value: function selectArea(item) {
				this.setState({ travelAddr: item.name, travelCode: item.id, city: 0 });
			}
		}, {
			key: 'renderCity',
			value: function renderCity() {
				return _react2.default.createElement(_City2.default, { selectCallback: this.selectArea.bind(this), __self: this
				});
			}
		}, {
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					'div',
					{ className: 'detail', __self: this
					},
					_react2.default.createElement(
						'div',
						{ className: 'txt-reason', __self: this
						},
						_react2.default.createElement('textarea', { ref: 'applyResean', value: this.state.applyResean, onChange: this.change.bind(this, 'applyResean'), maxLength: '60', placeholder: '请输入出差事由（必填）', __self: this
						})
					),
					_react2.default.createElement(
						'div',
						{ className: 'formbox', __self: this
						},
						_react2.default.createElement(
							'div',
							{ className: 'rowinput row', onClick: this.setAddress.bind(this), __self: this
							},
							'出差地点',
							_react2.default.createElement(
								'span',
								{ className: 'expectPayDate', __self: this
								},
								!this.state.travelAddr ? _react2.default.createElement(
									'i',
									{
										__self: this
									},
									'请选择（必填）'
								) : this.state.travelAddr
							)
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'formbox', __self: this
						},
						_react2.default.createElement(
							'div',
							{ className: 'rowinput row', onClick: this.setTime.bind(this, 0), __self: this
							},
							'开始时间',
							_react2.default.createElement(
								'span',
								{ className: 'expectPayDate', __self: this
								},
								!this.state.beginDate ? _react2.default.createElement(
									'i',
									{
										__self: this
									},
									'请选择（必填）'
								) : this.state.beginDate
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'rowinput row', onClick: this.setTime.bind(this, 1), __self: this
							},
							'结束时间',
							_react2.default.createElement(
								'span',
								{ className: 'expectPayDate', __self: this
								},
								!this.state.endDate ? _react2.default.createElement(
									'i',
									{
										__self: this
									},
									'请选择（必填）'
								) : this.state.endDate
							)
						)
					),
					this.state.city ? this.renderCity() : undefined
				);
			}
		}]);

		return Travel;
	}(Component);

	exports.default = Travel;

/***/ },

/***/ 270:
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=__webpack_require__(2);var _react2=_interopRequireDefault(_react);var _config=__webpack_require__(243);var _config2=_interopRequireDefault(_config);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var Component=_react2.default.Component;var City=function(_Component){_inherits(City,_Component);function City(props){_classCallCheck(this,City);var _this=_possibleConstructorReturn(this,Object.getPrototypeOf(City).call(this,props));_this.cityArr1=[{"A":[{"id":210300,"name":"鞍山市"},{"id":152900,"name":"阿拉善盟"},{"id":340800,"name":"安庆市"},{"id":410500,"name":"安阳市"},{"id":542500,"name":"阿里地区"},{"id":610900,"name":"安康市"},{"id":520400,"name":"安顺市"},{"id":513200,"name":"阿坝藏族羌族自治州"},{"id":659002,"name":"阿拉尔市"},{"id":652900,"name":"阿克苏地区"},{"id":820100,"name":"澳门特别行政区"},{"id":654300,"name":"阿勒泰地区"}]},{"B":[{"id":220800,"name":"白城市"},{"id":150200,"name":"包头市"},{"id":150800,"name":"巴彦淖尔市"},{"id":130600,"name":"保定市"},{"id":210500,"name":"本溪市"},{"id":220600,"name":"白山市"},{"id":341600,"name":"亳州市"},{"id":340300,"name":"蚌埠市"},{"id":371600,"name":"滨州市"},{"id":620400,"name":"白银市"},{"id":610300,"name":"宝鸡市"},{"id":530500,"name":"保山市"},{"id":469030,"name":"白沙黎族自治县"},{"id":451000,"name":"百色市"},{"id":522401,"name":"毕节市"},{"id":450500,"name":"北海市"},{"id":511900,"name":"巴中市"},{"id":469035,"name":"保亭黎族苗族自治县"},{"id":652800,"name":"巴音郭楞蒙古自治州"},{"id":652700,"name":"博尔塔拉蒙古自治州"},{"id":110100,"name":"北京市"}]},{"C":[{"id":140400,"name":"长治市"},{"id":130900,"name":"沧州市"},{"id":320400,"name":"常州市"},{"id":330282,"name":"慈溪市"},{"id":320581,"name":"常熟市"},{"id":130800,"name":"承德市"},{"id":150400,"name":"赤峰市"},{"id":220100,"name":"长春市"},{"id":431000,"name":"郴州市"},{"id":430100,"name":"长沙市"},{"id":341100,"name":"滁州市"},{"id":430700,"name":"常德市"},{"id":341400,"name":"巢湖市"},{"id":341700,"name":"池州市"},{"id":469027,"name":"澄迈县"},{"id":451400,"name":"崇左市"},{"id":469031,"name":"昌江黎族自治县"},{"id":532300,"name":"楚雄彝族自治州"},{"id":445100,"name":"潮州市"},{"id":500100,"name":"重庆市"},{"id":510100,"name":"成都市"},{"id":542100,"name":"昌都地区"},{"id":652300,"name":"昌吉回族自治州"}]},{"D":[{"id":232700,"name":"大兴安岭地区"},{"id":140200,"name":"大同市"},{"id":230600,"name":"大庆市"},{"id":321181,"name":"丹阳市"},{"id":210200,"name":"大连市"},{"id":210600,"name":"丹东市"},{"id":370500,"name":"东营市"},{"id":371400,"name":"德州市"},{"id":511700,"name":"达州市"},{"id":532900,"name":"大理白族自治州"},{"id":469003,"name":"儋州市"},{"id":469025,"name":"定安县"},{"id":533400,"name":"迪庆藏族自治州"},{"id":510600,"name":"德阳市"},{"id":469007,"name":"东方市"},{"id":533100,"name":"德宏傣族景颇族自治州"},{"id":441900,"name":"东莞市"},{"id":621100,"name":"定西市"}]},{"E":[{"id":150600,"name":"鄂尔多斯市"},{"id":420700,"name":"鄂州市"},{"id":422800,"name":"恩施土家族苗族自治州"}]},{"F":[{"id":210900,"name":"阜新市"},{"id":210400,"name":"抚顺市"},{"id":350181,"name":"福清市"},{"id":341200,"name":"阜阳市"},{"id":370983,"name":"肥城市"},{"id":361000,"name":"抚州市"},{"id":350100,"name":"福州市"},{"id":440600,"name":"佛山市"},{"id":450600,"name":"防城港市"}]},{"G":[{"id":440100,"name":"广州市"},{"id":360700,"name":"赣州市"},{"id":510800,"name":"广元市"},{"id":511600,"name":"广安市"},{"id":450300,"name":"桂林市"},{"id":450800,"name":"贵港市"},{"id":520100,"name":"贵阳市"},{"id":513300,"name":"甘孜藏族自治州"},{"id":623000,"name":"甘南藏族自治州"},{"id":640400,"name":"固原市"},{"id":632600,"name":"果洛藏族自治州"}]},{"H":[{"id":231100,"name":"黑河市"},{"id":211400,"name":"葫芦岛市"},{"id":330481,"name":"海宁市"},{"id":320800,"name":"淮安市"},{"id":131100,"name":"衡水市"},{"id":150100,"name":"呼和浩特市"},{"id":330500,"name":"湖州市"},{"id":230400,"name":"鹤岗市"},{"id":150700,"name":"呼伦贝尔市"},{"id":230100,"name":"哈尔滨市"},{"id":130400,"name":"邯郸市"},{"id":330100,"name":"杭州市"},{"id":410600,"name":"鹤壁市"},{"id":371700,"name":"菏泽市"},{"id":420200,"name":"黄石市"},{"id":431200,"name":"怀化市"},{"id":340600,"name":"淮北市"},{"id":421100,"name":"黄冈市"},{"id":430400,"name":"衡阳市"},{"id":340100,"name":"合肥市"},{"id":340400,"name":"淮南市"},{"id":341000,"name":"黄山市"},{"id":451200,"name":"河池市"},{"id":460100,"name":"海口市"},{"id":441600,"name":"河源市"},{"id":532500,"name":"红河哈尼族彝族自治州"},{"id":441300,"name":"惠州市"},{"id":610700,"name":"汉中市"},{"id":451100,"name":"贺州市"},{"id":632800,"name":"海西蒙古族藏族自治州"},{"id":632100,"name":"海东市"},{"id":632300,"name":"黄南藏族自治州"},{"id":652200,"name":"哈密地区"},{"id":632200,"name":"海北藏族自治州"},{"id":653200,"name":"和田地区"},{"id":632500,"name":"海南藏族自治州"}]},{"J":[{"id":210700,"name":"锦州市"},{"id":330700,"name":"金华市"},{"id":140700,"name":"晋中市"},{"id":320281,"name":"江阴市"},{"id":220200,"name":"吉林市"},{"id":230800,"name":"佳木斯市"},{"id":230300,"name":"鸡西市"},{"id":330400,"name":"嘉兴市"},{"id":140500,"name":"晋城市"},{"id":350582,"name":"晋江市"},{"id":370282,"name":"即墨市"},{"id":360800,"name":"吉安市"},{"id":370100,"name":"济南市"},{"id":420800,"name":"荆门市"},{"id":410800,"name":"焦作市"},{"id":370800,"name":"济宁市"},{"id":410881,"name":"济源市"},{"id":421000,"name":"荆州市"},{"id":360400,"name":"九江市"},{"id":360200,"name":"景德镇市"},{"id":445200,"name":"揭阳市"},{"id":620300,"name":"金昌市"},{"id":440700,"name":"江门市"},{"id":620200,"name":"嘉峪关市"},{"id":620900,"name":"酒泉市"}]},{"K":[{"id":320583,"name":"昆山市"},{"id":410200,"name":"开封市"},{"id":530100,"name":"昆明市"},{"id":650200,"name":"克拉玛依市"},{"id":653000,"name":"克孜勒苏柯尔克孜自治州"},{"id":653100,"name":"喀什地区"}]},{"L":[{"id":141000,"name":"临汾市"},{"id":131000,"name":"廊坊市"},{"id":211000,"name":"辽阳市"},{"id":220400,"name":"辽源市"},{"id":141100,"name":"吕梁市"},{"id":320700,"name":"连云港市"},{"id":371200,"name":"莱芜市"},{"id":411100,"name":"漯河市"},{"id":331100,"name":"丽水市"},{"id":341500,"name":"六安市"},{"id":431300,"name":"娄底市"},{"id":350800,"name":"龙岩市"},{"id":370681,"name":"龙口市"},{"id":371300,"name":"临沂市"},{"id":410300,"name":"洛阳市"},{"id":371500,"name":"聊城市"},{"id":530700,"name":"丽江市"},{"id":451300,"name":"来宾市"},{"id":510500,"name":"泸州市"},{"id":530900,"name":"临沧市"},{"id":469033,"name":"乐东黎族自治县"},{"id":511100,"name":"乐山市"},{"id":620100,"name":"兰州市"},{"id":450200,"name":"柳州市"},{"id":513400,"name":"凉山彝族自治州"},{"id":469034,"name":"陵水黎族自治县"},{"id":542600,"name":"林芝地区"},{"id":469028,"name":"临高县"},{"id":540100,"name":"拉萨市"},{"id":520200,"name":"六盘水市"},{"id":621200,"name":"陇南市"},{"id":622900,"name":"临夏回族自治州"}]},{"M":[{"id":231000,"name":"牡丹江市"},{"id":340500,"name":"马鞍山市"},{"id":510700,"name":"绵阳市"},{"id":511400,"name":"眉山市"},{"id":440900,"name":"茂名市"},{"id":441400,"name":"梅州市"}]},{"N":[{"id":320100,"name":"南京市"},{"id":330200,"name":"宁波市"},{"id":320600,"name":"南通市"},{"id":360100,"name":"南昌市"},{"id":411300,"name":"南阳市"},{"id":350700,"name":"南平市"},{"id":350900,"name":"宁德市"},{"id":350583,"name":"南安市"},{"id":542400,"name":"那曲地区"},{"id":450100,"name":"南宁市"},{"id":511300,"name":"南充市"},{"id":511000,"name":"内江市"},{"id":533300,"name":"怒江傈僳族自治州"}]},{"P":[{"id":211100,"name":"盘锦市"},{"id":360300,"name":"萍乡市"},{"id":410400,"name":"平顶山市"},{"id":410900,"name":"濮阳市"},{"id":350300,"name":"莆田市"},{"id":510400,"name":"攀枝花市"},{"id":530800,"name":"普洱市"},{"id":620800,"name":"平凉市"}]},{"Q":[{"id":130300,"name":"秦皇岛市"},{"id":230200,"name":"齐齐哈尔市"},{"id":230900,"name":"七台河市"},{"id":350500,"name":"泉州市"},{"id":429005,"name":"潜江市"},{"id":370200,"name":"青岛市"},{"id":330800,"name":"衢州市"},{"id":441800,"name":"清远市"},{"id":522700,"name":"黔南布依族苗族自治州"},{"id":450700,"name":"钦州市"},{"id":530300,"name":"曲靖市"},{"id":522300,"name":"黔西南布依族苗族自治州"},{"id":621000,"name":"庆阳市"},{"id":522600,"name":"黔东南苗族侗族自治州"},{"id":469002,"name":"琼海市"},{"id":469036,"name":"琼中黎族苗族自治县"}]},{"R":[{"id":320682,"name":"如皋市"},{"id":371082,"name":"荣成市"},{"id":371100,"name":"日照市"},{"id":542301,"name":"日喀则市"}]},{"S":[{"id":220300,"name":"四平市"},{"id":231200,"name":"绥化市"},{"id":220700,"name":"松原市"},{"id":320500,"name":"苏州市"},{"id":310100,"name":"上海市"},{"id":321300,"name":"宿迁市"},{"id":330600,"name":"绍兴市"},{"id":140600,"name":"朔州市"},{"id":230500,"name":"双鸭山市"},{"id":210100,"name":"沈阳市"},{"id":330682,"name":"上虞市"},{"id":130100,"name":"石家庄市"},{"id":440500,"name":"汕头市"},{"id":350400,"name":"三明市"},{"id":429021,"name":"神农架林区"},{"id":361100,"name":"上饶市"},{"id":411400,"name":"商丘市"},{"id":421300,"name":"随州市"},{"id":341300,"name":"宿州市"},{"id":411200,"name":"三门峡市"},{"id":420300,"name":"十堰市"},{"id":440300,"name":"深圳市"},{"id":430500,"name":"邵阳市"},{"id":440200,"name":"韶关市"},{"id":441500,"name":"汕尾市"},{"id":510900,"name":"遂宁市"},{"id":611000,"name":"商洛市"},{"id":542200,"name":"山南地区"},{"id":460200,"name":"三亚市"},{"id":640200,"name":"石嘴山市"},{"id":659001,"name":"石河子市"}]},{"T":[{"id":140100,"name":"太原市"},{"id":211200,"name":"铁岭市"},{"id":220500,"name":"通化市"},{"id":130200,"name":"唐山市"},{"id":320585,"name":"太仓市"},{"id":120100,"name":"天津市"},{"id":321200,"name":"泰州市"},{"id":150500,"name":"通辽市"},{"id":331000,"name":"台州市"},{"id":370900,"name":"泰安市"},{"id":429006,"name":"天门市"},{"id":340700,"name":"铜陵市"},{"id":522201,"name":"铜仁市"},{"id":469026,"name":"屯昌县"},{"id":610200,"name":"铜川市"},{"id":620500,"name":"天水市"},{"id":654200,"name":"塔城地区"},{"id":659003,"name":"图木舒克市"},{"id":652100,"name":"吐鲁番地区"},{"id":710100,"name":"台湾"}]},{"W":[{"id":330300,"name":"温州市"},{"id":320200,"name":"无锡市"},{"id":150900,"name":"乌兰察布市"},{"id":150300,"name":"乌海市"},{"id":340200,"name":"芜湖市"},{"id":420100,"name":"武汉市"},{"id":370700,"name":"潍坊市"},{"id":371000,"name":"威海市"},{"id":469006,"name":"万宁市"},{"id":610500,"name":"渭南市"},{"id":469005,"name":"文昌市"},{"id":469001,"name":"五指山市"},{"id":620600,"name":"武威市"},{"id":450400,"name":"梧州市"},{"id":532600,"name":"文山壮族苗族自治州"},{"id":659004,"name":"五家渠市"},{"id":640300,"name":"吴忠市"},{"id":650100,"name":"乌鲁木齐市"}]},{"X":[{"id":140900,"name":"忻州市"},{"id":152500,"name":"锡林郭勒盟"},{"id":130500,"name":"邢台市"},{"id":152200,"name":"兴安盟"},{"id":320300,"name":"徐州市"},{"id":410700,"name":"新乡市"},{"id":420600,"name":"襄阳市"},{"id":360500,"name":"新余市"},{"id":411500,"name":"信阳市"},{"id":429004,"name":"仙桃市"},{"id":411000,"name":"许昌市"},{"id":430300,"name":"湘潭市"},{"id":350200,"name":"厦门市"},{"id":341800,"name":"宣城市"},{"id":420900,"name":"孝感市"},{"id":421200,"name":"咸宁市"},{"id":433100,"name":"湘西土家族苗族自治州"},{"id":610100,"name":"西安市"},{"id":610400,"name":"咸阳市"},{"id":532800,"name":"西双版纳傣族自治州"},{"id":630100,"name":"西宁市"},{"id":810100,"name":"香港特别行政区"}]},{"Y":[{"id":320282,"name":"宜兴市"},{"id":222400,"name":"延边朝鲜族自治州"},{"id":321000,"name":"扬州市"},{"id":140800,"name":"运城市"},{"id":320900,"name":"盐城市"},{"id":140300,"name":"阳泉市"},{"id":330281,"name":"余姚市"},{"id":230700,"name":"伊春市"},{"id":210800,"name":"营口市"},{"id":370600,"name":"烟台市"},{"id":420500,"name":"宜昌市"},{"id":430600,"name":"岳阳市"},{"id":360900,"name":"宜春市"},{"id":430900,"name":"益阳市"},{"id":330782,"name":"义乌市"},{"id":360600,"name":"鹰潭市"},{"id":431100,"name":"永州市"},{"id":450900,"name":"玉林市"},{"id":511800,"name":"雅安市"},{"id":530400,"name":"玉溪市"},{"id":441700,"name":"阳江市"},{"id":610800,"name":"榆林市"},{"id":511500,"name":"宜宾市"},{"id":445300,"name":"云浮市"},{"id":610600,"name":"延安市"},{"id":654000,"name":"伊犁哈萨克自治州"},{"id":640100,"name":"银川市"},{"id":632700,"name":"玉树藏族自治州"}]},{"Z":[{"id":130700,"name":"张家口市"},{"id":330681,"name":"诸暨市"},{"id":321100,"name":"镇江市"},{"id":320582,"name":"张家港市"},{"id":211300,"name":"朝阳市"},{"id":430800,"name":"张家界市"},{"id":410100,"name":"郑州市"},{"id":370400,"name":"枣庄市"},{"id":330900,"name":"舟山市"},{"id":440183,"name":"增城市"},{"id":440400,"name":"珠海市"},{"id":411600,"name":"周口市"},{"id":370300,"name":"淄博市"},{"id":430200,"name":"株洲市"},{"id":350600,"name":"漳州市"},{"id":411700,"name":"驻马店市"},{"id":440800,"name":"湛江市"},{"id":520300,"name":"遵义市"},{"id":510300,"name":"自贡市"},{"id":530600,"name":"昭通市"},{"id":441200,"name":"肇庆市"},{"id":442000,"name":"中山市"},{"id":620700,"name":"张掖市"},{"id":512000,"name":"资阳市"},{"id":640500,"name":"中卫市"}]}];_this.cityArr2=[{"A":[{"id":210300,"name":"阿富汗"},{"id":210300,"name":"阿比扬"},{"id":210300,"name":"阿伯茨福"},{"id":210300,"name":"阿伯丁"},{"id":210300,"name":"阿尔阿尔"},{"id":210300,"name":"阿尔巴尼亚"},{"id":210300,"name":"阿尔巴尤利亚"},{"id":210300,"name":"阿尔及尔"},{"id":210300,"name":"阿尔及利亚"},{"id":210300,"name":"阿尔卡累克"},{"id":210300,"name":"阿尔勒"},{"id":210300,"name":"阿尔梅勒"},{"id":210300,"name":"阿尔梅里亚"},{"id":210300,"name":"阿尔特温"},{"id":210300,"name":"阿尔瓦塞特"},{"id":210300,"name":"阿法尔"},{"id":210300,"name":"阿根廷"},{"id":210300,"name":"阿瓜斯卡连斯特"},{"id":210300,"name":"阿哈尔"},{"id":210300,"name":"阿吉隆"},{"id":210300,"name":"阿加德兹"},{"id":210300,"name":"阿卡普尔科"},{"id":210300,"name":"阿克托别"},{"id":210300,"name":"阿拉伯联合酋长国"},{"id":210300,"name":"阿拉瓜"},{"id":210300,"name":"阿拉胡埃拉"},{"id":210300,"name":"阿拉瓦"},{"id":210300,"name":"阿勒"},{"id":210300,"name":"阿黎博里"},{"id":210300,"name":"阿利图斯"},{"id":210300,"name":"阿鲁阿"},{"id":210300,"name":"阿鲁沙"},{"id":210300,"name":"阿伦敦"},{"id":210300,"name":"阿马库罗三角洲"},{"id":210300,"name":"阿曼拜"},{"id":210300,"name":"阿姆兰"},{"id":210300,"name":"阿涅比"},{"id":210300,"name":"阿努拉德普勒"},{"id":210300,"name":"阿珀尔多伦"},{"id":210300,"name":"阿普尓顿"},{"id":210300,"name":"阿普雷"},{"id":210300,"name":"阿散蒂"},{"id":210300,"name":"阿斯蒂"},{"id":210300,"name":"阿斯科利皮切诺"},{"id":210300,"name":"阿斯塔纳市"},{"id":210300,"name":"阿苏艾"},{"id":210300,"name":"阿塔科拉"},{"id":210300,"name":"阿图阿"},{"id":210300,"name":"阿维拉"},{"id":210300,"name":"阿亚库乔"},{"id":210300,"name":"阿朱马尼"},{"id":210300,"name":"埃德"},{"id":210300,"name":"埃德蒙顿"},{"id":210300,"name":"埃迪尔内"},{"id":210300,"name":"埃尔奥罗"},{"id":210300,"name":"埃尔布隆格"},{"id":210300,"name":"埃尔格约-马拉奎特"},{"id":210300,"name":"埃尔津詹"},{"id":210300,"name":"埃尔科"},{"id":210300,"name":"埃尔梅拉"},{"id":210300,"name":"埃尔帕拉伊索"},{"id":210300,"name":"埃尔帕索"},{"id":210300,"name":"埃尔普罗格雷索"},{"id":210300,"name":"埃尔祖鲁姆"},{"id":210300,"name":"埃基巴斯图兹"},{"id":210300,"name":"埃及"},{"id":210300,"name":"埃克塞特"},{"id":210300,"name":"埃拉泽"},{"id":210300,"name":"埃雷迪亚"},{"id":210300,"name":"埃里温市"},{"id":210300,"name":"埃利斯塔"},{"id":210300,"name":"埃龙戈"},{"id":210300,"name":"埃门"},{"id":210300,"name":"埃莫西约"},{"id":210300,"name":"埃诺"},{"id":210300,"name":"埃佩切"},{"id":210300,"name":"埃塞俄比亚"},{"id":210300,"name":"埃塞奎博群岛-西德梅拉拉"},{"id":210300,"name":"埃斯波"},{"id":210300,"name":"埃斯基谢希尔"},{"id":210300,"name":"埃斯昆特拉"},{"id":210300,"name":"埃斯梅拉尔达斯"},{"id":210300,"name":"埃斯特利"},{"id":210300,"name":"埃瓦"},{"id":210300,"name":"埃文斯顿"},{"id":210300,"name":"埃文斯维尔"},{"id":210300,"name":"埃因霍芬"},{"id":210300,"name":"艾卜哈"},{"id":210300,"name":"艾尔亚奈"},{"id":210300,"name":"艾加伊勒泰"},{"id":210300,"name":"艾克斯"},{"id":210300,"name":"艾利弗山"},{"id":210300,"name":"艾许维尔"},{"id":210300,"name":"艾因"},{"id":210300,"name":"艾因·蒂姆尚特"},{"id":210300,"name":"艾藻尔"},{"id":210300,"name":"爱达荷福尔斯"},{"id":210300,"name":"爱丁堡"},{"id":210300,"name":"爱尔巴桑"},{"id":210300,"name":"爱尔福特"},{"id":210300,"name":"爱尔兰"},{"id":210300,"name":"爱沙尼亚"},{"id":210300,"name":"爱兹克劳克雷"},{"id":210300,"name":"安贝诺"},{"id":210300,"name":"安城市"},{"id":210300,"name":"安道尔"},{"id":210300,"name":"安东市"},{"id":210300,"name":"安哥拉"},{"id":210300,"name":"安圭拉"},{"id":210300,"name":"安集延"},{"id":210300,"name":"安卡拉"},{"id":210300,"name":"安卡什"},{"id":210300,"name":"安科纳"},{"id":210300,"name":"安克雷奇"},{"id":210300,"name":"安曼"},{"id":210300,"name":"安纳巴"},{"id":210300,"name":"安娜堡"},{"id":210300,"name":"安帕赖"},{"id":210300,"name":"安齐拉纳纳"},{"id":210300,"name":"安塞巴"},{"id":210300,"name":"安山市"},{"id":210300,"name":"安顺"},{"id":210300,"name":"安斯巴格"},{"id":210300,"name":"安索阿特吉"},{"id":210300,"name":"安塔利亚"},{"id":210300,"name":"安特卫普"},{"id":210300,"name":"安提奥基亚"},{"id":210300,"name":"安提瓜岛和巴布达"},{"id":210300,"name":"安托法加斯塔大区"},{"id":210300,"name":"安养市"},{"id":210300,"name":"奥巴尔诺-克拉"},{"id":210300,"name":"奥博克区"},{"id":210300,"name":"奥博莫绍"},{"id":210300,"name":"奥布阿西"},{"id":210300,"name":"奥地利"},{"id":210300,"name":"奥多棉吉"},{"id":210300,"name":"奥尔巴尼"},{"id":210300,"name":"奥尔比亚"},{"id":210300,"name":"奥尔杜"},{"id":210300,"name":"奥尔顿"},{"id":210300,"name":"奥尔良"},{"id":210300,"name":"奥尔什丁"},{"id":210300,"name":"奥尔托"},{"id":210300,"name":"奥法利"},{"id":210300,"name":"奥夫雷贡城"},{"id":210300,"name":"奥弗兰公园"},{"id":210300,"name":"奥格登"},{"id":210300,"name":"奥格雷"},{"id":210300,"name":"奥格斯堡"},{"id":210300,"name":"奥古斯塔"},{"id":210300,"name":"奥古斯塔港"},{"id":210300,"name":"奥果韦-洛洛"},{"id":210300,"name":"奥果韦-伊温多"},{"id":210300,"name":"奥汉圭纳"},{"id":210300,"name":"奥胡斯"},{"id":210300,"name":"奥卡万戈"},{"id":210300,"name":"奥科特佩克"},{"id":210300,"name":"奥克兰"},{"id":210300,"name":"奥拉迪亚"},{"id":210300,"name":"奥兰"},{"id":210300,"name":"奥兰多"},{"id":210300,"name":"奥兰乔"},{"id":210300,"name":"奥兰群岛"},{"id":210300,"name":"奥里萨巴"},{"id":210300,"name":"奥里斯塔诺"},{"id":210300,"name":"奥廖尔"},{"id":210300,"name":"奥卢"},{"id":210300,"name":"奥鲁罗"},{"id":210300,"name":"奥伦堡"},{"id":210300,"name":"奥伦塞"},{"id":210300,"name":"奥罗拉"},{"id":210300,"name":"奥罗拉"},{"id":210300,"name":"奥罗米亚"},{"id":210300,"name":"奥洛穆茨"},{"id":210300,"name":"奥马哈"},{"id":210300,"name":"奥马赫科"},{"id":210300,"name":"奥姆沙蒂"},{"id":210300,"name":"奥乔宗蒂约巴"},{"id":210300,"name":"奥沙纳"},{"id":210300,"name":"奥沙瓦"},{"id":210300,"name":"奥什"},{"id":210300,"name":"奥什科什"},{"id":210300,"name":"奥斯雷德涅斯洛文"},{"id":210300,"name":"奥斯塔"},{"id":210300,"name":"奥斯特罗文卡"},{"id":210300,"name":"奥斯汀"},{"id":210300,"name":"奥希科托"},{"id":210300,"name":"澳大利亚"}]},{"B":[{"id":210300,"name":"八打灵"},{"id":210300,"name":"巴巴多斯岛"},{"id":210300,"name":"巴波卢"},{"id":210300,"name":"巴布亚新几内亚"},{"id":210300,"name":"巴达霍斯"},{"id":210300,"name":"巴东得腊"},{"id":210300,"name":"巴杜勒"},{"id":210300,"name":"巴尔的摩"},{"id":210300,"name":"巴尔喀什"},{"id":210300,"name":"巴尔坎"},{"id":210300,"name":"巴尔瑙尔"},{"id":210300,"name":"巴尔腾"},{"id":210300,"name":"巴尔维"},{"id":210300,"name":"巴芬"},{"id":210300,"name":"巴甫洛达尔"},{"id":210300,"name":"巴格马蒂"},{"id":210300,"name":"巴哈"},{"id":210300,"name":"巴哈马"},{"id":210300,"name":"巴基斯坦"},{"id":210300,"name":"巴杰"},{"id":210300,"name":"巴克乌"},{"id":210300,"name":"巴拉瓜里"},{"id":210300,"name":"巴拉圭"},{"id":210300,"name":"巴拉那"},{"id":210300,"name":"巴拉那"},{"id":210300,"name":"巴兰尼亚"},{"id":210300,"name":"巴勒克埃西尔"},{"id":210300,"name":"巴勒莫"},{"id":210300,"name":"巴勒斯坦"},{"id":210300,"name":"巴雷"},{"id":210300,"name":"巴厘"},{"id":210300,"name":"巴黎"},{"id":210300,"name":"巴里"},{"id":210300,"name":"巴里"},{"id":210300,"name":"巴里马-瓦伊尼"},{"id":210300,"name":"巴里纳斯"},{"id":210300,"name":"巴利阿里"},{"id":210300,"name":"巴利城"},{"id":210300,"name":"巴利亚多利德"},{"id":210300,"name":"巴林"},{"id":210300,"name":"巴林戈"},{"id":210300,"name":"巴伦西亚"},{"id":210300,"name":"巴马科首都区"},{"id":210300,"name":"巴明吉-班戈兰"},{"id":210300,"name":"巴姆"},{"id":210300,"name":"巴拿马"},{"id":210300,"name":"巴奇-基什孔"},{"id":210300,"name":"巴塞尔城市"},{"id":210300,"name":"巴塞尔乡村"},{"id":210300,"name":"巴塞罗那"},{"id":210300,"name":"巴斯"},{"id":210300,"name":"巴特尔克里克"},{"id":210300,"name":"巴特肯"},{"id":210300,"name":"巴特曼"},{"id":210300,"name":"巴特纳"},{"id":210300,"name":"巴提奈地区"},{"id":210300,"name":"巴吞鲁日"},{"id":210300,"name":"巴瓦"},{"id":210300,"name":"巴西"},{"id":210300,"name":"巴西富地"},{"id":210300,"name":"巴西利亚"},{"id":210300,"name":"巴西马"},{"id":210300,"name":"巴亚尔塔港"},{"id":210300,"name":"巴亚马雷"},{"id":210300,"name":"巴伊布尔特"},{"id":210300,"name":"巴伊亚"},{"id":210300,"name":"巴泽加"},{"id":210300,"name":"吧巴"},{"id":210300,"name":"白俄罗斯"},{"id":210300,"name":"白马市"},{"id":210300,"name":"白沙瓦"},{"id":210300,"name":"百乐"},{"id":210300,"name":"百慕大"},{"id":210300,"name":"柏林"},{"id":210300,"name":"柏威夏"},{"id":210300,"name":"拜蒂克洛"},{"id":210300,"name":"拜勒加"},{"id":210300,"name":"拜林市"},{"id":210300,"name":"拜伊罗特"},{"id":210300,"name":"班伯里"},{"id":210300,"name":"班迭棉吉"},{"id":210300,"name":"班戈"},{"id":210300,"name":"班戈"},{"id":210300,"name":"班吉直辖市"},{"id":210300,"name":"班加罗尔"},{"id":210300,"name":"班斯卡-比斯特里察"},{"id":210300,"name":"邦"},{"id":210300,"name":"邦达马河谷"},{"id":210300,"name":"邦戈马"},{"id":210300,"name":"磅士卑"},{"id":210300,"name":"磅湛"},{"id":210300,"name":"包尔绍德-奥包乌伊-曾普伦"},{"id":210300,"name":"包考"},{"id":210300,"name":"包斯卡"},{"id":210300,"name":"宝城郡"},{"id":210300,"name":"保尔"},{"id":210300,"name":"保佛"},{"id":210300,"name":"保加利亚"},{"id":210300,"name":"保宁市"},{"id":210300,"name":"报恩郡"},{"id":210300,"name":"抱川市"},{"id":210300,"name":"北阿里"},{"id":210300,"name":"北岸"},{"id":210300,"name":"北博滕"},{"id":210300,"name":"北部"},{"id":210300,"name":"北部"},{"id":210300,"name":"北部"},{"id":210300,"name":"北部"},{"id":210300,"name":"北部"},{"id":210300,"name":"北部"},{"id":210300,"name":"北部"},{"id":210300,"name":"北部区"},{"id":210300,"name":"北查尔斯顿"},{"id":210300,"name":"北大西洋"},{"id":210300,"name":"北蒂拉杜马蒂"},{"id":210300,"name":"北端"},{"id":210300,"name":"北方"},{"id":210300,"name":"北根"},{"id":210300,"name":"北哈萨克斯坦"},{"id":210300,"name":"北海"},{"id":210300,"name":"北红海"},{"id":210300,"name":"北宽扎"},{"id":210300,"name":"北拉斯维加斯"},{"id":210300,"name":"北里奥格兰德"},{"id":210300,"name":"北隆达"},{"id":210300,"name":"北马里亚纳群岛"},{"id":210300,"name":"北马洛斯马杜卢"},{"id":210300,"name":"北马塔贝莱兰"},{"id":210300,"name":"北米拉杜马杜卢"},{"id":210300,"name":"北尼兰杜"},{"id":210300,"name":"北帕默斯顿"},{"id":210300,"name":"北帕默斯顿"},{"id":210300,"name":"北日德兰"},{"id":210300,"name":"北桑坦德"},{"id":210300,"name":"北苏拉威西"},{"id":210300,"name":"北苏门答腊"},{"id":210300,"name":"北苏瓦迪瓦"},{"id":210300,"name":"北远"},{"id":210300,"name":"贝城"},{"id":210300,"name":"贝达"},{"id":210300,"name":"贝尔法斯特"},{"id":210300,"name":"贝尔格莱德"},{"id":210300,"name":"贝尔维尤"},{"id":210300,"name":"贝尔谢巴"},{"id":210300,"name":"贝加莫"},{"id":210300,"name":"贝贾亚"},{"id":210300,"name":"贝卡"},{"id":210300,"name":"贝凯什"},{"id":210300,"name":"贝鲁特"},{"id":210300,"name":"贝内文托"},{"id":210300,"name":"贝尼"},{"id":210300,"name":"贝宁"},{"id":210300,"name":"贝桑松"},{"id":210300,"name":"贝沙尔"},{"id":210300,"name":"贝特雁"},{"id":210300,"name":"贝伊德"},{"id":210300,"name":"奔巴北"},{"id":210300,"name":"奔巴南"},{"id":210300,"name":"奔萨"},{"id":210300,"name":"本阿鲁斯"},{"id":210300,"name":"本德"},{"id":210300,"name":"本迪布焦"},{"id":210300,"name":"本地治里"},{"id":210300,"name":"本戈"},{"id":210300,"name":"本格拉"},{"id":210300,"name":"笨筒"},{"id":210300,"name":"笨珍"},{"id":210300,"name":"比奥比奥大区"},{"id":210300,"name":"比得哥什"},{"id":210300,"name":"比尔森"},{"id":210300,"name":"比莱吉克"},{"id":210300,"name":"比勒费尔德"},{"id":210300,"name":"比勒陀利亚"},{"id":210300,"name":"比雷埃夫斯"},{"id":210300,"name":"比利时"},{"id":210300,"name":"比利亚埃尔莫萨"},{"id":210300,"name":"比灵斯"},{"id":210300,"name":"比鲁兰"},{"id":210300,"name":"比罗比詹"},{"id":210300,"name":"比洛克西"},{"id":210300,"name":"比萨"},{"id":210300,"name":"比塞大"},{"id":210300,"name":"比什凯克市"},{"id":210300,"name":"比斯开"},{"id":210300,"name":"比斯克拉"},{"id":210300,"name":"比斯特里察"},{"id":210300,"name":"比索"},{"id":210300,"name":"比特利斯"},{"id":210300,"name":"比托姆"},{"id":210300,"name":"比温巴"},{"id":210300,"name":"比亚瓦波德拉斯卡"},{"id":210300,"name":"比亚维斯托克"},{"id":210300,"name":"比耶"},{"id":210300,"name":"彼得伯勒"},{"id":210300,"name":"彼得库夫"},{"id":210300,"name":"彼得罗巴甫洛夫斯克"},{"id":210300,"name":"彼得罗扎沃茨克"},{"id":210300,"name":"彼德马里茨堡"},{"id":210300,"name":"彼德斯堡"},{"id":210300,"name":"彼尔姆"},{"id":210300,"name":"俾斯麦"},{"id":210300,"name":"必达士"},{"id":210300,"name":"别德马"},{"id":210300,"name":"别尔哥罗德"},{"id":210300,"name":"宾博"},{"id":210300,"name":"宾格尔"},{"id":210300,"name":"宾香古尔"},{"id":210300,"name":"滨海"},{"id":210300,"name":"滨海"},{"id":210300,"name":"滨海"},{"id":210300,"name":"滨海"},{"id":210300,"name":"滨海阿连特茹"},{"id":210300,"name":"滨海奥果韦"},{"id":210300,"name":"滨海皮尼亚尔"},{"id":210300,"name":"滨海区"},{"id":210300,"name":"槟城"},{"id":210300,"name":"冰岛"},{"id":210300,"name":"波代诺内"},{"id":210300,"name":"波德戈里察"},{"id":210300,"name":"波德拉夫"},{"id":210300,"name":"波德申"},{"id":210300,"name":"波多黎各"},{"id":210300,"name":"波哥大首都区"},{"id":210300,"name":"波鸿"},{"id":210300,"name":"波隆纳鲁沃"},{"id":210300,"name":"波尼"},{"id":210300,"name":"波萨达斯"},{"id":210300,"name":"波萨里卡"},{"id":210300,"name":"波士顿"},{"id":210300,"name":"波斯尼亚－波德里涅"},{"id":210300,"name":"波斯尼亚和黑塞哥维那"},{"id":210300,"name":"波特兰"},{"id":210300,"name":"波图格萨"},{"id":210300,"name":"波兹南"},{"id":210300,"name":"玻利瓦尔"},{"id":210300,"name":"玻利瓦尔"},{"id":210300,"name":"玻利维亚"},{"id":210300,"name":"伯尔尼"},{"id":210300,"name":"伯里亚"},{"id":210300,"name":"伯力"},{"id":210300,"name":"伯利兹"},{"id":210300,"name":"伯利兹"},{"id":210300,"name":"伯灵顿"},{"id":210300,"name":"伯明罕"},{"id":210300,"name":"伯明翰"},{"id":210300,"name":"伯南布哥"},{"id":210300,"name":"伯尼港"},{"id":210300,"name":"勃固省"},{"id":210300,"name":"博阿科"},{"id":210300,"name":"博阿维斯塔岛"},{"id":210300,"name":"博波卢"},{"id":210300,"name":"博博纳罗"},{"id":210300,"name":"博茨瓦纳"},{"id":210300,"name":"博恩霍尔姆"},{"id":210300,"name":"博尔德"},{"id":210300,"name":"博尔古"},{"id":210300,"name":"博尔沃"},{"id":210300,"name":"博凯"},{"id":210300,"name":"博克龙"},{"id":210300,"name":"博利瓦尔"},{"id":210300,"name":"博卢"},{"id":210300,"name":"博洛尼亚"},{"id":210300,"name":"博美特"},{"id":210300,"name":"博米"},{"id":210300,"name":"博帕尔"},{"id":210300,"name":"博乔"},{"id":210300,"name":"博托沙尼"},{"id":210300,"name":"博亚卡"},{"id":210300,"name":"博伊西"},{"id":210300,"name":"不丹"},{"id":210300,"name":"不伦瑞克"},{"id":210300,"name":"布巴内斯瓦尔"},{"id":210300,"name":"布班扎"},{"id":210300,"name":"布达佩斯"},{"id":210300,"name":"布尔杜尔"},{"id":210300,"name":"布尔戈斯"},{"id":210300,"name":"布尔根兰"},{"id":210300,"name":"布尔古"},{"id":210300,"name":"布尔基恩德"},{"id":210300,"name":"布尔吉·布阿雷里吉"},{"id":210300,"name":"布尔加斯"},{"id":210300,"name":"布尔萨"},{"id":210300,"name":"布法罗"},{"id":210300,"name":"布干维尔"},{"id":210300,"name":"布古里巴"},{"id":210300,"name":"布哈拉"},{"id":210300,"name":"布基纳法索"},{"id":210300,"name":"布吉里"},{"id":210300,"name":"布加勒斯特"},{"id":210300,"name":"布拉"},{"id":210300,"name":"布拉班特-瓦隆"},{"id":210300,"name":"布拉德福德"},{"id":210300,"name":"布拉迪斯拉发"},{"id":210300,"name":"布拉戈维申斯克"},{"id":210300,"name":"布拉格直辖市"},{"id":210300,"name":"布拉索夫"},{"id":210300,"name":"布拉瓦岛"},{"id":210300,"name":"布拉瓦约"},{"id":210300,"name":"布莱顿与赫福"},{"id":210300,"name":"布莱金厄"},{"id":210300,"name":"布莱克富特"},{"id":210300,"name":"布莱尼姆"},{"id":210300,"name":"布赖代"},{"id":210300,"name":"布兰卡港"},{"id":210300,"name":"布朗阿哈福"},{"id":210300,"name":"布勒伊拉"},{"id":210300,"name":"布雷达"},{"id":210300,"name":"布雷达斯多普"},{"id":210300,"name":"布雷西亚"},{"id":210300,"name":"布里奇波特"},{"id":210300,"name":"布里斯班"},{"id":210300,"name":"布里斯托尔"},{"id":210300,"name":"布利达"},{"id":210300,"name":"布利斯托"},{"id":210300,"name":"布良斯克"},{"id":210300,"name":"布列斯特"},{"id":210300,"name":"布列塔尼角"},{"id":210300,"name":"布林迪西"},{"id":210300,"name":"布隆迪"},{"id":210300,"name":"布隆方丹"},{"id":210300,"name":"布隆克斯特斯普利特"},{"id":210300,"name":"布卢明顿"},{"id":210300,"name":"布鲁里"},{"id":210300,"name":"布鲁塞尔"},{"id":210300,"name":"布罗科蓬多"},{"id":210300,"name":"布迈德斯"},{"id":210300,"name":"布琼布拉城市"},{"id":210300,"name":"布琼布拉乡村"},{"id":210300,"name":"布塔布泰"},{"id":210300,"name":"布塔雷"},{"id":210300,"name":"布韦岛"},{"id":210300,"name":"布西亚"},{"id":210300,"name":"布希亚"},{"id":210300,"name":"布谢尼"},{"id":210300,"name":"布依拉"},{"id":210300,"name":"布宜诺斯艾利斯"},{"id":210300,"name":"布泽乌"}]},{"C":[{"id":210300,"name":"采西斯"},{"id":210300,"name":"草原区"},{"id":210300,"name":"查尔斯顿"},{"id":210300,"name":"查拉特南戈"},{"id":210300,"name":"查塔努加"},{"id":210300,"name":"茶胶"},{"id":210300,"name":"柴桢"},{"id":210300,"name":"昌迪加尔"},{"id":210300,"name":"昌克勒"},{"id":210300,"name":"昌宁郡"},{"id":210300,"name":"昌原市"},{"id":210300,"name":"长城郡"},{"id":210300,"name":"长水郡"},{"id":210300,"name":"长兴郡"},{"id":210300,"name":"朝鲜"},{"id":210300,"name":"车里雅宾斯克"},{"id":210300,"name":"城南市"},{"id":210300,"name":"赤道"},{"id":210300,"name":"赤塔"},{"id":210300,"name":"楚格"},{"id":210300,"name":"楚河"},{"id":210300,"name":"川圹"},{"id":210300,"name":"春川市"},{"id":210300,"name":"淳昌郡"}]},{"D":[{"id":210300,"name":"达布罗瓦戈尼察"},{"id":210300,"name":"达城郡"},{"id":210300,"name":"达尔富尔"},{"id":210300,"name":"达尔斯"},{"id":210300,"name":"达尔文"},{"id":210300,"name":"达喀尔"},{"id":210300,"name":"达卡"},{"id":210300,"name":"达拉纳"},{"id":210300,"name":"达拉斯"},{"id":210300,"name":"达拉斯"},{"id":210300,"name":"达累斯萨拉姆"},{"id":210300,"name":"达里恩"},{"id":210300,"name":"达利"},{"id":210300,"name":"达曼"},{"id":210300,"name":"达曼"},{"id":210300,"name":"达姆施塔特"},{"id":210300,"name":"达尼丁"},{"id":210300,"name":"达沙古兹"},{"id":210300,"name":"达文波特"},{"id":210300,"name":"达沃"},{"id":210300,"name":"达希莱地区"},{"id":210300,"name":"大阿克拉"},{"id":210300,"name":"大巴萨"},{"id":210300,"name":"大波兰地区戈茹夫"},{"id":210300,"name":"大福克斯"},{"id":210300,"name":"大吉德"},{"id":210300,"name":"大急流城"},{"id":210300,"name":"大角山"},{"id":210300,"name":"大克鲁"},{"id":210300,"name":"大里贝拉"},{"id":210300,"name":"大马士革"},{"id":210300,"name":"大马士革市"},{"id":210300,"name":"大瀑布村"},{"id":210300,"name":"大邱"},{"id":210300,"name":"大山脚"},{"id":210300,"name":"大西洋"},{"id":210300,"name":"大西洋"},{"id":210300,"name":"大雅加达首都特区"},{"id":210300,"name":"大章克申"},{"id":210300,"name":"代顿"},{"id":210300,"name":"代尔祖尔"},{"id":210300,"name":"代尼兹利"},{"id":210300,"name":"代特莫尔特"},{"id":210300,"name":"丹迪"},{"id":210300,"name":"丹佛"},{"id":210300,"name":"丹吉尔"},{"id":210300,"name":"丹麦"},{"id":210300,"name":"丹那美拉"},{"id":210300,"name":"丹南"},{"id":210300,"name":"丹绒马"},{"id":210300,"name":"丹维尓"},{"id":210300,"name":"丹阳郡"},{"id":210300,"name":"担布南"},{"id":210300,"name":"掸邦"},{"id":210300,"name":"淡边"},{"id":210300,"name":"淡马鲁"},{"id":210300,"name":"道北"},{"id":210300,"name":"道拉吉里"},{"id":210300,"name":"得梅因"},{"id":210300,"name":"得土安"},{"id":210300,"name":"德阿尔"},{"id":210300,"name":"德班"},{"id":210300,"name":"德比"},{"id":210300,"name":"德尔加多"},{"id":210300,"name":"德国"},{"id":210300,"name":"德罕"},{"id":210300,"name":"德拉"},{"id":210300,"name":"德雷达瓦"},{"id":210300,"name":"德累斯顿"},{"id":210300,"name":"德里"},{"id":210300,"name":"德林达依省"},{"id":210300,"name":"德罗贝塔-塞维林堡"},{"id":210300,"name":"德梅拉拉-马海卡"},{"id":210300,"name":"德绍"},{"id":210300,"name":"德瓦"},{"id":210300,"name":"德文波特"},{"id":210300,"name":"的里雅斯特"},{"id":210300,"name":"登盖莱"},{"id":210300,"name":"登卓"},{"id":210300,"name":"邓迪"},{"id":210300,"name":"堤川市"},{"id":210300,"name":"迪拜"},{"id":210300,"name":"迪勃拉"},{"id":210300,"name":"迪尔伯恩"},{"id":210300,"name":"迪法"},{"id":210300,"name":"迪基勒区"},{"id":210300,"name":"迪基希"},{"id":210300,"name":"迪卡尔布"},{"id":210300,"name":"迪凯持"},{"id":210300,"name":"迪亚巴克尔"},{"id":210300,"name":"底特律"},{"id":210300,"name":"地拉那"},{"id":210300,"name":"帝力"},{"id":210300,"name":"第戎"},{"id":210300,"name":"第乌"},{"id":210300,"name":"蒂巴扎"},{"id":210300,"name":"蒂尔堡"},{"id":210300,"name":"蒂华纳"},{"id":210300,"name":"蒂拉贝里"},{"id":210300,"name":"蒂拉穆克"},{"id":210300,"name":"蒂罗尔"},{"id":210300,"name":"蒂米什瓦拉"},{"id":210300,"name":"蒂珀雷里"},{"id":210300,"name":"蒂斯姆西勒特"},{"id":210300,"name":"东巴克利"},{"id":210300,"name":"东伯比斯-科兰太因"},{"id":210300,"name":"东部"},{"id":210300,"name":"东部"},{"id":210300,"name":"东部"},{"id":210300,"name":"东部"},{"id":210300,"name":"东部地区"},{"id":210300,"name":"东部高地"},{"id":210300,"name":"东帝汶"},{"id":210300,"name":"东豆川市"},{"id":210300,"name":"东方"},{"id":210300,"name":"东佛兰德"},{"id":210300,"name":"东哈萨克斯坦"},{"id":210300,"name":"东海市"},{"id":210300,"name":"东胡德"},{"id":210300,"name":"东加里曼丹"},{"id":210300,"name":"东伦敦"},{"id":210300,"name":"东马绍纳兰"},{"id":210300,"name":"东南苏拉威西"},{"id":210300,"name":"东努沙登加拉"},{"id":210300,"name":"东塞皮克"},{"id":210300,"name":"东圣路易斯"},{"id":210300,"name":"东新不列颠"},{"id":210300,"name":"东约特兰"},{"id":210300,"name":"东爪哇"},{"id":210300,"name":"都柏林"},{"id":210300,"name":"都拉斯"},{"id":210300,"name":"都灵"},{"id":210300,"name":"斗湖"},{"id":210300,"name":"斗亚兰"},{"id":210300,"name":"杜罕"},{"id":210300,"name":"杜拉斯诺"},{"id":210300,"name":"杜兰戈"},{"id":210300,"name":"杜罗"},{"id":210300,"name":"杜塞尔多夫"},{"id":210300,"name":"杜尚别"},{"id":210300,"name":"顿河畔罗斯托夫"},{"id":210300,"name":"多贝莱"},{"id":210300,"name":"多德卡尼斯"},{"id":210300,"name":"多德雷赫特"},{"id":210300,"name":"多多马"},{"id":210300,"name":"多佛"},{"id":210300,"name":"多哥"},{"id":210300,"name":"多哈"},{"id":210300,"name":"多雷尼"},{"id":210300,"name":"多伦多"},{"id":210300,"name":"多米尼加"},{"id":210300,"name":"多米尼加共和国"},{"id":210300,"name":"多米斯拉夫格勒"},{"id":210300,"name":"多内加尔"}]},{"E":[{"id":210300,"name":"俄克拉荷马城"},{"id":210300,"name":"俄罗斯"},{"id":210300,"name":"鹅麦"},{"id":210300,"name":"厄巴纳-香槟"},{"id":210300,"name":"厄瓜多尔"},{"id":210300,"name":"厄勒布鲁"},{"id":210300,"name":"厄立特里亚"},{"id":210300,"name":"鄂木斯克"},{"id":210300,"name":"恩布"},{"id":210300,"name":"恩戈齐"},{"id":210300,"name":"恩古涅"},{"id":210300,"name":"恩济－科莫埃"},{"id":210300,"name":"恩加"},{"id":210300,"name":"恩塞纳达"},{"id":210300,"name":"恩斯赫德"},{"id":210300,"name":"恩特拉杜罗伏日"},{"id":210300,"name":"恩通加莫"},{"id":210300,"name":"恩延扎"},{"id":210300,"name":"恩泽雷科雷"}]},{"F":[{"id":210300,"name":"发罗拉"},{"id":210300,"name":"法迪福卢"},{"id":210300,"name":"法蒂克"},{"id":210300,"name":"法尔孔"},{"id":210300,"name":"法戈"},{"id":210300,"name":"法国"},{"id":210300,"name":"法拉纳"},{"id":210300,"name":"法兰克福"},{"id":210300,"name":"法鲁"},{"id":210300,"name":"法罗群岛"},{"id":210300,"name":"法塞莱莱阿加"},{"id":210300,"name":"法属波利尼西亚"},{"id":210300,"name":"法属圭亚那"},{"id":210300,"name":"法属南部领地"},{"id":210300,"name":"凡"},{"id":210300,"name":"梵蒂冈"},{"id":210300,"name":"非斯"},{"id":210300,"name":"菲律宾"},{"id":210300,"name":"菲尼克斯群岛"},{"id":210300,"name":"菲什敦"},{"id":210300,"name":"菲特烈堡"},{"id":210300,"name":"菲亚纳兰楚阿"},{"id":210300,"name":"菲茵"},{"id":210300,"name":"斐济"},{"id":210300,"name":"费城"},{"id":210300,"name":"费尔班克斯"},{"id":210300,"name":"费尔干纳"},{"id":210300,"name":"费拉拉"},{"id":210300,"name":"费里"},{"id":210300,"name":"费利杜"},{"id":210300,"name":"费萨拉巴德"},{"id":210300,"name":"费耶尔"},{"id":210300,"name":"费耶特维尔"},{"id":210300,"name":"芬兰"},{"id":210300,"name":"丰沙尔"},{"id":210300,"name":"丰沙里"},{"id":210300,"name":"丰盛港"},{"id":210300,"name":"凤凰城"},{"id":210300,"name":"奉化郡"},{"id":210300,"name":"佛得角"},{"id":210300,"name":"佛兰芒-布拉班特"},{"id":210300,"name":"佛罗里达"},{"id":210300,"name":"佛罗伦萨"},{"id":210300,"name":"弗吉尼亚比奇"},{"id":210300,"name":"弗吉尼亚城"},{"id":210300,"name":"弗拉基米尔"},{"id":210300,"name":"弗拉季高加索"},{"id":210300,"name":"弗赖堡"},{"id":210300,"name":"弗兰克群岛"},{"id":210300,"name":"弗朗西斯科-莫拉桑"},{"id":210300,"name":"弗雷堡"},{"id":210300,"name":"弗雷德里顿"},{"id":210300,"name":"弗雷瑞斯"},{"id":210300,"name":"弗里堡"},{"id":210300,"name":"弗里曼特尔港"},{"id":210300,"name":"弗里尼欣"},{"id":210300,"name":"弗林特"},{"id":210300,"name":"弗罗茨瓦夫"},{"id":210300,"name":"弗罗马格尔"},{"id":210300,"name":"弗洛雷斯"},{"id":210300,"name":"弗沃茨瓦韦克"},{"id":210300,"name":"伏尔加格勒"},{"id":210300,"name":"扶安郡"},{"id":210300,"name":"扶余郡"},{"id":210300,"name":"芙蓉"},{"id":210300,"name":"浮罗交怡"},{"id":210300,"name":"福阿穆拉库"},{"id":210300,"name":"福古岛"},{"id":210300,"name":"福贾"},{"id":210300,"name":"福克沙尼"},{"id":210300,"name":"福拉尔贝格"},{"id":210300,"name":"福莫萨"},{"id":210300,"name":"复活节岛"}]},{"G":[{"id":210300,"name":"盖尔达耶"},{"id":210300,"name":"盖尔马"},{"id":210300,"name":"盖尔斯堡"},{"id":210300,"name":"盖瑟斯堡"},{"id":210300,"name":"干丹"},{"id":210300,"name":"干尼亚"},{"id":210300,"name":"甘贝拉各族"},{"id":210300,"name":"甘比亚山"},{"id":210300,"name":"甘达基"},{"id":210300,"name":"甘马挽"},{"id":210300,"name":"甘蒙"},{"id":210300,"name":"甘托克"},{"id":210300,"name":"冈比亚"},{"id":210300,"name":"冈祖尔古"},{"id":210300,"name":"刚果"},{"id":210300,"name":"刚果民主共和国"},{"id":210300,"name":"高敞郡"},{"id":210300,"name":"高城郡"},{"id":210300,"name":"高灵郡"},{"id":210300,"name":"高兴郡"},{"id":210300,"name":"高阳市"},{"id":210300,"name":"高渊"},{"id":210300,"name":"高原"},{"id":210300,"name":"高原区"},{"id":210300,"name":"戈尔戈勒"},{"id":210300,"name":"戈尔诺－阿尔泰斯克"},{"id":210300,"name":"戈尔韦"},{"id":210300,"name":"戈公"},{"id":210300,"name":"戈雷尼"},{"id":210300,"name":"戈里"},{"id":210300,"name":"戈梅利"},{"id":210300,"name":"戈西"},{"id":210300,"name":"戈亚斯"},{"id":210300,"name":"哥本哈根"},{"id":210300,"name":"哥打巴鲁"},{"id":210300,"name":"哥打丁宜"},{"id":210300,"name":"哥打基纳巴鲁"},{"id":210300,"name":"哥打马鲁都"},{"id":210300,"name":"哥打士打"},{"id":210300,"name":"哥得兰"},{"id":210300,"name":"哥伦比亚"},{"id":210300,"name":"哥伦比亚"},{"id":210300,"name":"哥伦比亚"},{"id":210300,"name":"哥伦布"},{"id":210300,"name":"哥伦布"},{"id":210300,"name":"哥帕斯基斯蒂"},{"id":210300,"name":"哥斯达黎加"},{"id":210300,"name":"哥印拜陀"},{"id":210300,"name":"格但斯克"},{"id":210300,"name":"格丁尼亚"},{"id":210300,"name":"格恩西岛"},{"id":210300,"name":"格尔夫波特"},{"id":210300,"name":"格尔纳利"},{"id":210300,"name":"格加尔库尼克"},{"id":210300,"name":"格拉鲁斯"},{"id":210300,"name":"格拉纳达"},{"id":210300,"name":"格拉纳达"},{"id":210300,"name":"格拉斯哥"},{"id":210300,"name":"格拉西亚斯-阿迪奥斯"},{"id":210300,"name":"格兰茨帕斯"},{"id":210300,"name":"格兰代尔"},{"id":210300,"name":"格劳宾登"},{"id":210300,"name":"格雷茅斯"},{"id":210300,"name":"格雷文马赫"},{"id":210300,"name":"格利维采"},{"id":210300,"name":"格林贝"},{"id":210300,"name":"格林纳达"},{"id":210300,"name":"格林尼治"},{"id":210300,"name":"格林斯伯勒"},{"id":210300,"name":"格林维尔"},{"id":210300,"name":"格陵兰"},{"id":210300,"name":"格鲁琼兹"},{"id":210300,"name":"格罗布莱斯达尔"},{"id":210300,"name":"格罗德诺"},{"id":210300,"name":"格罗宁根"},{"id":210300,"name":"格罗兹尼"},{"id":210300,"name":"格洛斯特"},{"id":210300,"name":"根地咬"},{"id":210300,"name":"公州市"},{"id":210300,"name":"贡布"},{"id":210300,"name":"古巴"},{"id":210300,"name":"古邦巴素"},{"id":210300,"name":"古达"},{"id":210300,"name":"古打毛律"},{"id":210300,"name":"古尔贝内"},{"id":210300,"name":"古尔代盖"},{"id":210300,"name":"古尔马"},{"id":210300,"name":"古晋"},{"id":210300,"name":"古卢"},{"id":210300,"name":"古纳"},{"id":210300,"name":"古廷"},{"id":210300,"name":"谷城郡"},{"id":210300,"name":"固城郡"},{"id":210300,"name":"故吉软瓦拉"},{"id":210300,"name":"瓜达尔卡纳尔"},{"id":210300,"name":"瓜达拉哈拉"},{"id":210300,"name":"瓜达拉哈拉"},{"id":210300,"name":"瓜德罗普"},{"id":210300,"name":"瓜拉班尤"},{"id":210300,"name":"瓜拉庇劳"},{"id":210300,"name":"瓜拉丁加奴"},{"id":210300,"name":"瓜拉吉赖"},{"id":210300,"name":"瓜拉冷岳"},{"id":210300,"name":"瓜拉姆达"},{"id":210300,"name":"瓜拉雪兰莪"},{"id":210300,"name":"瓜里科"},{"id":210300,"name":"瓜纳华托"},{"id":210300,"name":"瓜纳卡斯特"},{"id":210300,"name":"瓜维亚雷"},{"id":210300,"name":"瓜希拉"},{"id":210300,"name":"瓜亚斯"},{"id":210300,"name":"瓜伊拉"},{"id":210300,"name":"瓜伊尼亚"},{"id":210300,"name":"关丹"},{"id":210300,"name":"关岛"},{"id":210300,"name":"光明市"},{"id":210300,"name":"光阳市"},{"id":210300,"name":"广州市"},{"id":210300,"name":"圭尔夫"},{"id":210300,"name":"圭亚那"},{"id":210300,"name":"龟尾市"},{"id":210300,"name":"贾巴尔普尔"},{"id":210300,"name":"贾夫纳"},{"id":210300,"name":"贾拉拉巴德"},{"id":210300,"name":"完州郡"}]},{"H":[{"id":210300,"name":"哈费尔巴廷"},{"id":210300,"name":"哈拉帕"},{"id":210300,"name":"哈勒姆"},{"id":210300,"name":"哈雷"},{"id":210300,"name":"哈马"},{"id":210300,"name":"哈密尔顿"},{"id":210300,"name":"哈伊勒"},{"id":210300,"name":"海参崴"},{"id":210300,"name":"海德拉巴"},{"id":210300,"name":"海地"},{"id":210300,"name":"海法"},{"id":210300,"name":"海防"},{"id":210300,"name":"海门林纳"},{"id":210300,"name":"海米斯穆谢特"},{"id":210300,"name":"海南郡"},{"id":210300,"name":"海湾"},{"id":210300,"name":"海湾群岛"},{"id":210300,"name":"海乌姆"},{"id":210300,"name":"海牙"},{"id":210300,"name":"海耶"},{"id":210300,"name":"海州"},{"id":210300,"name":"韩国"},{"id":210300,"name":"罕西拉"},{"id":210300,"name":"汉班托特"},{"id":210300,"name":"汉堡"},{"id":210300,"name":"汉诺威"},{"id":210300,"name":"汉诺威"},{"id":210300,"name":"汉特－曼西斯克"},{"id":210300,"name":"豪尔"},{"id":210300,"name":"豪伊杜-比豪尔"},{"id":210300,"name":"和丰"},{"id":210300,"name":"和顺郡"},{"id":210300,"name":"河东郡"},{"id":210300,"name":"河口"},{"id":210300,"name":"河内"},{"id":210300,"name":"河南市"},{"id":210300,"name":"荷兰"},{"id":210300,"name":"荷台达"},{"id":210300,"name":"荷属安地列斯"},{"id":210300,"name":"赫德和麦克唐纳群岛"},{"id":210300,"name":"赫尔河畔京斯敦"},{"id":210300,"name":"赫尔辛基"},{"id":210300,"name":"赫拉德茨-克拉洛韦"},{"id":210300,"name":"赫拉特"},{"id":210300,"name":"赫里福德"},{"id":210300,"name":"赫利赞"},{"id":210300,"name":"赫罗纳"},{"id":210300,"name":"赫维什"},{"id":210300,"name":"黑塞哥维那－涅雷特瓦"},{"id":210300,"name":"黑斯廷斯"},{"id":210300,"name":"亨德森"},{"id":210300,"name":"亨廷顿"},{"id":210300,"name":"横城郡"},{"id":210300,"name":"洪城郡"},{"id":210300,"name":"洪川郡"},{"id":210300,"name":"洪都拉斯"},{"id":210300,"name":"紅土坎"},{"id":210300,"name":"胡德里弗"},{"id":210300,"name":"胡蒂亚帕"},{"id":210300,"name":"胡富夫"},{"id":210300,"name":"胡胡伊"},{"id":210300,"name":"胡利亚卡"},{"id":210300,"name":"胡宁"},{"id":210300,"name":"胡志明市"},{"id":210300,"name":"湖泊"},{"id":210300,"name":"湖大区"},{"id":210300,"name":"花拉子模"},{"id":210300,"name":"华城市"},{"id":210300,"name":"华川郡"},{"id":210300,"name":"华都牙也"},{"id":210300,"name":"华雷斯"},{"id":210300,"name":"华雷斯港"},{"id":210300,"name":"华玲"},{"id":210300,"name":"华潘"},{"id":210300,"name":"华沙"},{"id":210300,"name":"华盛顿哥伦比亚特区"},{"id":210300,"name":"话望生"},{"id":210300,"name":"怀阿拉"},{"id":210300,"name":"怀恩多特"},{"id":210300,"name":"怀塔科拉"},{"id":210300,"name":"怀特霍斯"},{"id":210300,"name":"槐山郡"},{"id":210300,"name":"黄金海岸"},{"id":210300,"name":"惠山"},{"id":210300,"name":"火山口湖"},{"id":210300,"name":"霍巴特"},{"id":210300,"name":"霍夫多尔普"},{"id":210300,"name":"霍隆"},{"id":210300,"name":"霍罗格"},{"id":210300,"name":"霍马斯"},{"id":210300,"name":"霍马湾"},{"id":210300,"name":"霍姆斯"},{"id":210300,"name":"霍尼亚拉"},{"id":210300,"name":"霍茹夫"}]},{"J":[{"id":210300,"name":"鸡龙市"},{"id":210300,"name":"基埃-恩特姆"},{"id":210300,"name":"基安布"},{"id":210300,"name":"基巴莱"},{"id":210300,"name":"基本古"},{"id":210300,"name":"基博加"},{"id":210300,"name":"基布耶"},{"id":210300,"name":"基达尔"},{"id":210300,"name":"基恩乔乔"},{"id":210300,"name":"基尔"},{"id":210300,"name":"基尔代尔"},{"id":210300,"name":"基尔肯尼"},{"id":210300,"name":"基戈马"},{"id":210300,"name":"基加利-恩加利"},{"id":210300,"name":"基加利市"},{"id":210300,"name":"基克拉迪"},{"id":210300,"name":"基拉科洛"},{"id":210300,"name":"基劳纳"},{"id":210300,"name":"基里巴斯"},{"id":210300,"name":"基里菲"},{"id":210300,"name":"基里尼亚加"},{"id":210300,"name":"基里诺奇"},{"id":210300,"name":"基利斯"},{"id":210300,"name":"基龙多"},{"id":210300,"name":"基洛夫"},{"id":210300,"name":"基诺沙"},{"id":210300,"name":"基奇纳"},{"id":210300,"name":"基切"},{"id":210300,"name":"基苏木"},{"id":210300,"name":"基索罗"},{"id":210300,"name":"基特古姆"},{"id":210300,"name":"基特加"},{"id":210300,"name":"基图伊"},{"id":210300,"name":"基韦斯特"},{"id":210300,"name":"基西"},{"id":210300,"name":"基雅尼"},{"id":210300,"name":"吉比利"},{"id":210300,"name":"吉布提"},{"id":210300,"name":"吉达"},{"id":210300,"name":"吉大港"},{"id":210300,"name":"吉迪马卡"},{"id":210300,"name":"吉尔伯特群岛"},{"id":210300,"name":"吉尔吉斯斯坦"},{"id":210300,"name":"吉河"},{"id":210300,"name":"吉杰尔"},{"id":210300,"name":"吉孔戈罗"},{"id":210300,"name":"吉朗"},{"id":210300,"name":"吉雷松"},{"id":210300,"name":"吉隆坡"},{"id":210300,"name":"吉诺卡斯特"},{"id":210300,"name":"吉普斯夸"},{"id":210300,"name":"吉塞尼"},{"id":210300,"name":"吉森"},{"id":210300,"name":"吉斯伯恩"},{"id":210300,"name":"吉塔拉马"},{"id":210300,"name":"吉赞"},{"id":210300,"name":"吉扎克"},{"id":210300,"name":"几内亚"},{"id":210300,"name":"几内亚比绍"},{"id":210300,"name":"济金绍尔"},{"id":210300,"name":"济良诺夫斯克"},{"id":210300,"name":"济罗"},{"id":210300,"name":"加奥"},{"id":210300,"name":"加贝斯"},{"id":210300,"name":"加帛"},{"id":210300,"name":"加布"},{"id":210300,"name":"加查斯内克"},{"id":210300,"name":"加的斯"},{"id":210300,"name":"加尔各答"},{"id":210300,"name":"加夫萨"},{"id":210300,"name":"加盖福毛加"},{"id":210300,"name":"加济安泰普"},{"id":210300,"name":"加加埃毛加"},{"id":210300,"name":"加拉茨"},{"id":210300,"name":"加拉加斯"},{"id":210300,"name":"加拉帕戈斯"},{"id":210300,"name":"加勒"},{"id":210300,"name":"加里加尔"},{"id":210300,"name":"加里宁格勒"},{"id":210300,"name":"加里萨"},{"id":210300,"name":"加姆珀哈"},{"id":210300,"name":"加拿大"},{"id":210300,"name":"加纳"},{"id":210300,"name":"加蓬"},{"id":210300,"name":"加平郡"},{"id":210300,"name":"加沙地带"},{"id":210300,"name":"加什·巴尔卡"},{"id":210300,"name":"加央"},{"id":210300,"name":"加扎勒河"},{"id":210300,"name":"加兹-纳杰孔-索尔诺克"},{"id":210300,"name":"贾朗达尔"},{"id":210300,"name":"贾纳克布尔"},{"id":210300,"name":"坚杜拜"},{"id":210300,"name":"柬埔寨"},{"id":210300,"name":"剑桥"},{"id":210300,"name":"江布尔"},{"id":210300,"name":"江界"},{"id":210300,"name":"江陵市"},{"id":210300,"name":"江沙"},{"id":210300,"name":"交维斯顿"},{"id":210300,"name":"焦夫"},{"id":210300,"name":"焦特布尔"},{"id":210300,"name":"教堂山"},{"id":210300,"name":"杰尔-莫松-肖普朗"},{"id":210300,"name":"杰佛逊市"},{"id":210300,"name":"杰卡布皮尔斯"},{"id":210300,"name":"杰克逊"},{"id":210300,"name":"杰克逊维尔"},{"id":210300,"name":"杰拉尔顿"},{"id":210300,"name":"杰拉什"},{"id":210300,"name":"杰勒法"},{"id":210300,"name":"杰里扬拜特奈"},{"id":210300,"name":"杰兹卡兹甘"},{"id":210300,"name":"捷克共和国"},{"id":210300,"name":"捷斯"},{"id":210300,"name":"金边市"},{"id":210300,"name":"金伯利"},{"id":210300,"name":"金堤市"},{"id":210300,"name":"金迪奥"},{"id":210300,"name":"金迪亚"},{"id":210300,"name":"金海市"},{"id":210300,"name":"金贾"},{"id":210300,"name":"金马仑高原"},{"id":210300,"name":"金奈"},{"id":210300,"name":"金浦市"},{"id":210300,"name":"金泉市"},{"id":210300,"name":"金斯波特"},{"id":210300,"name":"金斯敦"},{"id":210300,"name":"金斯敦"},{"id":210300,"name":"津巴布韦"},{"id":210300,"name":"津德尔"},{"id":210300,"name":"锦山郡"},{"id":210300,"name":"晋州市"},{"id":210300,"name":"京那巴登岸"},{"id":210300,"name":"旌善郡"},{"id":210300,"name":"井邑市"},{"id":210300,"name":"九里市"},{"id":210300,"name":"久尔贝勒"},{"id":210300,"name":"久尔久"},{"id":210300,"name":"旧金山"},{"id":210300,"name":"居昌郡"},{"id":210300,"name":"居林"},{"id":210300,"name":"居銮"},{"id":210300,"name":"居米什哈内"},{"id":210300,"name":"桔井"},{"id":210300,"name":"橘园"},{"id":210300,"name":"巨济市"},{"id":210300,"name":"军浦市"},{"id":210300,"name":"军威郡"},{"id":210300,"name":"奇尔潘辛戈"},{"id":210300,"name":"奇马尔特南戈"},{"id":210300,"name":"奇南德加"},{"id":210300,"name":"奇切斯特"},{"id":210300,"name":"夏洛特"},{"id":210300,"name":"夏洛特敦"},{"id":210300,"name":"夏亚"}]},{"K":[{"id":210300,"name":"喀布尔"},{"id":210300,"name":"喀麦隆"},{"id":210300,"name":"喀山"},{"id":210300,"name":"喀土穆"},{"id":210300,"name":"卡昂"},{"id":210300,"name":"卡贝拉马伊多"},{"id":210300,"name":"卡迪夫"},{"id":210300,"name":"卡尔马"},{"id":210300,"name":"卡尔斯"},{"id":210300,"name":"卡尔斯鲁厄"},{"id":210300,"name":"卡范"},{"id":210300,"name":"卡瓜苏"},{"id":210300,"name":"卡焦戈"},{"id":210300,"name":"卡克塔"},{"id":210300,"name":"卡拉巴尔塔"},{"id":210300,"name":"卡拉比克"},{"id":210300,"name":"卡拉曼"},{"id":210300,"name":"卡拉索"},{"id":210300,"name":"卡拉沃沃"},{"id":210300,"name":"卡利亚里"},{"id":210300,"name":"卡卢特勒"},{"id":210300,"name":"卡鲁济"},{"id":210300,"name":"卡罗维发利"},{"id":210300,"name":"卡洛"},{"id":210300,"name":"卡门"},{"id":210300,"name":"卡米什利"},{"id":210300,"name":"卡姆文盖"},{"id":210300,"name":"卡穆利"},{"id":210300,"name":"卡尼巴达姆"},{"id":210300,"name":"卡农古"},{"id":210300,"name":"卡普里维"},{"id":210300,"name":"卡普恰盖"},{"id":210300,"name":"卡普乔鲁瓦"},{"id":210300,"name":"卡萨布兰卡"},{"id":210300,"name":"卡塞尔"},{"id":210300,"name":"卡塞雷斯"},{"id":210300,"name":"卡什卡达里亚"},{"id":210300,"name":"卡斯蒂利亚"},{"id":210300,"name":"卡斯珀"},{"id":210300,"name":"卡斯塔莫努"},{"id":210300,"name":"卡斯特利翁"},{"id":210300,"name":"卡塔马卡"},{"id":210300,"name":"卡坦扎罗"},{"id":210300,"name":"卡瓦多"},{"id":210300,"name":"卡瓦拉蒂"},{"id":210300,"name":"卡亚俄"},{"id":210300,"name":"卡耶亚多"},{"id":210300,"name":"卡永加"},{"id":210300,"name":"卡扎赫"},{"id":210300,"name":"开城"},{"id":210300,"name":"开罗"},{"id":210300,"name":"开曼群岛"},{"id":210300,"name":"开姆尼斯"},{"id":210300,"name":"开普敦"},{"id":210300,"name":"开塞利"},{"id":210300,"name":"凯恩斯"},{"id":210300,"name":"凯尔采"},{"id":210300,"name":"凯格勒"},{"id":210300,"name":"凯里"},{"id":210300,"name":"凯里乔"},{"id":210300,"name":"凯卢阿"},{"id":210300,"name":"凯鲁万"},{"id":210300,"name":"凯莫"},{"id":210300,"name":"凯内杜古"},{"id":210300,"name":"凯帕拉"},{"id":210300,"name":"堪培拉"},{"id":210300,"name":"堪萨斯城"},{"id":210300,"name":"堪萨斯城"},{"id":210300,"name":"坎波巴索"},{"id":210300,"name":"坎大哈"},{"id":210300,"name":"坎库佐"},{"id":210300,"name":"坎帕拉"},{"id":210300,"name":"坎特"},{"id":210300,"name":"坎特伯雷"},{"id":210300,"name":"康津郡"},{"id":210300,"name":"康康"},{"id":210300,"name":"康科德"},{"id":210300,"name":"康塞普西翁"},{"id":210300,"name":"康斯坦察"},{"id":210300,"name":"康提"},{"id":210300,"name":"考卡"},{"id":210300,"name":"考卡山谷"},{"id":210300,"name":"考拉克"},{"id":210300,"name":"考纳斯"},{"id":210300,"name":"考文垂"},{"id":210300,"name":"柯克拉雷利"},{"id":210300,"name":"柯林斯堡"},{"id":210300,"name":"科布伦次"},{"id":210300,"name":"科达伦"},{"id":210300,"name":"科迪勒拉"},{"id":210300,"name":"科蒂多"},{"id":210300,"name":"科尔察"},{"id":210300,"name":"科尔达"},{"id":210300,"name":"科尔多巴"},{"id":210300,"name":"科尔多凡"},{"id":210300,"name":"科尔多瓦"},{"id":210300,"name":"科尔多瓦"},{"id":210300,"name":"科尔特斯"},{"id":210300,"name":"科法尔尼洪"},{"id":210300,"name":"科赫德斯"},{"id":210300,"name":"科贾埃利"},{"id":210300,"name":"科金博大区"},{"id":210300,"name":"科科拉"},{"id":210300,"name":"科科斯群岛"},{"id":210300,"name":"科克"},{"id":210300,"name":"科克扬加克"},{"id":210300,"name":"科利马"},{"id":210300,"name":"科连特斯"},{"id":210300,"name":"科隆"},{"id":210300,"name":"科隆"},{"id":210300,"name":"科卢马杜卢"},{"id":210300,"name":"科伦坡"},{"id":210300,"name":"科罗拉多斯普林斯"},{"id":210300,"name":"科罗尼"},{"id":210300,"name":"科罗萨尔"},{"id":210300,"name":"科洛"},{"id":210300,"name":"科洛尼亚"},{"id":210300,"name":"科马罗姆"},{"id":210300,"name":"科马亚瓜"},{"id":210300,"name":"科蒙加里"},{"id":210300,"name":"科摩"},{"id":210300,"name":"科摩罗"},{"id":210300,"name":"科莫埃"},{"id":210300,"name":"科默韦讷"},{"id":210300,"name":"科纳克里"},{"id":210300,"name":"科尼亚"},{"id":210300,"name":"科宁"},{"id":210300,"name":"科潘"},{"id":210300,"name":"科恰班巴"},{"id":210300,"name":"科森扎"},{"id":210300,"name":"科沙林"},{"id":210300,"name":"科斯塔奈"},{"id":210300,"name":"科斯特罗马"},{"id":210300,"name":"科泰克"},{"id":210300,"name":"科特迪瓦"},{"id":210300,"name":"科特卡"},{"id":210300,"name":"科托帕希"},{"id":210300,"name":"科瓦贝拉"},{"id":210300,"name":"科瓦利马"},{"id":210300,"name":"科瓦利斯"},{"id":210300,"name":"科威特"},{"id":210300,"name":"科希策"},{"id":210300,"name":"科希马"},{"id":210300,"name":"克恩顿"},{"id":210300,"name":"克尔谢希尔"},{"id":210300,"name":"克拉古涅瓦茨"},{"id":210300,"name":"克拉科夫"},{"id":210300,"name":"克拉伦登"},{"id":210300,"name":"克拉斯拉瓦"},{"id":210300,"name":"克拉斯诺达尔"},{"id":210300,"name":"克拉斯诺亚尔斯克"},{"id":210300,"name":"克拉约瓦"},{"id":210300,"name":"克莱尔"},{"id":210300,"name":"克莱克斯多普"},{"id":210300,"name":"克莱佩达"},{"id":210300,"name":"克赖斯特彻奇"},{"id":210300,"name":"克兰斯顿"},{"id":210300,"name":"克劳斯城"},{"id":210300,"name":"克勒克卡莱"},{"id":210300,"name":"克勒拉希"},{"id":210300,"name":"克雷塔罗"},{"id":210300,"name":"克利夫兰"},{"id":210300,"name":"克卢日纳波卡"},{"id":210300,"name":"克鲁努贝里"},{"id":210300,"name":"克伦邦"},{"id":210300,"name":"克罗地亚"},{"id":210300,"name":"克罗斯诺"},{"id":210300,"name":"克罗托内"},{"id":210300,"name":"克麦罗沃"},{"id":210300,"name":"克钦邦"},{"id":210300,"name":"克萨尔特南戈"},{"id":210300,"name":"克耶邦"},{"id":210300,"name":"克孜勒"},{"id":210300,"name":"克孜勒奥尔达"},{"id":210300,"name":"峇株巴辖"},{"id":210300,"name":"肯考迪娅"},{"id":210300,"name":"肯尼亚"},{"id":210300,"name":"肯套"},{"id":210300,"name":"孔皮恩加"},{"id":210300,"name":"孔西"},{"id":210300,"name":"苦盏"},{"id":210300,"name":"库埃纳瓦卡"},{"id":210300,"name":"库奥皮奥"},{"id":210300,"name":"库德姆卡尔"},{"id":210300,"name":"库尔迪加"},{"id":210300,"name":"库尔干"},{"id":210300,"name":"库尔干-秋别"},{"id":210300,"name":"库尔纳"},{"id":210300,"name":"库尔佩罗戈"},{"id":210300,"name":"库尔恰托夫"},{"id":210300,"name":"库尔斯克"},{"id":210300,"name":"库尔维奥戈"},{"id":210300,"name":"库福"},{"id":210300,"name":"库克群岛"},{"id":210300,"name":"库克斯"},{"id":210300,"name":"库里滕加"},{"id":210300,"name":"库利阿坎"},{"id":210300,"name":"库利科罗"},{"id":210300,"name":"库鲁曼"},{"id":210300,"name":"库鲁内格勒"},{"id":210300,"name":"库洛布"},{"id":210300,"name":"库米"},{"id":210300,"name":"库内奥"},{"id":210300,"name":"库内内"},{"id":210300,"name":"库内内"},{"id":210300,"name":"库奈特拉"},{"id":210300,"name":"库斯贝"},{"id":210300,"name":"库斯卡特兰"},{"id":210300,"name":"库斯科"},{"id":210300,"name":"库尤尼-马扎鲁尼"},{"id":210300,"name":"夸察夸拉克斯"},{"id":210300,"name":"夸勒"},{"id":210300,"name":"宽多库邦戈"},{"id":210300,"name":"魁北克"},{"id":210300,"name":"昆迪纳马卡"},{"id":210300,"name":"昆卡"}]},{"L":[{"id":210300,"name":"拉巴斯"},{"id":210300,"name":"拉巴斯"},{"id":210300,"name":"拉巴斯"},{"id":210300,"name":"拉巴斯"},{"id":210300,"name":"拉巴特"},{"id":210300,"name":"拉贝"},{"id":210300,"name":"拉布蒂"},{"id":210300,"name":"拉多姆"},{"id":210300,"name":"拉飞"},{"id":210300,"name":"拉格瓦特"},{"id":210300,"name":"拉各斯"},{"id":210300,"name":"拉合尔"},{"id":210300,"name":"拉赫蒂"},{"id":210300,"name":"拉赫季"},{"id":210300,"name":"拉卡"},{"id":210300,"name":"拉卡伊"},{"id":210300,"name":"拉科鲁尼亚"},{"id":210300,"name":"拉克罗斯"},{"id":210300,"name":"拉奎拉"},{"id":210300,"name":"拉腊"},{"id":210300,"name":"拉勒米"},{"id":210300,"name":"拉雷多"},{"id":210300,"name":"拉里奥哈"},{"id":210300,"name":"拉里奥哈"},{"id":210300,"name":"拉利伯塔德"},{"id":210300,"name":"拉利伯塔德"},{"id":210300,"name":"拉木"},{"id":210300,"name":"拉纳尔和贝罗纳"},{"id":210300,"name":"拉彭兰塔"},{"id":210300,"name":"拉皮德城"},{"id":210300,"name":"拉普拉塔"},{"id":210300,"name":"拉斯克鲁塞斯"},{"id":210300,"name":"拉斯帕尔马斯"},{"id":210300,"name":"拉斯佩齐亚"},{"id":210300,"name":"拉斯维加斯"},{"id":210300,"name":"拉塔基亚"},{"id":210300,"name":"拉特兰"},{"id":210300,"name":"拉特纳普勒"},{"id":210300,"name":"拉脱维亚"},{"id":210300,"name":"拉瓦尔品第"},{"id":210300,"name":"拉瓦耶哈"},{"id":210300,"name":"拉乌尼翁"},{"id":210300,"name":"拉西锡"},{"id":210300,"name":"拉辛"},{"id":210300,"name":"腊塔纳基里"},{"id":210300,"name":"莱昂"},{"id":210300,"name":"莱昂"},{"id":210300,"name":"莱昂"},{"id":210300,"name":"莱比锡"},{"id":210300,"name":"莱迪史密斯"},{"id":210300,"name":"莱顿"},{"id":210300,"name":"莱恩群岛"},{"id":210300,"name":"莱格尼察"},{"id":210300,"name":"莱基皮亚"},{"id":210300,"name":"莱科"},{"id":210300,"name":"莱里贝"},{"id":210300,"name":"莱里达"},{"id":210300,"name":"莱利斯塔德"},{"id":210300,"name":"莱切"},{"id":210300,"name":"莱什"},{"id":210300,"name":"莱什诺"},{"id":210300,"name":"莱斯博斯"},{"id":210300,"name":"莱索托"},{"id":210300,"name":"莱文沃思"},{"id":210300,"name":"赖扬"},{"id":210300,"name":"兰巴耶克"},{"id":210300,"name":"兰茨胡特"},{"id":210300,"name":"兰德方丹"},{"id":210300,"name":"兰开斯特"},{"id":210300,"name":"兰脑"},{"id":210300,"name":"兰辛"},{"id":210300,"name":"蓝毗尼"},{"id":210300,"name":"琅勃拉邦"},{"id":210300,"name":"琅南塔"},{"id":210300,"name":"朗多尼亚"},{"id":210300,"name":"朗福德"},{"id":210300,"name":"朗塞斯顿"},{"id":210300,"name":"劳伦斯"},{"id":210300,"name":"劳斯"},{"id":210300,"name":"劳滕"},{"id":210300,"name":"劳勿"},{"id":210300,"name":"崂斯"},{"id":210300,"name":"老挝"},{"id":210300,"name":"勒姆尼库沃尔恰"},{"id":210300,"name":"雷登"},{"id":210300,"name":"雷恩"},{"id":210300,"name":"雷焦艾米利亚"},{"id":210300,"name":"雷焦卡拉布里亚"},{"id":210300,"name":"雷拉巴"},{"id":210300,"name":"雷诺萨"},{"id":210300,"name":"雷塔卢莱乌"},{"id":210300,"name":"雷西姆农"},{"id":210300,"name":"雷西斯滕匹亚"},{"id":210300,"name":"雷希察"},{"id":210300,"name":"雷泽克内"},{"id":210300,"name":"骊州郡"},{"id":210300,"name":"黎巴嫩"},{"id":210300,"name":"黎巴嫩山"},{"id":210300,"name":"礼山郡"},{"id":210300,"name":"里昂"},{"id":210300,"name":"里奥加耶戈斯"},{"id":210300,"name":"里奥夸尔托"},{"id":210300,"name":"里伯"},{"id":210300,"name":"里尔"},{"id":210300,"name":"里弗塞斯"},{"id":210300,"name":"里加"},{"id":210300,"name":"里贾纳"},{"id":210300,"name":"里诺"},{"id":210300,"name":"里彭"},{"id":210300,"name":"里士满"},{"id":210300,"name":"里斯本"},{"id":210300,"name":"里瓦达维亚海军准将城"},{"id":210300,"name":"里瓦斯"},{"id":210300,"name":"里韦拉"},{"id":210300,"name":"里窝那"},{"id":210300,"name":"里约热内卢"},{"id":210300,"name":"里泽"},{"id":210300,"name":"理查兹湾"},{"id":210300,"name":"醴泉郡"},{"id":210300,"name":"立卑"},{"id":210300,"name":"立陶宛"},{"id":210300,"name":"丽水市"},{"id":210300,"name":"利巴特茹"},{"id":210300,"name":"利贝雷克"},{"id":210300,"name":"利比里亚"},{"id":210300,"name":"利比亚"},{"id":210300,"name":"利川市"},{"id":210300,"name":"利基卡"},{"id":210300,"name":"利拉"},{"id":210300,"name":"利马"},{"id":210300,"name":"利蒙"},{"id":210300,"name":"利摩日"},{"id":210300,"name":"利默里克"},{"id":210300,"name":"利佩茨克"},{"id":210300,"name":"利奇菲尔德"},{"id":210300,"name":"利萨科夫斯克"},{"id":210300,"name":"利萨拉尔达"},{"id":210300,"name":"利斯本"},{"id":210300,"name":"利斯滕堡"},{"id":210300,"name":"利特里姆"},{"id":210300,"name":"利物浦"},{"id":210300,"name":"利雅得"},{"id":210300,"name":"利耶帕亚"},{"id":210300,"name":"利茲"},{"id":210300,"name":"连科兰"},{"id":210300,"name":"涟川郡"},{"id":210300,"name":"联邦属地"},{"id":210300,"name":"梁山市"},{"id":210300,"name":"梁赞"},{"id":210300,"name":"廖内"},{"id":210300,"name":"列巴普"},{"id":210300,"name":"列克星敦"},{"id":210300,"name":"列宁诺戈尔斯克"},{"id":210300,"name":"列日"},{"id":210300,"name":"列斯特"},{"id":210300,"name":"列支敦士登"},{"id":210300,"name":"林巴济"},{"id":210300,"name":"林堡"},{"id":210300,"name":"林迪"},{"id":210300,"name":"林肯"},{"id":210300,"name":"林肯"},{"id":210300,"name":"林肯港"},{"id":210300,"name":"林茂"},{"id":210300,"name":"林梦"},{"id":210300,"name":"麟蹄郡"},{"id":210300,"name":"灵光郡"},{"id":210300,"name":"灵克宾"},{"id":210300,"name":"灵岩郡"},{"id":210300,"name":"刘易斯顿"},{"id":210300,"name":"刘易斯顿"},{"id":210300,"name":"留尼旺岛"},{"id":210300,"name":"龙仁市"},{"id":210300,"name":"龙运"},{"id":210300,"name":"卢阿普拉"},{"id":210300,"name":"卢布林"},{"id":210300,"name":"卢戈"},{"id":210300,"name":"卢加"},{"id":210300,"name":"卢萨卡"},{"id":210300,"name":"卢塞恩"},{"id":210300,"name":"卢森堡"},{"id":210300,"name":"卢森堡"},{"id":210300,"name":"卢森堡"},{"id":210300,"name":"卢瓦马加纳"},{"id":210300,"name":"卢旺达"},{"id":210300,"name":"卢韦罗"},{"id":210300,"name":"卢扎"},{"id":210300,"name":"鲁昂"},{"id":210300,"name":"鲁达"},{"id":210300,"name":"鲁德内"},{"id":210300,"name":"鲁汉戈"},{"id":210300,"name":"鲁亨盖里"},{"id":210300,"name":"鲁夸"},{"id":210300,"name":"鲁昆吉里"},{"id":210300,"name":"鲁塞"},{"id":210300,"name":"鲁赛法"},{"id":210300,"name":"鲁塔纳"},{"id":210300,"name":"鲁伍马"},{"id":210300,"name":"鲁伊吉"},{"id":210300,"name":"鹿特丹"},{"id":210300,"name":"路易斯维尔"},{"id":210300,"name":"吕伐登"},{"id":210300,"name":"吕讷堡"},{"id":210300,"name":"绿山城"},{"id":210300,"name":"伦敦"},{"id":210300,"name":"伦敦"},{"id":210300,"name":"伦皮拉"},{"id":210300,"name":"论山市"},{"id":210300,"name":"罗安达"},{"id":210300,"name":"罗德岱堡"},{"id":210300,"name":"罗克艾兰"},{"id":210300,"name":"罗克福德"},{"id":210300,"name":"罗克斯普林斯"},{"id":210300,"name":"罗克维尔"},{"id":210300,"name":"罗赖马"},{"id":210300,"name":"罗利"},{"id":210300,"name":"罗卢姆"},{"id":210300,"name":"罗马"},{"id":210300,"name":"罗马尼亚"},{"id":210300,"name":"罗恰"},{"id":210300,"name":"罗切斯特"},{"id":210300,"name":"罗切斯特"},{"id":210300,"name":"罗萨里奥"},{"id":210300,"name":"罗森"},{"id":210300,"name":"罗斯基勒"},{"id":210300,"name":"罗斯康芒"},{"id":210300,"name":"罗斯韦尔"},{"id":210300,"name":"罗瓦涅米"},{"id":210300,"name":"罗先"},{"id":210300,"name":"罗州市"},{"id":210300,"name":"罗兹"},{"id":210300,"name":"洛巴伊"},{"id":210300,"name":"洛法"},{"id":210300,"name":"洛贡"},{"id":210300,"name":"洛哈"},{"id":210300,"name":"洛雷托"},{"id":210300,"name":"洛里"},{"id":210300,"name":"洛利杜罕都会区"},{"id":210300,"name":"洛桑"},{"id":210300,"name":"洛杉矶"},{"id":210300,"name":"洛斯里奥斯"},{"id":210300,"name":"洛斯莫奇斯"}]},{"M":[{"id":210300,"name":"麻坡"},{"id":210300,"name":"马埃"},{"id":210300,"name":"马安"},{"id":210300,"name":"马查科斯"},{"id":210300,"name":"马达加斯加"},{"id":210300,"name":"马当"},{"id":210300,"name":"马德巴"},{"id":210300,"name":"马德雷德迪奥斯"},{"id":210300,"name":"马德里"},{"id":210300,"name":"马德里斯"},{"id":210300,"name":"马德普拉塔"},{"id":210300,"name":"马德望"},{"id":210300,"name":"马杜赖"},{"id":210300,"name":"马多纳"},{"id":210300,"name":"马尔代夫"},{"id":210300,"name":"马尔丁"},{"id":210300,"name":"马尔多纳多"},{"id":210300,"name":"马耳他"},{"id":210300,"name":"马费滕"},{"id":210300,"name":"马夫拉克"},{"id":210300,"name":"马格达雷那"},{"id":210300,"name":"马格德堡"},{"id":210300,"name":"马瓜尼"},{"id":210300,"name":"马圭省"},{"id":210300,"name":"马哈卡利"},{"id":210300,"name":"马哈奇卡拉"},{"id":210300,"name":"马哈赞加"},{"id":210300,"name":"马海卡-伯比斯"},{"id":210300,"name":"马赫迪耶"},{"id":210300,"name":"马基拉"},{"id":210300,"name":"马吉比"},{"id":210300,"name":"马加丹"},{"id":210300,"name":"马加斯"},{"id":210300,"name":"马江"},{"id":210300,"name":"马坎巴"},{"id":210300,"name":"马拉迪"},{"id":210300,"name":"马拉蒂亚"},{"id":210300,"name":"马拉加"},{"id":210300,"name":"马拉喀什"},{"id":210300,"name":"马拉尼昂"},{"id":210300,"name":"马拉韦"},{"id":210300,"name":"马拉维"},{"id":210300,"name":"马腊"},{"id":210300,"name":"马来西亚"},{"id":210300,"name":"马莱塔"},{"id":210300,"name":"马兰"},{"id":210300,"name":"马兰热"},{"id":210300,"name":"马朗帕"},{"id":210300,"name":"马雷"},{"id":210300,"name":"马累"},{"id":210300,"name":"马累岛"},{"id":210300,"name":"马里"},{"id":210300,"name":"马里卜"},{"id":210300,"name":"马里兰"},{"id":210300,"name":"马里扬泊列"},{"id":210300,"name":"马六甲市"},{"id":210300,"name":"马鲁古"},{"id":210300,"name":"马罗韦讷"},{"id":210300,"name":"马那瓜"},{"id":210300,"name":"马纳比"},{"id":210300,"name":"马纳尔"},{"id":210300,"name":"马纳图托"},{"id":210300,"name":"马尼卡兰"},{"id":210300,"name":"马尼拉"},{"id":210300,"name":"马尼萨"},{"id":210300,"name":"马尼托沃克"},{"id":210300,"name":"马努巴"},{"id":210300,"name":"马努法伊"},{"id":210300,"name":"马努考"},{"id":210300,"name":"马努斯"},{"id":210300,"name":"马其顿"},{"id":210300,"name":"马萨"},{"id":210300,"name":"马萨布布"},{"id":210300,"name":"马萨卡"},{"id":210300,"name":"马萨特兰"},{"id":210300,"name":"马萨亚"},{"id":210300,"name":"马塞卢"},{"id":210300,"name":"马赛"},{"id":210300,"name":"马山市"},{"id":210300,"name":"马绍尔群岛"},{"id":210300,"name":"马斯基根"},{"id":210300,"name":"马斯喀特省"},{"id":210300,"name":"马斯卡拉"},{"id":210300,"name":"马斯特里赫特"},{"id":210300,"name":"马斯温戈"},{"id":210300,"name":"马塔加尔帕"},{"id":210300,"name":"马塔莫罗斯"},{"id":210300,"name":"马塔姆"},{"id":210300,"name":"马泰拉"},{"id":210300,"name":"马特莱"},{"id":210300,"name":"马特勒"},{"id":210300,"name":"马提尼克"},{"id":210300,"name":"马托格罗索"},{"id":210300,"name":"马乌莱大区"},{"id":210300,"name":"马辛迪"},{"id":210300,"name":"马亚里"},{"id":210300,"name":"马尤岛"},{"id":210300,"name":"马尤盖"},{"id":210300,"name":"马约特岛"},{"id":210300,"name":"马扎里沙里夫"},{"id":210300,"name":"马樟"},{"id":210300,"name":"玛丽港"},{"id":210300,"name":"玛木"},{"id":210300,"name":"迈阿密"},{"id":210300,"name":"迈迪逊"},{"id":210300,"name":"迈赫拉"},{"id":210300,"name":"迈赫维特"},{"id":210300,"name":"迈科普"},{"id":210300,"name":"迈利赛"},{"id":210300,"name":"迈诺特"},{"id":210300,"name":"麦迪亚"},{"id":210300,"name":"麦地那"},{"id":210300,"name":"麦加"},{"id":210300,"name":"麦亚伦"},{"id":210300,"name":"麦哲伦-智利南极大区"},{"id":210300,"name":"曼贝雷-卡代"},{"id":210300,"name":"曼彻斯特"},{"id":210300,"name":"曼彻斯特"},{"id":210300,"name":"曼彻斯特"},{"id":210300,"name":"曼岛"},{"id":210300,"name":"曼德拉"},{"id":210300,"name":"曼德勒省"},{"id":210300,"name":"曼格斯套"},{"id":210300,"name":"曼哈顿"},{"id":210300,"name":"曼海姆"},{"id":210300,"name":"曼萨尼罗"},{"id":210300,"name":"曼亚拉"},{"id":210300,"name":"曼哲拉"},{"id":210300,"name":"毛里求斯"},{"id":210300,"name":"毛里塔尼亚"},{"id":210300,"name":"茂朱郡"},{"id":210300,"name":"梅奥"},{"id":210300,"name":"梅德福"},{"id":210300,"name":"梅德宁"},{"id":210300,"name":"梅地奥特茹"},{"id":210300,"name":"梅尔库里亚丘克"},{"id":210300,"name":"梅基卡诺斯"},{"id":210300,"name":"梅吉"},{"id":210300,"name":"梅克内斯"},{"id":210300,"name":"梅肯"},{"id":210300,"name":"梅里达"},{"id":210300,"name":"梅里达"},{"id":210300,"name":"梅鲁"},{"id":210300,"name":"梅萨"},{"id":210300,"name":"梅斯"},{"id":210300,"name":"梅塔"},{"id":210300,"name":"美国"},{"id":210300,"name":"美里"},{"id":210300,"name":"美因兹"},{"id":210300,"name":"美属萨摩亚"},{"id":210300,"name":"美属外岛"},{"id":210300,"name":"门多萨"},{"id":210300,"name":"蒙巴萨"},{"id":210300,"name":"蒙彼利埃"},{"id":210300,"name":"蒙得维的亚"},{"id":210300,"name":"蒙多基里"},{"id":210300,"name":"蒙哥马利"},{"id":210300,"name":"蒙古"},{"id":210300,"name":"蒙克洛瓦"},{"id":210300,"name":"蒙塔纳"},{"id":210300,"name":"蒙特雷"},{"id":210300,"name":"蒙特利尔"},{"id":210300,"name":"蒙特塞拉多"},{"id":210300,"name":"蒙特塞拉特"},{"id":210300,"name":"蒙扎"},{"id":210300,"name":"孟邦"},{"id":210300,"name":"孟菲斯"},{"id":210300,"name":"孟加拉"},{"id":210300,"name":"米德尔堡"},{"id":210300,"name":"米德尔堡"},{"id":210300,"name":"米德尔顿"},{"id":210300,"name":"米尔恩湾"},{"id":210300,"name":"米戈利"},{"id":210300,"name":"米凯利"},{"id":210300,"name":"米克斯科"},{"id":210300,"name":"米兰"},{"id":210300,"name":"米兰达"},{"id":210300,"name":"米纳斯吉拉斯"},{"id":210300,"name":"米尼奥-利马"},{"id":210300,"name":"米什洛维采"},{"id":210300,"name":"米斯"},{"id":210300,"name":"米苏拉"},{"id":210300,"name":"秘鲁"},{"id":210300,"name":"密尔-卡拉巴赫"},{"id":210300,"name":"密尔沃基"},{"id":210300,"name":"密克罗尼西亚"},{"id":210300,"name":"密拉"},{"id":210300,"name":"密阳市"},{"id":210300,"name":"缅甸"},{"id":210300,"name":"民都鲁"},{"id":210300,"name":"明古鲁"},{"id":210300,"name":"明尼阿波利斯"},{"id":210300,"name":"明斯克市"},{"id":210300,"name":"明斯特"},{"id":210300,"name":"摩德纳"},{"id":210300,"name":"摩尔多瓦"},{"id":210300,"name":"摩尔曼斯克"},{"id":210300,"name":"摩拉维亚-西里西亚"},{"id":210300,"name":"摩洛哥"},{"id":210300,"name":"摩纳哥"},{"id":210300,"name":"莫比尔"},{"id":210300,"name":"莫尔兹比港"},{"id":210300,"name":"莫哈莱斯胡克"},{"id":210300,"name":"莫霍特隆"},{"id":210300,"name":"莫吉廖夫"},{"id":210300,"name":"莫克瓜"},{"id":210300,"name":"莫拉桑"},{"id":210300,"name":"莫雷利亚"},{"id":210300,"name":"莫罗贝"},{"id":210300,"name":"莫罗纳－圣地亚哥"},{"id":210300,"name":"莫罗托"},{"id":210300,"name":"莫洛戈罗"},{"id":210300,"name":"莫内根"},{"id":210300,"name":"莫纳加斯"},{"id":210300,"name":"莫纳斯提尔"},{"id":210300,"name":"莫讷勒格勒"},{"id":210300,"name":"莫诺"},{"id":210300,"name":"莫普提"},{"id":210300,"name":"莫桑比克"},{"id":210300,"name":"莫斯科"},{"id":210300,"name":"莫斯科"},{"id":210300,"name":"莫斯塔加纳姆"},{"id":210300,"name":"莫斯特罗"},{"id":210300,"name":"莫希科"},{"id":210300,"name":"莫约"},{"id":210300,"name":"墨尔本"},{"id":210300,"name":"墨菲"},{"id":210300,"name":"墨西哥"},{"id":210300,"name":"墨西哥城"},{"id":210300,"name":"墨西卡利"},{"id":210300,"name":"墨西拿"},{"id":210300,"name":"默里布里奇"},{"id":210300,"name":"默里迪恩"},{"id":210300,"name":"姆巴拉拉"},{"id":210300,"name":"姆巴拉兹"},{"id":210300,"name":"姆巴莱"},{"id":210300,"name":"姆贝亚"},{"id":210300,"name":"姆博穆"},{"id":210300,"name":"姆库泽"},{"id":210300,"name":"姆皮吉"},{"id":210300,"name":"姆特瓦拉"},{"id":210300,"name":"姆万扎"},{"id":210300,"name":"姆西拉"},{"id":210300,"name":"木尔坦"},{"id":210300,"name":"木胶"},{"id":210300,"name":"木浦市"},{"id":210300,"name":"木中"},{"id":210300,"name":"慕尼黑"},{"id":210300,"name":"穆本德"},{"id":210300,"name":"穆尔西亚"},{"id":210300,"name":"穆甘-萨连"},{"id":210300,"name":"穆科诺"},{"id":210300,"name":"穆拉"},{"id":210300,"name":"穆拉库"},{"id":210300,"name":"穆拉姆维亚"},{"id":210300,"name":"穆莱蒂武"},{"id":210300,"name":"穆兰卡"},{"id":210300,"name":"穆里斯堡"},{"id":210300,"name":"穆桑达姆省"},{"id":210300,"name":"穆什"},{"id":210300,"name":"穆瓦洛"},{"id":210300,"name":"穆翁"}]},{"N":[{"id":210300,"name":"拿笃"},{"id":210300,"name":"内阿彭策尔"},{"id":210300,"name":"内贝拉北"},{"id":210300,"name":"内贝拉南"},{"id":210300,"name":"内比"},{"id":210300,"name":"内地地区"},{"id":210300,"name":"内尔斯普雷特"},{"id":210300,"name":"内夫谢希尔"},{"id":210300,"name":"内格罗河"},{"id":210300,"name":"内罗毕"},{"id":210300,"name":"内皮尔"},{"id":210300,"name":"内皮尼亚尔北"},{"id":210300,"name":"内皮尼亚尔南"},{"id":210300,"name":"内坦亚"},{"id":210300,"name":"内乌肯"},{"id":210300,"name":"那不勒斯"},{"id":210300,"name":"那慕尔"},{"id":210300,"name":"纳阿马"},{"id":210300,"name":"纳巴湾"},{"id":210300,"name":"纳波，奥雷利亚纳"},{"id":210300,"name":"纳布勒"},{"id":210300,"name":"纳尔奇克"},{"id":210300,"name":"纳尔逊"},{"id":210300,"name":"纳戈尔诺－卡拉巴赫"},{"id":210300,"name":"纳季兰"},{"id":210300,"name":"纳卡皮里皮里特"},{"id":210300,"name":"纳卡松戈拉"},{"id":210300,"name":"纳库鲁"},{"id":210300,"name":"纳拉亚尼"},{"id":210300,"name":"纳里尼奥"},{"id":210300,"name":"纳里扬马尔"},{"id":210300,"name":"纳伦"},{"id":210300,"name":"纳罗克"},{"id":210300,"name":"纳曼干"},{"id":210300,"name":"纳门滕加"},{"id":210300,"name":"纳米贝"},{"id":210300,"name":"纳米比亚"},{"id":210300,"name":"纳闽"},{"id":210300,"name":"纳纳-格里比齐"},{"id":210300,"name":"纳纳-曼贝雷"},{"id":210300,"name":"纳沙泰尔"},{"id":210300,"name":"纳什维尔"},{"id":210300,"name":"纳舒厄"},{"id":210300,"name":"纳瓦拉"},{"id":210300,"name":"纳沃伊"},{"id":210300,"name":"纳乌里"},{"id":210300,"name":"纳希切万"},{"id":210300,"name":"纳亚拉"},{"id":210300,"name":"奈拜提耶市"},{"id":210300,"name":"奈梅亨"},{"id":210300,"name":"南阿里"},{"id":210300,"name":"南安普敦"},{"id":210300,"name":"南邦达马"},{"id":210300,"name":"南伯灵顿"},{"id":210300,"name":"南部"},{"id":210300,"name":"南部"},{"id":210300,"name":"南部"},{"id":210300,"name":"南部"},{"id":210300,"name":"南部高地"},{"id":210300,"name":"南部区"},{"id":210300,"name":"南大西洋"},{"id":210300,"name":"南迪"},{"id":210300,"name":"南蒂拉杜马蒂"},{"id":210300,"name":"南方"},{"id":210300,"name":"南方各族"},{"id":210300,"name":"南非"},{"id":210300,"name":"南戈壁"},{"id":210300,"name":"南哈萨克斯坦"},{"id":210300,"name":"南海郡"},{"id":210300,"name":"南红海"},{"id":210300,"name":"南极洲"},{"id":210300,"name":"南加里曼丹"},{"id":210300,"name":"南科莫埃"},{"id":210300,"name":"南宽扎"},{"id":210300,"name":"南里奥格兰德"},{"id":210300,"name":"南隆达"},{"id":210300,"name":"南马洛斯马杜卢"},{"id":210300,"name":"南马塔贝莱兰"},{"id":210300,"name":"南马托格罗索"},{"id":210300,"name":"南曼兰"},{"id":210300,"name":"南米拉杜马杜卢"},{"id":210300,"name":"南摩拉维亚"},{"id":210300,"name":"南尼兰杜"},{"id":210300,"name":"南浦"},{"id":210300,"name":"南乔治亚和南桑德威奇群岛"},{"id":210300,"name":"南日德兰"},{"id":210300,"name":"南萨哈林斯克"},{"id":210300,"name":"南苏拉威西"},{"id":210300,"name":"南苏门答腊"},{"id":210300,"name":"南苏瓦迪瓦"},{"id":210300,"name":"南特"},{"id":210300,"name":"南杨州市"},{"id":210300,"name":"南原市"},{"id":210300,"name":"楠榜"},{"id":210300,"name":"楠帕"},{"id":210300,"name":"瑙鲁"},{"id":210300,"name":"尼泊尔"},{"id":210300,"name":"尼代"},{"id":210300,"name":"尼蒂"},{"id":210300,"name":"尼尔斯特隆"},{"id":210300,"name":"尼加拉瓜"},{"id":210300,"name":"尼克里"},{"id":210300,"name":"尼日尔"},{"id":210300,"name":"尼日利亚"},{"id":210300,"name":"尼什"},{"id":210300,"name":"尼斯"},{"id":210300,"name":"尼特拉"},{"id":210300,"name":"尼亚美市"},{"id":210300,"name":"尼亚米拉"},{"id":210300,"name":"尼亚尼亚"},{"id":210300,"name":"尼扬加"},{"id":210300,"name":"年达鲁阿"},{"id":210300,"name":"涅比特达格"},{"id":210300,"name":"涅恩布库"},{"id":210300,"name":"涅里"},{"id":210300,"name":"宁巴"},{"id":210300,"name":"宁越郡"},{"id":210300,"name":"牛津"},{"id":210300,"name":"纽阿斯"},{"id":210300,"name":"纽埃"},{"id":210300,"name":"纽波特"},{"id":210300,"name":"纽波特"},{"id":210300,"name":"纽黑文"},{"id":210300,"name":"纽卡斯尔"},{"id":210300,"name":"纽卡斯尔"},{"id":210300,"name":"纽卡斯尔"},{"id":210300,"name":"纽里"},{"id":210300,"name":"纽伦堡"},{"id":210300,"name":"纽瓦克"},{"id":210300,"name":"纽瓦克"},{"id":210300,"name":"纽约市"},{"id":210300,"name":"努奥罗"},{"id":210300,"name":"努雷克"},{"id":210300,"name":"努姆比埃尔"},{"id":210300,"name":"努瓦迪布湾"},{"id":210300,"name":"努瓦克肖特特区"},{"id":210300,"name":"努沃勒埃利耶"},{"id":210300,"name":"挪威"},{"id":210300,"name":"诺丁汉"},{"id":210300,"name":"诺夫哥罗德"},{"id":210300,"name":"诺福克"},{"id":210300,"name":"诺福克"},{"id":210300,"name":"诺格拉德"},{"id":210300,"name":"诺加莱斯"},{"id":210300,"name":"诺克斯维尔"},{"id":210300,"name":"诺里奇"},{"id":210300,"name":"诺曼"},{"id":210300,"name":"诺黙尔"},{"id":210300,"name":"诺特拉尼"},{"id":210300,"name":"诺瓦拉"}]},{"P":[{"id":210300,"name":"磅清扬"},{"id":210300,"name":"磅同"},{"id":210300,"name":"兵南邦"},{"id":210300,"name":"波茨坦"},{"id":210300,"name":"波多诺伏"},{"id":210300,"name":"波多西"},{"id":210300,"name":"波尔图"},{"id":210300,"name":"波卡特洛"},{"id":210300,"name":"波莱"},{"id":210300,"name":"波兰"},{"id":210300,"name":"波里"},{"id":210300,"name":"波里坎赛"},{"id":210300,"name":"波罗勉"},{"id":210300,"name":"波默伦-苏佩纳姆"},{"id":210300,"name":"波穆尔"},{"id":210300,"name":"波萨维纳"},{"id":210300,"name":"波塔基特"},{"id":210300,"name":"波塔罗-锡帕鲁尼"},{"id":210300,"name":"波坦察"},{"id":210300,"name":"波特兰"},{"id":210300,"name":"波特兰"},{"id":210300,"name":"波希康市"},{"id":210300,"name":"欧文斯伯勒"},{"id":210300,"name":"帕德尔"},{"id":210300,"name":"帕尔杜比采"},{"id":210300,"name":"帕尔马"},{"id":210300,"name":"帕克城"},{"id":210300,"name":"帕克斯堡"},{"id":210300,"name":"帕拉"},{"id":210300,"name":"帕拉"},{"id":210300,"name":"帕拉马里博"},{"id":210300,"name":"帕拉纳"},{"id":210300,"name":"帕拉伊巴"},{"id":210300,"name":"帕劳利"},{"id":210300,"name":"帕劳群岛"},{"id":210300,"name":"帕利萨"},{"id":210300,"name":"帕伦西亚"},{"id":210300,"name":"帕涅韦日斯"},{"id":210300,"name":"帕丘卡"},{"id":210300,"name":"帕斯科"},{"id":210300,"name":"帕斯塔萨"},{"id":210300,"name":"帕索雷"},{"id":210300,"name":"帕特森"},{"id":210300,"name":"帕维亚"},{"id":210300,"name":"派桑杜"},{"id":210300,"name":"潘多"},{"id":210300,"name":"庞菷亚克"},{"id":210300,"name":"培拉特"},{"id":210300,"name":"佩里"},{"id":210300,"name":"佩鲁贾"},{"id":210300,"name":"佩斯"},{"id":210300,"name":"佩滕"},{"id":210300,"name":"彭吉肯特"},{"id":210300,"name":"彭纳马"},{"id":210300,"name":"蓬塔德尔加达"},{"id":210300,"name":"蓬塔雷纳斯"},{"id":210300,"name":"蓬特韦德拉"},{"id":210300,"name":"皮奥里亚"},{"id":210300,"name":"皮奥伊"},{"id":210300,"name":"皮里港"},{"id":210300,"name":"皮钦查"},{"id":210300,"name":"皮特凯恩"},{"id":210300,"name":"皮特什蒂"},{"id":210300,"name":"皮瓦"},{"id":210300,"name":"皮乌拉"},{"id":210300,"name":"匹兹堡"},{"id":210300,"name":"平昌郡"},{"id":210300,"name":"平壤"},{"id":210300,"name":"平泽市"},{"id":210300,"name":"坡州市"},{"id":210300,"name":"珀斯"},{"id":210300,"name":"菩萨"},{"id":210300,"name":"葡萄牙"},{"id":210300,"name":"朴茨茅斯"},{"id":210300,"name":"浦项市"},{"id":210300,"name":"普埃布拉"},{"id":210300,"name":"普拉亚"},{"id":210300,"name":"普雷利"},{"id":210300,"name":"普雷绍夫"},{"id":210300,"name":"普雷斯顿"},{"id":210300,"name":"普里什蒂纳"},{"id":210300,"name":"普利茅斯"},{"id":210300,"name":"普利亚拉克斯"},{"id":210300,"name":"普罗夫迪夫"},{"id":210300,"name":"普罗维登斯"},{"id":210300,"name":"普罗沃"},{"id":210300,"name":"普洛耶什蒂"},{"id":210300,"name":"普诺"},{"id":210300,"name":"普热梅希尔"},{"id":210300,"name":"普斯科夫"},{"id":210300,"name":"普塔勒姆"},{"id":210300,"name":"普图马约"}]},{"Q":[{"id":210300,"name":"奇基穆拉"},{"id":210300,"name":"奇瓦瓦"},{"id":210300,"name":"乞力马扎罗"},{"id":210300,"name":"岂彻姆"},{"id":210300,"name":"恰纳卡莱"},{"id":210300,"name":"前杭爱"},{"id":210300,"name":"乔科"},{"id":210300,"name":"乔卢特卡"},{"id":210300,"name":"乔鲁姆"},{"id":210300,"name":"乔罗马"},{"id":210300,"name":"乔伊索"},{"id":210300,"name":"乔治"},{"id":210300,"name":"乔治亚"},{"id":210300,"name":"切博克萨雷"},{"id":210300,"name":"切尔克斯克"},{"id":210300,"name":"切哈努夫"},{"id":210300,"name":"切萨皮克"},{"id":210300,"name":"切斯特"},{"id":210300,"name":"切图马尔"},{"id":210300,"name":"钦邦"},{"id":210300,"name":"钦博拉索"},{"id":210300,"name":"钦博特"},{"id":210300,"name":"钦布"},{"id":210300,"name":"钦查阿尔塔"},{"id":210300,"name":"靑松郡"},{"id":210300,"name":"青阳郡"},{"id":210300,"name":"淸道郡"},{"id":210300,"name":"淸原郡"},{"id":210300,"name":"淸州市"},{"id":210300,"name":"清津"},{"id":210300,"name":"庆山市"},{"id":210300,"name":"庆州市"},{"id":210300,"name":"琼格拉德"},{"id":210300,"name":"琼塔莱斯"},{"id":210300,"name":"丘基萨卡"},{"id":210300,"name":"丘陵"},{"id":210300,"name":"秋明"},{"id":210300,"name":"求礼郡"},{"id":210300,"name":"屈塔希亚"},{"id":210300,"name":"全州市"}]},{"R":[{"id":210300,"name":"热那亚"},{"id":210300,"name":"热舒夫"},{"id":210300,"name":"仁保"},{"id":210300,"name":"任实郡"},{"id":210300,"name":"日本"},{"id":210300,"name":"日光海岸"},{"id":210300,"name":"日叻务"},{"id":210300,"name":"日里"},{"id":210300,"name":"日利纳"},{"id":210300,"name":"日内瓦"},{"id":210300,"name":"日惹特区"},{"id":210300,"name":"荣州市"},{"id":210300,"name":"汝拉"},{"id":210300,"name":"瑞典"},{"id":210300,"name":"瑞山市"},{"id":210300,"name":"瑞士"}]},{"S":[{"id":210300,"name":"撒马尔罕"},{"id":210300,"name":"萨班特"},{"id":210300,"name":"萨达"},{"id":210300,"name":"萨德伯里"},{"id":210300,"name":"萨尔茨堡"},{"id":210300,"name":"萨尔岛"},{"id":210300,"name":"萨尔蒂约"},{"id":210300,"name":"萨尔杜斯"},{"id":210300,"name":"萨尔塔"},{"id":210300,"name":"萨尔托"},{"id":210300,"name":"萨尔瓦多"},{"id":210300,"name":"萨吉诺"},{"id":210300,"name":"萨加玛塔"},{"id":210300,"name":"萨卡巴"},{"id":210300,"name":"萨卡里亚"},{"id":210300,"name":"萨卡帕"},{"id":210300,"name":"萨卡特卡斯"},{"id":210300,"name":"萨卡特佩克斯"},{"id":210300,"name":"萨拉戈萨"},{"id":210300,"name":"萨拉马卡"},{"id":210300,"name":"萨拉曼卡"},{"id":210300,"name":"萨拉热窝"},{"id":210300,"name":"萨拉托夫"},{"id":210300,"name":"萨莱诺"},{"id":210300,"name":"萨兰"},{"id":210300,"name":"萨兰斯克"},{"id":210300,"name":"萨列哈尔德"},{"id":210300,"name":"萨马拉"},{"id":210300,"name":"萨摩斯"},{"id":210300,"name":"萨摩亚"},{"id":210300,"name":"萨莫拉"},{"id":210300,"name":"萨莫拉－钦奇佩"},{"id":210300,"name":"萨姆松"},{"id":210300,"name":"萨那"},{"id":210300,"name":"萨萨里"},{"id":210300,"name":"萨桑德拉"},{"id":210300,"name":"萨斯卡通"},{"id":210300,"name":"萨索尔堡"},{"id":210300,"name":"萨图·马雷"},{"id":210300,"name":"萨图帕伊泰阿"},{"id":210300,"name":"萨瓦纳"},{"id":210300,"name":"萨瓦伊岛"},{"id":210300,"name":"萨维尼"},{"id":210300,"name":"萨沃纳"},{"id":210300,"name":"塞阿拉"},{"id":210300,"name":"塞蒂"},{"id":210300,"name":"塞蒂夫"},{"id":210300,"name":"塞尔维亚,黑山"},{"id":210300,"name":"塞尔希培"},{"id":210300,"name":"塞哥维亚"},{"id":210300,"name":"塞古"},{"id":210300,"name":"塞卡卡"},{"id":210300,"name":"塞拉利昂"},{"id":210300,"name":"塞拉亚"},{"id":210300,"name":"塞勒姆"},{"id":210300,"name":"塞罗拉尔戈"},{"id":210300,"name":"塞梅伊"},{"id":210300,"name":"塞内加尔"},{"id":210300,"name":"塞诺"},{"id":210300,"name":"塞浦路斯"},{"id":210300,"name":"塞萨尔"},{"id":210300,"name":"塞舌尔"},{"id":210300,"name":"塞图巴尔半岛"},{"id":210300,"name":"塞维利亚"},{"id":210300,"name":"赛宋本行政特区"},{"id":210300,"name":"赛文"},{"id":210300,"name":"赛伊达"},{"id":210300,"name":"三城区"},{"id":210300,"name":"三河城"},{"id":210300,"name":"三马拉汉"},{"id":210300,"name":"三十三人"},{"id":210300,"name":"三陟市"},{"id":210300,"name":"桑布卢"},{"id":210300,"name":"桑道恩"},{"id":210300,"name":"桑德贝"},{"id":210300,"name":"桑德兰"},{"id":210300,"name":"桑给巴尔"},{"id":210300,"name":"桑给巴尔北"},{"id":210300,"name":"桑给巴尔南"},{"id":210300,"name":"桑给巴尔市和西"},{"id":210300,"name":"桑吉"},{"id":210300,"name":"桑加-姆巴埃雷"},{"id":210300,"name":"桑马"},{"id":210300,"name":"桑马滕加"},{"id":210300,"name":"桑坦德"},{"id":210300,"name":"桑坦德"},{"id":210300,"name":"色贡"},{"id":210300,"name":"瑟克特夫卡尔"},{"id":210300,"name":"瑟孔达"},{"id":210300,"name":"森巴布莱"},{"id":210300,"name":"森伯尔布尔"},{"id":210300,"name":"森特勒利亚"},{"id":210300,"name":"森瓦利"},{"id":210300,"name":"沙白安南"},{"id":210300,"name":"沙夫豪森"},{"id":210300,"name":"沙赫京斯克"},{"id":210300,"name":"沙迦"},{"id":210300,"name":"沙拉湾"},{"id":210300,"name":"沙里院"},{"id":210300,"name":"沙隆"},{"id":210300,"name":"沙特阿拉伯"},{"id":210300,"name":"沙瓦纳"},{"id":210300,"name":"沙湾拿吉"},{"id":210300,"name":"沙耶武里"},{"id":210300,"name":"山打根"},{"id":210300,"name":"山地"},{"id":210300,"name":"山谷"},{"id":210300,"name":"山后"},{"id":210300,"name":"山淸郡"},{"id":210300,"name":"上阿连特茹"},{"id":210300,"name":"上奥地利"},{"id":210300,"name":"上奥果韦"},{"id":210300,"name":"上巴拉圭"},{"id":210300,"name":"上巴拉那"},{"id":210300,"name":"上德梅拉拉-伯比斯"},{"id":210300,"name":"上丁"},{"id":210300,"name":"上东部"},{"id":210300,"name":"上科托"},{"id":210300,"name":"上姆博穆"},{"id":210300,"name":"上尼罗"},{"id":210300,"name":"上塔库图-上埃塞奎博"},{"id":210300,"name":"上特拉斯山"},{"id":210300,"name":"上瓦尔登"},{"id":210300,"name":"上韦拉帕斯"},{"id":210300,"name":"上西部"},{"id":210300,"name":"尙州市"},{"id":210300,"name":"尚古古"},{"id":210300,"name":"绍莫吉"},{"id":210300,"name":"舍卜沃"},{"id":210300,"name":"舍布鲁克"},{"id":210300,"name":"舍基"},{"id":210300,"name":"圣阿本斯"},{"id":210300,"name":"圣埃斯皮里图"},{"id":210300,"name":"圣安德烈斯-普罗维登西亚"},{"id":210300,"name":"圣安德鲁斯"},{"id":210300,"name":"圣安东尼奥"},{"id":210300,"name":"圣安娜"},{"id":210300,"name":"圣安娜"},{"id":210300,"name":"圣安唐岛"},{"id":210300,"name":"圣巴巴拉"},{"id":210300,"name":"圣保罗"},{"id":210300,"name":"圣保罗"},{"id":210300,"name":"圣彼得堡"},{"id":210300,"name":"圣彼德斯堡市"},{"id":210300,"name":"圣诞岛"},{"id":210300,"name":"圣地亚哥"},{"id":210300,"name":"圣地亚哥-德尔埃斯特罗"},{"id":210300,"name":"圣地亚哥岛"},{"id":210300,"name":"圣迭戈"},{"id":210300,"name":"圣多美和普林西比"},{"id":210300,"name":"圣多明戈"},{"id":210300,"name":"圣菲"},{"id":210300,"name":"圣菲"},{"id":210300,"name":"圣菲利普"},{"id":210300,"name":"圣格奥尔基"},{"id":210300,"name":"圣海伦斯"},{"id":210300,"name":"圣何塞"},{"id":210300,"name":"圣何塞"},{"id":210300,"name":"圣何塞"},{"id":210300,"name":"圣赫勒拿"},{"id":210300,"name":"圣胡安"},{"id":210300,"name":"圣胡安河"},{"id":210300,"name":"圣基茨和尼维斯"},{"id":210300,"name":"圣加仑"},{"id":210300,"name":"圣卡塔琳娜"},{"id":210300,"name":"圣卡塔琳娜"},{"id":210300,"name":"圣卡塔琳娜"},{"id":210300,"name":"圣凯瑟琳"},{"id":210300,"name":"圣克鲁斯"},{"id":210300,"name":"圣克鲁斯"},{"id":210300,"name":"圣克鲁斯-德特内里费"},{"id":210300,"name":"圣拉斐尔"},{"id":210300,"name":"圣卢西亚"},{"id":210300,"name":"圣路易"},{"id":210300,"name":"圣路易斯"},{"id":210300,"name":"圣路易斯"},{"id":210300,"name":"圣路易斯波托亚"},{"id":210300,"name":"圣罗莎"},{"id":210300,"name":"圣罗莎"},{"id":210300,"name":"圣马丁"},{"id":210300,"name":"圣马科斯"},{"id":210300,"name":"圣马力诺"},{"id":210300,"name":"圣玛丽"},{"id":210300,"name":"圣米戈尔"},{"id":210300,"name":"圣米格尔"},{"id":210300,"name":"圣米格尔-德图库曼"},{"id":210300,"name":"圣尼古拉岛"},{"id":210300,"name":"圣尼古拉斯"},{"id":210300,"name":"圣佩德罗"},{"id":210300,"name":"圣皮埃尔和米克隆群岛"},{"id":210300,"name":"圣乔治"},{"id":210300,"name":"圣萨尔瓦多"},{"id":210300,"name":"圣托马斯"},{"id":210300,"name":"圣维森特"},{"id":210300,"name":"圣维森特岛"},{"id":210300,"name":"圣文森特和格林纳丁斯"},{"id":210300,"name":"圣伊丽莎白"},{"id":210300,"name":"圣约翰斯"},{"id":210300,"name":"圣詹姆斯"},{"id":210300,"name":"施蒂利亚"},{"id":210300,"name":"施维茨"},{"id":210300,"name":"什里夫波特"},{"id":210300,"name":"什切青"},{"id":210300,"name":"什未林"},{"id":210300,"name":"实皆省"},{"id":210300,"name":"实兆"},{"id":210300,"name":"史卡兹代尔"},{"id":210300,"name":"史密斯堡"},{"id":210300,"name":"始兴市"},{"id":210300,"name":"士麦那"},{"id":210300,"name":"寿城区"},{"id":210300,"name":"舒川郡"},{"id":210300,"name":"束草市"},{"id":210300,"name":"水原市"},{"id":210300,"name":"顺天市"},{"id":210300,"name":"斯波德涅波萨夫"},{"id":210300,"name":"斯波坎"},{"id":210300,"name":"斯德哥尔摩"},{"id":210300,"name":"斯多斯特姆"},{"id":210300,"name":"斯法克斯"},{"id":210300,"name":"斯海尔托亨博思"},{"id":210300,"name":"斯基克达"},{"id":210300,"name":"斯捷普诺戈尔斯克"},{"id":210300,"name":"斯凯尔涅维采"},{"id":210300,"name":"斯科耐"},{"id":210300,"name":"斯库台"},{"id":210300,"name":"斯拉蒂纳"},{"id":210300,"name":"斯莱戈"},{"id":210300,"name":"斯里阿曼"},{"id":210300,"name":"斯里兰卡"},{"id":210300,"name":"斯洛博齐亚"},{"id":210300,"name":"斯洛伐克"},{"id":210300,"name":"斯洛文尼亚"},{"id":210300,"name":"斯摩棱斯克"},{"id":210300,"name":"斯帕克斯"},{"id":210300,"name":"斯普林菲尔德"},{"id":210300,"name":"斯普林菲尔德"},{"id":210300,"name":"斯普林菲尔德"},{"id":210300,"name":"斯普林菲尔德"},{"id":210300,"name":"斯普林希尔"},{"id":210300,"name":"斯塔夫罗波尔"},{"id":210300,"name":"斯坦港"},{"id":210300,"name":"斯特拉特福德"},{"id":210300,"name":"斯特灵"},{"id":210300,"name":"斯图加特"},{"id":210300,"name":"斯瓦尔巴和扬马廷"},{"id":210300,"name":"斯旺西"},{"id":210300,"name":"斯威士兰"},{"id":210300,"name":"斯武普斯克"},{"id":210300,"name":"泗川市"},{"id":210300,"name":"泗里街"},{"id":210300,"name":"泗务"},{"id":210300,"name":"松索纳特"},{"id":210300,"name":"苏博蒂察"},{"id":210300,"name":"苏布拉开马"},{"id":210300,"name":"苏丹"},{"id":210300,"name":"苏尔汉河"},{"id":210300,"name":"苏福尔斯"},{"id":210300,"name":"苏克·阿赫拉斯"},{"id":210300,"name":"苏克雷"},{"id":210300,"name":"苏克雷"},{"id":210300,"name":"苏昆毕奥斯"},{"id":210300,"name":"苏拉纳"},{"id":210300,"name":"苏黎世"},{"id":210300,"name":"苏里南"},{"id":210300,"name":"苏利亚"},{"id":210300,"name":"苏卢克图"},{"id":210300,"name":"苏鲁"},{"id":210300,"name":"苏姆"},{"id":210300,"name":"苏姆盖特"},{"id":210300,"name":"苏奇特佩克斯"},{"id":210300,"name":"苏恰瓦"},{"id":210300,"name":"苏塞"},{"id":210300,"name":"苏圣玛丽"},{"id":210300,"name":"苏瓦乌基"},{"id":210300,"name":"苏韦达"},{"id":210300,"name":"宿务"},{"id":210300,"name":"所罗门群岛"},{"id":210300,"name":"索波特"},{"id":210300,"name":"索博尔奇-索特马尔-贝拉格"},{"id":210300,"name":"索尔斯堡"},{"id":210300,"name":"索非亚"},{"id":210300,"name":"索非亚市"},{"id":210300,"name":"索福特"},{"id":210300,"name":"索里亚"},{"id":210300,"name":"索里亚诺"},{"id":210300,"name":"索罗提"},{"id":210300,"name":"索洛拉"},{"id":210300,"name":"索洛图恩"},{"id":210300,"name":"索马里"},{"id":210300,"name":"索马里"},{"id":210300,"name":"索斯诺维茨"},{"id":210300,"name":"坦桑尼亚"},{"id":210300,"name":"汤加塔布"},{"id":210300,"name":"特维尔"}]},{"T":[{"id":210300,"name":"塔波拉"},{"id":210300,"name":"塔布克"},{"id":210300,"name":"塔尔努夫"},{"id":210300,"name":"塔尔萨"},{"id":210300,"name":"塔尔西"},{"id":210300,"name":"塔克纳"},{"id":210300,"name":"塔夸伦博"},{"id":210300,"name":"塔拉戈纳"},{"id":210300,"name":"塔拉哈西"},{"id":210300,"name":"塔兰托"},{"id":210300,"name":"塔里哈"},{"id":210300,"name":"塔梅加"},{"id":210300,"name":"塔纳河"},{"id":210300,"name":"塔什干市"},{"id":210300,"name":"塔什库梅尔"},{"id":210300,"name":"塔伊兹"},{"id":210300,"name":"塔朱拉区"},{"id":210300,"name":"太白市"},{"id":210300,"name":"太平"},{"id":210300,"name":"泰安郡"},{"id":210300,"name":"泰国"},{"id":210300,"name":"泰基尔达"},{"id":210300,"name":"泰莫图"},{"id":210300,"name":"泰塔塔维塔"},{"id":210300,"name":"泰塔温"},{"id":210300,"name":"潭阳郡"},{"id":210300,"name":"檀香山"},{"id":210300,"name":"坦巴昆达"},{"id":210300,"name":"坦波夫"},{"id":210300,"name":"坦噶"},{"id":210300,"name":"坦帕"},{"id":210300,"name":"坦佩雷"},{"id":210300,"name":"坦皮科"},{"id":210300,"name":"坦普"},{"id":210300,"name":"汤加"},{"id":210300,"name":"汤斯维尔"},{"id":210300,"name":"唐津郡"},{"id":210300,"name":"陶格夫皮尔斯"},{"id":210300,"name":"陶拉格"},{"id":210300,"name":"陶马鲁努伊"},{"id":210300,"name":"特贝萨"},{"id":210300,"name":"特尔戈维什泰"},{"id":210300,"name":"特尔古穆列什"},{"id":210300,"name":"特尔古日乌"},{"id":210300,"name":"特尔纳瓦"},{"id":210300,"name":"特尔希艾"},{"id":210300,"name":"特克斯和凯克特斯群岛"},{"id":210300,"name":"特克索波"},{"id":210300,"name":"特拉布宗"},{"id":210300,"name":"特拉帕尼"},{"id":210300,"name":"特拉斯卡拉"},{"id":210300,"name":"特拉维夫"},{"id":210300,"name":"特拉扎"},{"id":210300,"name":"特莱姆森"},{"id":210300,"name":"特兰斯-恩佐亚"},{"id":210300,"name":"特雷利乌"},{"id":210300,"name":"特里尔"},{"id":210300,"name":"特里凡得琅"},{"id":210300,"name":"特里洛尼"},{"id":210300,"name":"特里斯坦达昆哈"},{"id":210300,"name":"特立尼达和多巴哥"},{"id":210300,"name":"特隆普斯堡"},{"id":210300,"name":"特鲁埃尔"},{"id":210300,"name":"特鲁罗"},{"id":210300,"name":"特鲁希略"},{"id":210300,"name":"特伦钦"},{"id":210300,"name":"特伦特河畔斯多克"},{"id":210300,"name":"特伦托"},{"id":210300,"name":"特皮克"},{"id":210300,"name":"特切"},{"id":210300,"name":"特瓦坎"},{"id":210300,"name":"提格雷"},{"id":210300,"name":"提契诺"},{"id":210300,"name":"提亚雷特"},{"id":210300,"name":"天安市"},{"id":210300,"name":"跳羚"},{"id":210300,"name":"铁克利"},{"id":210300,"name":"铁米尔套"},{"id":210300,"name":"铁原郡"},{"id":210300,"name":"廷杜夫"},{"id":210300,"name":"亭可马里"},{"id":210300,"name":"通贝斯"},{"id":210300,"name":"通布图"},{"id":210300,"name":"通古拉瓦"},{"id":210300,"name":"通杰利"},{"id":210300,"name":"铜带"},{"id":210300,"name":"统营市"},{"id":210300,"name":"突厥斯坦"},{"id":210300,"name":"突尼斯"},{"id":210300,"name":"突尼斯"},{"id":210300,"name":"图阿马萨加"},{"id":210300,"name":"图阿马西拉"},{"id":210300,"name":"图尔高"},{"id":210300,"name":"图尔卡纳"},{"id":210300,"name":"图尔库"},{"id":210300,"name":"图尔恰"},{"id":210300,"name":"图尔孙扎德"},{"id":210300,"name":"图库马"},{"id":210300,"name":"图拉"},{"id":210300,"name":"图拉马哈谢"},{"id":210300,"name":"图利亚拉"},{"id":210300,"name":"图卢兹"},{"id":210300,"name":"图森"},{"id":210300,"name":"图斯特拉-古铁雷斯"},{"id":210300,"name":"图瓦卢"},{"id":210300,"name":"图文巴"},{"id":210300,"name":"图伊"},{"id":210300,"name":"图兹拉－波德里涅"},{"id":210300,"name":"土耳其"},{"id":210300,"name":"土库曼斯坦"},{"id":210300,"name":"托尔巴"},{"id":210300,"name":"托尔瑙"},{"id":210300,"name":"托霍延杜"},{"id":210300,"name":"托卡特"},{"id":210300,"name":"托坎廷斯"},{"id":210300,"name":"托克劳"},{"id":210300,"name":"托莱多"},{"id":210300,"name":"托莱多"},{"id":210300,"name":"托莱多"},{"id":210300,"name":"托雷翁"},{"id":210300,"name":"托利马"},{"id":210300,"name":"托卢卡"},{"id":210300,"name":"托伦"},{"id":210300,"name":"托罗罗"},{"id":210300,"name":"托木斯克"},{"id":210300,"name":"托皮卡"},{"id":210300,"name":"托托尼卡潘"}]},{"W":[{"id":210300,"name":"瓦奥福诺蒂"},{"id":210300,"name":"瓦德"},{"id":210300,"name":"瓦尔格拉"},{"id":210300,"name":"瓦尔加"},{"id":210300,"name":"瓦尔米耶拉"},{"id":210300,"name":"瓦尔纳"},{"id":210300,"name":"瓦尔帕莱索大区"},{"id":210300,"name":"瓦哈卡"},{"id":210300,"name":"瓦基索"},{"id":210300,"name":"瓦吉尔"},{"id":210300,"name":"瓦卡"},{"id":210300,"name":"瓦卡加"},{"id":210300,"name":"瓦卡塔尼"},{"id":210300,"name":"瓦莱"},{"id":210300,"name":"瓦朗斯"},{"id":210300,"name":"瓦利斯和福图纳"},{"id":210300,"name":"瓦姆"},{"id":210300,"name":"瓦姆-彭代"},{"id":210300,"name":"瓦尼卡"},{"id":210300,"name":"瓦努阿图"},{"id":210300,"name":"瓦努科"},{"id":210300,"name":"瓦萨"},{"id":210300,"name":"瓦斯卢伊"},{"id":210300,"name":"瓦瓦乌"},{"id":210300,"name":"瓦乌布日赫"},{"id":210300,"name":"瓦武尼亚"},{"id":210300,"name":"瓦辛基苏"},{"id":210300,"name":"瓦约茨·佐尔"},{"id":210300,"name":"外阿彭策尔"},{"id":210300,"name":"莞岛郡"},{"id":210300,"name":"万博"},{"id":210300,"name":"万丹"},{"id":210300,"name":"万福"},{"id":210300,"name":"万拉峇鲁"},{"id":210300,"name":"万塔"},{"id":210300,"name":"万象"},{"id":210300,"name":"旺阿雷"},{"id":210300,"name":"旺格努伊"},{"id":210300,"name":"危地马拉"},{"id":210300,"name":"危地马拉"},{"id":210300,"name":"威尔斯"},{"id":210300,"name":"威克洛"},{"id":210300,"name":"威拉"},{"id":210300,"name":"威明顿"},{"id":210300,"name":"威尼斯"},{"id":210300,"name":"威奇托"},{"id":210300,"name":"威热"},{"id":210300,"name":"威斯巴登"},{"id":210300,"name":"韦茨肖克"},{"id":210300,"name":"韦恩堡"},{"id":210300,"name":"韦尔"},{"id":210300,"name":"韦尔科姆"},{"id":210300,"name":"韦尔切利"},{"id":210300,"name":"韦尔瓦"},{"id":210300,"name":"韦克菲尔德"},{"id":210300,"name":"韦克斯福德"},{"id":210300,"name":"韦拉克鲁斯"},{"id":210300,"name":"韦莱-恩萨斯"},{"id":210300,"name":"韦梅"},{"id":210300,"name":"韦姆兰"},{"id":210300,"name":"韦斯卡"},{"id":210300,"name":"韦斯特波特"},{"id":210300,"name":"韦斯特利"},{"id":210300,"name":"韦韦特南戈"},{"id":210300,"name":"韦西加诺"},{"id":210300,"name":"韦希加"},{"id":210300,"name":"维堡"},{"id":210300,"name":"维查达"},{"id":210300,"name":"维多利亚"},{"id":210300,"name":"维多利亚"},{"id":210300,"name":"维多利亚城"},{"id":210300,"name":"维厄勒"},{"id":210300,"name":"维尔茨堡"},{"id":210300,"name":"维尔京群岛，美属"},{"id":210300,"name":"维尔京群岛，英属"},{"id":210300,"name":"维尔纽斯"},{"id":210300,"name":"维捷布斯克"},{"id":210300,"name":"维克克"},{"id":210300,"name":"维克斯堡"},{"id":210300,"name":"维克托港"},{"id":210300,"name":"维斯普雷姆"},{"id":210300,"name":"维索基纳"},{"id":210300,"name":"维泰博"},{"id":210300,"name":"维也纳"},{"id":210300,"name":"委内瑞拉"},{"id":210300,"name":"蔚珍郡"},{"id":210300,"name":"温彻斯特"},{"id":210300,"name":"温哥华"},{"id":210300,"name":"温尼伯"},{"id":210300,"name":"温莎"},{"id":210300,"name":"文茨皮尔斯"},{"id":210300,"name":"文冬"},{"id":210300,"name":"文莱"},{"id":210300,"name":"文索基特"},{"id":210300,"name":"闻庆市"},{"id":210300,"name":"翁贝拉-姆波科"},{"id":210300,"name":"沃"},{"id":210300,"name":"沃川郡"},{"id":210300,"name":"沃尔特"},{"id":210300,"name":"沃克拉"},{"id":210300,"name":"沃勒-恩特姆"},{"id":210300,"name":"沃伦"},{"id":210300,"name":"沃罗杜古"},{"id":210300,"name":"沃罗涅什"},{"id":210300,"name":"沃洛格达"},{"id":210300,"name":"沃姆扎"},{"id":210300,"name":"沃佩斯"},{"id":210300,"name":"沃其根"},{"id":210300,"name":"沃什"},{"id":210300,"name":"沃索"},{"id":210300,"name":"沃特伯里"},{"id":210300,"name":"沃特福德"},{"id":210300,"name":"沃威克"},{"id":210300,"name":"渥太华"},{"id":210300,"name":"乌埃"},{"id":210300,"name":"乌波卢岛"},{"id":210300,"name":"乌布里滕加"},{"id":210300,"name":"乌达兰"},{"id":210300,"name":"乌代布尔"},{"id":210300,"name":"乌得勒支"},{"id":210300,"name":"乌迪内"},{"id":210300,"name":"乌多姆赛"},{"id":210300,"name":"乌法"},{"id":210300,"name":"乌干达"},{"id":210300,"name":"乌季达"},{"id":210300,"name":"乌卡亚利"},{"id":210300,"name":"乌克兰"},{"id":210300,"name":"乌拉圭"},{"id":210300,"name":"乌拉秋别"},{"id":210300,"name":"乌兰乌德"},{"id":210300,"name":"乌里"},{"id":210300,"name":"乌里扬诺夫斯克"},{"id":210300,"name":"乌鲁"},{"id":210300,"name":"乌鲁阿潘"},{"id":210300,"name":"乌鲁冷岳"},{"id":210300,"name":"乌鲁雪兰莪"},{"id":210300,"name":"乌伦迪"},{"id":210300,"name":"乌姆布阿基"},{"id":210300,"name":"乌姆塔拉"},{"id":210300,"name":"乌姆塔塔"},{"id":210300,"name":"乌姆锡拉勒"},{"id":210300,"name":"乌纳－萨纳"},{"id":210300,"name":"乌普萨拉"},{"id":210300,"name":"乌萨克"},{"id":210300,"name":"乌山市"},{"id":210300,"name":"乌斯怀亚"},{"id":210300,"name":"乌斯季"},{"id":210300,"name":"乌斯季奥尔登斯基"},{"id":210300,"name":"乌苏卢坦"},{"id":210300,"name":"乌田纳"},{"id":210300,"name":"乌伊拉"},{"id":210300,"name":"乌兹别克斯坦"},{"id":210300,"name":"乌兹根"},{"id":210300,"name":"伍尔弗汉普顿"},{"id":210300,"name":"伍伦贡"},{"id":210300,"name":"伍斯特"},{"id":210300,"name":"伍斯特"},{"id":210300,"name":"伍斯特"},{"id":210300,"name":"勿述"}]},{"X":[{"id":210300,"name":"西岸"},{"id":210300,"name":"西班牙"},{"id":210300,"name":"西北"},{"id":210300,"name":"西北"},{"id":210300,"name":"西比陶"},{"id":210300,"name":"西波克特"},{"id":210300,"name":"西波斯尼亚"},{"id":210300,"name":"西博福特"},{"id":210300,"name":"西博滕"},{"id":210300,"name":"西部"},{"id":210300,"name":"西部"},{"id":210300,"name":"西部"},{"id":210300,"name":"西部"},{"id":210300,"name":"西部"},{"id":210300,"name":"西部高地"},{"id":210300,"name":"西部区"},{"id":210300,"name":"西迪贝勒阿贝斯"},{"id":210300,"name":"西迪布济德"},{"id":210300,"name":"西方"},{"id":210300,"name":"西佛兰德"},{"id":210300,"name":"西哈努克市"},{"id":210300,"name":"西哈萨克斯坦"},{"id":210300,"name":"西黑塞哥维那"},{"id":210300,"name":"西胡德"},{"id":210300,"name":"西隆"},{"id":210300,"name":"西马绍纳兰"},{"id":210300,"name":"西曼兰"},{"id":210300,"name":"西米斯"},{"id":210300,"name":"西摩兰"},{"id":210300,"name":"西南"},{"id":210300,"name":"西努沙登加拉"},{"id":210300,"name":"西诺尔兰"},{"id":210300,"name":"西帕里韦尼"},{"id":210300,"name":"西撒哈拉"},{"id":210300,"name":"西苏门答腊"},{"id":210300,"name":"西瓦利城"},{"id":210300,"name":"西希兰"},{"id":210300,"name":"西新不列颠"},{"id":210300,"name":"西雅图"},{"id":210300,"name":"西约特兰"},{"id":210300,"name":"西爪哇"},{"id":210300,"name":"希奥利艾"},{"id":210300,"name":"希博伊根"},{"id":210300,"name":"希赫尔"},{"id":210300,"name":"希拉克"},{"id":210300,"name":"希腊"},{"id":210300,"name":"希洛"},{"id":210300,"name":"希米亚诺维采"},{"id":210300,"name":"希诺特加"},{"id":210300,"name":"希维诺乌伊希切"},{"id":210300,"name":"希维托赫洛维采"},{"id":210300,"name":"昔加末"},{"id":210300,"name":"悉尼"},{"id":210300,"name":"锡比托凯"},{"id":210300,"name":"锡比乌"},{"id":210300,"name":"锡达拉皮兹"},{"id":210300,"name":"锡尔河"},{"id":210300,"name":"锡尔纳克"},{"id":210300,"name":"锡尔萨瓦"},{"id":210300,"name":"锡尔特"},{"id":210300,"name":"锡尔万"},{"id":210300,"name":"锡卡索"},{"id":210300,"name":"锡拉库扎"},{"id":210300,"name":"锡勒亚奈"},{"id":210300,"name":"锡龙科"},{"id":210300,"name":"锡诺"},{"id":210300,"name":"锡诺普"},{"id":210300,"name":"锡瓦斯"},{"id":210300,"name":"锡西里"},{"id":210300,"name":"锡耶纳"},{"id":210300,"name":"陜川郡"},{"id":210300,"name":"下阿连特茹"},{"id":210300,"name":"下奥地利"},{"id":210300,"name":"下伏日"},{"id":210300,"name":"下科托"},{"id":210300,"name":"下蒙德古"},{"id":210300,"name":"下诺夫哥罗德"},{"id":210300,"name":"下萨桑德拉"},{"id":210300,"name":"下瓦尔登"},{"id":210300,"name":"下韦拉帕斯"},{"id":210300,"name":"夏延"},{"id":210300,"name":"仙本那"},{"id":210300,"name":"暹粒"},{"id":210300,"name":"咸安郡"},{"id":210300,"name":"咸平郡"},{"id":210300,"name":"咸兴"},{"id":210300,"name":"咸阳郡"},{"id":210300,"name":"襄阳郡"},{"id":210300,"name":"小石城"},{"id":210300,"name":"泻湖"},{"id":210300,"name":"谢德尔采"},{"id":210300,"name":"谢法"},{"id":210300,"name":"谢菲尔德"},{"id":210300,"name":"谢拉兹"},{"id":210300,"name":"谢里登"},{"id":210300,"name":"谢里夫"},{"id":210300,"name":"谢普斯通港"},{"id":210300,"name":"辛吉达"},{"id":210300,"name":"辛辛那提"},{"id":210300,"name":"欣延加"},{"id":210300,"name":"新埃斯帕塔"},{"id":210300,"name":"新爱尔兰"},{"id":210300,"name":"新安郡"},{"id":210300,"name":"新奥尔良"},{"id":210300,"name":"新不列颠"},{"id":210300,"name":"新城"},{"id":210300,"name":"新德里"},{"id":210300,"name":"新加坡"},{"id":210300,"name":"新喀里多尼亚"},{"id":210300,"name":"新拉雷多"},{"id":210300,"name":"新普利茅斯"},{"id":210300,"name":"新塞哥维亚"},{"id":210300,"name":"新山"},{"id":210300,"name":"新松奇"},{"id":210300,"name":"新西伯利亚"},{"id":210300,"name":"新西兰"},{"id":210300,"name":"新义州"},{"id":210300,"name":"星州郡"},{"id":210300,"name":"匈牙利"},{"id":210300,"name":"休伦港"},{"id":210300,"name":"休尼克"},{"id":210300,"name":"休斯敦"},{"id":210300,"name":"叙利亚"}]},{"Y":[{"id":210300,"name":"牙买加"},{"id":210300,"name":"牙山市"},{"id":210300,"name":"雅典"},{"id":210300,"name":"雅加达"},{"id":210300,"name":"雅库茨克"},{"id":210300,"name":"雅罗斯拉夫尔"},{"id":210300,"name":"雅沃兹诺"},{"id":210300,"name":"雅西"},{"id":210300,"name":"亚的斯亚贝巴"},{"id":210300,"name":"亚丁"},{"id":210300,"name":"亚加"},{"id":210300,"name":"亚喀巴"},{"id":210300,"name":"亚克曼"},{"id":210300,"name":"亚拉奎"},{"id":210300,"name":"亚历山大"},{"id":210300,"name":"亚历山德里亚"},{"id":210300,"name":"亚厉山德里亚"},{"id":210300,"name":"亚罗牙也"},{"id":210300,"name":"亚马孙"},{"id":210300,"name":"亚马孙"},{"id":210300,"name":"亚马孙"},{"id":210300,"name":"亚马孙"},{"id":210300,"name":"亚美利加瀑布城"},{"id":210300,"name":"亚美尼亚"},{"id":210300,"name":"亚眠"},{"id":210300,"name":"亚南"},{"id":210300,"name":"亚齐"},{"id":210300,"name":"亚松森特别区"},{"id":210300,"name":"亚特兰大"},{"id":210300,"name":"亚滕加"},{"id":210300,"name":"延布"},{"id":210300,"name":"延雪平"},{"id":210300,"name":"盐湖城"},{"id":210300,"name":"燕岐郡"},{"id":210300,"name":"扬平郡"},{"id":210300,"name":"杨口郡"},{"id":210300,"name":"杨州市"},{"id":210300,"name":"仰光省"},{"id":210300,"name":"耶夫勒堡"},{"id":210300,"name":"耶莱尼亚古拉"},{"id":210300,"name":"耶路撒冷"},{"id":210300,"name":"耶洛奈夫"},{"id":210300,"name":"耶姆特兰"},{"id":210300,"name":"也门"},{"id":210300,"name":"野新"},{"id":210300,"name":"叶尔加瓦"},{"id":210300,"name":"叶卡捷林堡"},{"id":210300,"name":"伊奥巴"},{"id":210300,"name":"伊巴丹"},{"id":210300,"name":"伊卜"},{"id":210300,"name":"伊德利卜"},{"id":210300,"name":"伊迪尔"},{"id":210300,"name":"伊尔比德"},{"id":210300,"name":"伊尔库茨克"},{"id":210300,"name":"伊甘加"},{"id":210300,"name":"伊卡"},{"id":210300,"name":"伊魁特"},{"id":210300,"name":"伊拉克"},{"id":210300,"name":"伊拉克里翁"},{"id":210300,"name":"伊拉普阿托"},{"id":210300,"name":"伊朗"},{"id":210300,"name":"伊里安查亚"},{"id":210300,"name":"伊丽莎白港"},{"id":210300,"name":"伊利"},{"id":210300,"name":"伊利齐"},{"id":210300,"name":"伊林加"},{"id":210300,"name":"伊洛潘戈"},{"id":210300,"name":"伊洛瓦底省"},{"id":210300,"name":"伊切尔"},{"id":210300,"name":"伊热夫斯克"},{"id":210300,"name":"伊萨贝尔"},{"id":210300,"name":"伊萨瓦尔"},{"id":210300,"name":"伊塞尔尼亚"},{"id":210300,"name":"伊塞克湖"},{"id":210300,"name":"伊斯法拉"},{"id":210300,"name":"伊斯兰堡"},{"id":210300,"name":"伊斯帕尔塔"},{"id":210300,"name":"伊斯坦布尔"},{"id":210300,"name":"伊塔普亚"},{"id":210300,"name":"伊瓦涅斯将军的艾森大区"},{"id":210300,"name":"伊万诺沃"},{"id":210300,"name":"伊希约洛"},{"id":210300,"name":"伊兹密尔"},{"id":210300,"name":"仪旺市"},{"id":210300,"name":"宜宁郡"},{"id":210300,"name":"怡保"},{"id":210300,"name":"以色列"},{"id":210300,"name":"义城郡"},{"id":210300,"name":"议政府市"},{"id":210300,"name":"益山市"},{"id":210300,"name":"意大利"},{"id":210300,"name":"因巴布拉"},{"id":210300,"name":"因蒂布卡"},{"id":210300,"name":"因弗卡吉尔"},{"id":210300,"name":"因弗内斯"},{"id":210300,"name":"因帕尔"},{"id":210300,"name":"因希里"},{"id":210300,"name":"阴城郡"},{"id":210300,"name":"印第安纳波利斯"},{"id":210300,"name":"印度"},{"id":210300,"name":"印度尼西亚"},{"id":210300,"name":"印多尔"},{"id":210300,"name":"英国"},{"id":210300,"name":"英阳郡"},{"id":210300,"name":"英属印度洋领地"},{"id":210300,"name":"盈德郡"},{"id":210300,"name":"永贝"},{"id":210300,"name":"永川市"},{"id":210300,"name":"永同郡"},{"id":210300,"name":"优玛"},{"id":210300,"name":"尤金"},{"id":210300,"name":"郁陵郡"},{"id":210300,"name":"元山"},{"id":210300,"name":"原州市"},{"id":210300,"name":"约旦"},{"id":210300,"name":"约恩苏"},{"id":210300,"name":"约翰内斯堡"},{"id":210300,"name":"约翰逊城"},{"id":210300,"name":"约克"},{"id":210300,"name":"约罗"},{"id":210300,"name":"约什卡尔奥拉"},{"id":210300,"name":"约兹加特"},{"id":210300,"name":"越南"}]},{"Z":[{"id":210300,"name":"查尔斯顿"},{"id":210300,"name":"云冰"},{"id":210300,"name":"宰格万"},{"id":210300,"name":"赞比亚"},{"id":210300,"name":"赞赞"},{"id":210300,"name":"泽蒙"},{"id":210300,"name":"泽尼察－多博伊"},{"id":210300,"name":"泽西城"},{"id":210300,"name":"泽西岛"},{"id":210300,"name":"曾坪郡"},{"id":210300,"name":"扎布热"},{"id":210300,"name":"扎尔卡"},{"id":210300,"name":"扎勒乌"},{"id":210300,"name":"扎玛尔"},{"id":210300,"name":"扎莫希奇"},{"id":210300,"name":"扎纳奥津"},{"id":210300,"name":"扎萨夫"},{"id":210300,"name":"扎伊尔"},{"id":210300,"name":"乍得"},{"id":210300,"name":"斋普尔"},{"id":210300,"name":"占巴塞"},{"id":210300,"name":"占碑"},{"id":210300,"name":"占贾"},{"id":210300,"name":"珍岛郡"},{"id":210300,"name":"鎭安郡"},{"id":210300,"name":"鎭川郡"},{"id":210300,"name":"鎭海市"},{"id":210300,"name":"芝加哥"},{"id":210300,"name":"直布罗陀"},{"id":210300,"name":"智利"},{"id":210300,"name":"中阿连特茹"},{"id":210300,"name":"中奥果韦"},{"id":210300,"name":"中波斯尼亚"},{"id":210300,"name":"中部"},{"id":210300,"name":"中部"},{"id":210300,"name":"中部"},{"id":210300,"name":"中部"},{"id":210300,"name":"中部地区"},{"id":210300,"name":"中部区"},{"id":210300,"name":"中部群岛"},{"id":210300,"name":"中非共和国"},{"id":210300,"name":"中加里曼丹"},{"id":210300,"name":"中捷克"},{"id":210300,"name":"中卡瓦利"},{"id":210300,"name":"中科莫埃"},{"id":210300,"name":"中马绍纳兰"},{"id":210300,"name":"中南"},{"id":210300,"name":"中苏拉威西"},{"id":210300,"name":"中央"},{"id":210300,"name":"中央"},{"id":210300,"name":"中央"},{"id":210300,"name":"中央"},{"id":210300,"name":"中央区"},{"id":210300,"name":"中爪哇"},{"id":210300,"name":"忠州市"},{"id":210300,"name":"朱拜勒"},{"id":210300,"name":"朱迈利耶"},{"id":210300,"name":"兹林"},{"id":210300,"name":"兹沃勒"},{"id":210300,"name":"宗德韦奥戈"},{"id":210300,"name":"宗多马"},{"id":210300,"name":"宗古尔达克"},{"id":210300,"name":"祖"},{"id":210300,"name":"佐法尔省"},{"id":210300,"name":"佐洛"},{"id":210300,"name":"佐特尔梅"}]}];_this.state={list:_this.cityArr1,index:1,locate:'正在定位',title:'定位',isSearch:false,searchList:[],searchText:'请输入中文/拼音/首字母来查询'};_this.tags=["A",'B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S',"T",'U','V','W','X','Y','Z','#'];return _this;}_createClass(City,[{key:'componentWillMount',value:function componentWillMount(){var _this2=this;_config2.default.native("locate").then(function(res){_this2.setState({locate:res.data.city});});setTimeout(function(){if(_this2.state.locate=="正在定位"){_this2.setState({locate:'定位失败'});}},1000*10);}},{key:'select',value:function select(item){this.props.selectCallback(item);}},{key:'renderItem',value:function renderItem(item){var _this3=this;var html=[];for(var key in item){html.push(_react2.default.createElement('div',{className:'city-list',__self:this},_react2.default.createElement('a',{className:'sta',id:'H1',name:key,__self:this},key),_react2.default.createElement('div',{__self:this},item[key].map(function(it){return _react2.default.createElement('p',{'data-id':it.id,onClick:_this3.select.bind(_this3,it),__self:_this3},it.name);}))));}return _react2.default.createElement('div',{__self:this},html.map(function(tmp){return tmp;}));}},{key:'tab',value:function tab(index){if(index==1){this.setState({list:this.cityArr1,index:index});}else{this.setState({list:this.cityArr2,index:index});}}},{key:'selectLocate',value:function selectLocate(){if(this.state.locate!="正在定位"&&this.state.locate!="定位失败"){this.props.selectCallback({name:this.state.locate,id:0});}}},{key:'onScroll',value:function onScroll(e,view){var _this4=this;console.log(arguments);var elem=document.getElementById('cityContainer');var sta=document.getElementsByClassName('sta');var mt=document.getElementsByClassName('topbanner')[0].clientHeight;console.log(elem.scrollTop);if(elem.scrollTop<60){this.setState({title:"定位"});}[].forEach.call(sta,function(item,index){var top=item.offsetTop-mt;if(top<=elem.scrollTop){_this4.setState({title:item.innerHTML});}});}},{key:'jump',value:function jump(key,e){var elem=document.getElementById('cityContainer');var sta=document.getElementsByClassName('sta');this.setState({title:key});var mt=document.getElementsByClassName('topbanner')[0].clientHeight;[].forEach.call(sta,function(item,index){if(item.innerHTML==key){var top=item.offsetTop-mt+24;elem.scrollTop=top;}});if(key=="#"){elem.scrollTop=0;this.setState({title:"定位"});}}},{key:'onFocus',value:function onFocus(){this.setState({isSearch:true,searchText:'请输入中文/拼音/首字母来查询'});}},{key:'cancel',value:function cancel(){this.setState({isSearch:false,searchText:'请输入中文/拼音/首字母来查询',searchList:[]});this.refs.search.value='';}},{key:'change',value:function change(){var _this5=this;var key=this.refs.search.value;if(_config2.default.trim(key)!=""){this.setState({searchText:'正在搜索...'});_config2.default.ajax('search',{method:'post',body:JSON.stringify({name:key,type:this.state.index-1})}).then(function(res){if(res.status==200){if(res.result&&res.result.length>0){_this5.setState({searchList:res.result,searchText:''});}else{_this5.setState({searchText:'抱歉，搜索的结果为空！'});}}else{_this5.setState({searchText:"抱歉，搜索出错！状态码："+res.status});}});}}},{key:'render',value:function render(){var _this6=this;return _react2.default.createElement('div',{className:'cityContainer',id:'cityContainer',onScroll:this.onScroll.bind(this),__self:this},_react2.default.createElement('div',{className:'topbanner',__self:this},_react2.default.createElement('div',{className:'search',__self:this},_react2.default.createElement('i',{className:'iconfont icon-sousuo',__self:this}),_react2.default.createElement('div',{id:'searchs',__self:this},_react2.default.createElement('input',{type:'text',placeholder:'中文/拼音/首字母',ref:'search',maxlength:'15',onChange:this.change.bind(this),onClick:this.onFocus.bind(this),__self:this})),this.state.isSearch?_react2.default.createElement('a',{href:'javascript:;',className:'cancel-search',onClick:this.cancel.bind(this),__self:this},'| 取消'):undefined),_react2.default.createElement('div',{className:'tab cl',__self:this},_react2.default.createElement('a',{href:'javascript:;',className:this.state.index==1?"curr":undefined,onClick:this.tab.bind(this,1),__self:this},'国内'),_react2.default.createElement('a',{href:'javascript:;',className:this.state.index==2?"curr":undefined,onClick:this.tab.bind(this,2),__self:this},'国际'),_react2.default.createElement('div',{className:'now-letter',__self:this},this.state.title))),_react2.default.createElement('div',{className:'city-list mg-top',__self:this},_react2.default.createElement('div',{className:'dw',__self:this},_react2.default.createElement('p',{id:'dw',className:'loading',onClick:this.selectLocate.bind(this),__self:this},this.state.locate))),_react2.default.createElement('div',{className:'container',__self:this},this.state.list.map(function(item){return _react2.default.createElement('div',{__self:_this6},_this6.renderItem(item));}),_react2.default.createElement('div',{className:'letter',id:'letter',__self:this},_react2.default.createElement('ul',{__self:this},this.tags.map(function(item){return _react2.default.createElement('li',{__self:_this6},_react2.default.createElement('a',{onClick:_this6.jump.bind(_this6,item),__self:_this6},item));})))),this.state.isSearch?_react2.default.createElement('div',{className:'searchList',__self:this},this.state.searchText?_react2.default.createElement('div',{className:'searchText',__self:this},this.state.searchText):undefined,this.state.searchList.map(function(it){return _react2.default.createElement('div',{className:'item',onClick:_this6.select.bind(_this6,it),__self:_this6},it.name);})):undefined);}}]);return City;}(Component);exports.default=City;

/***/ },

/***/ 271:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactHelmet = __webpack_require__(233);

	var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

	var _Caigou = __webpack_require__(272);

	var _Caigou2 = _interopRequireDefault(_Caigou);

	var _Expense = __webpack_require__(274);

	var _Expense2 = _interopRequireDefault(_Expense);

	var _Generic = __webpack_require__(276);

	var _Generic2 = _interopRequireDefault(_Generic);

	var _Leave = __webpack_require__(277);

	var _Leave2 = _interopRequireDefault(_Leave);

	var _reactCookie = __webpack_require__(253);

	var _reactCookie2 = _interopRequireDefault(_reactCookie);

	var _config = __webpack_require__(243);

	var _config2 = _interopRequireDefault(_config);

	var _UserAvatar = __webpack_require__(265);

	var _UserAvatar2 = _interopRequireDefault(_UserAvatar);

	var _Off = __webpack_require__(278);

	var _Off2 = _interopRequireDefault(_Off);

	var _GoOut = __webpack_require__(279);

	var _GoOut2 = _interopRequireDefault(_GoOut);

	var _Travel = __webpack_require__(280);

	var _Travel2 = _interopRequireDefault(_Travel);

	var _Dialog = __webpack_require__(256);

	var _Dialog2 = _interopRequireDefault(_Dialog);

	var _alert = __webpack_require__(261);

	var _alert2 = _interopRequireDefault(_alert);

	var _confirm = __webpack_require__(260);

	var _confirm2 = _interopRequireDefault(_confirm);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Component = _react2.default.Component;

	var Detail = function (_Component) {
		_inherits(Detail, _Component);

		function Detail(props) {
			_classCallCheck(this, Detail);

			var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(Detail).call(this, props));

			_this2.status = {
				isLast: 0, //0非最后,1是最后
				isMeToDeal: false, //test txb false   //0是未完成，1是完成
				id: 0,
				isEnd: false };
			// cookie.save('userId','924064')
			_this2.state = { detail: { approveDetailVo: [], customStruct: {} }, customStruct: { detailJArr: [] }, userInfo: {}, extraknower: [], approveDesc: null, isFromme: false, dialog: 0 };
			return _this2;
		}

		_createClass(Detail, [{
			key: 'componentWillMount',
			value: function componentWillMount() {
				console.log('will');
				this.init();
			}
		}, {
			key: 'init',
			value: function init() {
				var _this3 = this;

				var param = {};
				var _this = this;
				param.applyId = this.props.params.id;
				_config2.default.ajax('queryApplyDetail', {
					method: 'POST',
					body: JSON.stringify(param)
				}).then(function (res) {
					if (res.status == 200) {
						console.log('ajax');
						var _data = res.result;
						var isFromme = false;
						if (_data.approveDetailVo.length && _data.approveDetailVo[0].uid == _reactCookie2.default.load('userId')) {
							isFromme = true;
						}
						_this.setState({ userInfo: {
								"uid": res.result.uid,
								"name": res.result.uname,
								"avatar": res.result.avatar
							}, detail: res.result, isFromme: isFromme });
					} else {
						(0, _alert2.default)("失败！状态码：" + data.status + " " + data.msg, _this3);
					}
				});
				//获取知会人
				_config2.default.ajax('zhrList', {
					method: 'POST',
					body: JSON.stringify(param)
				}).then(function (res) {
					if (res.status == 200) {
						console.log(res.result);
						_this.setState({
							"extraknower": res.result
						});
						console.log('doing...');
					} else {
						(0, _alert2.default)("失败！状态码：" + data.status + " " + data.msg, _this3);
					}
				});
			}
		}, {
			key: 'renderDetail',
			value: function renderDetail() {
				var category = this.props.params.type;
				switch (parseInt(category)) {
					case 0:
						{
							//请假
							return _react2.default.createElement(_Leave2.default, { key: category, ref: 'myForm', detail: this.state.detail, stage: this, __self: this
							});
							break;
						}
					case 1:
						{
							//外出
							return _react2.default.createElement(_GoOut2.default, { key: category, ref: 'myForm', detail: this.state.detail, stage: this, __self: this
							});
							break;
						}
					case 2:
						{
							//出差
							return _react2.default.createElement(_Travel2.default, { key: category, ref: 'myForm', detail: this.state.detail, stage: this, __self: this
							});
							break;
						}
					case 3:
						{
							//请假
							return _react2.default.createElement(_Off2.default, { key: category, ref: 'myForm', detail: this.state.detail, stage: this, __self: this
							});
							break;
						}
					case 5:
						{
							//采购
							return _react2.default.createElement(_Caigou2.default, { key: category, ref: 'myForm', detail: this.state.detail, stage: this, __self: this
							});
							break;
						}
					case 4:
						{
							//报销
							return _react2.default.createElement(_Expense2.default, { key: category, ref: 'myForm', detail: this.state.detail, stage: this, __self: this
							});
							break;
						}
					case 6:
						{
							//通用
							return _react2.default.createElement(_Generic2.default, { key: category, ref: 'myForm', detail: this.state.detail, stage: this, __self: this
							});
							break;
						}
				}
			}
		}, {
			key: 'renderStatus',
			value: function renderStatus(status) {
				var proveStatus = {
					"0": "fqsq",
					"1": "spz",
					"2": "spty",
					"3": "spjj",
					"4": "ych",
					"5": "wsp"
				};
				var proveStatusText = {
					"0": "发起申请",
					"1": "审批中",
					"2": "审批同意",
					"3": "审批拒绝",
					"4": "已撤回",
					"5": "未审批"
				};
				var proveStatusIcon = {
					"0": "101",
					"1": "105",
					"2": "102",
					"3": "103",
					"4": "106",
					"5": "104"
				};
				return _react2.default.createElement(
					'div',
					{ className: "state " + proveStatus[status.toString()], __self: this
					},
					_react2.default.createElement('i', { className: "iconfont icon-" + proveStatusIcon[status.toString()], __self: this
					}),
					proveStatusText[status.toString()]
				);
			}
		}, {
			key: 'cancel',
			value: function cancel() {
				this.setState({ approveDesc: null, dialog: 0 });
			}
		}, {
			key: 'ok',
			value: function ok(approveStatus) {
				this.state.approveDesc = document.getElementById('approveDesc').value;
				/*if(Config.trim(this.state.approveDesc)==''){
	   	return false;
	   }*/
				this.setState({ approveDesc: this.state.approveDesc, dialog: 0 });
				this.submit(approveStatus);
			}
		}, {
			key: 'submit',
			value: function submit(approveStatus) {
				var _this4 = this;

				console.log(approveStatus);
				var params = {};
				params.ts = +new Date();
				params.token = _reactCookie2.default.load('token');
				params.applyId = this.props.params.id;
				params.orgId = _reactCookie2.default.load('orgId');
				params.uid = _reactCookie2.default.load('uid');
				params.approveStatus = approveStatus;
				params.approveOrder = this.status.approveOrder;
				params.isLast = this.status.isLast;
				params.approveDesc = this.state.approveDesc;
				params.id = this.status.id;
				if (approveStatus == -1) {
					console.log('重新申请');
					_config2.default.dadian('approval_specifications_reissue_click', '审批详情页点击“重新发起”按钮');
					location.href = "#create/" + this.props.params.type + "/" + this.props.params.title + "/" + this.props.params.id;
					return false;
				}
				if (approveStatus == 2 && this.state.approveDesc === null) {
					//同意
					this.setState({
						dialog: {
							show: true,
							mask: true,
							msg: _react2.default.createElement(
								'div',
								{
									__self: this
								},
								_react2.default.createElement(
									'h2',
									{
										__self: this
									},
									'同意审批'
								),
								_react2.default.createElement('textarea', { placeholder: '请填写同意原因(选填)', id: 'approveDesc', maxLength: '20', __self: this
								})
							),
							buttons: _react2.default.createElement(
								'div',
								{ className: 'dialog-button', __self: this
								},
								_react2.default.createElement(
									'a',
									{ onClick: this.cancel.bind(this), __self: this
									},
									'取消'
								),
								_react2.default.createElement(
									'a',
									{ onClick: this.ok.bind(this, approveStatus), __self: this
									},
									'确定'
								)
							),
							type: "confirm"
						}
					});
					return false;
				}
				if (approveStatus == 3 && this.state.approveDesc === null) {
					//拒绝
					this.setState({
						dialog: {
							show: true,
							mask: true,
							msg: _react2.default.createElement(
								'div',
								{
									__self: this
								},
								_react2.default.createElement(
									'h2',
									{
										__self: this
									},
									'拒绝审批'
								),
								_react2.default.createElement('textarea', { placeholder: '请填写拒绝原因(选填)', id: 'approveDesc', maxLength: '20', __self: this
								})
							),
							buttons: _react2.default.createElement(
								'div',
								{ className: 'dialog-button', __self: this
								},
								_react2.default.createElement(
									'a',
									{ onClick: this.cancel.bind(this), __self: this
									},
									'取消'
								),
								_react2.default.createElement(
									'a',
									{ onClick: this.ok.bind(this, approveStatus), __self: this
									},
									'确定'
								)
							),
							type: "confirm"
						}
					});
					return false;
				}
				var _self = this;
				if (approveStatus == 4) {
					(0, _confirm2.default)("您确定要撤销申请吗？", _self, function () {
						//撤回
						_config2.default.ajax('retract', {
							method: 'POST',
							body: JSON.stringify(params)
						}).then(function (data) {
							_self.setState({ dialog: 0 });
							if (data.status == 200) {
								_self.init();
							} else if (data.status == 731) {
								(0, _alert2.default)("该条审批已同意或已拒绝", _self);
								_self.init();
							} else if (data.status == 732) {
								(0, _alert2.default)("该条申请已撤回", _self);
								_self.init();
							} else {
								(0, _alert2.default)("操作失败！状态码：" + data.status, _self);
							}
						});
						_config2.default.dadian('approval_specifications_recall_click', '审批详情页点击“撤回”按钮');
					});
					return;
				}
				this.setState({ approveDesc: null });
				_config2.default.ajax('update', {
					method: 'POST',
					body: JSON.stringify(params)
				}).then(function (data) {
					if (data.status == 200) {
						_this4.init();
					} else if (data.status == 731) {
						(0, _alert2.default)("该审批已同意或已拒绝", _this4);
						_self.init();
					} else if (data.status == 732) {
						(0, _alert2.default)("该申请已撤回", _this4);
						_self.init();
					} else {
						(0, _alert2.default)("操作失败！状态码：" + data.status, _this4);
					}
				});
			}
		}, {
			key: 'renderButton',
			value: function renderButton() {
				var data = this.state.detail;
				var isNeedReApply = false; //是否需要重新申请
				var isFromme = this.props.params.pageType == "fromme" ? true : false;
				var uid = _reactCookie2.default.load('userId');
				this.status.isMeToDeal = false;
				if (data.approveStatus == "2" || data.approveStatus == "3" || data.approveStatus == "4") {
					this.status.isEnd = true;
				}
				if (data.approveDetailVo.length && data.approveDetailVo[0].uid == uid) {
					isFromme = true;
				} else {
					isFromme = false;
				}
				for (var i = 0, l = data.approveDetailVo.length; i < l; i++) {
					var d = data.approveDetailVo[i];
					if (data.uid == uid && data.approveStatus == "3") {
						isNeedReApply = true;
					}

					//记录当前正在审批中的顺序
					if (d.approveStatus == 1) {
						this.status.approveOrder = d.approveOrder;
					}

					//判断审批中是否是最后的审批
					if (d.approveStatus == 1 && d.approveOrder == data.approveDetailVo.length - 1) {
						this.status.isLast = 1;
					}
					//获取id
					if (uid == d.uid) {
						this.status.id = d.id;
					}
					if (uid == d.uid && d.approveStatus == 1) {
						this.status.isMeToDeal = true;
					}
					// 审批拒绝后就跳出循环
					if (d.approveStatus == 3) {
						break;
					}
				};
				var status = this.status;
				// 底部按钮显示控制
				if (isFromme && this.props.params.pageType == "fromme") {
					//我发起的
					if (!status.isEnd) {
						return _react2.default.createElement(
							'a',
							{ className: 'bottomBtn', onClick: this.submit.bind(this, 4), __self: this
							},
							'撤回'
						);
					}
				} else
					//待我审批
					if (status.isMeToDeal) {
						return _react2.default.createElement(
							'div',
							{ className: 'two', __self: this
							},
							_react2.default.createElement(
								'a',
								{ className: 'bottomBtn jj', onClick: this.submit.bind(this, 3), __self: this
								},
								'拒绝'
							),
							_react2.default.createElement(
								'a',
								{ className: 'bottomBtn', onClick: this.submit.bind(this, 2), __self: this
								},
								'同意'
							)
						);
					}
				// 是否显示重新申请
				if (isNeedReApply) {
					return _react2.default.createElement(
						'a',
						{ className: 'bottomBtn', onClick: this.submit.bind(this, -1), __self: this
						},
						'重新申请'
					);
				}
			}
		}, {
			key: 'fqsx',
			value: function fqsx(item) {
				item.content = this.state.detail.uname + "请您审批他的" + _config2.default.applyType[this.props.params.type] + "申请";
				_config2.default.native('fqsx', item);
			}
		}, {
			key: 'renderDialog',
			value: function renderDialog() {
				console.log(this.state.dialog);
				return _react2.default.createElement(_Dialog2.default, _extends({ stage: this }, this.state.dialog, {
					__self: this
				}));
			}
		}, {
			key: 'render',
			value: function render() {
				var _this5 = this;

				/*"1": "进行中",
	   "2": "已完成",
	   "3": "已完成",
	   "4": "已撤回",
	   "5": "进行中"*/
				console.log(this.state.isFromme);
				return _react2.default.createElement(
					'div',
					{ className: 'detail-info', __self: this
					},
					_react2.default.createElement(_reactHelmet2.default, { title: _config2.default.applyType[this.props.params.type] + "详情", __self: this
					}),
					_react2.default.createElement(
						'div',
						{ className: 'box userInfo', __self: this
						},
						_react2.default.createElement(
							'h3',
							{
								__self: this
							},
							_react2.default.createElement(
								'span',
								{ className: 'userAvatar', __self: this
								},
								this.state.userInfo.uid ? _react2.default.createElement(_UserAvatar2.default, { item: this.state.userInfo, errorCallback: function errorCallback() {
										_this5.setState({ userInfo: _this5.state.userInfo });
									}, __self: this
								}) : undefined
							),
							_react2.default.createElement(
								'span',
								{ className: 'uname', __self: this
								},
								this.state.detail.uname
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'detail-row', __self: this
							},
							_react2.default.createElement(
								'label',
								{
									__self: this
								},
								'所在部门：'
							),
							_react2.default.createElement(
								'span',
								{
									__self: this
								},
								_config2.default.isNullShowText(this.state.detail.deptName)
							)
						),
						this.renderDetail()
					),
					_react2.default.createElement(
						'div',
						{ className: 'statusIcon', __self: this
						},
						this.state.detail.approveStatus == 3 ? _react2.default.createElement('i', { className: 'iconfont icon-tuzhang02 iconjj', __self: this
						}) : undefined,
						this.state.detail.approveStatus == 2 ? _react2.default.createElement('i', { className: 'iconfont icon-weibiaoti201 icontg', __self: this
						}) : undefined,
						this.state.detail.approveStatus == 4 ? _react2.default.createElement('i', { className: 'iconfont icon-tuzhang03 iconch', __self: this
						}) : undefined
					),
					_react2.default.createElement(
						'h4',
						{
							__self: this
						},
						'审批流程'
					),
					_react2.default.createElement(
						'div',
						{ className: 'box process', __self: this
						},
						_react2.default.createElement('div', { className: 'line', __self: this
						}),
						(this.state.detail.approveDetailVo || []).map(function (item) {
							item.name = item.name || item.uname;
							return _react2.default.createElement(
								'div',
								{ className: 'item', __self: _this5
								},
								_this5.renderStatus(item.approveStatus),
								_react2.default.createElement(
									'div',
									{ className: 'user-box', __self: _this5
									},
									_react2.default.createElement(_UserAvatar2.default, { item: item, errorCallback: function errorCallback() {
											_this5.setState({ detail: _this5.state.detail });
										}, __self: _this5
									}),
									_react2.default.createElement(
										'div',
										{ className: 'userName', __self: _this5
										},
										_react2.default.createElement(
											'div',
											{ className: 'name', __self: _this5
											},
											item.uid == _reactCookie2.default.load('userId') ? "我" : item.uname
										),
										_react2.default.createElement(
											'div',
											{ className: 'time', __self: _this5
											},
											' ',
											item.approveDate.substr(0, 4) == "0000" || item.approveStatus == 1 ? "" : item.approveDate
										),
										item.approveStatus == 1 && _this5.state.isFromme ? _react2.default.createElement(
											'span',
											{ className: 'fqsx', onClick: _this5.fqsx.bind(_this5, item), __self: _this5
											},
											'发事项'
										) : undefined
									),
									item.approveDesc ? _react2.default.createElement(
										'div',
										{ className: 'approveDesc', __self: _this5
										},
										item.approveStatus == 3 ? "拒绝理由：" : "同意理由：",
										item.approveDesc
									) : undefined
								)
							);
						})
					),
					this.state.extraknower.length > 0 ? _react2.default.createElement(
						'div',
						{ className: 'box zhr', __self: this
						},
						_react2.default.createElement(
							'h2',
							{
								__self: this
							},
							'知会人'
						),
						_react2.default.createElement(
							'div',
							{ className: 'zhr-list', __self: this
							},
							function () {
								var arr = (_this5.state.extraknower || []).map(function (item) {
									return item.name;
								});
								return arr.join('、');
							}()
						)
					) : undefined,
					this.renderButton(),
					this.state.dialog ? this.renderDialog() : undefined
				);
			}
		}]);

		return Detail;
	}(Component);

	exports.default = Detail;

/***/ },

/***/ 272:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _CaigouDetail = __webpack_require__(273);

	var _CaigouDetail2 = _interopRequireDefault(_CaigouDetail);

	var _config = __webpack_require__(243);

	var _config2 = _interopRequireDefault(_config);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Component = _react2.default.Component;

	var Caigou = function (_Component) {
		_inherits(Caigou, _Component);

		function Caigou(props) {
			_classCallCheck(this, Caigou);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(Caigou).call(this, props));
		}

		_createClass(Caigou, [{
			key: 'showImage',
			value: function showImage(index) {
				var imgArr = (this.props.detail.photos || []).map(function (item) {
					return item.photo_url;
				});
				_config2.default.native('showImage', {
					position: index,
					picsArr: imgArr
				});
			}
		}, {
			key: 'render',
			value: function render() {
				var _this2 = this;

				var customJObj = this.props.detail.customJObj;
				if (customJObj) {
					customJObj = JSON.parse(customJObj);
				} else {
					customJObj = {};
				}
				return _react2.default.createElement(
					'div',
					{
						__self: this
					},
					_react2.default.createElement(
						'div',
						{ className: 'detail-row', __self: this
						},
						_react2.default.createElement(
							'label',
							{
								__self: this
							},
							'采购事由：'
						),
						_react2.default.createElement(
							'span',
							{
								__self: this
							},
							_config2.default.isNullShowText(this.props.detail.applyResean)
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'detail-row', __self: this
						},
						_react2.default.createElement(
							'label',
							{
								__self: this
							},
							'期望交付日期：'
						),
						_react2.default.createElement(
							'span',
							{
								__self: this
							},
							customJObj.expectPayDate
						)
					),
					_react2.default.createElement('div', { className: 'topborder', __self: this
					}),
					(customJObj.detailJArr || []).map(function (item, index) {
						var indx = index + 1;
						return _react2.default.createElement(_CaigouDetail2.default, { detail: customJObj.detailJArr, ref: "caigouDetail" + index, index: indx, item: item, key: index, __self: _this2
						});
					}),
					_react2.default.createElement('div', { className: 'topborder', __self: this
					}),
					_react2.default.createElement(
						'div',
						{ className: 'detail-row sum-price', __self: this
						},
						_react2.default.createElement(
							'label',
							{
								__self: this
							},
							'总价（元）：'
						),
						_react2.default.createElement(
							'span',
							{ className: 'price', __self: this
							},
							Number(customJObj.amount || 0).toFixed(2)
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'detail-row', __self: this
						},
						_react2.default.createElement(
							'label',
							{
								__self: this
							},
							'相关照片：'
						),
						_react2.default.createElement(
							'span',
							{ className: 'photos', __self: this
							},
							this.props.detail.photos && this.props.detail.photos.length > 0 ? (this.props.detail.photos || []).map(function (item, index) {
								return _react2.default.createElement('img', { src: item.photo_url, onClick: _this2.showImage.bind(_this2, index), __self: _this2
								});
							}) : "无"
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'detail-row', __self: this
						},
						_react2.default.createElement(
							'label',
							{
								__self: this
							},
							'审批编号：'
						),
						_react2.default.createElement(
							'span',
							{
								__self: this
							},
							this.props.detail.applyId
						)
					)
				);
			}
		}]);

		return Caigou;
	}(Component);

	exports.default = Caigou;

/***/ },

/***/ 273:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Component = _react2.default.Component;

	var CaigouDetail = function (_Component) {
		_inherits(CaigouDetail, _Component);

		function CaigouDetail() {
			_classCallCheck(this, CaigouDetail);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(CaigouDetail).apply(this, arguments));
		}

		_createClass(CaigouDetail, [{
			key: "render",
			value: function render() {
				return _react2.default.createElement(
					"div",
					{ className: "one", __self: this
					},
					_react2.default.createElement(
						"div",
						{ className: "detail", title: this.props.title, __self: this
						},
						_react2.default.createElement(
							"div",
							{ className: "detail-row", __self: this
							},
							_react2.default.createElement(
								"label",
								{
									__self: this
								},
								_react2.default.createElement(
									"b",
									{
										__self: this
									},
									"采购明细",
									this.props.detail.length > 1 ? "（" + this.props.index + "）" : undefined
								)
							)
						),
						_react2.default.createElement(
							"div",
							{ className: "detail-row", __self: this
							},
							_react2.default.createElement(
								"label",
								{
									__self: this
								},
								"名称："
							),
							this.props.item.item
						),
						_react2.default.createElement(
							"div",
							{ className: "detail-row", __self: this
							},
							_react2.default.createElement(
								"label",
								{
									__self: this
								},
								"规格："
							),
							this.props.item.spec
						),
						_react2.default.createElement(
							"div",
							{ className: "detail-row", __self: this
							},
							_react2.default.createElement(
								"label",
								{
									__self: this
								},
								"单位："
							),
							this.props.item.unit
						),
						_react2.default.createElement(
							"div",
							{ className: "detail-row", __self: this
							},
							_react2.default.createElement(
								"label",
								{
									__self: this
								},
								"单价："
							),
							this.props.item.price
						),
						_react2.default.createElement(
							"div",
							{ className: "detail-row", __self: this
							},
							_react2.default.createElement(
								"label",
								{
									__self: this
								},
								"数量："
							),
							this.props.item.quantity
						)
					)
				);
			}
		}]);

		return CaigouDetail;
	}(Component);

	exports.default = CaigouDetail;

/***/ },

/***/ 274:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _ExpenseDetail = __webpack_require__(275);

	var _ExpenseDetail2 = _interopRequireDefault(_ExpenseDetail);

	var _config = __webpack_require__(243);

	var _config2 = _interopRequireDefault(_config);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Component = _react2.default.Component;

	var Expense = function (_Component) {
		_inherits(Expense, _Component);

		function Expense(props) {
			_classCallCheck(this, Expense);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(Expense).call(this, props));
		}

		_createClass(Expense, [{
			key: 'render',
			value: function render() {
				var _this2 = this;

				var customJObj = this.props.detail.customJObj;
				if (customJObj) {
					customJObj = JSON.parse(customJObj);
				} else {
					customJObj = {};
				}
				return _react2.default.createElement(
					'div',
					{
						__self: this
					},
					_react2.default.createElement('div', { className: 'topborder', __self: this
					}),
					(customJObj.detailJArr || []).map(function (item, index) {
						var indx = index + 1;
						return _react2.default.createElement(_ExpenseDetail2.default, { detail: customJObj.detailJArr, ref: "ExpenseDetail" + index, index: indx, item: item, key: index, __self: _this2
						});
					}),
					_react2.default.createElement('div', { className: 'topborder', __self: this
					}),
					_react2.default.createElement(
						'div',
						{ className: 'detail-row sum-price', __self: this
						},
						_react2.default.createElement(
							'label',
							{
								__self: this
							},
							'总价（元）：'
						),
						_react2.default.createElement(
							'span',
							{ className: 'price', __self: this
							},
							Number(customJObj.amount || 0).toFixed(2)
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'detail-row', __self: this
						},
						_react2.default.createElement(
							'label',
							{
								__self: this
							},
							'审批编号：'
						),
						_react2.default.createElement(
							'span',
							{
								__self: this
							},
							this.props.detail.applyId
						)
					)
				);
			}
		}]);

		return Expense;
	}(Component);

	exports.default = Expense;

/***/ },

/***/ 275:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _config = __webpack_require__(243);

	var _config2 = _interopRequireDefault(_config);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Component = _react2.default.Component;

	var ExpenseDetail = function (_Component) {
		_inherits(ExpenseDetail, _Component);

		function ExpenseDetail() {
			_classCallCheck(this, ExpenseDetail);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(ExpenseDetail).apply(this, arguments));
		}

		_createClass(ExpenseDetail, [{
			key: 'showImage',
			value: function showImage(index) {
				_config2.default.native('showImage', {
					position: index,
					picsArr: this.props.item.photoJArr
				});
			}
		}, {
			key: 'render',
			value: function render() {
				var _this2 = this;

				return _react2.default.createElement(
					'div',
					{ className: 'one', __self: this
					},
					_react2.default.createElement(
						'div',
						{ className: 'detail', title: this.props.title, __self: this
						},
						_react2.default.createElement(
							'div',
							{ className: 'detail-row', __self: this
							},
							_react2.default.createElement(
								'label',
								{
									__self: this
								},
								_react2.default.createElement(
									'b',
									{
										__self: this
									},
									'报销明细',
									this.props.detail.length > 1 ? "（" + this.props.index + "）" : undefined
								)
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'detail-row', __self: this
							},
							_react2.default.createElement(
								'label',
								{
									__self: this
								},
								'报销类型：'
							),
							_config2.default.expenseType[this.props.item.type]
						),
						_react2.default.createElement(
							'div',
							{ className: 'detail-row', __self: this
							},
							_react2.default.createElement(
								'label',
								{
									__self: this
								},
								'金额（元）：'
							),
							this.props.item.money
						),
						_react2.default.createElement(
							'div',
							{ className: 'detail-row', __self: this
							},
							_react2.default.createElement(
								'label',
								{
									__self: this
								},
								'备注：'
							),
							_config2.default.isNullShowText(this.props.item.remark)
						),
						_react2.default.createElement(
							'div',
							{ className: 'detail-row', __self: this
							},
							_react2.default.createElement(
								'label',
								{
									__self: this
								},
								'相关照片：'
							),
							_react2.default.createElement(
								'span',
								{ className: 'photos', __self: this
								},
								this.props.item.photoJArr && this.props.item.photoJArr.length > 0 ? (this.props.item.photoJArr || []).map(function (item, index) {
									return _react2.default.createElement('img', { src: item, onClick: _this2.showImage.bind(_this2, index), __self: _this2
									});
								}) : "无"
							)
						)
					)
				);
			}
		}]);

		return ExpenseDetail;
	}(Component);

	exports.default = ExpenseDetail;

/***/ },

/***/ 276:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _config = __webpack_require__(243);

	var _config2 = _interopRequireDefault(_config);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Component = _react2.default.Component;

	var Generic = function (_Component) {
		_inherits(Generic, _Component);

		function Generic(props) {
			_classCallCheck(this, Generic);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(Generic).call(this, props));
		}

		_createClass(Generic, [{
			key: 'showImage',
			value: function showImage(index) {
				var imgArr = (this.props.detail.photos || []).map(function (item) {
					return item.photo_url;
				});
				_config2.default.native('showImage', {
					position: index,
					picsArr: imgArr
				});
			}
		}, {
			key: 'render',
			value: function render() {
				var _this2 = this;

				var customJObj = this.props.detail.customJObj;
				if (customJObj) {
					customJObj = JSON.parse(customJObj);
				}
				var applyDetail = customJObj && customJObj.applyDetail || "无";
				return _react2.default.createElement(
					'div',
					{
						__self: this
					},
					_react2.default.createElement('div', { className: 'topborder', __self: this
					}),
					_react2.default.createElement(
						'div',
						{ className: 'detail-row sum-price', __self: this
						},
						_react2.default.createElement(
							'label',
							{
								__self: this
							},
							'申请内容：'
						),
						_react2.default.createElement(
							'span',
							{
								__self: this
							},
							this.props.detail.applyResean
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'detail-row', __self: this
						},
						_react2.default.createElement(
							'label',
							{
								__self: this
							},
							'申请详情：'
						),
						_react2.default.createElement(
							'span',
							{
								__self: this
							},
							applyDetail
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'detail-row', __self: this
						},
						_react2.default.createElement(
							'label',
							{
								__self: this
							},
							'相关照片：'
						),
						_react2.default.createElement(
							'span',
							{ className: 'photos', __self: this
							},
							this.props.detail.photos && this.props.detail.photos.length > 0 ? (this.props.detail.photos || []).map(function (item, index) {
								return _react2.default.createElement('img', { src: item.photo_url, onClick: _this2.showImage.bind(_this2, index), __self: _this2
								});
							}) : "无"
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'detail-row', __self: this
						},
						_react2.default.createElement(
							'label',
							{
								__self: this
							},
							'审批编号：'
						),
						_react2.default.createElement(
							'span',
							{
								__self: this
							},
							this.props.detail.applyId
						)
					)
				);
			}
		}]);

		return Generic;
	}(Component);

	exports.default = Generic;

/***/ },

/***/ 277:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _config = __webpack_require__(243);

	var _config2 = _interopRequireDefault(_config);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Component = _react2.default.Component;

	var Leave = function (_Component) {
		_inherits(Leave, _Component);

		function Leave() {
			_classCallCheck(this, Leave);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(Leave).apply(this, arguments));
		}

		_createClass(Leave, [{
			key: 'showImage',
			value: function showImage(index) {
				var imgArr = (this.props.detail.photos || []).map(function (item) {
					return item.photo_url;
				});
				_config2.default.native('showImage', {
					position: index,
					picsArr: imgArr
				});
			}
		}, {
			key: 'render',
			value: function render() {
				var _this2 = this;

				return _react2.default.createElement(
					'div',
					{
						__self: this
					},
					_react2.default.createElement(
						'div',
						{ className: 'detail-row ', __self: this
						},
						_react2.default.createElement(
							'label',
							{
								__self: this
							},
							'请假类型：'
						),
						_react2.default.createElement(
							'span',
							{
								__self: this
							},
							_config2.default.leaveType[this.props.detail.leaveType]
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'detail-row ', __self: this
						},
						_react2.default.createElement(
							'label',
							{
								__self: this
							},
							'开始时间：'
						),
						_react2.default.createElement(
							'span',
							{
								__self: this
							},
							this.props.detail.beginDate
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'detail-row ', __self: this
						},
						_react2.default.createElement(
							'label',
							{
								__self: this
							},
							'结束时间：'
						),
						_react2.default.createElement(
							'span',
							{
								__self: this
							},
							this.props.detail.endDate
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'detail-row ', __self: this
						},
						_react2.default.createElement(
							'label',
							{
								__self: this
							},
							'请假事由：'
						),
						_react2.default.createElement(
							'span',
							{
								__self: this
							},
							this.props.detail.applyResean
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'detail-row', __self: this
						},
						_react2.default.createElement(
							'label',
							{
								__self: this
							},
							'相关照片：'
						),
						_react2.default.createElement(
							'span',
							{ className: 'photos', __self: this
							},
							this.props.detail.photos && this.props.detail.photos.length > 0 ? (this.props.detail.photos || []).map(function (item, index) {
								return _react2.default.createElement('img', { src: item.photo_url, onClick: _this2.showImage.bind(_this2, index), __self: _this2
								});
							}) : "无"
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'detail-row', __self: this
						},
						_react2.default.createElement(
							'label',
							{
								__self: this
							},
							'审批编号：'
						),
						_react2.default.createElement(
							'span',
							{
								__self: this
							},
							this.props.detail.applyId
						)
					)
				);
			}
		}]);

		return Leave;
	}(Component);

	exports.default = Leave;

/***/ },

/***/ 278:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _config = __webpack_require__(243);

	var _config2 = _interopRequireDefault(_config);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Component = _react2.default.Component;

	var Off = function (_Component) {
		_inherits(Off, _Component);

		function Off() {
			_classCallCheck(this, Off);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(Off).apply(this, arguments));
		}

		_createClass(Off, [{
			key: 'showImage',
			value: function showImage(index) {
				var imgArr = (this.props.detail.photos || []).map(function (item) {
					return item.photo_url;
				});
				_config2.default.native('showImage', {
					position: index,
					picsArr: imgArr
				});
			}
		}, {
			key: 'render',
			value: function render() {
				var _this2 = this;

				return _react2.default.createElement(
					'div',
					{
						__self: this
					},
					_react2.default.createElement(
						'div',
						{ className: 'detail-row ', __self: this
						},
						_react2.default.createElement(
							'label',
							{
								__self: this
							},
							'加班开始时间：'
						),
						_react2.default.createElement(
							'span',
							{
								__self: this
							},
							this.props.detail.beginOverTime
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'detail-row ', __self: this
						},
						_react2.default.createElement(
							'label',
							{
								__self: this
							},
							'加班结束时间：'
						),
						_react2.default.createElement(
							'span',
							{
								__self: this
							},
							this.props.detail.endOverTime
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'detail-row ', __self: this
						},
						_react2.default.createElement(
							'label',
							{
								__self: this
							},
							'开始时间：'
						),
						_react2.default.createElement(
							'span',
							{
								__self: this
							},
							this.props.detail.beginDate
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'detail-row ', __self: this
						},
						_react2.default.createElement(
							'label',
							{
								__self: this
							},
							'结束时间：'
						),
						_react2.default.createElement(
							'span',
							{
								__self: this
							},
							this.props.detail.endDate
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'detail-row ', __self: this
						},
						_react2.default.createElement(
							'label',
							{
								__self: this
							},
							'调休事由：'
						),
						_react2.default.createElement(
							'span',
							{
								__self: this
							},
							this.props.detail.applyResean
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'detail-row', __self: this
						},
						_react2.default.createElement(
							'label',
							{
								__self: this
							},
							'相关照片：'
						),
						_react2.default.createElement(
							'span',
							{ className: 'photos', __self: this
							},
							this.props.detail.photos && this.props.detail.photos.length > 0 ? (this.props.detail.photos || []).map(function (item, index) {
								return _react2.default.createElement('img', { src: item.photo_url, onClick: _this2.showImage.bind(_this2, index), __self: _this2
								});
							}) : "无"
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'detail-row', __self: this
						},
						_react2.default.createElement(
							'label',
							{
								__self: this
							},
							'审批编号：'
						),
						_react2.default.createElement(
							'span',
							{
								__self: this
							},
							this.props.detail.applyId
						)
					)
				);
			}
		}]);

		return Off;
	}(Component);

	exports.default = Off;

/***/ },

/***/ 279:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _config = __webpack_require__(243);

	var _config2 = _interopRequireDefault(_config);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Component = _react2.default.Component;

	var GoOut = function (_Component) {
		_inherits(GoOut, _Component);

		function GoOut(props) {
			_classCallCheck(this, GoOut);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(GoOut).call(this, props));
		}

		_createClass(GoOut, [{
			key: 'showImage',
			value: function showImage(index) {
				var imgArr = (this.props.detail.photos || []).map(function (item) {
					return item.photo_url;
				});
				_config2.default.native('showImage', {
					position: index,
					picsArr: imgArr
				});
			}
		}, {
			key: 'renderOutType',
			value: function renderOutType() {
				var _this2 = this;

				var outType = '';
				_config2.default.goOUtType.forEach(function (item) {
					if (_this2.props.detail.outType == item.key) {
						outType = item.name;
						return false;
					}
				});
				console.log(this.props.detail.outType);
				console.log(outType);
				return outType;
			}
		}, {
			key: 'render',
			value: function render() {
				var _this3 = this;

				return _react2.default.createElement(
					'div',
					{
						__self: this
					},
					_react2.default.createElement(
						'div',
						{ className: 'detail-row ', __self: this
						},
						_react2.default.createElement(
							'label',
							{
								__self: this
							},
							'外出方式：'
						),
						_react2.default.createElement(
							'span',
							{
								__self: this
							},
							this.renderOutType()
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'detail-row ', __self: this
						},
						_react2.default.createElement(
							'label',
							{
								__self: this
							},
							'开始时间：'
						),
						_react2.default.createElement(
							'span',
							{
								__self: this
							},
							this.props.detail.beginDate
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'detail-row ', __self: this
						},
						_react2.default.createElement(
							'label',
							{
								__self: this
							},
							'结束时间：'
						),
						_react2.default.createElement(
							'span',
							{
								__self: this
							},
							this.props.detail.endDate
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'detail-row ', __self: this
						},
						_react2.default.createElement(
							'label',
							{
								__self: this
							},
							'外出事由：'
						),
						_react2.default.createElement(
							'span',
							{
								__self: this
							},
							this.props.detail.applyResean
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'detail-row', __self: this
						},
						_react2.default.createElement(
							'label',
							{
								__self: this
							},
							'相关照片：'
						),
						_react2.default.createElement(
							'span',
							{ className: 'photos', __self: this
							},
							this.props.detail.photos && this.props.detail.photos.length > 0 ? (this.props.detail.photos || []).map(function (item, index) {
								return _react2.default.createElement('img', { src: item.photo_url, onClick: _this3.showImage.bind(_this3, index), __self: _this3
								});
							}) : "无"
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'detail-row', __self: this
						},
						_react2.default.createElement(
							'label',
							{
								__self: this
							},
							'审批编号：'
						),
						_react2.default.createElement(
							'span',
							{
								__self: this
							},
							this.props.detail.applyId
						)
					)
				);
			}
		}]);

		return GoOut;
	}(Component);

	exports.default = GoOut;

/***/ },

/***/ 280:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _config = __webpack_require__(243);

	var _config2 = _interopRequireDefault(_config);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Component = _react2.default.Component;

	var Travel = function (_Component) {
		_inherits(Travel, _Component);

		function Travel() {
			_classCallCheck(this, Travel);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(Travel).apply(this, arguments));
		}

		_createClass(Travel, [{
			key: 'showImage',
			value: function showImage(index) {
				var imgArr = (this.props.detail.photos || []).map(function (item) {
					return item.photo_url;
				});
				_config2.default.native('showImage', {
					position: index,
					picsArr: imgArr
				});
			}
		}, {
			key: 'render',
			value: function render() {
				var _this2 = this;

				return _react2.default.createElement(
					'div',
					{
						__self: this
					},
					_react2.default.createElement(
						'div',
						{ className: 'detail-row ', __self: this
						},
						_react2.default.createElement(
							'label',
							{
								__self: this
							},
							'出差地点：'
						),
						_react2.default.createElement(
							'span',
							{
								__self: this
							},
							this.props.detail.travelAddr
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'detail-row ', __self: this
						},
						_react2.default.createElement(
							'label',
							{
								__self: this
							},
							'开始时间：'
						),
						_react2.default.createElement(
							'span',
							{
								__self: this
							},
							this.props.detail.beginDate
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'detail-row ', __self: this
						},
						_react2.default.createElement(
							'label',
							{
								__self: this
							},
							'结束时间：'
						),
						_react2.default.createElement(
							'span',
							{
								__self: this
							},
							this.props.detail.endDate
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'detail-row ', __self: this
						},
						_react2.default.createElement(
							'label',
							{
								__self: this
							},
							'出差事由：'
						),
						_react2.default.createElement(
							'span',
							{
								__self: this
							},
							this.props.detail.applyResean
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'detail-row', __self: this
						},
						_react2.default.createElement(
							'label',
							{
								__self: this
							},
							'相关照片：'
						),
						_react2.default.createElement(
							'span',
							{ className: 'photos', __self: this
							},
							this.props.detail.photos && this.props.detail.photos.length > 0 ? (this.props.detail.photos || []).map(function (item, index) {
								return _react2.default.createElement('img', { src: item.photo_url, onClick: _this2.showImage.bind(_this2, index), __self: _this2
								});
							}) : "无"
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'detail-row', __self: this
						},
						_react2.default.createElement(
							'label',
							{
								__self: this
							},
							'审批编号：'
						),
						_react2.default.createElement(
							'span',
							{
								__self: this
							},
							this.props.detail.applyId
						)
					)
				);
			}
		}]);

		return Travel;
	}(Component);

	exports.default = Travel;

/***/ },

/***/ 281:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _config = __webpack_require__(243);

	var _config2 = _interopRequireDefault(_config);

	var _UserAvatar = __webpack_require__(265);

	var _UserAvatar2 = _interopRequireDefault(_UserAvatar);

	var _ListItem = __webpack_require__(282);

	var _ListItem2 = _interopRequireDefault(_ListItem);

	var _reactHelmet = __webpack_require__(233);

	var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Component = _react2.default.Component;

	//待我审批

	var List = function (_Component) {
		_inherits(List, _Component);

		function List(props) {
			_classCallCheck(this, List);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(List).call(this, props));

			_this.state = { list: [], hideStatus: true, tabIndex: 1, nodata: false, nodataText: ['没有已完成的审批', '没有待审批申请'] };
			return _this;
		}

		_createClass(List, [{
			key: 'componentDidMount',
			value: function componentDidMount() {
				this.bind(1);
			}
		}, {
			key: 'renderAvatar',
			value: function renderAvatar(item) {
				item.name = item.name || item.uname;
				return _react2.default.createElement(_UserAvatar2.default, { item: item, __self: this
				});
			}
		}, {
			key: 'bind',
			value: function bind(index) {
				var _this2 = this;

				this.setState({ list: [] });
				_config2.default.ajax("queryMyApprove", {
					method: 'POST',
					body: JSON.stringify({ approveStatus: index })
				}).then(function (res) {
					if (res.status == 200) {
						_this2.setState({ list: res.result });
						if (res.result == null || res.result.length == 0) {
							_this2.setState({ nodata: true });
						} else {
							_this2.setState({ nodata: false });
						}
					} else {
						_this2.setState({ nodata: true });
					}
				});
			}
		}, {
			key: 'Tab',
			value: function Tab(index) {
				if (index == 1) {
					this.setState({ hideStatus: true });
				} else {
					this.setState({ hideStatus: false });
				}
				this.setState({ tabIndex: index });
				this.bind(index);
			}
		}, {
			key: 'render',
			value: function render() {
				var _this3 = this;

				return _react2.default.createElement(
					'div',
					{ className: 'list', __self: this
					},
					_react2.default.createElement(_reactHelmet2.default, { title: '待我审批', __self: this
					}),
					_react2.default.createElement(
						'div',
						{ className: 'head', __self: this
						},
						_react2.default.createElement(
							'a',
							{ className: this.state.tabIndex == 1 ? "focus" : undefined, onClick: this.Tab.bind(this, 1), __self: this
							},
							'待审批'
						),
						_react2.default.createElement(
							'a',
							{ className: this.state.tabIndex == 0 ? "focus" : undefined, onClick: this.Tab.bind(this, 0), __self: this
							},
							'已审批'
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'list-body', __self: this
						},
						this.state.list.map(function (item) {
							return _react2.default.createElement(_ListItem2.default, { pageType: 'tome', fucked: true, applyType: item.applyType, applyId: item.applyId, avatar: _this3.renderAvatar(item), title: item.applyResean, desc: item.uname + "的" + _config2.default.applyType[item.applyType], time: item.gmtCreate, status: item.approveStatus, hideStatus: _this3.state.hideStatus, __self: _this3
							});
						}),
						this.state.nodata ? _react2.default.createElement(
							'div',
							{ className: 'nodata', __self: this
							},
							_react2.default.createElement('i', { className: 'iconfont icon-111', __self: this
							}),
							this.state.nodataText[this.state.tabIndex]
						) : undefined
					)
				);
			}
		}]);

		return List;
	}(Component);

	exports.default = List;

/***/ },

/***/ 282:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _config = __webpack_require__(243);

	var _config2 = _interopRequireDefault(_config);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Component = _react2.default.Component;

	var ListItem = function (_Component) {
		_inherits(ListItem, _Component);

		function ListItem(props) {
			_classCallCheck(this, ListItem);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ListItem).call(this, props));

			_this.approveStatus = {
				"0": "发起申请",
				"1": "审批中",
				"2": "已同意",
				"3": "已拒绝",
				"4": "已撤回",
				"5": "未审批"
			};
			return _this;
		}

		_createClass(ListItem, [{
			key: 'jumpLink',
			value: function jumpLink() {
				/*if(this.props.applyType<4){
	   	location.href="/approve/app/detail.html?applyId="+this.props.applyId+"&pageType=fromme"
	   }else*/
				{
					var pageType = this.props.pageType || 'fromme';
					location.href = "#detail/" + this.props.applyType + "/" + _config2.default.applyType[this.props.applyType] + "/" + this.props.applyId + "/" + pageType;
				}
			}
		}, {
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					'div',
					{ className: 'item', onClick: this.jumpLink.bind(this), __self: this
					},
					_react2.default.createElement(
						'div',
						{ className: 'userAvatar', __self: this
						},
						this.props.avatar
					),
					_react2.default.createElement(
						'div',
						{ className: 'rcontent', __self: this
						},
						_react2.default.createElement(
							'div',
							{ className: 'event', __self: this
							},
							_react2.default.createElement(
								'p',
								{
									__self: this
								},
								this.props.title
							),
							_react2.default.createElement(
								'span',
								{ className: 'time', __self: this
								},
								this.props.time
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'desc', __self: this
							},
							this.props.hideStatus == true ? undefined : this.props.status == 1 ? this.props.fucked ? _react2.default.createElement(
								'span',
								{ className: 'status', __self: this
								},
								'进行中（同意）'
							) : _react2.default.createElement(
								'span',
								{ className: 'status', __self: this
								},
								'等待' + this.props.approveName + '处理'
							) : _react2.default.createElement(
								'span',
								{ className: this.props.status == 3 ? "status reject" : "status", __self: this
								},
								this.approveStatus[this.props.status]
							),
							_react2.default.createElement(
								'p',
								{
									__self: this
								},
								this.props.desc
							)
						)
					)
				);
			}
		}]);

		return ListItem;
	}(Component);

	exports.default = ListItem;

/***/ },

/***/ 283:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _ListItem = __webpack_require__(282);

	var _ListItem2 = _interopRequireDefault(_ListItem);

	var _config = __webpack_require__(243);

	var _config2 = _interopRequireDefault(_config);

	var _Dialog = __webpack_require__(256);

	var _Dialog2 = _interopRequireDefault(_Dialog);

	var _alert = __webpack_require__(261);

	var _alert2 = _interopRequireDefault(_alert);

	var _reactHelmet = __webpack_require__(233);

	var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Component = _react2.default.Component;

	var FromMe = function (_Component) {
		_inherits(FromMe, _Component);

		function FromMe(props) {
			_classCallCheck(this, FromMe);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(FromMe).call(this, props));

			_this.state = { list: [], tabIndex: 1, dialog: 0, nodata: false, nodataText: ["没有已完成的审批", "您的申请都已处理完毕"] };
			return _this;
		}

		_createClass(FromMe, [{
			key: 'componentDidMount',
			value: function componentDidMount() {
				this.bind(this.state.tabIndex);
			}
		}, {
			key: 'bind',
			value: function bind(index) {
				var _this2 = this;

				_config2.default.ajax("queryMyApply", {
					method: 'POST',
					body: JSON.stringify({ approveStatus: index })
				}).then(function (res) {
					if (res.status == 200) {
						if (res.result == null || res.result.length == 0) {
							_this2.setState({ nodata: true });
						} else {
							_this2.setState({ nodata: false });
						}
						_this2.setState({ list: res.result || [] });
					} else {
						_this2.setState({ nodata: true });
						(0, _alert2.default)(res.result[0].message, _this2);
					}
				});
			}
		}, {
			key: 'Tab',
			value: function Tab(index) {
				this.setState({ tabIndex: index });
				this.bind(index);
			}
		}, {
			key: 'renderAvatar',
			value: function renderAvatar(item) {
				return _react2.default.createElement(
					'div',
					{ className: 'img', style: { backgroundColor: _config2.default.applyTypeColor[item.applyType] }, __self: this
					},
					_config2.default.applyType[item.applyType]
				);
			}
		}, {
			key: 'renderDialog',
			value: function renderDialog() {
				console.log(this.state.dialog);
				return _react2.default.createElement(_Dialog2.default, _extends({ stage: this }, this.state.dialog, {
					__self: this
				}));
			}
		}, {
			key: 'render',
			value: function render() {
				var _this3 = this;

				return _react2.default.createElement(
					'div',
					{ className: 'list', __self: this
					},
					_react2.default.createElement(_reactHelmet2.default, { title: '我发起的', __self: this
					}),
					_react2.default.createElement(
						'div',
						{ className: 'head', __self: this
						},
						_react2.default.createElement(
							'a',
							{ className: this.state.tabIndex == 1 ? "focus" : undefined, onClick: this.Tab.bind(this, 1), __self: this
							},
							'审批中'
						),
						_react2.default.createElement(
							'a',
							{ className: this.state.tabIndex == 0 ? "focus" : undefined, onClick: this.Tab.bind(this, 0), __self: this
							},
							'已完成'
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'list-body', __self: this
						},
						(this.state.list || []).map(function (item) {
							console.log(item);
							return _react2.default.createElement(_ListItem2.default, _extends({}, item, { applyType: item.applyType, applyId: item.applyId, avatar: _this3.renderAvatar(item), title: item.applyResean, desc: item.uname, time: item.gmtCreate, status: item.approveStatus, __self: _this3
							}));
						}),
						this.state.nodata ? _react2.default.createElement(
							'div',
							{ className: 'nodata', __self: this
							},
							_react2.default.createElement('i', { className: 'iconfont icon-111', __self: this
							}),
							this.state.nodataText[this.state.tabIndex]
						) : undefined
					),
					this.state.dialog ? this.renderDialog() : undefined
				);
			}
		}]);

		return FromMe;
	}(Component);

	exports.default = FromMe;

/***/ },

/***/ 284:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactHelmet = __webpack_require__(233);

	var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

	var _config = __webpack_require__(243);

	var _config2 = _interopRequireDefault(_config);

	var _UserAvatar = __webpack_require__(265);

	var _UserAvatar2 = _interopRequireDefault(_UserAvatar);

	var _ListItem = __webpack_require__(282);

	var _ListItem2 = _interopRequireDefault(_ListItem);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Component = _react2.default.Component;

	var ExtraMe = function (_Component) {
		_inherits(ExtraMe, _Component);

		function ExtraMe(props) {
			_classCallCheck(this, ExtraMe);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ExtraMe).call(this, props));

			_this.state = { list: [], tabIndex: 1, nodata: false, nodataText: ['暂无知会您的审批申请', '暂时没有知会您的申请'] };
			return _this;
		}

		_createClass(ExtraMe, [{
			key: 'componentDidMount',
			value: function componentDidMount() {
				this.bind(1);
			}
		}, {
			key: 'renderAvatar',
			value: function renderAvatar(item) {
				item.name = item.name || item.uname;
				return _react2.default.createElement(_UserAvatar2.default, { item: item, __self: this
				});
			}
		}, {
			key: 'bind',
			value: function bind(index) {
				var _this2 = this;

				_config2.default.ajax("extraKnownForMe", {
					method: 'POST',
					body: JSON.stringify({ approveStatus: index })
				}).then(function (res) {
					if (res.status == 200) {
						console.log(res.result);
						_this2.setState({ list: res.result });
						if (res.result == null || res.result.length == 0) {
							_this2.setState({ nodata: true });
						} else {
							_this2.setState({ nodata: false });
						}
					} else {
						_this2.setState({ nodata: true });
					}
				});
			}
		}, {
			key: 'Tab',
			value: function Tab(index) {
				this.setState({ tabIndex: index });
				this.bind(index);
			}
		}, {
			key: 'render',
			value: function render() {
				var _this3 = this;

				return _react2.default.createElement(
					'div',
					{ className: 'list', __self: this
					},
					_react2.default.createElement(_reactHelmet2.default, { title: '知会我的', __self: this
					}),
					_react2.default.createElement(
						'div',
						{ className: 'head', __self: this
						},
						_react2.default.createElement(
							'a',
							{ className: this.state.tabIndex == 1 ? "focus" : undefined, onClick: this.Tab.bind(this, 1), __self: this
							},
							'待审批'
						),
						_react2.default.createElement(
							'a',
							{ className: this.state.tabIndex == 2 ? "focus" : undefined, onClick: this.Tab.bind(this, 2), __self: this
							},
							'已审批'
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'list-body', __self: this
						},
						this.state.list.map(function (item) {
							return _react2.default.createElement(_ListItem2.default, { pageType: 'extrame', approveName: item.approveName, applyType: item.applyType, applyId: item.applyId, avatar: _this3.renderAvatar(item), title: item.applyResean, desc: item.uname + "的" + _config2.default.applyType[item.applyType], time: item.gmtCreate, status: item.approveStatus, __self: _this3
							});
						}),
						this.state.nodata ? _react2.default.createElement(
							'div',
							{ className: 'nodata', __self: this
							},
							_react2.default.createElement('i', { className: 'iconfont icon-111', __self: this
							}),
							this.state.nodataText[this.state.tabIndex - 1]
						) : undefined
					)
				);
			}
		}]);

		return ExtraMe;
	}(Component);

	exports.default = ExtraMe;

/***/ }

});