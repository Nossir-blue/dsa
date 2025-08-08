let first = 0;
let second = 1;
let fibonacci = null;

console.log("=-=-=-=-FIBONACCI-=-=-=-=");

function Fibonacci(first, second){
    fibonacci = first + second;
    console.log("======>",fibonacci);
    first = second;
    second = fibonacci;
    Fibonacci()
}

console.log("=-=-=-=-=-=-=-=-=-=-=-=-=")