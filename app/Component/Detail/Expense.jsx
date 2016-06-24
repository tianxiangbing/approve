import React from 'react';
import ExpenseDetail from './ExpenseDetail';
let {Component} = React;

export default class Expense extends Component{
	constructor(props){
		super(props);
		this.detail = this.props.detail;
	}
	render(){
		return (
			<div>
				<div className="topborder"/>
				{
					this.detail.customStruct.detailJArr.map((item,index)=>{
						let indx = index+1;
						return <ExpenseDetail detail={this.detail.customStruct.detailJArr} ref={"ExpenseDetail"+index} index={indx} item={item} key={index} />
					})
				}
				<div className="topborder"/>
				<div className="detail-row sum-price"><label>总价：</label><span className="price">{this.detail.customStruct.amount}</span></div>
				<div className="detail-row"><label>审批编号：</label><span>{this.detail.applyId}</span></div>
			</div>
		);
	}
}