import React from 'react';
let {Component} = React;
import Config from 'config';
import UesrAvatar from 'Component/UserAvatar';
import ListItem from 'Component/ListItem';

//待我审批
export default class List extends Component{
	constructor(props){
		super(props);
		this.state={list:[{uid:7564213,name:"李三"}],tabIndex:0};
	}
	componentDidMount(){
		this.bind(0);
	}
	renderAvatar(item){
		return <UesrAvatar item={item}/>
	}
	bind(index){
		Config.ajax("");
	}
	Tab(index){
		this.setState({tabIndex:index});
		this.bind(index);
	}
	render(){
		return (
			<div className="list">
				<div className="head">
					<a className={this.state.tabIndex ==0?"focus":undefined} onClick={this.Tab.bind(this,0)}>待审批</a>
					<a className={this.state.tabIndex ==1?"focus":undefined} onClick={this.Tab.bind(this,1)}>已审批</a>
				</div>
				<div className="list-body">
					{
						this.state.list.map((item)=>{
							return (
								<ListItem avatar={this.renderAvatar(item)} title="标题xxxx " desc="这是描述啊" time="昨天" status="3"/>
								)
						})
					}
					<div>

					</div>
				</div>
			</div>
			)
	}
}