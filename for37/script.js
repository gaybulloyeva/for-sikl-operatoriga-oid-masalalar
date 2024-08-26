function solve(n) {

    let sum = 0

    for (let i = 1; i <= n; i++) {
        sum = sum + (i ** i) 
        console.log("natija: " + sum)
    }

}


solve(4)