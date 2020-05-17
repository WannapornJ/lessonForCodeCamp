/* 2.จงเขียนเงื่อนไข โดยใช้ if ,else    ตั้งคำถามกับผู้ใช้งานหน้าเว็บโดยมี ตัวเลือกให้ตอบ คือ
 learning eating playing

 1) ถ้าผู้ใช้งาน ตอบ learning  ให้ alert ว่า great
    2)    ถ้าตอบว่า eating ให้ alert ว่า  wow
      3)  ถ้าตอบว่า playing ให้ alert ว่า oops */

let question1 = prompt(
  "What are you doing. Please enter learning, eating or playing  "
);

if (question1 === "learning") {
  alert("great ");
} else if (question1 === "eating") {
  alert("wow");
} else if (question1 === "playing") {
  alert("oops");
}
