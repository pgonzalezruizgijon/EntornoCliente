// Para ordenador números hay que usar una función comparadora

let numeros=[2, 5, 0, 3.5, -2, 12];

numeros.sort(function(num1,num2){ return num1-num2; })

// Función que comprueba duplicidades en un array

function hasDuplicates(arr) {

    return arr.some(x => arr.indexOf(x) !== arr.lastIndexOf(x));

}

// Función que comprueba que todos los elementos de un array de número están comprendidos entre un valor mínimo y máximo

function compruebaEltosArrayEnRango(array,min,max) {

		return  !(array.some(elto => elto > max || elto < min) );

}

// Función que compara si dos arrays tienen los mismo elementos

function comparaArrays(array1, array2) {
        // Verificar si tienen la misma longitud
        if (array1.length !== array2.length) {
          return false;
        }
     
        // Ordenar ambos arrays
        const sortedArray1 = array1.slice().sort();
        const sortedArray2 = array2.slice().sort();
     
        // Comparar los elementos ordenados
        for (let i = 0; i < sortedArray1.length; i++) {
          if (sortedArray1[i] !== sortedArray2[i]) {
            return false;
          }
        }
     
        // Si llegamos aquí, los arrays tienen los mismos elementos
        return true;
      }