function atualizarHora(){
    let el = document.getElementById("hora");
    let date = new Date();
    let hora = date.getHours();
    let minutos = date.getMinutes();

    if(minutos<10){
        minutos ="0"+ minutos
    } 

    let segundos  = date.getSeconds();

   if(segundos<10){
    segundos = "0"+segundos
   }
    

    el.innerHTML = hora + ":" + minutos + ":" + segundos
}

function atualizaData(){
    let ell = document.getElementById("data");
    let date = new Date();
    let mes = date.getMonth() + 1;

    if(mes<10){
      mes = "0" + mes
    }

    let ano = date.getFullYear();
    let dia = date.getDate();
    if(dia<10){
        dia = "0" + dia
      }
    ell.innerHTML = dia + "/" + mes +"/" + ano
}

document.addEventListener("DOMContentLoaded", () => {
    setInterval(atualizarHora, 500);
    setInterval(atualizaData, 1000);
})
