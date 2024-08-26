function solve(n, x) {

    let sum = 1
    let factorial = 1

    for (let i = 1; i <= n; i++) {
        factorial = factorial * i
        sum = sum + (x ** i) / factorial
        console.log("natija: " + sum)
    }

}


solve(3,5)