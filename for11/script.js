function solve(n) {
    let step1 = 0

    for (let i = 0; i <= n; i++) {
        step1 = step1 + ((i + n) ** 2)
    }

    console.log("natija: " + step1)
}


solve(1)