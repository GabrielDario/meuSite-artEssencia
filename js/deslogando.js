function saindo() {
    console.log("Deslogou!");
    localStorage.setItem("nome", null);
    localStorage.setItem("email", null);
    alert("Saindo");
     window.location.href = "../login.html";
}
console.log("Issso foi");