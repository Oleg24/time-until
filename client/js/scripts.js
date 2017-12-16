(function(){
	'use strict';

	let activeFilter = "years";
	let lifeExpectancy = 100;
	let age = null;

	function createBoxes(age){
		const container = $(".age-results");
		let boxes = "";
		const lifeExpectancyByFilter = getLifeExpectancyByFilter(activeFilter);
		const currentAge = getCurrentAgeByFilter(activeFilter);
		for(var i = 1; i <= lifeExpectancyByFilter; i++){
			if(i <= currentAge){
				boxes += "<div class=\"box bg-black\"/><div/>";
			} else {
				boxes += "<div class=\"box bg-white\"/><div/>";
			}
		}
		container.html(boxes);
	}

	function getLifeExpectancyByFilter(filter){
		let boxes = lifeExpectancy;
		switch(filter){
			case 'months':
				boxes = lifeExpectancy*12;
				break;
			case 'weeks':
				boxes = lifeExpectancy*52;
				break;
			case 'days':
				boxes = lifeExpectancy*365;
				break;
			default: 

		}
		return boxes;
	}

	function getCurrentAgeByFilter(filter){
		let currentAge = age;
		switch(filter){
			case 'months':
				currentAge = currentAge*12;
				break;
			case 'weeks':
				currentAge = currentAge*52;
				break;
			case 'days':
				currentAge = currentAge*365;
				break;
		}
		return currentAge;
	}

	function onChangeFilter(filter){
		if(filter.toLowerCase() !== activeFilter){
			activeFilter = filter.toLowerCase();
			$(".time-filter.active").removeClass("active");
			$(".time-filter:contains(" + filter + ")").addClass("active");
			if(age !== null){
				createBoxes(age);
			}
		}
	}

	function createFilters(){
		const container = $(".filters");
		let filtersHTML = "";
		filters.forEach((filter)=>{
			if(filter.active){
				filtersHTML += "<span class=\"time-filter active\">" + filter.name + "</span>"
			} else {
				filtersHTML += "<span class=\"time-filter\">" + filter.name + "</span>"
			}
		});
		container.html(filtersHTML);
	}

	function init(){
		createFilters();		
	}

	init();

	
	/* Event Listeners */
	$("#your-age").on("input", function(e){
		age = e.target.value;
		if(isNaN(age)){
			// do something that's not true
		} else {
			createBoxes(age);
		}
	});

	$(".time-filter").on("click", function () {
   	 	let filter  =  $(this).text();
   	 	onChangeFilter(filter);	
	});

})();