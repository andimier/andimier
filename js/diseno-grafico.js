
	
	function cargaImagenes(imagen, logoproy){
		
		var img = new Image();
		img.src = imagen;
		
		img.onload = function(){
			$(logoproy).animate({opacity:1}, 2000);
		}
	}
	
	var fila1 = document.getElementsByClassName('fila1');

	
	for(p=0; p<proyectos.length; p++){
		
		var cuadro = document.createElement('DIV');
		cuadro.className = 'cuadro1';

		var logoproy = document.createElement('DIV');
		logoproy.className = 'logopry';
		logoproy.style.opacity = 0;
		
		var divtexto = document.createElement('DIV');
		divtexto.className = 'txt-proy';
		
		var h1 = document.createElement('H1');
		h1.innerHTML = proyectos[p]['h1-'+idioma];
		
		var h2 = document.createElement('H2');
		h2.innerHTML = proyectos[p]['h2-'+idioma];
		
		var enlaceproy = document.createElement('A');
		enlaceproy.href = proyectos[p]['enlace-'+idioma];
		
		
		var imgproy = document.createElement('IMG');
		imgproy.src = proyectos[p]['imagen'];
		imgproy.alt = proyectos[p]['alt-'+idioma];
		
		
		divtexto.appendChild(h1);
		divtexto.appendChild(h2);
		
		enlaceproy.appendChild(imgproy);
		cargaImagenes(proyectos[p]['imagen'], logoproy);
		
		logoproy.appendChild(enlaceproy);
		cuadro.appendChild(logoproy);
		cuadro.appendChild(divtexto);
		fila1[0].appendChild(cuadro);
		
	}
	
	
	
	function InicioDiseno(){
		
		ancho = cuadro[0].offsetWidth;
		console.log(ancho)
		
		for(i = 0; i < cuadro.length; i++){
			
			cuadro[i].style.height = (ancho + (txt_proy[0].clientHeight-20)) + 'px';
		}

	}
	
	
	var cuadro = document.getElementsByClassName('cuadro1');
	var txt_proy = document.getElementsByClassName('txt-proy');
	var anchoreferencia = cuadro[0].offsetWidth;
	var ancho;
	
	
	window.addEventListener('resize', function(){
		InicioDiseno();
	},false)


	
	
	
	InicioDiseno();