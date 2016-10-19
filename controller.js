angular.module('poupanca', [])

.controller('PoupancaController', function ($scope) {

    const controller = this;

    $scope.contas = [
        {
            nome: 'John Rambo',
            banco: 'Banestes',
            agencia: 12,
            numero: '21000-100',
            saldo: 1000,
            juros: 0.1,
            taxa: 10
        },
                {
            nome: 'Maria',
            banco: 'Banco do Brasil',
            agencia: 22,
            numero: '22000-200',
            saldo: 2000,
            juros: 0.2,
            taxa: 20
        },
        {
            nome: 'Ana',
            banco: 'Bradesco',
            agencia: 32,
            numero: '23000-300',
            saldo: 3000,
            juros: 0.3,
            taxa: 30
        }        
    ]

    controller.salvar = function (conta) {
        
        console.log(
            'conta.nome: ' + conta.nome + '\n' +
            'conta.banco: ' + conta.banco + '\n' +
            'conta.agencia: ' + conta.agencia + '\n' +
            'conta.numero: ' + conta.numero + '\n' +
            'conta.saldo: ' + conta.saldo + '\n' +
            'conta.juros: ' + conta.juros + '\n' +
            'conta.taxa: ' + conta.taxa + '\n\n'
        )

        let poupanca = new Poupanca (   conta.nome,
                                        conta.banco,
                                        conta.agencia,
                                        conta.numero,
                                        parseFloat(conta.saldo),
                                        parseFloat(conta.juros),
                                        parseFloat(conta.taxa)
        )

        console.log(
                    'poupanca.nome: ' + poupanca.nome + '\n' +
                    'poupanca.banco: ' + poupanca.banco + '\n' +
                    'poupanca.agencia: ' + poupanca.agencia + '\n' +
                    'poupanca.numero: ' + poupanca.numero + '\n' +
                    'poupanca.saldo: ' + poupanca.saldo + '\n' +
                    'poupanca.juros: ' + poupanca.juros + '\n' +
                    'poupanca.taxa: ' + poupanca.taxa + '\n\n'
        )                                    

        poupanca.atualizaSaldo1()

        poupanca.atualizaSaldo2(0.01)

        poupanca.atualizaSaldo3(1, 0.1)

        poupanca.operacao(1, 100)

        poupanca.operacao(2, 200)

        poupanca.operacao(3, 0.05)

        console.log(SalvarDAO(poupanca))

        // $scope.conta = {}

    }

});