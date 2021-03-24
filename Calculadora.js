const visor = document.getElementById('visor');

const numeros = document.querySelectorAll('[id*=tecla]')

const inserirnumero =(evento) => visor.textContent = evento.target.textContent;

numeros.forEach(numero => numero.addEventListener('click',inserirnumero) );
