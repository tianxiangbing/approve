import React from 'react';
let {Component} = React;
import Helmet from "react-helmet";
import Caigou from 'Component/Approve/Caigou';
import Config from 'config';
import Expense from 'Component/Approve/Expense';

export default class Create extends Component{
	constructor(props){
		super(props);
		console.log(props)
		this.imgList = [];
		this.params =props.params
		this.state={imgList:[],showUpload:true,authList:[],informList:[],showAddPic:true}
	}
	componentWillMount(){
		if(this.params.type == 4){
			this.setState({showAddPic:false});
		}
	}
	componentDidMount(){
		console.log(this.refs)
	}
	submit(){
		if(this.refs.myForm.validate()){
			let values= this.refs.myForm.getValues();
			console.log(values);
		}
	}
	//选择图片
	selectPictrues(){
		if(!this.state.showUpload){
			return false;
		}
		let _this = this;
		Config.native('selectPictures',{count:this.state.imgList.length,sum:4}).then((res)=>{
			if(res.code ==200){
				let data = res.data.map((item)=>{
					return {data:item,uploaded:false};
				});
				data = _this.state.imgList.concat(data);
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
					index: index.toString(),
					imageData: item.data
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
					if (res.code == 200) {
						let data = res.data;
						let i = data.index;
						let arr = _this.state.imgList.map((item,index)=>{
							if(index == i){
								item.uploaded=true;
							}
							return item;
						})
						_this.setState({
							"imgList":arr
						});
						_this.imgList.push(data.url);
					}
				});
			}
		})
	}
	//选择人员
	addUser(){
		if(this.checkIsUpload()){
			this.setState({dialog:{mask:true,show:true,msg:"图片正在上传，请稍后",type:"alert"}});
			return;
		}
		Config.native('selectPeopleIOS').then((res)=>{
			let data = res.data;
			let authList = this.state.authList .concat(data);
			this.setState({authList:authList});
		});
	}
	//选择人员（知会人）
	addUser2(){
		if(this.checkIsUpload()){
			this.setState({dialog:{mask:true,show:true,msg:"图片正在上传，请稍后",type:"alert"}});
			return;
		}
		Config.native('selectPeopleIOS').then((res)=>{
			let data = res.data;
			let informList = this.state.informList .concat(data);
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
	errorImg(item,e){
		console.log(e)
      let avatarColors = ['#f17474','#7ac47a','#efbc6b','#75a4d7','#45b2e3']
      let color = avatarColors[item.uid% 5];
      item.error=true;
      item.color= color;
      this.setState({authList:this.state.authList});
	}
	formatImg(item){
		if(item.error)
		{
			return <div className="img" style={{backgroundColor:item.color}}></div>
		}else{
			return undefined;
		}
	}
	delPeople(index){
		this.state.authList.splice(index,1);
		this.setState({authList: this.state.authList});
	}
	delPeople2(index){
		this.state.informList.splice(index,1);
		this.setState({informList: this.state.informList});
	}
	renderForm(){
		let category = this.params.type;
		switch (parseInt(category)){
			case 5:{
				//采购
				return <Caigou ref="myForm"/>;
				break;
			}
			case 4:{
				//报销
				this.setState({showAddPic:false});
				return <Expense ref="myForm"/>;
				break;
			}
		}
	}
	render(){
		return (
			<div>
				<Helmet title={this.params.title}/>
				{
					(()=>{
						let category = this.params.type;
						switch (parseInt(category)){
							case 5:{
								//采购
								return <Caigou ref="myForm"/>
								break;
							}
							case 4:{
								//报销
								return <Expense ref="myForm"/>
								break;
							}
						}
					})()
				}
				{this.state.showAddPic?
					(
					<div className="row add-photo">
						<h4 onClick={this.selectPictrues.bind(this)}>照片<span>(最多可添加4张)</span><i className="iconfont icon-qiandaotianjiazhaopian"/></h4>
						<div className="upload-list">
						{
							this.state.imgList.map((item,index)=>{
								console.log(item.uploaded)
								return <div key={index} className="item">{!item.uploaded?<span className="uploading">上传中...</span>:<i onClick={this.del.bind(this,item,index)} className="del iconfont icon-103"/>}<img src={"data:image/png;base64,"+item.data}/></div>
							})
						}
						</div>
					</div>
					):undefined
				}
				
				<div className="row add-people">
					<h4>审批人<span>(管理员已设置审批人)</span></h4>
					<div className="people-list">
						{
							this.state.authList.map((item,index)=>{
								return (
									<span>
										<div className="item" key={index} onClick={this.delPeople.bind(this,index)}>
											{this.formatImg(item)}
											{!item.error?<img onError={this.errorImg.bind(this,item)} src={"http://n1.store.uban360.com:7188/sfs/avatar?uid="+item.uid}/>:undefined}
											<div className="userName">{item.name}</div>
										</div>
										<i className="iconfont icon-shenpiliucheng"/>
									</span>
									)
							})
						}
						<div className="item" onClick={this.addUser.bind(this)}><i className="iconfont icon-113"/></div>
					</div>
				</div>
				<div className="row add-people">
					<h4>知会人<span>(点击头像可删除)</span></h4>
					<div className="people-list">
						{
							this.state.informList.map((item,index)=>{
								return (
									<div className="item" key={index} onClick={this.delPeople2.bind(this,index)}>
										{this.formatImg(item)}
										{!item.error?<img onError={this.errorImg.bind(this,item)} src={"http://n1.store.uban360.com:7188/sfs/avatar?uid="+item.uid}/>:undefined}
										<div className="userName">{item.name}</div>
									</div>
									)
							})
						}
						<div className="item" onClick={this.addUser2.bind(this)}><i className="iconfont icon-113"/></div>
					</div>
				</div>
				<a className="btn-submit" onClick = {this.submit.bind(this)}>提交</a>
			</div>
			)
	}
}