var request=new XMLHttpRequest();
        // Make a GET request to the URL
fetch('https://restcountries.com/v3.1/all')
.then(response => response.json())
.then(data => {
  // Loop through each country in the data
  data.forEach(country => {
    // Get the country name, region, subregion, and population
    const name = country.name.common;
    const region = country.region;
    const subregion = country.subregion;
    const population = country.population;

    // Print the information to the console
    console.log(`${name} - ${region} - ${subregion} - ${population}`);
  });
})
.catch(error => console.error(error));
