fetch('https://restcountries.eu/rest/v2/all')
.then(res => res.json())
.then(data => displayCountries(data));

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
            </div>
        `

        countryDiv.innerHTML = countryInfo;
        countriesDiv.appendChild(countryDiv);
    });

    // for(let i = 0; i < countries.length; i++){
        // const country = countries[i];

        
    // }
}