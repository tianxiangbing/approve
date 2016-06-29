import React from 'react';
let {Component} = React;
import Config from 'config';

export default class ExpenseDetail extends Component{
	constructor(props){
		super(props);
		this.imgList =[];
		this.typeArr =Config.expenseType;
		this.text = [{field:'money',text:'价格'}];
		this.state={type:0, imgList:[],showUpload:true,item:{money:'',type:0,remark:'',photoJArr:''}};
	}
	del(index){
		let hasValue= false;
		for(var key in this.state.item){
			if(this.state.item[key]!=""){
				hasValue=true;
			}
		}
		if(hasValue){
			if(confirm("确定删除报销明细（"+this.props.index+"）?")){
				this.props.del(this.props.index);
			}
		}else{
			this.props.del(this.props.index);
		}

		this.props.computeMoney(this);
		//this.props.reRender();
	}
	componentDidMount(){
		//console.log("didMount")
		this.setState({state:this.props.item});
	}
	change(field,e){
		let value= e.target.value;
		if(field == "money"){
			let regStr = /^[0-9]+(\.)?([0-9]{1,2})?$/;
			if(!regStr.test(value)&&value!=""){
				this.state.item[field]=this.state.item[field];	
			}else{
				this.state.item[field]= value;
			}
			this.setState({item:this.state.item})
		}else{
			this.state.item[field]= value;
			this.setState({item:this.state.item})
		}
		this.props.computeMoney(this);
	}
	getMoney(){
		return Number(this.state.item.money);
	}
	validate(){
		let returnValue = {status:true}
		for (var i = this.text.length - 1; i >= 0; i--) {
		 	let item = this.text[i];
		 	if( Config.trim(this.state.item[item.field]).length ==0){
		 		let indexstr="";
		 		this.props.detail.length===1?undefined:indexstr=this.props.index;
				returnValue = {status:false,text:"请输入报销明细"+indexstr+"的"+item.text}
			}
		};
		return returnValue;
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
	delImg(item,index){
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
				});
			}
		})
	}
	selectType(type){
		this.setState({type:type});
	}
	getValues(){
		var returnValues= {};
		Object.assign(returnValues,this.state.item,{photoJArr:this.imgList});
		return returnValues;
	}
	render(){
		return (
			<div>
				<div className="detail" title={this.props.title}>
					<h3>报销明细{this.props.detail.length>1 ?"("+this.props.index+")":undefined} <a onClick={this.del.bind(this)} className={this.props.index>1?"del":"hide"}>删除</a></h3>
					<div className="formbox">
						<div className="rowinput">
							报销类型
							<div className="type-list">
							{
								this.typeArr.map((item,index)=>{
									return <a onClick={this.selectType.bind(this,index)} className={this.state.type== index ?"focus":undefined}>{item}</a>
								})
							}
							</div>
						</div>
						<div className="rowinput">
							金额（元）<input type="text" ref="price" maxLength ="12" value={this.state.item.money} onChange={this.change.bind(this,"money")} placeholder="请输入（必填）"/>
						</div>
						<div className="row add-photo rowinput">
							<h4 onClick={this.selectPictrues.bind(this)}>照片<span>(最多可添加4张)</span><i className="iconfont icon-qiandaotianjiazhaopian"/></h4>
							<div className="upload-list">
							{
								this.state.imgList.map((item,index)=>{
									console.log(item.uploaded)
									return <div key={index} className="item">{!item.uploaded?<span className="uploading">上传中...</span>:<i onClick={this.delImg.bind(this,item,index)} className="del iconfont icon-103"/>}<img src={"data:image/png;base64,"+item.data}/></div>
								})
							}
							</div>
						</div>
						<div className="txt-reason rowinput">
							<textarea ref="applyResean" value={this.state.item.applyResean} onChange={this.change.bind(this,"remark")} maxLength ="140" placeholder="备注（非必填）"/>
						</div>
					</div>
				</div>
			</div>
			);
	}
}