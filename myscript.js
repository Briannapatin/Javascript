function myFunction() {
    element = document.getElementById('demo4');
    element.style.border = '2px solid #00f';
    element.style.width = '20%';
    element.style.color = '#0f0';
    element = document.getElementById('demo5').innerHTML = 'Hello World!'
}
function myScript() {
    const m = 20;
    let n = 30;
    var o = n - m;
    document.getElementById('demo9').innerHTML = m + m + n + o;
}
var firstName = "John"
var lastName = "Doe"
var age = "27"
document.getElementById('demo8').innerHTML = firstName + ' ' + lastName + ' is ' + age + ' years old. <br> (The variable here has been declared using the keyword "var")';

const person = 'Jane Doe', carName = 'Mercedes', price = '$40,000';

const cars = ['Benz', 'Audi', 'BMW'];
cars[0] = ['Mercedes Benz & Volkswagon'];
cars.push('Dodge.');
document.getElementById('demo11').innerHTML = cars;
function time() {
    const x = new Date();
    document.getElementById("demo12").innerHTML = "The date today is " + x.toDateString() + " (Date string)";
    document.getElementById("demo13").innerHTML = "The date today is " + x.toUTCString() + " (UTC standard)";
    document.getElementById("demo14").innerHTML = "The date today is " + x.toISOString() + " (ISO standard)";
}

function myMonth() {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const d = new Date();
    let month = months[d.getMonth()];
    document.getElementById("demo15").innerHTML = month;
}

function myDay() {
    const days = ["Sunday", "Monday", "Tuesday", "Wenesday", "Thursday", "Friday", "Saturday",];
    const d = new Date();
    let day = days[d.getDay()];
    document.getElementById("demo16").innerHTML = day;
}