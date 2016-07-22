import '../scss/masheng.scss';
if (location.href.indexOf('https') != -1) {
	window.signRecord = 'https://signin.api.imasheng.com/signin/pages/index.html'; //?orgId=' + localStorage.getItem('orgId') + '#/record';
	window.imgUrl = 'http://video.statics.cdn.jituancaiyun.com//approve/caiyun/scjr_yc@3x.png';
} else {
	window.signRecord = 'http://10.0.10.44/resource/sign/caiyun/index.html'; //?orgId=' + localStorage.getItem('orgId') + '#/record';
	window.imgUrl = 'http://10.0.10.44/resource/approve/caiyun/scjr_yc@3x.png';
}