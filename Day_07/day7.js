
let log = console.log


let url = "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json"
let ImageUrl = "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/"


let req = new XMLHttpRequest()

req.open("GET", url)
req.send()




req.onload = async () => {

    let response = await JSON.parse(req.response)

    // a.Get all the countries from the Asia continent /region using the Filter function
    log('A', response.filter(res => res.region == 'Asia'))

    // b.Get all the countries with a population of less than 2 lakhs using Filter function
    log('B', response.filter(res => res.population < 200000))

    // c.Print the following details name, capital, flag using forEach function

    response.forEach(res => {
        log(' ')
        log('Name: ', res.name)
        log('Capital: ', res.capital)
        log('Flag: ', res.flag)
        log(' ')
    });

    // d.Print the total population of countries using reduce function
    const total_population = response.reduce((total, res) => {
        return total + Number(res.population);

    }, 0);

    log('Total Population: ', total_population)

    // d.Print the total population of countries using reduce function
    response.filter(res => {

        let usd = false;

        res.currencies.filter(_res => {
            if (_res.code == 'USD') usd = true
        })

        if (usd) {
            log('Country: ', res.name, ' | ', 'Currency: USD');
        }
    })
}
