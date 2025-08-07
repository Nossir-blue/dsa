let first = 0;
let second = 1;
let fibonacci = null;

console.log("=-=-=-=-FIBONACCI-=-=-=-=");

for(let i = 1; i <= 18; i++){
    fibonacci = first + second;
    console.log("======>",fibonacci);
    first = second;
    second = fibonacci;
}

console.log("=-=-=-=-=-=-=-=-=-=-=-=-=")