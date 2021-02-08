fetch('https://restcountries.eu/rest/v2/all')
    .then(res=>res.json())
    .then(data=>displayCountry(data))
 const displayCountry=countries =>{
  const countriesDiv=document.getElementById('country');
  for (let i = 0; i< countries.length; i++){ 
    const country = countries[i];
    const countryDiv=document.createElement('div');
    countryDiv.className='country'
    const countryInfo=`
    <h3 class="country-name">${country.name}</h3>
    <p>${country.capital}</p>
    <button onclick="displayInformation('${country.name}')">See more </button>
    `
    countryDiv.innerHTML=countryInfo;
   
    // const header=document.createElement('h3');
    // header.innerText=country.name;
    // countryDiv.appendChild(header);
    // const para=document.createElement('p');
    // para.innerText=country.capital;
    // countryDiv.appendChild(para);
     countriesDiv.appendChild(countryDiv);
  };
      };
const displayInformation=name =>{
  const url=`https://restcountries.eu/rest/v2/name/${name}`
fetch(url)
.then(res=>res.json())
.then(data=>renderArray(data[0]));
}

const renderArray=country=>{
console.log(country);
  const countryDiv=document.getElementById('country-detail');
  countryDiv.innerHTML=`
  <h3>${country.name}</h3>
  <img src="${country.flag}">
  `
}