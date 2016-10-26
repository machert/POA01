angular.module('poupanca', [])

.controller('ExtratoController', function ($scope) {

    const controller = this

    $scope.extrato = {}
	
	controller.salvarExtrato = function (linha) {
		let extrato = new Extrato(            
            linha.idConta,
            linha.data,
            linha.hora,
            linha.operacao,
            linha.valorOperacao)
									
			criarExtrato(extrato)
			

        $scope.extrato = {}
    }
	
	
    controller.listarExtrato = function () {

        listarExtrato()
            .then(function (result) {

                const extratos = Object.keys(result).map(function (key) {
                    const extrato = result[key]
                    return extrato
                })

                $scope.extratos = extratos

                $scope.$apply()

            })
            .catch(function (error) {
                console.log(error)
            })
    }
	
	

});