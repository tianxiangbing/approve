import React from 'react';
let {Component} =  React;
import CaigouDetail from './CaigouDetail';

import Config from 'config';

export default class Caigou extends Component{

	constructor(props){
		super(props);
		this.state = {detail:[{key:+new Date()}],caigouList:[],sumPrice:0,expectPayDate:undefined};
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
		if(this.refs.applyResean.value==""){
			alert('请输入采购事由');
			return false;
		}
		if(this.state.expectPayDate ==""){
			alert('请选择期望交付日期');
			return false;
		}
		for (var i = 0 ,l= this.state.detail.length - 1; i <= l; i++) {
			let item  = this.state.detail[i];
			let validate = this.refs['caigouDetail'+i].validate();
			if(validate.status == false){
				returnValue=false;
				alert(validate.text)
				break;
			}
		};
		return returnValue;
	}
	setTime(){
		Config.native('setTime').then((res)=>{
			console.log(res.data)
			this.setState({expectPayDate:res.data})
		})
	}
	render(){
		return (
			<div>
				<div className="txt-reason">
					<textarea ref="applyResean"  maxLength ="60" placeholder="请输入采购事由（必填）"/>
				</div>
				<div className="row" onClick={this.setTime.bind(this)}>
					<span>期望交付日期</span>
					<input type="text" placeholder="请选择（必填）" value={this.state.expectPayDate} readonly="readonly" disabled="true"/>
				</div>
				{
					this.state.detail.map((item,index)=>{
						let indx = index+1;
						return <CaigouDetail detail={this.state.detail} ref={"caigouDetail"+index} index={indx} computeMoney={this.computeMoney.bind(this)} item={item} key={item.key} del={this.del.bind(this,index)}/>
					})
				}
				<div className="row add-row" onClick={this.AddRow.bind(this)}>
					<i className="iconfont icon-113"/>添加采购明细
				</div>
				<div className="row sum-price">总价（元）:<span>{this.state.sumPrice.toFixed(2)}</span></div>
			</div>
			)
	}
}