/*
    OBJETIVOS DA AULA:
        - Aprendendo a trabalhar com Orientação a Objetos no JavaScript
            - Classes
        - OBS: Imagine o seguinte cenário:
            - Criaremos um sistema de contas correntes e cadastro de clientes para o cliente 'ByteBank'.
            - O sistema deve permitir a manipulação do saldo dos usuários e operações de transferências bancárias.
*/

class Cliente {
    nome;
    cpf;
    agencia;
    saldo;
    rg;
}

const cliente1 = new Cliente();
cliente1.nome = "Fulano";
cliente1.cpf = 11122233344;
cliente1.agencia = 1001;
cliente1.saldo = 0;
cliente1.rg = 12345678;

const cliente2 = new Cliente();
cliente2.nome = "Cicrano";
cliente2.cpf = 22233344455;
cliente2.agencia = 1001;
cliente2.saldo = 0;

console.log(cliente1, cliente2);
