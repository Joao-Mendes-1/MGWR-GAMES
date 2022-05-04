class Cadastro {
	usuario= 'sorakinha1';
	email = 'Desistodavida2@hotmail.com';
	senha ='asldk~fjaskdnjf';
}

function criarCadastro(){
	const user = new Cadastro()
	let usuario = document.getElementById('nome')
	let email = document.getElementById('email')
	let senha = document.getElementById('senha')
	user.usuario = usuario
	user.email = email
	user.senha = senha
	console.log(user.Cadastro)
}

var submit = document.getElementById('enviar')
submit.submit = criarCadastro