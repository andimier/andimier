	
	
	function ajustarBanner(){
		
		wFoto = imgilust.naturalWidth;
		
		if(window.innerWidth > wFoto){
			imgbanner.style.width = window.innerWidth + 'px';
		}else if(window.innerWidth > 500 && wFoto >= window.innerWidth){
			imgbanner.style.width = imgilust.naturalWidth + 'px';
		}else{
			imgbanner.style.width = window.innerWidth + 600 + 'px';
		}
		
		imgbanner.style.marginLeft = -(imgbanner.offsetWidth - window.innerWidth) / 2 + 'px';
	}

	var imgbanner = document.getElementById("img-banner");
	var imgilust = document.getElementById("img-ilust");
	
	var imagenbanner = new Image();
	imagenbanner.src = imgilust.src;
	
	imagenbanner.onload = function(){
		$(imgbanner).stop().animate({opacity:1}, 1500);
		ajustarBanner();
	}
	//if(imgilust.complete == true){
	//	$(imgbanner).stop().animate({opacity:1}, 1500);
	//};
	
	
	

	window.addEventListener('resize', function(){
		ajustarBanner();
	});