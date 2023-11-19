const productsList = document.querySelector('.products');
let products;

const getData = async () => {
  try {
    const response = await fetch('../../db.json');
    const data = await response.json();
    services = data.services;
    products = data.products;
  } catch (error) {
    console.error('Erro ao ler o arquivo:', error);
  }
};

const start = async () => {
    await getData();
    products.map((p) => createProduct(p.title, p.price, p.urlImg));
}

const createProduct = (title, price, urlImg) => {
    const product = document.createElement('li');
    product.classList.add('product');
    product.innerHTML = `
        <div class="product-image">
            <img src="${urlImg}" alt="produto">
        </div>
        <p>${title}</p>
        <p class="price">R$${price}</p>
        <button>Comprar</button>
    `
    productsList.appendChild(product);
}


start()