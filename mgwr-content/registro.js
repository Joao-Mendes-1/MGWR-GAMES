const form = document.getElementById('form')



form.addEventListener('submit',(evento)=>{
    evento.preventDefault()
    console.log(form.nome.value,form.email.value,form.senha.value)

})