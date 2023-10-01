//obj
const luffy = document.querySelector('.luffy')
const logo = document.querySelector('.logo')
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