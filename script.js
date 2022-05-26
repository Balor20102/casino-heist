let BTNvink = document.getElementById("antwoord");
let vink = document.getElementById("vinkje1");
let vinktwee  = document.getElementById("vinkje2");
let vinkthree = document.getElementById("vinkje3");
let vinkfour  = document.getElementById("vinkje4");

let code1 = 1;
let code2 = 2;
let code3 = 3;
let code4 = 4;


BTNvink.addEventListener("click", getVal);



/*----------------------------------*/

function getVal() {
    const val = document.querySelector('input').value;
    
    if( val == code1){
         vink.style.backgroundImage = 'url(vink.png)';
    }

         if( val == code2){
            vinktwee.style.backgroundImage = 'url(vink.png)';
         }      

        if( val == code3){
            vinkthree.style.backgroundImage = 'url(vink.png)';
     }

         if( val == code4){
            vinkfour.style.backgroundImage = 'url(vink.png)';
      }
}







let minut = document.getElementById('minutes');
let sec = document.getElementById('seconds');
let btn = document.getElementById('BTN');

btn.addEventListener("click", pagedealyredirect);



function pagedealyredirect(){
    var count = 3600;
    seconden = 60;

    setInterval(function(){
        count--;
  
        let minutes = count / 60;
        let min = Math.ceil(minutes);
        minut.innerHTML = min;

        if (count == 0) {
            timer.innerHTML = "tijd is op!"
    }

    },1000);

    setInterval(function(){
        seconden--;
        
        sec.innerHTML = seconden;

        if(seconden === 0){
            seconden = seconden + 60;
        }

    },1000);
}