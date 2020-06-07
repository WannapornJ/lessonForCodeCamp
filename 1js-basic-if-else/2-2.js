/* 2.2 
จงเขียนเงื่อนไข  โดยใช้ if else ต่อจาก ข้อ 2.1 นำโค๊ด if else จาก 2.1 มาใช้ต่อ     

  1)ถ้าผู้ใช้งานตอบกลับมาว่า learning ให้ questionที่ 2 promt ไปถามต่อว่า   what are you learn ? 
        ถ้าตอบกลับมาว่า javascrpit  ให้ alert ว่า cool

2) ถ้าผู้ใช้งานตอบกลับมาว่า eating ให้ ให้ questionที่ 2 promt ไปถามต่อว่า  what are you eat ?
     ถ้าตอบกลับมาว่า food ให้ alert ว่า yummy

3)ถ้าผู้ใช้งานตอบกลับมาว่า playing ให้ ให้ questionที่ 2 promt ไปถามต่อว่า what are you play ?
    ถ้าตอบกลับมาว่า game ให้ alrert ว่า ohh 

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