function contarEspacios(palabra) {
	let espacios = 0
	for(let i = 0; i < palabra.length; i++) {
		if(palabra[i] == ' ') {
			espacios = espacios + 1
		}
	}

	return espacios
}

console.log(contarEspacios('tengo muchas ganas de dormir')) //4