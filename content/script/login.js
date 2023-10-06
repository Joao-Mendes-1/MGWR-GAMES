//obj
const luffy = document.querySelector('.luffy')
const logo = document.querySelector('.logo')
const buttonCadastro = document.getElementById('cadastro')
const urlCadastro = "../pagina-cadastro/cadastro.html"

//entrar na pagina de cadastro

function entrar(urlCadastro){
    let win = window.open(urlCadastro, '_blank')
    win.focus()
}


buttonCadastro.addEventListener('click', function(){
    entrar(urlCadastro)
})


//var pre declarada
let rodada = 1
//animação luffy
setInterval(()=>{
    if(rodada == 1){
        logo.style.animation = 'logo 1000ms'
        function pausarAnimacao(){
        logo.style.animation = 'none'
        logo.style.left = '2%'
        rodada = rodada + 1 
    }
    pausarAnimacao()
    setTimeout(()=>{
        luffy.style.display = 'none'
    },400)
    }
},2000)