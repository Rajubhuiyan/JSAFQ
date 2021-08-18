function explain_callback(name, age, task) {
    console.log('hello:', name);
    console.log('your age', age);
    task();
}

function washHand() {
    console.log('wash your hand');
}
function takeShower() {
    console.log('take shower');
}

explain_callback('sogir uddin', 17, washHand); 
explain_callback('jogir uddin', 13, takeShower);
explain_callback('kogir uddin', 15, takeShower);