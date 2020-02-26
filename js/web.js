	var contenedor1 = document.getElementsByClassName('contenedor1');
	var cnt = contenedor1[0];
	
	
	for(p=0; p<sitiosarr.length; p++){
		
		var cntproyecto = document.createElement('DIV');
		cntproyecto.className ='cntproyecto';
		
		
		////
		var ico_proyecto = document.createElement('DIV');
		ico_proyecto.className = 'ico_proyecto';
		
		var imagen = document.createElement('IMG');
		imagen.src = sitiosarr[p].imagen;
		imagen.setAttribute('alt', sitiosarr[p].alt_es);
		
		
		
		////
		var txt_proyecto = document.createElement('DIV');
		txt_proyecto.className = 'txt_proyecto';
		
		var huno = document.createElement('H1');
		huno.innerHTML = sitiosarr[p].cliente;
		
		
		////
		
		var enlace = document.createElement('A');
		enlace.href = sitiosarr[p].enlace;
		enlace.target = '_blank';
		enlace.innerHTML = sitiosarr[p].web;
		
		var hdos = document.createElement('H2');
		
		
		hdos.appendChild(enlace);
		
		txt_proyecto.appendChild(huno);
		txt_proyecto.appendChild(hdos);
		
		ico_proyecto.appendChild(imagen)
		
		cntproyecto.appendChild(ico_proyecto);
		cntproyecto.appendChild(txt_proyecto);
		
		cnt.appendChild(cntproyecto);
	}

	
	
	
	var cntproyecto = document.getElementsByClassName('cntproyecto');
	var ico = document.getElementsByClassName('ico_proyecto');


	
	window.addEventListener('resize', function(){
		IniciarWeb();
	});

	function IniciarWeb(){
		
		if(window.innerWidth > 799){
			for(i=0; i<ico.length; i++){
				cntproyecto[i].style.height = ico[0].offsetWidth + 'px';
				ico[i].style.height = ico[i].offsetWidth + 'px';
			}
		}else{
			for(i=0; i<ico.length; i++){
				cntproyecto[i].style.height = 'auto';
				ico[i].style.height = 'auto';
			}
		}
		
	}

	IniciarWeb();
