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
