import React from 'react';
let {Component} = React;

export  default  class CaigouDetail extends Component{
	constructor(props){
		super(props);
		this.state={item:{price:'',quantity:'',key:this.props.key}}
	}
	del(index){
		this.props.del(index);
		this.props.reRender();
	}
	componentDidMount(){
		console.log("didMount")
		this.setState({state:this.props.item});
	}
	change(field,e){
		let value= e.target.value;
		if(field == "price"){
			let regStr = /^[0-9]+(\.)?([0-9]{1,2})?$/;
			if(!regStr.test(value)&&value!=""){
				this.state.item[field]=this.state.item[field];	
			}else{
				this.state.item[field]= value;
			}
			this.setState({item:this.state.item})
		}else if(field == "quantity"){
			let regStr = /^\d+$/;
			if(!regStr.test(value)&&value!=""){
				this.state.item[field]=this.state.item[field];	
			}else{
				this.state.item[field]= value;
			}
			this.setState({item:this.state.item})
		}else{
			this.state.item[field]= value;
			this.setState({item:this.state.item})
		}
		this.props.computeMoney();
	}
	getMoney(){
		let price = this.state.item.price||0;
		let quantity = this.state.item.quantity||0;
		return price*quantity;
	}
	render(){
		return (
			<div>
				<div className="detail" title={this.props.title}>
					<h3>采购明细({this.props.index}) <a onClick={this.props.del} className={this.props.index>1?"del":"hide"}>删除</a></h3>
					<div className="formbox">
						<div className="rowinput">
							名称<input type="text" value={this.state.item.item} onChange={this.change.bind(this,"item")} placeholder="请输入（必填）"/>
						</div>
						<div className="rowinput">
							规格<input type="text" value={this.state.item.spec} onChange={this.change.bind(this,"spec")} placeholder="请输入（必填）"/>
						</div>
						<div className="rowinput">
							单位<input type="text" value={this.state.item.unit} onChange={this.change.bind(this,"unit")} placeholder="请输入（必填）"/>
						</div>
						<div className="rowinput">
							单价（元）<input type="text" value={this.state.item.price} onChange={this.change.bind(this,"price")} placeholder="请输入（必填）"/>
						</div>
						<div className="rowinput">
							数量<input type="text" value={this.state.item.quantity} onChange={this.change.bind(this,"quantity")} placeholder="请输入（必填）"/>
						</div>
					</div>
				</div>
			</div>
			);
	}
}