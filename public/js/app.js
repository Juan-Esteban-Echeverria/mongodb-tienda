
// FUNCIONES PARA LA CAPTURA E IMPRESION DE FRUTAS EN EL MODAL
const frutas = []
const pintarElementosCarrito = document.getElementById('pintarElementosCarrito')


document.addEventListener('click', (e) => {
    if(e.target.dataset.bsTarget === "#exampleModal"){
       // console.log("diste click al boton")
       frutas.push(e.target.dataset.fruta)
       // console.log(frutas)
       e.target.classList.add("disabled")
       pintarElementosEnHTML()
    }
})

const pintarElementosEnHTML = () => {
    pintarElementosCarrito.innerHTML = ''
    frutas.forEach(item => {
        pintarElementosCarrito.innerHTML += `
        <img src="/img/${item}.png" alt="">
        `
    })
}