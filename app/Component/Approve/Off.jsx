import React  from 'react';
let {Component} = React;
import Config from 'config';
import alert from '../alert.js';

export default class Off extends Component{

	constructor(props){
		super(props);
		this.state= {applyResean:'',type:0}
	}

	//bind
	componentWillReceiveProps( nextProps){
		/*console.log('prev',prevProps)
		console.log('cur',this.props)*/
		if(nextProps.detail){
			let customJObj =JSON.parse(nextProps.detail.customJObj)||{};
			console.log(customJObj)
			this.setState({'applyResean':nextProps.detail.applyResean,
				type: nextProps.detail.leaveType || 0,
				beginDate:nextProps.detail.beginDate,
				endDate:nextProps.detail.endDate,
				beginOvertime:nextProps.detail.beginOverTime,
				endOvertime:nextProps.detail.endOverTime
			});
			//console.log(this.state.applyDetail)
		}
	}

	getValues(){
		return {
			beginDate:this.state.beginDate,
			endDate:this.state.endDate,
			beginOvertime:this.state.beginOvertime,
			endOvertime:this.state.endOvertime,
			applyResean:this.refs.applyResean.value
		}
	}
	validate(){
		if(Config.trim(this.refs.applyResean.value)==""){
			alert('请输入调休事由',this.props.stage);
			return false;
		}
		if(Config.trim(this.state.beginOvertime)==""){
			alert('请选择加班开始时间',this.props.stage);
			return false;
		}
		if(Config.trim(this.state.endOvertime)==""){
			alert('请选择加班结束时间',this.props.stage);
			return false;
		}
		if(Config.trim(this.state.beginDate)==""){
			alert('请选择调休开始时间',this.props.stage);
			return false;
		}
		if(Config.trim(this.state.endDate)==""){
			alert('请选择调休结束时间',this.props.stage);
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
			try{
			if(type ===1){
				if( +new Date(res.data.replace(/\-/g,'/')) <= +new Date((this.state.beginDate||'').replace(/\-/g,'/'))){
					alert('调休结束时间必须大于开始时间',this.props.stage);
				}else{
					_this.setState({endDate:res.data})
				}
			}else if(type==0){
				if(+new Date(res.data.replace(/\-/g,'/')) >= +new Date((this.state.endDate||'').replace(/\-/g,'/'))){
					alert('调休结束时间必须大于开始时间',this.props.stage);
				}else{
					_this.setState({beginDate:res.data})
				}
			}else if(type ===2){
				if(+new Date(res.data.replace(/\-/g,'/')) >=+new Date((this.state.endOvertime||'').replace(/\-/g,'/'))){
					alert('加班结束时间必须大于开始时间',this.props.stage);
				}else{
					_this.setState({beginOvertime:res.data})
				}
			}else if(type ===3){
				if(+new Date(res.data.replace(/\-/g,'/')) <= +new Date((this.state.beginOvertime||'').replace(/\-/g,'/'))){
					alert('加班结束时间必须大于开始时间',this.props.stage);
				}else{
					_this.setState({endOvertime:res.data})
				}
			}
			_this.props.renderProcess(this.state.beginDate,this.state.endDate,this.state.beginOvertime,this.state.endOvertime);
			}catch(e){
			}
		})
	}
	render(){
		return (
			<div className="detail">
				<div className="txt-reason">
					<textarea ref="applyResean" value={this.state.applyResean} onChange={this.change.bind(this,'applyResean')} maxLength ="60" placeholder="请输入调休事由（必填）"/>
				</div>
				<h3>加班时间<a href={signRecord}>查看考勤记录</a></h3>
				<div className="formbox">
					<div className="rowinput row" onClick={this.setTime.bind(this,2)}>开始时间<span className="expectPayDate">{!this.state.beginOvertime?<i>请选择（必填）</i>:this.state.beginOvertime}</span></div>
					<div className="rowinput row" onClick={this.setTime.bind(this,3)}>结束时间<span className="expectPayDate">{!this.state.endOvertime?<i>请选择（必填）</i>:this.state.endOvertime}</span></div>
				</div>
				<h3>调休时间</h3>
				<div className="formbox">
					<div className="rowinput row" onClick={this.setTime.bind(this,0)}>开始时间<span className="expectPayDate">{!this.state.beginDate?<i>请选择（必填）</i>:this.state.beginDate}</span></div>
					<div className="rowinput row" onClick={this.setTime.bind(this,1)}>结束时间<span className="expectPayDate">{!this.state.endDate?<i>请选择（必填）</i>:this.state.endDate}</span></div>
				</div>
			</div>
			);
	}
}