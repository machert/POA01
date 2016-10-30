angular.module('poupanca', [])

.controller('HistoricoController', function ($scope) {

    const controller = this

    $scope.conta = {}
    $scope.historico = {}

    controller.buscar = function (linha) {

        let arr = new Array()

        let var_historico = new Historico(
                            linha,
                            arr)

        listarExtratos()
            .then(function (result) {

                const extratos = Object.keys(result).map(function (key) {
                    const extrato = result[key]

                    return extrato
                })


                for (var i = 0, len = extratos.length; i < len; i++) {
                    if(var_historico._poupanca.conta.id == extratos[i].idConta){
                        var_historico._extratos.push(extratos[i]);                        
                    }
                }

                $scope.historico = var_historico

                console.log($scope.historico)

                $scope.$apply()

            })
            .catch(function (error) {
                console.log(error)
            })

    }

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


    controller.listar()

});