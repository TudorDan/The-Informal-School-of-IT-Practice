var root = 'https://jsonplaceholder.typicode.com';
//GET
fetch(
    root + '/posts/1', {
    method: 'GET'
}).then(function(response) {
    return response.json();
}).then(function(jsonResp) {
    console.log(jsonResp);
});

//POST
fetch(
    root + '/posts', {
    method: 'POST',
    body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1
    })
}).then(function(response) {
    return response.json();
}).then(function(jsonResp) {
    console.log(jsonResp);
});

//PUT
fetch(
    root + '/posts/1', {
    method: 'PUT',
    body: JSON.stringify({
        id: 1,
        title: 'foo',
        body: 'bar',
        userId: 1
    })
}).then(function(response) {
    return response.json();
}).then(function(jsonResp) {
    console.log(jsonResp);
});

//DELETE
fetch(
    root + '/posts/1', {
    method: 'DELETE'
}).then(function(response) {
    return response.json();
}).then(function(jsonResp) {
    console.log(jsonResp);
});