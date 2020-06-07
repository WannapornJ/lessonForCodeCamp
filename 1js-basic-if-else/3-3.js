/*
3.3 โจทย์ข้อนี้จะลองให้เพื่อนๆออกแบบตัวแปร และโฟลของโคดกันเอง
 ธนาคารต้องการโปรแกรมสำหรับเอาไว้ให้ลูกค้า จ่ายหนี้สินที่ค้างไว้อยู่
โดยในระบบมีคนที่ยืมเงินไป 3 คนคือ
   นาย A  idใบชำระหนี้ 01  ยอดค้างชำระ 2000
   นาย B idใบชำระหนี้ 02  ยอดค้างชำระ 3000
   นาย C idใบชำระหนี้ 03  ยอดค้างชำระ 4000

   ธนาคารต้องการโปรแกรมที่ถามหาidชำระหนี้ และต้องรอให้ลูกค้ายืนยันก่อนว่าเค้าเป็นเจ้าของธุรกรรมโดยแจ้งชื่อเจ้าของไอดีที่กรอกมา
   ถ้ายืนยันว่าเป็นเจ้าของ ระบบจะโชว์ยอดค้างชำระ และ มีการถามถึงยอดที่ต้องการชำระ มีการรอการยืนยีนว่าจะชำระ ถ้ายืนยันการชำระ จะมีการแจ้งยอดหนี้คงเหลือ แล้วกร่าวขอบคุณกับเจ้าของ
   บัญชี

*/

let id, name1, amount, debtBalance, paid, balance;

id = prompt('enter your invoice id');

function pay(debtBalance) {
    paid = prompt('please enter your amount money to paid this debt');
    if (paid <= debtBalance) {
        let conPaid = confirm("press ok to confirm the payment")
        if (conPaid == true) {
            balance = debtBalance - paid;
            alert("Your debt balance is " + balance);
            alert("Thank you for your payment");
        } else {
            alert('payment cancel!!')
        }
    }
}

if (id == 01 || id == 02 || id == 03) {
    name1 = prompt('enter your name');
    if (name1 == "A" && id == 01) {
        debtBalance = 2000
        alert("your outstanding balance is " + debtBalance);
        pay(debtBalance);
    } else if (name1 == "B" && id == 02) {
        debtBalance = 3000
        alert("your outstanding balance is " + debtBalance);
        pay(debtBalance);
    } else if (name1 == "C" && id == 03) {
        debtBalance = 4000
        alert("your outstanding balance is " + debtBalance);
        pay(debtBalance);
    }
}