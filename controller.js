angular.module('poupanca', [])

.controller('PoupancaController', function ($scope) {

    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyAGpgGcXZRaO934fQy9AnlZ6GvYYjC9Kd8",
        authDomain: "poajs-ffde8.firebaseapp.com",
        databaseURL: "https://poajs-ffde8.firebaseio.com",
        storageBucket: "poajs-ffde8.appspot.com",
        messagingSenderId: "910970669779"
    };
    firebase.initializeApp(config);

    const controller = this;

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

        firebase.database().ref('contas/').push({
            nome: poupanca.nome,
            banco: poupanca.banco,
            agencia : poupanca.agencia,
            numero: poupanca.numero,
            saldo: poupanca.saldo,
            juros : poupanca.juros,
            taxa : poupanca.taxa
        });

        // $scope.conta = {}

    }

});