var image=[];
var slide;
var imgAtual;
var imgMax;
var changeTime;
var time;
var velocityTime;
var load;


function preCarregamento(){
    var indice=1;
    for(var i=0; i<5; i++){
        image[i]= new Image();
        image[i].src="./slide1/image"+ indice +".jpg";
        indice++;
    }

}

function carregarImage(img){
    slide.style.backgroundImage="url('"+image[img].src+"')";
}

function trocaImage(dir){
    changeTime =0;
    imgAtual+=dir;
    if(imgAtual>imgMax){
        imgAtual=0;
    }else if(imgAtual<0){
        imgAtual = imgMax;
    }
    carregarImage(imgAtual);
}
function anima(){
    changeTime++;
    if(changeTime>=50){
        changeTime=0;
        trocaImage(1);
    }
    velocityTime=changeTime/0.5;
    load.style.width=velocityTime+"%";
    window.requestAnimationFrame(anima);

}



//Inicialização de Eventos
function addEvents(){
    preCarregamento();
    imgAtual=0;
    imgMax =image.length-1;
    slide = document.getElementById("divSlider");
    load= document.getElementById("bar");
    carregarImage(imgAtual);
    changeTime =0;
    anima();
    
}
window.addEventListener("load",addEvents);