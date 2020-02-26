		
		
	//var logo = document.getElementById('logo2');
	//
	//logo.style.backgroundImage = imgLogo;
	//logo.style.cursor = 'pointer';
    //
	//logo.addEventListener('click', function(){
	//	window.location.href = './';
	//});
	//
	//
	//logo.addEventListener('mouseover', function(){
	//	$(this).stop().animate({opacity:.8});
	//});
	//
	//logo.addEventListener('mouseout', function(){
	//	$(this).stop().animate({opacity:.5});
	//});
	//
	//
	//// CAMBIO COLOR TITULO PRINCIPAL X SECCION
	//
	//var titulo = document.querySelector('.ttprincipal h1');
	//
	//if (titulo){
	//	titulo.style.color = colortitulo;
	//}
	
	var idiomas_cnt = document.getElementById("idiomas-cnt");
	var idiomas = document.getElementsByName("idioma");
	
	idiomas[0].setAttribute("href", lkidiomas[1]);
	idiomas[1].setAttribute("href", lkidiomas[0]);
	