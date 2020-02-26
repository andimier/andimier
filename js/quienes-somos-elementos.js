	
	
	function crearElementos(clase_circulo, contenido){
	
		var h1 = document.createElement('H1');
		var p = document.createElement('P');
		
		var circulo = document.createElement('DIV');
		circulo.className = clase_circulo;
		
		h1.innerHTML = list_servicios[i]['titulo-'+idioma];
		p.innerHTML = list_servicios[i]['texto-'+idioma];

		
		contenido.appendChild(h1);
		contenido.appendChild(p);
		contenido.appendChild(circulo);
		
		
	}
	
	
	function crearContenido(salto){
		
		var contenido = document.createElement("DIV");

		if(salto==1){
			contenido.className = 'caja-texto lnr-white alignr pd-right';
			//contenido.setAttribute("enlace",list_servicios[i]['enlace-'+idioma]);
			crearElementos("circle1", contenido);
		}else{
			contenido.className = 'caja-texto pd-left';
			//contenido.setAttribute("enlace",list_servicios[i]['enlace-'+idioma]);
			crearElementos("circle2", contenido);
		}
		
		//contenidosElementos();
		
		return contenido;
	}
	
	
	function crearNodos(){
		

		for(i=0;i<list_servicios.length;i++){
			
			// SALTO PARA PONER LOS list_servicios ALTERNADOS EN CADA COLUMNA
			if(salto==3){
				salto = 1;
			}
			
			console.log("salto = " + salto);
			
			if(salto == 1){
				
				var caja = crearContenido(salto);

				texto[0].appendChild(caja);
				
			}else if(salto == 2){
	
				var caja = crearContenido(salto);

				texto[1].appendChild(caja);
				
			}
			salto++;
		}

	}
	
	
	var salto = 1;
	var texto = document.getElementsByClassName("textos");
	
	crearNodos();
	
	var info = document.getElementById("info");
	info.innerHTML = info_nosotros[0]['texto-'+idioma];
	
	/*
	<div class="textos">
	
		<div class="caja-texto pd-left">
			<h1>Diseño de marca</h1>
			<p>
				Logotipos, papelería (tarjetas, afiches, volantes, plegables), pop, branding, manual de marca.
			</p>
			<div class="circle2"></div>
		</div>
		
		 <div class="caja-texto pd-left">
			<h1>ILUSTRACIÓN DIGITAL Y A MANO ALZADA</h1>
			<p>
				Logotipos, ilustraciones editoriales, afiches, volantes, creación de personajes y elementos.
			</p>
			
			<div class="circle2"></div>
		</div>
		
		<div class="caja-texto pd-left">
			<h1>PRESENTACIONES INTERACTIVAS</h1>
			<p>
				Presentaciones, datos, procesos, manuales de uso, evaluaciones, inducciones y demás desarrollos hechos para interactuar con el ususario.
			</p>
			
			<div class="circle2"></div>
		</div>
		
	</div>
	
	*/