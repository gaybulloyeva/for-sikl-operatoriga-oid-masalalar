function solve(a, b) {
    let kupaytma = 1

    for (let i = a; i <= b; i++) {
        kupaytma = kupaytma * i
    }

    console.log("natija: " + kupaytma)
}


solve(1, 4)