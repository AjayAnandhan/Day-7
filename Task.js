// a) Get all the countries from the Asia continent /region using the Filter function
var a = new XMLHttpRequest
a.open("GET","https://restcountries.com/v3.1/all",true)
a.send()
a.onload = function(){
    var data = a.response
    var continent = JSON.parse(data)
    var region = continent.filter((arr)=>{return arr.region == "Asia"})
    region.map((arr)=>{console.log(arr.name.common)})
}

// b) Get all the countries with a population of less than 2 lakhs using Filter function
var a = new XMLHttpRequest
a.open("GET","https://restcountries.com/v3.1/all",true)
a.send()
a.onload = function(){
    var data = a.response
    var result = JSON.parse(data)
    var countries = result.filter((arr)=>{return arr.population < 200000})
    countries.map((arr)=>{console.log(arr.name.common)})
}

// c) Print the following details name, capital, flag using forEach function
var a = new XMLHttpRequest
a.open("GET","https://restcountries.com/v3.1/all",true)
a.send()
a.onload = function(){
    var data = a.response
    var result = JSON.parse(data)
    result.forEach((arr)=>{console.log(`Name : "${arr.name.common}" Capital : "${arr.capital}" Flag : "${arr.flag}"`)})
}

// d) Print the total population of countries using reduce function
var a = new XMLHttpRequest
a.open("GET","https://restcountries.com/v3.1/all",true)
a.send()
a.onload = function(){
    var data = a.response
    var result = JSON.parse(data)
    var totalPopulation = result.reduce((acc,cv)=>acc+cv.population,0)
    console.log(totalPopulation)
}

// e) Print the country which uses US Dollars as currency.
let xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.com/v3.1/all")
xhr.send();
xhr.onload = () => {
    let data = JSON.parse(xhr.response)
     /* console.log(data) */
    let answer = data.filter((dummy) => (dummy.currencies !== undefined))
    let realanswer = answer.filter((data) =>  {
    for (let key in data.currencies) {
        if(data.currencies[key].name === "United States dollar"){
      return data
      }
    }
    })
    console.log(realanswer.length, realanswer[0].currencies)
}