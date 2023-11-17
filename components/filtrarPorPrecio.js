//        --------------------------------------------  FUNCION DE FILTRAR POR PRECIO  -------------------------------------------------        //


import { mostrarProducto } from "./mostrarProducto";

export const filtrarPorPrecio = (products, priceFilter, productList) => {
    const searchButton = document.getElementById('search-button');
    searchButton.addEventListener('click', function () {
      const maxPrice = parseFloat(priceFilter.value);
  
  
      productList.innerHTML = '';
  
      products.forEach(function (product) {
        if (product.price < maxPrice) {
          mostrarProducto(product, productList)
        }
      });
    });
  }


  