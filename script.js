var months = document.getElementById('months');
var days = document.getElementById('days');
var hours = document.getElementById('hours');
var minutes = document.getElementById('minutes');
var seconds = document.getElementById('seconds');

function countdown(){
    var evenTime= new Date("31 Dec 2024 00:00:00");
    var currentTime = new Date();
    var totalTime = evenTime - currentTime;
    var totalSecond= Math.floor(totalTime / 1000);
    var totalMinite = Math.floor(totalSecond / 60);
    var totalHours= Math.floor(totalMinite / 60);
    var totalDays = Math.floor(totalHours / 24);

    var SecondRemain = totalSecond % 60;
    var MiniteRemain = totalMinite % 60;
    var housRemain = totalHours % 24;
    var daysRemain= Math.floor(totalHours / 24);
    var monthRemain= Math.floor(totalDays / 30);

    months.textContent = monthRemain;
    days.textContent = daysRemain;
    hours.textContent = housRemain;
    minutes.textContent = MiniteRemain;
    seconds.textContent = SecondRemain;

    console.log(monthRemain, daysRemain, housRemain, MiniteRemain, SecondRemain);
}
countdown();
setInterval(countdown,1000);


