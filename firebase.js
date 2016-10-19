var config = {
    apiKey: "AIzaSyAGpgGcXZRaO934fQy9AnlZ6GvYYjC9Kd8",
    authDomain: "poajs-ffde8.firebaseapp.com",
    databaseURL: "https://poajs-ffde8.firebaseio.com",
    storageBucket: "poajs-ffde8.appspot.com",
    messagingSenderId: "910970669779"
};

firebase.initializeApp(config);

function SalvarDAO(poupanca) {
    try {
        firebase.database().ref('contas/').push({
            nome: poupanca.nome,
            banco: poupanca.banco,
            agencia: poupanca.agencia,
            numero: poupanca.numero,
            saldo: poupanca.saldo,
            juros: poupanca.juros,
            taxa: poupanca.taxa
        });
    } catch (err) {
        return err.message;
    }
    return 'Sucesso';
}