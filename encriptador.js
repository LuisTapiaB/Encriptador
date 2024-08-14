// funcion para preparar la página para encriptamiento/ desencriptamiento
function ambientarEncriptacion(){
    document.getElementById("muñeco").style.display = "none";
    document.querySelector(".aviso1").style.display = "none";
    document.querySelector(".aviso2").style.display = "none";
    document.querySelector(".resultado").style.display = "block";
    document.querySelector(".copiar").style.display = "block";
    document.querySelector(".slider").style.justifyContent = "space-between";
}
// funcion para preparar la página para mostrar página default o cuando no se ha encontrado ningún mensaje
function ambientarSinRespuesta(){
    document.getElementById("muñeco").style.display = "block";
    document.querySelector(".aviso1").style.display = "block";
    document.querySelector(".aviso2").style.display = "block";
    document.querySelector(".resultado").style.display = "none";
    document.querySelector(".copiar").style.display = "none";
}
// función para encriptar el texto
function encriptar() {
    let textoRaw = document.querySelector("textarea").value;
    if(textoRaw==""){
        ambientarSinRespuesta();
    }
    else {
        ambientarEncriptacion();
        let texto = textoRaw.toLowerCase();
        let textoEncriptado = textoRaw.replace(/a|e|i|o|u/g, function (x) { diccionario = {"a": "ai","e": "enter","i": "imes","o": "ober","u": "ufat"}; return diccionario[x];});
        document.querySelector(".resultado").innerHTML = textoEncriptado;
    }
}
// función para desencriptar el texto
function desencriptar() {
    let textoRaw = document.querySelector("textarea").value;
    if(textoRaw==""){
        ambientarSinRespuesta();
    }
    else {
        ambientarEncriptacion();
        let texto = textoRaw.toLowerCase();
        let textoEncriptado = textoRaw.replace(/ai|enter|imes|ober|ufat/g, function (x) { diccionario = {"ai": "a","enter": "e","imes": "i","ober": "o","ufat": "u"} 
            return diccionario[x];
            });
        document.querySelector(".resultado").innerHTML = textoEncriptado;
    }
}
//función para copiar con metodo execCommand
function copy() {
    let copyText = document.querySelector(".resultado");
    copyText.select();
    document.execCommand("copy");
    }
    
document.querySelector(".copiar").addEventListener("click", copy);