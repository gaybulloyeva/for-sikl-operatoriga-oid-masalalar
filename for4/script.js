function solve(weight) {
    let price = prompt("mahsulot narxini kiriting")

    for (let i = 1; i <= 10; i++) {
        let cost = i * price * weight

        console.log(i + " kg konfet narxi " + cost + "so'm")
    }
}


solve(5)