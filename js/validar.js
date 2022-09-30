var NOSSOBANCO;
var NOMEBD = 'NossoBD';
var VERSAOBD = '1.0.0';
var DESCRICAOBD = 'BDteste';
var TAMANHOBD = 2;

function iniciandoAplicacao() {
    try {
        console.log("Chamando o Banco...");

        NOSSOBANCO = window.openDatabase(NOMEBD, VERSAOBD, DESCRICAOBD, TAMANHOBD * 1024 * 1024);
        console.log("Banco: OK!\n\nCriando Tabelas...");
        NOSSOBANCO.transaction(criarTabelasSql, erroSqlTransacao, sucessoSqlTransacao);
    } catch (_erro) {
        alert(_erro);
    }
}

function criarTabelasSql(_NOSSOBANCO) {
    try {
        _NOSSOBANCO.executeSql('CREATE TABLE IF NOT EXISTS CADASTRO (id INTEGER PRIMARY KEY, email_bd VARCHAR(30) unique, nome_bd VARCHAR(20), senha_bd VARCHAR(15))');
        console.log("Tabelas: OK!\n\nAguardando Inclusoes...\n");
    } catch (_erro) {
        alert(_erro);
    }
}

function validacaoEmail() {
    var emailHTML = document.getElementById('emailHTML').value;
    console.log("Foi!");

    if (emailHTML != "") {
        if (emailHTML.search("@") != -1 && emailHTML.indexOf(".") != -1 &&
                emailHTML.indexOf(" ") == -1 && emailHTML.length >= 4) {
            validarSenha();
        } else {
            alert("Email Inválido");
            document.getElementById("emailHTML").focus();
        }
    } else {
        alert("Email Vazio!");
        document.getElementById("emailHTML").focus();
    }
}
function validarSenha() {
    if (document.getElementById('senhaHTML').value != "") {
        if (document.getElementById('senhaHTML').value.length >= 6) {
            if (document.getElementById('senhaHTML').value == document.getElementById('confirmarHTML').value) {
                inserirDadosBD();
            } else {
                alert("Senhas Diferentes");
            }
        } else {
            alert("Senha no mínimo 6 caracteres");
        }
    } else {
        alert("Campo Senha Vazio!");
    }
}
function inserirDadosBD() {
    if (document.getElementById('emailHTML').value != "" && document.getElementById('nomeHTML').value != "") {
        try {
            console.log("Enviando Dados...");
            NOSSOBANCO.transaction(botarDados, erroConexaoBD, sucessoInclusaoBD);
        } catch (_erro) {
            alert(_erro);
        }
    } else {
        alert("Campo Vazio!\n");
    }
}

function botarDados(_NOSSOBANCO) {
    var novoNome = document.getElementById("emailHTML").value;
    var novoRG = document.getElementById("nomeHTML").value;
    var novaFuncao = document.getElementById("senhaHTML").value;
    try {
        _NOSSOBANCO.executeSql('INSERT INTO CADASTRO (email_bd, nome_bd, senha_bd) VALUES (?,?,?)', [novoNome, novoRG, novaFuncao]);
        console.log("Envio de Dados: ok\n");
        console.log("Atualizado");
        alert("Login Feito");
    } catch (_erro) {
        alert(_erro);
    }
}
function logar() {
    if (document.getElementById("verificarEmail").value != "" &&
            document.getElementById("verificarSenha").value != "") {
        try {
            NOSSOBANCO.transaction(verificarEmail, erroPesquisar, sucessoSelecaoBD);
        } catch (_erro) {
            alert(_erro);
        }
    } else {
        alert("Campo Vazioo!");

    }
}
function verificarEmail(_NOSSOBANCO) {
    try {
        _NOSSOBANCO.executeSql("SELECT * FROM CADASTRO WHERE email_bd LIKE ('" + document.getElementById("verificarEmail").value + "')", [], sucessoVerificar, erroConexaoBD);
        _NOSSOBANCO.executeSql("SELECT * FROM CADASTRO WHERE email_bd LIKE ('" + document.getElementById("verificarEmail").value + "')", [], sucessoVerificar2, erroConexaoBD);
    } catch (_erro) {
        alert(_erro);
    }
}
function logar2() {
    try {
        NOSSOBANCO.transaction(verificarSenha, erroPesquisar, sucessoSelecaoBD);
    } catch (_erro) {
        alert(_erro);
    }
}
function verificarSenha(_NOSSOBANCO) {
    try {
    } catch (_erro) {
        alert(_erro);
    }
}
function verNome() {
    try {
        NOSSOBANCO.transaction(vendoNome, erroPesquisar, sucessoSelecaoBD);
    } catch (_erro) {
        alert(_erro);
    }

}
function vendoNome(_NOSSOBANCO) {
    try {
        _NOSSOBANCO.executeSql("SELECT * FROM CADASTRO WHERE email_bd LIKE ('" + document.getElementById("verificarEmail").value + "')", [], sucessoNome, erroConexaoBD);
    } catch (_erro) {
        alert(_erro);
    }
}

document.getElementById('enviar').addEventListener('click', validacaoEmail);
document.getElementById('logar').addEventListener('click', logar);
window.addEventListener("load", iniciandoAplicacao, false);
                                                                                        