import React from 'react';
let {Component} = React;

export  default  class CaigouDetail extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return (
			<div>
				<h3>采购明细({this.props.index})</h3>
			</div>
			);
	}
}