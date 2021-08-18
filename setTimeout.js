function doSomething() {
    console.log(2222);
}
console.log(1111);
console.log(3333);
console.log(4444);
// setTimeout(doSomething, 4000);

// setTimeout(() => {
//     console.log('lazy');
// }, 4000);

setInterval(() => {
    console.log('doing it again');
}, 4000);

console.log(4444);
console.log(4444);
console.log(4444);