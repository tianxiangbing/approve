import React from 'react';
let {Component} =React;
import Helmet from "react-helmet";
import Caigou from 'Component/Detail/Caigou';
import Expense from 'Component/Detail/Expense';
import Generic from 'Component/Detail/Generic';
import Leave from 'Component/Detail/Leave';
import cookie from 'react-cookie';
import Config from 'config';
import UserAvatar from 'Component/UserAvatar';
import Off from 'Component/Detail/Off';
import GoOut from 'Component/Detail/GoOut';
import Travel from 'Component/Detail/Travel';

export default class Detail extends Component{
	constructor(props){
		super(props);
		this.status = {
			isLast: 0, //0非最后,1是最后
			isMeToDeal: false, //test txb false   //0是未完成，1是完成
			id: 0,
			isEnd: false, // 流程是否结束
		};
		 //cookie.save('userId','924064')
		this.state = {detail:{approveDetailVo:[],customStruct:{}},customStruct:{detailJArr:[]},userInfo:{},extraknower:[],approveDesc:"",isFromme:false};
	}
	componentWillMount(){
		console.log('will')
		this.init();
	}
	init(){
		let param = {};
		let _this =this;
		param.applyId = this.props.params.id;
		Config.ajax('queryApplyDetail',{
			method: 'POST',
			body:JSON.stringify(param)
		}).then((res)=>{
			let data = res.result;
			let isFromme = false;
	        if(data.approveDetailVo.length && data.approveDetailVo[0].uid==cookie.load('userId')){
	        	isFromme = true;
	        }
			_this.setState({userInfo:{
				"uid":res.result.uid,
				"name": res.result.uname,
				"avatar": res.result.avatar
			},detail:res.result,isFromme : isFromme});
		});
		//获取知会人
		Config.ajax ('zhrList',{
			method: 'POST',
			body:JSON.stringify(param)
		}).then((res)=>{
			console.log(res.result)
			_this.setState({
				"extraknower":res.result
			});
			console.log('doing...')
		});
	}
	renderDetail(){
		let category = this.props.params.type;
		switch (parseInt(category)){
			case 0 :{
				//请假
				return <Leave key={category} ref="myForm" detail={this.state.detail} stage={this}/>;
				break;
			}
			case 1 :{
				//外出
				return <GoOut key={category} ref="myForm" detail={this.state.detail} stage={this}/>;
				break;
			}
			case 2 :{
				//出差
				return <Travel key={category} ref="myForm" detail={this.state.detail} stage={this}/>;
				break;
			}
			case 3 :{
				//请假
				return <Off key={category} ref="myForm" detail={this.state.detail} stage={this}/>;
				break;
			}
			case 5:{
				//采购
				return <Caigou key={category} ref="myForm" detail={this.state.detail} stage={this}/>;
				break;
			}
			case 4:{
				//报销
				return <Expense key={category}  ref="myForm" detail={this.state.detail} stage={this}/>;
				break;
			}
			case 6:{
				//通用
				return <Generic key={category}  ref="myForm" detail={this.state.detail} stage={this}/>;
				break;
			}
		}
	}
	renderStatus(status){
		let proveStatus={
		    "0": "fqsq",
		    "1": "spz",
		    "2": "spty",
		    "3": "spjj",
		    "4": "ych",
		    "5": "wsp"
		  }
		let proveStatusText={
		    "0": "发起申请",
		    "1": "审批中",
		    "2": "审批同意",
		    "3": "审批拒绝",
		    "4": "已撤回",
		    "5": "未审批"
		}
		let proveStatusIcon={
		    "0": "101",
		    "1": "105",
		    "2": "102",
		    "3": "103",
		    "4": "106",
		    "5": "104"
		}
		return <div className={"state "+proveStatus[status.toString()]}>
				<i className={"iconfont icon-"+proveStatusIcon[status.toString()]}/>
				{proveStatusText[status.toString()]}
			</div>;
	}
	submit(approveStatus){
		console.log(approveStatus);
		let params = {}
		params.ts = +new Date();
		params.token = cookie.load('token');
		params.applyId = this.props.params.id;
		params.orgId = cookie.load('orgId');
		params.uid = cookie.load('uid');
		params.approveStatus = approveStatus;
		params.approveDesc = "审批理由"
		params.approveOrder= this.status.approveOrder;
		params.isLast = this.status.isLast;
		params.id = this.status.id;
		if(approveStatus==-1){
			console.log('重新申请');
			location.href="#create/"+this.props.params.type+"/"+this.props.params.title+"/"+this.props.params.id
			return false;
		}
		if(approveStatus==2){
			//同意
		}
		if(approveStatus==3){
			//拒绝
			params.approveDesc=this.state.approveDesc;
		}
		if(approveStatus==4){
			if(confirm("您确定要撤销申请吗？")){
				//撤回
				Config.ajax('retract',{
					method: 'POST',
					body:JSON.stringify(params)
				}).then((data)=>{
					if (data.status == 200) {
						this.init();
			        }else{
			        	alert("操作失败！状态码：" + data.status);
			        }
				});
			}
			return;
		}
		Config.ajax('update',{
			method: 'POST',
			body:JSON.stringify(params)
		}).then((data)=>{
			if (data.status == 200) {
				this.init();
	        }else{
	        	alert("操作失败！状态码：" + data.status);
	        }
		});
	}
	renderButton() {
		let data = this.state.detail;
		let isNeedReApply=false;//是否需要重新申请
		let isFromme = this.props.params.pageType == "fromme" ? true : false;
		let uid=cookie.load('userId');
		this.status.isMeToDeal = false;
		if (data.approveStatus == "2" || data.approveStatus == "3" || data.approveStatus == "4") {
			this.status.isEnd = true;
		}
        if(data.approveDetailVo.length && data.approveDetailVo[0].uid==uid){
        	isFromme =true;
        }else{
        	isFromme = false;
        }
		for (var i = data.approveDetailVo.length - 1; i >= 0; i--) {
			let d = data.approveDetailVo[i]
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
			if ((uid == d.uid) && d.approveStatus == 1 ) {
				this.status.isMeToDeal = true;
			}
	        // 审批拒绝后就跳出循环
	        if (d.approveStatus == 3) {
	          break;
	        }
		};
		let status =this.status;
		// 底部按钮显示控制
		if (isFromme) {
			//我发起的
			if (!status.isEnd){
				return <a className="bottomBtn" onClick={this.submit.bind(this,4)}>撤回</a>;
			}
		}else
		//待我审批
		if (status.isMeToDeal) {
			return (
				<div className="two">
				    <a className="bottomBtn jj" onClick={this.submit.bind(this,3)}>拒绝</a>
				    <a className="bottomBtn" onClick={this.submit.bind(this,2)}>同意</a>
				</div>
				)
		}
		// 是否显示重新申请
		if (isNeedReApply) {
			return <a className="bottomBtn" onClick={this.submit.bind(this,-1)}>重新申请</a>;
		}
	}
	fqsx(item){
		item.content = this.state.detail.uname + "请您审批他的" + Config.applyType[this.props.params.type] + "申请";
	    Config.native('fqsx',item);
	}
	render(){
		/*"1": "进行中",
		"2": "已完成",
		"3": "已完成",
		"4": "已撤回",
		"5": "进行中"*/
		console.log(this.state.isFromme)
		return (
			<div className="detail-info">
				<Helmet title={Config.applyType[this.props.params.type]+"详情"}/>
				<div className="box userInfo">
					<h3>
						<span className="userAvatar">
							{this.state.userInfo.uid ?<UserAvatar item={this.state.userInfo} errorCallback={()=>{ this.setState({userInfo:this.state.userInfo});}}/>:undefined}
						</span>
						<span className="uname">{this.state.detail.uname}</span>
					</h3>
					<div className="detail-row">
						<label>所在部门：</label><span>{Config.isNullShowText(this.state.detail.deptName)}</span>
					</div>
					{this.renderDetail()}
				</div>
				<div className="statusIcon">
					{this.state.detail.approveStatus==3?<i className="iconfont icon-tuzhang02 iconjj"/>:undefined}
					{this.state.detail.approveStatus==2?<i className="iconfont icon-weibiaoti201 icontg"/>:undefined}
					{this.state.detail.approveStatus==4?<i className="iconfont icon-tuzhang03 iconch"/>:undefined}
				</div>
				<h4>审批流程</h4>
				<div className="box process">
					<div className="line"></div>
					{
						(this.state.detail.approveDetailVo||[]).map((item)=>{
							item.name = item.name ||item.uname;
							return (
								<div className="item">
									{this.renderStatus(item.approveStatus)}
									<div className="user-box">
										<UserAvatar item={item} errorCallback={()=>{ this.setState({detail:this.state.detail});}}/>
										<div className="userName">
											<div className="name">{item.uid == cookie.load('userId') ?"我":item.uname}</div>
											<div className="time"> {item.approveDate.substr(0, 4) == "0000"||item.approveStatus==1 ? "" : item.approveDate}</div>
											{item.approveStatus==1&& this.state.isFromme?<span className="fqsx" onClick={this.fqsx.bind(this,item)}>发事项</span>:undefined}
										</div>
									</div>
								</div>
								)
						})
					}
				</div>
				{this.state.extraknower.length>0?
					(<div className="box zhr">
						<h2>知会人</h2>
						<div className="zhr-list">
							{
								(()=>{
								let arr = (this.state.extraknower||[]).map((item)=>{
									return item.name
								})
								return arr.join('、');
								})()
							}
						</div>
					</div>)
					:undefined}
				{this.renderButton()}
			</div>
			);
	}
}