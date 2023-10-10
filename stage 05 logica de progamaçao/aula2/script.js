let firdsNomber = prompt("Digite o primeiro numero")

let sequenNomber = prompt('Digite o segundo numero')


firdsNomber = Number(firdsNomber)

sequenNomber = Number(sequenNomber)

const sum = firdsNomber + sequenNomber
const resta = firdsNomber - sequenNomber
const mult = firdsNomber * sequenNomber
const div = firdsNomber / sequenNomber
const restDiv = firdsNomber % sequenNomber

alert(`A soma é de${sum}`)
alert(`A resta é de ${resta}`)
alert(`A multipliocão é de ${mult}`)
alert(`A divição é de ${div}`)
alert(`O resto da divição é de ${restDiv}`)