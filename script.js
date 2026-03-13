let votos = 0

const boton = document.getElementById("votar")
const textoVotos = document.getElementById("contador")

boton.addEventListener("click", function(){

votos = votos + 1

textoVotos.innerText = "Votos: " + votos

console.log("voto registrado")

})

const form = document.getElementById("formPropuesta")

form.addEventListener("submit", function(e) {
  e.preventDefault()

  let nombre = document.getElementById("nombre").value
  let idea = document.getElementById("idea").value

  if (nombre.trim() === "" || idea.trim() === "") {
    document.getElementById("mensaje").innerText = "Completá todos los campos."
    return
  }

  document.getElementById("mensaje").innerText = "¡Propuesta enviada correctamente!"
  form.reset()
})