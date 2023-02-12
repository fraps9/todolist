const clock=document.querySelector("h2#clock");
const today=document.querySelector("h2#day");


function getDay(){
  const week=new Array('일','월','화','수','목','금','토');
  const date=new Date();
  const year=date.getFullYear();
  const month=date.getMonth()+1;
  const day=date.getDate();
  const dayofweek=week[date.getDay()];
  today.innerText=`${year}년 ${month}월 ${day}일 ${dayofweek}요일`;
}

function getColck(){
  const date=new Date();
  const hours=String(date.getHours()).padStart(2,"0");
  const minutes=String(date.getMinutes()).padStart(2,"0");
  const seconds=String(date.getSeconds()).padStart(2,"0");
  clock.innerText=`${hours}:${minutes}:${seconds}`;
}

getDay();
getColck();
setInterval(getColck,1000);