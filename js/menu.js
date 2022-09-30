
if (localStorage.getItem("nome") == null || localStorage.getItem("nome") == "null") {
   console.log("Não logado!");
   document.getElementById('logado').style.display = 'none';
   document.getElementById('estaLogado').style.display = 'none';
   document.getElementById('naoLogado').style.display = 'block';
} else {
    console.log("Logado!");
    document.getElementById('naoLogado').style.display = 'none';
    document.getElementById('naoLogado2').style.display = 'none';
    document.getElementById('estaLogado').style.display = 'block';
    document.getElementById('logado').style.display = 'block';
    
}
console.log(localStorage.getItem("nome"));
console.log(localStorage.getItem("email"));

document.getElementById("nome").innerHTML = localStorage.getItem("nome");
document.getElementById("trocarEmail").value = localStorage.getItem("email");
document.getElementById("trocarNome").value = localStorage.getItem("nome");