function moverPosicionRandom(elm){
    elm.style.position = "absolute";
    elm.style.top = Math.random() * (window.innerHeight - elm.offsetHeight) + "px";
    elm.style.left = Math.random() * (window.innerHeight - elm.offsetHeight) + "px";
}

let btnsi = document.getElementById("btn_si");
let btnno = document.getElementById("btn_no");
let divModoSexo = document.getElementsByClassName("modo_sexo")[0];

btnno.addEventListener("mouseenter", function(e){moverPosicionRandom(e.target)});

btnsi.addEventListener("click", function(e){ 
    alert("SABIA QUE DIRIAS QUE SI..... TE AMO!!!!!!!!! ❤");

    divModoSexo.style.display = 'block';
    const cancion = new Audio('img\\modo_hot.mp3');
    cancion.play();
});