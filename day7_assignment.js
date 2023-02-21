//Solving problems using array functions on the rest countries' data (https://restcountries.com/v3.1/all).
let xhr = new XMLHttpRequest();
// configure request
xhr.open("GET", "https://restcountries.com/v3.1/all");
// send over the network
xhr.send();
xhr.onload = function () {
    var users = JSON.parse(xhr.response);
    //a. Get all the countries from the Asia continent /region using the Filter function
    let countryInAsia =[]
    let popLessThan2L =[]
    users.filter((value) =>{
        if(value.region=="Asia")
        countryInAsia.push(value.name.common)
    }
        )
        console.log(countryInAsia)
    
    //b.Get all the countries with a population of less than 2 lakhs using Filter function
    
    users.filter((value) =>{
        if(value.population<200000)
        popLessThan2L.push(value.name.common)
    }
        )
        console.log(popLessThan2L)

    //c.Print the following details name, capital, flag using forEach function
    users.map(value=>{
       return {name:value.name.common,capital:value.capital,flag:value.flag}
    }).forEach(element => {console.log(element)
        
    });

    //d.Print the total population of countries using reduce function
    console.log(users.map(value=>value.population).reduce((accumulator,currentvalue)=>accumulator+currentvalue,0))
    
    //e.Print the country which uses US Dollars as currency.

console.log(users.filter((value)=>
    value.currencies
   ))

}
