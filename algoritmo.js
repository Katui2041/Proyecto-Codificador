//e= enter i= imes = o= ober a= ai u= ufat

function encriptar(){
    var textoRecibido = document.getElementById("texto__caja").value.toLowerCase();
    var textoCrifrado = textoRecibido.replace(/e/igm, "enter");
    var textoCrifrado = textoCrifrado.replace(/i/igm, "imes");
    var textoCrifrado = textoCrifrado.replace(/o/igm, "ober");
    var textoCrifrado = textoCrifrado.replace(/a/igm, "ai");
    var textoCrifrado = textoCrifrado.replace(/u/igm, "ufat");

    document.getElementById("cuadro__muñeco").style.display = "none";
    document.getElementById("cuadro__texto").innerHTML = textoCrifrado;
    document.getElementById("cuadro__boton").style.display = "show";
    document.getElementById("cuadro__boton").style.display = "inherit";
}

function desencriptar(){
    var textoRecibido = document.getElementById("texto__caja").value.toLowerCase();
    var textoCrifrado = textoRecibido.replace(/enter/igm, "e");
    var textoCrifrado = textoCrifrado.replace(/imes/igm, "i");
    var textoCrifrado = textoCrifrado.replace(/ober/igm, "o");
    var textoCrifrado = textoCrifrado.replace(/ai/igm, "a");
    var textoCrifrado = textoCrifrado.replace(/ufat/igm, "u");

    document.getElementById("cuadro__muñeco").style.display = "none";
    document.getElementById("cuadro__texto").innerHTML = textoCrifrado;
    document.getElementById("cuadro__boton").style.display = "show";
    document.getElementById("cuadro__boton").style.display = "inherit";
}



function copiar(){
    var contenido = document.querySelector("#cuadro__texto");
    contenido.select();
    document.execCommand("cut");
}