
var agora = new Date ()

var diaSem = agora.getDay() 

 

switch(diaSem){

    case 0:
        console.log('domingo')
        break
    case 1:    
        console.log('segunda')
        break
    case 2:    
        console.log('terça')
        break
    case 3:    
        console.log('quarta')
        break
    case 4:    
        console.log('quinta')
        break

    case 5:    
        console.log('sexta')
        break
    case 6:    
        console.log('sabado')
        break

default:
    console.log('Erro dia da semana não existe')
        
    
}

/*var contador = 1
while (contador < 51) {
    console.log(`Passos ${contador}`)
    contador++
}

do {
    console.log(`Passos ${contador}`)
    contador++
}while (contador <= 51)*/
/*console.log('Vai começar ')
for (var contador = 1;contador <= 5;contador++){
console.log(`Passos ${contador}`)

}
console.log('fim')


var idade = 89

if (idade < 16){
console.log  ('Não vota ')
}

else if (idade < 18 || idade > 65){ 
     console.log ('voto opcional')
}
else if (idade >= 18) {

 console.log('voto obrigatorio')



if (idade < 16){
console.log  ('Não vota ')
}

else if (idade < 18 || idade > 65){ 
     console.log ('voto opcional')
}
else if (idade >= 18) {

 console.log('voto obrigatorio')

}*/
//console.log ('velocidade do carro ${vel}')
//if (vel > 60) {
  //  console.log ('Multado')}
//console.log ('cinto de segurança')



//console.log ('testes java script')

//var velocidade = 89 
//console.log (`a velocidade é ${velocidade}kmh`)
//if ( velocidade > 60  ) {
//    console.log(`Voce ultrapassou a velocidade permitida multado`)  // } console.log (`dirija sempre usando sinto de segurança !`)

// var time = 'amor' console.log (`Bando de loucos ${time}`) if (time == 'tests') {

 // console.log('corinthians') else {   console.log('Safado')}



 

 //var homen  = string ('iron man')
//var aranha = string('homen aranha')
//var result



var programadores = [
    "Raricardo",
    "Lucas",
    "Cleiton",
    "Laércio",
    "Josué",
  ];
  
  
  console.log(programadores[3])
  console.log(programadores)
  
  
  var avaliacao_1 = 6;
  var avaliacao_2 = 5;
  
  var soma = avaliacao_1 + avaliacao_2 / 2 
  
  console.log("A nota dele é ",soma)
  
  
  
   var  posicao_inicial = 5; // m
  var posicao_final = 23; // m
  
  var tempo = 6; // s
  
  var deslocamento = posicao_final - posicao_inicial;
  
  var velocidade_media = deslocamento / tempo
  
  console.log("A velocidade média foi de " + velocidade_media + "m/s");
  
  var base = 5;
  var altura = 8;
  
  var area_triangulo = ( base * altura ) / 2
  
  console.log("O valor da área do triângulo é: " + area_triangulo)
  
  var valor_1 = 10;
  var valor_2 = "10";
  
  console.log(valor_1 === valor_2)
  
  const n1 = 20 % 2 == 0;
  
  
  console.log(n1);
  
  var idade = 18 
  var atendeAClassificacaoEtaria = (idade > 18)
  console.log(atendeAClassificacaoEtaria)
  
  var nome = "João";
  
  nome = nome + "Pedro"
  console.log(nome);