//tipos de função

/*
//declarativas -elas obrigatoriamente tem que ter um nome, nesse ex foi usando nome funcao, caso o nome seja removido a função para de funcionar
function funcao() {
    console.log('Tudo certo jovem!');
}
funcao();
*/

//expressão de função
//com nomeação
var funcao = function funcao(){
    console.log('Sou uma mensagem de função de expressão com nome!');
}
funcao();

//ou pode funcionar do mesmo jeito sem o nome da funcao
var funcao = function(){
    console.log('Sou uma mensagem de função de expressão sem nome!');
}
funcao();

//arrow function-não pode ser declarado nome
var funcao = () => {
    console.log('Sou uma arrow function!')
}
funcao();