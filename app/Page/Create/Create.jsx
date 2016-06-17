import React from 'react';
let {Component} = React;
import Helmet from "react-helmet";
import Caigou from '../../Component/Approve/Caigou';

export default class Create extends Component{
	constructor(props){
		super(props);
		console.log(props)
		this.params =props.params
	}
	componentDidMount(){
		console.log(this.refs)
	}
	submit(){
		var values= this.refs.caigou.getValues();
		console.log(values);
	}
	render(){
		return (
			<div>
				<Helmet title={this.params.title}/>
				<Caigou ref="caigou"/>
				<button value="提交" onClick = {this.submit.bind(this)}/>
			</div>
			)
	}
}