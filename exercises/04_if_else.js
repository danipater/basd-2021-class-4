/*If Else*/

/* a)Crear un número aleatorio entre 0 y 1 utilizando la función Math.random(), si el valor es mayor o igual 
que 0,5 mostrar una alerta con el mensaje “Greater than 0,5” y sino un alerta con el mensaje “Lower than 0,5”.*/

var num = Math.random();
if (num >= 0.5){
    console.log("Greater than 0,5");
}else{
    console.log("Lower than 0,5");
}

/* b)Crear una variable “Age” que contenga un número entero entre 0 y 100 y muestre los siguientes mensajes 
de alerta:
   1- “Bebe” si la edad es menor a 2 años;
   2- “Nino” si la edad es entre 2 y 12 años;
   3- “Adolescente” entre 13 y 19 años;
   4- “Joven” entre 20 y 30 años;
   5- “Adulto” entre 31 y 60 años;
   6- “Adulto mayor” entre 61 y 75 años;
   7- “Anciano” si es mayor a 75 años.*/

var age = 58;

if (age < 2){
    console.log("Bebe");
}else if (age>=2 && age<=12){
    console.log("Niño");
}else if (age > 12 && age <= 19){
    console.log("Adolescente");
}else if (age > 19 && age <= 30){
    console.log("Joven");
}else if (age > 30 && age <=60){
    console.log("Adulto");
}else if (ahe > 60 && age <= 75){
    console.log("Adulto mayor");
}else {
    console.log("Anciano");
}
