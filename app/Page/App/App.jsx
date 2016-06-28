/*
 * Created with Sublime Text 3.
 * license: http://www.lovewebgames.com
 * User: 田想兵
 * Date: 2016-05-30
 * Time: 10:27:55
 * Contact: 55342775@qq.com
 */
import React from 'react';
import {Link} from 'react-router';
import Helmet from "react-helmet";
//import Styles from './_App.scss';
import Config from 'config';
import cookie from 'react-cookie';
let {Component}= React;
//import 'whatwg-fetch';
import Dialog from 'Component/Dialog';

export default class App extends Component{
	constructor(props){
		localStorage.removeItem('outInfo');
		super(props);
		this.isLocated = 0;
		this.action = 0;
		this .signType = 0;
		this.state={corpList:[],currCorp:{},expand:false,dialog:0};
	}
	componentWillMount(){
	}
	getQuery(name, type, win) {
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
            let gg = g.split(/&|#/);
            var MaxI = gg.length;
            let str = arguments[0] + "=";
            for (let i = 0; i < MaxI; i++) {
                if (gg[i].indexOf(str) == 0) {
                    StrBack = gg[i].replace(str, "");
                    break;
                }
            }
        }
        return decodeURI(StrBack);
    }

	initCorp(){
		Config.native("getorglist")/*.then((res)=>{
			console.log(res)
			return res.data;
		})*/.then((data)=>{
			data = data.data;
			this.setState({corpList:data});
			if(this.getQuery('orgId')){
				cookie.save('orgId',this.getQuery('orgId'),{ path: '/' });
				localStorage.setItem('orgId',this.getQuery('orgId'));
			}
			let orgId= localStorage.getItem('orgId');
			let currCorp = {};
			if(orgId && orgId !="undefined"){
				data.forEach((item)=>{
					if(orgId==item.orgId){
						currCorp = item;
						//this.setState({currCorp:item});
					}
				})
			}else{
				currCorp = data[0];
				//this.setState({currCorp:data[0]});
			}
			//this.setState({currCorp:currCorp});
			this.select(currCorp);
			localStorage.setItem('orgName',currCorp.orgName);
			localStorage.setItem('orgId',currCorp.orgId);
			localStorage.setItem('deptName',currCorp.deptName);
			cookie.save('orgId',currCorp.orgId);
		});
	}
	componentDidMount(){
		let _this = this;
		this.initCorp();
	}
	componentWillUnmount() {
	}
	select(obj){
		this.state.currCorp=obj;
		this.setState({currCorp:obj,expand:false});
		//cookie.save('orgId', obj.orgId, { path: '/' });
		localStorage.setItem('orgId',obj.orgId);
		localStorage.setItem('orgName',obj.orgName);
		localStorage.setItem('deptName',obj.deptName);
	}
	expandOrg(){
		this.setState({expand:!this.state.expand});
	}

	hideOrgList(){
		this.setState({expand:false})
	}
	hideSign(){
		this.setState({isShowSign:false});
	}
	renderDialog(){
		console.log(this.state.dialog)
		return <Dialog stage={this} {...this.state.dialog}/>
	}
	
	hideDialog(){
		this.setState({dialog:0})
	}
	willTransitionFrom(transition, component) {
		if (component.formHasUnsavedData()) {
			if (!confirm('You have unsaved information,' +
					'are you sure you want to leave this page?')) {
				transition.abort();
			}
		}
	}
	
	render(){
		return (
			<div className="body">
				<Helmet title="审批"/>
				<div className="header">
					<div className="orgInfo">
					{
						(()=>{
							if(this.state.corpList.length >1){
								return (<div className="focusorg" onClick={this.expandOrg.bind(this)}>{this.state.currCorp.orgName} <i className={this.state.expand?"triangle up":"triangle down"}/></div>);
							}else{
								return (<div className="focusorg">{this.state.currCorp.orgName}</div>);
							}
						})()
					}
						<div className={this.state.expand?"orgList":"orgList hide"}>
						{
							(this.state.corpList||[]).map((item)=>{
								return <div className={item.orgId==this.state.currCorp.orgId?"focusorg":""} onClick={this.select.bind(this,item)}>{item.orgName}</div>
							})
						}
						</div>
					</div>
					{
					this.state.expand?
					<div className="mask" onClick={this.hideOrgList.bind(this)}>
					</div>:null
					}
				</div>
				<div className="menu">
				<a href="http://10.1.40.6/approve/app/tome.html"><i className="iconfont icon-111"/>待我审批</a>
				<a href="http://10.1.40.6/approve/app/fromme.html"><i className="iconfont icon-112 ifuck"/>我发起的</a>
				</div>
				<a className="followme" href="http://10.0.10.46:8080/approve/app/notify.html">知会我的<i className="iconfont icon-xiayibu"/></a>
				<div className="menu-list">
					<a href="http://10.1.40.6/approve/app/form_qj.html"><i className="iconfont icon-110"/>请假</a>
					<a href="http://10.1.40.6/approve/app/form_tx.html"><i className="iconfont icon-107"/>调休</a>
					<a href="http://10.1.40.6/approve/app/form_wc.html"><i className="iconfont icon-108"/>外出</a>
					<a href="http://10.1.40.6/approve/app/form_cc.html"><i className="iconfont icon-109"/>出差</a>
					<a href="#create/4/报销"><i className="iconfont icon-iconfontshenpicaigou02"/>报销</a>
					<a href="#create/5/采购"><i className="iconfont icon-iconfontshenpicaigou01"/>采购</a>
					<a href="#create/6/通用"><i className="iconfont icon-shenpi03"/>通用</a>
					<a><i className="iconfont"/>　</a>
					<a><i className="iconfont"/>　</a>
				</div>
                {this.state.dialog?this.renderDialog():undefined}
			</div>
			)
	}
}