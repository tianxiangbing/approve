import React from 'react';
let {Component} = React;
import ExpenseDetail from './ExpenseDetail';

import alert from '../alert.js';

export default class Expense extends Component{
	
	constructor(props){
		super(props);
		this.state = {detail:[{key:+new Date()}],caigouList:[],sumPrice:0,expectPayDate:undefined};
	}
	getValues(){
		let returnValue ={detailJArr:[]};
		let arr = [];
		this.state.detail.forEach((item,index)=>{
			let values = this.refs['caigouDetail'+index].getValues();
			console.log(values)
			arr.push(values);
		});
		returnValue.detailJArr = arr;
		returnValue.amount = this.state.sumPrice;
		returnValue.applyResean ="报销金额："+returnValue.amount.toFixed(2)+"元";
		return returnValue;
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
		setTimeout(()=>{
			console.log(this.refs)
			let sumMoney = 0;
			this.state.detail.forEach((item,index)=>{
				let money = this.refs['caigouDetail'+index].getMoney();
				sumMoney+=money;
			});
			this.setState({sumPrice:sumMoney});
		},250)
	}
	validate(){
		let returnValue = true;
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
	
	//bind
	componentWillReceiveProps( nextProps){
		/*console.log('prev',prevProps)
		console.log('cur',this.props)*/
		if(nextProps.detail){
			let customJObj =JSON.parse(nextProps.detail.customJObj)||{};
			console.log(customJObj)
			this.setState({detail:customJObj.detailJArr});
			//console.log(this.state.applyDetail)
		}
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
				{
					this.state.detail.map((item,index)=>{
						let indx = index+1;
						return <ExpenseDetail detail={this.state.detail} ref={"caigouDetail"+index} index={indx} computeMoney={this.computeMoney.bind(this)} item={item} key={item.key} del={this.del.bind(this,index)}/>
					})
				}

				{
					this.state.detail.length<10?(
						<div className="row add-row" onClick={this.AddRow.bind(this)}>
							<i className="iconfont icon-113"/>添加报销明细
						</div>
						):undefined
				}
				<div className="row sum-price">总价（元）：<span>{this.state.sumPrice.toFixed(2)}</span></div>
			</div>
			)
	}
}