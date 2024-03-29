const hours = document.querySelector(".hours");

const minutes = document.querySelector(".minutes");

const seconds = document.querySelector(".seconds");

function setDate() {
    const now = new Date();

    const getSeconds = now.getSeconds();
    const getMinutes = now.getMinutes();
    const getHours = now.getHours();

    const secondsDeg = (getSeconds / 60) * 360;
    const minutesDeg = (getMinutes / 60) * 360;
    const hoursDeg = (getHours / 12) * 360;


    seconds.style.transform = `rotate(${secondsDeg}deg)`;
    minutes.style.transform = `rotate(${minutesDeg}deg)`;
    hours.style.transform = `rotate(${hoursDeg}deg)`;


}

setInterval(setDate, 1000);