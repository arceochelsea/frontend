document.addEventListener('DOMContentLoaded',function(){

    document.getElementById('getMessage').onclick= () => {
      
fetch('/json/cats.json') 
  .then(response => response.json())
  .then(data => {
    document.getElementById('message').innerHTML = JSON.stringify(data);
  })

    };
  });

//the first line is the one that makes the request. (line 5)
//fetch(URL) makes a get request to the URL. the method then returns a Promise.

//After a Promise is returned if the request is successful the then method is executed which takes the response and converts it to JSON format.

//the then method also returns a Promise, which is handled by the next then method. the argument in the second then is the JSON object you are looking for.

//then it selects the element that will receive the data. then it modifies the HTML code of the element by inserting a string created from the JSON object returned from the request


