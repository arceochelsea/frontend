//first is to add eventlistener to JS

document.addEventListener('DOMContentLoader', function () {

//add an eventlistener that listens and does something when triggered
document.getElementById('button').addEventListener('click', loadText);


//create a function that will load the text

function loadText() {


//next you must create a new XMLHttpRequest() that is saved in a variable that can not be changed!

    const req = new XMLHttpRequest();

    //next you must initialize this using the open method

    req.open('GET', 'https://swapi.dev/api/people/1/', true);

    //afterwards you use the send method to send the request

    req.send();

    



    }

});

//next inside of the {} we want to display what happens for the onclick function inside of the DOM


            //step 1 XMLHttpRequest object is created and saved in the req variable


            //step 2 the open method initalizes a request.
            //since it is GETTING info/data from API then it is 'GET'
            //'/json/cats.json' is the API URL
            //3rd argument is a Boolean value. setting it to TRUE makes it an asynchronous request.


            //step 3 the send method sends the request


            //step 4 the onload event handler parses the returned data and applies the JSON.stringify method to convert the JS object into a string.
            //that string is then inserted as the message text. 

