import React from 'react';
import ExpenseDetail from './ExpenseDetail';
let {Component} = React;
import Config from 'config';

export default class Expense extends Component{
	constructor(props){
		super(props);
	}
	render(){
		let customJObj = this.props.detail.customJObj;
		if(customJObj){
			customJObj = JSON.parse(customJObj);
		}else{
			customJObj={}
		}
		return (
			<div>
				<div className="topborder"/>
				{
					(customJObj.detailJArr||[]).map((item,index)=>{
						let indx = index+1;
						return <ExpenseDetail detail={customJObj.detailJArr} ref={"ExpenseDetail"+index} index={indx} item={item} key={index} />
					})
				}
				<div className="topborder"/>
				<div className="detail-row sum-price"><label>总价（元）：</label><span className="price">{(customJObj.amount||0).toFixed(2)}</span></div>
				<div className="detail-row"><label>审批编号：</label><span>{this.props.detail.applyId}</span></div>
			</div>
		);
	}
}