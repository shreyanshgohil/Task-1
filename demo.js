// "use strict";

// // let str =  'hiii i am shreyansh';
// // // let demo = [...str]
// // // console.log(demo)
// // // console.log(String(demo))

// // let str2 =str.replace(str[0],'ninja')
// // console.log(str2)

// // let myStr = "1,2,3,4";
// // myStr= myStr.split(',').map((el)=>{
// //     return Number(el)
// // })
// // myStr = myStr.split(",").map(Number);
// // console.log(myStr);

// // const demo = [1, 2, 3, 4, 5, 6, 7, 8];
// // const demo2 = [];
// // for (let i = 0; i < demo.length; i = i + 2) {
// //   demo2.push([demo[i], demo[i + 1]]);
// // }
// // // console.log(demo2);

// // const demo3 = [];
// // for (let i = 0; i < demo2.length; i++) {
// //   // console.log(demo2[i])
// //   //    console.log(demo2[i])
// //   const [a, b] = demo2[i];
// //   console.log(a, b);
// //   console.log(a + b);
// // }

// // const demo= [1,2,3,4,5,6]
// // let arrLength = demo.length /2 ;
// // if(Number.isInteger(arrLength)){
// // console.log("true");
// // }
// // else{
// //     console.log("false")
// // }

// // var count = 0;

// // function numberOf2sinRange(n) {
// //   var s = "";
// //   for (var i = 0; i < n + 1; i++) {
// //     s += String(i);
// //   }

// //   for (var i = 0; i < s.length; i++) {
// //     if (s.charAt(i) == "2") {
// //       count++;
// //     }
// //   }
// //   return count;
// // }

// // // Driver code
// // var n = 30;

// // document.write(numberOf2sinRange(23));
// // console.log(count);
// // const myNum = 20;

// // const number = 22;
// // let myCount = 0;
// // let dump = true;
// // for (let i = 0; i <= number; i++) {
// //   i = String(i);
// //   dump = true;
// //   for (let j = 0; j < i.length; j++) {
// //     if (i[j] == "2") {
// //       myCount++;
// //       break;
// //     }

// //   }
// // }

// // console.log(myCount);
// // const demo = {
// //   firstName: "shreyansh",
// //   lastName: "gohil",
// //   age: 21,
// // };
// // const movments = [10, 20, 30, 70, 23];
// // const doller = 70;

// // const dollerArr = movments.map((movment) => {
// //   return Math.round((movment / doller) * 100) / 100;
// // });
// // console.log(dollerArr);

// // const myMoney = [];
// // for (const mov of movments) {
// //   myMoney.push(mov / 70);
// // }
// // console.log(myMoney);

// // movments.map((mov,i,arr)=>{
// //     console.log(arr[i])
// // })

// const demo = [1, 8, 2, 3, 3, 3, 3, 3, 3, 4, 5, 5, 5, 5, 5];
// let demo2 = [];
// const swap = () => {
//   for (let i = 0; i < demo.length; i++) {
//     if (demo[i] > demo[i + 1]) {
//       let temp = demo[i];
//       demo[i] = demo[i + 1];
//       demo[i + 1] = temp;
//     }
//   }
// };

// for (let i = 0; i < demo.length; i++) {
//   swap();
// }

// const saveDupc = () => {
//   for (let i = 0; i < demo.length; i++) {
//     if (demo[i] === demo[i + 1]) {
//       demo2.push(demo[i]);
//     }
//   }
// };
// // const removeDupc = () => {
// //   for (let i = 0; i < demo2.length; i++) {
// //     if (demo2[i] === demo2[i + 1]) {
// //       demo2.pop(demo[i]);
// //       removeDupc();
// //     }
// //   }
// // };
// const removeDupc = () => {
//   demo2= demo2.filter((iteam,index)=>{
//       return demo2.indexOf(iteam) === index;
//   })
// };
// saveDupc();
// removeDupc();

// console.log(demo);
// console.log(demo2);

// // // console.log(ninja)
// // var arr = ["apple", "mango", "apple", "orange", "mango", "mango"];
// // let filArr = [];
// // function removeDuplicates(arr) {
// //   filArr = arr.filter((item, index) => {
// //     return arr.indexOf(item) === index;
// //   });
// // }

// // removeDuplicates(arr);
// // console.log(filArr);

// // console.log();

// const indexArr = [];

// const enterIndex = document.querySelector(".btn__enter--index");
// const sumIndex = document.querySelector(".btn__add--index");
// const indexMessage = document.querySelector(".add--index ");
// let int = false;

// enterIndex.addEventListener("click", () => {
//   const inputPrefix = Number(
//     document.querySelector(".input--index--add").value
//   );
//   indexArr.push(inputPrefix);
//   indexMessage.textContent = indexArr;
// });

// sumIndex.addEventListener("click", () => {
//   const indexArr2 = [];
//   const indexArr3 = [];
//   let myDataa = 0;

  
//   const funcEven = (evenArr) => {
//     const indexArr2 = [];
//     const indexArr3 = [];
//     for (let i = 0; i < evenArr.length; i = i + 2) {
//       indexArr2.push([evenArr[i], evenArr[i + 1]]);
//     }
//     for (let i = 0; i < indexArr2.length; i++) {
//       const [a, b] = indexArr2[i];
//       indexArr3.push(a + b);
//     }
//     indexMessage.textContent = indexArr3;
//   };

//   const funcOdd = (oddArr) => {
//     const indexArr2 = [];
//     const indexArr3 = [];
//     for (let i = 0; i < oddArr.length; i = i + 2) {
//       indexArr2.push([oddArr[i], oddArr[i + 1]]);
//     }
//     let lastEl = indexArr2.pop()[0] * 2;

//     for (let i = 0; i < indexArr2.length; i++) {
//       const [a, b] = indexArr2[i];
//       indexArr3.push(a + b);
//     }
//     indexArr3.push(lastEl);
//     indexMessage.textContent = indexArr3;
//   };

//   let int = Number.isInteger(indexArr.length / 2);

//   if (int) {
//     funcEven(indexArr);
//   } else {
//     funcOdd(indexArr);
//   }
// });

