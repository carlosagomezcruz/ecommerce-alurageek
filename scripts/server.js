
const listaProductos = async () => await (fetch('http://localhost:3000/productos').then((respuesta) => respuesta.json()).then((respuesta) => { return respuesta }))

const crearProducto = async ({ nombreProducto, precio, categoria, imagen, descripcion }) => {

  return await fetch('http://localhost:3000/productos', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ nombreProducto, precio, categoria, imagen, descripcion, id: uuid.v4() }),
  });
};

const editarProducto = async ({ nombreProducto, precio, categoria, imagen, descripcion, id }) => {
  return await fetch(`http://localhost:3000/productos/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ nombreProducto, precio, categoria, imagen, descripcion }),
  })
    .then((respuesta) => respuesta)
    .catch((err) => console.log(err));
};


const eliminarCliente = (id) => {
  return fetch(`http://localhost:3000/productos/${id}`, {
    method: "DELETE",
  });
};

export {
  listaProductos,
  crearProducto,
  editarProducto,
  eliminarCliente
}