/* 2.3  ลองตรวจสอบว่าข้อ  2.2มีบัครึป่าว 
ให้เพื่อนๆลอง ก๊อปโค๊ดจากข้อที่ 2.2มา แล้วทดสอบดังนี้

นำโค๊ดไปรันบนเบาเซอร์ 
question 1 ให้ตอบกลับไปว่า learning
question 2 ให้ตอบกลับไปว่า food
 สมมุติ เว็บไซต์ตอบกลับมาว่า yummy คนแปลกน่าดู
 เพราะมันไม่เกี่ยวเนื่องกัน   จงแก้ไขบัคที่เกิดขึ้นนี้
*/

let question1 = prompt(
  "What are you doing. Please enter learning, eating or playing  "
);

console.log("Now question1 have value =" + question1);
let question2;

if (question1 === "learning") {
  alert("great ");
  question2 = prompt("what are you learn. Please enter javascript");
} else if (question1 === "eating") {
  alert("wow");
  question2 = prompt("what are you eat. Please enter food");
} else if (question1 === "playing") {
  alert("oops");
  question2 = prompt("what are you play? Please enter game");
}

console.log("Now question2 have value = " + question2);

if (question1 === "learning" && question2 === "javascript") {
  alert("cool");
} else if (question1 === "eating" && question2 === "food") {
  alert("yummy");
} else if (question1 === "playing" && question2 === "game") {
  alert("ohh");
} else if (question1 === "learning" && question2 === "food") {
  alert("you cannot learn food ");
}
