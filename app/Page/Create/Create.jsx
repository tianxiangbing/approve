import React from 'react';
let {Component} = React;
import Helmet from "react-helmet";
import Caigou from 'Component/Approve/Caigou';
import Config from 'config';
import Expense from 'Component/Approve/Expense';
import Generic from 'Component/Approve/Generic';
import cookie from 'react-cookie';
import Dialog from 'Component/Dialog';
import alert from 'Component/alert.js';
import { withRouter } from 'react-router'
import UserAvatar from 'Component/UserAvatar';
import Leave from 'Component/Approve/Leave';
import Off from 'Component/Approve/Off';
import GoOut from 'Component/Approve/GoOut';
import Travel from 'Component/Approve/Travel';

class Create extends Component{
	constructor(props){
		super(props);
		console.log(props)
		this.imgList = [];
		this.params =props.params;
		this.leaveDays =0;
		this.isloading=false;
		this.state={imgList:[],showUpload:true,authList:[],informList:[],showAddPic:true,dialog:0,isSet:1,detail:null};
	}
	renderProcess(){
			Config.ajax('getFlowByType',{
				method:'post',
				body:JSON.stringify({applyType:this.props.params.type,leaveDays: this.leaveDays})
			}).then((res)=>{
				let data =res//{"status":200,"total":0,"result":{"isSet":1,"flowInfos":[{"uid":292177,"uname":"青城名字要很长很长才好青城名字要很长很长","mobile":null,"avatar":"http://n1.store.uban360.com:7188/sfs/avatar?uid=292177"}]},"msg":null}
				if(data.status == 200){
					let arr = (data.result.flowInfos||[]).map((item)=>{
						return {name:item.uname,uid:item.uid}
					})
					if(data.result.isSet == 1){
						this.setState({authList:arr,isSet:data.result.isSet});
					}else if(this.state.authList==0){
						this.setState({authList:arr,isSet:data.result.isSet});
					}else{
						this.setState({isSet:data.result.isSet});
					}
				}else{
					alert('错误码：'+data.status,this);
				}
			});
	}
	componentWillMount(){
		if(this.params.type == 4){
			this.setState({showAddPic:false});
		}
		Config.ajax('lastSelected',{
			method:'post',
			body:JSON.stringify({applyType:this.props.params.type})
		}).then((res)=>{
			let data =res//{"status":200,"total":0,"result":{"isSet":0,"flowInfos":[{"uid":292177,"uname":"青城名字要很长很长才好青城名字要很长很长","mobile":null,"avatar":"http://n1.store.uban360.com:7188/sfs/avatar?uid=292177"}]},"msg":null}
			if(data.status == 200){
				let arr = (data.result.flowInfos||[]).map((item)=>{
					return {name:item.uname,uid:item.uid}
				})
				this.setState({informList:arr})
			}else{
				alert('错误码：'+data.status,this);
			}
		});
		this.renderProcess();
		if(this.params.id){
			let param={};
			param.applyId = this.props.params.id;
			Config.ajax('queryApplyDetail', {
				method: 'POST',
				body: JSON.stringify(param)
			}).then((res) => {
				if(res.status==200){
					this.setState({
						userInfo: {
							"uid": res.result.uid,
							"name": res.result.uname,
							"avatar": res.result.avatar
						},
						detail: res.result,
						imgList:(res.result.photos||[]).map((item)=>{
							return  {data:item.photo_url,uploaded:true};
						})
					});
				}
				console.log(res.result)
			});
		}
	}
	componentDidMount(){
	/*	this.props.router.setRouteLeaveHook(
			this.props.route,
			this.routerWillLeave
		)*/
	}
	 routerWillLeave(nextLocation) {
      // 返回 false 会继续停留当前页面，
      // 否则，返回一个字符串，会显示给用户，让其自己决定
        return '确认要离开？';
    }
	submit(){
		if(this.refs.myForm.validate()){
			if(this.state.authList.length==0){
				alert('请选择审批人',this);
				return false;
			}
			let values= this.refs.myForm.getValues();
			console.log(values);
			let params = {};
			
			params.applyType= this.props.params.type;
			params.customStruct=JSON.stringify(values);
			params.beginDate =values.beginDate || new Date();
			params.endDate = values.endDate ||new Date();
			params.beginOvertime =values.beginOvertime || new Date();
			params.endOvertime = values.endOvertime ||new Date();
			params.outType = values.outType||0;
			params.flowStr = JSON.stringify(this.state.authList);
			params.travelCode=values.travelCode||0;
			params.travelAddr = values.travelAddr||"";

			let imgList = this.imgList.map((item,indx)=>{
				return {id:indx,photoUrl:item};
			});
			params.photoStr = JSON.stringify(imgList);
			let zhrArr = this.state.informList.map((item)=>{
						 	return item.uid
						})
			params.extraKnowerJarr =JSON.stringify( zhrArr);
			//事由
			params.applyResean=values.applyResean;
			params.leaveType= values.leaveType;
			if(this.isloading){
				alert('请勿重复提交',this);
				return false;
			}
			this.isloading =true;
			alert('正在提交中...',this);
			Config.ajax('save',{
				body:JSON.stringify(params),
				method:'post'
			}).then((res)=>{
				if(res.status==200){
					alert('您的审批提交成功',this);
					setTimeout(()=>{
		        		this.isloading =false;
						location.href="#/detail/"+params.applyType+"/"+this.params.title+"/"+res.result+"/fromme"
					},2000)
				}
				else{
		        	this.isloading =false;
		        	alert("失败！状态码：" + data.status+" "+data.msg,this);
		        }
			});
		}
	}
	//选择图片
	selectPictrues(){
		if(!this.state.showUpload){
			alert('最多只能选择4张哦！',this);
			return false;
		}
		let _this = this;
		Config.native('selectPictures',{count:this.state.imgList.length,sum:4}).then((res)=>{
			if(res.code ==200){
				let data = res.data.map((item)=>{
					return {data:"data:image/png;base64,"+item,uploaded:false};
				});
				data = _this.state.imgList.concat(data).slice(0,4);
				console.log(data)
				_this.setState({"imgList":data});
				if(data.length>=4){
					_this.setState({showUpload:false});
				}
				_this.upload();
			}
		});
	}
	del(item,index){
		this.state.imgList.splice(index,1);
		this.setState({imgList:this.state.imgList,showUpload:true});
		this.imgList.splice(index,1);
	}
	//上传
	upload() {
		let _this = this;
		this.state.imgList.forEach((item, index) => {
			if (!item.uploaded &&!item.uploading) {
				let param = {
					flag: index.toString(),
					Base64Stream: item.data.substr(21)
				}
				item.uploading=true;
				Config.ajax('upload', {
					/*headers: {
						'Accept': 'application/json',
						'Content-Type': 'application/json'
					},*/
					method: 'POST',
					body:JSON.stringify(param)
				}).then((res) => {
					if (res.code == 200 ||res.status==200) {
						let data = res.result;
						let i = data.flag;
						let arr = _this.state.imgList.map((item,index)=>{
							if(index == i){
								item.uploaded=true;
							}
							return item;
						})
						_this.setState({
							"imgList":arr
						});
						_this.imgList.push(data.photo_url);
					}
					else{
			        	alert("失败！状态码：" + data.status+" "+data.msg);
			        }
				});
			}
		})
	}
	//选择人员
	addUser(){
		let _this = this;
		if(this.checkIsUpload()){
			this.setState({dialog:{mask:true,show:true,msg:"图片正在上传，请稍后",type:"alert"}});
			return;
		}
		Config.native('selectPeopleIOS').then((res)=>{
			let data = res.data.map((item)=>{
				let ishave =false;
				for(let i=0;i<_this.state.authList.length;i++){
					if(item.uid == _this.state.authList[i].uid){
						ishave=true;
					}
				}
				if(!ishave){
					return item;
				}
			});
			let authList = _this.state.authList .concat(data.filter(x => {return x}));
			_this.setState({authList:authList});
		});
	}
	//选择人员（知会人）
	addUser2(){
		if(this.checkIsUpload()){
			this.setState({dialog:{mask:true,show:true,msg:"图片正在上传，请稍后",type:"alert"}});
			return;
		}
		Config.native('selectPeopleIOS').then((res)=>{
			let data = res.data.map((item)=>{
				let ishave =false;
				for(let i=0;i<this.state.informList.length;i++){
					if(item.uid == this.state.informList[i].uid){
						ishave=true;
					}
				}
				if(!ishave){
					return item;
				}
			});
			let informList = this.state.informList .concat(data.filter(x => {return x}));
			this.setState({informList:informList});
		});
	}
	checkIsUpload(){
		let isuploading=false;
		this.state.imgList .forEach((item)=>{
			if(!item.uploaded){
				isuploading = true;
			}
		});
		return isuploading;
	}
	delPeople(index){
		if(!this.state.isSet){
			this.state.authList.splice(index,1);
			this.setState({authList: this.state.authList});
		}
	}
	delPeople2(index){
		this.state.informList.splice(index,1);
		this.setState({informList: this.state.informList});
	}
	renderForm(){
		let category = this.params.type;
		switch (parseInt(category)){
			case 0:{
				//请假
				return <Leave renderProcess={this.reComputeDays.bind(this)} ref="myForm" stage={this} detail={this.state.detail}/>
			}
			case 1:{
				//外出
				return <GoOut renderProcess={this.reComputeDays.bind(this)} ref="myForm" stage={this} detail={this.state.detail}/>
			}
			case 2:{
				//出差
				return <Travel renderProcess={this.reComputeDays.bind(this)} ref="myForm" stage={this} detail={this.state.detail}/>
			}
			case 3:{
				//调休
				return <Off renderProcess={this.reComputeDays.bind(this)} ref="myForm" stage={this} detail={this.state.detail}/>
			}
			case 5:{
				//采购
				return <Caigou renderProcess={this.reComputeDays.bind(this)} ref="myForm" stage={this} detail={this.state.detail}/>;
				break;
			}
			case 4:{
				//报销
				return <Expense renderProcess={this.reComputeDays.bind(this)} ref="myForm" stage={this} detail={this.state.detail}/>;
				break;
			}
			case 6:{
				console.log('通用')
				//通用
				return <Generic renderProcess={this.reComputeDays.bind(this)} ref="myForm" stage={this} detail={this.state.detail}/>;
				break;
			}
		}
	}
	renderDialog(){
		console.log(this.state.dialog)
		return <Dialog stage={this} {...this.state.dialog}/>
	}

    compateDays (start, end) {
      var s = start.replace(/-/g, "/"), 
          e = end.replace(/-/g, "/"), 
          sd = new Date(s), 
          ed = new Date(e);
      var c = ed.getTime() - sd.getTime();
      return c;
    }

    //动态计算天数
    reComputeDays (start, end, start2, end2) {
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
	render(){
		return (
			<div>
				<Helmet title={Config.applyType[this.props.params.type]}/>
				{this.renderForm()}
				{this.state.showAddPic?
					(
					<div className="row add-photo">
						<h4 onClick={this.selectPictrues.bind(this)}>照片<span>(最多可添加4张)</span><i className="iconfont icon-qiandaotianjiazhaopian"/></h4>
						<div className="upload-list">
						{
							this.state.imgList.map((item,index)=>{
								console.log(item.uploaded)
								return <div key={index} className="item">{!item.uploaded?<span className="uploading">上传中...</span>:<i onClick={this.del.bind(this,item,index)} className="del iconfont icon-103"/>}<img src={item.data}/></div>
							})
						}
						</div>
					</div>
					):undefined
				}
				
				<div className="row add-people">
					<h4>审批人<span>{this.state.isSet?"(管理员已设置审批人)":"(点击头像可删除)"}</span></h4>
					<div className="people-list">
						{
							this.state.authList.map((item,index)=>{
								return (
									<span>
										<div className="item" key={index} onClick={this.delPeople.bind(this,index)}>
											<UserAvatar item={item} errorCallback={()=>{ this.setState({authList:this.state.authList});}}/>
											<div className="userName">{item.name}</div>
										</div>
										{this.state.isSet&&index==this.state.authList.length-1?undefined:<i className="iconfont icon-shenpiliucheng"/>}
									</span>
									)
							})
						}
						{!this.state.isSet?<div className="item" onClick={this.addUser.bind(this)}><i className="iconfont icon-113"/></div>:undefined}
					</div>
				</div>
				<div className="row add-people">
					<h4>知会人<span>(点击头像可删除)</span></h4>
					<div className="people-list">
						{
							this.state.informList.map((item,index)=>{
								return (
									<div className="item" key={index} onClick={this.delPeople2.bind(this,index)}>
										<UserAvatar item={item} errorCallback={()=>{ this.setState({authList:this.state.authList});}}/>
										<div className="userName">{item.name}</div>
									</div>
									)
							})
						}
						<div className="item" onClick={this.addUser2.bind(this)}><i className="iconfont icon-113"/></div>
					</div>
				</div>
				<a className="btn-submit" onClick = {this.submit.bind(this)}>提交</a>
                {this.state.dialog?this.renderDialog():undefined}
			</div>
			)
	}
}

export default withRouter(Create);