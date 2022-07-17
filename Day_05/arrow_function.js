
let log = console.log

// a.

let array = [1, 2, 3, 4, 5, 6, 7, 43535, 457564, 328769]

let A = (arr) => {
    return arr.filter(a => a % 2 !== 0)
}

log('a. ', A(array).join(' '))

// b.

array = ['raja', 'raja', 'raja']

let B = (arr) => {

    return arr.map((a, i) => arr[i] = a[0].toUpperCase() + a.slice(1, a.length))
}

log('b. ', B(array).join(' '))

// c.

array = [1, 2, 3, 4, 5, 6, 7, 43535, 457564, 328769]

let C = (arr) => {

    let res = 0;

    arr.map(a => res += a)

    return res
}

log('c. ', C(array))

// d.

array = [1, 2, 3, 4, 5, 6, 7, 43535, 457564, 328769]

let D = (arr) => {

    return arr.filter(a => a % 2 != 0)
}

log('d. ', D(array).join(' '))

// e.

array = [1, 2, 3, 4, 5, 6, 7, 'madam', 'malayalam']

let E = (arr) => {

    return arr.filter(a => {

        a = String(a);

        if (a.length <= 1) {
            return a
        }

        let str1 = a.slice(0, Math.floor(a.length / 2))
        let str2 = a.slice(Math.floor(a.length / 2) + 1, a.length)

        str2 = str2.split('').reverse().join('')

        if (str1 == str2) return a
    })


}

log('e. ', E(array).join(' '))