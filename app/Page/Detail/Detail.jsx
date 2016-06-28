import React from 'react';
let {Component} =React;
import Helmet from "react-helmet";
import Caigou from 'Component/Detail/Caigou';
import Expense from 'Component/Detail/Expense';
import Generic from 'Component/Detail/Generic';
import cookie from 'react-cookie';
import Config from 'config';
import UserAvatar from 'Component/UserAvatar';

export default class Detail extends Component{
	constructor(props){
		super(props);
		this.status = {
			isLast: 0, //0非最后,1是最后
			isMeToDeal: false, //test txb false   //0是未完成，1是完成
			id: 0,
			isEnd: false, // 流程是否结束
		};
		this.state = {detail:{approveDetailVo:[],customStruct:{}},customStruct:{detailJArr:[]},userInfo:{}};
	}
	componentWillMount(){
		console.log('will')
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
		let param = {};
		param.applyId = this.props.params.id;
		Config.ajax('queryApplyDetail',{
			method: 'POST',
			body:JSON.stringify(param)
		}).then((res)=>{
			this.setState({userInfo:{
				"uid":res.result.uid,
				"uname": res.result.uname,
				"avatar": res.result.avatar
			},detail:res.result});
			console.log(this.state)
		});
		//获取知会人
		this.setState({
			extraknower:[{"uid":"10101001610432","name":"田想兵","avatar":"http://n1.store.uban360.com:7188/sfs/avatar?uid=10101001610432"}]
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
	renderDetail(){
		let category = this.props.params.type;
		switch (parseInt(category)){
			case 5:{
				//采购
				return <Caigou ref="myForm" detail={this.state.detail} stage={this}/>;
				break;
			}
			case 4:{
				//报销
				return <Expense ref="myForm" detail={this.state.detail} stage={this}/>;
				break;
			}
			case 6:{
				console.log('通用')
				//通用
				return <Generic ref="myForm" detail={this.state.detail} stage={this}/>;
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
		if(approveStatus==-1){
			console.log('重新申请');
			location.href="/#create/"+this.props.params.type+"/"+this.props.params.title+"/"+this.props.params.id
		}
	}
	renderButton() {
		let data = this.state.detail;
		let isNeedReApply=false;//是否需要重新申请
		let isFromme = this.props.params.pageType == "fromme" ? true : false;
		let uid=cookie.load('userId');
		if (data.approveStatus == "2" || data.approveStatus == "3" || data.approveStatus == "4") {
			this.status.isEnd = true;
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
			if ((uid == d.uid) && d.approveStatus == 1) {
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
		} else {
			//待我审批
			if (status.isMeToDeal) {
				return (
					<div className="two">
					    <a className="bottomBtn jj" onClick={this.submit.bind(this,3)}>拒绝</a>
					    <a className="bottomBtn" onClick={this.submit.bind(this,2)}>同意</a>
					</div>
					)
			}
		}
		// 是否显示重新申请
		if (isNeedReApply) {
			return <a className="bottomBtn" onClick={this.submit.bind(this,-1)}>重新申请</a>;
		}
	}
	render(){
		return (
			<div className="detail-info">
				<Helmet title={this.props.params.title+"详情"}/>
				<div className="box userInfo">
					<h3>
						<span className="userAvatar">
							<UserAvatar item={this.state.userInfo} errorCallback={()=>{ this.setState({userInfo:this.state.userInfo});}}/>
						</span>
						<span className="uname">{this.state.detail.uname}</span>
					</h3>
					<div className="detail-row">
						<label>所在部门：</label><span>{this.state.detail.deptName}</span>
					</div>
					{this.renderDetail()}
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
											{item.uname}
											<div className="time">{item.approveDate}</div>
										</div>
									</div>
								</div>
								)
						})
					}
				</div>
				<div className="box zhr">
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
				</div>
				{this.renderButton()}
			</div>
			);
	}
}