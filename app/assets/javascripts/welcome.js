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

function fox_fetch_data(){
	$('#fox-output').prop('disabled', true);
	$("#fox-amount").change(function () {
		$('#fox-output').prop('disabled', false);
		$("#fox-output").click(function(e) {
	    $.ajax({
        type: "GET",
        url: "/fox_volume",
        data: { 
          data: parseFloat($("#fox-amount").val())
        },
        beforeSend: function(){
        	$('#loading-img').addClass("show");
        },
        success: function(result) {
        	$('#loading-img').removeClass("show").addClass('hide');
        	$('#fox-output-label').prop('hidden', false);
        	$('#fox-output-label').text(result);
        }
	    });
		});


	});
}

$(document).ready(function() {
	hide_tables();
	show_hide_tables();
	fox_fetch_data();
});
