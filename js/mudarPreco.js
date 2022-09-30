console.log("Foiie");

function preco1() {
    console.log("mudou");
    document.getElementById('preco1').style.display = 'none';
    document.getElementById('preco12').style.display = 'block';
}
function tradicional1() {
    console.log("mudou");
    document.getElementById('preco12').style.display = 'none';
    document.getElementById('preco1').style.display = 'block';
}
function preco2() {
    console.log("mudou");
    document.getElementById('preco2').style.display = 'none';
    document.getElementById('preco22').style.display = 'block';
}
function tradicional2() {
    console.log("mudou");
    document.getElementById('preco22').style.display = 'none';
    document.getElementById('preco2').style.display = 'block';
}
function preco3() {
    console.log("mudou");
    document.getElementById('preco3').style.display = 'none';
    document.getElementById('preco32').style.display = 'block';
}
function tradicional3() {
    console.log("nao foi");
    document.getElementById('preco3').style.display = 'block';
    document.getElementById('preco32').style.display = 'none';
}
function preco4() {
    console.log("mudou");
    document.getElementById('preco4').style.display = 'none';
    document.getElementById('preco42').style.display = 'block';
}
function tradicional4() {
    console.log("nao foi");
    document.getElementById('preco4').style.display = 'block';
    document.getElementById('preco42').style.display = 'none';
}
function preco5() {
    console.log("mudou");
    document.getElementById('preco5').style.display = 'none';
    document.getElementById('preco52').style.display = 'block';
}
function tradicional5() {
    console.log("nao foi");
    document.getElementById('preco5').style.display = 'block';
    document.getElementById('preco52').style.display = 'none';
}
function preco6() {
    console.log("mudou");
    document.getElementById('preco6').style.display = 'none';
    document.getElementById('preco62').style.display = 'block';
}
function tradicional6() {
    console.log("nao foi");
    document.getElementById('preco6').style.display = 'block';
    document.getElementById('preco62').style.display = 'none';
}

document.getElementById('mini1').addEventListener('click', preco1);
document.getElementById('tradicional1').addEventListener('click', tradicional1);
document.getElementById('mini2').addEventListener('click', preco2);
document.getElementById('tradicional2').addEventListener('click', tradicional2);
document.getElementById('mini3').addEventListener('click', preco3);
document.getElementById('tradiciona13').addEventListener('click', tradicional3);
document.getElementById('mini3').addEventListener('click', preco3);
document.getElementById('tradiciona13').addEventListener('click', tradicional3);
document.getElementById('mini4').addEventListener('click', preco4);
document.getElementById('tradiciona14').addEventListener('click', tradicional4);

document.getElementById('mini5').addEventListener('click', preco5);
document.getElementById('tradiciona15').addEventListener('click', tradicional5);
document.getElementById('mini6').addEventListener('click', preco6);
document.getElementById('tradiciona16').addEventListener('click', tradicional6);




