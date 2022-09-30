function sucessoSqlTransacao() {
    console.log("Tabelas: OK!\n\nAguardando Inclusoes...\n");
}
function sucessoInclusaoBD() {
    console.log(
            document.getElementById("emailHTML").value + " - " + document.getElementById("nomeHTML").value + " - " +
            document.getElementById("senhaHTML").value);
    alert("Conta criada!");
    document.getElementById("emailHTML").value = "";
    document.getElementById("nomeHTML").value = "";
    document.getElementById("senhaHTML").value = "";
    document.getElementById("confirmarHTML").value = "";
    console.log("Novos Dados incluidos");
}
function sucessoSelecaoBD() {
    console.log("Selecao bem sucedida");
}
function sucessoVerificar(_NOSSOBANCO, _results) {
    console.log("Verificando email");
    row = _results.rows.length;

    if (row == 0) {
        document.getElementById("verificarEmail").value = "";
        document.getElementById("verificarSenha").value = "";
        console.log(row);
        numero = 0;
    } else {
        console.log("Email Verificado!");
        numero += 1;
        console.log(numero);
    }
}
function sucessoVerificar2(_NOSSOBANCO, _results) {
    console.log("Verificando senha");

    if (_results.rows.length == 0) {
        alert("Não Encontrado Senha");
    } else {
        for (var i = 0; i < _results.rows.length; i++) {
            row = _results.rows.item(i);

            if (row['id'] < 10) {
                var imprimirNaTela = "Senha: " + row['senha_bd'] + "\n";
            } else {
                var imprimirNaTela = "Senha: " + row['senha_bd'] + "\n";
            }
//            document.getElementById("pegarNome").innerHTML = document.getElementById("pegarNome").innerHTML + imprimirNaTela;
            if (typeof (Storage) !== "senha") {
                localStorage.setItem("senha", row['senha_bd']);
            } else {
                console.log("Não suporta");
            }
            var senhaBotada = document.getElementById("verificarSenha").value;
            console.log("Senha Botada: " + senhaBotada);
            console.log("Senha do banco: " + localStorage.getItem("senha"));
            if (localStorage.getItem("senha") == senhaBotada) {
               console.log("Senha Correta!");
                verNome();
            } else {
                alert("Dados Erradoss!");
                document.getElementById("verificarEmail").value = "";
                document.getElementById("verificarSenha").value = "";
            }

        }
    }
}
function sucessoNome(_NOSSOBANCO, _results) {
    if (_results.rows.length == 0) {
        alert("Não Encontrado");
    } else {
        for (var i = 0; i < _results.rows.length; i++) {
            row = _results.rows.item(i);

            if (row['id'] < 10) {
                var imprimirNaTela = "Nome: " + row['nome_bd'] + "Email: " + row['email_bd'] + "\n";
            } else {
                var imprimirNaTela = "Nome: " + row['nome_bd'] + "Email: " + row['email_bd'] + "\n";
            }
            if (typeof (Storage) !== "nome") {
                localStorage.setItem("nome", row['nome_bd']);
            } else {
                console.log("Não suporta");
            }
            if (typeof (Storage) !== "email") {
                localStorage.setItem("email", row['email_bd']);
            } else {
                console.log("Não suporta");
            }

            alert("Logando!");
            console.log(localStorage.getItem("nome"));
            console.log(localStorage.getItem("email"));
            window.location.href = "logado/logado.html";
        }
    }
}
var numero = 0;