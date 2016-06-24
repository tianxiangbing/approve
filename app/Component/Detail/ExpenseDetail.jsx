import React from 'react';

let {Component} = React;

export default class ExpenseDetail extends Component{
	render(){
		return (
			<div className="one">
				<div className="detail" title={this.props.title}>
					<div className="detail-row">
						<label><b>报销明细{this.props.detail.length>1 ?"("+this.props.index+")":undefined}</b></label>
					</div>
					<div className="detail-row">
						<label>报销类型：</label>{this.props.item.type}
					</div>
					<div className="detail-row">
						<label>金额（元）：</label>{this.props.item.money}
					</div>
					<div className="detail-row">
						<label>备注：</label>{this.props.item.remark}
					</div>
					<div className="detail-row">
						<label>相关照片：</label>
						<span className="photos">
						{
							this.props.item.photoJArr&&this.props.item.photoJArr.length>0 ? 
							(this.detail.photos||[]).map((item)=>{
								return <img src={item}/>
							})
							:"无"
						}
						</span>
					</div>
				</div>
			</div>
			);
	}
}