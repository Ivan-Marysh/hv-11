console.log("1. Створіть об'єкт 'bankAccount' з властивостями 'ownerName', 'accountNumber', 'balance'. Додайте до об'єкту метод 'deposit', який дозволяє додавати гроші на рахунок, та метод 'withdraw', який дозволяє знімати гроші з рахунку. Використайте cofirm() щоб поповнити рахунок або отримати готівку та prompt() щоб дізнатися сумму. Після проведення операції виводити повідомлення про залишок на рахунку. ");




const bankAccount = {
  ownerName: "Jack Blue",
  accountNumber: "33333",
  balance: 10000,

deposit(){
  const sum = Number(prompt("Введіть суму для поповнення"));
  if(isNaN(sum) || sum <= 0){   
      alert("поповнення немажливо на 0 чи менше");
  } else {
    this.balance += sum;
    alert(`поповнення завершено, баланс ${this.balance} гривень`);
  }
},


withdraw(){
  const sum = Number(prompt("Введіть суму для отримання коштів"));
if(isNaN(sum) || sum <= 0){
  alert("списання на 0 немажливо");
} else {}
    let {balance} = this;
if (sum > balance) {
  alert("недастанточно коштів");
} else {
  this.balance -= sum;
  alert(`списання завершено баланс ${this.balance} гривень`);
}
},
};

bankAccount.deposit();
bankAccount.withdraw();


console.log("2. Створіть об'єкт weather з властивостями temperature, humidity, windSpeed. Додайте до об'єкту метод, який повертає true, якщо температура нижче 0 градусів Цельсія, та false, якщо температура вище або рівна 0 градусів Цельсія. Температуру потрібно отримати з prompt(). Якщо метод повернув true вивести повідомлення “температура нижче 0 градусів Цельсія” і навпаки");


const weather = {
  temperature: null,
  humidity: 60,
  windSpeed: 10,

  searchTemperature(){
    this.temperature = Number(prompt("Введіть температуру"));

    const {temperature} = this;

    if (temperature < 0) {
        alert("температура ниже 0");
        return true;
    } else {
        alert("температура більше 0");
        return false;
    }
  }
};

 if(weather.searchTemperature()){
      console.log("температура ниже 0");
 }else{
        console.log("температура більше 0");
      }

console.log("3. Створіть об’єкт user, який буде мати властивості name, email, password. Додайте метод login, який буде перевіряти правильність введеного email та password. ");

const user = {
  name: "Vadym",
  email: "vadym.lviv@gmail.com",
  password: "vadym2012",

  login(){
   const inputEmail = prompt("Введіть email");
   const inputPassword = prompt("Введіть пароль");

   const {email, password} = this;

   if(inputEmail === email && inputPassword === password){
    alert(`Вітаю ${this.name} ви успішно увійшли`);
   } else{
    alert(`Невірний пароль чи email`);
   }
  },
};

user.login();

console.log("4. Створіть об'єкт movie з властивостями title, director, year, rating. Додайте до об'єкту метод, який повертає true, якщо рейтинг фільму вище 8, та false, якщо рейтинг фільму 8 або нижче. Вивести значення властивостей в консоль.");


const movie = {
    title: "Пригоди Паддінгтона",
    director: "Пол Кінг",
    year:  2014,
    rating:  7.8,

    isHighlyRated(){

      let {rating} = this

        if (this.rating < 8) {
            return false;
        } else {
            return true;
        }
    }
}

console.log("назва:", movie.title);
console.log("Режисер:", movie.director);
console.log("Рік:", movie.year);
console.log("Рейтинг:", movie.rating);
console.log("Фільм має дуже високий рейтинг?", movie.isHighlyRated());