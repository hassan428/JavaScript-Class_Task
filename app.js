
// Calculate the time when "Ramadan" will come!

var ramadanDate = new Date("10 march 2024");
var ramadanMilli = ramadanDate.getTime();
var todayDate = new Date().getTime();
var differ = ramadanMilli - todayDate;
// console.log(differ);


var months = differ / (1000 * 60 * 60 * 24 * 30);
months = Math.floor(months);
// console.log(month);


var days = differ / (1000 * 60 * 60 * 24) % 30;
days = Math.floor(days);
// console.log(day);


var hours = differ / (1000 * 60 * 60) % 24;
hours = Math.floor(hours);
// console.log(hours);


var minutes = differ / (1000 * 60) % 60;
minutes = Math.floor(minutes);
// console.log(minutes);


var seconds = differ / 1000 % 60
seconds = Math.floor(seconds);
// console.log(second);


var milliSeconds = differ % 1000;
milliSeconds = Math.floor(milliSeconds);
// console.log(milliSecond);


document.write('<h1>"Ramadan is Coming on Sun 10 March 2024"</h1>'+
            "<h4>Remaing Time</h4>"+
            "Months: "+ '"'+ months +'"'+
            "<br> Days: "+ '"'+ days +'"'+
            "<br> Hours: "+ '"'+ hours +'"'+
            "<br> Minutes: "+ '"'+ minutes +'"'+
            "<br> Seconds: "+ '"'+ seconds +'"'+
            "<br> MilliSeconds: "+ '"'+ milliSeconds +'"')



// Calculate the User's Age

var userAge = prompt("When are you born? e.g. 1 Jan 1985");
var userAgeDate = new Date(userAge).getTime();
var toDayDate = new Date().getTime();

var differ = toDayDate - userAgeDate;
var age = differ / (1000 * 60 * 60 * 24 * 30 * 12) % 2023;
age = Math.floor(age);
console.log(userAge);
console.log("You are", age, "years old.");