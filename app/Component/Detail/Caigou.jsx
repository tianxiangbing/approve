
import React from 'react';
import CaigouDetail from './CaigouDetail';
let {Component} = React;

export default class Caigou extends Component{
	constructor(props){
		super(props);
		this.detail = this.props.detail;
	}
	render(){
		return (
			<div>
				<div className="detail-row"><label>采购事由：</label><span>日常办公</span></div>
				<div className="detail-row"><label>期望交付日期：</label><span>2015.1.1</span></div>
				<div className="topborder"/>
				{
					this.detail.customStruct.detailJArr.map((item,index)=>{
						let indx = index+1;
						return <CaigouDetail detail={this.detail.customStruct.detailJArr} ref={"caigouDetail"+index} index={indx} item={item} key={index} />
					})
				}
				<div className="topborder"/>
				<div className="detail-row sum-price"><label>总价：</label><span className="price">{this.detail.customStruct.amount}</span></div>
				<div className="detail-row"><label>相关照片：</label>
					<span className="photos">
					{
						this.detail.photos&&this.detail.photos.length>0 ? 
						(this.detail.photos||[]).map((item)=>{
							return <img src={item.photo_url}/>
						})
						:"无"
					}
					</span>
				</div>
				<div className="detail-row"><label>审批编号：</label><span>{this.detail.applyId}</span></div>

			</div>
			);
	}
}