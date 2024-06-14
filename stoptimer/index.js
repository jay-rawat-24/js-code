const clock = document.querySelector(".clock");

let sec = 0,min=0,hr=0;
let interval

let startimer = ()=>{
   interval = setInterval(()=>{
      if(sec<59) sec++;
      else if(min >= 59){
        hr++
        min=0
      }
      else{
        sec=0
        min++
      }
      const s = String(sec).padStart(2,0)
      const m = String(min).padStart(2,0)
      const h = String(hr).padStart(2,0)
        
      clock.innerText = `${h}:${m}:${s}`
   },1000)
}

const stoptimer = ()=>{
   clearInterval(interval)
}