const formctc = document.getElementById('formctc');
const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const provincia = document.getElementById('provincia');
const email = document.getElementById('email');
const comentario = document.getElementById('comentario');
const alerta = document.getElementById('aviso');

formctc.addEventListener('submit', e => {
  e.preventDefault()
  let aviso = ""
  let entrar = false
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
  alerta.innerHTML = ""

  if (nombre.value.length < 3) {
    aviso += `El nombre no es valido <br>`
    entrar = true
  }
  if (apellido.value.length < 2) {
    aviso += `El apellido no es valido <br>`
    entrar = true
  }
  if (provincia.value == 0) {
    aviso += `Seleccione una provincia <br>`
    entrar = true
  }
  if (!regexEmail.test(email.value)) {
    aviso += `El email no es valido <br>`
    entrar = true
  }
  if (comentario.value.length < 1) {
    aviso += `Escriba su comentario <br>`
    entrar = true
  }
  if (entrar) {
    alerta.innerHTML = aviso
    
  } else {
    alerta.innerHTML = "Enviado"
  }
})