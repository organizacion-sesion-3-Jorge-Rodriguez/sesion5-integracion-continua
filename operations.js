/* Función suma */
var suma = function suma (a, b) {
	return a + b;	
};

/* Función resta */
var resta = function suma (a, b) {
	return a - b;	
};

var espar = function espar (a){
	if (a%2===0){
		return "par"
	}else{
		return "impar"
	}
}

/* Exportación de funciones */
module.exports = {
	suma,
	resta,
	espar
}

