class Poupanca {

    // constructor
    constructor (nome, banco, agencia, numero, saldo, juros, taxa) {
        this._nome = nome
        this._banco = banco
        this._agencia = agencia
        this._numero = numero
        this._saldo = saldo
        this._juros = juros
        this._taxa = taxa
    }

    // methods
    // atualiza o saldo da poupança de acordo com o juros mensal
    atualizaSaldo1 () {

        console.log('Saldo Anterior: ' + this._saldo);

        this._saldo += this._saldo * this._juros

        console.log('Juros Aplicado: ' + this._juros)

        console.log('Saldo Atualizado: ' + this._saldo + '\n\n')

    }

    // recebe uma taxa de juros e atualiza o saldo da poupança
    atualizaSaldo2 (juros) {

        console.log('Saldo Anterior: ' + this._saldo)

        this._saldo += this._saldo * juros

        console.log('Juros Aplicado: ' + juros)

        console.log('Saldo Atualizado: ' + this._saldo + '\n\n')

    }

    // recebe o número da poupança e uma taxa de juros e atualiza o saldo da poupança
    atualizaSaldo3 (numero, juros) {

        console.log('Saldo Anterior: ' + this._saldo)

        this._saldo += this._saldo * juros

        console.log('Juros Aplicado: ' + juros)

        console.log('Saldo Atualizado: ' + this._saldo + '\n\n')

    }

    // recebe uma operação e um valor e atualiza o saldo da poupança
    // 1 depósito
    // 2 saque
    // 3 aplica juros
    operacao (operacao, valor) {

        switch (operacao) {

            case 1:
                console.log('Saldo Anterior: ' + this._saldo)
                this._saldo += valor
                console.log('Deposito: ' + valor)
                console.log('Saldo Atualizado: ' + this._saldo + '\n\n')
            break

            case 2:
                console.log('Saldo Anterior: ' + this._saldo)
                this._saldo -= valor
                console.log('Saque: ' + valor)
                console.log('Saldo Atualizado: ' + this._saldo + '\n\n')
            break

            case 3:
                console.log('Saldo Anterior: ' + this._saldo)
                this._saldo += this._saldo * valor
                console.log('Juros Aplicado: ' + valor)
                console.log('Saldo Atualizado: ' + this._saldo + '\n\n')
            break              

        }

    }

    /* getters and setters */
    get nome () {
        return this._nome;
    }

    set nome (value) {
        this._nome = value;
    }

    get banco () {
        return this._banco;
    }

    set banco (value) {
        this._banco = value;
    }

    get agencia () {
        return this._agencia;
    }

    set agencia (value) {
        this._agencia = value;
    }

    get numero () {
        return this._numero;
    }

    set numero (value) {
        this._numero = value;
    }

    get saldo () {
        return this._saldo;
    }

    set saldo (value) {
        this._saldo = value;
    }

    get juros () {
        return this._juros;
    }

    set juros (value) {
        this._juros = value;
    }

    get taxa () {
        return this._taxa;
    }

    set taxa (value) {
        this._taxa = value;
    }

}