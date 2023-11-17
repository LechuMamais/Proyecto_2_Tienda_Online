import { filtrarPorPrecio } from "./filtrarPorPrecio";
import { filtrarPorTamaño } from "./filtrarPorTamaño";
import { mostrarProducto } from "./mostrarProducto";

export const botonBuscar = (products, sizeFilter, priceFilter, productList, filteredProducts) => {


    // vaciamos el array de productos filtrados
    filteredProducts = []

    // aplicamos los filtros - los filtros pushean al array de productos filtrados los valores que coinciden

    // Se me ocurren varias formas de concatenar los filtros.
    // Uno sería creando una única condición que incluya las dos.
    // Pero en este punto, me parece más sencillo hacer que el primer filtro le envíe un array al segundo, y este segundo filtre este array.
    // Luego mostrar los resultados de este ultimo.

    let productosFiltradosPorTamaño = [];
    // Al filtro por tamaño entran todos los productos, y salen los filtrados
    filtrarPorTamaño(products, sizeFilter, productosFiltradosPorTamaño);
    // Los productos filtrados por tamaño entran al filtro por precio
    filtrarPorPrecio(productosFiltradosPorTamaño, priceFilter, filteredProducts);
    // Los filteredProducts han sido filtrados por tamaño, y luego por precio
    // Mostramos cada uno de los productos filtrados
    filteredProducts.forEach(element => {

        mostrarProducto(element, productList)
    });
    console.log(filteredProducts)
    // Si no hay resultados, lo mostramos en un texto
    if(filteredProducts.length == 0){
        console.log('No hay resultados')
        let noResults = document.createElement('h4');
        noResults.textContent = 'No hay resultados para tu búsqueda. Prueba cambiar los valores de los filtros!'
        productList.appendChild(noResults)
    }
};

