/*Funciones*/

/* a)Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar el resultado 
en una variable, mostrando el valor de dicha variable en la consola del navegador.*/

function sum(num1,num2){
    return num1 + num2;
}
var sumTotal=sum(10,25);
console.log(sumTotal);

/* b)A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número, mostrar una 
alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado.*/

function sum(num1,num2){
    if (typeof num1 !== "number" || typeof num2 !== "number"){
        console.log("one of the parameters has an error");
        return NaN;
    }else{
        return num1 + num2;
    }
}
console.log(sum("hello",15));

/* d)Crear una función validate integer que reciba un número como parámetro y devuelva verdadero si es un número entero.*/

function validate(num){
    if (Number.isInteger(num)){
        return true;
    }else{
        return false;
    }
}
console.log(validate(5));

/* e)A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean enteros. En caso que haya decimales 
mostrar un alerta con el error y retorna el número convertido a entero (redondeado).*/

function validateInt (num){
    return Number.isInteger(num);
}

function sum(num1,num2){
    if (typeof num1 !== "number" || typeof num2 !== "number"){
        console.log("one of the parameters has an error");
        return NaN;
    }else if (validateInt(num1) == false){
        console.log("the first number is not integer");
        return Math.round(num1);
    }else if (validateInt(num2) == false){
        console.log("the second number is not integer");
        return Math.round(num2);
    }else{        
        return num1 + num2;
    }
}

console.log(sum(1.5,2));

/* f)Convertir la validación del ejercicio 6b) en una función separada y llamarla dentro de la función suma probando que todo 
siga funcionando igual.*/

function validateNum(num1,num2){
    if (typeof num1 !== "number" || typeof num2 !== "number"){
        console.log("One of the parameters has an error");
        return NaN;
    }else{
        console.log("The parameters are correct");
        return 1;
    }
}

function suma(num1,num2){
   if (isNaN(validateNum(num1,num2))){
       return NaN;
   }else{
       return num1+num2;
   }

}
console.log(suma(5,"hi"));