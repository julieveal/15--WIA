// JavaScript Document

$(function() {
	$(".editable_select").editable("http://www.appelsiini.net/projects/jeditable/php/save.php", {
		indicator : '<img src="imgages/generator.gif">',
		data : "{'first':'first','second':'second','third':'third'}",
		type : "select",
		submit : "OK",
		style : "inherit",
		submitdata : function() {
	return {id : 2};
	}
});

	$(".editable_textarea").editable("http://www.appelsiini.net/projects/jeditable/php/save.php", {
		indicator : "<img src='imgages/generator.gif'>",
		type : 'textarea',
		submitdata: { _method: "put" },
		select : true,
		submit : 'OK',
		cancel : 'cancel',
		cssclass : "editable"
	});

	$(".editable_textile").editable("http://www.appelsiini.net/projects/jeditable/php/save.php?renderer=textile", {
		indicator : "<img src='imgages/generator.gif'>",
		loadurl : "http://www.appelsiini.net/projects/jeditable/php/load.php",
		type : "textarea",
		submit : "OK",
		cancel : "Cancel",
		tooltip : "Click to edit..."
	});

	$(".click").editable("http://www.appelsiini.net/projects/jeditable/php/echo.php", {
		indicator : "<img src='imgages/generator.gif'>",
		tooltip : "Click to edit...",
		style : "inherit"
	});

	$(".dblclick").editable("http://www.appelsiini.net/projects/jeditable/php/echo.php", {
		indicator : "<img src='imgages/generator.gif'>",
		tooltip : "Doubleclick to edit...",
		event : "dblclick",
		style : "inherit"
	});

	$(".mouseover").editable("http://www.appelsiini.net/projects/jeditable/php/echo.php", {
		indicator : "<img src='img/indicator.gif'>",
		tooltip : "Move mouseover to edit...",
		event : "mouseover",
		style : "inherit"
	});

/* Should not cause error. */
$("#nosuch").editable("http://www.appelsiini.net/projects/jeditable/php/echo.php", {
	indicator : "<img src='img/indicator.gif'>",
	type : 'textarea',
	submit : 'OK'
});

}); 