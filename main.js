import './style.css'
import { products } from './data/products';
import { mostrarProducto } from './components/mostrarProducto';
import { filtrarPorTamaño } from './components/filtrarPorTamaño';
import { filtrarPorPrecio } from './components/filtrarPorPrecio';
import { botonBuscar } from './components/botonBuscar';

//Components:
import { Header } from './components/Header';
import { Filtros } from './components/Filtros';



const app = document.getElementById('app')

// Mostramos los componentes:
Header(app);

const main = document.createElement('main');
app.appendChild(main)
Filtros(main, products);
//      ---------------------------------- BOTON QUE RESETEA LA BUSQUEDA Y MUESTRA TODOS LOS RESULTADOS --------------------------------        //


var buttonMostrarTodos = document.createElement('button');
buttonMostrarTodos.setAttribute('id', 'button-mostrar-todos');
buttonMostrarTodos.textContent = 'Mostrar todos los productos';

main.firstChild.appendChild(buttonMostrarTodos)
buttonMostrarTodos.addEventListener('click', function(){
  productList.innerHTML = '';
  for (let i = 0; i < products.length; i++) {
    mostrarProducto(products[i], productList)
  }
})


// Creamos la section donde se mostrarán los productos:
const productList = document.createElement('section');
productList.setAttribute('id', 'product-list',);
main.appendChild(productList)

// Mostrar de entrada todos los productos
for (let i = 0; i < products.length; i++) {
  mostrarProducto(products[i], productList)
}

let filteredProducts = []


//        --------------------------------------------  FUNCION DE FILTRAR POR TAMAÑO -------------------------------------------------        //

const sizeFilter = document.getElementById('size-filter');






//        --------------------------------------------  FUNCION DE FILTRAR POR PRECIO  -------------------------------------------------        //


const priceFilter = document.getElementById('price-filter');








// Me falta COMBINAR AMBOS FILTROS!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//        --------------------------------------------  BOTON, QUE ACTIVA LOS FILTROS  -------------------------------------------------        //

const searchButton = document.getElementById('search-button');
searchButton.addEventListener('click',function(){
  //Primero vaciamos el area donde pintar los resultados
  productList.innerHTML = ''
  // Después activamos la función buscar
   botonBuscar(products, sizeFilter, priceFilter, productList, filteredProducts)
});


