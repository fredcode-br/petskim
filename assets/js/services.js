const selectElemento = document.getElementById('selectedService');
const serviceNameElement = document.getElementById("serviceName");
const servicePriceElement = document.getElementById("servicePrice");
const selectedDateElement = document.getElementById("selectedDate");
const selectedTimeElement = document.getElementById("selectedTime");
const submitButton = document.querySelector("button[type='submit']");

let services;

const getData = async () => {
    try {
        const response = await fetch('../../db.json');
        const data = await response.json();
        services = data.services;
    } catch (error) {
        console.error('Erro ao ler o arquivo:', error);
    }
};

const start = async () => {
    await getData();
    services.map((s) => gerarOpcoes(s.name, s.id));
}

const gerarOpcoes = (name, id) => {
    const option = document.createElement('option');
    option.setAttribute('value', id)
    option.innerHTML = name;
    selectElemento.appendChild(option);
}

function updateFields() {
    const selectedOption = selectElemento.options[selectElemento.selectedIndex];
    const selectedServiceId = selectedOption.value;
    const selectedService = services.find((service) => service.id == selectedServiceId);
    const serviceNameValue = selectedService ? selectedService.name : '';
    const servicePriceValue = selectedService ? selectedService.preco : '';

    serviceNameElement.textContent = serviceNameValue;
    servicePriceElement.textContent = "R$ " + servicePriceValue.toFixed(2);
    submitButton.disabled = !selectedService;
}

start();

selectElemento.addEventListener("change", updateFields);

