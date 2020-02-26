
	
		
		var menuarr = [
			{
				'titulo-es':'inicio', 
				'titulo-en':'home', 
				'link-es':'./',
				'link-en':'./en',
				colorp:'#eee',
				'clase-mv': 'f-inicio'
			},
			{
				'titulo-es':'quienes somos', 
				'titulo-en':'us', 
				'link-es':'quienes-somos',
				'link-en':'us',
				colorp:'#eee',
				'clase-mv': 'f-quienes'
			},
			{
				'titulo-es':'diseño gráfico', 
				'titulo-en':'graphic design', 
				'link-es':'diseno-grafico',
				'link-en':'graphic-design',
				colorp:'#fff',
				'clase-mv': 'f-grafico'
			},
			
			{
				'titulo-es':'video &amp; motion graphics', 
				'titulo-en':'video &amp; motion graphics', 
				'link-es':'video-y-motion-graphics',
				'link-en':'video-and-motion-graphics',
				colorp:'#eee',
				'clase-mv': 'f-video'
			},
			{
				'titulo-es':'web', 
				'titulo-en':'web', 
				'link-es':'sitios-web',
				'link-en':'websites',
				colorp:'#999',
				'clase-mv': 'f-web'
			}, 
			{
				'titulo-es':'dibujo', 
				'titulo-en':'drawings', 
				'link-es':'dibujo',
				'link-en':'drawings',
				colorp:'#ccc',
				'clase-mv': 'f-dibujo'
			},
			/*{
				'titulo-es':'blog', 
				'titulo-en':'blog', 
				'link-es':'articulos',
				'link-en':'blog',
				colorp:'#ccc',
				'clase-mv': 'f-blog'
			},*/
			
			{
				'titulo-es':'contacto', 
				'titulo-en':'contact', 
				'link-es':'contacto',
				'link-en':'contact',
				colorp:'#999',
				'clase-mv': 'f-contacto'
			}
			
		];
		
		
		var elitem;
		
		var items = [
			{fodo:'claro',  item:'url("imagenes/item3.png")'},
			{fodo:'medio',  item:'url("imagenes/item.png")'},
			{fodo:'oscuro', item:'url("imagenes/item3.png")'}
		];
		
		if(tonodefondo == 'claro'){
			elitem = items[0].item;
		}else if(tonodefondo == 'medio'){
			elitem = items[1].item;
		}else{
			elitem = items[2].item;
		}
		
	
		var item = document.getElementsByClassName('mitem');
		var dp = document.getElementById('dp');
		var cntitems = document.getElementById('cntitems');
		
		
		for(b=0; b<menuarr.length; b++){
		
			var boton = document.createElement('div');
			boton.className = 'mitem';
			cntitems.appendChild(boton);
		}
		
		
		var arr = [];
		
		for(m=0; m<item.length; m++){
			

			item[m].addEventListener('mouseover', function(){

				var index = $(this).index();
				dp.innerHTML = menuarr[index]['titulo-'+idioma];
				
				var rect = this.getBoundingClientRect();
				//console.log(rect.top, rect.right, rect.bottom, rect.left);
				
				dp.style.top = rect.top + 'px';
	
			});

			item[m].addEventListener('click', function(){
				var index = $(this).index();
				window.location.href = menuarr[index]['link-'+idioma];
			});
			
			
			// SE CREA UN ARRAY CON LOS TITULOS PARA VERIFICAR 
			// SI EL TITULO DE LA SECCION ACTIVA ESTÁ EN ESTE ARRAY
			// Y ASIGNAR EL COLOR DEL TITULO DEL MENU SEGÚN VALOR EN ARRAY
			// ***
			arr.push(menuarr[m]['titulo-'+idioma]);
			
		}
		
		
		// ***
		var enarray = arr.indexOf(seccion);
		
		if(enarray !== -1){
			
			if (typeof seccion !== 'undefined'){
			
				for(s=0; s<menuarr.length; s++){
					
					if( seccion === menuarr[s]['titulo-'+idioma]){
        
						$('#menu p').css('color', menuarr[s].colorp);
						$('.mitem').each(function(){
							$(this).css({backgroundImage:elitem});
						});
						
					}
					
				}
			}
		}else{
			
			
			// VERIFICAR SI EL COLOR DE FONDO DE LA SECCION ES CLARO
			// PARA PONERLE GRIS OSCURO
			// DE LO CONTRARIO, PONER BLANCO A LA LETRA DEL MENU
			
			var coloresdefondo = ['255', '253', '204', '245'];
			var fondo = $('body').css('background-color');
			var exp = fondo.split(',');
			fondo = exp[1];
			exp = fondo.split(' ');
			fondo = exp[1];
			
			
			if(coloresdefondo.indexOf(fondo) !== -1){
				$('#menu p').css('color', 'grey');
			}else{
				$('#menu p').css('color', '#fff');
				
			}
			
			
			$('.mitem').each(function(){
				$(this).css({backgroundImage:elitem});
			});
		}
	    
		
		cambioItem();

		
		
		function cambioItem(){
			
			$('.mitem').hover(function(){
				$(this).css({backgroundImage:'url("imagenes/item2.png")'});
				$('#dp').stop().animate({opacity: 1});
			}, function(){
				$(this).css({backgroundImage:elitem});
				$('#dp').stop().animate({opacity: 0});
				console.log(elitem)
			}
			);

		}
		
		
		
		// MENU MV
		
		function crearMenuMv(){
			
			var listmenu = document.getElementById("list-menu-mv");
			
			for(i=0;i<menuarr.length;i++){
				
				var li = document.createElement("LI");
				li.className = menuarr[i]['clase-mv'];
				
				var a = document.createElement("A");
				a.href = menuarr[i]['link-'+idioma];
				a.innerHTML = menuarr[i]['titulo-'+idioma];
				
				li.appendChild(a);
				listmenu.appendChild(li);
			}
		}
		
		
		
		function verMenuMv(){
			
			var dispositivo = navigator.userAgent;
			var b = dispositivo.toLowerCase();
			
			for(i=0; i<navarr.length; i++){
				
				if( b.indexOf(navarr[i]) !== -1 ){
					//alert('Si está');
					//txt.innerHTML = navigator.userAgent + '<br>'+ 'SI ESTÁ = ' + navarr[i];
					//$('#cntitems').css('display','none');sdsa
		
					$('#menu').css('display','none');
					cntitems.style.display = 'none';
		
					$('#bt-menu-mv').css('display','block');
					
					break;

				}else if( b.indexOf(navarr[i]) === -1){
					$('#cntitems').css('display','block');
					$('#bt-menu-mv').css('display','none');
				}
				
			}
			
			var menuabierto = false;
			var botonmenumv = document.getElementById('bt-menu-mv');
			
			botonmenumv.addEventListener('click',  function(){
				$('#menu-mv').slideToggle('slow');
				
				if(menuabierto === false){
					$('#bt-menu-mv p').text('x');
					
					menuabierto = true;
				}else{
					$('#bt-menu-mv p').text('m');
					menuabierto = false;
				}
				
			})
			
		}
		
		
		$('#bt-menu-mv').css('display','block');
	
		var navarr = [ 
			'android',
			'iphone',
			'webos',
			'ipad', 
			'ipod',
			'blackberry', 
			'windows phone'
		];
		
		crearMenuMv();
		verMenuMv();
		
	
		
		