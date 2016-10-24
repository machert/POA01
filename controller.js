angular.module('poupanca', [])

.controller('PoupancaController', function ($scope) {

    const controller = this

    $scope.conta = {}

    controller.listar = function () {

        listarContas()
            .then(function (result) {

                const contas = Object.keys(result).map(function (key) {
                    const conta = result[key]
                    conta.id = key
                    return conta
                })

                $scope.contas = contas

                $scope.$apply()

            })
            .catch(function (error) {

                console.log(error)

            })
    }

    controller.salvar = function (conta) {

        // falta salvar conta nova ou editada

        controller.listar()

        $scope.conta = {}
    }

    controller.editar = function (linha) {

        const conta = linha.conta

        $scope.conta.nome = conta.nome
        $scope.conta.banco = conta.banco
        $scope.conta.agencia = conta.agencia
        $scope.conta.numero = conta.numero
        $scope.conta.saldo = conta.saldo
        $scope.conta.juros = conta.juros
        $scope.conta.taxa = conta.taxa
    }

    controller.listar()

});