import React from 'react';
let {Component} =  React;

export default class Caigou extends Component{

	constructor(props){
		super(props);
	}
	getValues(){
		return {
			applyResean:this.refs.applyResean.value
		};
	}
	render(){
		return (
			<div>
			<textarea ref="applyResean"/>
			</div>
			)
	}
}