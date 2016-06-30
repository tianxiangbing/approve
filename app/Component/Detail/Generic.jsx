import React from 'react';
let {Component} = React;
import Config from 'config';

export default class Generic extends Component{
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
		}
		let applyDetail = customJObj && customJObj.applyDetail ||"无";
		return (
			<div>
				<div className="topborder"/>
				<div className="detail-row sum-price">
					<label>申请内容：</label>
					<span>
						{this.props.detail.applyResean}
					</span>
				</div>
				<div className="detail-row">
					<label>申请详情：</label>
					<span>{applyDetail}</span>
				</div>
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
			</div>
		);
	}
}