function solve(n) {

    let sum = 0

    for (let i = 1; i <= n; i++) {
        sum = sum + (i ** ((n-i)+1)) 
        console.log("natija: " + sum)
    }

}


solve(4)