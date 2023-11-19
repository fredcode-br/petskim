const productsList = document.querySelector('.products-list');
const servicesList = document.querySelector('.services-list');
let services, products;

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
    services.map((s) => createService(s.name,  s.urlImg));
    products.slice(0, 4).map((p) => createProductHome(p.title, p.price, p.urlImg));
}
 
const createService = (name, urlImg) => {
    const service = document.createElement('li');
    service.classList.add('service');
    service.innerHTML = `
        <a href="">
            <div class="service-image">
                <img src="${urlImg}" alt="banho">
            </div>
            <p>${name}</p>
        </a> 
    `
    servicesList.appendChild(service);
}

const createProductHome = (title, price, urlImg) => {
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