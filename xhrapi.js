document.addEventListener('DOMContentLoaded', function(){

document.getElementById('button').addEventListener('click', loadText);

function loadText() {
    //alert('I am the genie in the lamp, why did you click me?');

    //1. step number 1 in the XHR API process 
    //https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
    const xhr = new XMLHttpRequest()


    // troubleshooting
    console.log('1. xhr = new');
    console.log(xhr.readyState); //should == 4
    console.log(xhr.status); // 200 - 299
    console.log('--------------');

    //2. step number 2 
    // initializes a request https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/open
    // The XMLHttpRequest method open() initializes a newly-created request, or re-initializes an existing one.
    //XMLHttpRequest.open(method, url[, async[, user[, password]]]) (last 3 are optional)
        //method The HTTP request method to use, such as "GET", "POST", "PUT", "DELETE", etc. Ignored for non-HTTP(S) URLs.


    xhr.open('GET', 'https://api.github.com/users', true); //if steps 3 and 4 are successful the url data will be stored in xhr.responseText
    //must have https 


    //troubleshooting
    console.log('2. xhr.open');
    console.log(xhr.readyState); //should == 4
    console.log(xhr.status); // 200 - 299
    console.log('--------------');


    //3. Step number 3
    // The XMLHttpRequestEventTarget.onload is the function called when an XMLHttpRequest transaction completes successfully.

    
    xhr.onload = function() {
        if (this.readyState === 4 && this.status === 200) {
            const responseJSON = JSON.parse(this.responseText);
            console.log(responseJSON);
            let html = `<ul><li>${responseJSON[0].login}</li></ul>`; //
            document.getElementById('dataOutput').innerHTML = html;



            //troubleshooting
            console.log('3. xhr.unload')
            console.log(xhr.readyState);
            console.log(xhr.status);
            console.log('--------------');

        } else if (this.status === 404) {
            document.getElementById('dataOutput').innerText = '404 Error: File Not Found';
        }

    }

    //4. Step Number 4
    
    xhr.send();

    //troubleshooting
    console.log('4. xhr.send');
    console.log(xhr.readyState);
    console.log(xhr.status);
    console.log('--------------');
}

});