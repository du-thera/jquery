/*
alert($ === jQuery);//相等的。

$(function(){
	$('input').click(function(){
		alert('hi jquery!')
	});
	$('.box').css('color','red');
});
$(function(){
	alert('.box');  //返回JQuery对象
	alert(document.getElementsByClassName('box'));//[object HTMLDivElement],原生DOM对象
	alert($('.box').get(0));//[object HTMLDivElement],原生DOM对象
	alert($(document.getElementsByClassName('box')).css('color','red'));//JQuery对象和DOM对象互换
});
$(function(){
	$('.two.b').css('color','maroon');  //添加一个行为 这个行为是样式.
	// alert($('.two').size());
	$('.two').eq(1).css('background','red');
	alert($('div').length);
});
$(function(){
	if ($('.box.two >p').size()>0) {
		$('.box.two >p').css('color','maroon');
	};
	
});
$(function(){
	if ($('.box.two').get(0)) {
		alert('aaa');
	};

	if($('.box.two')[0]){
		alert('bbb');
	};
	
});
$(function(){
	// alert($('div').size());
	//alert($('div').length);
}); 

$(function(){
	$('.one,.two').css('color','green');
	$('.ap,.two.b').css('color','#0f0');
	$('.two.a p').css('color','#0f0');
	$('*').css('color','orange');
	alert($('*').size());
	alert($('*')[0].nodeName);
	在全局范围使用*号,会极大的消耗资源,所以不建议在全局使用


	$('.box.two *').css('color','orange');
	alert($('.box.two *').size());
	通配选择符一般运用在局部的环境内.
	$('.box.two >p').css('color','orange');
}); 
*/
$(function(){
	//$('.box.two >p').css('color','orange');

	//find()方法 后代选择
	//$('.box.two').find('p').css('color','orange');

	//children()方法_子选择
	//$('.box.two').children('p').css('color','red');

	//$('.a + .b').css('color','red');
	//next()方法 同等级下面节点
	//$('.a').next('.b').css('color','maroon');
	//prev()方法  同等级上面节点
	//$('.c').prev().css('color','orange');

	//$('.a ~').css('color','red');
	//nextAll()方法  同等级下面所有节点
	//$('.a').nextAll().css('color','orange');

	//prevAll()方法  同等级上面所有节点
	//$('.c').prevAll('.a , .b').css('color','orange');

	//要上下同等级所有节点都选中
	//$('.b').nextAll().css('color','orange');
	//$('.b').prevAll().css('color','orange');
	//siblings()方法
	//$('.b').siblings().css('color','blue');


	//prevUntil()同级上非指定元素选定,遇到则停止
	//$('.b').prevUntil('p').css('color','orange');
	//nextUntil()同级下非指定元素选定,遇到则停止
	//$('.b').nextUntil('p').css('color','red');
});