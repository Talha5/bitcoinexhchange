function show_hide_tables() {
	$('#bankSelect').on('change', function() {
		var table = this.value.toLowerCase();
		if(table === 'mbt'){
			$('#mbt-table').show();
			$('#fox-table').hide();
			$('#b2u-table').hide();
		}else if(table === 'fox'){
			$('#fox-table').show();
			$('#mbt-table').hide();
			$('#b2u-table').hide();
		}else if(table === 'b2u'){
			$('#b2u-table').show();
			$('#fox-table').hide();
			$('#mbt-table').hide();
		}
	});
}

function hide_tables(){
	$('#fox-table').hide();
	$('#mbt-table').hide();
}

$(document).ready(function() {
	hide_tables();
	show_hide_tables();
});
