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

	var _Detail = __webpack_require__(264);

	var _Detail2 = _interopRequireDefault(_Detail);

	var _List = __webpack_require__(272);

	var _List2 = _interopRequireDefault(_List);

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
			_this2.state = { corpList: [], currCorp: {}, expand: false, dialog: 0 };
			return _this2;
		}

		_createClass(App, [{
			key: 'componentWillMount',
			value: function componentWillMount() {}
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
					_this3.select(currCorp);
					localStorage.setItem('orgName', currCorp.orgName);
					localStorage.setItem('orgId', currCorp.orgId);
					localStorage.setItem('deptName', currCorp.deptName);
					_reactCookie2.default.save('orgId', currCorp.orgId);
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
				//cookie.save('orgId', obj.orgId, { path: '/' });
				localStorage.setItem('orgId', obj.orgId);
				localStorage.setItem('orgName', obj.orgName);
				localStorage.setItem('deptName', obj.deptName);
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
				var _this4 = this;

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
								if (_this4.state.corpList.length > 1) {
									return _react2.default.createElement(
										'div',
										{ className: 'focusorg', onClick: _this4.expandOrg.bind(_this4), __self: _this4
										},
										_this4.state.currCorp.orgName,
										' ',
										_react2.default.createElement('i', { className: _this4.state.expand ? "triangle up" : "triangle down", __self: _this4
										})
									);
								} else {
									return _react2.default.createElement(
										'div',
										{ className: 'focusorg', __self: _this4
										},
										_this4.state.currCorp.orgName
									);
								}
							}(),
							_react2.default.createElement(
								'div',
								{ className: this.state.expand ? "orgList" : "orgList hide", __self: this
								},
								(this.state.corpList || []).map(function (item) {
									return _react2.default.createElement(
										'div',
										{ className: item.orgId == _this4.state.currCorp.orgId ? "focusorg" : "", onClick: _this4.select.bind(_this4, item), __self: _this4
										},
										item.orgName
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
							{ href: 'http://10.1.40.6/approve/app/tome.html', __self: this
							},
							_react2.default.createElement('i', { className: 'iconfont icon-111', __self: this
							}),
							'待我审批'
						),
						_react2.default.createElement(
							'a',
							{ href: 'http://10.1.40.6/approve/app/fromme.html', __self: this
							},
							_react2.default.createElement('i', { className: 'iconfont icon-112 ifuck', __self: this
							}),
							'我发起的'
						)
					),
					_react2.default.createElement(
						'a',
						{ className: 'followme', href: 'http://10.0.10.46:8080/approve/app/notify.html', __self: this
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
							{ href: 'http://10.1.40.6/approve/app/form_qj.html', __self: this
							},
							_react2.default.createElement('i', { className: 'iconfont icon-110', __self: this
							}),
							'请假'
						),
						_react2.default.createElement(
							'a',
							{ href: 'http://10.1.40.6/approve/app/form_tx.html', __self: this
							},
							_react2.default.createElement('i', { className: 'iconfont icon-107', __self: this
							}),
							'调休'
						),
						_react2.default.createElement(
							'a',
							{ href: 'http://10.1.40.6/approve/app/form_wc.html', __self: this
							},
							_react2.default.createElement('i', { className: 'iconfont icon-108', __self: this
							}),
							'外出'
						),
						_react2.default.createElement(
							'a',
							{ href: 'http://10.1.40.6/approve/app/form_cc.html', __self: this
							},
							_react2.default.createElement('i', { className: 'iconfont icon-109', __self: this
							}),
							'出差'
						),
						_react2.default.createElement(
							'a',
							{ href: '#create/4/报销', __self: this
							},
							_react2.default.createElement('i', { className: 'iconfont icon-iconfontshenpicaigou02', __self: this
							}),
							'报销'
						),
						_react2.default.createElement(
							'a',
							{ href: '#create/5/采购', __self: this
							},
							_react2.default.createElement('i', { className: 'iconfont icon-iconfontshenpicaigou01', __self: this
							}),
							'采购'
						),
						_react2.default.createElement(
							'a',
							{ href: '#create/6/通用', __self: this
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
			data.orgId = _reactCookie2.default.load('orgId');
			data.uname = _reactCookie2.default.load('username');
			data.deptName = localStorage.getItem("deptName");
			data.orgName = localStorage.getItem("orgName");
			for (var key in this.ajaxList) {
				if (args[0] == this.ajaxList[key]) {
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
			}, 1000);
		},
		makeUrl: function makeUrl(key, param) {
			//alert(document.cookie)
			//CONFIG.domain = CONFIG.domain || "http://10.1.40.6/";
			//var domain = CONFIG.domain + 'signin/api/';
			var domain = "/approve/";
			var orgId = _reactCookie2.default.load('orgId') || localStorage.getItem('orgId');
			/*if(typeof param != "string"){
	  	param='?debug=true&uid='+cookie.load('userId')+'&orgId='+orgId;
	  }else{
	  	param='?debug=true&uid='+cookie.load('userId')+'&orgId='+orgId+"&"+param;
	  }*/
			var h5tRandom = Math.random();
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
			}
		},
		native: function native(method, data) {
			//window.locateIOS&&window.locateIOS();
			var isAndr = navigator.userAgent.indexOf('Android') > -1 || navigator.userAgent.indexOf('Adr') > -1;
			var orgId = localStorage.getItem('orgId');
			var orgName = localStorage.getItem('orgName');
			var t = null;
			switch (method) {
				case 'getorglist':
					{
						window.setOrgCookie = function (data) {
							data = JSON.parse(decodeURI(data));
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
		}
	};
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

	var _Expense = __webpack_require__(261);

	var _Expense2 = _interopRequireDefault(_Expense);

	var _Generic = __webpack_require__(263);

	var _Generic2 = _interopRequireDefault(_Generic);

	var _reactCookie = __webpack_require__(253);

	var _reactCookie2 = _interopRequireDefault(_reactCookie);

	var _Dialog = __webpack_require__(256);

	var _Dialog2 = _interopRequireDefault(_Dialog);

	var _alert = __webpack_require__(260);

	var _alert2 = _interopRequireDefault(_alert);

	var _reactRouter = __webpack_require__(165);

	var _UserAvatar = __webpack_require__(271);

	var _UserAvatar2 = _interopRequireDefault(_UserAvatar);

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
			_this2.state = { imgList: [], showUpload: true, authList: [], informList: [], showAddPic: true, dialog: 0, isSet: 0 };
			return _this2;
		}

		_createClass(Create, [{
			key: 'componentWillMount',
			value: function componentWillMount() {
				var _this3 = this;

				if (this.params.type == 4) {
					this.setState({ showAddPic: false });
				}
				_config2.default.ajax('lastSelected', {
					method: 'post',
					body: JSON.stringify({ applyType: this.props.params.type })
				}).then(function (res) {
					var data = res; //{"status":200,"total":0,"result":{"isSet":0,"flowInfos":[{"uid":292177,"uname":"青城名字要很长很长才好青城名字要很长很长","mobile":null,"avatar":"http://n1.store.uban360.com:7188/sfs/avatar?uid=292177"}]},"msg":null}
					var arr = (data.result.flowInfos || []).map(function (item) {
						return { name: item.uname, uid: item.uid };
					});
					_this3.setState({ informList: arr });
				});
				_config2.default.ajax('getFlowByType', {
					method: 'post',
					body: JSON.stringify({ applyType: this.props.params.type })
				}).then(function (res) {
					var data = res; //{"status":200,"total":0,"result":{"isSet":1,"flowInfos":[{"uid":292177,"uname":"青城名字要很长很长才好青城名字要很长很长","mobile":null,"avatar":"http://n1.store.uban360.com:7188/sfs/avatar?uid=292177"}]},"msg":null}
					var arr = (data.result.flowInfos || []).map(function (item) {
						return { name: item.uname, uid: item.uid };
					});
					_this3.setState({ authList: arr, isSet: data.result.isSet });
				});
			}
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
				var _this4 = this;

				if (this.refs.myForm.validate()) {
					var _ret = function () {
						if (_this4.state.authList.length == 0) {
							(0, _alert2.default)('请选择审批人', _this4);
							return {
								v: false
							};
						}
						var values = _this4.refs.myForm.getValues();
						console.log(values);
						var params = {};

						params.applyType = _this4.props.params.type;
						params.customStruct = JSON.stringify(values);
						params.beginDate = new Date();
						params.endDate = new Date();
						params.flowStr = JSON.stringify(_this4.state.authList);
						params.photoStr = JSON.stringify(_this4.imgList);

						//事由
						params.applyResean = values.applyResean;

						_config2.default.ajax('save', {
							body: JSON.stringify(params),
							method: 'post'
						}).then(function (res) {
							if (res.status == 200) {
								(0, _alert2.default)(_this4.props.params.title + '申请提交成功', _this4);
								setTimeout(function () {
									location.href = "#/detail/" + params.applyType + "/" + _this4.params.title + "/" + res.result + "/fromme";
								}, 2000);
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
					return false;
				}
				var _this = this;
				_config2.default.native('selectPictures', { count: this.state.imgList.length, sum: 4 }).then(function (res) {
					if (res.code == 200) {
						var data = res.data.map(function (item) {
							return { data: item, uploaded: false };
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
							Base64Stream: item.data
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
							}
						});
					}
				});
			}
			//选择人员

		}, {
			key: 'addUser',
			value: function addUser() {
				var _this5 = this;

				if (this.checkIsUpload()) {
					this.setState({ dialog: { mask: true, show: true, msg: "图片正在上传，请稍后", type: "alert" } });
					return;
				}
				_config2.default.native('selectPeopleIOS').then(function (res) {
					var data = res.data;
					var authList = _this5.state.authList.concat(data);
					_this5.setState({ authList: authList });
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
					var data = res.data;
					var informList = _this6.state.informList.concat(data);
					_this6.setState({ informList: informList });
				});
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
			key: 'renderForm',
			value: function renderForm() {
				var category = this.params.type;
				switch (parseInt(category)) {
					case 5:
						{
							//采购
							return _react2.default.createElement(_Caigou2.default, { ref: 'myForm', stage: this, __self: this
							});
							break;
						}
					case 4:
						{
							//报销
							return _react2.default.createElement(_Expense2.default, { ref: 'myForm', stage: this, __self: this
							});
							break;
						}
					case 6:
						{
							console.log('通用');
							//通用
							return _react2.default.createElement(_Generic2.default, { ref: 'myForm', stage: this, __self: this
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
			key: 'render',
			value: function render() {
				var _this7 = this;

				return _react2.default.createElement(
					'div',
					{
						__self: this
					},
					_react2.default.createElement(_reactHelmet2.default, { title: this.params.title, __self: this
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
									_react2.default.createElement('img', { src: "data:image/png;base64," + item.data, __self: _this7
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

	var _alert = __webpack_require__(260);

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

			_this2.state = { detail: [{ key: +new Date() }], caigouList: [], sumPrice: 0, expectPayDate: undefined };
			return _this2;
		}

		_createClass(Caigou, [{
			key: 'getValues',
			value: function getValues() {
				var _this3 = this;

				var arr = [];
				this.state.detail.forEach(function (item, index) {
					var values = _this3.refs['caigouDetail' + index].getValues();
					console.log(values);
					arr.push(values);
				});
				return {
					applyResean: this.refs.applyResean.value,
					amount: this.state.sumPrice,
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
					var money = _this4.refs['caigouDetail' + index].getMoney();
					sumMoney += money;
				});
				this.setState({ sumPrice: sumMoney });
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
					var validate = this.refs['caigouDetail' + i].validate();
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
		}, {
			key: 'render',
			value: function render() {
				var _this5 = this;

				return _react2.default.createElement(
					'div',
					{
						__self: this
					},
					_react2.default.createElement(
						'div',
						{ className: 'txt-reason', __self: this
						},
						_react2.default.createElement('textarea', { ref: 'applyResean', maxLength: '60', placeholder: '请输入采购事由（必填）', __self: this
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
						return _react2.default.createElement(_CaigouDetail2.default, { detail: _this5.state.detail, ref: "caigouDetail" + index, index: indx, computeMoney: _this5.computeMoney.bind(_this5), item: item, key: item.key, del: _this5.del.bind(_this5, index), __self: _this5
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
							this.state.sumPrice.toFixed(2)
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

	var CaigouDetail = function (_Component) {
		_inherits(CaigouDetail, _Component);

		function CaigouDetail(props) {
			_classCallCheck(this, CaigouDetail);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(CaigouDetail).call(this, props));

			_this.text = [{ field: 'item', text: '名称' }, { field: 'spec', text: '规格' }, { field: 'unit', text: '单位' }, { field: 'price', text: '价格' }, { field: 'quantity', text: '数量' }];
			_this.state = { item: { price: '', quantity: '', spec: '', item: '', unit: '' } };
			return _this;
		}

		_createClass(CaigouDetail, [{
			key: 'del',
			value: function del(index) {
				var hasValue = false;
				for (var key in this.state.item) {
					if (this.state.item[key] != "") {
						hasValue = true;
					}
				}
				if (hasValue) {
					if (confirm("确定删除采购明细（" + this.props.index + "）?")) {
						this.props.del(this.props.index);
					}
				} else {
					this.props.del(this.props.index);
				}
				this.props.computeMoney(this);

				//this.props.reRender();
			}
		}, {
			key: 'componentDidMount',
			value: function componentDidMount() {
				//console.log("didMount")
				this.setState({ state: this.props.item });
			}
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
						this.props.detail.length === 1 ? undefined : indexstr = this.props.index;
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
			key: 'render',
			value: function render() {
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
							this.props.detail.length > 1 ? "(" + this.props.index + ")" : undefined,
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
					)
				);
			}
		}]);

		return CaigouDetail;
	}(Component);

	exports.default = CaigouDetail;

/***/ },

/***/ 260:
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

/***/ 261:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _ExpenseDetail = __webpack_require__(262);

	var _ExpenseDetail2 = _interopRequireDefault(_ExpenseDetail);

	var _alert = __webpack_require__(260);

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

			_this.state = { detail: [{ key: +new Date() }], caigouList: [], sumPrice: 0, expectPayDate: undefined };
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
				returnValue.amount = this.state.sumPrice;
				returnValue.applyResean = "报销总金额" + returnValue.amount;
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

				console.log(this.refs);
				var sumMoney = 0;
				this.state.detail.forEach(function (item, index) {
					var money = _this3.refs['caigouDetail' + index].getMoney();
					sumMoney += money;
				});
				this.setState({ sumPrice: sumMoney });
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
							this.state.sumPrice.toFixed(2)
						)
					)
				);
			}
		}]);

		return Expense;
	}(Component);

	exports.default = Expense;

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

	var _config = __webpack_require__(243);

	var _config2 = _interopRequireDefault(_config);

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
			_this2.typeArr = ['交通费', '住宿费', '通讯费', '采购费', '餐补费', '其他'];
			_this2.text = [{ field: 'money', text: '价格' }];
			_this2.state = { type: 0, imgList: [], showUpload: true, item: { money: '', type: 0, remark: '', photoJArr: '' } };
			return _this2;
		}

		_createClass(ExpenseDetail, [{
			key: 'del',
			value: function del(index) {
				var hasValue = false;
				for (var key in this.state.item) {
					if (this.state.item[key] != "") {
						hasValue = true;
					}
				}
				if (hasValue) {
					if (confirm("确定删除报销明细（" + this.props.index + "）?")) {
						this.props.del(this.props.index);
					}
				} else {
					this.props.del(this.props.index);
				}

				this.props.computeMoney(this);
				//this.props.reRender();
			}
		}, {
			key: 'componentDidMount',
			value: function componentDidMount() {
				//console.log("didMount")
				this.setState({ state: this.props.item });
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
						this.props.detail.length === 1 ? undefined : indexstr = this.props.index;
						returnValue = { status: false, text: "请输入报销明细" + indexstr + "的" + item.text };
					}
				};
				return returnValue;
			}
			//选择图片

		}, {
			key: 'selectPictrues',
			value: function selectPictrues() {
				if (!this.state.showUpload) {
					return false;
				}
				var _this = this;
				_config2.default.native('selectPictures', { count: this.state.imgList.length, sum: 4 }).then(function (res) {
					if (res.code == 200) {
						var data = res.data.map(function (item) {
							return { data: item, uploaded: false };
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
							index: index.toString(),
							imageData: item.data
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
				Object.assign(returnValues, this.state.item, { photoJArr: this.imgList });
				return returnValues;
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
						{ className: 'detail', title: this.props.title, __self: this
						},
						_react2.default.createElement(
							'h3',
							{
								__self: this
							},
							'报销明细',
							this.props.detail.length > 1 ? "(" + this.props.index + ")" : undefined,
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
											{ onClick: _this3.selectType.bind(_this3, index), className: _this3.state.type == index ? "focus" : undefined, __self: _this3
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
											{ key: index, className: 'item', __self: _this3
											},
											!item.uploaded ? _react2.default.createElement(
												'span',
												{ className: 'uploading', __self: _this3
												},
												'上传中...'
											) : _react2.default.createElement('i', { onClick: _this3.delImg.bind(_this3, item, index), className: 'del iconfont icon-103', __self: _this3
											}),
											_react2.default.createElement('img', { src: "data:image/png;base64," + item.data, __self: _this3
											})
										);
									})
								)
							),
							_react2.default.createElement(
								'div',
								{ className: 'txt-reason rowinput', __self: this
								},
								_react2.default.createElement('textarea', { ref: 'applyResean', value: this.state.item.applyResean, onChange: this.change.bind(this, "applyResean"), maxLength: '140', placeholder: '备注（非必填）', __self: this
								})
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

/***/ 263:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _alert = __webpack_require__(260);

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

			_this.state = { applyDetail: '' };
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
			key: 'render',
			value: function render() {
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
						_react2.default.createElement('input', { type: 'text', ref: 'applyDetail', maxLength: '60', placeholder: '请输入（必填）', __self: this
						})
					),
					_react2.default.createElement(
						'div',
						{ className: 'txt-reason', __self: this
						},
						_react2.default.createElement('textarea', { ref: 'applyResean', maxLength: '60', placeholder: '请输入申请详情（必填）', __self: this
						})
					)
				);
			}
		}]);

		return Generic;
	}(Component);

	exports.default = Generic;

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

	var _reactHelmet = __webpack_require__(233);

	var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

	var _Caigou = __webpack_require__(265);

	var _Caigou2 = _interopRequireDefault(_Caigou);

	var _Expense = __webpack_require__(267);

	var _Expense2 = _interopRequireDefault(_Expense);

	var _Generic = __webpack_require__(269);

	var _Generic2 = _interopRequireDefault(_Generic);

	var _reactCookie = __webpack_require__(253);

	var _reactCookie2 = _interopRequireDefault(_reactCookie);

	var _config = __webpack_require__(243);

	var _config2 = _interopRequireDefault(_config);

	var _UserAvatar = __webpack_require__(271);

	var _UserAvatar2 = _interopRequireDefault(_UserAvatar);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Component = _react2.default.Component;

	var Detail = function (_Component) {
		_inherits(Detail, _Component);

		function Detail(props) {
			_classCallCheck(this, Detail);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Detail).call(this, props));

			_this.status = {
				isLast: 0, //0非最后,1是最后
				isMeToDeal: false, //test txb false   //0是未完成，1是完成
				id: 0,
				isEnd: false };
			_this.state = { detail: { approveDetailVo: [], customStruct: {} }, customStruct: { detailJArr: [] }, userInfo: {} };
			return _this;
		}

		_createClass(Detail, [{
			key: 'componentWillMount',
			value: function componentWillMount() {
				var _this2 = this;

				console.log('will');
				/*cookie.save('userId',80976)
	   this.setState({
	   	userInfo:{
	   		"uid":"80976",
	   		"uname": "严丽芳",
	   		"avatar": "http://n1.store.uban360.com:7188/sfs/avatar?uid=80976",
	   	},
	   	detail: {
	   		"uid": "80976",
	   		"uname": "严丽芳",
	   		"avatar": "http://n1.store.uban360.com:7188/sfs/avatar?uid=80976",
	   		"applyId": "QJ1464745300081",
	   		"deptName": "测试部",
	   		"applyType": "0",
	   		"beginDate": "2016-05-13 14:36:00",
	   		"endDate": "2016-05-13 15:36:00",
	   		"beginOverTime": "0000-00-00 00:00:00",
	   		"endOverTime": "0000-00-00 00:00:00",
	   		"travelAddr": null,
	   		"leaveType": 0,
	   		"outType": 0,
	   		"applyResean": "/script",
	   		"approveStatus": 1,
	   		"photos": [
	   			{
	   				photo_url:"https://signin.api.jituancaiyun.com/signin/styles/images/sprite3.png"
	   			},
	   			{
	   				photo_url:"https://signin.api.jituancaiyun.com/signin/styles/images/sprite3.png"
	   			},
	   			{
	   				photo_url:"https://signin.api.jituancaiyun.com/signin/styles/images/sprite3.png"
	   			},
	   			{
	   				photo_url:"https://signin.api.jituancaiyun.com/signin/styles/images/sprite3.png"
	   			}
	   		],
	   		"customStruct":{
	   			"amount": "采购 总金额",
	   			"expectPayDate": "期望交付日期，如 2016-6-6 12:11:10",
	   			"detailJArr": [ {"item":"物品名称", "spec": "规格", "unit": "单位", "quantity": "数量", "price": "单价"}, {"item":"物品名称", "spec": "规格", "unit": "单位", "quantity": "数量", "price": "单价"} ]
	   		},
	   		"approveDetailVo": [{
	   			"id": "547",
	   			"uid": "80976",
	   			"uname": "严丽芳",
	   			"avatar": "http://n1.store.uban360.com:7188/sfs/avatar?uid=80976",
	   			"approveStatus": "3",
	   			"approveDate": "2016-06-01 09:41:40",
	   			"approveOrder": "0",
	   			"approveDesc": null,
	   			"userMobile": "18268832118"
	   		}, {
	   			"id": "548",
	   			"uid": "80976",
	   			"uname": "田想兵",
	   			"avatar": "http://n1.store.uban360.com:7188/sfs/avatar?uid=10101001610432",
	   			"approveStatus": "1",
	   			"approveDate": "2016-06-01 09:41:40",
	   			"approveOrder": "1",
	   			"approveDesc": null,
	   			"userMobile": "18667040027"
	   		}],
	   		"customJObj": null
	   	}
	   });*/
				var param = {};
				param.applyId = this.props.params.id;
				_config2.default.ajax('queryApplyDetail', {
					method: 'POST',
					body: JSON.stringify(param)
				}).then(function (res) {
					_this2.setState({ userInfo: {
							"uid": res.result.uid,
							"uname": res.result.uname,
							"avatar": res.result.avatar
						}, detail: res.result });
					console.log(_this2.state);
				});
				//获取知会人
				this.setState({
					extraknower: [{ "uid": "10101001610432", "name": "田想兵", "avatar": "http://n1.store.uban360.com:7188/sfs/avatar?uid=10101001610432" }]
				});
			}
			/*formatImg(item){
	  	if(item.error)
	  	{
	  		return <div className="img" style={{backgroundColor:item.color}}>{item.uname}</div>
	  	}else{
	  		return undefined;
	  	}
	  }
	  errorImg(item,e){
	  	console.log(e)
	       let avatarColors = ['#f17474','#7ac47a','#efbc6b','#75a4d7','#45b2e3']
	       let color = avatarColors[item.uid% 5];
	       item.error=true;
	       item.color= color;
	       this.setState({userInfo:this.state.userInfo});
	  }
	  errorImg2(item,e){
	  	console.log(e)
	       let avatarColors = ['#f17474','#7ac47a','#efbc6b','#75a4d7','#45b2e3']
	       let color = avatarColors[item.uid% 5];
	       item.error=true;
	       item.color= color;
	       this.setState({detail:this.state.detail});
	  }*/

		}, {
			key: 'renderDetail',
			value: function renderDetail() {
				var category = this.props.params.type;
				switch (parseInt(category)) {
					case 5:
						{
							//采购
							return _react2.default.createElement(_Caigou2.default, { ref: 'myForm', detail: this.state.detail, stage: this, __self: this
							});
							break;
						}
					case 4:
						{
							//报销
							return _react2.default.createElement(_Expense2.default, { ref: 'myForm', detail: this.state.detail, stage: this, __self: this
							});
							break;
						}
					case 6:
						{
							console.log('通用');
							//通用
							return _react2.default.createElement(_Generic2.default, { ref: 'myForm', detail: this.state.detail, stage: this, __self: this
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
			key: 'submit',
			value: function submit(approveStatus) {
				console.log(approveStatus);
				var params = {};
				params.ts = +new Date();
				params.token = _reactCookie2.default.load('token');
				params.applyId = this.props.params.id;
				params.orgId = _reactCookie2.default.load('orgId');
				params.uid = _reactCookie2.default.load('uid');
				params.approveStatus = approveStatus;
				params.approveDesc = "审批理由";
				params.approveOrder = this.status.approveOrder;
				params.isLast = this.status.isLast;
				if (approveStatus == -1) {
					console.log('重新申请');
					location.href = "/#create/" + this.props.params.type + "/" + this.props.params.title + "/" + this.props.params.id;
				}
			}
		}, {
			key: 'renderButton',
			value: function renderButton() {
				var data = this.state.detail;
				var isNeedReApply = false; //是否需要重新申请
				var isFromme = this.props.params.pageType == "fromme" ? true : false;
				var uid = _reactCookie2.default.load('userId');
				if (data.approveStatus == "2" || data.approveStatus == "3" || data.approveStatus == "4") {
					this.status.isEnd = true;
				}
				for (var i = data.approveDetailVo.length - 1; i >= 0; i--) {
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
				if (isFromme) {
					//我发起的
					if (!status.isEnd) {
						return _react2.default.createElement(
							'a',
							{ className: 'bottomBtn', onClick: this.submit.bind(this, 4), __self: this
							},
							'撤回'
						);
					}
				} else {
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
			key: 'render',
			value: function render() {
				var _this3 = this;

				return _react2.default.createElement(
					'div',
					{ className: 'detail-info', __self: this
					},
					_react2.default.createElement(_reactHelmet2.default, { title: this.props.params.title + "详情", __self: this
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
								_react2.default.createElement(_UserAvatar2.default, { item: this.state.userInfo, errorCallback: function errorCallback() {
										_this3.setState({ userInfo: _this3.state.userInfo });
									}, __self: this
								})
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
								this.state.detail.deptName
							)
						),
						this.renderDetail()
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
								{ className: 'item', __self: _this3
								},
								_this3.renderStatus(item.approveStatus),
								_react2.default.createElement(
									'div',
									{ className: 'user-box', __self: _this3
									},
									_react2.default.createElement(_UserAvatar2.default, { item: item, errorCallback: function errorCallback() {
											_this3.setState({ detail: _this3.state.detail });
										}, __self: _this3
									}),
									_react2.default.createElement(
										'div',
										{ className: 'userName', __self: _this3
										},
										item.uname,
										_react2.default.createElement(
											'div',
											{ className: 'time', __self: _this3
											},
											item.approveDate
										)
									)
								)
							);
						})
					),
					_react2.default.createElement(
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
								var arr = (_this3.state.extraknower || []).map(function (item) {
									return item.name;
								});
								return arr.join('、');
							}()
						)
					),
					this.renderButton()
				);
			}
		}]);

		return Detail;
	}(Component);

	exports.default = Detail;

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

	var _CaigouDetail = __webpack_require__(266);

	var _CaigouDetail2 = _interopRequireDefault(_CaigouDetail);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Component = _react2.default.Component;

	var Caigou = function (_Component) {
		_inherits(Caigou, _Component);

		function Caigou(props) {
			_classCallCheck(this, Caigou);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Caigou).call(this, props));

			_this.detail = _this.props.detail;
			return _this;
		}

		_createClass(Caigou, [{
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
							'日常办公'
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
							'2015.1.1'
						)
					),
					_react2.default.createElement('div', { className: 'topborder', __self: this
					}),
					(this.detail.customStruct && this.detail.customStruct.detailJArr || []).map(function (item, index) {
						var indx = index + 1;
						return _react2.default.createElement(_CaigouDetail2.default, { detail: _this2.detail.customStruct.detailJArr, ref: "caigouDetail" + index, index: indx, item: item, key: index, __self: _this2
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
							'总价：'
						),
						_react2.default.createElement(
							'span',
							{ className: 'price', __self: this
							},
							this.detail.customStruct && this.detail.customStruct.amount
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
							this.detail.photos && this.detail.photos.length > 0 ? (this.detail.photos || []).map(function (item) {
								return _react2.default.createElement('img', { src: item.photo_url, __self: _this2
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
							this.detail.applyId
						)
					)
				);
			}
		}]);

		return Caigou;
	}(Component);

	exports.default = Caigou;

/***/ },

/***/ 266:
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
									this.props.detail.length > 1 ? "(" + this.props.index + ")" : undefined
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

/***/ 267:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _ExpenseDetail = __webpack_require__(268);

	var _ExpenseDetail2 = _interopRequireDefault(_ExpenseDetail);

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

			_this.detail = _this.props.detail;
			return _this;
		}

		_createClass(Expense, [{
			key: 'render',
			value: function render() {
				var _this2 = this;

				return _react2.default.createElement(
					'div',
					{
						__self: this
					},
					_react2.default.createElement('div', { className: 'topborder', __self: this
					}),
					this.detail.customStruct.detailJArr.map(function (item, index) {
						var indx = index + 1;
						return _react2.default.createElement(_ExpenseDetail2.default, { detail: _this2.detail.customStruct.detailJArr, ref: "ExpenseDetail" + index, index: indx, item: item, key: index, __self: _this2
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
							'总价：'
						),
						_react2.default.createElement(
							'span',
							{ className: 'price', __self: this
							},
							this.detail.customStruct.amount
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
							this.detail.applyId
						)
					)
				);
			}
		}]);

		return Expense;
	}(Component);

	exports.default = Expense;

/***/ },

/***/ 268:
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

	var ExpenseDetail = function (_Component) {
		_inherits(ExpenseDetail, _Component);

		function ExpenseDetail() {
			_classCallCheck(this, ExpenseDetail);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(ExpenseDetail).apply(this, arguments));
		}

		_createClass(ExpenseDetail, [{
			key: "render",
			value: function render() {
				var _this2 = this;

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
									"报销明细",
									this.props.detail.length > 1 ? "(" + this.props.index + ")" : undefined
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
								"报销类型："
							),
							this.props.item.type
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
								"金额（元）："
							),
							this.props.item.money
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
								"备注："
							),
							this.props.item.remark
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
								"相关照片："
							),
							_react2.default.createElement(
								"span",
								{ className: "photos", __self: this
								},
								this.props.item.photoJArr && this.props.item.photoJArr.length > 0 ? (this.detail.photos || []).map(function (item) {
									return _react2.default.createElement("img", { src: item, __self: _this2
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

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Component = _react2.default.Component;

	var Generic = function (_Component) {
		_inherits(Generic, _Component);

		function Generic(props) {
			_classCallCheck(this, Generic);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Generic).call(this, props));

			_this.detail = _this.props.detail;
			return _this;
		}

		_createClass(Generic, [{
			key: 'render',
			value: function render() {
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
							this.detail.applyResean
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
							this.detail.customStruct.applyDetail
						)
					)
				);
			}
		}]);

		return Generic;
	}(Component);

	exports.default = Generic;

/***/ },

/***/ 271:
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
			key: "formatImg",
			value: function formatImg() {
				if (this.state.error) {
					return _react2.default.createElement(
						"div",
						{ className: "img", style: { backgroundColor: this.state.color }, __self: this
						},
						(this.props.item.name || "").slice(-2)
					);
				} else {
					return undefined;
				}
			}
		}, {
			key: "errorImg",
			value: function errorImg(item, e) {
				//console.log(e)
				var avatarColors = ['#f17474', '#7ac47a', '#efbc6b', '#75a4d7', '#45b2e3'];
				var color = avatarColors[item.uid % 5];
				/*  item.error=true;
	     item.color= color;*/
				//this.setState({userInfo:this.state.userInfo});
				//this.props.errorCallback&&this.props.errorCallback.call(this,item);
				//this.setState({item:this.state.item});
				this.setState({ color: color, error: true });
			}
		}, {
			key: "render",
			value: function render() {
				return _react2.default.createElement(
					"span",
					{
						__self: this
					},
					this.formatImg(),
					!this.state.error ? _react2.default.createElement("img", { onError: this.errorImg.bind(this, this.props.item), src: "http://n1.store.uban360.com:7188/sfs/avatar?uid=" + this.props.item.uid, __self: this
					}) : undefined
				);
			}
		}]);

		return UserAvatar;
	}(Component);

	exports.default = UserAvatar;

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

	var _config = __webpack_require__(243);

	var _config2 = _interopRequireDefault(_config);

	var _UserAvatar = __webpack_require__(271);

	var _UserAvatar2 = _interopRequireDefault(_UserAvatar);

	var _ListItem = __webpack_require__(273);

	var _ListItem2 = _interopRequireDefault(_ListItem);

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

			_this.state = { list: [{ uid: 7564213, name: "李三" }] };
			return _this;
		}

		_createClass(List, [{
			key: 'renderAvatar',
			value: function renderAvatar(item) {
				return _react2.default.createElement(_UserAvatar2.default, { item: item, __self: this
				});
			}
		}, {
			key: 'render',
			value: function render() {
				var _this2 = this;

				return _react2.default.createElement(
					'div',
					{ className: 'list', __self: this
					},
					_react2.default.createElement(
						'div',
						{ className: 'head', __self: this
						},
						_react2.default.createElement(
							'a',
							{ className: 'focus', __self: this
							},
							'待审批'
						),
						_react2.default.createElement(
							'a',
							{
								__self: this
							},
							'已审批'
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'list-body', __self: this
						},
						this.state.list.map(function (item) {
							return _react2.default.createElement(_ListItem2.default, { avatar: _this2.renderAvatar(item), __self: _this2
							});
						}),
						_react2.default.createElement('div', {
							__self: this
						})
					)
				);
			}
		}]);

		return List;
	}(Component);

	exports.default = List;

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

	var ListItem = function (_Component) {
		_inherits(ListItem, _Component);

		function ListItem(props) {
			_classCallCheck(this, ListItem);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(ListItem).call(this, props));
		}

		_createClass(ListItem, [{
			key: "render",
			value: function render() {
				return _react2.default.createElement(
					"div",
					{ className: "item", __self: this
					},
					_react2.default.createElement(
						"div",
						{ className: "userAvatar", __self: this
						},
						this.props.avatar
					),
					_react2.default.createElement(
						"div",
						{ className: "rcontent", __self: this
						},
						_react2.default.createElement(
							"div",
							{ className: "event", __self: this
							},
							this.props.title,
							_react2.default.createElement(
								"span",
								{ className: "time", __self: this
								},
								this.props.time
							)
						),
						_react2.default.createElement(
							"div",
							{ className: "desc", __self: this
							},
							_react2.default.createElement(
								"span",
								{ className: "status", __self: this
								},
								this.props.status
							),
							_react2.default.createElement(
								"p",
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

/***/ }

});