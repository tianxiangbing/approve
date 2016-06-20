import React from 'react';
let {Component} =  React;
import CaigouDetail from './CaigouDetail';

export default class Caigou extends Component{

	constructor(props){
		super(props);
		this.state = {detail:[{key:+new Date()}],caigouList:[],sumPrice:0};
	}
	getValues(){
		return {
			applyResean:this.refs.applyResean.value
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
	submit(){
		let returnValue = false;
		for (var i = 0 ,l= this.state.detail.length - 1; i <= l; i++) {
			let item  = this.state.detail[i];
			let validate = this.refs['caigouDetail'+i].validate();
			if(validate.status == false){
				alert(validate.text)
				break;
			}
		};
		return returnValue;
	}
	render(){
		return (
			<div>
				<div className="txt-reason">
					<textarea ref="applyResean"  maxLength ="60" placeholder="请输入采购事由（必填）"/>
				</div>
				<div className="row">
					<span>期望交付日期</span>
					<input type="text" placeholder="请选择（必填）" readonly="readonly" disabled="true"/>
				</div>
				{
					this.state.detail.map((item,index)=>{
						let indx = index+1;
						console.log("heloo:",item)
						return <CaigouDetail ref={"caigouDetail"+index} index={indx} computeMoney={this.computeMoney.bind(this)} item={item} key={item.key} del={this.del.bind(this,index)}/>
					})
				}
				<div className="row add-row" onClick={this.AddRow.bind(this)}>
					<i className="iconfont icon-113"/>添加采购明细
				</div>
				<div className="row sum-price">总价（元）:<span>{this.state.sumPrice}</span></div>

				<a onClick={this.submit.bind(this)}>提交</a>
			</div>
			)
	}
}