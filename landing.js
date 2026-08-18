let cantidadProductos = 0;
let totalCarrito = 0;
let contadorCarrito = document.getElementById("contador-carrito");
let cantidadResumen = document.getElementById("cantidad-productos");
let totalResumen = document.getElementById("total-carrito");
let mensajeCarrito = document.getElementById("mensaje-carrito");
let botonesAgregar = document.querySelectorAll(".boton-agregar");
botonesAgregar.forEach(function (boton) {
  boton.addEventListener("click", function () {
    let nombreProducto = boton.getAttribute("data-nombre");
    let precioProducto = Number(
      boton.getAttribute("data-precio")
    );
    cantidadProductos = cantidadProductos + 1;
    totalCarrito = totalCarrito + precioProducto;
    contadorCarrito.textContent = cantidadProductos;
    cantidadResumen.textContent = cantidadProductos;
    totalResumen.textContent = "$" + totalCarrito;
    mensajeCarrito.textContent =
      nombreProducto + " fue añadido al carrito.";
  });
});
let formularioContacto =
  document.getElementById("formulario-contacto");
let mensajeFormulario =
  document.getElementById("mensaje-formulario");
formularioContacto.addEventListener("submit", function (evento) {
  evento.preventDefault();
  mensajeFormulario.textContent =
    "✓ Formulario enviado correctamente";
  mensajeFormulario.style.display = "block";
  formularioContacto.reset();
});