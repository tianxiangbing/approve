import React from 'react';
let {Component} =  React;
import CaigouDetail from './CaigouDetail';

import Config from 'config';

import alert from '../alert.js';

export default class Caigou extends Component{

	constructor(props){
		super(props);
		this.state = {detail:[{key:+new Date()}],caigouList:[],sumPrice:0,expectPayDate:undefined,info:{}};
	}
	getValues(){
		let arr=[];
		this.state.detail.forEach((item,index)=>{
			let values = this.refs['caigouDetail'+index].getValues();
			console.log(values)
			arr.push(values);
		});
		return {
			applyResean:this.refs.applyResean.value,
			amount:this.state.sumPrice,
			expectPayDate:this.state.expectPayDate,
			detailJArr:arr
		};
	}
	AddRow(){
		this.state.detail.push({key:+new Date()});
		this.setState({detail:this.state.detail});
	}
	del(index){
		let detail = this.state.detail;
		let newDetail = detail;
		newDetail.splice(index,1);
		this.setState({detail:newDetail});
	}
	/*reRender(){
		this.setState({detail:this.state.detail});
	}*/
	computeMoney(){
		console.log(this.refs)
		let sumMoney = 0;
		this.state.detail.forEach((item,index)=>{
			let money = this.refs['caigouDetail'+index].getMoney();
			sumMoney+=money;
		});
		this.setState({sumPrice:sumMoney});
	}
	validate(){
		let returnValue = true;
		if(Config.trim(this.refs.applyResean.value)==""){
			alert('请输入采购事由',this.props.stage);
			return false;
		}
		if(Config.trim(this.state.expectPayDate) ==""){
			alert('请选择期望交付日期',this.props.stage);
			return false;
		}
		for (var i = 0 ,l= this.state.detail.length - 1; i <= l; i++) {
			let item  = this.state.detail[i];
			let validate = this.refs['caigouDetail'+i].validate();
			if(validate.status == false){
				returnValue=false;
				alert(validate.text,this.props.stage)
				break;
			}
		};
		return returnValue;
	}
	setTime(){
		var _this = this;
		Config.native('setTime').then((res)=>{
			_this.setState({expectPayDate:res.data})
		})
	}
	//bind
	componentWillReceiveProps( nextProps){
		/*console.log('prev',prevProps)
		console.log('cur',this.props)*/
		if(nextProps.detail){
			let customJObj =JSON.parse(nextProps.detail.customJObj)||{};
			console.log(customJObj)
			this.setState({'info':nextProps.detail,expectPayDate:customJObj.expectPayDate ,detail:customJObj.detailJArr});
			//console.log(this.state.applyDetail)
		}
	}

	change(field,e){
		let value= e.target.value;
		let info = this.state.info;
		info[field] = value;
		this.setState({info:info});
	}
	render(){
		return (
			<div>
				<div className="txt-reason">
					<textarea ref="applyResean" onChange={this.change.bind(this,'applyResean')} value={this.state.info.applyResean} maxLength ="60" placeholder="请输入采购事由（必填）"/>
				</div>
				<div className="row" onClick={this.setTime.bind(this)}>
					<span>期望交付日期</span>
					<span className="expectPayDate">{!this.state.expectPayDate?<i>请选择（必填）</i>:this.state.expectPayDate}</span>
				</div>
				{
					this.state.detail.map((item,index)=>{
						let indx = index+1;
						return <CaigouDetail detail={this.state.detail} ref={"caigouDetail"+index} index={indx} computeMoney={this.computeMoney.bind(this)} item={item} key={item.key} del={this.del.bind(this,index)}/>
					})
				}
				{
					this.state.detail.length<10?(
						<div className="row add-row" onClick={this.AddRow.bind(this)}>
							<i className="iconfont icon-113"/>添加采购明细
						</div>
						):undefined
				}
				
				<div className="row sum-price">总价（元）：<span>{this.state.sumPrice.toFixed(2)}</span></div>
			</div>
			)
	}
}