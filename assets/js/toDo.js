$('ul').on('click','span',function(event){

	$(this).parent().fadeOut(1000,function(){
		$(this).remove();
	});
	event.stopPropagation();
});
$('ul').on('click','li',function(){
	//console.log($(this).css('color'));
	if($(this).css('color')==='rgb(102, 102, 102)'){
		$(this).css({
		color:"#454141",
		textDecoration:'line-through'
	});
	}else{
		$(this).css({
		color:"#666",
		textDecoration:"none"
	});
	}

});

$('input').keypress(function(event){
	if(event.which===13){
	var s=$(this).val();
	//console.log(s);
	//console.log('pressed enter');	
	$('ul').append('<li><span><i class="fas fa-trash-alt"></i></span> '+s+' </li>');	
	$(this).val('');
	}

})

$('.fa-plus').click(function(){
	$('input').fadeToggle();
});