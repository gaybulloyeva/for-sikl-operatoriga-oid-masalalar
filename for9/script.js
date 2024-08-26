function solve(a, b) {
    let sum = 0

    for (let i = a; i <= b; i++) {
        sum = sum + (i ** 2)
    }

    console.log("natija: " + sum)
}


solve(1, 3)