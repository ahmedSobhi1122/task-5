"use strict";

//Q1
//print even numbers up to 10
for (let i = 0; i <= 10; i += 2) {
    console.log(i);
}
//print even numbers up to 10,000
for (let i = 0; i <= 10000; i += 2) {
    console.log(i);
}

//Q2
for(let i = 1; i <=10; i++){
    let row = "";
    for(let j = 1; j <=12; j++){
        row += `${i} x ${j} = ${i*j} `;
        if(j!=12){
            row += ', ';
        }  
    }
    console.log(row);
}

//Q3
function remove_space(str){
    let s = "";
    for(let i = 0; i < str.length; i++){
        if(str[i] != " "){
            s += str[i];
        }
    }
    return s;
}
//test
// let str = "a h m e d ";
// str = remove_space(str);
// console.log(str);

//Q4
function isdiv10(num) {
    console.log((num % 10 === 0));
}

//test
// isdiv10(100);
// isdiv10(5);

//Q5
function vowels(str) {
    let cnt = 0;
    for(let char of str){
        if(char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u'){
            cnt++;
        }
    }
    return cnt;
}


//test
// console.log("Number of vowels:",vowels("ahmed"));