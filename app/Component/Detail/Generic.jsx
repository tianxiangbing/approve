import React from 'react';
let {Component} = React;
import Config from 'config';

export default class Generic extends Component{
	constructor(props){
		super(props);
		this.detail = this.props.detail;
	}
	render(){
		return (
			<div>
				<div className="topborder"/>
				<div className="detail-row sum-price"><label>申请内容：</label><span>{this.detail.applyResean}</span></div>
				<div className="detail-row"><label>申请详情：</label><span>{this.detail.customStruct.applyDetail}</span></div>
			</div>
		);
	}
}