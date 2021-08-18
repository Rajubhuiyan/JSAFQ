// function count(num) {
//     if (num % 2 == 0) {
//         console.log(num, 'this is even number');
//     }
//     else{
//         console.log(num, 'This is odd Number');
//     }
// }

// age = [10, 11, 12, 13, 14, 15];
// function evenifyAll(age) {
// for (let i = 0; i < age.length; i++) {
//     const element = age[i];
//     count(element);
// }
// }
// evenifyAll(age);




function find(num) {
    for (let i = 0; i < num.length; i++) {
        const nums = num[i];
        if (nums % 2 == 0) {
            console.log(nums, 'even number');
        }
        else{
            console.log(nums, 'odd number');
        }
    }
    
}

// var number = [10, 30, 21, 20, 39];
find([10,22,33]);