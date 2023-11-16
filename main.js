import './style.css'
import { products } from './data/products';
import { mostrarProducto } from './components/mostrarProducto';

//Components:
import { Header } from './components/Header';
import { Filtros } from './components/Filtros';


// Mostramos los componentes:
Header();
Filtros(products);


const app = document.getElementById('app')

const sizeFilter = document.getElementById('size-filter');

const productList = document.createElement('section');
productList.setAttribute('id', 'product-list',);
app.appendChild(productList)


//        --------------------------------------------  FUNCION DE FILTRAR POR TAMAÑO -------------------------------------------------        //


sizeFilter.addEventListener('change', function () {
  productList.innerHTML = '';
  const selectedSeller = sizeFilter.value;

  for (let i = 0; i < products.length; i++) {
    const product = products[i];


    if (selectedSeller === 'all' || product.tamaño === selectedSeller) {
      mostrarProducto(product, productList)
    }
  }
});





//        --------------------------------------------  FUNCION DE FILTRAR POR PRECIO  -------------------------------------------------        //


const priceFilter = document.getElementById('price-filter');
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





// Me falta COMBINAR AMBOS FILTROS!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!