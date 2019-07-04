var menu= document.querySelector('#menu');

var menuItems=[
	{'item':'Dashboard', 'state':'dashboard', 'icon':'home'},
	{'item':'Actividad Fisica', 'state':'actividadFisica', 'icon':'directions_bike'},
	{'item':'Pasos', 'state':'pasos', 'icon':'directions_walk'},
	{'item':'Sueño', 'state':'sueno', 'icon':'hotel'},
	{'item':'Retos', 'state':'retos', 'icon':'accessibility'}
];

var menuContext= {menuItems};
menu.innerHTML= ActividadFisica.menu(menuContext);



var appContent= document.querySelector('#appContent');

//obtener el titulo del enlace
function getStateTitle(state) {
	for(var i=0; i<menuItems.length; i++){
		if (menuItems[i].state===state) {
			return menuItems[i].item;
		}
	}
}

function changeState(state){
	var appContentContext= {'state':state, 'title':getStateTitle(state)};	
	appContent.innerHTML= ActividadFisica.content(appContentContext);
	var statePage= document.querySelector('#'+state);
	$('.menuLinks').removeClass('menuActive');
	$('#'+state+'Link').addClass('menuActive');
	statePage.innerHTML= ActividadFisica[state]();

 $(document).ready(function(){
  $('.sidenav').sidenav();
 });

	switch(state){
		case 'dashboard':
			calcularSuenio();
			calcularActividadFisica();
			
		break;

		case 'actividadFisica':
			var tablaActividad= document.querySelector('#tablaActividad');
			var actividad= [
				{'deporte':'Baloncesto', 'tiempo':'01:00:10', 'distancia':'03 km', 'calorias':'2,000 cal', 'fecha':'28-junio-2019'},
				{'deporte':'Futsal', 'tiempo':'00:50:15', 'distancia':'04 km', 'calorias':'3,000 cal', 'fecha':'29-junio-2019'}
			];
			tablaActividad.innerHTML= ActividadFisica.tablaActividadFisica({activity: actividad});
			
			$(document).ready(function(){
				$('input.autocomplete').autocomplete({
					data: {
						'Baloncesto':null,
						'Ciclismo':null,
						'Futsal':null,
						'Natación':null,
						'Gimnasio':null
					},
				});
			});
			$(document).ready(function(){
				$('.datepicker').datepicker();
			});
			
			
		break;

		case 'pasos':
			var tablaPasos= document.querySelector('#tablaPasos');
			var pasos= [
				{'fecha':'25-junio-2019', 'pasos':'10,000', 'distancia':'02 km.', 'calorias':'2,000 cal'},
				{'fecha':'26-junio-2019', 'pasos':'5,000', 'distancia':'01 km.', 'calorias':'1000 cal'},
				{'fecha':'27-junio-2019', 'pasos':'10,000', 'distancia':'02 km.', 'calorias':'1,500 cal'}
			];
			tablaPasos.innerHTML= ActividadFisica.tablaPasosDados({paso: pasos});
			$(document).ready(function(){
				$('.datepicker').datepicker();
			});
			
		break;

		case 'sueno':
			//$('select').material_select();
			$(document).ready(function(){
				$('.timepicker').timepicker();
			});
			$(document).ready(function(){
				$('.datepicker').datepicker();
			});
			var tablaSueno= document.querySelector('#tablaSueno');
			var sueno= [
				{'fecha':'28-junio-2018', 'horaIni':'13:00:00', 'horaFin':'13:45:02'},
				{'fecha':'29-junio-2019', 'horaIni':'01:00:00', 'horaFin':'06:00:02',}
			];
			tablaSueno.innerHTML=ActividadFisica.tablaSuenoDatos({suenos:sueno});
			
		break;

		case 'retos':
			$(document).ready(function(){
				$('.datepicker').datepicker();
			});	
		break;
	}	
}

changeState('dashboard');   
 $(document).ready(function(){
 $('.sidenav').sidenav();
 });


function calcularSuenio(){
	var activitySleep= document.getElementById('activitySleep');
			Chart.defaults.global.defaultFontFamily = 'Lato';
			Chart.defaults.global.defaultFontSize = 18;
			var speedData = {
			  labels: ['0', '1', '2', '3', '4'],
			  datasets: [{
			    label: 'sueño',
			    data: [0, 59, 75, 20, 20, 55, 40],
			    lineTension: 0,
			    fill: false,
			    borderColor: 'orange',
			    backgroundColor: 'transparent',
			    borderDash: [5, 5],
			    pointBorderColor: 'orange',
			    pointBackgroundColor: 'rgba(255,150,0,0.5)',
			    pointRadius: 5,
			    pointHoverRadius: 10,
			    pointHitRadius: 30,
			    pointBorderWidth: 2,
			    pointStyle: 'rectRounded'
			  }]
			};

			var chartOptions = {
			  legend: {
			    display: true,
			    position: 'top',
			    labels: {
			      boxWidth: 80,
			      fontColor: 'black'
			    }
			  }
			};

			var lineChart = new Chart(activitySleep, {
			  type: 'line',
			  data: speedData,
			  options: chartOptions
			});
}

function calcularActividadFisica(){
	var contAct = document.getElementById('actividadFisica');
	Chart.defaults.global.defaultFontFamily = 'Lato';
	Chart.defaults.global.defaultFontSize = 18;

	var dataFirst = {
	    label: 'Mes Pasado',
	    data: [0, 59, 75, 20, 20],
	    lineTension: 0.3,
	    fill: false,
	    borderColor: 'red',
	    backgroundColor: 'transparent',
	    pointBorderColor: 'red',
	    pointBackgroundColor: 'lightgreen',
	    pointRadius: 5,
	    pointHoverRadius: 15,
	    pointHitRadius: 30,
	    pointBorderWidth: 2,
	    pointStyle: 'rect'
	  };

	var dataSecond = {
	    label: 'Mes Actual',
	    data: [20, 15, 60, 60, 65],
	    lineTension: 0.3,
	    fill: false,
	    borderColor: 'purple',
	    backgroundColor: 'transparent',
	    pointBorderColor: 'purple',
	    pointBackgroundColor: 'lightgreen',
	    pointRadius: 5,
	    pointHoverRadius: 15,
	    pointHitRadius: 30,
	    pointBorderWidth: 2
	  };

	var speedData = {
	  labels: ['0', '1', '2', '3', '4'],
	  datasets: [dataFirst, dataSecond]
	};

	var chartOptions = {
	  legend: {
	    display: true,
	    position: 'top',
	    labels: {
	      boxWidth: 80,
	      fontColor: 'black'
	    }
	  }
	};

	var lineChart = new Chart(contAct, {
	  type: 'line',
	  data: speedData,
	  options: chartOptions
	});
}  


