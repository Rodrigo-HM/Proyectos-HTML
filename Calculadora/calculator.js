const buttonValues = [
    "AC", "+/-", "%", "÷", 
    "7", "8", "9", "×",
    "4", "5", "6", "-",
    "1", "2", "3", "+",
    "0", ".", "="
];
const rightSymbols = ["÷", "×", "-", "+", "="];
const topSymbols = ["AC", "+/-", "%"];

const display= document.getElementById("display"); 


//A+B, A*B, A-B, A/B

let A=0;
let operator=null;
let B=null;

function clearAll(){
    A=0;
    operator=null;
    B=null;
}

for(let i=0; i<buttonValues.length; i++){ //crea bucle para pintar todos los botones
    let value= buttonValues[i]; //crea variable value para almacenar el valor de cada botón
    let button=document.createElement("button");  //crea un elemento botón
    button.innerText=value;  //añade el valor de cada botón

    //style de botones

    if(value=="0"){
        button.style.width="200px"; //cambia el ancho del botón a 160px
        button.style.gridColumn="span 2"; //hace que el botón ocupe dos columnas
    }

    if(rightSymbols.includes(value)){ //si el valor del botón esta en el array rightSymbols
        button.style.backgroundColor="#FF9500"; //cambia el color de fondo del botón a naranja
    }
    else if(topSymbols.includes(value)){ //si el valor del botón esta en el array topSymbols
        button.style.backgroundColor="#D4D4D2"; //cambia el color de fondo del botón a gris
        button.style.color="#1C1C1C"; //cambia el color de la letra del
    }

    //funcionalidad de los botones
    button.addEventListener("click", function() {  //añade un evento click a cada botón
        if (rightSymbols.includes(value)){
            if(value=="="){
                if(A!=null){
                    B= display.value;
                    let numA=Number(A);
                    let numB=Number(B);

                    if(operator=="÷"){
                        display.value=numA/numB;
                    }
                    else if(operator=="×"){
                        display.value=numA*numB;
                    }
                    else if(operator=="-"){
                        display.value=numA-numB;
                    }
                    else if(operator=="+"){
                        display.value=numA+numB;
                    }
                    clearAll();
                    
                }
            }
            else{ //si el valor del botón es un operador
                operator=value; //guarda el valor del botón en la variable operator
                A=display.value; 
                display.value="";
            }

            
        }
        else if(topSymbols.includes(value)){
            if(value=="AC"){
                clearAll();
                display.value="0";

            }else if(value=="+/-"){

                if(display.value!=""&&display.value!="0"){ //si el display no esta vacio y no es 0
                    if(display.value[0]=="-"){ //si el primer caracter del display es un -
                    display.value=display.value.slice(1); //quita el primer caracter del display
                    }else{
                        display.value="-" +display.value; //añade un - al principio del display
                    }
                }
            }else if(value=="%"){
                display.value=Number(display.value)/100; //la convierte a número y divide entre 100
            }    

        }
        else{  //para numero o el .
            if(value=="."){
                if(display.value!=""&& !display.value.includes(value)){ //si el display no esta vacio y no contiene un punto
                    display.value+=value; //añade un punto al display
                    
                }
                
            }
            else if(display.value=="0"){ //si el display esta en 0
                display.value=value; //cambia el valor del display por el valor del botón
            }    
            else{
                display.value+=value; //añade el valor del botón al display
            }
        }
    }); 

    //hay que añadir los botones al div con la clase "buttons" que esta en el html
    document.getElementById("buttons").appendChild(button); //añade el botón al div con la clase "buttons"
    
}