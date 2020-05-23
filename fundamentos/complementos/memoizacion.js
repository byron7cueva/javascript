function factorial (n) {
	// Si no existe la cache se crea unsa sola vez
	if (!this.cache) {
		this.cache = {}
	}

	// Si anteriormente ya se ejecuto solo se retorna
	if (this.cache[n]) {
		return this.cache[n]
	}

	// Caso base
	if (n === 1) {
		return 1
	}

	// Se almacena en la cache
	this.cache[n] = n * factorial(n - 1)
	return this.cache[n]
}

console.log(factorial(12))
console.log(factorial(6))