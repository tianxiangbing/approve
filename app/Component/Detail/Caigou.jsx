
import React from 'react';
import CaigouDetail from './CaigouDetail';
import Config from 'config';
let {Component} = React;

export default class Caigou extends Component{
	constructor(props){
		super(props);
	}
	showImage(index){
		let imgArr = (this.props.detail.photos||[]).map((item)=>{
				return item.photo_url;
			});
		Config.native('showImage', {
			position: index,
			picsArr: imgArr
		})
	}
	render(){
		this.detail = this.props.detail;
		this.detail.customJObj = JSON.parse(this.detail.customJObj||"{}")||{};
		console.log(this.detail.customJObj)
		return (
			<div>
				<div className="detail-row"><label>采购事由：</label><span>{Config.isNullShowText(this.detail.applyResean)}</span></div>
				<div className="detail-row"><label>期望交付日期：</label><span>{this.detail.customJObj.expectPayDate}</span></div>
				<div className="topborder"/>
				{
					(this.detail.customJObj.detailJArr||[]).map((item,index)=>{
						let indx = index+1;
						return <CaigouDetail detail={this.detail.customJObj.detailJArr} ref={"caigouDetail"+index} index={indx} item={item} key={index} />
					})
				}
				<div className="topborder"/>
				<div className="detail-row sum-price"><label>总价（元）：</label><span className="price">{(this.detail.customJObj.amount||0).toFixed(2)}</span></div>
				<div className="detail-row"><label>相关照片：</label>
					<span className="photos">
					{
						this.detail.photos&&this.detail.photos.length>0 ? 
						(this.detail.photos||[]).map((item,index)=>{
							return <img src={item.photo_url} onClick={this.showImage.bind(this,index)}/>
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