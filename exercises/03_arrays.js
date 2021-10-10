/*Arrays*/

/* a) Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", 
"Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 
y 11 (utilizar console.log).*/

var month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
console.log(month[4]);
console.log(month[10]);

/* b) Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).*/

arr = month.sort();
console.log(arr);

/* c) Agregar un elemento al principio y al final del array (utilizar unshift y push).*/

month.unshift(2020);
month.push(2021);
console.log(month);

/* d) Quitar un elemento del principio y del final del array (utilizar shift y pop).*/

month.shift();
month.pop();
console.log(month);

/* e) Invertir el orden del array (utilizar reverse).*/

arr = arr.reverse();
console.log(arr);

/* f) Unir todos los elementos del array en un único string donde cada mes este separado por un guión - 
(utilizar join).*/

var month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
console.log(month.join("-"));

/* g) Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).*/

var month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
var arr2 = month.slice(4,11);
console.log(arr2);