// let prueba = "mi familia";

// console.log(prueba)

// prueba = prueba.replace("familia", "gia");

// console.log(prueba)
// para mostrar un valor en pantalla document.getElementById("texto").innerHTML=perro;




function mostrar(){
    var txto = document.getElementById("textocaja").value.toLowerCase();
    var texto = txto.replace(/a/gm, "1");
    alert(texto);
}


