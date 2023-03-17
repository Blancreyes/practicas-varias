const date = new Date();

const month = date.getMonth();

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "october",
    "Nomvember",
    "December",
];

document.querySelector(".date h1").innerHTML = months[date.getMonth()];

document.querySelector(".date p").innerHTML = date.toDateString();

console.log(date);
console.log(month);
console.log(months[date.getMonth()]);