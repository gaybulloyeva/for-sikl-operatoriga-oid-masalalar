function solve(n) {
    let kupaytma = 1

    for (let i = 1.1; i <= n; i = i + 0.1) {
        kupaytma = kupaytma * i
    }

    console.log("natija: " + kupaytma)
}


solve(1.3)