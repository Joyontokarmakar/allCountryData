fetch('https://restcountries.eu/rest/v2/all')
.then(res => res.json())
.then(data => displayCountries(data))

const displayCountries = countries =>{

    const countriesDiv = document.getElementById('allCountry');
    // const repeatCountry = document.getElementById('repeated');

    countries.forEach(country => {

        const countryDiv = document.createElement('div');
        countryDiv.className = 'col-4 my-2';

        const countryInfo = `
            <div class="single_country p-3 text-center rounded shadow border child_height">
                <h4>${country.name}</h4> 
                <p>${country.capital}</p>
                <button onclick="countryDetail('${country.name}')" class="btn btn-outline-secondary rounded shadow-1">Details Here</button>  
            </div>
        `

        countryDiv.innerHTML = countryInfo;
        countriesDiv.appendChild(countryDiv);
    });

    // for(let i = 0; i < countries.length; i++){
        // const country = countries[i];

        
    // }



}
const countryDetail = name =>{
    const url = `https://restcountries.eu/rest/v2/name/${name}`
    fetch(url)
    .then(res => res.json())
    .then(data => countryInfo(data[0]))
}

const countryInfo = country => {
    console.log(country)
    const countryDiv = document.getElementById('country_information');
    countryDiv.innerHTML = `
        <img src="${country.flag}" class="border shadow-1">
        <h4 class="text-center">${country.name}</h4>
        <hr>

        <p><b>Native Name:</b> ${country.nativeName}</p>
        <p><b>Capital:</b> ${country.capital}</p>
        <p><b>Region:</b> ${country.region}</p>
        <p><b>Sub-Region:</b> ${country.subregion}</p>
        <p><b>Area:</b> ${country.area}</p>
        <p><b>Population:</b> ${country.population}</p>
        <p><b>Timezones:</b> ${country.timezones[0]}</p>
        <p><b>Currency Name:</b> ${country.currencies[0].name}</p>
        <p><b>Currency Code:</b> ${country.currencies[0].code}</p>
        <p><b>Currency Symbol:</b> ${country.currencies[0].symbol}</p>

    `
}