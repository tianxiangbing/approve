import React from 'react';
module.exports = function(msg, stage, callback) {
	stage.setState({
		dialog: {
			show: true,
			mask: true,
			msg: <div><h3>{msg}</h3></div>,
			buttons: <div className="dialog-button"><a onClick={()=>{stage.setState({dialog:0})}}>取消</a><a onClick={callback.bind(stage)}>确定</a></div>,
			type: "confirm"
		}
	});
}