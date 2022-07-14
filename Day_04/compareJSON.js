let obj1 = { name: "Person", age: 5 }
let obj2 = { age: 5, name: "Person" }


let compareJSON = (obj1, obj2) => {
    let result = true

    for (const key in obj1) {

        if (obj1[key] != obj2[key]) {
            result = false

            return result
        }
    }

    return result
}

console.log(compareJSON(obj1, obj2));


