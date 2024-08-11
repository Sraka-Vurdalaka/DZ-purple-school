function updateTimer() {
  // Получаем текущую дату и время
  let now = new Date();
  // Устанавливаем дату окончания года
  let endOfYear = new Date(now.getFullYear(), 11, 31);
  // Вычисляем разницу между текущим временем и концом года
  let difference = endOfYear.getTime() - now.getTime();
  // Переводим миллисекунды в дни, часы, минуты и секунды
  let monthes = Math.floor(difference/ (1000  *  60  *  60  *  24 * 30));
  let days = Math.floor(difference / (1000  *  60  *  60  *  24));
  let hours = Math.floor((difference % (1000  *  60  *  60  *  24)) / (1000  *  60  *  60));
  let minutes = Math.floor((difference % (1000  *  60  *  60)) / (1000  *  60));
  let seconds = Math.floor((difference % (1000  *  60)) / 1000);
  

  let month = document.querySelector('.monthes'); 
  let day = document.querySelector('.days');    
  let hour = document.querySelector('.hours'); 
  let minute = document.querySelector('.minutes');  
  let second = document.querySelector('.seconds');
  
  // Вывод элементов в браузер
  month.innerHTML = monthes;
  hour.innerHTML = hours;
  day.innerHTML = days;
  minute.innerHTML = minutes;
  second.innerHTML = seconds;

}

// Запускаем таймер
setInterval(updateTimer, 1000);