import { crearProducto } from './server.js';

const submit = document.querySelector('#submit');

console.log(crearProducto);

const getValues = () => {

    let producto = {
        nombreProducto: null,
        precio: null,
        categoria: null,
        imagen: null,
        descripcion: null
    }

    const inputs = document.querySelectorAll("[data-tipo]")

    inputs.forEach((input) => {
        producto[input.getAttribute("name")] = input.value;
    });

    return producto;

}

submit.addEventListener("click", (e) => {
    e.preventDefault();
    const producto = getValues();
    crearProducto(producto);
    window.location.href = "/adminProducts.html"
});
