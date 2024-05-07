function multiplyByTwo(value) {
    let number = 2;
    
    function inner() {
        const result = value * number;
        return result;
    }

    console.log(inner());
}

multiplyByTwo(2)