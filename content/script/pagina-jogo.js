const cartazPistoleiro = document.getElementById('cartazPistoleiro')
const musicaPistoleiro= document.getElementById('musicaPistoleiro')
const cartazMario = document.getElementById('cartazMario')
const musicaMario= document.getElementById('musicaMario')

//reproduzir e pausar musicas
function tocarMusica(musica){
	musica.currentTime = 0
	musica.muted=false
	musica.play()
	musica.volume=0.2
}
function pausarMusica(musica){
	musica.pause()
}

//escolher musica

//pistoleiro
cartazPistoleiro.addEventListener("mouseover",()=>{
	tocarMusica(musicaPistoleiro)
}) 
cartazPistoleiro.addEventListener("mouseout", () =>{
	pausarMusica(musicaPistoleiro)
})

//mario
cartazMario.addEventListener("mouseover",()=>{
	tocarMusica(musicaMario)
}) 
cartazMario.addEventListener("mouseout", () =>{
	pausarMusica(musicaMario)
})

