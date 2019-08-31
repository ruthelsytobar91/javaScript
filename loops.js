function suma(sumando, suma) {
    return suma + sumando
}

function resta(sumando, suma) {
    return suma - sumando
}


pets = ["gato", "perro", "pato", "huargo"]
for (item = 0; item < pets.length; item = item + 1) {
    //console.log(pets[item])
}
pets.forEach(function(item) {
    //console.log(item)
})

module.exports = suma;
