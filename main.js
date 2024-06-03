//arrays y constantes//
const productos = [
  {id: 1, nombre: "pantalon", price: 20000},
  {id: 2, nombre: "remeras", price: 15000},
  {id: 3, nombre: "vestidos", price: 50000},
  {id: 4, nombre: "camperas", price: 60000},
  {id: 5, nombre: "buzos", price: 15000},
  {id: 6, nombre: "camisas", price: 20000},
  {id: 7, nombre: "medias", price: 5000}
];

let carro = [];

//funcion para iniciar el simulador//
function IniciarEcommerce() {
  let seguirComprando = true;

  while (seguirComprando) {
      let listaProductos = "Productos Disponibles:\n";
      for (let i = 0; i < productos.length; i++) {
          listaProductos += productos[i].id + ". " + productos[i].nombre + " - $" + productos[i].price + "\n";
      }

      let selectorDeProductoid = parseInt(prompt(listaProductos + "Ingresa el ID del producto que deseas agregar al carrito:"));

      let selectorProducto = null;
      for (let i = 0; i < productos.length; i++) {
          if (productos[i].id === selectorDeProductoid) {
              selectorProducto = productos[i];
              break;
          }
      }

      if (selectorProducto) {
          carro.push(selectorProducto);
          alert(selectorProducto.nombre + ' ha sido agregado al carrito.');
      } else {
          alert('Producto no encontrado.');
      }

      seguirComprando = confirm('¿Deseas seguir comprando?');
  }

  vercarro();
}

// Función para ver el contenido del carrito
function vercarro() {
  if (carro.length === 0) {
      alert('El carrito está vacío');
      return;
  }

  let cartContent = 'Carrito de Compras:\n';
  for (let i = 0; i < carro.length; i++) {
      cartContent += (i + 1) + '. ' + carro[i].nombre + ' - $' + carro[i].price + '\n';
  }

  const confirmPurchase = confirm(cartContent + '¿Deseas proceder al pago?');
  if (confirmPurchase) {
      proceedToCheckout();
  } else {
      alert('Gracias por visitar nuestra tienda.');
  }
}

// Función para proceder al pago
function proceedToCheckout() {
  let total = 0;
  for (let i = 0; i < carro.length; i++) {
      total += carro[i].price;
  }

  let payment = parseInt(prompt('El total es $' + total + '. Ingresa el monto a pagar:'));

  if (payment >= total) {
      alert('Pago realizado con éxito. ¡Gracias por tu compra!');
      carro = [];
  } else {
      alert('Monto insuficiente. Intenta de nuevo.');
  }
}

// Iniciar el simulador
IniciarEcommerce();
