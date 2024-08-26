function solve(n) {
    let sum = 0
    let ishora = 1

    for (let i = 1.1; i < n; i = i + 0.1) {
        sum = sum + (ishora * i)
        ishora = ishora * (-1)
    }

    console.log("natija: " + sum)
}


solve(5)