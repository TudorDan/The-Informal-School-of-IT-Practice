/*GET
start with a simple but common request. We need to ask the server for the name of a person, given that person’s unique ID.*/
var xhr = new XMLHttpRequest();
xhr.open('GET', 'myservice/username?id=some-unique-id');
xhr.onload = function() {
    if(xhr.status === 200) {
        alert('User\'s name is ' + xhr.responseText);
    } else {
        alert('Request failed. Returned status of ' + xhr.status);
    }
};
xhr.send();

/*POST
Now that we have the user’s full name, let’s go ahead and change it. We will again address this user by ID. We’ll need to POST a message to our server for that particular user, and include the user’s new name inside the request body as a URL encoded string. The server will return the updated name in its response, so we should check that to make sure all is well.*/
var newName = 'Johm Smith',
xhr = new XMLHttpRequest();
xhr.open('POST', 'myservice/username?id=some-unique-id');
xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
xhr.onload = function() {
    if(xhr.status === 200 && xhr.responseText !== newName) {
        alert('Something went wrong. Name is now ' + xhr.responseText);
    } else if(xhr.status !== 200) {
        alert('Request failed. Returned status of ' + xhr.status);
    }
};
xhr.send(encodeURI('name=' + newName));

/*Sending and Receiving JSON -> PUT
We now need to communicate with an API that expects JSON, and returns it in the response. Say we need to update some information for a specific user. Once the server processes our update, it will echo all current information (after the update) about that user in the response. The proper method for this request is PUT*/
var xhr = new XMLHttpRequest();
xhr.open('PUT', 'myservice/user/1234');
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.onload = function() {
    if(xhr.status === 200) {
        var userInfo = JSON.parse(xhr.responseText);
    }
};
xhr.send(JSON.stringify({
    name: 'John Smith',
    age: 34
}));

/*Uploading Files -> POST
Given the following markup: <input type="file" id="test-input">
let’s send a POST where the entire payload of the request consists of the file data:*/
var formData = new FormData(),
file = document.getElementById('test-input').files[0],
xhr = new XMLHttpRequest();
formData.append('file', file);
xhr.open('POST','myserver/uploads');
xhr.send(formData);
//now, let’s send the file as the payload of the request:
var file = document.getElementById('test-input').files[0],
xhr = new XMLHttpRequest();
xhr.open('POST', 'myserver/uploads');
xhr.setRequestHeader('Content-Type', file.type);
xhr.send(file);