import { listaProductos, editarProducto, eliminarCliente } from './server.js';

const listadoDeProductos = await listaProductos();
const contenedor = document.querySelector('#contenedorProductos');


const producto = (product, price, id) => {
    const prod = `
        <div class="productos_datosProducto-containerEditDelete">
            <img id="${id}" name="eliminarProd" src="./assets/icons/delete.svg" alt="eliminarProd" class="productos_datosProducto-eliminarProd" data-eliminar>
            <img id="${id}" name="editarProd" src="./assets/icons/edit.svg" alt="editarProd" class="productos_datosProducto-editarProd" data-editar>
        </div>
        <img src="./assets/images/producto1.jpg" alt="producto1"
            class="productos_datosProducto-img">       
        <p class="productos_datosProducto-descProd">${product}</p>
        <p class="productos_datosProducto-precioProd">${price}</p>
        <a href="#" class="productos_datosProducto-tagDetalles">Ver producto</a>
        `

    const div = document.createElement("div");
    div.className = "productos_datosProducto";
    div.id = `${id}`;
    div.innerHTML = prod;


    return div;

}

const openModalToEdit = (id) => {
    const modal = document.querySelector(".modalEdit");
    const cancelar = document.querySelector("#cancelEdit");
    const editarProd = document.querySelector("#submit");
    const inputs = document.querySelectorAll("[data-tipo]");
    modal.classList.add("modalEdit--show");
    let producto;
    
    listadoDeProductos.forEach(element => {
        if (element.id === id) {
            inputs.forEach(input => {
                input.value = element[input.dataset.tipo];
            });
            producto = element;
        }
    });
    
    editarProd.addEventListener('click', (e) => {

        if (producto != null) {
            inputs.forEach(input => {
                producto[input.dataset.tipo] = input.value;
            });

            editarProducto(producto);            
        }
        
        id = null;
        producto = null;

    });

    cancelar.addEventListener('click', (e) => {
        e.preventDefault();
        modal.classList.remove("modalEdit--show");
        id = null;
        producto = null;
    });


};

const openModalToDelete = (id) => {
    const modal = document.querySelector(".modalDelete");

    modal.classList.add("modalDelete--show");
    const yes = modal.querySelector("#yes");
    const no = modal.querySelector("#no")

    yes.addEventListener('click', (e) => {
        e.preventDefault()
        if (id != null ) {
            eliminarCliente(id);            
        }
        modal.classList.remove("modalDelete--show");
        id = null;
    });

    no.addEventListener('click', (e) => {
        e.preventDefault();
        modal.classList.remove("modalDelete--show");
        id = null;
    });


};


listadoDeProductos.forEach(element => {
    const prod = producto(element.nombreProducto, element.precio, element.id);
    contenedor.appendChild(prod);

    const buttonUpdate = prod.querySelector("[data-editar]")
    const buttonDelete = prod.querySelector("[data-eliminar]")

    buttonUpdate.addEventListener('click', (event) => {
        event.preventDefault();
        openModalToEdit(event.target.getAttribute("id"));
    });

    buttonDelete.addEventListener('click', (event) => {
        event.preventDefault();
        openModalToDelete(event.target.getAttribute("id"));
    });

});





