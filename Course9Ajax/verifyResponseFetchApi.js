fetch(root + '/posts/1', { method: 'GET' })
    .then(function(response) {
        if(response.ok) {
            return response.json();
        }
        throw new Error('Network response was not ok.');
    })
    .then(function(jsonResp) {
        console.log(jsonResp);
    })
    .catch(function(error) {
        console.log('There was a network error', error);
    });

//Headers in Fetch API
var myHeaders = new Headers();
myHeaders.append('Content-Type', 'text/plain');
myHeaders.set('Content-Type', 'text/html');
console.log(myHeaders.get('Content-Type'));
myHeaders.delete('Content-Type');