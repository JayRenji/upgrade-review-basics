console.log("Working");

// **Iteración #6: Función swap**

// Crea una función llamada `swap()` que reciba un array y dos parametros que sean indices del array. La función deberá intercambiar la posición de los valores de los indices que hayamos enviado como parametro. Retorna el array resultante.

// Sugerencia de array:

const furBall = ['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño'];



function swap(array,num1,num2){
    const value1=array[num1];
    const value2=array[num2];

    array[num1]=value2;
    array[num2]=value1;

    return array;
}


console.log(furBall);
swap(furBall,1,4);
console.log(furBall);