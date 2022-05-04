let cartazPistoleiro = document.getElementById('cartazPistoleiro')
let musicaPistoleiro= document.getElementById('musicaPistoleiro')
function tocarMusicaPistoleiro(){
	musicaPistoleiro.currentTime = 0
	musicaPistoleiro.muted=false
	musicaPistoleiro.play()
	musicaPistoleiro.volume=0.2
}
function pausarMusicaPistoleiro(){
	musicaPistoleiro.pause()
}
cartazPistoleiro.addEventListener("mouseover",tocarMusicaPistoleiro) 
cartazPistoleiro.addEventListener("mouseout", pausarMusicaPistoleiro)