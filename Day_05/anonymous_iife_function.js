// 1. Anonymous & IIFE Function

// a.

var log = console.log


let array = [1, 2, 3, 4, 5, 6, 7, 8, 9]

{


    let result = (array) => {
        array.map((a, i) => {

            if (a % 2 == 0) array.splice(i, 1)
        })

        return array;
    }

    log('a. Anonymous: ', result(array).join(' '))


}
{

    (() => {
        array.map((a, i) => {
            if (a % 2 == 0) array.splice(i, 1)
        })

        log('a. IIFE: ', array.join(' '))
    })()
}

array = ["raja", "gokul", "kavin"]
// b. 

{


    let result = (array) => {

        array.map((a, i) => {

            array[i] = a[0].toUpperCase() + a.slice(1, a.length)

        })

        return array;
    }

    log('b. Anonymous: ', result(array).join(' '))
}

{

    (() => {
        array.map((a, i) => {

            array[i] = a[0].toUpperCase() + a.slice(1, a.length)

        })

        log('b. IIFE: ', array.join(' '));
    })()
}
// c.

array = [1, 2, 3, 4, 5, 6, 7, 8, 9]

{
    let result = (array) => {

        let res = 0
        array.map(a => res += a)

        return res
    }

    log('c. Anonymous: ', result(array))
}
{
    (function (array) {
        let res = 0;

        array.map(a => res += a)

        log('c. IIFE: ', res)
    })(array)
}
// d.
{
    let result = array.filter(a => {

        if (a > 1 && a % 2 != 0) return a

    })

    log('d. Anonymous: ', result.join(' '))
}
{
    (function (array) {
        let result = array.filter(a => {

            if (a > 1 && a % 2 != 0) return a

        })

        log('d. IIFE: ', result.join(' '))

    })(array)
}

// e.
array = [1, 2, 3, 10, 11, 12, 22, 'malayalam', 'madam']

{
    let result = array.filter(a => {

        a = String(a)

        let str1 = a.slice(0, (a.length / 2));
        let str2 = a.slice((a.length / 2).toFixed(0), a.length);

        str2 = str2.split('').reverse().join('')

        if (str1 == str2) return a;


    })
    log('e. Anonymous: ', result.join(' '))
}
{
    (function (array) {

        let result = array.filter(a => {

            a = String(a)

            let str1 = a.slice(0, (a.length / 2));
            let str2 = a.slice((a.length / 2).toFixed(0), a.length);

            str2 = str2.split('').reverse().join('')

            if (str1 == str2) return a;


        })

        log('e. IIFE: ', result.join(' '))

    })(array)
}

// f.
let array1 = [1, 12, 15, 26, 38],
    array2 = [2, 13, 17, 30, 45];


{
    let result = (array1, array2) => {

        let arr = array1.concat(array2).sort((a, b) => a - b)

        if (arr.length / 2 == 0) {

            return (arr[(arr.length / 2) - 1] + arr[arr.length / 2]) / 2
        }

        return (arr[Math.floor(arr.length / 2)])

    }

    log('f. Anonymous: ', result(array1, array2))
}

{
    (function (array1, array2) {



        let arr = array1.concat(array2).sort((a, b) => a - b)

        if (arr.length / 2 == 0) {

            return log((arr[(arr.length / 2) - 1] + arr[arr.length / 2]) / 2)
        }

        return log('f. IIFE: ', (arr[Math.floor(arr.length / 2)]))


    })(array1, array2)
}

// g.
array = [1, 12, 12, 26, 26, 'raja', 'raja', 38];

{
    let result = (array) => {

        for (let i = 0; i < array.length; i++) {

            let a = array[i];

            if (array.indexOf(a) !== i) array.splice(i, 1)

        }

        return array;
    }

    log('g. Anonymous: ', result(array).join(' '))
}

{
    (function (array) {

        for (let i = 0; i < array.length; i++) {

            let a = array[i];

            if (array.indexOf(a) !== i) array.splice(i, 1)

        }

        log('g. IIFE: ', array.join(' '));

    })(array)
}

// h.

{

    let array = [1, 12, 12],
        k = 5;

    let result = (array, k) => {

        for (let i = 1; i <= k; i++) array.push(array.shift())

        return array;
    }

    log('h. Anonymous: ', result(array, k).join(' '))
}


{
    let array = [1, 12, 12],
        k = 5;

    (function (array, k) {


        for (let i = 1; i <= k; i++)   array.push(array.shift())

        log('h. IIFE: ', array.join(' '))

    })(array, k)
}

