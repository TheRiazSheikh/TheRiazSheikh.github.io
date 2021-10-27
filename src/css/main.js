
function show_time()
{

let box = document.querySelector(".time");

let msg = document.querySelector(".message");

let live = document.querySelector(".live");

let d1 = document.querySelector(".d1");

let d2 = document.querySelector(".d2");

let d3 = document.querySelector(".d3");



setInterval(function()
{

let second = new Date().getSeconds();

let minute = new Date().getMinutes();

let hour = new Date().getHours();


box.innerHTML= hour + " : " +  minute + " : " + " : " + second;



if(hour < 12)
{
msg.innerHTML="Good Morning .. ";
}

else if(hour < 17)
{
msg.innerHTML = "Good Afternoon ...";
}


else if(hour < 20)
{
msg.innerHTML="Good Evening ... ";
}


else if(hour >= 20 && hour <= 24) 
{

msg.innerHTML="Good Night";

}


// ===============

switch(second)
{

case 1: live.innerHTML = "Riaz Sheikh is C++ Programmer"; break;



case 4: live.innerHTML = "Programming is his Passion"; break;

case 8: live.innerHTML="Riaz Loves Linux operating system"; break;

case 12: live.innerHTML="contact Riaz for Develop custom softwares"; break;

case 16: live.innerHTML="Riaz will writes Code and build software as per your need"; break;

case 22: live.innerHTML="Riaz can write software in C++, Python and C#, web (html + css + javascript + php + mysql ) programming language"; break;


case 30: live.innerHTML="to make your website accessible for each Device call Riaz to develop web-application"; break;

case 35: live.innerHTML="riaz writes sufficient code that transform website into an app which looks like native application by interface and its speed might be as much fast as possible "; break;


case 45: live.innerHTML="riaz prefer to Develop application in c and C++ Programming for speed and accurate control over hardware resources "; break;


case 55: live.innerHTML="Mail Riaz Sheikh for Develop apps "; break;

} // end of switch statement





},100);


}

show_time();

// ===================================================
