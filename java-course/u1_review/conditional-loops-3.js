function sumUntil(maxValue) {
    let sum = 0;
    
    for (let index = 1; index <= maxValue; index++) {
        sum += index
    }

    return sum;
}

console.log("OUTPUT:", sumUntil(5))