"use strict";
//Task#01
console.log("Task#01");
let Arr = [1, 2, 3, 4, 5];
function take_value(arr, index, value) {
    arr.splice(index, 0, 'Four');
    return arr;
}
console.log(Arr);
let newArray = take_value(Arr, 4, 'Four');
console.log("new Array", newArray);
//Task#02
console.log("Task#02");
function add_item(arr, index, value) {
    arr.splice(index, 0, 'Sugar 5kg');
    console.log("After adding items\n", arr);
}
function remove_item(arr, index) {
    arr.splice(index, 1);
    console.log("After removing items\n", arr);
}
function updating_item(arr, index, value) {
    arr.splice(index, 1, 'Flour 20kg');
    console.log("After updating items\n", arr);
}
let cart = ["Apple 1kg", "Banana 1 dozen", "Mango 1 kg", "Flour 10 kg", "Salt 1 packet"];
console.log("List of items", cart);
console.log("After modification");
add_item(cart, 5, 'Sugar 5 kg');
remove_item(cart, 4);
updating_item(cart, 3, 'Flour 20kg');
//Task#03
console.log("Task#03");
console.log("First 25 numbers are");
let allnumbers = [];
let count = 1;
while (count <= 25) {
    allnumbers.push(count);
    count++;
}
console.log(allnumbers);
//Task#04
console.log("Task#04");
console.log("First 10 even numbers");
let evenNumbers = [];
let number = 0;
count = 0;
while (count < 10) {
    if (number % 2 === 0) {
        evenNumbers.push(number);
        count++;
    }
    number++;
}
console.log(evenNumbers);
//Task#05
console.log("Task#05");
let fact = 1;
function pos_int(int) {
    let i = 1;
    while (i <= int) {
        fact = fact * i;
        i++;
    }
    return fact;
}
let new_num = pos_int(4);
console.log("The factorial of 4 is ", new_num);
//Task#06
console.log("Task#06");
let numbers = [-1, 2, -3, -4, 5, 6, -9, 10, -22];
console.log("Array with negative numbers:", numbers);
let i = 0;
while (i < numbers.length) {
    if (numbers[i] < 0) {
        numbers.splice(i, 1);
    }
    else {
        i++;
    }
}
console.log("The array after removing negative numbers is", numbers);
//Task#07
console.log("Task#07");
function sum_of_array(arr) {
    let sum = 0;
    i = 0;
    while (i < arr.length) {
        sum = sum + arr[i];
        i++;
    }
    return sum;
}
let sumArray = [1, 2, 3, 4, 5];
console.log("Array to perform sum: ", sumArray);
let resultant = sum_of_array(sumArray);
console.log("The sum of array is", resultant);
//Task#08
console.log("Task#08");
let temp_Cel = [23, 25.5, 30, 35];
console.log("Temperature in Celsius:\n", temp_Cel);
let j;
let temp_Farn = [];
i = 0;
while (i < temp_Cel.length) {
    for (j = 0; j < temp_Cel.length; j++) {
        temp_Farn[j] = (temp_Cel[i] * 9 / 5) + 32;
        i++;
    }
}
console.log("Temperature in Farnhenheit:\n", temp_Farn);
//Task#09
console.log("Task#09");
let naturalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Array with odd numbers:", naturalArray);
i = 0;
while (i < naturalArray.length) {
    if (naturalArray[i] % 2 != 0)
        naturalArray.splice(i, 1);
    else
        i++;
}
let removing_odd = naturalArray;
console.log("After removing odd numbers ", removing_odd);
