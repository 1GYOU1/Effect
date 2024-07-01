var broVer = function(){
	return navigator.appVersion.indexOf("MSIE");
}

var sObj = {
	init:function(){
		sObj.idx = 0; // range slider index
		sObj.flag = false; // range button click flag
		sObj.bodyW = {}; // range slide body width
		sObj.dragTarget = ""; // drag target
		sObj.deviceType = ""; // device type : pc or mobile
		sObj.clickIdx = 0; // current click target index
		sObj.rangeTargetLeft = {}; // init button position
		sObj.rangeTargetWidth = {}; // control button size
		// sObj.cBtnPos = 0; // button move position
		// sObj.rangeLog = {}; 
		sObj.callBack = {}; // callback function
	},

	createObj:function(op){
		// control button create
		var contBtn = document.createElement("div");
		contBtn.setAttribute("id","controlBtn"+sObj.idx);

		if(op.rangeContClass != null && op.rangeContClass != ""){
			contBtn.setAttribute("class",op.rangeContClass);
		}
		document.getElementById(op.rangeTarget).appendChild(contBtn);

		//contBtn.style.left = contBtn.offsetLeft + "px";

		contBtn.style.left = "0px";

		sObj.rangeTargetLeft[sObj.idx] = document.getElementById(op.rangeTarget).offsetLeft;
		sObj.bodyW[sObj.idx] = document.getElementById(op.rangeTarget).offsetWidth;
		sObj.rangeTargetWidth[sObj.idx] = contBtn.offsetWidth;
		
		// sObj.rangeLog[sObj.idx] = document.getElementById(op.rangeLog);
		sObj.callBack[sObj.idx] = op.callBack;

		sObj.initObjEvent();
	},

	//window drag Event
	initObjEvent: function(e){

		var UserAgent = navigator.userAgent;
		if (UserAgent.match(/iPhone|iPod|Android|Windows CE|BlackBerry|Symbian|Windows Phone|webOS|Opera Mini|Opera Mobi|POLARIS|IEMobile|lgtelecom|nokia|SonyEricsson/i) != null || UserAgent.match(/LG|SAMSUNG|Samsung/) != null)
		{
			// "m"obile
			sObj.deviceType = "m"
			document.querySelector("#controlBtn" + sObj.idx).addEventListener("touchstart", sObj.onContBtnDown, false);
		}else{
			// "d"esktop
			sObj.deviceType = "d"
			if(broVer() != -1){
				document.querySelector("#controlBtn" + sObj.idx).attachEvent("onmousedown", sObj.onContBtnDown);
			}else{
				document.querySelector("#controlBtn" + sObj.idx).addEventListener("mousedown", sObj.onContBtnDown, true);
			}			
		}

		sObj.idx++;
	},

	onContBtnDown:function(e){
		sObj.flag = true;
		if(broVer()){
			sObj.dragTarget = e.srcElement;
		}else{
			sObj.dragTarget = e.target;
		}
		
		sObj.clickIdx = (sObj.dragTarget.id).replace("controlBtn","");

		if(sObj.deviceType == "m"){
			document.addEventListener("touchmove", sObj.onContBtnMove, false);
			document.addEventListener("touchend", sObj.onBtnUp, false);
		}else{
			if(broVer() != -1){
				document.attachEvent("onmousemove", sObj.onContBtnMove);
				document.attachEvent("onmouseup", sObj.onBtnUp);
			}else{
				document.addEventListener("mousemove", sObj.onContBtnMove, false);
				document.addEventListener("mouseup", sObj.onBtnUp, false);
			}			
		}
	},

	onBtnUp:function(){
		sObj.flag = false;
		sObj.dragTarget = "";

		if(sObj.deviceType == "m"){
			document.removeEventListener("touchmove", sObj.onContBtnMove, false);
		}else{
			if(broVer() != -1){
				document.detachEvent("onmousemove", sObj.onContBtnMove);
			}
			else{
				document.removeEventListener("mousemove", sObj.onContBtnMove, false);
			}
		}
	},

	onContBtnMove:function(e){
		//event.preventDefault();

		if(sObj.flag){
			var evt;

			if(e.type == "mousemove"){
				evt = e;
			}else{
				evt = e.touches[0];
			}
			
			//sObj.cBtnPos = (sObj.dragTarget.style.left).replace("px", "") * 1;

			if(sObj.callBack[sObj.clickIdx]){
				// callback function for button position
				sObj.callBack[sObj.clickIdx](sObj.dragTarget.offsetLeft/(sObj.bodyW[sObj.clickIdx] - sObj.rangeTargetWidth[sObj.clickIdx]));
			}

			var _pageX = 0;

			if(broVer() != -1){
				_pageX = evt.clientX + document.documentElement.scrollLeft - sObj.rangeTargetLeft[sObj.clickIdx];
			}else{
				_pageX = evt.pageX - sObj.rangeTargetLeft[sObj.clickIdx];
			}
			
			if(_pageX < 0){
				sObj.dragTarget.style.left = "0px";
			}else if(_pageX >= sObj.bodyW[sObj.clickIdx]-sObj.rangeTargetWidth[sObj.clickIdx]){
				sObj.dragTarget.style.left = sObj.bodyW[sObj.clickIdx]-sObj.rangeTargetWidth[sObj.clickIdx] + "px";
			}else{
				sObj.dragTarget.style.left = _pageX + "px";
			}
		}
	},
}

$(function(){
	sObj.init();
})