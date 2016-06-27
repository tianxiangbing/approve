/*通用*/
import React from 'react';
let {Component} = React;
import alert from '../alert.js';

export default class Generic extends Component{
	constructor(props){
		super(props);
		this.state={applyDetail:''};
	}
	getValues(){
		return {
			applyDetail:this.refs.applyDetail.value,
			applyResean:this.refs.applyResean.value
		}
	}
	validate(){
		if(this.refs.applyDetail.value==""){
			alert('请输入申请内容',this.props.stage);
			return false;
		}
		if(this.refs.applyResean.value==""){
			alert('请输入申请详情',this.props.stage);
			return false;
		}
		return true;
	}
	render(){
		return (
			<div>
				<div className="row applyDetail">
					<span>申请内容</span>
					<input type="text" ref="applyDetail" maxLength="60" placeholder="请输入（必填）"/>
				</div>
				<div className="txt-reason">
					<textarea ref="applyResean"  maxLength ="60" placeholder="请输入申请详情（必填）"/>
				</div>
			</div>
			);
	}
}