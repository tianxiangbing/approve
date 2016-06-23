module.exports = function(msg, stage) {
	stage.setState({
		dialog: {
			show: true,
			msg: msg,
			type: "alert"
		}
	});
}