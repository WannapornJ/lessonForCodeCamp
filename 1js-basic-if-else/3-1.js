/* 3.1
 ธนาคารแห่งหนึ่งต้องการโปรแกรมรองรับเวลามีลูกค้ามาฝากเงิน
 โดยโปรแกรมต้องแจ้งยอดเงินที่ฝากเข้ามาและคำนวณดอกเบี้ยพร้อมกับคิดยอดรวมเงินในบัญชีให้เสร็จสรรพ 
  มีเงื่อนไขดังนี้
 ถ้าฝากเงินมาน้อยกว่า 1000 ให้ดอกเบี้ย 10% 
    ถ้ามากกว่า 1000 แต่ น้อยกว่า 2000 ให้ 20%
     ถ้ามากกว่า 2000 แต่น้อยกว่า 3000 ให้คิด 30%
     ถ้ามากกว่า 3000 ให้คิด 40%
    
     ต้องมีตัวแปรในรูปแบบนี้
     deposit (prompt)
     interestRate
     interest
     totalMoneyInBank
     
     อธิบายโฟลของการทำงาน
    หลังจากเกิดการ deposit ขึ้น ให้ระบบ 
    alert ครั้งที่1 แจ้งยอดที่ deposit 
    alert ครั้งที่2 แจ้ง อัตราดอกเบี้ยที่ได้  ต้องเป็นการแจ้งแบบเป็นเปอร์เซ็น เช่น คุณได้รับดอกเบี้ย 10%
    alert ครั้งที่3 แจ้ง ดอกเบี้ยที่ได้รับ  
    alert ครั้งที่4 แจ้งยอดเงินรวมในธนาคาร

    ให้ลองจัดวางตัวแปรด้วยตัวเอง

     */
let interestRate;
let interest;
let totalMoneyInBank;

let deposit = prompt("คุณต้องการฝากเงินเท่าไร");

alert("คุณฝากเงินมา" + deposit + "บาท");

if (deposit < 1000) {
  interestRate = 10;
  interest = (deposit * interestRate) / 100;
  totalMoneyInBank = Number(deposit) + Number(interest);
  alert("คุณได้รับดอกเบี้ยในอัตรา" + interestRate + "%");
  alert("คุณได้รับดอกเบี้ย" + interest + "บาท");
  alert("ยอดเงินรวมในบัญชี" + totalMoneyInBank + "บาท");
}

if (deposit < 2000) {
  interestRate = 20;
  interest = (deposit * interestRate) / 100;
  totalMoneyInBank = Number(deposit) + Number(interest);
  alert("คุณได้รับดอกเบี้ยในอัตรา" + interestRate + "%");
  alert("คุณได้รับดอกเบี้ย" + interest + "บาท");
  alert("ยอดเงินรวมในบัญชี" + totalMoneyInBank + "บาท");
}

if (deposit < 3000) {
  interestRate = 30;
  interest = (deposit * interestRate) / 100;
  totalMoneyInBank = Number(deposit) + Number(interest);
  alert("คุณได้รับดอกเบี้ยในอัตรา" + interestRate + "%");
  alert("คุณได้รับดอกเบี้ย" + interest + "บาท");
  alert("ยอดเงินรวมในบัญชี" + totalMoneyInBank + "บาท");
}

if (deposit > 3000) {
  interestRate = 40;
  interest = (deposit * interestRate) / 100;
  totalMoneyInBank = Number(deposit) + Number(interest);
  alert("คุณได้รับดอกเบี้ยในอัตรา" + interestRate + "%");
  alert("คุณได้รับดอกเบี้ย" + interest + "บาท");
  alert("ยอดเงินรวมในบัญชี" + totalMoneyInBank + "บาท");
}
