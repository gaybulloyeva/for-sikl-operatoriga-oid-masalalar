function solve(a, b) {
    let count = Math.abs(a - b) - 1
    for (let i = Math.min(a, b); i <= Math.max(a, b); i++) {
        console.log(i)

    }
    console.log("sonlar soni " + count + " ta")
}


solve(5, 10)