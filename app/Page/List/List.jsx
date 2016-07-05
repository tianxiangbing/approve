import React from 'react';
let {Component} = React;
import Config from 'config';
import UesrAvatar from 'Component/UserAvatar';
import ListItem from 'Component/ListItem';

import Helmet from "react-helmet";
//待我审批
export default class List extends Component{
	constructor(props){
		super(props);
		this.state={list:[],hideStatus:true,tabIndex:1,nodata:false,nodataText:['没有已完成的审批','没有待审批申请']};
	}
	componentDidMount(){
		this.bind(1);
	}
	renderAvatar(item){
		item.name =item.name||item.uname;
		return <UesrAvatar item={item}/>
	}
	bind(index){
		this.setState({list:[]});
		Config.ajax("queryMyApprove",{
			method: 'POST',
			body:JSON.stringify({approveStatus:index})
		}).then((res)=>{
			if(res.status==200){
				this.setState({list:res.result})
				if(res.result==null || res.result.length ==0 ){
					this.setState({nodata:true});
				}else{
					this.setState({nodata:false});
				}
			}else{
				this.setState({nodata:true});
			}
		});
	}
	Tab(index){
		if(index ==1){
			this.setState({hideStatus:true})
		}else{
			this.setState({hideStatus:false});
		}
		this.setState({tabIndex:index});
		this.bind(index);
	}
	render(){
		return (
			<div className="list">
				<Helmet title="待我审批"/>
				<div className="head">
					<a className={this.state.tabIndex ==1?"focus":undefined} onClick={this.Tab.bind(this,1)}>待审批</a>
					<a className={this.state.tabIndex ==0?"focus":undefined} onClick={this.Tab.bind(this,0)}>已审批</a>
				</div>
				<div className="list-body">
					{
						this.state.list.map((item)=>{
							return (
								<ListItem fucked={true} applyType={item.applyType} applyId={item.applyId} avatar={this.renderAvatar(item)} title={item.applyResean} desc={item.uname+"的"+Config.applyType[item.applyType]} time={item.gmtCreate} status={item.approveStatus} hideStatus={this.state.hideStatus}/>
								)
						})
					}
					{this.state.nodata ?(<div className="nodata"><i className="iconfont icon-111"/>{this.state.nodataText[this.state.tabIndex]}</div>):undefined}
				</div>
			</div>
			)
	}
}