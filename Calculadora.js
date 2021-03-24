var zero = "0"
var salvo
var resultado 
function botao(num){
   salvo = document.calc.visor.value += num

}

function reset(){

   document.calc.visor.value += num
   
}

function calcule(){

resultado = eval(salvo);

document.calc.visor.value = resultado 

}
