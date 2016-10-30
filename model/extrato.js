class Extrato {
// constructor
    constructor ( idConta, data, hora, operacao, valorOperacao) {				
		//this._idExtrato = idExtrato
        this._idConta = idConta
		this._data = data
        this._hora = (hora)
        this._operacao = parseInt(operacao)
        this._valorOperacao = parseFloat(valorOperacao)
    }


     /* getters and setters */
    get idConta () {
        return this._idConta;
    }

    set idConta (value) {
        this._idConta = value;
    }

    get data () {
        return this._data;
    }

    set data (value) {
        this._data = value;
    }

    get hora () {
        return this._hora;
    }

    set hora (value) {
        this._hora = value;
    }

    get operacao () {
        return this._operacao;
    }

    set operacao (value) {
        this._operacao = parseInt(value);
    }

    get valorOperacao () {
        return this._valorOperacao;
    }

    set valorOperacao (value) {
        this._valorOperacao = parseFloat(value);
    }
	
}