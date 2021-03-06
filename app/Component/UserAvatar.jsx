import React from 'react';
let {Component}=React;
export default class UserAvatar extends Component{
	constructor(props){
		super(props);
		console.log(this.props.item.userName)
		this.state={error:false};
	}
	
	errorImg(item,e){
		//console.log(e)
      let avatarColors = ['#f17474','#7ac47a','#efbc6b','#75a4d7','#45b2e3']
      let color = avatarColors[item.uid% 5];
		//alert(item.uid+'头像error:::'+color)
    /*  item.error=true;
      item.color= color;*/
      //this.setState({userInfo:this.state.userInfo});
      //this.props.errorCallback&&this.props.errorCallback.call(this,item);
     //this.setState({item:this.state.item});
		this.setState({color:color,error:true});
	}

	render(){
		return (
		<span>
			{!this.state.error?<img onError={this.errorImg.bind(this,this.props.item)} src={"http://n1.store.uban360.com:7188/sfs/avatar?uid="+this.props.item.uid}/>:<div className="img" style={{backgroundColor:this.state.color}}>{(this.props.item.name||"").slice(-2)}</div>}
		</span>
		);
	}
}