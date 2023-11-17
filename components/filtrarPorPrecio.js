//        --------------------------------------------  FUNCION DE FILTRAR POR PRECIO  -------------------------------------------------        //



export const filtrarPorPrecio = (products, priceFilter, filteredProducts) => {
  {
    const maxPrice = parseFloat(priceFilter.value);
    products.forEach(function (product) {
      if (product.price < maxPrice) {
        filteredProducts.push(product)
      }
    });
  };
}

