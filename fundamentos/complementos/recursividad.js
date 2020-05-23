function divisionEntera (dividendo, divisor) {
	// Caso base
	if (dividendo < divisor) {
		return 0
	}

	// Parte recursiva
	return 1 + divisionEntera(dividendo - divisor, divisor)
}

console.log(divisionEntera(30, 3))