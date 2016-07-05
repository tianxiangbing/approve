/*通用*/
import React from 'react';
let {Component} = React;
import alert from '../alert.js';

import Config from 'config';
export default class Generic extends Component{
	constructor(props){
		super(props);
		this.state={customJObj:{}};
		this.props.detail=Object.assign({customJObj:"{}"},this.props.detail);
		console.log('constructor')
	}
	getValues(){
		return {
			applyDetail:this.refs.applyDetail.value,
			applyResean:this.refs.applyResean.value
		}
	}

	componentDidMount(){
		console.log('did')

	}
	change(field,e){
		let value= e.target.value;
		let customJObj = this.state.customJObj;
		customJObj[field] = value;
		this.setState({customJObj:customJObj});
	}
	validate(){
		if(Config.trim(this.refs.applyDetail.value)==""){
			alert('请输入申请内容',this.props.stage);
			return false;
		}
		if(Config.trim(this.refs.applyResean.value)==""){
			alert('请输入申请详情',this.props.stage);
			return false;
		}
		return true;
	}
	componentWillReceiveProps( nextProps){
		/*console.log('prev',prevProps)
		console.log('cur',this.props)*/
		if(nextProps.detail){
			let customJObj =JSON.parse(nextProps.detail.customJObj)||{};
			this.setState({'customJObj':customJObj});
			//console.log(this.state.applyDetail)
		}
	}
	render(){
		console.log(this.state.customJObj)
		return (
			<div>
				<div className="row applyDetail">
					<span>申请内容</span>
					<input type="text" value={this.state.customJObj.applyDetail} onChange={this.change.bind(this,'applyDetail')} ref="applyDetail" maxLength="60" placeholder="请输入（必填）"/>
				</div>
				<div className="txt-reason">
					<textarea ref="applyResean" value={this.state.customJObj.applyResean} onChange={this.change.bind(this,'applyResean')} maxLength ="60" placeholder="请输入申请详情（必填）"/>
				</div>
			</div>
			);
	}
}