const add = function(a, b) {
    return a + b;
};

console.log(add(55, 1));

const multiplier = {
    numbers: ['1', '2', '3'],
    mulitplyBy: 3,
    multiply() {
        return this.numbers.map((number) => this.mulitplyBy * number);
    }
};

console.log(multiplier.multiply());