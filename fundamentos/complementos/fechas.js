function diasEntreFechas (fecha1, fecha2) {
	const unDia = 1000 * 60 * 60 * 24
	// La diferencia en millisegundos
	const diferencia = Math.abs(fecha1 - fecha2)
	return Math.floor(diferencia / unDia)
}

const hoy = new Date()
// Los meses empiezan desde 0
const nacimiento = new Date(1988, 1, 3)

console.log(diasEntreFechas(hoy, nacimiento))