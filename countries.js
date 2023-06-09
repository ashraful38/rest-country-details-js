const loadCountries = (search) =>{
    fetch(`https://restcountries.com/v3.1/name/${search}`)
    .then(res => res.json())
    .then(data => displayCountries(data));
}



const displayCountries = countries =>{
    /*
    for(const country of countries){
        console.log(country);
    }
    */

    const countryContainer = document.getElementById('country-container');
    countryContainer.innerHTML="";
    countries.map(country=>{
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country');
        countryDiv.innerHTML=`
          <h3>Name:${country.name.common} </h3>
           <p>Capital: ${country.capital ? country.capital[0] : 'No Capital'}</p>
           <button onclick="loadCountryDetails('${country.cca3}')">Details</button>
        `;
        countryContainer.appendChild(countryDiv);
    })
}

const loadCountryDetails=(code)=>{
    fetch(`https://restcountries.com/v3.1/alpha/${code}`)
    .then(res=> res.json())
    .then(data =>displayCountryDetails(data[0]))
    
}

const displayCountryDetails = country =>{
    console.log(country);
    const countryDetails = document.getElementById('country-details');
    countryDetails.innerHTML= `
    <img src=${country.flags.png}></img>
    <h2>Name:${country.name.common}</h2>
    <p>capital:${country.capital}</p>
    `;

}


//search
//first url ke dinamic korte hobe
const searchCountry=()=>{
    const searchfield = document.getElementById('search-field')
    const searchText= searchfield.value ;
    loadCountries(searchText);
    searchfield.value= "";
    
}


loadCountries('a');