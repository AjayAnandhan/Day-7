//Ex1: Map
var a = ["Apple", "Chrome", "Firefoxe"];
var b = a.map((arr)=>arr+"s") // or var b = a.map((a)=>a+"s")
console.log(b);

// Ex2: Map
var a = [12,13,14,15,16];
var b = a.map((arr)=>arr*2)
console.log(b);


// E3: Using XHR method (Map)
var a = new XMLHttpRequest();
a.open("GET","https://restcountries.com/v3.1/all",true)
a.send()
a.onload = function(){
    var b = a.response
    var c = JSON.parse(b)
    c.map((arr)=> console.log(arr.name.common))
}


// Ex: Filter 
var a,b,c,d,e
a = new XMLHttpRequest();
a.open("GET","https://restcountries.com/v3.1/all",true)
a.send()
a.onload = function(){
    b = a.response
    c = JSON.parse(b)
    d = c.filter((arr)=> {return arr.population<300000})
    d.map((arr)=> {console.log(`${arr.name.common}:${arr.population}`)})
}


// Ex1: Reduce(Without initial value)
var arr = [12,13,14,15]
var res = arr.reduce((acc,cv)=>acc +cv )
console.log(res);

// Ex2: Reduce(With initial value)
    var arr = [12,13,14,15]
    var res = arr.reduce((acc,cv)=>acc +cv, 100)  // If nothing given the initial value it will take first value from array
    console.log(res);


// Ex3: To find total population
var a,b,c,d,e;
a = new XMLHttpRequest();
a.open("GET","https://restcountries.com/v3.1/all",true)
a.send();
a.onload = function(){
    b = a.response
    c = JSON.parse(b)
    d = c.reduce((acc,cv)=>acc +cv.population, 0)
    // d = c.map((arr)=> {return arr.population});
    // e = d.reduce((acc,cv)=>acc +cv, 0)
    // console.log("World's total population is "+e);
    console.log("World's total population is "+d);
}


// Ex1: Foreach
var arr = [12,13,14,15]
var res = arr.forEach((ele)=>{console.log(ele)})

// Ex2: Foreach
var arr = [12,13,14,15]
arr.forEach((ele)=>console.log(ele*2))

// Ex3: using XMLHttpRequest
var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true)
request.send()
 request.onload=function(){
    var data = request.response
    var result = JSON.parse(data)
    var res = result.forEach((ele)=>{console.log(`${ele.name.common} - ${ele.capital} - ${ele.region}`)})
}