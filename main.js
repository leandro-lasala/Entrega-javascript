//========================================================================

// 1- Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar.

// function parOimpar(numero=0) {
//     if (numero %2 === 0){
//         console.log(`El numero ${numero} es par`);
        
//     } else {console.log(`El numero ${numero} es impar`);
//     }
    
// }

// parOimpar()
// parOimpar(2)
// parOimpar(3)

//========================================================================

// 2- Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, y si ninguno lo es, indicar por consola que son iguales.



// function mayorOmenor(numberA,numberB) {
//     if (numberA>numberB) {
//         console.log(`El numero mayor es ${numberA}`);
        
        
//     } else if (numberA<numberB) 
//         {console.log(`El numero mayor es ${numberB}`);

//     } else {console.log(`Los numero son iguales`);}

// }

// mayorOmenor(1,1)
// mayorOmenor(2,1)
// mayorOmenor(3,1)

// ==============================================================================

// 3- Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5.

// function multiploDe5(numero) {
//     if (numero %5 === 0) 
//         {console.log(`${numero} SI es multiplo de 5`);
//     }else {console.log(`${numero} NO es multiplo de 5`);
//     }
        
        
//     }
    
// multiploDe5(20)
// multiploDe5(22)

// =======================================================================================

// 4- Crear una función que reciba un número por parámetro e imprima por consola todos los números desde el 0 hasta llegar a ese número.




// function conteo(number) {
//     for (let i = 0; i<=number; i++){
//         console.log(i);
                
//     }
    
// }

// conteo(5)
// console.log("===============");
// conteo(11)
// console.log("===============");
// conteo(17)

// =========================================================================================

// 5 - Crear una función que reciba una palabra y un número por parámetro e imprima por consola  esa palabra la cantidad correspondiente al número indicado.

// function imprimirPalabra(palabra,cantidad) {
//     for (let i = 0; i < cantidad; i++){
//         console.log(palabra);
        
//     }
    
// }


// imprimirPalabra("palabra",22)

// ==============================================================================================

// 6 - Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array.


// const numeros = [0,1,2,3,4,5,6,7,8,9,10]

 

// function conteo(array) {
//     for (let i=0; i< numeros.length; i++){
//         console.log(i);

//         }  
//       }


// conteo()


// ===========================================================================================

// 7 - Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array, menos el que se encuentre en la 5ta posición del mismo. Ayuda: Recuerden que el primer índice de un array es "0".

// const numeros = [0,1,2,3,4,5,6,7,8,9,10]

 

// function conteo(sin5) {
//     for (let i=0; i< numeros.length; i++){
//         if (numeros [i] ==5){
//             continue;
//         }
//         console.log(numeros[i]);
        
//     }
    
// }


// conteo()

// ============================================================================================

// 8 - Crea una función que reciba un array de números y un número por parámetro e imprima por consola cada número del array multiplicado por el número pasado por parámetro.

const array = [1,2,3,4,5,6,7,8,9,10]

function multiplicadorArray(array,numero) {
   for (i = 0; i < array.length; i++){
    console.log([i]*numero);
    
   }

}

multiplicadorArray(array,3)














