console.log("Exercise #3");

/* Write a program to compute the sum and product (multiplication) of an array of numbers. Print out the sum and the product.
Example: Given an array [1, 2, 3, 4] The sum is 10. The product is 24. */

const numbersSum = [1, 2, 3, 4];
const sum = (array) => {
    let sumatoria = 0;
    for (let index = 0; index < array.length; index++) {
        sumatoria= sumatoria + array[index];
        
    }
    return sumatoria;
}
console.log(sum(numbersSum));

const numbersProduct = [1, 2, 3, 4];
const product = (array) => {
    let producto = 1;
    for (let index = 1; index < array.length; index++) {
        producto= producto * array[index];
        
    }
    return producto;
}
console.log(product(numbersProduct));  