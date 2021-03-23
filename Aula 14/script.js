
/*window.alert('Tudo Certo')
function verificar (){*/

    /*var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var resultado = document.querySelector('resultado') 
    if (fano.valeu.length == 0 || fano.valeu > ano  ){
    window.alert('erro verifique os dados e tente novamente')
    
    }   
    else {
    
        window.alert('Tudo Certo')
    }
    
    }*/

    

var Meses =["janeiro",
"Fevereiro",
"Março",
"Abril",
"Maio",
"Jumho",
"Julho",
"Agosto",
"Setembro",
"Outubro",
"Novembro",
"Dezembro",
];
console.log(Meses[8])

var Redes = [
"Facebook",
"Instagram",
"Twiter",
"Linkedin",
];
console.log(Redes[1])

var noticias =[
"todas",
"Videos",
"Noticias",
"Maps"
];
console.log(noticias.length)



var cpf = "399.342.018.22.09";

if(cpf.length  == 14){
    console.log("Correto")
}

else{
    console.log("Favor Informar o Numero Correto")
}


console.log(null + null);
console.log(true + true);

var nome = "Denise Moreira Alencar";
var idade = 25;
var altura = 1.74;
var peso = 68;
var endereco = "Rua das Amoras Nº500";



var frases_do_dia = [
    "Sorte é o resultado de muito esforço, trabalho e dedicação",
    "Imagine uma nova história para sua vida e acredite nela",
    "Pedras no caminho? Eu guardo todas. Um dia vou construir um castelo",
    "Se existe uma forma de fazer melhor, descubra-a",
    "Seja a mudança que você deseja ver no mundo.",
    "Um objetivo nada mais é do que um sonho com limite de tempo",
    "Você precisa fazer aquilo que pensa que não é capaz de fazer",
    "A persistência é o caminho do êxito.",
    "Concentre-se naquilo que você é bom, delegue todo o resto",
    "A amizade duplica as alegrias e divide as tristezas",
    "O que quer que você lute, você fortalece, e o que você resiste, persiste",
    "Lembre-se: sua verdadeira força, vem de dentro",
    "Nada acontece a menos que sonhemos antes",
    "Para quem ama, qualquer sacrifício é alegria",
    "A paz é a única forma de nos sentirmos realmente humanos",
    "Não existe um caminho para a felicidade. A felicidade é o caminho",
    "O amor é a alegria acompanhada da ideia de uma causa exterior",
    "A criatividade é ilimitada, pois a arte só precisa de motivação",
    "Fé, duas letras que podem mudar sua vida, acredite",
    "Que a vontade de vencer seja minha maior motivação",
    "Nunca subestime o poder de sua visão para mudar o seu mundo",
    "Não coloque limites em seus sonhos. Coloque fé",
    "Tenho certeza de que se eu sorrisse menos teria menos amigos",
    "Não espere por uma crise para descobrir o que é importante em sua vida",
    "Quem sorri sem parar não é alegre, é falso",
    "A alegria de fazer o bem é a única felicidade verdadeira",
    "A alegria evita mil males e prolonga a vida",
    "Coloque fé onde falta coragem",
    "Levanta, sacode a poeira e dá a volta por cima",
    "O que vale a pena possuir, vale a pena esperar",
    "A esperança é o sonho do homem acordado"
];

var numero_escolhido = data_atual.frases_do_dia
;

console.log("Número sorteado: " + numero_escolhido);
numero_escolhido--;

var frase_do_dia = frases_do_dia[numero_escolhido];

console.log("Frase do dia");
//var frase_do_dia(numero_escolhido);
var relogio = new Date ()

var hora = relogio.getHours ()
console.log (`Agora são ${hora} horas`)
if (hora <= 12 ) {

    console.log(`Bom dia `)
}

else if (hora <=18 ) {

    console.log('Boa tarde ')
}
else  {

    console.log ('Boa noite')

    //var nome = "Caio";
var sobrenome = "Teixeira";

var nome_completo = nome + sobrenome;

console.log("Nome completo:" , nome_completo );


var avaliacao_1 = 6 
;
var avaliacao_2 = 5;

var soma = (avaliacao_1 + avaliacao_2) / 2;

console.log("A média do aluno é igual a: " + soma);

var graus_celsius = 15;

var graus_fahrenheit = (graus_celsius  * 9/5 ) +32;

console.log( graus_celsius  + "°C equivalem a " + graus_fahrenheit + "°F" );

var nome = "Rodrigo";
var idade = 20 ;
var habilitado = false;

console.log(nome,idade,habilitado)

var nome;
console.log(nome);


var idade = 18
var atendeAClassificacaoEtaria = idade >= 18 
console.log(atendeAClassificacaoEtaria)

console.log( 20 >= 10 && 2 < 5 );
console.log( 20 + 10 * 2 );
console.log( null + "null" );

console.log( 21 === 21 );
console.log( '20' === 20 );
console.log( true == 1 );
console.log( null == undefined );

var habilitado = false;

console.log(habilitado);

var numero_1 = 2;
var numero_2 = 3;
var numero_3 = 1;

console.log(numero_1 > numero_2)
console.log(numero_1 > numero_3)



var preco = 10;
var desconto = 0.1;

var novo_preco = preco - ( ( preco / desconto ) / 100 );

console.log(novo_preco);



var nome = "Caio";
var sobrenome = "Teixeira";

var nome_completo = (nome + sobrenome);

console.log("Nome completo: " + nome_completo);

var valor;
console.log(valor);

var numero_1 = 10;
var numero_2 = 8;

var soma = numero_1  + numero_2 ;
var subtracao = numero_1   - numero_2 ;

console.log("A soma entre os números é " + soma );
console.log("A subtração entre os números é " + subtracao);


var idade = 18;

var atendeAClassificacaoEtária = idade >= 18;

console.log(atendeAClassificacaoEtária);


var numero_1 = 5;
console.log(numero_1++);

var numero_2 = 5;
console.log(++numero_2);

var notas_bimestre = [
    7, 6, 8, 5
];

var total_notas = notas_bimestre.length;

var soma_notas = notas_bimestre[0] + notas_bimestre[1] + notas_bimestre[2] + notas_bimestre[3];

var media_aluno = soma_notas / total_notas;

console.log("Média do aluno: " + media_aluno);

var dado = ['', 28, false];
console.log(dado)

var testes  ["",, caio;


var funcionarios = [
    "Carla",
    "Luana",
    "Rodrigo"
];

funcionarios = funcionarios.length

console.log(funcionarios);