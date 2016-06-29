import React from 'react';
import ExpenseDetail from './ExpenseDetail';
let {Component} = React;

export default class Expense extends Component{
	constructor(props){
		super(props);
	}
	render(){
		this.detail = this.props.detail;
		this.detail.customJObj = JSON.parse(this.detail.customJObj||"{}")||{};
		return (
			<div>
				<div className="topborder"/>
				{
					(this.detail.customJObj.detailJArr||[]).map((item,index)=>{
						let indx = index+1;
						return <ExpenseDetail detail={this.detail.customJObj.detailJArr} ref={"ExpenseDetail"+index} index={indx} item={item} key={index} />
					})
				}
				<div className="topborder"/>
				<div className="detail-row sum-price"><label>总价：</label><span className="price">{this.detail.customJObj.amount}</span></div>
				<div className="detail-row"><label>审批编号：</label><span>{this.detail.applyId}</span></div>
			</div>
		);
	}
}