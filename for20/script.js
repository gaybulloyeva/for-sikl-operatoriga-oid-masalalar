function solve(n) {

    let sum = 0
    let factorial = 1

    for (let i = 1; i <= n; i++) {
        factorial = factorial * i
        sum = sum + factorial
        console.log(n + "! = " + sum)
    }

}


solve(3)