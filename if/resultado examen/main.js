function calcularResultadoDeExamen(nota) {
	if(nota >= 1 && nota <= 10) {
		
		if(nota === 10) {
			return 'sobresaliente'
		}

		if(nota > 6) {
			return 'aprobado'
		}

		if(nota >= 4 && nota <= 6) {
			return 'a recuperar'
		}

		if(nota < 4) {
			return 'aplazado'
		}		
	}
}
