	
	function dimCol(){
		
		console.log('ancho ventana = '+window.innerWidth)
		console.log('ancho = '+nuevos_cnt.offsetWidth)
		
		if(window.innerWidth >= 1200){
			nuevos_cnt.style.width = '960px';
		}else if(window.innerWidth < 1200 && window.innerWidth > 799){
			nuevos_cnt.style.width = (window.innerWidth - 200) + 'px';
		}else{
			nuevos_cnt.style.width = (window.innerWidth - 50) + 'px';
		}
		
		
	}
	
	function dimensionesColumnas(){
		
		dimCol();

		var h = n_col1.offsetHeight ;
		nuevos_cnt.style.height  = h + 'px';
		n_separador.style.height = h + 'px';
		
		var dimcol = nuevos_cnt.offsetWidth / 2 ;
		console.log(Math.floor(dimcol))
		
		n_col1.style.width = (Math.floor(dimcol)-0.5)+ 'px';
		n_col2.style.width = (Math.floor(dimcol)-0.5)+ 'px';
		
		for(i=0;i<c_txt.length;i++){
			//c_linea[i].style.height = c_txt[i].offsetHeight + 'px';
		}

	}

	

	
	var nuevos_cnt = document.getElementById("nuevos-cnt");

	var n_col1 = document.getElementById("nuevos-col1")
	var n_col2 = document.getElementById("nuevos-col2")
	var n_separador = document.getElementById("nuevos-separador");
	
	
	var c_contenido = document.getElementsByClassName("contenido-cnt");
	var c_txt = document.getElementsByClassName("contenido-txt");
	var c_linea = document.getElementsByClassName("contenido-linea");
	
	window.onload = function(){
		
		
		dimensionesColumnas();
		
		for(i=0;i<c_contenido.length;i++){
			c_contenido[i].addEventListener("click",function(){
				window.location.href = this.getAttribute("enlace");
			});
			
			
			//c_contenido[i].addEventListener("mouseover",function(){
			//	//$(this+ " h1").css("color","red"); 
			//	//$(this).css("color","red"); 
			//	this.querySelector("H1").style.color = "red";
			//	console.dir(this);
			//});
		
		}
		
		$(nuevos_cnt).animate({opacity:1},"slow")
	}
	
	
	window.addEventListener("resize",function(){
		dimensionesColumnas();
	});
	