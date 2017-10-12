var videoTime = null;
$(document).ready(function() {
	var endTime = parseInt(videoTime * 1000);
	console.log(endTime)
});
//视频播放完成
function getTimeLen() {
	videoWn = document.getElementById("videoWn");
	videoTime = Math.floor(videoWn.duration)-1;
}