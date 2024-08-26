function solve(weight) {
    let price = prompt("mahsulot narxini kiriting")

    for (let i = 1; i <= 9; i++) {
        let ogirlik = i / 10
        let cost = ogirlik * price * weight

        console.log(i + " kg konfet narxi " + cost + "so'm")
    }
}


solve(5)