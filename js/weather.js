const weather=document.querySelector("#weather span:first-child");
const city=document.querySelector("#weather span:last-child");
const API_KEY="d6e2f8626d804ae75012b19e0ad4fc23";

function onGeoOk(position){
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  // console.dir(url);
  fetch(url)
    .then((response)=>response.json())
    .then((data)=>{
      city.innerText=data.name;
      weather.innerText=`${data.weather[0].main} / ${Math.round(data.main.temp*10)/10}℃`;
    });
}
function onGEoError(){
  alert("위치를 찾을 수 없습니다.");
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGEoError);