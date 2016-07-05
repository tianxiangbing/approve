
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
		let customJObj = this.props.detail.customJObj;
		if(customJObj){
			customJObj = JSON.parse(customJObj);
		}else{
			customJObj={}
		}
		return (
			<div>
				<div className="detail-row"><label>采购事由：</label><span>{Config.isNullShowText(this.props.detail.applyResean)}</span></div>
				<div className="detail-row"><label>期望交付日期：</label><span>{customJObj.expectPayDate}</span></div>
				<div className="topborder"/>
				{
					(customJObj.detailJArr||[]).map((item,index)=>{
						let indx = index+1;
						return <CaigouDetail detail={customJObj.detailJArr} ref={"caigouDetail"+index} index={indx} item={item} key={index} />
					})
				}
				<div className="topborder"/>
				<div className="detail-row sum-price"><label>总价（元）：</label><span className="price">{(customJObj.amount||0).toFixed(2)}</span></div>
				<div className="detail-row"><label>相关照片：</label>
					<span className="photos">
					{
						this.props.detail.photos&&this.props.detail.photos.length>0 ? 
						(this.props.detail.photos||[]).map((item,index)=>{
							return <img src={item.photo_url} onClick={this.showImage.bind(this,index)}/>
						})
						:"无"
					}
					</span>
				</div>
				<div className="detail-row"><label>审批编号：</label><span>{this.props.detail.applyId}</span></div>

			</div>
			);
	}
}