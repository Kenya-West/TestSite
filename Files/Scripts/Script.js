$(document).ready(function(){
	hideverything();
	arr_c = [0, 0, 0, 0, 0, 0, 0];
	arr_c_2 = [0, 0, 0, 0, 0, 0, 0];//удалить после дебагаs
});
function changetheme(){
	//document.body.background = 'bgimages/'+num+'.jpg'; //totalcount - максимальное количество файлов
	/*document.body.background = 'Files/Images/bgs/bg2.jpg';
	document.getElementById('textbg').style.backgroundImage='url(Files/Images/bg2_2.jpg)';
	$('body').css('background-image', 'url(Files/Images/bgs/bg2.jpg)');*/
	var totalcount = 8;
	var num = 0;
	num=getRandomInt(1, totalcount)
	document.getElementById('textbg').style.backgroundImage='url(Files/Images/bgs/bg'+num+'_2.jpg)';
	$('body').css('background-image', 'url(Files/Images/bgs/bg'+num+'.jpg)');
};
// использование Math.round() даст неравномерное распределение!
function getRandomInt(min, max)
{
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
function show(){
	var myDiv = document.getElementById('Global_News_block');
	myDiv.innerHTML = "Привет всем!";
}
$("window").load(function() {
  $("body").removeClass("preload");
});


function hideverything(andtitle){
arr = ['Windows', 'Office', 'OfficeOnline', 'WP', 'WinRT', 'Outlook', 'OneDrive']
/*alert(arr[0]);
alert(arr[1]);*/
var a = undefined;
for (i = 0; i < arr.length; i++) {
a = document.getElementById(arr[i]);
	a.style.display = 'none';
}
document.getElementById('opros').style.display='none';
document.getElementById('gototest').style.display='none';
};
function viewtest(){
hideverything();
document.getElementById('opros').style.display='block';
};
function hidetitle() {
	document.getElementById('Global_News_block').style.display = 'none';

};
function showmaterial(obj){
	hideverything();
	hidetitle();
	document.getElementById('gototest').style.display='none';
	document.getElementById(obj.id).style.display="block";
	var find_zero = false;

	for (i = 0; i < arr.length; i++) {
		if (document.getElementById(arr[i]) == document.getElementById(obj.id)) {arr_c[i] = 1; break;}
	}
	//Дебаг
	/*for (i = 0; i < arr.length; i++) {
		arr_c_2[i] = arr_c[i]+'';
	}
	alert(arr_c_2[0]+'\n'+arr_c_2[1]+'\n'+arr_c_2[2]+'\n'+arr_c_2[3]+'\n'+arr_c_2[4]+'\n'+arr_c_2[5]+'\n'+arr_c_2[6]+'\n');*/

	for (i = 0; i < arr_c.length; i++) {
		if (arr_c[i] == 0) {find_zero = true; document.getElementById('gototest').style.display='none'; break}
	}

	if (find_zero == false) document.getElementById('gototest').style.display='block';
	
};

function Finishtest(){
	/*
	if (document.getElementById('q1a2').style.checked='1') alert('gg');
	if (document.getElementById('q2a1').style.checked='true') alert('gg');
	if (document.getElementById('q3a2').style.checked='true') alert('gg');
	if (document.getElementById('q4a2').style.checked='true') alert('gg');
	if (document.getElementById('q5a2').style.checked='true') alert('gg');
	if (document.getElementById('q6a2').style.checked='true') alert('gg');
	if (document.getElementById('q7a3').style.checked='true') alert('gg');
	if (document.getElementById('q8a4').style.checked='true') alert('gg');
	if (document.getElementById('q9a1').style.checked='true') alert('gg');
	if (document.getElementById('q10a1').style.checked='true') alert('gg');
	*/
	var t=0,y=0; //t - правильных, y - не очень

	for (var d = 1; d < 11; d++){
		var x='question'+d; //формируем строку question1,question2...
		var z = document.getElementsByName(x); //получил по имени? теперь новый цикл, внутри имени
		for (var i = 0; i < z.length; i++) { //начинаем с нуля
		    if  (z[i].checked == true && z[i].value == 1) { //если это дерьмо чекнуто и в нём есть значение "1", то дуй дальше!
		      t++; break; //правильно? Всё, валим.
		    } else {
		    }
		}
	}
	alert((t)+'/10 правильных');
}

$(document).ready(function(){
  var mySettings = {
		key : true,
		dropBlock : $('.drop'),
		virtualSelect : $('.select_2 span')
	}
	
	mySettings.virtualSelect.click(function(){
		if( mySettings.dropBlock.is(':hidden') ) {
			mySettings.dropBlock.slideDown(150);
			$(this).addClass('active');
		} 
		else {
			mySettings.dropBlock.slideUp(150);
			$(this).delay(400).queue(function(nextJ){
				$(this).removeClass("active");
				nextJ();
		    });
		}
		return false;
	});	
	mySettings.dropBlock.find('li').click(function(){
		var selectResult = $(this).html();
		$(this).parent().parent().find('input').val(selectResult);
		mySettings.dropBlock.slideUp(150);				
		mySettings.virtualSelect.delay(400).queue(function(nextJs){
			$(this).removeClass("active");
			nextJs();
		}).html(selectResult);
		return false;
	});	
	$(document).click(function(event) {
    	if(mySettings.key && !$(event.target).closest(mySettings.dropBlock).length){
	    	mySettings.dropBlock.slideUp(150);
	    	mySettings.virtualSelect.delay(400).queue(function(nextJs){
				$(this).removeClass("active");
				nextJs();
			});
	        mySettings.key = true; 
	        return;
		}	
	});
});

/*
$('#textbg').blurjs({
	source: 'body',			//Background to blur
	radius: 5,			//Blur Radius
	overlay: '',			//Overlay Color, follow CSS3's rgba() syntax
	offset: {			//Pixel offset of background-position
		x: 0,
		y: 0
	},
	optClass: '',			//Class to add to all affected elements
	cache: false,			//If set to true, blurred image will be cached and used in the future. If image is in cache already, it will be used.
	cacheKeyPrefix: 'blurjs-',	//Prefix to the keyname in the localStorage object
	draggable: false		//Only used if jQuery UI is present. Will change background-position to fixed
});
*/



$('#footerightswitch').click(function() {
    display = $("#footeright").css('display');
    if (display == 'none') {
        $("#footeright").show();
    }
});

$(document).ready(function() {
    stylesheetToggle();
    $(window).resize(stylesheetToggle);
});
function stylesheetToggle() {
    if ($('body').width() < 900) {
   $('.menu').display = 'none';
}
};

$(document).ready(function(){
   $('.container').append('<br/>Этот текст добавлен с помощью jQuery');
});