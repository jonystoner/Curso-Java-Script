

function carregar() {
    var msg = window.document.getElementById('msg')
    var imagem = window.document.getElementById('imagem')
    //var hora = data.getHours()
   var hora = 12
    msg.innerHTML=  `agora são ${hora} horas`

    if (hora >= 0 && hora < 12 ){
        // bom dia 
        imagem.src ="img/vegeta.png"
        document.body.style.background = '#e2cd9f'
    }
    else if (hora >= 12 && hora < 18 ){
        // boa tarde
        imagem.src ="img/goku.jpg"
    }  else {
        // boa noite 
        imagem.src ="img/gohan.jpg"
 }
}


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

var data_atual = new Date();
var numero_escolhido = data_atual.getDate();

console.log("Número sorteado: " + numero_escolhido);
numero_escolhido--;

var frase_do_dia = frases_do_dia[numero_escolhido];

console.log("Frase do dia");
console.log("Mensagem: " + frase_do_dia);

var programadores = [
    "Ramon",
    "Lucas",
    "Cleiton",
    "Laércio",
    "Josué"
];

programadores[0] ="ricardo";
console.log(programadores)
console.log(programadores[3])


var emails = [
    "julia@email.com",
    "luis@email.com",
    "mario@email.com",
    "sandra@email.com",
    "cristiano@email.com"
];

emails = emails.length

console.log(emails)

let cargo = 'gerente';
let salario = 2000;

switch (cargo) {
case 'gerente':
case 'supervisor':
    salario *= 1.10;
    break;
default:
    salario *= 1.05;
}

console.log(salario)


let x = "20";

if(x === "20")
{
    console.log("X é igual a 20");
}
else
{
    console.log("X não é igual a 20");
}



let disponivel = true;
let resultado = disponivel == "Produto disponível";

console.log(resultado)


var local = 2;

switch (local)
{
    case 1:
        console.log("Praia");
        break;
    case 2:
        console.log("Campo");
        break
    case 3:
        console.log("Em casa");
        break;
}



var notas_bimestre = [
    7, 6, 8, 5
];

var total_notas = notas_bimestre.length;

var soma_notas = notas_bimestre[0] + notas_bimestre[1] + notas_bimestre[2] + notas_bimestre[3];

var media_aluno = soma_notas / total_notas;

console.log("Média do aluno: " + media_aluno);



var tecnologias = "PHP - JavaScript - Python";


var habilitados = [
    true, false, false, true, true
];

var pesos = [85, 77, 88, 98, 101];


var nomes = [
    "Diogo",
    "Rafael",
    "Lorena"
];

console.log(tecnologias,habilitados,nomes,pesos)

var numero_1 = 10;
var numero_2 = 15;

console.log (numero_1 != numero_2 );

var alunos_turma_a = [
    "Jorge",
    "Maurício",
    "Fabiana"
];

var alunos_turma_b = [
    "Sônia",
    "Luciane",
    "Jônatas"
];

alunos_turma_a[0] = alunos_turma_b[1]
;

console.log(alunos_turma_a);


let disponivel = (estoque == 1) : "disponível" ? "indisponível";

console.log(disponivel)



var tecnologias = "PHP - JavaScript - Python";


var habilitados = [
    true, false, false, true, true
];

var pesos = [85, 77, 88, 98, 101];


var nomes = [
    "Diogo",
    "Rafael",
    "Lorena"
];

console.log(tecnologias,habilitados,nomes,pesos)

var numero_1 = 10;
var numero_2 = 15;

console.log (numero_1 != numero_2 );

var alunos_turma_a = [
    "Jorge",
    "Maurício",
    "Fabiana"
];

var alunos_turma_b = [
    "Sônia",
    "Luciane",
    "Jônatas"
];

alunos_turma_a[0] = alunos_turma_b[1]
;

console.log(alunos_turma_a);
var status = 1;

switch(status)
{
case 1:
    console.log("arpovado")
    break
case 0:
console.log("Reprovado")
break

}