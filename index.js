/*
    OBJETIVOS DA AULA:
        - Aprendendo a trabalhar com Orientação a Objetos no JavaScript
            - Classes
            - Métodos
            - Atributos públicos e privados
            - "Early return": Verificação de todas as condições indesejadas primeiro.
            - Importando classes
            - Tipos de valor e de referência
            - Null (aplica NADA ao espaço de memória; intencional) e Undefined (recurso não definido previamente, por acaso)
            - Getters e Setters
            - instanceof
            - Construtores
            - Atributos estáticos
        - OBS: Imagine o seguinte cenário:
            - Criaremos um sistema de contas correntes e cadastro de clientes para o cliente 'ByteBank'.
            - O sistema deve permitir a manipulação do saldo dos usuários e operações de transferências bancárias.
*/

import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";

const cliente1 = new Cliente("Fulano", 11122233344);
//cliente1.qualquerCoisa = "Qualquer coisa"; //JavaScript é dinamicamente tipado; Isto adiciona um novo atributo à classe (mesmo que não definido antes - lembre-se do CaseSensitive).
console.log(cliente1);

const cliente2 = new Cliente("Cicrano", 22233344455);
console.log(cliente2);

const contaCorrenteCliente1 = new ContaCorrente(1001, cliente1);
contaCorrenteCliente1.depositar(500);
console.log(contaCorrenteCliente1);

const valorSacado = contaCorrenteCliente1.sacar(50);
console.log(`valorSacado contaCorrenteCliente1: ${valorSacado}`);

const contaCorrenteCliente2 = new ContaCorrente(1002, cliente2);

console.log(contaCorrenteCliente1.saldo);
console.log(contaCorrenteCliente2.saldo);
contaCorrenteCliente1.transferir(100, contaCorrenteCliente2);
console.log(contaCorrenteCliente1.saldo);
console.log(contaCorrenteCliente2.saldo);

console.log(ContaCorrente.numeroDeContas);