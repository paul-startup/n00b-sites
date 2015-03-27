$("#marioBros").on("mouseover",function(){
	//Find Mario's position
	var pos = $("#marioBros").position().top;
	var greenPos = $("#greenPipe").position().top;
	var whereMario = pos - greenPos;

	console.log(pos);
	console.log(greenPos);
	console.log(whereMario);
	//if top position is not default
	if (whereMario > 1) {
	//then reset it to the top
		$("#marioBros").animate({
			top:"29vh"}, 'slow' );
	}
	//otherwise make it move down
	else {
		$("#marioBros").animate({
			top:"+68vh"}, 'slow' );
	}
});