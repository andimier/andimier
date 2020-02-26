	
	
	var sobre = document.getElementById('sobre');
	var contacto = document.getElementById('contacto');
	
	sobre.addEventListener('mouseover', function(){
		//contacto.style.display = 'block';
		$('#contacto').stop().animate({opacity:1});
	});
	
	sobre.addEventListener('mouseout', function(){
		$('#contacto').stop().animate({opacity:0});
		//contacto.style.display = 'none';
	});
	
	sobre.addEventListener('click', function(){
		window.location.href = 'contacto.php'
	});
	
	
	