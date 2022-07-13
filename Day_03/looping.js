/* Iterate through given loops(for, for in, for of, forEach)*/

let array = [
    { name: "raja", age: "20" },
    { name: "raja1", age: "21" },
    { name: "raja2", age: "22" },
    { name: "raja3", age: "23" },
]

let log = console.log

/* - for */
log(' ')
log('For Loop')
log(' ')

for (let i = 0; i < array.length; i++)
    log(`Person name is ${array[i].name} and his age is ${array[i].age}`)

log(' ')
log('For In Loop')
log(' ')
/* - for in */

for (let i = 0; i < array.length; i++) {

    let result = 'Person Details => '

    for (let key in array[i]) {
        result += `${key}: ${array[i][key]} `
    }

    log(result.trim())
}

log(' ')
log('For Of Loop')
log(' ')
/* - for of*/

let guvi = "GUVI"

for (let char of guvi)
    log(char)


log(' ')
log('ForEach Loop')
log(' ')
/* - forEach*/

array.forEach((item, index) => {
    log(`${index + 1}. Person name is ${item.name} and his age is ${item.age}`)
})
