var activeform;

$j(document).ready(function() {

	$j(".date").datepicker({
		defaultDate: "+1",
		dateFormat: "dd/mm/yy",
		minDate: 0
	});

	var walloptions = { beforeSubmit: form_validate, success: form_success }; 
	
	function form_validate(formData, jqForm) { 
		activeform = jqForm[0].id;
		return $j("#"+jqForm[0].id+"").xvalidate();
	}

	function form_success(responseText) { 
		fo = $j("form#"+activeform+"");
		message("Form Response", responseText);
		
		fo.resetForm();
		fo.clearForm();
	}
	
	$j('.ajax').ajaxForm(walloptions);
	
	$j('#contact-form').submit(function() {
		return $j("#contact-form").xvalidate();
	});
	
	global_initializations();
});

function global_initializations() {
	if ($j.browser.webkit) { $j("body").addClass("webkit"); }
	if ($j.browser.mozilla) { $j("body").addClass("mozilla"); }
	if ($j.browser.msie) { $j("body").addClass("explorer"); }
	parselinks();
}


function parselinks() {
	$j('[icon^="ui-icon"]:not(:has(span))').each(function() { 
		$j(this).html('<span class="ui-icon '+$j(this).attr("icon")+'"></span><span class="text">'+$j(this).html()+'</span>');
		$j(this).addClass("myicon");
	});
}

function loader(x) { if (x) { $j(".loading").fadeIn("fast"); } else { $j(".loading").fadeOut("fast"); }}