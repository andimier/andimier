	
	
	function dimContenedor(){
		
		// ALTURA DEL CONTENEDOR DE LAS TARJETAS
		if(window.innerWidth > 900 ){
			contenedor.style.width = window.innerWidth - 120 + 'px';
		}else{
			contenedor.style.width = window.innerWidth - 50 + 'px';
		}
		
		contenedor.style.height ='auto';
	}
	
	
	function dimTarjetas(){
		
		// DIMENSIONAR LAS TARJETAS
		if(window.innerWidth > 900 ){
			dimension = (contenedor.offsetWidth / 3);
		}else if(window.innerWidth < 901 && window.innerWidth > 500){
			dimension = (contenedor.offsetWidth / 2);
		}else{
			dimension = contenedor.offsetWidth;
		}
		
		for(a = 0; a < tarjetas.length; a++){
			tarjetas[a].style.width = dimension + 'px';
			tarjetas[a].style.height = tarjetas[0].offsetWidth / ratio + 'px';
		}
	}
	
	
	function AjustarInicio () {
		
		dimContenedor();
		
		dimTarjetas();

	
		for(a = 0; a < tarjetas.length; a++){
			tarjetas[a].style.height = tarjetas[0].offsetWidth / ratio + 'px';
		}
		
		// PONER MARGEN A CON CONTENIDOS
		for(i = 0; i < cnt_tarjeta.length; i++){
			cnt_tarjeta[i].style.marginTop = margen + 'px';
		}

	}
	
	
	
	
	
	
	
	
	
	
	var contenedor = document.getElementById('cnt-tarjetas');
	var tarjetas = document.getElementsByClassName('tarjetas');
	var cnt_tarjeta = document.getElementsByClassName('cont-tarjeta');
	
	var ratio = 1280/720;

	var dimension;
	dimContenedor();
	dimTarjetas();
	
	

	
	console.log(contenedor.offsetWidth);
	console.log(dimension);
	

	
	// SACAR EL MARGEN ENTRE TARJETA Y CONTENIDO
	var margen = (tarjetas[0].offsetHeight - cnt_tarjeta[0].offsetHeight) / 2;
	
	// PONER MARGEN A CON CONTENIDOS
	for(i = 0; i < cnt_tarjeta.length; i++){
		cnt_tarjeta[i].style.marginTop = margen + 'px';
		
	}
	
	

	
	
	var img_tarjetas = document.getElementsByClassName('img-tarjetas');
	var t_imagen = document.getElementsByClassName('t-imagen');
	var rep = document.getElementById("rep");
	//console.log(t_imagen.length)



	// ==============================
	var carga = 0;

	
	// ENCONTRAR EL INDEX DEL NUMERO MÁS ALTO (LA IMAGEN MÁS PESADA)
	// PARA LUEGO DE QUE ESTA CARGUE, PONERLE EL SRC AL VIDEO
	// ESTÁ EN EL IF DE LA CARGA DE LAS IMAGENES
	
	function elNumMayor(arraynumeros){
		
		var counter = 1;
		var indexNumMasAlto = 0;

		for(counter; counter < arraynumeros.length; counter++){
			
			//console.log('counter = '+counter)
			//console.log('indexNumMasAlto = '+ arraynumeros[indexNumMasAlto] + ' - ' +arraynumeros[counter])
			
			if(arraynumeros[indexNumMasAlto] < arraynumeros[counter]){
				indexNumMasAlto = counter; 
				//console.log('si')
			}
		}

		return indexNumMasAlto;
	}

	
	// PESOS ARRAY VIENE DE INDEX.PHP
	var elIndesxMayor = elNumMayor(pesosarray);
	//console.log('el mayor =' +elIndesxMayor);
	//console.log(nuevoarray[elIndesxMayor].imagen)

	var cuentaarr = 0;
	
	for(i=0; i<nuevoarray.length; i++){
		
		var pantalla = document.createElement("div");
		pantalla.className = "pantalla";
		pantalla.style.position = "absolute";
		pantalla.style.width = "100%"; 
		pantalla.style.height = "100%"; 
		pantalla.style.top = 0; 
		pantalla.style.left = 0; 
		pantalla.style.backgroundColor = "black";
		pantalla.style.opacity = 0; 
		pantalla.setAttribute("img-over", nuevoarray[i].imagenover);
		pantalla.setAttribute("img-out", nuevoarray[i].imagen);
		pantalla.setAttribute("h-ref", nuevoarray[i].href);
		
		// IMAGEN
		var img = document.createElement("img");
		img.className = "t-thumb";
		img.src = nuevoarray[i].imagen;
		img.style.opacity = 0;
		img.setAttribute('alt', nuevoarray[i].alt);
		
		
		// ENLACE
		var a = document.createElement('a');
		a.href = nuevoarray[i].href;
		
		// DIV CONTENEDOR DE LOS TEXTOS
		var texto = document.createElement("div");
		texto.className = "t-textos";
		texto.style.position = 'absolute';
		texto.style.width = '95%';
		texto.style.top = 0;
		texto.style.left = 0;
		texto.style.padding = '0 2.5% 0 2.5%';
		texto.style.textAlign = 'center';
		//texto.style.backgroundColor = 'red';
		
		// TITULO 
		var titulo  = document.createTextNode(nuevoarray[i].titulo);
		var parrafo = document.createTextNode(nuevoarray[i].parrafo);
		var h = document.createElement('H1');
		//h.style.backgroundColor = 'blue';
		var p = document.createElement('p');
		//p.style.backgroundColor = 'red';
		
		p.appendChild(parrafo);
		h.appendChild(titulo);
		
		texto.appendChild(h);
		texto.appendChild(p);
		
		t_imagen[i].appendChild(texto);
		
		
		texto.style.top = (cnt_tarjeta[i].offsetHeight - texto.offsetHeight)/2 + 'px';


		t_imagen[i].appendChild(img)
		t_imagen[i].appendChild(pantalla);
		
		
		// ESTE ES EL A (ENLACE) DE LAS TARJETAS -> cnt_tarjeta[i].parentNode.parentNode
		//console.log(t_imagen[i].parentNode.parentNode);
		t_imagen[i].href = nuevoarray[i].href;
		
		
		//if(nuevoarray[i].imagenover !== ''){
		//	t_imagen[i].parentNode.parentNode
		//}
	
		t_imagen[i].style.backgroundColor = nuevoarray[i].colorfondo;
		t_imagen[i].style.color = nuevoarray[i].colorletra;
		
		
		
		img.addEventListener('load', function(){
			
			
			if(this.height > cnt_tarjeta[0].offsetHeight){
				
				var ratio1 = cnt_tarjeta[0].offsetHeight / this.height;

				var ancho = this.width;
				var alto  = this.height;

				this.height = alto * ratio1;
				this.width  = ancho * ratio1;
			}
			
			if( this.width > cnt_tarjeta[0].offsetWidth){
				var ratio2 = cnt_tarjeta[0].offsetWidth / this.width;
				
				var ancho = this.width;
				var alto  = this.height;
				
				this.height = alto * ratio2;
				this.width  = ancho * ratio2;
			}
			
			// UBICAR LA IMAGEN EN EL CENTRO
			this.style.marginLeft = (cnt_tarjeta[0].offsetWidth - this.width)/2 + 'px';
			this.style.marginTo = (cnt_tarjeta[0].offsetHeight - this.height)/2 + 'px';
			
			carga++;
			
			$(this).animate({opacity:1}, 1500, function(){
				// VER CUAL ES LA IMAGEN MÁS PESADA
				// SI CARGÓ, ADJUNTAR EL SRC AL VIDEO
				//if( i == t_imagen.length && this.src == 'http://localhost/trazo/'+nuevoarray[elIndesxMayor].imagen && this.complete == true){
				if( i == t_imagen.length && this.src == 'http://trazo.com.co/'+nuevoarray[elIndesxMayor].imagen && this.complete == true){
					rep.setAttribute('src', 'https://player.vimeo.com/video/95900092');

				}else{
					//alert('nada')
				}
			});

		});
		
	}
	
	
	
	
	var ratios = [];
	
	var cuenta = 0;

	window.addEventListener('resize', AjustarInicio, false);
	
	
	var enlace = document.getElementsByClassName('enlace');
		
		
		
	
	window.onload = function(){
		
		var thumb  = document.getElementsByClassName('t-thumb');
		var textos = document.getElementsByClassName('t-textos');
		var pantalla = document.getElementsByClassName('pantalla');
		
		
	
		for(z=0; z<thumb.length; z++){
		
			if(thumb[z].width !== 0 && thumb[z].height > 50){
				// INSERTAR EN ARRAY LOS RATIOS DEPENDIENDO DEL TAMAÑO DE CADA IMAGEN
				// SOLO SI EXISTE LA IMAGEN PARA AJUSTAR EL TAMAÑO EN RISIZE
				ratios[cuenta] = {'r1': cnt_tarjeta[0].offsetWidth / thumb[z].width, 'r2':thumb[z].width / thumb[z].height, 'posicion': z};
				cuenta++;
				
			}
			
			
			function abrirSeccion(){
				var enlace = this.getAttribute("h-ref")
				location.href = enlace;
			}
			
			// OVER DE LAS IMÁGENES
			function subirImagenes(){
				
				console.log(event);
				var imgover = this.getAttribute("img-over");
				
				if(this.previousElementSibling.className == "t-thumb" && imgover !== ''){
	
					var activo = this;
					var imagenout  = this.getAttribute("img-out");
					var imagenover = this.getAttribute("img-over");
					
					var hijo = this.previousElementSibling;
					
					$(hijo).stop().animate({marginTop:'-15px'},100, function(){
						// CAMBIO DE IMAGEN
						hijo.src = imgover;
		
					});
					
				}
			}
	
		
			// OVER DE LAS IMÁGENES
			function bajarImagenes(){
				
				var imgover = this.getAttribute("img-over");
				
				if(this.previousElementSibling.className == "t-thumb" && imgover !== ''){
					
					var activo = this;
					var imagenout = activo.getAttribute("img-out");
					var imagenover = activo.getAttribute("img-over");
					
					var hijo = this.previousElementSibling;
					
					$(hijo).stop().animate({marginTop:'0px'},100, function(){
						// CAMBIO DE LA IMAGEN
						hijo.src = imagenout;

					});
				}

			}
		
			pantalla[z].addEventListener('mouseover', subirImagenes, false);
			pantalla[z].addEventListener('mouseout', bajarImagenes, false);
			pantalla[z].addEventListener('click', abrirSeccion, false);
			
			
			

		}
		
	
		
		ajustarTextos(textos);
		
		
		// WINDOW RESIZE
		window.onresize = function(){
			
			// DIMENSIONAR Y UBICAR LAS IMÁGENES
			cuenta = 0;
			
			for(y=0; y<thumb.length; y++){
			
				if(thumb[y].width !== 0 && thumb[y].height > 50){
					
					// RECORRER EL ARRAY DE RATIOS Y CAMBIAR EL TAMAÑO DE LA IMAGEN
					thumb[y].width  = cnt_tarjeta[0].offsetWidth  / ratios[cuenta].r1;
					thumb[y].height = thumb[y].width  / ratios[cuenta].r2;
					cuenta++;
					
					// UBICAR LA IMAGEN EN EL CENTRO
					thumb[y].style.marginLeft = (cnt_tarjeta[0].offsetWidth  - thumb[y].width)/2 + 'px';
					thumb[y].style.marginTop  = (cnt_tarjeta[0].offsetHeight - thumb[y].height)/2 + 'px';
				
				}

			}
			
			
			ajustarTextos(textos);

		}

	}
	
	
	function ajustarTextos(textos){
		
		for(t=0; t<textos.length; t++){
			var ventana = window.innerWidth ;
			// UBICAR TEXTOS EN LA MITAD
			textos[t].style.top  = (cnt_tarjeta[0].offsetHeight - textos[t].offsetHeight)/2 + 'px';
			textos[t].style.left  = (cnt_tarjeta[0].offsetWidth - textos[t].offsetWidth)/2 + 'px';
			
			if(ventana > 1000 ){
				textos[t].childNodes[0].style.fontSize = '30px';
				textos[t].childNodes[1].style.fontSize = '20px';
			}else if(ventana < 1001 && ventana > 900){
				textos[t].childNodes[0].style.fontSize = '25px';
				textos[t].childNodes[1].style.fontSize = '15px';
			}else if(ventana < 901 && ventana > 700){
				textos[t].childNodes[0].style.fontSize = '35px';
				textos[t].childNodes[1].style.fontSize = '20px';
			}else if(ventana < 701 && ventana > 500){
				textos[t].childNodes[0].style.fontSize = '20px';
				textos[t].childNodes[1].style.fontSize = '15px';
			}else{
				textos[t].childNodes[0].style.fontSize = '35px';
				textos[t].childNodes[1].style.fontSize = '20px';
			}
			

		}
		
		
		
	}
	
	
		// OVER DE LAS IMÁGENES
		function subirImagenes(){
	
			console.log('adentro')
		}
		
		function bajaImagenes(){}