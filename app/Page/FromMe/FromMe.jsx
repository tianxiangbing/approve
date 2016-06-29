import React from 'react';
let {Component}=React;
import ListItem from 'Component/ListItem';
import Config from 'config';
import Dialog from 'Component/Dialog';
import alert from 'Component/alert.js';

export default class FromMe extends Component{
	constructor(props){
		super(props);
		this.state={list:[],tabIndex:1,dialog:0};
	}
	componentDidMount(){
		this.bind(this.state.tabIndex);
	}
	bind(index){
		Config.ajax("queryMyApply",{
			method: 'POST',
			body:JSON.stringify({approveStatus:index})
		}).then((res)=>{
			if(res.status==200){
				this.setState({list:res.result||[]})
			}else{
				alert(res.result[0].message,this)
			}
		});
	}
	Tab(index){
		this.setState({tabIndex:index});
		this.bind(index);
	}
	renderAvatar(item){
		return <div className="img" style={{backgroundColor:Config.applyTypeColor[item.applyType]}}>{Config.applyType[item.applyType]}</div>
	}
	renderDialog(){
		console.log(this.state.dialog)
		return <Dialog stage={this} {...this.state.dialog}/>
	}
	render(){
		return (
			<div className="list">
				<div className="head">
					<a className={this.state.tabIndex ==1?"focus":undefined} onClick={this.Tab.bind(this,1)}>审批中</a>
					<a className={this.state.tabIndex ==0?"focus":undefined} onClick={this.Tab.bind(this,0)}>已完成</a>
				</div>
				<div className="list-body">
					{
						this.state.list.map((item)=>{
							console.log(item)
							return (
								<ListItem applyType={item.applyType} applyId={item.applyId} avatar={this.renderAvatar(item)} title={item.applyResean} desc={item.uname} time={item.gmtCreate} status={item.approveStatus}/>
								)
						})
					}
					<div>

					</div>
				</div>
                {this.state.dialog?this.renderDialog():undefined}
			</div>
			);
	}
}