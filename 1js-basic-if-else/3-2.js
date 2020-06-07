/* 3.2 หลังจากทำระบบฝากเงินให้ธนาคารแล้ว ทางธนาคารจึงอยากให้เรา
ช่วยทำระบบสำหรับถอนตังด้วย โดยมีลักษณะดังนี้ 

ในระบบธนาคาร จะมี บัญชีเงินฝากอยู่ 3บัญชี

บัญชีแรก  เจ้าของชื่อ A id 01 password 123 มีเงิน อยู่ 2000
บัญชีที่สอง เจ้าของชื่อ b id 02 password 456 มีเงินอยู่ 3000
บัญชีที่สาม เจ้าของชื่อ c id 03 password 789 มีเงินอยู่ 4000 

 ผู้ใช้ต้องกรอก id กับ password ให้ถูกต้อง จึงจะสามารถกดตังได้
 กดตังแล้วเงินใน บัญชีต้องลด เงินใน กระเป๋าต้องเพิ่ม

 อัตราค่าบริการ ต่อการกดตัง1ครั้งคือ 50 บาท สำหรับ กดน้อยกว่า 1000 และ 70บาท สำหรับกดมากกว่า 1000

 กำหนดตัวแปรมาให้คือ
 id (prompt)
 password (prompt)
 name
 moneyInBank
 moneyInPocket = 0
 feeRate

 
 โฟลของการทำงาน

 

*/
let id = prompt("enter your id"),
    password,
    moneyInBank,
    moneyInPocket = 0,
    feeRate,
    withdraw;

function draw(name1, moneyInBank) {
    alert(name1 + " " + moneyInBank)
    withdraw = prompt("enter amount money that you want to withdraw");
    alert("Your withdraw money is " + withdraw)
    withdraw = Number(withdraw);
    if (withdraw !== 0) {
        if (withdraw < 1000) {
            feeRate = 50
        } else {
            feeRate = 70
        }
    } else {
        feeRate = 0
    }
    alert("Your fee rate is " + feeRate)
    moneyInPocket = withdraw;
    moneyInBank = moneyInBank - (feeRate + withdraw);
    alert("Your money in your pocket is " + moneyInPocket);
    alert("Your money in your bank account is " + moneyInBank);
}

if (id == "01" || id == "02" || id == "03") {
    password = prompt("enter your password");
    if (password == "123" && id == "01") {
        name1 = "A";
        moneyInBank = 2000;
        draw(name1, moneyInBank);
    } else if (password == "456" && id == "02") {
        name1 = "b";
        moneyInBank = 3000;
        draw(name1, moneyInBank);
    } else if (password == "789" && id == "03") {
        name1 = "c";
        moneyInBank = 4000;
        draw(name1, moneyInBank);
    }
}