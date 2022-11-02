// task 1
let arr = [5,3,8,22,77,2,7,1,90,45,32,11]

let min=arr[0];

for (let i = 0; i < arr.length; i++) 
{

    if(arr[i]<min){

        min=arr[i]

    }

}

console.log(`minimum digit: ${min}`)

// task 2

let max=arr[0];

for (let i = 0; i < arr.length; i++) 
{

    if(arr[i]>max){

        max=arr[i]

    }

}

console.log(`maximum digit: ${max}`)


// task 3
let min1=arr[0];
let minindex=0;

for (let i = 0; i < arr.length; i++) 
{

    if(arr[i]<min1){

        min1=arr[i]
        minindex=i;

    }

}

console.log(`index of minimum digit: ${minindex}`)

// task 4
let max1=arr[0];
let maxindex=0;

for (let i = 0; i < arr.length; i++) 
{

    if(arr[i]>max1){

        max1=arr[i]
        maxindex=i;

    }

}

console.log(`index of minimum digit: ${maxindex}`)


// task 5
let SumOfOddIndexNumbers=0;

for (let i = 1; i < arr.length; i+2) {
    
    SumOfOddIndexNumbers+=arr[i]
}

console.log(`Sum=${SumOfOddIndexNumbers}`)