function calcularPrecioTotal(precio, unidades, envio) {
	return precio * unidades + envio
}

console.log(calcularPrecioTotal(100, 2, 50))
