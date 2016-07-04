import React from 'react';
let {Component}=React;
import ListItem from 'Component/ListItem';
import Config from 'config';
import Dialog from 'Component/Dialog';
import alert from 'Component/alert.js';

import Helmet from "react-helmet";
export default class FromMe extends Component{
	constructor(props){
		super(props);
		this.state={list:[],tabIndex:1,dialog:0,nodata:false,nodataText:["没有已完成的审批","您的申请都已处理完毕"]};
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
				if(res.result==null || res.result.length ==0 ){
					this.setState({nodata:true});
				}else{
					this.setState({nodata:false});
				}
				this.setState({list:res.result||[]})
			}else{
				this.setState({nodata:true});
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
				<Helmet title="我发起的"/>
				<div className="head">
					<a className={this.state.tabIndex ==1?"focus":undefined} onClick={this.Tab.bind(this,1)}>审批中</a>
					<a className={this.state.tabIndex ==0?"focus":undefined} onClick={this.Tab.bind(this,0)}>已完成</a>
				</div>
				<div className="list-body">
					{
						(this.state.list||[]).map((item)=>{
							console.log(item)
							return (
								<ListItem {...item} applyType={item.applyType} applyId={item.applyId} avatar={this.renderAvatar(item)} title={item.applyResean} desc={item.uname} time={item.gmtCreate} status={item.approveStatus}/>
								)
						})
					}
					{this.state.nodata ?(<div className="nodata"><i className="iconfont icon-111"/>{this.state.nodataText[this.state.tabIndex]}</div>):undefined}
				</div>
                {this.state.dialog?this.renderDialog():undefined}
			</div>
			);
	}
}