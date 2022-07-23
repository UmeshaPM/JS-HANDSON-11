console.log("working");

//Q-1:-

//write the code to acess element  which is having id as "text".


const elementOne = document.getElementById("text");
console.log(elementOne.innerHTML);

//.......................................................................................................................................................................................................................

//Q-2:- 

//Write the code to access element which is having tag as h1.

const elementTwo = document.getElementsByTagName("h1");
console.log(elementTwo[0].innerText);

//.......................................................................................................................................................................................................................

//Q-3:- 

//Write code to access element which is having class as Box.


const box = document.getElementsByClassName("box");
console.log(box[0].innerHTML);
box[0].style.backgroundColor = "blue";

//.......................................................................................................................................................................................................................

//Q-4:-

//<h1>Hello </h1> ;; change th heading from "Hello" to "Hello World " using Dom function.


console.log(elementTwo[0].innerText);
elementTwo[0].innerText = "Hello World";

//.......................................................................................................................................................................................................................

//Q-5:-

//Create  three card  on Html page arrange them using flex property row or horrizontal direction and also creat button at button named "changeDirection"
//when user click on this button , the cards arrangement should be changed to verticle direction. 

function changeDirection(){
    const propertyThree = document.getElementsByClassName("flexcontainer")
    propertyThree[0].style.flexDirection= "column";
    }
    
//.......................................................................................................................................................................................................................

//Q-6:-

//What’s the difference between window vs document?
           
//Ans:-

//window object is topmost object of the dom hiereacy. it represents a browser window or frame that display the contents of the webpage 
// syntax:
//window.property_Name;

// Document object represent  a web page that is loaded in the browser by accessing the document object we can access the element the element in the html 
// sytax :
//document.property_Name ;

//.......................................................................................................................................................................................................................

//Q-7:-

//"<h1>Hello</h1>"
//Add one style attribute and give text color as red and id attribute and give the value id value as "heading " in the above the given h1 tag using dom function /

elementTwo[0].style.color = "red";
elementTwo[0].id = "heading";
console.log(elementTwo[0].outerHTML);

//.......................................................................................................................................................................................................................

//Q-8:-

//Create an HTML page having content as Hello world and a button named Replace Text. When user will click on this button page content should be changed to "Welcome to Elevation academy"

function replaceText() {
    const helloText = document.getElementById("helloText");
    helloText.innerText = "Welcome to Elevation Academy";
}

//.......................................................................................................................................................................................................................

//Q-9:-

//Write code to implement timer clock using JS -- display HH:MM:SS -- the time should keep updating every second

function showTime() {
    var date = new Date();
    var hr = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    var amPm = "AM";
 
    if (hr > 12) {
        hr = hr - 12;
        amPm = "PM";
    }
    if (hr == 0) {
        hr = 12;
        amPm = "AM";
    }
 
    hr = hr < 10 ? "0" + hr : hr;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
 
    let currentTime = hr + ":" + min + ":" + sec + amPm;
 
    document.getElementById("timer").innerHTML = currentTime;
}
setInterval(showTime,1000);
showTime();

//.......................................................................................................................................................................................................................

//Q-10:-

//Create a select drop down for selecting Year 20-21, 21-22 etc. Print the item text selected.

function getOption() {
    year = document.querySelector('#year');
    output = year.options[year.selectedIndex].value;
    document.querySelector('#output').textContent = output;
}

//.......................................................................................................................................................................................................................

//Q-11:-

//"Create a form having name ,email, phone no. , birth year Add validations - phone no. should start with 91 , it should be 10 digits email should be domain prepbytes.com birth year should be > 95"

