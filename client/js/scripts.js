(function(){
	'use strict';

	const lifeExpectancy = 100;

	$('#your-age').on('input', function(e){
		const age = e.target.value;
		if(isNaN(age)){
			// do something that's not true
		} else {
			createBoxes(age);
		}
	});

	function createBoxes(age){
		const container = $(".age-results");
		let boxes = "";
		for(var i = 0; i < lifeExpectancy; i++){
			if(i <= age){
				boxes += "<div class=\"box bg-black\"/><div/>";
			} else {
				boxes += "<div class=\"box bg-white\"/><div/>";
			}
		}
		container.html(boxes);
	}

})();