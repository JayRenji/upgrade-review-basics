console.log("Working");

// **Iteración #4: Métodos findArrayIndex**

// Crea una función llamada `findArrayIndex` que reciba como parametros un array de textos y un texto y devuelve la posición del array cuando el valor del array sea igual al valor del texto que enviaste como parametro. Haz varios ejemplos y compruebalos.

// Sugerencia de función:

function findArrayIndex(array, text) {
	for (const iterator of array) {
		if (iterator === text) {
			return array.indexOf(iterator);
		}
	}
}

const array2 = ['Geralt', 'Ciri', 'Jennfer', 'Jaskier'];

console.log('Posición para Geralt ->',findArrayIndex(array2,'Geralt'));

console.log('Posición para Ciri ->',findArrayIndex(array2,'Ciri')); 

console.log('Posición para Jaskier ->',findArrayIndex(array2,'Jaskier')); 
