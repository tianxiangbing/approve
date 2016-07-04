import React from 'react';
let {Component} = React;
export default class CaigouDetail extends Component{
	render(){
		return (
			<div className="one">
				<div className="detail" title={this.props.title}>
					<div className="detail-row"><label><b>采购明细{this.props.detail.length>1 ?"（"+this.props.index+"）":undefined}</b></label></div>
					<div className="detail-row">
						<label>名称：</label>{this.props.item.item}
					</div>
					<div className="detail-row">
						<label>规格：</label>{this.props.item.spec}
					</div>
					<div className="detail-row">
						<label>单位：</label>{this.props.item.unit}
					</div>
					<div className="detail-row">
						<label>单价：</label>{this.props.item.price}
					</div>
					<div className="detail-row">
						<label>数量：</label>{this.props.item.quantity}
					</div>
				</div>
			</div>
			);
	}
}