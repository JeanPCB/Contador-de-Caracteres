// FUNÇAO FOCAR AREA DE TEXTO (PAGINA INICIADA E NO CLIQUE)
const localTexto = document.querySelector( '#text-area' );
const focusText = () => localTexto.focus();
const defocusText = () => localTexto.blur();

window.onload = focusText;
localTexto.onmouseover = focusText;

// FUNÇAO CONTAR:
let areaTexto;
let numCaracateres;
let numPalavras;

//O innerText do contador recebe o valor do comprimento do texto
function contar() {
    areaTexto = document.querySelector( '#text-area' ).value;

    if (areaTexto === '') {
        //Evitando Bug Descoberto
        document.querySelector( '#num-caracteres' ).textContent = 0;
        document.querySelector( '#num-palavras' ).textContent = 0;
    } else {
        numCaracateres = areaTexto.length;

        //Contar e reescrever o numero de caracteres
        document.querySelector( '#num-caracteres' ).textContent = numCaracateres;

        //Contar e reescrever o numero de palavras
        numPalavras = areaTexto.match( /(\w+)?[a-z0-9áéíóúãõâêîôûà&](ça)?(çe)?(çi)?(ço)?(çu)?(çã)?(çõ)?(\w+)?/gi ).length;
        document.querySelector( '#num-palavras' ).textContent = numPalavras;
    }
}

//FUNÇOES COMANDOS
const btnCopiar = document.querySelector( '#btn-copiar' );
const btnLimpar = document.querySelector( '#btn-limpar' );
const btnComandos = [...document.querySelectorAll( '.btn-comandos' )];

function copiarTexto() {
    return navigator.clipboard.writeText( areaTexto );
}

function limparTexto() {
    if( window.confirm( 'Quer realmente limpar o texto?' ) == true )
        document.querySelector( '#text-area' ).value = '';
    return contar()
}

btnCopiar.addEventListener( 'click', copiarTexto );
btnLimpar.addEventListener( 'click', limparTexto );

//ANIMAÇÕES BOTÕES DE COMANDO
const underscore = [...document.querySelectorAll( '.underscore-hidden' ) ];

const loseFocus = () => localTexto.blur();

function mouseOverCopiar() {
    const intervalo = setInterval( () => underscore[ 0 ].classList.toggle( 'underscore-hidden' ), 530 );
    btnCopiar.addEventListener( 'mouseout', () => { 
        clearInterval( intervalo ),
        underscore[ 0 ].classList = 'underscore-hidden'
    } );
}

function mouseOverLimpar() {
    const intervalo = setInterval( () => underscore[ 1 ].classList.toggle( 'underscore-hidden' ), 530 );
    btnLimpar.addEventListener( 'mouseout', () => {
        clearInterval( intervalo ),
        underscore[ 1 ].classList = 'underscore-hidden'
    } );
}


btnCopiar.addEventListener( 'mouseover', mouseOverCopiar )
btnLimpar.addEventListener( 'mouseover', mouseOverLimpar )
btnComandos.map( item => item.onmouseover = defocusText );