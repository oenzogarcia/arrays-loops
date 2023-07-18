const pais = 'alemaa'

let encontrado = false

for (letra of pais) {
    if (letra === 'h') {
        console.log('tem a letra h')
        encontrado = true
        break
    }
}

if (encontrado === false) {
    console.log('Não tem a letra h')
}


