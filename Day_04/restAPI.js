let url = "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json"
let ImageUrl = "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/"

let req = new XMLHttpRequest()

req.open("GET", url)
req.send()




req.onload = async () => {

    let response = await JSON.parse(req.response)
    // Country Images
    response.map(res => {

        let Flag = ImageUrl + res.alpha2Code + '.svg'
        consoleimg.load(Flag, { size: 320, color: '#FFFFFF' })
    })

    // Country Details
    console.log("Country Details");
    response.map((res, i) => {

        console.log(' ');
        console.log("No:" + (i + 1));
        console.log("Name: " + res.name);
        console.log("Region: " + res.region);
        console.log("Sub-Region: " + res.subregion);
        console.log("Population: " + res.population);
    })





}