// funcion para preparar la página para encriptamiento/ desencriptamiento
function ambientarEncriptacion(){
    document.getElementById("muñeco").style.display = "none";
    document.querySelector(".aviso1").style.display = "none";
    document.querySelector(".aviso2").style.display = "none";
    document.querySelector(".resultado").style.display = "block";
    document.querySelector(".copiar").textContent = "Copiar";
    document.querySelector(".copiar").style.display = "block";
    document.querySelector(".slider").style.justifyContent = "space-between";
    return;
    
}
// funcion para preparar la página para mostrar página default o cuando no se ha encontrado ningún mensaje
function ambientarSinRespuesta(){
    document.getElementById("muñeco").style.display = "block";
    document.querySelector(".aviso1").style.display = "block";
    document.querySelector(".aviso2").style.display = "block";
    document.querySelector(".resultado").style.display = "none";
    document.querySelector(".copiar").style.display = "none";
    return;
}
// función para encriptar el texto
function encriptar() {
    let textoRaw = document.querySelector("textarea").value;
    if(textoRaw==""){
        ambientarSinRespuesta();
    }
    else if (validarTexto(textoRaw)){
        ambientarEncriptacion();
        regexp = /a|e|i|o|u/g;
        diccionario = {"a": "ai","e": "enter","i": "imes","o": "ober","u": "ufat"}
        ReemplazarTexto(textoRaw,regexp,diccionario);
    }
    else {
        ambientarSinRespuesta();
        alert("El texto no debe contener mayusculas, acentos, ni caracteres especiales");
    }
    return;
}

// función para desencriptar el texto
function desencriptar() {
    let textoRaw = document.querySelector("textarea").value;
    if(textoRaw==""){
        ambientarSinRespuesta();
    }
    else if (validarTexto(textoRaw)){
        ambientarEncriptacion();
        regexp = /ai|enter|imes|ober|ufat/g;
        diccionario = {"ai": "a","enter": "e","imes": "i","ober": "o","ufat": "u"}
        ReemplazarTexto(textoRaw,regexp,diccionario);
    }
    else {
        ambientarSinRespuesta();
        alert("El texto no debe contener mayusculas, acentos, ni caracteres especiales");
    }
    return;
}

//función para copiar con metodo execCommand
function copy() {
    let copyText = document.querySelector(".resultado");
    navigator.clipboard.writeText(copyText.value).then(() => {
       document.querySelector(".copiar").textContent = "Copiado!!";
    }).catch(err => {
        console.error('Error al copiar: ', err);
    });
    return;
}
document.querySelector(".copiar").addEventListener("click", copy);
    
function validarTexto(textoRaw) {
    // patrón para verificar que el texto no tenga mayusculas, acentos, ni caracteres especiales
    
    let patron = /^[a-z0-9\s]+$/;
    return patron.test(textoRaw);
}
    
// función para reemplazar en un texto con la regla de una expresión regular por los valores en un diccionario
function ReemplazarTexto(textoRaw,regexp, diccionario) {
    let textoEncriptado = textoRaw.replace(regexp, function (x) { diccionario; return diccionario[x];});
        document.querySelector(".resultado").innerHTML = textoEncriptado;
        return;
}