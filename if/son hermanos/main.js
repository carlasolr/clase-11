function sonHermanos(hijo1, hijo2) {
	if(hijo1.madre === hijo2.madre && hijo1.padre === hijo2.padre) {
		return true
	} else {
		return false
	}
}

const hijo1 = {
	madre: 'Marga',
	padre: 'Pablo',
}

const hijo2 = {
	madre: 'Marga',
	padre: 'Pablo',
}

console.log(sonHermanos(hijo1, hijo2))