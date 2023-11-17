import './style.css'
import { products } from './data/products';
import { mostrarProducto } from './components/mostrarProducto';
import { filtrarPorTamaño } from './components/filtrarPorTamaño';
import { filtrarPorPrecio } from './components/filtrarPorPrecio';

//Components:
import { Header } from './components/Header';
import { Filtros } from './components/Filtros';



const app = document.getElementById('app')

// Mostramos los componentes:
Header(app);
const main = document.createElement('main');
app.appendChild(main)

Filtros(main, products);






// Section donde se mostrarán los productos:
const productList = document.createElement('section');
productList.setAttribute('id', 'product-list',);
main.appendChild(productList)

// Mostrar de entrada todos los productos
for (let i = 0; i < products.length; i++) {
  mostrarProducto(products[i], productList)
}


//        --------------------------------------------  FUNCION DE FILTRAR POR TAMAÑO -------------------------------------------------        //

const sizeFilter = document.getElementById('size-filter');

filtrarPorTamaño(products, sizeFilter, productList)





//        --------------------------------------------  FUNCION DE FILTRAR POR PRECIO  -------------------------------------------------        //


const priceFilter = document.getElementById('price-filter');



filtrarPorPrecio(products, priceFilter, productList)




// Me falta COMBINAR AMBOS FILTROS!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!