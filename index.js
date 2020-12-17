/*
    OBJETIVOS DA AULA:
        - Aprendendo a trabalhar com Orientação a Objetos no JavaScript
            - Classes
            - Métodos
            - Atributos públicos e privados
            - "Early return": Verificação de todas as condições indesejadas primeiro.
        - OBS: Imagine o seguinte cenário:
            - Criaremos um sistema de contas correntes e cadastro de clientes para o cliente 'ByteBank'.
            - O sistema deve permitir a manipulação do saldo dos usuários e operações de transferências bancárias.
*/

class Cliente {
    nome;
    cpf;
    rg;
}

class ContaCorrente {
    agencia;
    _saldo = 0; //#saldo (convenção de atributo privado, porém ainda em discussão pela comunidade: https://github.com/tc39/proposal-class-fields#private-fields).

    sacar(valor) {
        if (this._saldo < valor || valor < 0) return; //Se tiver _saldo suficiente

        this._saldo -= valor;
        return valor;
    }

    depositar(valor) {
        if (valor < 0) return; //Depósito somente para valores maiores do que 0

        this._saldo += valor;
    }
}

const cliente1 = new Cliente();
cliente1.nome = "Fulano";
cliente1.cpf = 11122233344;
cliente1.rg = 12345678;
//cliente1.qualquerCoisa = "Qualquer coisa"; //JavaScript é dinamicamente tipado; Isto adiciona um novo atributo à classe (mesmo que não definido antes - lembre-se do CaseSensitive).

const cliente2 = new Cliente();
cliente2.nome = "Cicrano";
cliente2.cpf = 22233344455;

const contaCorrenteCliente1 = new ContaCorrente();
contaCorrenteCliente1.agencia = 1001;

contaCorrenteCliente1.depositar(100);
contaCorrenteCliente1.depositar(200);
contaCorrenteCliente1.depositar(-1);
const valorSacado = contaCorrenteCliente1.sacar(-1);

console.log(valorSacado);

console.log(contaCorrenteCliente1);
console.log(cliente1);
console.log(cliente2);
