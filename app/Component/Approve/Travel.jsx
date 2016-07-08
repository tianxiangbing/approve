import React from 'react';
let {Component} = React;
import Config from 'config';
import City from './City';
import alert from '../alert.js';

export default class Travel extends Component{

	constructor(props){
		super(props);
		this.state= {applyResean:'',type:0,travelCode:null,travelAddr:'',city:0};
	}

	//bind
	componentWillReceiveProps( nextProps){
		/*console.log('prev',prevProps)
		console.log('cur',this.props)*/
		if(nextProps.detail){
			let customJObj =JSON.parse(nextProps.detail.customJObj)||{};
			console.log(customJObj)
			this.setState({'applyResean':nextProps.detail.applyResean,city:0,
				type: nextProps.detail.goOUtType || 0});
			//console.log(this.state.applyDetail)
		}
	}

	getValues(){
		return {
			beginDate:this.state.beginDate,
			endDate:this.state.endDate,
			applyResean:this.refs.applyResean.value,
			travelCode:this.state.travelCode,
			travelAddr:this.state.travelAddr
		}
	}
	validate(){
		if(Config.trim(this.refs.applyResean.value)==""){
			alert('请输入出差事由',this.props.stage);
			return false;
		}
		if(Config.trim(this.state.travelAddr)==""){
			alert('请选择出差地点',this.props.stage);
			return false;
		}
		if(Config.trim(this.state.beginDate)==""){
			alert('请选择开始时间',this.props.stage);
			return false;
		}
		if(Config.trim(this.state.endDate)==""){
			alert('请选择结束时间',this.props.stage);
			return false;
		}
		return true;
	}
	selectType(type){
		this.setState({type:type});
	}

	change(field,e){
		let value= e.target.value;
		this.setState({applyResean:value});
	}

	setTime(type){
		let _this = this;
		Config.native('setTime').then((res)=>{
			if(type ===1){
				if( +new Date(res.data) <= +new Date(this.state.beginDate)){
					alert('结束时间必须大于开始时间',this.props.stage);
				}else{
					_this.setState({endDate:res.data})
				}
			}else if(type==0){
				if(+new Date(res.data) >= +new Date(this.state.endDate)){
					alert('结束时间必须大于开始时间',this.props.stage);
				}else{
					_this.setState({beginDate:res.data})
				}
			}
		})
	}
	setAddress(){
		this.setState({'city':1})
	}
	selectArea(item){
		this.setState({travelAddr:item.name,travelCode:item.id,city:0});
	}
	renderCity(){
		return <City selectCallback={this.selectArea.bind(this)}/>
	}
	render(){
		return (
			<div className="detail">
				<div className="txt-reason">
					<textarea ref="applyResean" value={this.state.applyResean} onChange={this.change.bind(this,'applyResean')} maxLength ="60" placeholder="请输入出差事由（必填）"/>
				</div>
				<div className="formbox">
					<div className="rowinput row" onClick={this.setAddress.bind(this)}>出差地点<span className="expectPayDate">{!this.state.travelAddr?<i>请选择（必填）</i>:this.state.travelAddr}</span></div>
				</div>
				<div className="formbox">
					<div className="rowinput row" onClick={this.setTime.bind(this,0)}>开始时间<span className="expectPayDate">{!this.state.beginDate?<i>请选择（必填）</i>:this.state.beginDate}</span></div>
					<div className="rowinput row" onClick={this.setTime.bind(this,1)}>结束时间<span className="expectPayDate">{!this.state.endDate?<i>请选择（必填）</i>:this.state.endDate}</span></div>
				</div>
				{this.state.city?this.renderCity():undefined}
			</div>
			);
	}
}