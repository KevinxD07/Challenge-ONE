// Area de ingreso de texto y area de texto encriptado
const textArea = document.querySelector("textarea")
const mensaje = document.querySelector(".mensaje")

//botones
const encriptarBtn = document.querySelector(".encriptar-btn")
const desencriptarBtn = document.querySelector(".desencriptar-btn")
const copiarTxt = document.querySelector(".copiar-txt")

function analizarMensaje(){
    var mensaje1 = textArea.value;
    var mensaje2 = mensaje.value;
    var caracteres = "abcdefghijklmnopqrstuvwxyz \n";
    var mensajeError1 = "";
    var mensajeError2 = "";
    var validador = "true";

    for(var caracter of mensaje1){
        if(!caracteres.includes(caracter)){
            mensajeError1 = "ERROR"
        }
    }

    for(var caracter of mensaje2){
        if(!caracteres.includes(caracter)){
            mensajeError2 = "ERROR"
        }
    }

    return validador;
}

function encriptar(){
    if(analizarMensaje() == false) return;

    var mensaje0 = textArea.value;
    var mensajeEncriptado = mensaje0.replaceAll("e","enter")
                                    .replaceAll("i","imes")
                                    .replaceAll("a","ai")
                                    .replaceAll("o","ober")
                                    .replaceAll("u","ufat");

    mensaje.value = mensajeEncriptado;
}

function desencriptar (){
    if(analizarMensaje() == false) return;

    var mensajeEncriptado = textArea.value;
    var mensajeDesencriptado = mensajeEncriptado.replaceAll("enter","e")
                                                .replaceAll("imes","i")
                                                .replaceAll("ai","a")
                                                .replaceAll("ober","o")
                                                .replaceAll("ufat","u");

    mensaje.value = mensajeDesencriptado;
}

function copiar(){
    var mensajeEncriptado = mensaje.value;

    navigator.clipboard.writeText(mensajeEncriptado);
}

encriptarBtn.onclick = encriptar;
desencriptarBtn.onclick = desencriptar;
copiarTxt.onclick = copiar;
