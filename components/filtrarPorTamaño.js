//        --------------------------------------------  FUNCION DE FILTRAR POR TAMAÑO -------------------------------------------------        //


import { mostrarProducto } from "./mostrarProducto";

//                                array      filtro   donde mostrar
export const filtrarPorTamaño = (products, sizeFilter, productList) => {
  sizeFilter.addEventListener('change', function () {
    productList.innerHTML = '';
    const selectedSize = sizeFilter.value;
    for (let i = 0; i < products.length; i++) {
      const product = products[i];
      if (selectedSize === 'all' || product.tamaño === selectedSize) {
        mostrarProducto(product, productList)
      }
    }
  });
}