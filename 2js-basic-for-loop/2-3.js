/*
ให้เขียนโปรแกรมที่แสดงลำดับตัวที่ n ของลำดับ Fibonacci
ลำดับ Fibonacci คือ
0, 1, 1, 2, 3, 5, 8, 13, …
(ผลลัพธ์เกิดจากการบวกกันของสองตัวก่อนหน้า)

INPUT
n = 7
OUTPUT
8
-------------------
INPUT
n = 3
OUTPUT
1

*/

let first = 0;
let second =1;
let fibonacci = 1;

let n = +prompt("ลำดับ fibonacci")

  for(let i = 3; i <= n; i++){

     fibonacci = first + second;

     first = second
     second = fibonacci

  }

  alert(fibonacci)