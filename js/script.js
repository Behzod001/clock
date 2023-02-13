const tabsLink = document.querySelectorAll(".tabsLink");
const tabsItem = document.querySelectorAll(".tabsItem");
const tabsContent = document.querySelectorAll(".tabsContentItem");

tabsLink.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();

    tabsItem.forEach((e) => {
      e.classList.toggle("active");
    });

    tabsContent.forEach((e) => {
      e.classList.toggle("active");
    });
  });
});

// Clock

const s = document.querySelector(".s");
const m = document.querySelector(".m");
const h = document.querySelector(".h");
const digitalM = document.querySelector(".minutes");
const digitalH = document.querySelector(".hours");

function Clock() {
  const d = new Date();

  if (d.getSeconds() != 59) {
    s.style.transition = "1s linear";
  }

  s.style.transform = `rotate(${d.getSeconds() * 6}deg)`;
  m.style.transform = `rotate(${d.getMinutes() * 6}deg)`;
  h.style.transform = `rotate(${d.getMinutes() * 30}deg)`;

  digitalM.innerText =
    d.getMinutes() < 10 ? "0" + d.getMinutes() : d.getMinutes();
  digitalH.innerText = d.getHours() < 10 ? "0" + d.getHours() : d.getHours();

  setTimeout(() => Clock(), 1000);
}

Clock();
const sw_hours = document.querySelector('.stopwatch__hours');
const sw_minutes = document.querySelector('.stopwatch__minutes');
const sw_seconds = document.querySelector('.stopwatch__seconds');
const swBtn = document.querySelector('.stopwatch__btn');


    swBtn.addEventListener("click", () =>{
      switch(swBtn.innerText){
          case "START":
              Stopwatch(swBtn.innerText);
              
              break;
          case "STOP": 
              Stopwatch(swBtn.innerText);
              break;
          case "CLEAR":
              Stopwatch(swBtn.innerText);    
      }     
    });    

    function Stopwatch() {
      if(swBtn.innerText == 'START') {
          sw_seconds.innerText++;

          if(sw_seconds.innerText == 60){
            sw_minutes.innerText++;
            sw_seconds.innerText = 0;



            if(sw_minutes.innerText == 60) {
              sw_hours.innerText++;
              sw_minutes.innerText = 0;

            }
          }
  
  
          setTimeout(() => Stopwatch(), 1000);
      }
     
  }