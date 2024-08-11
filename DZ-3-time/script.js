'use script';
function calculateAge(dateOfBirth) {
  // Преобразуем строку в объект Date
let birthDate = new Date(dateOfBirth);
  // Получаем текущую дату
let currentDate = new Date();
  // Вычисляем разницу в днях
let ageInDays = Math.floor((currentDate - birthDate) / (1000 * 60 * 60 * 24));
  // Переводим дни в годы, месяцы и дни
let age = Math.floor(ageInDays / 365);
let months = Math.floor(ageInDays % 365 / 30);
 let days = ageInDays % 365 % 30;
  // Возвращаем возраст в формате "год-месяц-день"
  return `${age}-${months}-${days}`;
}

let userAge = calculateAge('1979-07-01');
console.log(`Ваш возраст: ${userAge}`);


// Упражнение

// const user = {
//   name: 'Vasya',
//   birthday: '12/23/2022'
// }
    
// let userData = user.birthday;
// userData = userData.split('/');
// let newUserData = userData.map(elem => Number(elem)).reverse().join(' ');
// console.log(newUserData);

// let date = new Date();
// let nowData = `${date.getFullYear()} ${date.getMonth()+1} ${date.getDate()} `;

// if (newUserData == nowData) {
//   console.log(true);
// }
// else {
//   console.log(false);
// }