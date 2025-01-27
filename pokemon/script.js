
window.onload=function(){
    var pack= document.getElementById("pokemon-pack");  //obtiene ese elemento
    pack.addEventListener("click", openPack);  //cuando se haga click en el pack, se ejecuta la funcion openPack

}

function randomNumber(min, max){  //genera un numero aleatorio entre min y max
    return Math.ceil(Math.random()*(max-min)+min); //redondea hacia arriba con ceil
}

function openPack(){
  //  alert("card pack open");
    let cardsOpen =document.getElementById("pokemon-card-opened");  //obtiene el elemento pokemon-card-opened y se lo asigna a cardsOpen
    while(cardsOpen.firstChild){  //mientras cardsOpen tenga un hijo
        cardsOpen.firstChild.remove();  //remueve el hijo
    }                               //se usa para eliminar las cartas que ya estaban en el pack

    
    for(let i=0; i<11; i++){  //crea 11 cartas
    /* 
        <div class="pokemon-card">
            <img id="0" src="./pokemon-cards/base set (10).jpg">
        </div>
     */
        let cardDiv= document.createElement("div");  //crea un div y le añade la clase pokemon-card
        cardDiv.classList.add("pokemon-card");

        let cardImg=document.createElement("img");  //crea una imagen
        cardImg.id=i;

        let num=1;  
        if(i==10){
            num=randomNumber(1, 16); //genera un numero aleatorio entre 1 y 16
        }
        else{
            num=randomNumber(17, 102); //genera un numero aleatorio entre 17 y 102
        }

        cardImg.src="./pokemon-cards/base set ("+num.toString()+").jpg" //le añade la imagen

        cardDiv.appendChild(cardImg);  //añade la imagen al div
        document.getElementById("pokemon-card-opened").appendChild(cardDiv);  //añade el div al pack
    }
}