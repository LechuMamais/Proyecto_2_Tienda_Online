export function Header(app) {
  // Creamos un elemento header
  var header = document.createElement('header');

  // Creamos un elemento link que contendrá el logo de la marca
  var link = document.createElement('a');
  link.setAttribute('href','#')

  // Creamos un elemento img
  var imagen = document.createElement('img');
  imagen.src = 'https://helloarde.com/cdn/shop/files/logo_016a3a16-6767-4beb-bb17-aea233711cad_95x@2x.jpg?v=1624630058'; // Reemplaza con la ruta correcta de tu imagen
  imagen.alt = 'Studio.Arde';

  // Agregamos el título y la imagen al header
  header.appendChild(link);
  link.appendChild(imagen);

  // Pintamos el header en el app
  app.appendChild(header);
}