//javascript

function realizarOperacion(){
    let num1 = Number(document.getElementById('num1').value);
    let num2 = Number(document.getElementById('num2').value);
    let operacion = document.getElementById('Operaciones').value;

    switch(operacion){

        case "Suma":
            alert("La suma de los 2 numeros es: " + (num1+num2));
            break;
        case "Resta":
            alert("La resta de los 2 numeros es: " + (num1-num2))
        case "Multiplica":
            alert("La multiplicacion de los 2 numeros es: " + (num1*num2))
        case "Division":
            if(num2 === 0){
                alert("NO ESTA PERMITIDO LA DIVISION ENTRE CERO")
            }else{
                alert("La división de los 2 numeros es: " + (num1/num2))
            }
        break  
    }
}