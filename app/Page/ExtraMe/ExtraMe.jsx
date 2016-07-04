import React from 'react';
import Helmet from "react-helmet";
import Config from 'config';
import UesrAvatar from 'Component/UserAvatar';
import ListItem from 'Component/ListItem';

let {Component} = React;
export default class ExtraMe extends Component{
	constructor(props){
		super(props);
		this.state={list:[],tabIndex:1,nodata:false,nodataText:['暂无知会您的审批申请','暂时没有知会您的申请']};
	}
	componentDidMount(){
		this.bind(1);
	}
	renderAvatar(item){
		item.name =item.name||item.uname;
		return <UesrAvatar item={item}/>
	}
	bind(index){
		Config.ajax("extraKnownForMe",{
			method: 'POST',
			body:JSON.stringify({approveStatus:index})
		}).then((res)=>{
			if(res.status==200){
				console.log(res.result)
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
		this.setState({tabIndex:index});
		this.bind(index);
	}
	render(){
		return (
			<div className="list">
				<Helmet title="知会我的"/>
				<div className="head">
					<a className={this.state.tabIndex ==1?"focus":undefined} onClick={this.Tab.bind(this,1)}>待审批</a>
					<a className={this.state.tabIndex ==2?"focus":undefined} onClick={this.Tab.bind(this,2)}>已审批</a>
				</div>
				<div className="list-body">
					{
						this.state.list.map((item)=>{
							return (
								<ListItem approveName={item.approveName} applyType={item.applyType} applyId={item.applyId} avatar={this.renderAvatar(item)} title={item.applyResean} desc={item.uname+"的"+Config.applyType[item.applyType]} time={item.gmtCreate} status={item.approveStatus}/>
								)
						})
					}
					{this.state.nodata ?(<div className="nodata"><i className="iconfont icon-111"/>{this.state.nodataText[this.state.tabIndex-1]}</div>):undefined}
				</div>
			</div>
			)
	}
}