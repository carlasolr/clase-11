miComidaPreferida = {
	nombre: 'Varenikes',
	cantidadDeVecesQueComi: 60,
	cantidadDeVecesQueMeCocinaron: 47,
	ingredientes: [
		'Harina',
		'Huevo',
		'Papa',
		'Cebolla',
		'Sal',
		'Pimienta'		
	],
}

const llevaMasDeCincoIngredientes = miComidaPreferida.ingredientes.length > 5

const cantidadDeVecesQueMeCocine = miComidaPreferida.cantidadDeVecesQueComi - miComidaPreferida.cantidadDeVecesQueMeCocinaron
