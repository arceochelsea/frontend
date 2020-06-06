//first is to add eventlistener to JS

document.addEventListener('DOMContentLoaded', function(){

//next inside of the {} we want to display what happens for the onclick function inside of the DOM
    document.getElementById('getInfo').onclick = function(){

            //step 1 XMLHttpRequest object is created and saved in the req variable
            const req = new XMLHttpRequest();
            

            //step 2 the open method initalizes a request.
            //since it is GETTING info/data from API then it is 'GET'
            //'/json/cats.json' is the API URL
            //3rd argument is a Boolean value. setting it to TRUE makes it an asynchronous request.
            req.open('GET', 'https://pokeapi.co/api/v2/pokemon/ditto', true);


            //step 3 the send method sends the request
            req.send();

            //step 4 the onload event handler parses the returned data and applies the JSON.stringify method to convert the JS object into a string.
            //that string is then inserted as the message text. 
            req.onload = function (){
                const json = JSON.parse(req.responseText);
                document.getElementsByClassName('infoBox')[0].innerHTML = JSON.stringify(json);
            };


    };

});