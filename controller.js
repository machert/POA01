angular.module('poupanca', [])

.controller('DetalhesController', function ($scope) {

    const detalhes = this;

    detalhes.salvar = function (conta) {
        
        console.log(
            'Nome: ' + conta.nome + '\n' +
            'Banco: ' + conta.banco + '\n' +
            'Agencia: ' + conta.agencia + '\n' +
            'Conta: ' + conta.numero + '\n' +
            'Saldo: ' + conta.saldo + '\n' +
            'Juros: ' + conta.juros + '\n' +
            'Taxa: ' + conta.taxa + '\n'
        )

        let poupanca = new Poupanca (   conta.nome,
                                        conta.banco,
                                        conta.agencia,
                                        conta.numero,
                                        parseFloat(conta.saldo),
                                        parseFloat(conta.juros),
                                        parseFloat(conta.taxa)
                                    )

        poupanca.atualizaSaldo()

        poupanca.atualizaSaldo(0.01)

        poupanca.atualizaSaldo(1, 0.1)

        poupanca.operacao(1, 100)

        poupanca.operacao(2, 200)

        poupanca.operacao(3, 0.05)

        // $scope.conta = {}

    }

});