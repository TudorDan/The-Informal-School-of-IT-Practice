/**
 * If we want to access the data, we need 2 .then() handlers(callback).
 * If we want to manipulate the resource, we only need 1 .then() handler. We can use the second one to make sure the value has been sent.
 */
//Basic Fetch API template:
fetch(url)
    .then(response.something) //Define response type (JSON, Headers, Status codes)
    .then(data) //get the response type

//Practical example:
fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(data => console.log(JSON.stringify(data)))

/**
 * Showing a user:
 * The process consists of 2 .then() handlers(callback), the first one to define the object, and the second one to access the data.
 */
// Get user with id 2:
fetch('https://jsonplaceholder.typicode.com/users/2')
  .then(response => response.json())
  .then(data => console.log(data))

/**
 * Showing a list of users:
 * It is almost identical to the previous example except that the query string is /users, and not /users/2. 
 */
// Get all users
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => console.log(data))

/**
 * Creating a new user:
 * The HTTP protocol provides us with methods such as POST, GET,DELETE, UPDATE, PATCH and PUT. These methods are verbs that simply describe the type of action to be executed, and are mostly used to manipulate the resource/data on the server.
 * To create a new user with Fetch API, we’ll need to use the HTTP verb POST.
 */
// Create a new user:
fetch('https://jsonplaceholder.typicode.com/users', {
  headers: { "Content-Type": "application/json; charset=utf-8" },
  method: 'POST',
  body: JSON.stringify({
    username: 'Elon Musk',
    email: 'elonmusk@gmail.com',
  })
})

/**
 * Deleting a user:
 * In order to delete the user, we first need to target the user with /users/1, and then we define the method type which is DELETE.
 */
// Delete user:
fetch('https://jsonplaceholder.typicode.com/users/1', { 
  method: 'DELETE' 
}); 

/**
 * Updating a user:
 * The HTTP verb PUT is used to manipulate the target resource, and if you want to do partial changes, you’ll need to use PATCH.
 */
// Update user with id 3:
fetch('https://jsonplaceholder.typicode.com/users/3', {
  headers: { "Content-Type": "application/json; charset=utf-8" },
  method: 'PUT',
  body: JSON.stringify({
    username: 'Elon Musk',
    email: 'elonmusk@gmail.com',
  })
})