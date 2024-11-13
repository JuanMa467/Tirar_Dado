function  tirarDados(){
    var numeroAlAzar=0
    // Creo un numero al azar entre el 1 y 6
    numeroAlAzar= Math.floor(Math.random() * (6)) + 1;
    
    const imgDado =document.getElementById("imgDado")

    // Animación de rotación 
    imgDado.style.transition = 'transform 2s';
    imgDado.style.transform = `rotateZ(${numeroAlAzar * 360}deg) rotateX(${numeroAlAzar * 360}deg)`;

    // Cambio la img de dado dependiendo del numero
    imgDado.src="./dados/dados"+numeroAlAzar+".png";

    // Cambio el resultado
    const nResultado=document.getElementById("nDado")
    nResultado.innerHTML=`Resultado: ${numeroAlAzar}`
    nResultado.style.transition='transform 2s'

    // Sonido de tirar dados
    const sonido=document.getElementById("sonidoDado");
    sonido.play()

}
