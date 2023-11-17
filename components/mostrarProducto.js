export const mostrarProducto = (product, productList) => {
        const productElement = document.createElement('div');
        productElement.innerHTML = `
    <div class='product-card'>
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <h4>€${product.price}</h4>
            <p>Composición: ${product.composición}</p>
            <p>Tamaño: ${product.tamaño}</p>
            <p>Técnica de estampación: ${product.tecnica_de_estampacion}</p>
            <p>Vendido por: ${product.seller}</p>
    </div>
    `;
        productList.appendChild(productElement);
};