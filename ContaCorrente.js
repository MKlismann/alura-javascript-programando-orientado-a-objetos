/*
    Arquivos que iniciam com letra maiúscula são classes.
*/

import { Cliente } from "./Cliente.js";

export class ContaCorrente {
    static numeroDeContas = 0;
    agencia;

    _cliente;
    set cliente(valor) {
        if (valor instanceof Cliente) {
            this._cliente = valor;
        }
    }
    get cliente() {
        return this._cliente;
    }

    _saldo = 0; //#saldo (convenção de atributo privado, porém ainda em discussão pela comunidade: https://github.com/tc39/proposal-class-fields#private-fields).
    get saldo() {
        return this._saldo;
    }

    constructor(agencia, cliente){
        this.agencia = agencia;
        this.cliente = cliente; // Utilizando o setter que contem a verificação do instanceof
        ContaCorrente.numeroDeContas += 1;
    }

    sacar(valor) {
        if (this._saldo < valor || valor < 0) return; //Se tiver _saldo suficiente

        this._saldo -= valor;
        return valor;
    }

    depositar(valor) {
        if (valor < 0) return; //Depósito somente para valores maiores do que 0

        this._saldo += valor;
    }

    transferir(valor, contaDestino) {
        const valorSacado = this.sacar(valor);
        contaDestino.depositar(valorSacado);
    }
}