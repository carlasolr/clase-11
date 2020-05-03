const listaComidas = [
	Comida1 = {
		nombre:'varenikes',
		ingredientes:['harina',
			'sal',
			'huevo',			
			'papa',
			'cebolla',			
			'pimienta'
			],
	},
	Comida2 = {
		nombre: 'salsa bechamel',
		ingredientes: ['manteca',
			'harina',
			'sal',
			'leche',			
			'pimienta',
			'nuez moscada'
			],
	},
	Comida3 = {
		nombre: 'fideos con salsa',
		ingredientes: ['fideos',
			'queso rallado',
			'salsa de tomate'			
		],
	}
]

console.log(listaComidas[0].ingredientes[1]) // accedo


function obtenerRecetaPorIngrediente(listaComidas, ingrediente) {
	let recetas= []
	for(let i = 0; i < listaComidas.length; i++) {
		if(listaComidas[i].ingredientes.includes(ingrediente)) {
			recetas.push(listaComidas[i])
		}
	}
	return recetas
}
	

console.log(obtenerRecetaPorIngrediente(listaComidas, 'harina')) //da ok

////////////////

function obtenerRecetaPorIngredientes(listaComidas, listaIngredientes) {
	let recetas = []
	for(let i = 0; i < listaComidas.length; i++) {
		for(let j = 0; j < listaComidas[i].ingredientes.length; j++) {
			if(listaComidas[i].ingredientes.includes(listaIngredientes)) {
				recetas.push(listaComidas[i])
			}
		}
	}
	return recetas
}

console.log(obtenerRecetaPorIngredientes(listaComidas, ['harina', 'sal']))

//este no funciona pero no se me ocurre mas nada jeje