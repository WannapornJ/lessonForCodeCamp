/* จงเขียน while loop ต่อไปนี้ให้อยู่ในรูปแบบ for loop */

//1

let i = 0;

while (i < 5) {
  alert(i);

  i++;
}

for (let i = 0; i < 5; i++) {
  alert(i);
}

/* <<------------------------->>*/

//2

let a = 10;

let b = 30;

let i = b - a;

while (i < b) {
  alert(i);
  i++;
}
let b = 30;
let a = 10;

for (let i = b - a; i < b; i++) {
  alert(i);
}

/* <<------------------------->>*/

//3

let i = 0;
let number = 0;
while (i < 5) {
  number += i * 2;
  alert(number);
  i++;
}

let number = 0;

for (let i = 0; i < 5; i++) {
  number += i * 2;
  alert(number);
}
