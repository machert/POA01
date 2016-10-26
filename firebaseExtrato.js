function criarExtrato(extrato) {
    try {
        firebase.database().ref('extratos/').push({
			
            idConta: extrato.idConta,
            data: extrato.data,
            hora: extrato.hora,
            operacao: extrato.operacao,
            valorOperacao: extrato.valorOperacao						
        })
    } catch (err) {
        return err.message;
    }
    return 'Criado';
}

function listarExtratos(extrato){
	return new Promise(function (resolve, reject) {

        firebase.database().ref('/extratos').once('value')
            .then(function (snapshot) {

                let extratos = snapshot.val()

                resolve(extratos)

            })
            .catch(function (error) {

                reject(error)

            })

    })
}