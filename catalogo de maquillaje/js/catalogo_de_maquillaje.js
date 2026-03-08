let contador = 0
let total = 0

const listaCarrito =
document.getElementById("lista-carrito")

const botones =
document.querySelectorAll(".btn-agregar")

const contadorElemento =
document.getElementById("contador")

const totalElemento =
document.getElementById("total")

botones.forEach(boton => {

    boton.addEventListener("click", () => {

        const precio = parseFloat(boton.dataset.precio)
        const nombre = boton.dataset.nombre

        contador++
        total += precio

        contadorElemento.textContent = contador
        totalElemento.textContent = total.toFixed(2)

        const nuevoProducto = document.createElement("li")

        nuevoProducto.textContent = nombre + " - $" + precio + " "

        const botonEliminar = document.createElement("button")
        botonEliminar.textContent = "Cancelar"

        botonEliminar.addEventListener("click", () => {

            listaCarrito.removeChild(nuevoProducto)

            contador--
            total -= precio

            contadorElemento.textContent = contador
            totalElemento.textContent = total.toFixed(2)

        })

        nuevoProducto.appendChild(botonEliminar)

        listaCarrito.appendChild(nuevoProducto)

    })

})

/* BUSCADOR */

const buscador =
document.getElementById("buscar")

const tarjetas =
document.querySelectorAll(".card")

buscador.addEventListener("keyup", function(){

    const texto =
    buscador.value.toLowerCase()

    tarjetas.forEach(function(tarjeta){

        const nombre =
        tarjeta.querySelector(".card-title")
        .textContent
        .toLowerCase()

        if(nombre.includes(texto)){

            tarjeta.parentElement.style.display = "block"

        }else{

            tarjeta.parentElement.style.display = "none"

        }

    })

})