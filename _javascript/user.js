var menuItem = document.querySelectorAll('.item-menu')

function selectLink() {
    menuItem.forEach((item)=>
        item.classList.remove('ativo')
    )
    this.classList.add('ativo')
}

menuItem.forEach((item)=>
    item.addEventListener('click', selectLink)
)

var btnExp = document.querySelector('#btn-exp')
var menuSide = document.querySelector('.menu-lateral')

btnExp.addEventListener('click', function(){
    menuSide.classList.toggle('expandir')
})

function redirecionar() {
    window.location.href = 'index.html';
}

function redirecionar2() {
    window.location.href = 'Especs.html';
}

function logar() {
    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    if(login == "admin" && senha == "admin") {
        alert('Você será direcionado a página Home');
        location.href = "index.html";
    } else {
        alert("Usuário ou senha incorretos!")
    }
}