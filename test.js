console.log("1. Створіть об'єкт 'bankAccount' з властивостями 'ownerName', 'accountNumber', 'balance'. Додайте до об'єкту метод 'deposit', який дозволяє додавати гроші на рахунок, та метод 'withdraw', який дозволяє знімати гроші з рахунку. Використайте cofirm() щоб поповнити рахунок або отримати готівку та prompt() щоб дізнатися сумму. Після проведення операції виводити повідомлення про залишок на рахунку. ");




const bankAccount = {
    ownerName: "no name",
    accountNumber: "33333",
    balance: 10000,

deposit(sum){
    if(sum > 0){
        this.balance += sum;
        alert(`поповнення завершено, балнс ${this.balance} гривень`);
    } else {
        alert("поповнення немажливо на 0 чи менше");
    }
},


withdraw(sum){
  if(sum <= 0){
    alert("списання на 0 немажливо");
  } else if (sum > this.balance) {
    alert("недастаньо коштів");
  } else {
    this.balance -= sum;
    alert(`списання завершеноб баданс ${this.balance} гривень`);
  }
},
};
