function solve(n) {

    let sum = 0
    let factorial = 1

    for (let i = 1; i <= n; i++) {
        factorial = factorial * i
        sum = sum + (1 / factorial)

        console.log(sum)
    }

}


solve(3)