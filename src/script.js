const countElement = document.getElementById('viewersCount');
const regionElement = document.getElementById('region');
// contagem inicial de visualizações
const initialCount = 400;

let count = initialCount;
let region = '--';
let interval = null;

document.addEventListener("DOMContentLoaded", () => {
  changeCountRandomly();
  getUserLocation();
})

// gera um número aleatório para a contagem
const getRandomCountNumber = () => {
  const random = Math.random();
  const intervals = [1, 2, 3, 4, 5]
  const changeInterval = intervals[Math.floor(Math.random() * intervals.length)];
  
  if (random > 0.4) {
    count += changeInterval;
  } else {
    count -= changeInterval;
  }

  return count;
}

// altera a contagem de visualizações a cada intervalo de tempo aleatório
const changeCountRandomly = () => {
  const randomCount = getRandomCountNumber();
  const MAX_INTERVAL = 3000;
  const MIN_INTERVAL = 500;

  let randomInterval = Math.round(Math.random() * (MAX_INTERVAL - MIN_INTERVAL)) + MIN_INTERVAL;

  clearInterval(interval);
  
  interval = setInterval(() => {
    countElement.innerText = randomCount;
    changeCountRandomly();
  }, randomInterval);
}

// gera um intervalo de tempo aleatório
const randomInterval = () => {
  const intervals = [1000, 2000, 3000, 4000, 5000];

  return intervals[Math.floor(Math.random() * intervals.length)];
}

// obtém a cidade do usuário através da API geolocation-db
const getUserLocation = () => {
  fetch('https://geolocation-db.com/json/')
  .then(response => response.json())
  .then(data => {
    regionElement.innerText = data.city;
  })
}
