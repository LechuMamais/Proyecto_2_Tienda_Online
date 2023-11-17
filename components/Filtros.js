export function Filtros(app, products) {
    // Creamos la section de los filtros
    var filtros = document.createElement('section');
    filtros.setAttribute('id', 'filter-products');

    var filtrosTitle = document.createElement('h4');
    filtrosTitle.textContent = 'Filtrar Productos';




    // Creamos el filtro por tamaño
    var spanFilterTamaño = document.createElement('span');
    spanFilterTamaño.textContent = 'Filtrar por Tamaño: ';
    var sizeFilterSelect = document.createElement('select');
    sizeFilterSelect.setAttribute('id', 'size-filter');

    // Acá lo suyo sería meter una función que recorra el array de productos, y por cada valor que haya en la propiedad tamaño de los productos
    // meta una nueva option con el atributo de su valor, y textContent de su valor

//  Creamos un array con cada valor que pueda tomar la propiedad tamaño 
var tamaños = [];

for(var i=0; i<products.length; i++){
    if(tamaños.includes(products[i].tamaño)){

    }else{
        tamaños.push(products[i].tamaño)
    }
}
console.log(tamaños);


// Función que recorre un array y muestra cada elemento en el DOM
function crearOption(arr) {

    // Recorre el array y crea un div para cada elemento
    arr.forEach(function(elemento) {
      var newOption = document.createElement('option');
      newOption.setAttribute('value', elemento);
      newOption.textContent = elemento;
  
      // Agrega el la option al select
      sizeFilterSelect.appendChild(newOption)
    });
  }
  crearOption(tamaños)
  


    // Creamoe el filtro por Precio
    var filterPrecio = document.createElement('div');
    var spanFilterPrecio = document.createElement('span');
    spanFilterPrecio.textContent = 'Filtrar por Precio: ';
    var inputFilterPrecio = document.createElement('input');
    inputFilterPrecio.setAttribute('id', 'price-filter');
    inputFilterPrecio.setAttribute('type', 'number');
    inputFilterPrecio.setAttribute('placeholder', 'Precio Máximo');
    var buttonFilterPrecio = document.createElement('button');
    buttonFilterPrecio.setAttribute('id', 'search-button');
    buttonFilterPrecio.textContent = 'Buscar';


    filterPrecio.appendChild(spanFilterPrecio);
    filterPrecio.appendChild(inputFilterPrecio);
    filterPrecio.appendChild(buttonFilterPrecio);

    

  
    // Agregamos todo a la section
    filtros.appendChild(filtrosTitle);
    filtros.appendChild(spanFilterTamaño);
    filtros.appendChild(sizeFilterSelect);


    filtros.appendChild(filterPrecio);

  
    // Mostramos la section en app
    app.appendChild(filtros);
  }