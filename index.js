

function calcIMC(){
    var message = "";
    var peso  = 0.00;
    var altura = 0.00; 
    var resultado = "";

       peso =  parseFloat(document.querySelector('#peso').value);
       altura =  parseFloat(document.querySelector('#altura').value);  
       resultado =  document.querySelector('#resultado');

    if(peso == ""){
        message = "Você precisa definir um peso";
    } 

    if(altura == ""){
        message = "Você precisa definir uma altura";
    }
    

   var teste = peso / altura ** 2;


    if(teste < 18.5){
        message = "Magreza";
    }else if(teste >= 18.5 &&  teste <= 24.9 ){
        message = "Normal";
    }else if(teste >= 24.9 &&  teste <= 30){
        message = "Sobrepeso";
    }else if(teste > 30 ){
        message = "Obesidade";
    }

    resultado.innerHTML = message;
}


window.onload = function(){
    document.querySelector('#btn').addEventListener('click',calcIMC);
}