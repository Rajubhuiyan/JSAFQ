// function evenify(nums) {
//     for (let i = 0; i < nums.length; i++) {
//         const num = nums[i];
//         if (num % 2 == 0) {
//             console.log(num, 'is even number');
//         }
//         else{
//             console.log(num*2, 'is odd number');
//         }
        
//     }
// }
// var number = [10, 20, 21, 22, 23, 24, 25];
// evenify(number);

function evenify(num) {
    var result;
    if (num % 2 == 0) {
        result = num;
    }
    else{
        result = num * 2;
    }
    return result;
}

var result = evenify(11);
var square = result * result;
console.log('square', square);

function evenifyAll(nums) {
    var evenifyArray = [];
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        var result = evenify(num);
        evenifyArray.push(result);
    }
    return evenifyArray;
}

var nums = [20, 21, 23, 24, 25, 26];
var numsArray = evenifyAll(nums);
console.log(numsArray);