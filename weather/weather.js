let apiURL="https://api.openweathermap.org/data/2.5/weather?q=";
let apiKEY="4adb515673861e02081830f51266b0e8";
let search=document.querySelector(".searchbar input");
let searchbutton=document.querySelector(".searchbar button");
let img=document.querySelector(".weathericon");
async function getdata(cityname)
{
    let URL=apiURL+cityname+'&appid=4adb515673861e02081830f51266b0e8&units=metric';
    console.log(URL);
    let response=await fetch(URL);//fetch returns a promise
    // console.log("Getting response...")
    // console.log(response); //printing the response resolved in JSON format
    // console.log("Fetching actual data....")
    let actualdata=await response.json();
    console.log(actualdata);
    let weatherp=actualdata.weather[0].main;
    console.log(weatherp);
    let temp=actualdata.main.temp;
    let city=actualdata.name;
    let windspeed=actualdata.wind.speed;
    let humidity=actualdata.main.humidity;
    document.querySelector('.city').innerHTML=city;
    document.querySelector('.temp').innerHTML=Math.round(temp)+" °C";
    document.querySelector('.wind').innerHTML=windspeed+" km/hr";
    document.querySelector('.humidity').innerHTML=humidity+" %";
    if(weatherp=="Clouds")
        img.src="clouds.webp";
    else if(weatherp=="Clear")
        img.src="clear.webp";
    else if(weatherp=="Drizzle")
        img.src="drizzle.webp";
    else if(weatherp=="Mist")
        img.src="mist.webp";
    else if(weatherp=="Rain")
        img.src="rain.webp";
}
searchbutton.addEventListener("click",()=>{
    getdata(search.value);
})






