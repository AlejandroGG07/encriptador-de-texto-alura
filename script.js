const textArea = document.querySelector (".area_de_texto");
const mensaje = document.querySelector (".mensaje");

//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

function botonEncriptar (){
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
    feedbackElement.textContent = "";
}

function encriptar(stringEncriptado){
    let codigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase();

    for(let i = 0; i < codigo.length; i++){
        if(stringEncriptado.includes(codigo [i][0])){
            stringEncriptado = stringEncriptado.replaceAll(codigo[i][0], codigo[i][1])

        }
    }
    return stringEncriptado
}

function botonDesencriptar (){
    const textoEncriptado = Desencriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    feedbackElement.textContent = "";

}

function Desencriptar(stringDesencriptado){
    let codigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase();

    for(let i = 0; i < codigo.length; i++){
        if(stringDesencriptado.includes(codigo [i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(codigo[i][1], codigo[i][0]);

        }
    }
    return stringDesencriptado

}

const $content = document.getElementById("texto_Copiar"),
    $btn = document.getElementById("boton_Copiar");

$btn.addEventListener('click', e => {
    $content.select();
    document.execCommand('copy');
   let feedbackElement = document.getElementById("feedbackElement")
    feedbackElement.textContent = 'Texto copiado al portapapeles';
    
})
