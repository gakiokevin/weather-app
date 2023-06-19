
let cityInput,searchBtn,weatherIcon,humidity,windSpeed,
temp,city;
  cityInput= document.getElementById('cityInput')
  searchBtn = document.getElementById('searchBtn')
  weatherIcon =document.getElementById('weatherIcon')
  humidity =document.querySelector('.humidity')
  windSpeed =document.querySelector('.windSpeed')
  city =document.getElementById('city')
  temp = document.getElementById('temp')

    searchBtn.addEventListener('click',weatherInfo)
     const URL = "./img/speed.png"
     weatherIcon.src =URL
    async function weatherInfo(){
      cityInput= document.getElementById('cityInput')
      cityInput = cityInput.value
      if(cityInput.trim()!==""){
       const WEATHERURL = `https://api.weatherapi.com/v1/current.json?key=15ff0e78d5fa4aa8b27121057231206&q=${cityInput}&aqi=no`
       try{
            let response =  await fetch(WEATHERURL,{mode:"cors"})
            let weatherResponse = await response.json()
            if(response.status===200){
            let locationName =weatherResponse.location.name
             city.textContent = locationName.toUpperCase()
             temp.textContent = `${weatherResponse.current.temp_c}c`
             humidity.textContent = weatherResponse.current.humidity
             windSpeed.textContent = `${weatherResponse.current.wind_kph} km/hr`
             weatherIcon.src = weatherResponse.current.condition.icon


            }else {
               alert(weatherResponse.error.message)
            }
       } catch(error){
         console.log(error)
       }
      } else {
         alert('Enter a city name')
      } 
    }
     
