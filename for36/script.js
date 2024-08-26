function solve(n, k) {

    let sum = 0

    for (let i = 1; i <= n; i++) {
        sum = sum + (i ** k) 
        console.log("natija: " + sum)
    }

}


solve(2,3)