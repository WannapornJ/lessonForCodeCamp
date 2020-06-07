/* 3.1
 ธนาคารแห่งหนึ่งต้องการโปรแกรมรองรับเวลามีลูกค้ามาฝากเงิน
 โดยโปรแกรมต้องแจ้งยอดเงินที่ฝากเข้ามาและคำนวณดอกเบี้ยพร้อมกับคิดยอดรวมเงินในบัญชีให้เสร็จสรรพ 
  มีเงื่อนไขดังนี้
 ถ้าฝากเงินมาน้อยกว่า 1000 ให้ดอกเบี้ย 10% 
    ถ้าอยุ่ระหว่าง 1000 ถึง 2000 ให้ 20%
    ถ้าอยู่ระหว่าง  2000 ถึง 3000 ให้คิด 30%
    ถ้ามากกว่า 3000 ให้คิด 40%
    
     ต้องมีตัวแปรในรูปแบบนี้
     deposit (prompt)
     interestRate
     interest
     totalMoneyInBank

     อธิบายโฟลของการทำงาน
    หลังจากเกิดการ deposit ขึ้น ให้ระบบ 
    alert ครั้งที่1 แจ้งยอดที่ deposit 
    alert ครั้งที่2 แจ้ง อัตราดอกเบี้ยที่ได้ 
    alert ครั้งที่3 แจ้ง ดอกเบี้ยที่ได้รับ  
    alert ครั้งที่4 แจ้งยอดเงินรวมในธนาคาร

       สมมุติ input deposit 1500  
             
     output =      alert 1500
                   alert คุณได้รับดอกเบี้ย 10%
                   alert คุณได้รับอัตราดอกเบี้ย 150 บาท
                   alert เงินในธนาคารรวมทั้งหมด 1650 บาท

    ให้ลองจัดวางตัวแปรด้วยตัวเอง

     */
let deposit = prompt("enter your amount money"),
    interestRate,
    interest,
    totalMoneyInBank;

function calMoney(deposit, interestRate) {
    interest = deposit * interestRate;
    totalMoneyInBank = deposit + interest;
    alert(`Your interest rate is ` + interestRate);
    alert(`Your interest is ` + interest);
    alert("Your total money in bank is " + totalMoneyInBank);
}

alert("Amount money : " + deposit);
if (deposit < 1000) {
    interestRate = 0.1;
    calMoney(Number(deposit), interestRate);
} else if (deposit < 2000) {
    interestRate = 0.2;
    calMoney(Number(deposit), interestRate);
} else if (deposit < 3000) {
    interest = 0.3;
    calMoney(Number(deposit), interestRate);
} else {
    interest = 0.4;
    calMoney(Number(deposit), interestRate);
}