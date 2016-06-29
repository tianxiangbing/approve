import React from 'react';
let {Component} = React;
import Config from 'config';

export default class Generic extends Component{
	constructor(props){
		super(props);
	}
	render(){
		let customJObj = this.props.detail.customJObj;
		if(customJObj){
			customJObj = JSON.parse(customJObj);
		}
		let applyDetail = customJObj && customJObj.applyDetail ||"无";
		return (
			<div>
				<div className="topborder"/>
				<div className="detail-row sum-price">
					<label>申请内容：</label>
					<span>
						{this.props.detail.applyResean}
					</span>
				</div>
				<div className="detail-row">
					<label>申请详情：</label>
					<span>{applyDetail}</span>
				</div>
			</div>
		);
	}
}