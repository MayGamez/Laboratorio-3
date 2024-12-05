//Paso 1 : Declaracion de variables

let num1, num2;
let operacion;

//Paso 2 : Funcion para realizar operaciones

function realizarOperacion(num1, num2, operacion) {//inicializacion de variables y funciones
    if(operacion === "suma"){ //Condicional para la suma
        return num1 + num2 ; //Operacion para sumar

    } else if (operacion === "resta") { //Condicional para la resta
        return num1 - num2; //Operacion para la resta
    } else if (operacion === "multiplicacion"){ //Condicional para la multiplicacion
        return num1 * num2; //Operacion para multiplicacion
    } else if (operacion === "division") { //Condicional para la division
        if (num2 === 0 ) {
            return "Error division por cero no permitida";
        }
        return num1 / num2; //Operacion para divison
    } else {
        return "operacion no valida";
    }

}

//Paso 3 bucle para realizar multiples operaciones

while(true){
    //Solicitar al usuaro que ingrese el primer numero 
    num1 = parseFloat(prompt("Ingrese el primer numero (o escriba salir para terminar)"));

    //Si la entrada no es un numero  termine el bucle
    if(isNaN(num1)){
        console.log("Adios.");
        break;
    }

    //Solicitar al usuario que ingrese el segundo numero
    num2 = parseFloat(prompt("Ingrese el segundo numero"));

    //Sirve si el segundo numero no es valido 
    if(isNaN(num2)){
        console.log("Por favor ingrese un numero valido");
        continue; //Regresa al inicio del bucle
    }

    //Solicita al usuaro que ingrese la operacion deseada
operacion = prompt ("Ingrese la operacion a realizar (suma, resta, division, multipicacion)");
//Si el usuario ingresa salir terminar el bucle
if(operacion === "salir"){
    console.log("Adios.");
    break;
}

//Llama la funcion operaciones con los datos proporcionados
const resultado = realizarOperacion(num1,num2,operacion.toLowerCase());

console.log (`resultado: ${resultado}`);

}