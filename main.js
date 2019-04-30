let counter=document.querySelector(".counter");
const addCont=document.querySelector("#addCountbtn");
const lowerCont=document.querySelector("#lowerCountbtn");

let count=0;

addCont.addEventListener("click",inc);
lowerCont.addEventListener("click",dec);

function inc(){
count++;
counter.innerHTML=count;

if(counter.innerHTML>0){
  counter.style.color="#4caf50";
}
else if(counter.innerHTML=="0"){
  counter.style.color="white";
}
counter.animate([{opacity:"0.2"},{opacity:"1.0"}],{duration:500,fill:"forwards"});

}


function dec(){
  count--;
  counter.innerHTML=count;

  if(counter.innerHTML<0){
    counter.style.color="red";
  }
  else if(counter.innerHTML=="0"){
    counter.style.color="white";
  }
}