// Carga de modulos
const rp = require('request-promise');
const JSDOM = require('jsdom').JSDOM;

// Obtencion de HTML desde URL
// PREGUNTA: donde y como puedo encontrar una explicacion mas detallada de como funcionan las 'promises', porque se le pasa como parametro a la funcion 'html'?
rp('http://comosiempreorganico.com/').then(html => {

	// Generando DOM a partir del HTML
	const dom = new JSDOM(html);

	// Generando objeto Jquery a partir del DOM
	// PREGUNTA: porque hace el require en el scope de la funcion y no con la demas carga de modulos?
	const $ = require('jquery')(dom.window);

	// Obtencion de imagenes que posean atributo alt y no esté vacio
	

	const imagenes = $.find('img[alt]:not([alt=""])');
	
	// Iterar listado de imagenes obtenidas
	// PREGUNTA: esta es la sintaxis para el foreach en ECMA6?
	$(imagenes).each((i, imagen) => {

		//Imprimiendo el text alt de cada imagen en la consola
		console.log($(imagen).attr('alt'));
	});

	
});

