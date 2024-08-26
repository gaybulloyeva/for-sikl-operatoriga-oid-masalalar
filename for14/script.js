function solve(n) {
    let sum = 0

    for (let i = 1; i <= 2 * n - 1; i = i + 2) {
        sum = sum + i
        console.log(i**2)
    }

}


solve(5)