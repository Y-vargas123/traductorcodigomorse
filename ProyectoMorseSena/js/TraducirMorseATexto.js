let speechSynthesisInstance = window.speechSynthesis;
let currentUtterance = null;

function traducirMorse() {
    const morseInput = document.getElementById("morseInput").value.trim();
    const morseCode = {
        ".-": "a",
        "-...": "b",
        "-.-.": "c",
        "-..": "d",
        ".": "e",
        "..-.": "f",
        "--.": "g",
        "....": "h",
        "..": "i",
        ".---": "j",
        "-.-": "k",
        ".-..": "l",
        "--": "m",
        "-.": "n",
        "---": "o",
        ".--.": "p",
        "--.-": "q",
        ".-.": "r",
        "...": "s",
        "-": "t",
        "..-": "u",
        "...-": "v",
        ".--": "w",
        "-..-": "x",
        "-.--": "y",
        "--..": "z",
        "-----": "0",
        ".----": "1",
        "..---": "2",
        "...--": "3",
        "....-": "4",
        ".....": "5",
        "-....": "6",
        "--...": "7",
        "---..": "8",
        "----.": "9",
        ".-.-.-": ".",
        "--..--": ",",
        "..--..": "?",
        "-.-.--": "!",
        "-....-": "-",
        "-..-.": "/",
        "-.--.": "(",
        "-.--.-": ")",
        '..--': 'ú',
        '.--.-': 'á',
        '..-..': 'é',
        '---.': 'ó',
        "..--": "Ü",
        ".-.-": "Ä",
        "----": "Ĥ",
        "/": " "
    };

    const palabras = morseInput.split(" ");
    let resultado = "";

    for (let palabra of palabras) {
        const letras = palabra.split(" ");
        for (let letra of letras) {
            if (morseCode[letra]) {
                resultado += morseCode[letra];
            } else {
                resultado += "?";
            }
        }
    }

    document.getElementById("resultado").textContent = resultado;
}

function reproducirTexto() {
    const resultado = document.getElementById("resultado").textContent;
    detenerReproduccion();
    const utterance = new SpeechSynthesisUtterance(resultado);
    utterance.rate = 1.0;
    currentUtterance = utterance;
    speechSynthesisInstance.speak(utterance);
}

function borrarYDetener() {
    document.getElementById("morseInput").value = "";
    document.getElementById("resultado").textContent = "";
    detenerReproduccion();
}

function detenerReproduccion() {
    if (currentUtterance) {
        speechSynthesisInstance.cancel();
    }
}