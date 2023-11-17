//        --------------------------------------------  FUNCION DE FILTRAR POR TAMAÑO -------------------------------------------------        //


//                                array      filtro   array de produc filtrados
export const filtrarPorTamaño = (products, sizeFilter, productosFiltradosPorTamaño) => {
    for (let i = 0; i < products.length; i++) {
      let product = products[i];
      if (product.tamaño === sizeFilter.value) {
        productosFiltradosPorTamaño.push(product);
      }
    }

    // Tal vez lo podía hacer con un filter!
    /*const productosFiltradosPorTamaño = products.filter( product => product.tamaño ===sizeFilter.value)*/
}