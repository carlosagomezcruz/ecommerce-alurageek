export class Producto {
    nombreProducto;
    precio;
    categoria;
    imagen;
    descripcion;
    static cantidadProductos = 0;


    constructor(nombreProducto, precio, categoria, imagen, descripcion) {
        this.nombreProducto = nombreProducto;
        this.precio = precio;
        this.categoria = categoria;
        this.imagen = imagen;
        this.descripcion = descripcion;
        Producto.cantidadProductos++
    }

    totalProductos = () => {
        return Producto.cantidadProductos;
    }

}