//first is to add eventlistener and create a function
//add an eventlistener that listens and does something when triggered
//create a function that will load the text 
//next you must create a new XMLHttpRequest() that is saved in a variable that can not be changed
//next you must initialize this using the open method
//then you must create another function that will equal the name of the variable and onload. onload is the function when it is successful! 
//then you must determine what you want it to do!
//if XMLHttpRequest is successful then what do you want it to do?
//how do we know it is successful? 
//next we must json parse it and then document it on the DOM
//and what will happen if it doesnt work??
//afterwards you use the send method to send the request

document.addEventListener('DOMContentLoaded', function(){

document.getElementById('button').addEventListener('click', loadText);

function loadText() {

    const xml = new XMLHttpRequest ();

    xml.open('GET', 'http://swapi.dev/api/people/3/', true);

    xml.onload = function () {
        if (this.readyState === 4 && this.status === 200) {
            const json = JSON.parse(this.responseText);
            document.getElementById('dataOutput').innerHTML = JSON.stringify(json)
        } else if (this.status === 404) {
            document.getElementById('dataOutput').innerHTML = '404 Error: File Not Found!';
        }
    }
    xml.send();
    }

});