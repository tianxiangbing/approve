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

	var _App = __webpack_require__(226);

	var _App2 = _interopRequireDefault(_App);

	var _App3 = __webpack_require__(231);

	var _App4 = _interopRequireDefault(_App3);

	var _Create = __webpack_require__(256);

	var _Create2 = _interopRequireDefault(_Create);

	var _Detail = __webpack_require__(263);

	var _Detail2 = _interopRequireDefault(_Detail);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	(0, _reactDom.render)(_react2.default.createElement(
	  _reactRouter.Router,
	  { history: _reactRouter.hashHistory },
	  _react2.default.createElement(_reactRouter.Route, { path: '/', component: _App4.default }),
	  _react2.default.createElement(_reactRouter.Route, { path: '/create/:type/:title', component: _Create2.default }),
	  _react2.default.createElement(_reactRouter.Route, { path: '/create/:type/:title/:id', component: _Create2.default }),
	  _react2.default.createElement(_reactRouter.Route, { path: '/detail/:type/:title/:id', component: _Detail2.default }),
	  _react2.default.createElement(_reactRouter.Route, { path: '/detail/:type/:title/:id/:pageType', component: _Detail2.default })
	), document.getElementById('app')); /*
	                                     * Created with Sublime Text 3.
	                                     * license: http://www.lovewebgames.com
	                                     * User: 田想兵
	                                     * Date: 2016-05-30
	                                     * Time: 10:27:55
	                                     * Contact: 55342775@qq.com
	                                     */

/***/ },

/***/ 226:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	"use strict";

/***/ },

/***/ 231:
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

	var _reactHelmet = __webpack_require__(232);

	var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

	var _config = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"config\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _config2 = _interopRequireDefault(_config);

	var _reactCookie = __webpack_require__(252);

	var _reactCookie2 = _interopRequireDefault(_reactCookie);

	var _Dialog = __webpack_require__(255);

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
				return _react2.default.createElement(_Dialog2.default, _extends({ stage: this }, this.state.dialog));
			}
		}, {
			key: 'hideDialog',
			value: function hideDialog() {
				this.setState({ dialog: 0 });
			}
		}, {
			key: 'render',
			value: function render() {
				var _this4 = this;

				return _react2.default.createElement(
					'div',
					{ className: 'body' },
					_react2.default.createElement(_reactHelmet2.default, { title: '审批' }),
					_react2.default.createElement(
						'div',
						{ className: 'header' },
						_react2.default.createElement(
							'div',
							{ className: 'orgInfo' },
							function () {
								if (_this4.state.corpList.length > 1) {
									return _react2.default.createElement(
										'div',
										{ className: 'focusorg', onClick: _this4.expandOrg.bind(_this4) },
										_this4.state.currCorp.orgName,
										' ',
										_react2.default.createElement('i', { className: _this4.state.expand ? "triangle up" : "triangle down" })
									);
								} else {
									return _react2.default.createElement(
										'div',
										{ className: 'focusorg' },
										_this4.state.currCorp.orgName
									);
								}
							}(),
							_react2.default.createElement(
								'div',
								{ className: this.state.expand ? "orgList" : "orgList hide" },
								(this.state.corpList || []).map(function (item) {
									return _react2.default.createElement(
										'div',
										{ className: item.orgId == _this4.state.currCorp.orgId ? "focusorg" : "", onClick: _this4.select.bind(_this4, item) },
										item.orgName
									);
								})
							)
						),
						this.state.expand ? _react2.default.createElement('div', { className: 'mask', onClick: this.hideOrgList.bind(this) }) : null
					),
					_react2.default.createElement(
						'div',
						{ className: 'menu' },
						_react2.default.createElement(
							'a',
							{ href: 'http://10.0.10.46:8080/approve/app/tome.html' },
							_react2.default.createElement('i', { className: 'iconfont icon-111' }),
							'待我审批'
						),
						_react2.default.createElement(
							'a',
							{ href: 'http://10.0.10.46:8080/approve/app/fromme.html' },
							_react2.default.createElement('i', { className: 'iconfont icon-112 ifuck' }),
							'我发起的'
						)
					),
					_react2.default.createElement(
						'a',
						{ className: 'followme', href: 'http://10.0.10.46:8080/approve/app/notify.html' },
						'知会我的',
						_react2.default.createElement('i', { className: 'iconfont icon-xiayibu' })
					),
					_react2.default.createElement(
						'div',
						{ className: 'menu-list' },
						_react2.default.createElement(
							'a',
							{ href: 'http://10.0.10.46:8080/approve/app/form_qj.html' },
							_react2.default.createElement('i', { className: 'iconfont icon-110' }),
							'请假'
						),
						_react2.default.createElement(
							'a',
							{ href: 'http://10.0.10.46:8080/approve/app/form_tx.html' },
							_react2.default.createElement('i', { className: 'iconfont icon-107' }),
							'调休'
						),
						_react2.default.createElement(
							'a',
							{ href: 'http://10.0.10.46:8080/approve/app/form_wq.html' },
							_react2.default.createElement('i', { className: 'iconfont icon-108' }),
							'外出'
						),
						_react2.default.createElement(
							'a',
							{ href: 'http://10.0.10.46:8080/approve/app/form_cc.html' },
							_react2.default.createElement('i', { className: 'iconfont icon-109' }),
							'出差'
						),
						_react2.default.createElement(
							'a',
							{ href: '#create/4/报销' },
							_react2.default.createElement('i', { className: 'iconfont icon-iconfontshenpicaigou02' }),
							'报销'
						),
						_react2.default.createElement(
							'a',
							{ href: '#create/5/采购' },
							_react2.default.createElement('i', { className: 'iconfont icon-iconfontshenpicaigou01' }),
							'采购'
						),
						_react2.default.createElement(
							'a',
							{ href: '#create/6/通用' },
							_react2.default.createElement('i', { className: 'iconfont icon-shenpi03' }),
							'通用'
						),
						_react2.default.createElement(
							'a',
							null,
							_react2.default.createElement('i', { className: 'iconfont' }),
							'　'
						),
						_react2.default.createElement(
							'a',
							null,
							_react2.default.createElement('i', { className: 'iconfont' }),
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

/***/ 232:
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

	var _reactSideEffect = __webpack_require__(233);

	var _reactSideEffect2 = _interopRequireDefault(_reactSideEffect);

	var _deepEqual = __webpack_require__(236);

	var _deepEqual2 = _interopRequireDefault(_deepEqual);

	var _objectAssign = __webpack_require__(239);

	var _objectAssign2 = _interopRequireDefault(_objectAssign);

	var _HelmetConstantsJs = __webpack_require__(240);

	var _PlainComponent = __webpack_require__(241);

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

/***/ 233:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _fbjsLibExecutionEnvironment = __webpack_require__(234);

	var _fbjsLibExecutionEnvironment2 = _interopRequireDefault(_fbjsLibExecutionEnvironment);

	var _fbjsLibShallowEqual = __webpack_require__(235);

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

/***/ 234:
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

/***/ 236:
/***/ function(module, exports, __webpack_require__) {

	var pSlice = Array.prototype.slice;
	var objectKeys = __webpack_require__(237);
	var isArguments = __webpack_require__(238);

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

/***/ 237:
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

/***/ 238:
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

/***/ 239:
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

/***/ 240:
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

/***/ 241:
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

/***/ 252:
/***/ function(module, exports, __webpack_require__) {

	var cookie = __webpack_require__(253);

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

/***/ 253:
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
						null,
						_react2.default.createElement(
							"div",
							{ className: "dialog " + this.props.type },
							_react2.default.createElement(
								"div",
								null,
								this.props.msg
							),
							this.props.buttons
						),
						this.props.mask ? _react2.default.createElement("div", { className: "dialog-mask", onClick: this.hide.bind(this) }) : undefined
					);
				}
				return _react2.default.createElement(
					"div",
					null,
					d
				);
			}
		}]);

		return Dialog;
	}(Component);

	exports.default = Dialog;

/***/ },

/***/ 256:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactHelmet = __webpack_require__(232);

	var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

	var _Caigou = __webpack_require__(257);

	var _Caigou2 = _interopRequireDefault(_Caigou);

	var _config = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"config\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _config2 = _interopRequireDefault(_config);

	var _Expense = __webpack_require__(260);

	var _Expense2 = _interopRequireDefault(_Expense);

	var _Generic = __webpack_require__(262);

	var _Generic2 = _interopRequireDefault(_Generic);

	var _reactCookie = __webpack_require__(252);

	var _reactCookie2 = _interopRequireDefault(_reactCookie);

	var _Dialog = __webpack_require__(255);

	var _Dialog2 = _interopRequireDefault(_Dialog);

	var _alert = __webpack_require__(259);

	var _alert2 = _interopRequireDefault(_alert);

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
			_this2.state = { imgList: [], showUpload: true, authList: [], informList: [], showAddPic: true, dialog: 0 };
			return _this2;
		}

		_createClass(Create, [{
			key: 'componentWillMount',
			value: function componentWillMount() {
				if (this.params.type == 4) {
					this.setState({ showAddPic: false });
				}

				_config2.default.ajax('lastSelected');
			}
		}, {
			key: 'componentDidMount',
			value: function componentDidMount() {
				console.log(this.refs);
			}
		}, {
			key: 'submit',
			value: function submit() {
				var _this3 = this;

				if (this.refs.myForm.validate()) {
					var values = this.refs.myForm.getValues();
					console.log(values);
					var params = {};

					params.applyType = this.props.params.type;
					params.customStruct = JSON.stringify(values);
					params.beginDate = new Date();
					params.endDate = new Date();
					params.flowStr = JSON.stringify(this.state.authList);
					params.photoStr = JSON.stringify(this.imgList);

					//事由
					params.applyResean = values.applyResean;

					_config2.default.ajax('save', {
						body: JSON.stringify(params),
						method: 'post'
					}).then(function (res) {
						if (res.status == 200) {
							(0, _alert2.default)(_this3.props.params.title + '申请提交成功', _this3);
							setTimeout(function () {
								location.href = "#/";
							}, 2000);
						}
					});
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
							if (res.code == 200) {
								(function () {
									var data = res.data;
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
				var _this4 = this;

				if (this.checkIsUpload()) {
					this.setState({ dialog: { mask: true, show: true, msg: "图片正在上传，请稍后", type: "alert" } });
					return;
				}
				_config2.default.native('selectPeopleIOS').then(function (res) {
					var data = res.data;
					var authList = _this4.state.authList.concat(data);
					_this4.setState({ authList: authList });
				});
			}
			//选择人员（知会人）

		}, {
			key: 'addUser2',
			value: function addUser2() {
				var _this5 = this;

				if (this.checkIsUpload()) {
					this.setState({ dialog: { mask: true, show: true, msg: "图片正在上传，请稍后", type: "alert" } });
					return;
				}
				_config2.default.native('selectPeopleIOS').then(function (res) {
					var data = res.data;
					var informList = _this5.state.informList.concat(data);
					_this5.setState({ informList: informList });
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
			key: 'errorImg',
			value: function errorImg(item, e) {
				console.log(e);
				var avatarColors = ['#f17474', '#7ac47a', '#efbc6b', '#75a4d7', '#45b2e3'];
				var color = avatarColors[item.uid % 5];
				item.error = true;
				item.color = color;
				this.setState({ authList: this.state.authList });
			}
		}, {
			key: 'formatImg',
			value: function formatImg(item) {
				if (item.error) {
					return _react2.default.createElement(
						'div',
						{ className: 'img', style: { backgroundColor: item.color } },
						item.name
					);
				} else {
					return undefined;
				}
			}
		}, {
			key: 'delPeople',
			value: function delPeople(index) {
				this.state.authList.splice(index, 1);
				this.setState({ authList: this.state.authList });
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
							return _react2.default.createElement(_Caigou2.default, { ref: 'myForm', stage: this });
							break;
						}
					case 4:
						{
							//报销
							return _react2.default.createElement(_Expense2.default, { ref: 'myForm', stage: this });
							break;
						}
					case 6:
						{
							console.log('通用');
							//通用
							return _react2.default.createElement(_Generic2.default, { ref: 'myForm', stage: this });
							break;
						}
				}
			}
		}, {
			key: 'renderDialog',
			value: function renderDialog() {
				console.log(this.state.dialog);
				return _react2.default.createElement(_Dialog2.default, _extends({ stage: this }, this.state.dialog));
			}
		}, {
			key: 'render',
			value: function render() {
				var _this6 = this;

				return _react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(_reactHelmet2.default, { title: this.params.title }),
					this.renderForm(),
					this.state.showAddPic ? _react2.default.createElement(
						'div',
						{ className: 'row add-photo' },
						_react2.default.createElement(
							'h4',
							{ onClick: this.selectPictrues.bind(this) },
							'照片',
							_react2.default.createElement(
								'span',
								null,
								'(最多可添加4张)'
							),
							_react2.default.createElement('i', { className: 'iconfont icon-qiandaotianjiazhaopian' })
						),
						_react2.default.createElement(
							'div',
							{ className: 'upload-list' },
							this.state.imgList.map(function (item, index) {
								console.log(item.uploaded);
								return _react2.default.createElement(
									'div',
									{ key: index, className: 'item' },
									!item.uploaded ? _react2.default.createElement(
										'span',
										{ className: 'uploading' },
										'上传中...'
									) : _react2.default.createElement('i', { onClick: _this6.del.bind(_this6, item, index), className: 'del iconfont icon-103' }),
									_react2.default.createElement('img', { src: "data:image/png;base64," + item.data })
								);
							})
						)
					) : undefined,
					_react2.default.createElement(
						'div',
						{ className: 'row add-people' },
						_react2.default.createElement(
							'h4',
							null,
							'审批人',
							_react2.default.createElement(
								'span',
								null,
								'(管理员已设置审批人)'
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'people-list' },
							this.state.authList.map(function (item, index) {
								return _react2.default.createElement(
									'span',
									null,
									_react2.default.createElement(
										'div',
										{ className: 'item', key: index, onClick: _this6.delPeople.bind(_this6, index) },
										_this6.formatImg(item),
										!item.error ? _react2.default.createElement('img', { onError: _this6.errorImg.bind(_this6, item), src: "http://n1.store.uban360.com:7188/sfs/avatar?uid=" + item.uid }) : undefined,
										_react2.default.createElement(
											'div',
											{ className: 'userName' },
											item.name
										)
									),
									_react2.default.createElement('i', { className: 'iconfont icon-shenpiliucheng' })
								);
							}),
							_react2.default.createElement(
								'div',
								{ className: 'item', onClick: this.addUser.bind(this) },
								_react2.default.createElement('i', { className: 'iconfont icon-113' })
							)
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'row add-people' },
						_react2.default.createElement(
							'h4',
							null,
							'知会人',
							_react2.default.createElement(
								'span',
								null,
								'(点击头像可删除)'
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'people-list' },
							this.state.informList.map(function (item, index) {
								return _react2.default.createElement(
									'div',
									{ className: 'item', key: index, onClick: _this6.delPeople2.bind(_this6, index) },
									_this6.formatImg(item),
									!item.error ? _react2.default.createElement('img', { onError: _this6.errorImg.bind(_this6, item), src: "http://n1.store.uban360.com:7188/sfs/avatar?uid=" + item.uid }) : undefined,
									_react2.default.createElement(
										'div',
										{ className: 'userName' },
										item.name
									)
								);
							}),
							_react2.default.createElement(
								'div',
								{ className: 'item', onClick: this.addUser2.bind(this) },
								_react2.default.createElement('i', { className: 'iconfont icon-113' })
							)
						)
					),
					_react2.default.createElement(
						'a',
						{ className: 'btn-submit', onClick: this.submit.bind(this) },
						'提交'
					),
					this.state.dialog ? this.renderDialog() : undefined
				);
			}
		}]);

		return Create;
	}(Component);

	exports.default = Create;

/***/ },

/***/ 257:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _CaigouDetail = __webpack_require__(258);

	var _CaigouDetail2 = _interopRequireDefault(_CaigouDetail);

	var _config = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"config\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _config2 = _interopRequireDefault(_config);

	var _alert = __webpack_require__(259);

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
				if (this.refs.applyResean.value == "") {
					(0, _alert2.default)('请输入采购事由', this.props.stage);
					return false;
				}
				if (this.state.expectPayDate == "") {
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
					null,
					_react2.default.createElement(
						'div',
						{ className: 'txt-reason' },
						_react2.default.createElement('textarea', { ref: 'applyResean', maxLength: '60', placeholder: '请输入采购事由（必填）' })
					),
					_react2.default.createElement(
						'div',
						{ className: 'row', onClick: this.setTime.bind(this) },
						_react2.default.createElement(
							'span',
							null,
							'期望交付日期'
						),
						_react2.default.createElement('input', { type: 'text', placeholder: '请选择（必填）', value: this.state.expectPayDate, readonly: 'readonly', disabled: 'true' })
					),
					this.state.detail.map(function (item, index) {
						var indx = index + 1;
						return _react2.default.createElement(_CaigouDetail2.default, { detail: _this5.state.detail, ref: "caigouDetail" + index, index: indx, computeMoney: _this5.computeMoney.bind(_this5), item: item, key: item.key, del: _this5.del.bind(_this5, index) });
					}),
					_react2.default.createElement(
						'div',
						{ className: 'row add-row', onClick: this.AddRow.bind(this) },
						_react2.default.createElement('i', { className: 'iconfont icon-113' }),
						'添加采购明细'
					),
					_react2.default.createElement(
						'div',
						{ className: 'row sum-price' },
						'总价（元）:',
						_react2.default.createElement(
							'span',
							null,
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

/***/ 258:
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
					if (confirm("确定删除采购明细" + this.props.index + "?")) {
						this.props.del(this.props.index);
					}
				} else {
					this.props.del(this.props.index);
				}

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
					if (this.state.item[item.field].length == 0) {
						returnValue = { status: false, text: "请输入采购明细" + this.props.index + "的" + item.text };
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
					null,
					_react2.default.createElement(
						'div',
						{ className: 'detail', title: this.props.title },
						_react2.default.createElement(
							'h3',
							null,
							'采购明细',
							this.props.detail.length > 1 ? "(" + this.props.index + ")" : undefined,
							' ',
							_react2.default.createElement(
								'a',
								{ onClick: this.del.bind(this), className: this.props.index > 1 ? "del" : "hide" },
								'删除'
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'formbox' },
							_react2.default.createElement(
								'div',
								{ className: 'rowinput' },
								'名称',
								_react2.default.createElement('input', { type: 'text', ref: 'item', maxLength: '60', value: this.state.item.item, onChange: this.change.bind(this, "item"), placeholder: '请输入（必填）' })
							),
							_react2.default.createElement(
								'div',
								{ className: 'rowinput' },
								'规格',
								_react2.default.createElement('input', { type: 'text', ref: 'spec', maxLength: '60', value: this.state.item.spec, onChange: this.change.bind(this, "spec"), placeholder: '请输入（必填）' })
							),
							_react2.default.createElement(
								'div',
								{ className: 'rowinput' },
								'单位',
								_react2.default.createElement('input', { type: 'text', ref: 'unit', maxLength: '60', value: this.state.item.unit, onChange: this.change.bind(this, "unit"), placeholder: '请输入（必填）' })
							),
							_react2.default.createElement(
								'div',
								{ className: 'rowinput' },
								'单价（元）',
								_react2.default.createElement('input', { type: 'text', ref: 'price', maxLength: '12', value: this.state.item.price, onChange: this.change.bind(this, "price"), placeholder: '请输入（必填）' })
							),
							_react2.default.createElement(
								'div',
								{ className: 'rowinput' },
								'数量',
								_react2.default.createElement('input', { type: 'text', ref: 'quantity', maxLength: '12', value: this.state.item.quantity, onChange: this.change.bind(this, "quantity"), placeholder: '请输入（必填）' })
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

/***/ 259:
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

/***/ 260:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _ExpenseDetail = __webpack_require__(261);

	var _ExpenseDetail2 = _interopRequireDefault(_ExpenseDetail);

	var _alert = __webpack_require__(259);

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
					null,
					this.state.detail.map(function (item, index) {
						var indx = index + 1;
						return _react2.default.createElement(_ExpenseDetail2.default, { detail: _this5.state.detail, ref: "caigouDetail" + index, index: indx, computeMoney: _this5.computeMoney.bind(_this5), item: item, key: item.key, del: _this5.del.bind(_this5, index) });
					}),
					_react2.default.createElement(
						'div',
						{ className: 'row add-row', onClick: this.AddRow.bind(this) },
						_react2.default.createElement('i', { className: 'iconfont icon-113' }),
						'添加报销明细'
					),
					_react2.default.createElement(
						'div',
						{ className: 'row sum-price' },
						'总价（元）:',
						_react2.default.createElement(
							'span',
							null,
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

/***/ 261:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _config = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"config\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

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
					if (confirm("确定删除报销明细" + this.props.index + "?")) {
						this.props.del(this.props.index);
					}
				} else {
					this.props.del(this.props.index);
				}

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
					if (this.state.item[item.field].length == 0) {
						returnValue = { status: false, text: "请输入报销明细" + this.props.index + "的" + item.text };
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
							if (res.code == 200) {
								(function () {
									var data = res.data;
									var i = data.index;
									var arr = _this.state.imgList.map(function (item, index) {
										if (index == i) {
											item.uploaded = true;
										}
										return item;
									});
									_this.setState({
										"imgList": arr
									});
									_this.imgList.push(data.url);
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
					null,
					_react2.default.createElement(
						'div',
						{ className: 'detail', title: this.props.title },
						_react2.default.createElement(
							'h3',
							null,
							'报销明细',
							this.props.detail.length > 1 ? "(" + this.props.index + ")" : undefined,
							' ',
							_react2.default.createElement(
								'a',
								{ onClick: this.del.bind(this), className: this.props.index > 1 ? "del" : "hide" },
								'删除'
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'formbox' },
							_react2.default.createElement(
								'div',
								{ className: 'rowinput' },
								'报销类型',
								_react2.default.createElement(
									'div',
									{ className: 'type-list' },
									this.typeArr.map(function (item, index) {
										return _react2.default.createElement(
											'a',
											{ onClick: _this3.selectType.bind(_this3, index), className: _this3.state.type == index ? "focus" : undefined },
											item
										);
									})
								)
							),
							_react2.default.createElement(
								'div',
								{ className: 'rowinput' },
								'金额（元）',
								_react2.default.createElement('input', { type: 'text', ref: 'price', maxLength: '12', value: this.state.item.money, onChange: this.change.bind(this, "money"), placeholder: '请输入（必填）' })
							),
							_react2.default.createElement(
								'div',
								{ className: 'row add-photo rowinput' },
								_react2.default.createElement(
									'h4',
									{ onClick: this.selectPictrues.bind(this) },
									'照片',
									_react2.default.createElement(
										'span',
										null,
										'(最多可添加4张)'
									),
									_react2.default.createElement('i', { className: 'iconfont icon-qiandaotianjiazhaopian' })
								),
								_react2.default.createElement(
									'div',
									{ className: 'upload-list' },
									this.state.imgList.map(function (item, index) {
										console.log(item.uploaded);
										return _react2.default.createElement(
											'div',
											{ key: index, className: 'item' },
											!item.uploaded ? _react2.default.createElement(
												'span',
												{ className: 'uploading' },
												'上传中...'
											) : _react2.default.createElement('i', { onClick: _this3.delImg.bind(_this3, item, index), className: 'del iconfont icon-103' }),
											_react2.default.createElement('img', { src: "data:image/png;base64," + item.data })
										);
									})
								)
							),
							_react2.default.createElement(
								'div',
								{ className: 'txt-reason rowinput' },
								_react2.default.createElement('textarea', { ref: 'applyResean', value: this.state.item.applyResean, onChange: this.change.bind(this, "applyResean"), maxLength: '140', placeholder: '备注（非必填）' })
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

/***/ 262:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _alert = __webpack_require__(259);

	var _alert2 = _interopRequireDefault(_alert);

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
				if (this.refs.applyDetail.value == "") {
					(0, _alert2.default)('请输入申请内容', this.props.stage);
					return false;
				}
				if (this.refs.applyResean.value == "") {
					(0, _alert2.default)('请输入申请详情', this.props.stage);
					return false;
				}
			}
		}, {
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(
						'div',
						{ className: 'row applyDetail' },
						_react2.default.createElement(
							'span',
							null,
							'申请内容'
						),
						_react2.default.createElement('input', { type: 'text', ref: 'applyDetail', maxLength: '60', placeholder: '请输入（必填）' })
					),
					_react2.default.createElement(
						'div',
						{ className: 'txt-reason' },
						_react2.default.createElement('textarea', { ref: 'applyResean', maxLength: '60', placeholder: '请输入申请详情（必填）' })
					)
				);
			}
		}]);

		return Generic;
	}(Component);

	exports.default = Generic;

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

	var _reactHelmet = __webpack_require__(232);

	var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

	var _Caigou = __webpack_require__(264);

	var _Caigou2 = _interopRequireDefault(_Caigou);

	var _Expense = __webpack_require__(266);

	var _Expense2 = _interopRequireDefault(_Expense);

	var _Generic = __webpack_require__(268);

	var _Generic2 = _interopRequireDefault(_Generic);

	var _reactCookie = __webpack_require__(252);

	var _reactCookie2 = _interopRequireDefault(_reactCookie);

	var _config = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"config\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _config2 = _interopRequireDefault(_config);

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
			// 流程是否结束
			_this.state = { detail: { approveDetailVo: [] }, customStruct: { detailJArr: [] }, userInfo: {} };
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
		}, {
			key: 'formatImg',
			value: function formatImg(item) {
				if (item.error) {
					return _react2.default.createElement(
						'div',
						{ className: 'img', style: { backgroundColor: item.color } },
						item.uname
					);
				} else {
					return undefined;
				}
			}
		}, {
			key: 'errorImg',
			value: function errorImg(item, e) {
				console.log(e);
				var avatarColors = ['#f17474', '#7ac47a', '#efbc6b', '#75a4d7', '#45b2e3'];
				var color = avatarColors[item.uid % 5];
				item.error = true;
				item.color = color;
				this.setState({ userInfo: this.state.userInfo });
			}
		}, {
			key: 'errorImg2',
			value: function errorImg2(item, e) {
				console.log(e);
				var avatarColors = ['#f17474', '#7ac47a', '#efbc6b', '#75a4d7', '#45b2e3'];
				var color = avatarColors[item.uid % 5];
				item.error = true;
				item.color = color;
				this.setState({ detail: this.state.detail });
			}
		}, {
			key: 'renderDetail',
			value: function renderDetail() {
				var category = this.props.params.type;
				switch (parseInt(category)) {
					case 5:
						{
							//采购
							return _react2.default.createElement(_Caigou2.default, { ref: 'myForm', detail: this.state.detail, stage: this });
							break;
						}
					case 4:
						{
							//报销
							return _react2.default.createElement(_Expense2.default, { ref: 'myForm', detail: this.state.detail, stage: this });
							break;
						}
					case 6:
						{
							console.log('通用');
							//通用
							return _react2.default.createElement(_Generic2.default, { ref: 'myForm', detail: this.state.detail, stage: this });
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
					{ className: "state " + proveStatus[status.toString()] },
					_react2.default.createElement('i', { className: "iconfont icon-" + proveStatusIcon[status.toString()] }),
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
							{ className: 'bottomBtn', onClick: this.submit.bind(this, 4) },
							'撤回'
						);
					}
				} else {
					//待我审批
					if (status.isMeToDeal) {
						return _react2.default.createElement(
							'div',
							{ className: 'two' },
							_react2.default.createElement(
								'a',
								{ className: 'bottomBtn jj', onClick: this.submit.bind(this, 3) },
								'拒绝'
							),
							_react2.default.createElement(
								'a',
								{ className: 'bottomBtn', onClick: this.submit.bind(this, 2) },
								'同意'
							)
						);
					}
				}
				// 是否显示重新申请
				if (isNeedReApply) {
					return _react2.default.createElement(
						'a',
						{ className: 'bottomBtn', onClick: this.submit.bind(this, -1) },
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
					{ className: 'detail-info' },
					_react2.default.createElement(_reactHelmet2.default, { title: this.props.params.title + "详情" }),
					_react2.default.createElement(
						'div',
						{ className: 'box userInfo' },
						_react2.default.createElement(
							'h3',
							null,
							_react2.default.createElement(
								'span',
								{ className: 'userAvatar' },
								this.formatImg(this.state.userInfo),
								!this.state.userInfo.error ? _react2.default.createElement('img', { onError: this.errorImg.bind(this, this.state.userInfo), src: "http://n1.store.uban360.com:7188/sfs/avatar?uid=" + this.state.userInfo.uid }) : undefined
							),
							_react2.default.createElement(
								'span',
								{ className: 'uname' },
								this.state.detail.uname
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'detail-row' },
							_react2.default.createElement(
								'label',
								null,
								'所在部门：'
							),
							_react2.default.createElement(
								'span',
								null,
								this.state.detail.deptName
							)
						),
						this.renderDetail()
					),
					_react2.default.createElement(
						'h4',
						null,
						'请假流程'
					),
					_react2.default.createElement(
						'div',
						{ className: 'box process' },
						_react2.default.createElement('div', { className: 'line' }),
						(this.state.detail.approveDetailVo || []).map(function (item) {
							return _react2.default.createElement(
								'div',
								{ className: 'item' },
								_this3.renderStatus(item.approveStatus),
								_react2.default.createElement(
									'div',
									{ className: 'user-box' },
									_this3.formatImg(item),
									!item.error ? _react2.default.createElement('img', { onError: _this3.errorImg2.bind(_this3, item), src: "http://n1.store.uban360.com:7188/sfs/avatar?uid=" + item.uid }) : undefined,
									_react2.default.createElement(
										'div',
										{ className: 'userName' },
										item.uname,
										_react2.default.createElement(
											'div',
											{ className: 'time' },
											item.approveDate
										)
									)
								)
							);
						})
					),
					_react2.default.createElement(
						'div',
						{ className: 'box zhr' },
						_react2.default.createElement(
							'h2',
							null,
							'知会人'
						),
						_react2.default.createElement(
							'div',
							{ className: 'zhr-list' },
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

/***/ 264:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _CaigouDetail = __webpack_require__(265);

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
					null,
					_react2.default.createElement(
						'div',
						{ className: 'detail-row' },
						_react2.default.createElement(
							'label',
							null,
							'采购事由：'
						),
						_react2.default.createElement(
							'span',
							null,
							'日常办公'
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'detail-row' },
						_react2.default.createElement(
							'label',
							null,
							'期望交付日期：'
						),
						_react2.default.createElement(
							'span',
							null,
							'2015.1.1'
						)
					),
					_react2.default.createElement('div', { className: 'topborder' }),
					(this.detail.customStruct && this.detail.customStruct.detailJArr || []).map(function (item, index) {
						var indx = index + 1;
						return _react2.default.createElement(_CaigouDetail2.default, { detail: _this2.detail.customStruct.detailJArr, ref: "caigouDetail" + index, index: indx, item: item, key: index });
					}),
					_react2.default.createElement('div', { className: 'topborder' }),
					_react2.default.createElement(
						'div',
						{ className: 'detail-row sum-price' },
						_react2.default.createElement(
							'label',
							null,
							'总价：'
						),
						_react2.default.createElement(
							'span',
							{ className: 'price' },
							this.detail.customStruct && this.detail.customStruct.amount
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'detail-row' },
						_react2.default.createElement(
							'label',
							null,
							'相关照片：'
						),
						_react2.default.createElement(
							'span',
							{ className: 'photos' },
							this.detail.photos && this.detail.photos.length > 0 ? (this.detail.photos || []).map(function (item) {
								return _react2.default.createElement('img', { src: item.photo_url });
							}) : "无"
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'detail-row' },
						_react2.default.createElement(
							'label',
							null,
							'审批编号：'
						),
						_react2.default.createElement(
							'span',
							null,
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

/***/ 265:
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
					{ className: "one" },
					_react2.default.createElement(
						"div",
						{ className: "detail", title: this.props.title },
						_react2.default.createElement(
							"div",
							{ className: "detail-row" },
							_react2.default.createElement(
								"label",
								null,
								_react2.default.createElement(
									"b",
									null,
									"采购明细",
									this.props.detail.length > 1 ? "(" + this.props.index + ")" : undefined
								)
							)
						),
						_react2.default.createElement(
							"div",
							{ className: "detail-row" },
							_react2.default.createElement(
								"label",
								null,
								"名称："
							),
							this.props.item.item
						),
						_react2.default.createElement(
							"div",
							{ className: "detail-row" },
							_react2.default.createElement(
								"label",
								null,
								"规格："
							),
							this.props.item.spec
						),
						_react2.default.createElement(
							"div",
							{ className: "detail-row" },
							_react2.default.createElement(
								"label",
								null,
								"单位："
							),
							this.props.item.unit
						),
						_react2.default.createElement(
							"div",
							{ className: "detail-row" },
							_react2.default.createElement(
								"label",
								null,
								"单价："
							),
							this.props.item.price
						),
						_react2.default.createElement(
							"div",
							{ className: "detail-row" },
							_react2.default.createElement(
								"label",
								null,
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

/***/ 266:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _ExpenseDetail = __webpack_require__(267);

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
					null,
					_react2.default.createElement('div', { className: 'topborder' }),
					this.detail.customStruct.detailJArr.map(function (item, index) {
						var indx = index + 1;
						return _react2.default.createElement(_ExpenseDetail2.default, { detail: _this2.detail.customStruct.detailJArr, ref: "ExpenseDetail" + index, index: indx, item: item, key: index });
					}),
					_react2.default.createElement('div', { className: 'topborder' }),
					_react2.default.createElement(
						'div',
						{ className: 'detail-row sum-price' },
						_react2.default.createElement(
							'label',
							null,
							'总价：'
						),
						_react2.default.createElement(
							'span',
							{ className: 'price' },
							this.detail.customStruct.amount
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'detail-row' },
						_react2.default.createElement(
							'label',
							null,
							'审批编号：'
						),
						_react2.default.createElement(
							'span',
							null,
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

/***/ 267:
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
				return _react2.default.createElement(
					"div",
					{ className: "one" },
					_react2.default.createElement(
						"div",
						{ className: "detail", title: this.props.title },
						_react2.default.createElement(
							"div",
							{ className: "detail-row" },
							_react2.default.createElement(
								"label",
								null,
								_react2.default.createElement(
									"b",
									null,
									"报销明细",
									this.props.detail.length > 1 ? "(" + this.props.index + ")" : undefined
								)
							)
						),
						_react2.default.createElement(
							"div",
							{ className: "detail-row" },
							_react2.default.createElement(
								"label",
								null,
								"报销类型："
							),
							this.props.item.type
						),
						_react2.default.createElement(
							"div",
							{ className: "detail-row" },
							_react2.default.createElement(
								"label",
								null,
								"金额（元）："
							),
							this.props.item.money
						),
						_react2.default.createElement(
							"div",
							{ className: "detail-row" },
							_react2.default.createElement(
								"label",
								null,
								"备注："
							),
							this.props.item.remark
						),
						_react2.default.createElement(
							"div",
							{ className: "detail-row" },
							_react2.default.createElement(
								"label",
								null,
								"相关照片："
							),
							_react2.default.createElement(
								"span",
								{ className: "photos" },
								this.props.item.photoJArr && this.props.item.photoJArr.length > 0 ? (this.detail.photos || []).map(function (item) {
									return _react2.default.createElement("img", { src: item });
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

	var Generic = function (_Component) {
		_inherits(Generic, _Component);

		function Generic(props) {
			_classCallCheck(this, Generic);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Generic).call(this, props));

			_this.detail = _this.props.detail;
			return _this;
		}

		_createClass(Generic, [{
			key: "render",
			value: function render() {
				return _react2.default.createElement(
					"div",
					null,
					_react2.default.createElement("div", { className: "topborder" }),
					_react2.default.createElement(
						"div",
						{ className: "detail-row sum-price" },
						_react2.default.createElement(
							"label",
							null,
							"申请内容："
						),
						_react2.default.createElement(
							"span",
							null,
							this.detail.applyResean
						)
					),
					_react2.default.createElement(
						"div",
						{ className: "detail-row" },
						_react2.default.createElement(
							"label",
							null,
							"申请详情："
						),
						_react2.default.createElement(
							"span",
							null,
							this.detail.customStruct.applyDetail
						)
					)
				);
			}
		}]);

		return Generic;
	}(Component);

	exports.default = Generic;

/***/ }

});