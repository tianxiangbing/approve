import React from 'react';
let {Component} =React;
import Config from 'config';

export default class Leave extends Component{
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
		return (
			<div>
				<div className="detail-row ">
					<label>请假类型：</label>
					<span>
						{Config.leaveType[this.props.detail.leaveType]}
					</span>
				</div>
				<div className="detail-row ">
					<label>开始时间：</label>
					<span>
						{this.props.detail.beginDate}
					</span>
				</div>
				<div className="detail-row ">
					<label>结束时间：</label>
					<span>
						{this.props.detail.endDate}
					</span>
				</div>
				<div className="detail-row ">
					<label>请假事由：</label>
					<span>
						{this.props.detail.applyResean}
					</span>
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
				<div className="detail-row">
					<label>审批编号：</label>
					<span>{this.props.detail.applyId}</span>
				</div>
			</div>
			);
	}
}