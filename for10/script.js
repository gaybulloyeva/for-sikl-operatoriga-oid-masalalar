function solve(n) {
    let step1 = 0

    for (let i = 1; i <= n; i++) {
        step1 = step1 + 1 / i
    }
    console.log("natija: " + step1)
}


solve(3)