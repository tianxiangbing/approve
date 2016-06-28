import React from 'react';
let {Component}=React;
export default class ListItem extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return (
				<div className="item">
					<div className="userAvatar">
						{this.props.avatar}
					</div>
					<div className="rcontent">
						<div className="event">{this.props.title}<span className="time">{this.props.time}</span></div>
						<div className="desc">
						<span className="status">{this.props.status}</span>
						<p>{this.props.desc}</p>
						</div>
					</div>
				</div>
			)
	}
}