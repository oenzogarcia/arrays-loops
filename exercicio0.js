const listaDePaises = ['irlanda', 'japao', 'estados unidos', 'india', 'brasil']

// adicionando um país ao fim da lista
listaDePaises.push('groelandia')
console.log(listaDePaises)

// removendo um país do fim da lista
listaDePaises.pop()
console.log(listaDePaises)

// adicionando um país ao início da lista
listaDePaises.unshift('vietna')
console.log(listaDePaises)

// removendo um país do início da lista
listaDePaises.shift()
console.log(listaDePaises)

console.log(listaDePaises.length) // 5
console.log(listaDePaises[4]) // brasil // outra forma de fazer:
console.log(listaDePaises[listaDePaises.length - 1]) // brasil

console.log(listaDePaises[1]) // japao
console.log(listaDePaises[2]) // estados unidos