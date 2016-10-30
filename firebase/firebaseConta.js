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

function buscarConta(poupanca) {

    return new Promise(function (resolve, reject) {

        var ref = firebase.database().ref("conta/"+ poupanca.numero);
        ref.once("value")
          .then(function(snapshot) {
            var name = snapshot.child("name").val(); // { first: "Ada", last: "Lovelace"}
            var firstName = snapshot.child("name/first").val(); // "Ada"
            var lastName = snapshot.child("name").child("last").val(); // "Lovelace"
            var age = snapshot.child("age").val(); // null
          });


        firebase.database().ref('/conta').once('value')
            .then(function (snapshot) {

                let conta = snapshot.val()

                resolve(conta)

            })
            .catch(function (error) {

                reject(error)

            })

    })

}
