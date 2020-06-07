/* 2.3  ลองตรวจสอบว่าข้อ  2.2มีบัครึป่าว 
ให้เพื่อนๆลอง ก๊อปโค๊ดจากข้อที่ 2.2มา แล้วทดสอบดังนี้

นำโค๊ดไปรันบนเบาเซอร์ 
question 1 ให้ตอบกลับไปว่า learning
question 2 ให้ตอบกลับไปว่า food
 สมมุติ เว็บไซต์ตอบกลับมาว่า yummy คงแปลกน่าดู
 เพราะมันไม่เกี่ยวเนื่องกัน   จงแก้ไขบัคที่เกิดขึ้นนี้
*/

let question1 = prompt(
    "What are you doing. Please enter learning, eating or playing  "
);
let question2;

if (question1 == "learning") {
    question2 = prompt('Waht are you learn?')
    if (question2 == "javascript") {
        alert('cool')
    }
} else if (question1 == "eating") {
    question2 = prompt('what are you eat?')
    if (question2 == "food") {
        alert('yummy')
    }
} else if (question1 == "playing") {
    question2 = prompt('what are you play?')
    if (question2 == "game") {
        alert('ohh')
    }
}