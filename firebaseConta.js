function criarConta(poupanca) {
    try {
        firebase.database().ref('contas/').push({
            nome: poupanca.nome,
            banco: poupanca.banco,
            agencia: poupanca.agencia,
            numero: poupanca.numero,
            saldo: poupanca.saldo,
            juros: poupanca.juros,
            taxa: poupanca.taxa
        })
    } catch (err) {
        return err.message;
    }
    return 'Criado';
}

function editarConta(poupanca) {
    try {
        firebase.database().ref('contas/' + poupanca.id).set({
            nome: poupanca.nome,
            banco: poupanca.banco,
            agencia: poupanca.agencia,
            numero: poupanca.numero,
            saldo: poupanca.saldo,
            juros: poupanca.juros,
            taxa: poupanca.taxa
        })
    } catch (err) {
        return err.message;
    }
    return 'Editado';
}

function listarContas() {

    return new Promise(function (resolve, reject) {

        firebase.database().ref('/contas').once('value')
            .then(function (snapshot) {

                let contas = snapshot.val()

                resolve(contas)

            })
            .catch(function (error) {

                reject(error)

            })

    })

}
