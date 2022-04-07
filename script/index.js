// FUNÇAO FOCAR AREA DE TEXTO (PAGINA INICIADA E NO CLIQUE)
const focusText = function () {
    document.querySelector('#text-area').focus();
}

window.onload = focusText;

document.onclick = focusText;

// FUNÇAO CONTAR:
let areaTexto;
let numCaracateres;
let numPalavras;

//O innerText do contador recebe o valor do comprimento do texto
function contar() {
    areaTexto = document.querySelector('#text-area').value;

    if (areaTexto === '') {
        //Evitando Bug Descoberto
        document.querySelector('#num-caracteres').textContent = 0;
        document.querySelector('#num-palavras').textContent = 0;
    } else {
        numCaracateres = areaTexto.length;

        //Contar e reescrever o numero de caracteres
        document.querySelector('#num-caracteres').textContent = numCaracateres;

        //Contar e reescrever o numero de palavras
        numPalavras = areaTexto.match(/(\w+)?[a-z0-9áéíóúãõâêîôûà&](ça)?(çe)?(çi)?(ço)?(çu)?(çã)?(çõ)?(\w+)?/gi).length;
        document.querySelector('#num-palavras').textContent = numPalavras;
    }
}

//FUNÇOES COMANDOS
const btnCopiar = document.querySelector('#btn-copiar');
const btnLimpar = document.querySelector('#btn-limpar');

btnCopiar.addEventListener('click', copiarTexto);
btnLimpar.addEventListener('click', limparTexto);

function copiarTexto() {
    return navigator.clipboard.writeText(areaTexto);
}

function limparTexto() {
    document.querySelector('#text-area').value = '';
    contar();
}