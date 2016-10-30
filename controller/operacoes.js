angular.module('poupanca', [])

.controller('OperacoesController', function ($scope) {

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

    controller.editar = function (linha) {

        const conta = linha.conta

        $scope.conta.id = conta.id
        $scope.conta.nome = conta.nome
        $scope.conta.banco = conta.banco
        $scope.conta.agencia = conta.agencia
        $scope.conta.numero = conta.numero
        $scope.conta.saldo = conta.saldo
        $scope.conta.juros = conta.juros
        $scope.conta.taxa = conta.taxa

        document.getElementById("operacao").scrollIntoView()

        document.getElementById("selectOperacao").focus()
    }

    controller.inserirOperacao = function (linha) {

        if( typeof linha.operacao !== "undefined"){
            var dataAtual = new Date()

            let poupanca = new Poupanca(
                                linha.id,
                                linha.nome,
                                linha.banco,
                                linha.agencia,
                                linha.numero,
                                linha.saldo,
                                linha.juros,
                                linha.taxa)

            poupanca.operacao(parseInt(linha.operacao), parseFloat(linha.valor))
            if(poupanca.id != undefined){
                editarConta(poupanca)
            }

            let extrato = new Extrato(poupanca.id, retornaData(dataAtual), dataAtual.getHours(), linha.operacao, linha.valor)

            criarExtrato(extrato)

            console.log(extrato)
                    
            controller.listar()

            $scope.conta = {}

        }else{
            console.log("Por favor preencha os campos necessários")
        }

    }

    controller.listar()

})