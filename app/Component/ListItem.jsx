import React from 'react';
let {Component}=React;
import Config from 'config';

export default class ListItem extends Component{
	constructor(props){
		super(props);
		this.approveStatus={
			"0": "发起申请",
			"1": "审批中",
			"2": "已同意",
			"3": "已拒绝",
			"4": "已撤回",
			"5": "未审批"
		}
	}
	jumpLink(){
		if(this.props.applyType<4){
			location.href="/approve/app/detail.html?applyId="+this.props.applyId+"&pageType=fromme"
		}else
		{
			location.href="#detail/"+this.props.applyType+"/"+Config.applyType[this.props.applyType]+"/"+this.props.applyId+"/fromme"
		}
	}
	render(){
		return (
				<div className="item" onClick={this.jumpLink.bind(this)}>
					<div className="userAvatar">
						{this.props.avatar}
					</div>
					<div className="rcontent">
						<div className="event"><p>{this.props.title}</p><span className="time">{this.props.time}</span></div>
						<div className="desc">
						{this.props.status==1?<span className="status">{'等待'+this.props.approveName+'处理'}</span>:<span className={this.props.status==3? "status reject" :"status"}>{this.approveStatus[this.props.status]}</span>}
						<p>{this.props.desc}</p>
						</div>
					</div>
				</div>
			)
	}
}