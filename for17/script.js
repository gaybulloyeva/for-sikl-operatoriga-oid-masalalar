function solve(a, n) {

    let sum = 0

    for (let i = 0; i <= n; i++) {
        let result = a ** i
        sum = sum + result
        console.log(a + " ning " + i + "-darajasi " + result)
    }

    console.log("yig'indisi " + sum)
}


solve(2, 5)