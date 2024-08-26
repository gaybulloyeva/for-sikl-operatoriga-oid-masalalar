function solve(a, n) {
    let kupaytma = 1

    for (let i = 1; i <= n; i++) {
        kupaytma = kupaytma * a
    }

    console.log("natija: " + kupaytma)
}


solve(2,5)