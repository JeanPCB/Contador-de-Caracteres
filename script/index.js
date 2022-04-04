// FUNÇAO FOCAR AREA DE TEXTO (PAGINA INICIADA E NO CLIQUE)
const focusText = function() {
    document.querySelector('#text-area').focus();
}

window.onload = focusText;

document.onclick = focusText;

// FUNÇAO CONTAR:
let areaTexto; 
let numCaracateres;
let numPalavras;

//O innerText do contador recebe o valor do comprimento do texto
function funcaoContar() {
    areaTexto = document.querySelector('#text-area').value;

    if (areaTexto === ''){
        //Evitando Bug Descoberto
        document.querySelector('#num-caracteres').textContent = 0;
        document.querySelector('#num-palavras').textContent = 0;
    } else {
        numCaracateres = areaTexto.length;

        //Contar e reescrever o numero de palavras
        if (areaTexto.match(/(\S+)/g) !== null) {
            numPalavras = areaTexto.match(/(\S+)/g).length;
            document.querySelector('#num-palavras').textContent = numPalavras;
        }

        //Contar e reescrever o numero de caracteres
        document.querySelector('#num-caracteres').textContent = numCaracateres;
    }
}