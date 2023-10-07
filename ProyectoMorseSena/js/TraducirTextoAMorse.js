var audio;

function traducirTexto() {
    var texto = document.getElementById('texto').value.toLowerCase();
    var morseTraducido = '';

    for (var i = 0; i < texto.length; i++) {
        var letra = texto[i];
        if (letra === ' ') {
            morseTraducido += '/ ';
        } else {
            var codigoMorse = obtenerCodigoMorse(letra);
            morseTraducido += codigoMorse + ' ';
        }
    }

    document.getElementById('codigoMorse').value = morseTraducido.trim();
}

function reproducirMorse() {
    var codigoMorse = document.getElementById('codigoMorse').value;
    var letras = codigoMorse.trim().split(' ');

    letras.forEach(function(caracter, index) {
        setTimeout(function() {
            reproducirSonido(caracter);
        }, index * 1000);
    });
}

function reproducirSonido(caracter) {
    var sonidos = {
        '.-': 'morse_sounds/a.wav',
        '-...': 'morse_sounds/b.wav',
        '-.-.': 'morse_sounds/c.wav',
        '-..': 'morse_sounds/d.wav',
        '.': 'morse_sounds/e.wav',
        '..-.': 'morse_sounds/f.wav',
        '--.': 'morse_sounds/g.wav',
        '....': 'morse_sounds/h.wav',
        '..': 'morse_sounds/i.wav',
        '.---': 'morse_sounds/j.wav',
        '-.-': 'morse_sounds/k.wav',
        '.-..': 'morse_sounds/l.wav',
        '--': 'morse_sounds/m.wav',
        '-.': 'morse_sounds/n.wav',
        '---': 'morse_sounds/o.wav',
        '.--.': 'morse_sounds/p.wav',
        '--.-': 'morse_sounds/q.wav',
        '.-.': 'morse_sounds/r.wav',
        '...': 'morse_sounds/s.wav',
        '-': 'morse_sounds/t.wav',
        '..-': 'morse_sounds/u.wav',
        '...-': 'morse_sounds/v.wav',
        '.--': 'morse_sounds/w.wav',
        '-..-': 'morse_sounds/x.wav',
        '-.--': 'morse_sounds/y.wav',
        '--..': 'morse_sounds/z.wav',
        '-----': 'morse_sounds/0.wav',
        '.----': 'morse_sounds/1.wav',
        '..---': 'morse_sounds/2.wav',
        '...--': 'morse_sounds/3.wav',
        '....-': 'morse_sounds/4.wav',
        '.....': 'morse_sounds/5.wav',
        '-....': 'morse_sounds/6.wav',
        '--...': 'morse_sounds/7.wav',
        '---..': 'morse_sounds/8.wav',
        '----.': 'morse_sounds/9.wav',
        '/': 'morse_sounds/slash.mp3'
    };

    audio = new Audio(sonidos[caracter]);
    audio.play();
}

function borrarTexto() {
    detenerSonido();
    location.reload();
}

function detenerSonido() {
    if (audio) {
        audio.pause();
        audio.currentTime = 0;
    }
}

function obtenerCodigoMorse(letra) {
    var morseCodes = {
        'a': '.-',
        'b': '-...',
        'c': '-.-.',
        'd': '-..',
        'e': '.',
        'f': '..-.',
        'g': '--.',
        'h': '....',
        'i': '..',
        'j': '.---',
        'k': '-.-',
        'l': '.-..',
        'm': '--',
        'n': '-.',
        'o': '---',
        'p': '.--.',
        'q': '--.-',
        'r': '.-.',
        's': '...',
        't': '-',
        'u': '..-',
        'v': '...-',
        'w': '.--',
        'x': '-..-',
        'y': '-.--',
        'z': '--..',
        '0': '-----',
        '1': '.----',
        '2': '..---',
        '3': '...--',
        '4': '....-',
        '5': '.....',
        '6': '-....',
        '7': '--...',
        '8': '---..',
        '9': '----.',
        '/': ' ',
        '.': '.-.-.-',
        ',': '--..--',
        '?': '..--..',
        "'": '.----.',
        '!': '-.-.--',
        '/': '-..-.',
        '(': '-.--.',
        ')': '-.--.-',
        '&': '.-...',
        ':': '---...',
        ';': '-.-.-.',
        '=': '-...-',
        '+': '.-.-.',
        '-': '-....-',
        '_': '..--.-',
        '"': '.-..-.',
        '$': '...-..-',
        '@': '.--.-.',
        '¿': '..-.-',
        '¡': '--...-',
        'ú': '..--',
        'á': '.--.-',
        'é': '..-..',
        'ó': '---.',
        "Ü": "..--",
        "Ä": ".-.-",
        "Ĥ": "----"

    };

    return morseCodes[letra] || letra;
}