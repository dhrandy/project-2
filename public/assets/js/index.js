$(function(){
	$("#find").click(function(){
		$(".test").modal('show');
	});
	$(".test").modal({
        closable: true,
        width: 600
	});
});