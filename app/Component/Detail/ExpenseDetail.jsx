import React from 'react';
import Config from 'config';
let {Component} = React;

export default class ExpenseDetail extends Component{
	showImage(index){
		Config.native('showImage', {
			position: index,
			picsArr: this.props.item.photoJArr
		})
	}
	render(){
		return (
			<div className="one">
				<div className="detail" title={this.props.title}>
					<div className="detail-row">
						<label><b>报销明细{this.props.detail.length>1 ?"（"+this.props.index+"）":undefined}</b></label>
					</div>
					<div className="detail-row">
						<label>报销类型：</label>{Config.expenseType[this.props.item.type]}
					</div>
					<div className="detail-row">
						<label>金额（元）：</label>{this.props.item.money}
					</div>
					<div className="detail-row">
						<label>备注：</label>{Config.isNullShowText(this.props.item.remark)}
					</div>
					<div className="detail-row">
						<label>相关照片：</label>
						<span className="photos">
						{
							this.props.item.photoJArr&&this.props.item.photoJArr.length>0 ? 
							(this.props.item.photoJArr||[]).map((item,index)=>{
								return <img src={item} onClick={this.showImage.bind(this,index)}/>
							})
							:"无"
						}
						</span>
					</div>
				</div>
			</div>
			);
	}
}