'use strict'  //комментарий

let log = prompt("Введите логин","");
let pass = prompt("Введите пароль","");  

if(log == "admin" && pass == "password")
  alert("привет админ");
else {
  alert("самозванец");
  }

alert("Введите такие катеты и гипотенузу, чтобы они соответствовали прямоугольному треугольнику");
let a, b, c;
a = prompt("Катет 1:", "");
b = prompt("Катет 2:", "");
c = prompt("Гипотенуза:", "");
a = Number(a);
b = Number(b);
c = Number(c);

let result;

if (a**2 + b**2 == c**2)
{
  alert("Вы справились");
  result = 1;
}
else 
{
  alert("Вам не удалось");
  result = 0;
}

if (result === 1)
  {
    console.log("Правильно")
  let photo1 = document.createElement("img");
  photo1.src = "https://i.yapx.ru/KPG5N.gif";
  photo1.width = "400";
  photo1.height = "400";
  let div2 = document.createElement('div');
  div2.append(photo1);
  document.body.append(div2);
  let photo = document.createElement("img");
  photo.src = "http://img.crazys.info/files/i/2009.2.4/1233748819_11376803692639.jpg";
  photo.width = "450";
  photo.height = "400";
  let div1 = document.createElement('div');
  div1.append(photo);
  document.body.append(div1);
  }

if (result == false)
  {
    console.log("Неправильно")
    let photo1 = document.createElement("img");
  photo1.src = "https://pbs.twimg.com/media/D9_u0cJXYAESOm2.jpg";
  photo1.width = "500";
  photo1.height = "400";
  let div2 = document.createElement('div');
  div2.append(photo1);
  document.body.append(div2);
  let photo = document.createElement("img");
  photo.src = "https://sun9-27.userapi.com/impg/NbjdDZfELNu4pKrIcUNVpuTlWrLJlIsqHtkh9w/nRxirxJhAs0.jpg?size=604x604&quality=96&sign=27dba9d3499768172d4c525601a1b6ec&type=album";
  photo.width = "500";
  photo.height = "500";
  let div1 = document.createElement('div');
  div1.append(photo);
  document.body.append(div1);
  }
