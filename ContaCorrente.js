/*
    Arquivos que iniciam com letra maiúscula são classes.
*/

import { Cliente } from "./Cliente.js";

export class ContaCorrente {
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