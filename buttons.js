var id = 0;

document.onkeydown = function(a){
	if( a.key === "Enter" ){
		$('#buttonland').append("<button id=" + id + " class='button' value='blue'>Blue</button>");
		id++;
	}
}

$(document).on("click", ".button", function(){
	var thing = $(this).attr("id")
	if(document.getElementById(thing).value === 'blue'){
		$('#'+thing).css('background-color','red');
		document.getElementById(thing).innerHTML = 'Red';
		document.getElementById(thing).value = 'red';
	}else{
		$('#'+thing).css('background-color','blue');
		document.getElementById(thing).innerHTML = 'Blue';
		document.getElementById(thing).value = 'blue';
	}
});

$(document).on({
	mouseenter: function () {
		var thing = $(this).attr("id")
		$('#'+thing).css('background-color', 'green');
		document.getElementById(thing).innerHTML = 'Green';
	},
	mouseleave: function () {
		var thing = $(this).attr("id")
		var color = $(this).attr("value")
		$('#'+thing).css('background-color', color);
		if(document.getElementById(thing).value === 'blue'){
			document.getElementById(thing).innerHTML = 'Blue';
		}else{
			document.getElementById(thing).innerHTML = 'Red';
		}
	}
}, ".button");