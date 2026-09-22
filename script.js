// FORMULARIO DE CONTACTO
const formulario = document.getElementById("formulario-contacto");

if (formulario) {
    formulario.addEventListener("submit", function(evento) {
        evento.preventDefault();

        alert("¡Gracias por escribirnos! En Rose Boutique nos pondremos en contacto contigo.");

        formulario.reset();
    });
}


// CARRITO
const botonesComprar = document.querySelectorAll(".boton-comprar");

let productosCarrito = [];
let cantidadCarrito = 0;
let totalCarrito = 0;


// MOSTRAR PRODUCTOS EN "MI COMPRA"
function mostrarCarrito() {

    const listaCompra = document.getElementById("lista-compra");
    const totalCompra = document.getElementById("total-compra");

    if (!listaCompra || !totalCompra) {
        return;
    }

    if (productosCarrito.length === 0) {

        listaCompra.innerHTML =
            "<p>Aún no has agregado productos a tu carrito.</p>";

        totalCompra.textContent = "$0 MXN";

        return;
    }

    listaCompra.innerHTML = "";

    productosCarrito.forEach(function(producto) {

        const elemento = document.createElement("div");

        elemento.classList.add("producto-carrito");

        elemento.innerHTML = `
            <p>
                <strong>${producto.nombre}</strong><br>
                Precio: $${producto.precio} MXN<br>
                Color: ${producto.color}<br>
                Talla: ${producto.talla}
            </p>
        `;

        listaCompra.appendChild(elemento);
    });

    totalCompra.textContent = "$" + totalCarrito + " MXN";
}


// BOTONES "COMPRAR"
botonesComprar.forEach(function(boton) {

    boton.addEventListener("click", function(evento) {

        evento.preventDefault();

        // Buscar la tarjeta del producto
        const tarjeta = boton.closest("article");

        if (!tarjeta) {
            return;
        }

        // Nombre del producto
        const nombreElemento = tarjeta.querySelector("h3");

        const producto = nombreElemento
            ? nombreElemento.textContent.trim()
            : "Producto";


        // Precio
        const precioElemento = tarjeta.querySelector(".precio");

        let precio = 0;

        if (precioElemento) {

            const precioTexto = precioElemento.textContent;

            precio = parseFloat(
                precioTexto.replace(/[^0-9.]/g, "")
            ) || 0;
        }


        // Color
        const colorElemento = tarjeta.querySelector(
            'select[id^="color-"]'
        );

        const color = colorElemento
            ? colorElemento.value
            : "No especificado";


        // Talla
        const tallaElemento = tarjeta.querySelector(
            'select[id^="talla-"]'
        );

        const talla = tallaElemento
            ? tallaElemento.value
            : "No especificada";


        // Agregar producto
        productosCarrito.push({

            nombre: producto,
            precio: precio,
            color: color,
            talla: talla

        });


        // Actualizar cantidades
        cantidadCarrito++;

        totalCarrito += precio;


        // Actualizar carrito de arriba
        const contador = document.getElementById("contador-carrito");
        const total = document.getElementById("total-carrito");

        if (contador) {
            contador.textContent = cantidadCarrito;
            contador.classList.remove("contador-animado");

    void contador.offsetWidth;

    contador.classList.add("contador-animado");
        }

        if (total) {
            total.textContent = "$" + totalCarrito + " MXN";
        }


        // Actualizar "Mi compra"
        mostrarCarrito();


        // Animación del carrito
        const carrito = document.getElementById("carrito");

        if (carrito) {

            carrito.classList.add("carrito-animado");

            setTimeout(function() {

                carrito.classList.remove("carrito-animado");

            }, 500);
        }


        // Mensaje
        alert(
            producto +
            " se agregó a tu carrito."
        );


        // Ir automáticamente a "Mi compra"
        const miCompra = document.getElementById("mi-compra");

        if (miCompra) {

            miCompra.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});


// BOTÓN DEL CARRITO
const carrito = document.getElementById("carrito");

if (carrito) {

    carrito.addEventListener("click", function() {

        if (cantidadCarrito === 0) {

            alert("Tu carrito está vacío.");

        } else {

            alert(
                "Tienes " +
                cantidadCarrito +
                " producto(s) en tu carrito."
            );

        }

    });

}


// BOTÓN VACIAR CARRITO
const vaciarCarrito = document.getElementById("vaciar-carrito");

if (vaciarCarrito) {

    vaciarCarrito.addEventListener("click", function() {

        productosCarrito = [];

        cantidadCarrito = 0;

        totalCarrito = 0;


        const contador = document.getElementById("contador-carrito");

        const total = document.getElementById("total-carrito");


        if (contador) {
            contador.textContent = "0";
        }

        if (total) {
            total.textContent = "$0 MXN";
        }


        mostrarCarrito();


        alert("Tu carrito ha sido vaciado.");

    });

}


// Mostrar el carrito vacío al cargar la página
mostrarCarrito();
// ASISTENTE ROSE

const abrirAsistente = document.getElementById("abrir-asistente");
const ventanaAsistente = document.getElementById("ventana-asistente");
const cerrarAsistente = document.getElementById("cerrar-asistente");

if (abrirAsistente && ventanaAsistente) {

    abrirAsistente.addEventListener("click", function() {

        ventanaAsistente.style.display = "flex";

    });

}

if (cerrarAsistente && ventanaAsistente) {

    cerrarAsistente.addEventListener("click", function() {

        ventanaAsistente.style.display = "none";

    });
    // MOSTRAR PREGUNTAS DEL ASISTENTE

const comenzarAsistente = document.getElementById("comenzar-asistente");
const preguntasAsistente = document.getElementById("preguntas-asistente");

if (comenzarAsistente && preguntasAsistente) {

    comenzarAsistente.addEventListener("click", function() {

        preguntasAsistente.style.display = "block";

        comenzarAsistente.style.display = "none";

    });

}
// CALCULAR TALLA DEL ASISTENTE ROSE

const calcularTalla = document.getElementById("calcular-talla");
const resultadoTalla = document.getElementById("resultado-talla");

if (calcularTalla && resultadoTalla) {

    calcularTalla.addEventListener("click", function() {

        const busto = Number(document.getElementById("busto-asistente").value);
        const cintura = Number(document.getElementById("cintura-asistente").value);
        const cadera = Number(document.getElementById("cadera-asistente").value);

        if (busto <= 0 || cintura <= 0 || cadera <= 0) {

            resultadoTalla.textContent =
                "💕 Por favor, ingresa todas tus medidas correctamente.";

            return;

        }

        let talla = "";

        if (busto <= 84 && cintura <= 64 && cadera <= 90) {
            talla = "XS";

        } else if (busto <= 89 && cintura <= 69 && cadera <= 95) {
            talla = "S";

        } else if (busto <= 94 && cintura <= 74 && cadera <= 100) {
            talla = "M";

        } else if (busto <= 101 && cintura <= 81 && cadera <= 107) {
            talla = "L";

        } else if (busto <= 109 && cintura <= 90 && cadera <= 116) {
            talla = "XL";

        } else {
            talla = "Por confirmar";
        }

        if (talla === "Por confirmar") {

            resultadoTalla.textContent =
                "💕 Tus medidas están fuera de nuestra tabla orientativa. Te recomendamos consultarnos para ayudarte.";

        } else {

            resultadoTalla.textContent =
                "✨ Tu talla orientativa es: " + talla +
                ". Recuerda que puede variar según el modelo y el proveedor. 💕";

        }

    });

}
}
