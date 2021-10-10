/*Strings*/

/* a) Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula 
(utilizar toUpperCase).*/

var study = "i study industrial engineering";
console.log(study.toUpperCase());

/* b) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 
5 caracteres guardando el resultado en una nueva variable (utilizar substring).*/

var yesterday = "Yesterday i went to Paulo's birthday";
var five = yesterday.substring(0,5);
console.log(five);

/* c) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 
3 caracteres guardando el resultado en una nueva variable (utilizar substring).*/

var color = "my favorite color is green";
var three = color.substring(23,26);
console.log(three);

/* d) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera 
letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, 
toUpperCase, toLowerCase y el operador +).*/

var sport = "i like voley";
var likes = sport.substring(0,1).toUpperCase() + sport.substring(1,12).toLowerCase();
console.log(likes);

/* e) Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. 
Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).*/

var food = "chicken with potatoes";
var space = food.indexOf(" ",0);
console.log(space);

/* f) Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre 
medio). Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera
letra de ambas palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, 
toLowerCase y el operador +).*/

var career = "industrial engineering";
var title = career.substring(0,1).toUpperCase() + career.substring(1,(career.indexOf(" "))).toLowerCase() + " " + career.substring(((career.indexOf(" "))+1),((career.indexOf(" ",0))+2)).toUpperCase() + career.substring((career.indexOf(" "))+2).toLowerCase();
console.log(title);