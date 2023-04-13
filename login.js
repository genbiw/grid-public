function greetingFunction(){
    alert('Greeting Mr. Implementation consultant!!!')
}

let myGreeting = setTimeout(greetingFunction, 3333);

/* clearTimeout(myGreeting); */

function currentTime(){
    let currentDate = new Date();
    let time = currentDate.toLocaleTimeString();
    document.querySelector('.currentTime').innerHTML = time;
}

const loginClock = setInterval(currentTime, 1000);