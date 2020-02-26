	
	
	var menuarr = [
		{
			"titulo-es":'¿qué es andimier? | servicios', 
			"titulo-en": "what's andimier | services",
			"link-es":'quienes-somos', 
			"link-en":'us', 
			fondo:'#666',
			color: '#ffffff'
		},
		{
			"titulo-es":'diseño gráfico', 
			"titulo-en":'graphic design', 
			"link-es":'diseno-grafico', 
			"link-en":'graphic-design', 
			fondo:'#a8dce4',
			color: '#ffffff'
		},
			{
			"titulo-es":'video & motion graphics',     
			"titulo-en":'video & motion graphics',     
			"link-es":'video-y-motion-graphics',      			 
			"link-en":'video-and-motion-graphics',      			 
			fondo:'#fc4b4b', 
			color: '#eeeeee'
		},	
		{
			"titulo-es":'web',            
			"titulo-en":'web',            
			"link-es":'sitios-web',  			 
			"link-en":'websites',  			 
			fondo:'#eeeeee',
			color: '#ff0000'
		},
			
		{
			"titulo-es":'dibujo',         
			"titulo-en":'drawings',         
			"link-es":'dibujo',         			 
			"link-en":'drawings',         			 
			fondo:'#999',        
			color: '#fff'
		}
		
		
	];
	
	
	var menu = document.getElementById('menu-inicio');
	//
	
	
	for(i=0; i<menuarr.length; i++){
	
		var area = document.createElement('div');
		area.className = 'areas';
		
		var h1 = document.createElement('H2');
		var txtenlace = document.createTextNode(menuarr[i]['titulo-'+idioma]);
		
		h1.appendChild(txtenlace);
		area.appendChild(h1);
		menu.appendChild(area);

	}
	
	var areas = document.getElementsByClassName('areas');
	
	for(a=0; a<areas.length; a++){
		
		areas[a].addEventListener('click', function(){
			
			var index = $(this).index();
			window.location.href = menuarr[index]['link-'+idioma];

		});
		
		areas[a].addEventListener('mouseover', function(){
			
			var index = $(this).index();
			this.style.backgroundColor = menuarr[index].fondo;
			this.children[0].style.color = menuarr[index].color;
			
		});
		
		areas[a].addEventListener('mouseout', function(){
			
			this.style.backgroundColor = '';
			this.children[0].style.color = '#868482';
			
		});
	}
			