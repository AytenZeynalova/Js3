// // task 1
let arr = [5,3,8,22,77,2,7,1,90,45,32,11]

// let min=arr[0];

// for (let i = 0; i < arr.length; i++) 
// {

//     if(arr[i]<min){

//         min=arr[i]

//     }

// }

// console.log(`minimum digit: ${min}`)

// // task 2

// let max=arr[0];

// for (let i = 0; i < arr.length; i++) 
// {

//     if(arr[i]>max){

//         max=arr[i]

//     }

// }

// console.log(`maximum digit: ${max}`)


// // task 3
// let min1=arr[0];
// let minindex=0;

// for (let i = 0; i < arr.length; i++) 
// {

//     if(arr[i]<min1){

//         min1=arr[i]
//         minindex=i;

//     }

// }

// console.log(`index of minimum digit: ${minindex}`)

// // task 4
// let max1=arr[0];
// let maxindex=0;

// for (let i = 0; i < arr.length; i++) 
// {

//     if(arr[i]>max1){

//         max1=arr[i]
//         maxindex=i;

//     }

// }

// console.log(`index of minimum digit: ${maxindex}`)


// // task 5
// let SumOfOddIndexNumbers=0;

// for (let i = 1; i < arr.length; i+2) {
    
//     SumOfOddIndexNumbers+=arr[i]
// }

// console.log(`Sum=${SumOfOddIndexNumbers}`)

// task 6

// console.log(`Original array:${arr}`)
// let y
// let m
// if(arr.length%2==1){
//     m=(arr.length-1)/2+1
// }
// else{
//     m=arr.length/2
// }
// for(let i =0 ; i<m ; i++)
// {
// y=arr[i]
// arr[i]=arr[arr.length-i-1]
// arr[arr.length-i-1]=y
// }
// console.log(`Reversing array:${arr}`)

// task 7

// let count =0
// for(let i= 0; i<arr.length;i++){
//     if(arr[i]%2==1 || arr[i]%2==-1){
//         count++
//     }
// }
// console.log(`Array:${arr}\nOdd number count:${count}`)

// task 8

// console.log(`Original array:${arr}`);
// let y;
// let m;
// if (arr.length % 2 == 1) {
//   m = (arr.length - 1) / 2 ;
// } else {
//   m = arr.length / 2;
// }
// for (let i = 0; i < m; i++) {
//     y = arr[i];
//     if(arr.length%2==0){
//         arr[i] = arr[i+m];
//         arr[i+m] = y;
//     }
//     else{
//       arr[i] = arr[i+m+1];
//       arr[i+m+1] = y;
//     }
// }
// console.log(`Reversing array:${arr}`)


// task 9
// console.log(`Original array:${arr}`)
// let t=1
// for(let i=1; i<arr.length ;i++){
//   let m =i
//   for(let x=i-1;x>=0;x--){
//     if(arr[m]<arr[x])
//     {
//       let y= arr[m]
//       arr[m]=arr[m-1]
//       arr[m-1]=y
//       console.log(`     //Step${t}:  ${arr}`)
//       t++
//     }
//     m--
//   }

// }
// console.log(`Sorting array:${arr}`)



// task 10

// console.log(`Original array:${arr}`)
// let x=0
// let t=1
// while(x<=arr.length-1){
//     let m= 1
//     for(let i = 0;i<arr.length-x;i++){
//         if(arr[i]<arr[i+1]){
//           let y = arr[i]
//           arr[i]=arr[i+1]
//           arr[i+1]=y
//         }
//         console.log(`     //Step ${t}.${m}:  ${arr}`)
//         m++
//       }
//       x++
//       t++
// }
// console.log(`Sorting array:${arr}`)