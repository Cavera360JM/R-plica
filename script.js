// Personalizando o cursor
document.body.style.cursor = "pointer";

// Adicionando evento de clique para mudar a imagem de fundo
document.body.addEventListener("click", function() {
  document.body.style.backgroundImage = "url('https://w0.peakpx.com/wallpaper/351/764/HD-wallpaper-auto-deportivo-car-cars.jpg')";
});

// Função para adicionar carro à venda
function addCar() {
  const carList = document.getElementById('car-list');
  const carDiv = document.createElement('div');
  carDiv.classList.add('car');
  carDiv.style.backgroundColor = getRandomColor(); // Definir cor aleatória inicial
  carList.appendChild(carDiv);
}

// Função para obter cor aleatória
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Adicionar evento de clique ao botão Adicionar Carro
document.getElementById('add-car-button').addEventListener('click', addCar);

// Adicionar evento de mudança de cor ao checkbox
document.getElementById('change-color-checkbox').addEventListener('change', function() {
  const cars = document.querySelectorAll('.car');
  cars.forEach(function(car) {
    if (this.checked) {
      car.style.backgroundColor = getRandomColor();
    } else {
      car.style.backgroundColor = ''; // Restaurar cor padrão
    }
  });
});
