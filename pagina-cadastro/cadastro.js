//import {Cadastro} from "./cadastro"

var db = openDatabase('MeuBanco','2.0', 'Mybase', '4048')
db.transaction(function(criar){
    criar.executeSql("CREATE TABLE cadastro (id INTEGER PRIMARY KEY,nome TEXT, email TEXT, senha TEXT)")
})

class Cadastro{
    constructor(nome, email,senha){
        this.nome = nome;
        this.email = email;
        this.senha = senha
    }
}



const form = document.getElementById('form')
var conta = new Cadastro()

form.addEventListener('submit',(evento)=>{
    /*evento.preventDefault()*/
    conta = new Cadastro(form.nome.value.trim(),form.email.value.trim(),form.senha.value.trim())
    console.log(conta)
    db.transaction(function(armazenar){
        armazenar.executeSql("INSERT INTO cadastro (nome,email,senha) VALUES (?,?,?)",[conta.nome,conta.email,conta.senha]);
    });
})
    
//sistema de validação 