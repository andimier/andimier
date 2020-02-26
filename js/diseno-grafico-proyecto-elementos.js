
	function crearParametros(){
		
		for(i=0;i<proyectos.length;i++){

			if(proyectos[i]['cliente'] == cliente){
				parametros = proyectos[i]['parametros']
				break;
			}
		}
		
		return parametros;
		
	}

	function crearImagenes(imagenes_arr){
		
		for(i=0;i<imagenes_arr.length;i++){
			
			var cnt_proyectos  = document.createElement("DIV");
			cnt_proyectos.className = "cnt_proyectos";
			var img_proyectos = document.createElement("DIV");
			img_proyectos. className = "img_proyectos"
			var img = document.createElement("IMG");
			img.className = "imagen";
			
			img.src = imagenes_arr[i];
			img_proyectos.appendChild(img);
			cnt_proyectos.appendChild(img_proyectos);
			
			document.body.appendChild(cnt_proyectos);
		}
	}
	
	function crearNodos(){
		
		var txtproyectos = document.getElementsByClassName("txt_proyectos");
		var parametros;
		
		for(i=0;i<proyectos.length;i++){

			if(proyectos[i]['cliente'] == cliente){
				
				document.querySelector('title').innerHTML = cliente + ', ANDIMIER';
				document.getElementsByName('keywords')[0].setAttribute("content", proyectos[i]['keywords-'+idioma]);
				document.getElementsByName('description')[0].setAttribute("content", proyectos[i]['description-'+idioma]);
				
				txtproyectos[0].querySelector("H1").innerHTML = proyectos[i]['h1-'+idioma];
				txtproyectos[0].querySelector("H2").innerHTML = proyectos[i]['ano'];
				txtproyectos[0].querySelector("P").innerHTML  = proyectos[i]['h2-'+idioma];
				crearImagenes(proyectos[i]['imagenes']);
				parametros = proyectos[i]['parametros']
				break;
				
			}
		}
	
	}
	
	crearNodos();
	
	var parametros  = crearParametros();
	var color_fondo = parametros[0];
	var color_h1    = parametros[1];
	var color_h2    = parametros[2];
	var color_p     = parametros[3];
	var tonodefondo = parametros[4];
	
	
	var idiomas_cnt = document.getElementById("idiomas-cnt");
	var idiomas = document.getElementsByName("idioma");
	
	idiomas[0].setAttribute("href", proyectos[i]['enlace-en']);
	idiomas[1].setAttribute("href", proyectos[i]['enlace-es']);
	
