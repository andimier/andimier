		
		function ajustarElememtosDiseno(ancho,alto){
			
			if(imagen[i].naturalHeight > imagen[i].naturalWidth){

				if(window.innerWidth > 499){
					img_proyectos[i].style.height = '90%';
				}else{
					img_proyectos[i].style.height = '65%';
				}
			
				var ratio = ancho / alto;
				
				img_proyectos[i].style.width = img_proyectos[i].offsetHeight * ratio + 'px';
				imagen[i].style.width = '100%';
				

			}else if(imagen[i].naturalWidth > imagen[i].naturalHeight){
				
				if(window.innerWidth > 799){
					img_proyectos[i].style.width = '80%';
				}else if(window.innerWidth < 800 && window.innerWidth > 499){
					img_proyectos[i].style.width = '80%';
				}else{
					img_proyectos[i].style.width = '90%';
				}
				img_proyectos[i].style.height = 'auto';
				imagen[i].style.width = '100%';
			
			
			}else if(imagen[i].naturalHeight == imagen[i].naturalWidth){
				
				if(window.innerWidth > 799){
					img_proyectos[i].style.width = '40%';
				}else if(window.innerWidth < 800 && window.innerWidth > 499){
					img_proyectos[i].style.width = '60%';
				}else{
					img_proyectos[i].style.width = '80%';
				}
				
				img_proyectos[i].style.height = 'auto';
				imagen[i].style.width = '100%';
			}
			
			
			img_proyectos[i].style.marginTop =  -img_proyectos[i].offsetHeight/2 + 'px';
			img_proyectos[i].style.marginLeft = -img_proyectos[i].offsetWidth/2 + 'px';
			
		}
		
		
		function iniciarProyectos(){
			
			for(o=0; o < cnt_proyectos.length; o++){
				cnt_proyectos[o].style.height = window.innerHeight + 'px';
			}
			
			if(window.innerWidth > 499){
				txt_proyectos[0].style.marginTop =-(txt_proyectos[0].offsetHeight + 30)+ 'px';
			}else{
				txt_proyectos[0].style.marginTop =-(txt_proyectos[0].offsetHeight + 10)+ 'px';
			}
			

		}
		
		
		
		
		function ponerColor(elemento,color){
			for(i = 0; i< elemento.length; i++){
				elemento[i].style.color = color;
			}
		}
		
		
		
		function funcionesLogo(){
			
			var logo_proyectos = document.getElementById('logo_proyectos');
		
			logo_proyectos.addEventListener('click', function(){
				window.location.href = './';
			});
			
			logo_proyectos.addEventListener('mouseover', function(){
				$(this).stop().animate({opacity:.7});
			});
			
			logo_proyectos.addEventListener('mouseout', function(){
				$(this).stop().animate({opacity:.3});
			});
		}
		
		document.body.style.backgroundColor = color_fondo;
		
		var h1 = document.getElementsByTagName('h1');
		var h2 = document.getElementsByTagName('h2');
		var parrafo = document.getElementsByTagName('p');
		
		ponerColor(h1, color_h1);
		ponerColor(h2, color_h2);
		ponerColor(parrafo, color_p);
		
		funcionesLogo();
		

	
		var cnt_proyectos = document.getElementsByClassName('cnt_proyectos');
		var img_proyectos = document.getElementsByClassName('img_proyectos');
		var txt_proyectos = document.getElementsByClassName('txt_proyectos');
		var imagen = document.getElementsByClassName('imagen');

		
		window.addEventListener('load', function(){

			for(i = 0; i < img_proyectos.length; i++){
				
				var x = imagen[i].complete;
				img_proyectos[i].firstChild.innerHTML = x;
				
				if(x == true){
					
					$(img_proyectos[i]).animate({opacity:1}, 1500, function(){
						
					});
					
					var ancho = imagen[i].naturalWidth;
					var alto =  imagen[i].naturalHeight;
					
					ajustarElememtosDiseno(ancho,alto);
				}
			}
		});
		

		
		window.addEventListener('resize', function(){
			
			iniciarProyectos();

			for(i = 0; i < img_proyectos.length; i++){

				var ancho = imagen[i].naturalWidth;
				var alto =  imagen[i].naturalHeight;

				ajustarElememtosDiseno(ancho, alto);

			}
		});
		
		iniciarProyectos();
		
