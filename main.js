// VARIABLES

let menuHamburguesas = [
  {
    nombre: "De la casa",
    precio: 800,
    cantidad: 8,
  },
  {
    nombre: "Riki Fort",
    precio: 800,
    cantidad: 0,
  },
  {
    nombre: "Riki Parri",
    precio: 800,
    cantidad: 8,
  },
  {
    nombre: "Volcan",
    precio: 800,
    cantidad: 0,
  },
];

let menuPastas = [
  {
    nombre: "Sorrentinos",
    precio: 500,
    cantidad: 8,
  },
  {
    nombre: "Canelones",
    precio: 700,
    cantidad: 0,
  },
  {
    nombre: "Ravioles",
    precio: 600,
    cantidad: 8,
  },
  {
    nombre: "Cintas",
    precio: 400,
    cantidad: 0,
  },
];

let carrito = []

function card() {
  menuHamburguesas.forEach((info) => {
      //Estructura
      const body = document.createElement ('div');
      const titulo = document.createElement ('h3');
      titulo.textContent = info.nombre;
      const precio = document.createElement ('p');
      precio.textContent = info.precio;
      const cantidad = document.createElement ('p');
      cantidad.textContent = info.cantidad;

      body.appendChild (titulo);
      body.appendChild (precio);
      body.appendChild (cantidad);

  });
}

function añadirProductoAlCarrito(evento) {
  // Añadimos el Nodo a nuestro carrito
  carrito.push(evento.target.getAttribute("marcador"));
  // Actualizamos el carrito
  renderizarCarrito();
}

function vaciarCarrito() {
  // Limpiamos los productos guardados
  carrito = [];
  // Renderizamos los cambios
  renderizarCarrito();
}

