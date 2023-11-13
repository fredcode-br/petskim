const productsList = document.querySelector('.products-list');
const servicesList = document.querySelector('.services-list');

const services = [
    {
        name: "Banho",
        urlImg: "./assets/img/bath.png"
    },
    {
        name: "Tosa",
        urlImg: "./assets/img/bath.png"
    },
    {
        name: "Adestramento",
        urlImg: "./assets/img/bath.png"
    },
    {
        name: "Estética",
        urlImg: "./assets/img/bath.png"
    }
]

const products = [
    {
        title: "Produto A",
        price: 15,
        urlImg: "./assets/img/product.png"
    },
    {
        title: "Produto B",
        price: 25,
        urlImg: "./assets/img/product.png"
    },
    {
        title: "Produto C",
        price: 35,
        urlImg: "./assets/img/product.png"
    },
    {
        title: "Produto D",
        price: 45,
        urlImg: "./assets/img/product.png"
    }
]


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

services.map((s) => createService(s.name,  s.urlImg));
products.map((p) => createProduct(p.title, p.price, p.urlImg));