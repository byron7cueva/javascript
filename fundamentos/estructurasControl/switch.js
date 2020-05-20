const SIGNOS = {
	TAURO: 'tauro',
	ARIES: 'aries'
}

var signo = prompt('Cual es tu signo?')
const signoValor = signo ? signo.toLowerCase() : null

switch (signoValor) {
	case SIGNOS.TAURO:
		console.log('Sepa que en este día, sus palabras serán tomadas muy en cuenta por quien lo escuche. Deberá asegurarse de que lo interpreten correctamente. Fíjese qué es lo que dice')
		break
	case SIGNOS.ARIES:
		console.log('Entienda que la clave del éxito será poner en acción sus cualidades más positivas tanto mentales como emocionales. Intente hacerlo cuanto antes')
		break
	default:
		console.log('No es un signo zodiacal valido')
		break
}