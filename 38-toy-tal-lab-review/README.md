# Toy Tale Lab Review

## Today's Goals

* Practice the **three pillars** of vanilla JS
* Fetch resources from the backend and render them to the DOM
* Work with event listeners for creating new resources
* Persist new resources to the backend
* Work with event listeners for updating existing resources
* Persist updates to existing resources on the backend
* Manipulate the DOM both pessemistically and optimistically

## Deliverables

1. Render all toys to the DOM

* When _the DOM loads_ happens
* I want to make _a GET fetch_ request
* Manipulate the DOM _display the toys_

2. Create a new toy and persist it to the database

* When _our user submits the form_ happens
* I want to make _a POST fetch_ request
* Manipulate the DOM _by adding the new toy to the page_

3. Like a toy

* When _I click the like button_ happens
* Manipulate the DOM _increase the likes by 1_
* I want to make _a PATCH fetch_ request

## Notes

* Optimistic Rendering
  * Manipulating the DOM before communicating to the server
* Pessemistic Rendering
  * Manipulating the DOM with information received from the server

### Passing ADDITIONAL paramaters to our callback functions

* Event Listeners take in callback functions in the form of function **objects** as their second argument. In order for the function to **wait for the event** before firing, it must be given an object and not a function invocation (e.g. fn())

```javascript
  ✅ myAwesomeElement.addEventListener('click', myFunctionObject)
  ❌ myAwesomeElement.addEventListener('click', myFunctionInvocation())
```

* Your callback function takes in the event object as its default parameter. If you want to pass in **any other argument**, you will need to **wrap** that callback function in a funcion object. See below:

```javascript
  ✅ myAwesomeElement.addEventListener('submit', (event) => myCallbackFunction(event, argument2, argument3))
  ✅ myAwesomeElement.addEventListener('submit', function() {
        myCallbackFunction(argument1, argument2, argument3)
     })
  // Note: the callback function does not HAVE to accept the event as a parameter if it is not being used
  ❌ myAwesomeElement.addEventListener('click', myFunctionInvocation(argument1, argument2))
  // This will invoke the function, so it will NOT wait for the event before firing!! 😱
```

### Accessing the form input field values

* Form nodes have different fields that are represented as children nodes in the DOM. We are able to access children nodes much like we would access elements in an array:

```javascript
  // event.target is the form
  // event.target[0] is the first field in the form
  const bodyInfo = {
    name: event.target[0].value,
    image: event.target[1].value,
    likes: 0
  }
```

* This works; however, what would happen if we wanted to change the order of our form? We would have to re-write our code 😰. A better practice is to access our elements in a way that would persist regardless of the order it's rendered on the form
* If you take a look at the index.html file, you may notice that our input fields have `name` attributes

```html
    <input
      type="text"
      name="name"
      value=""
      placeholder="Enter a toy's name..."
      class="input-text"
    />
    <br />
    <input
      type="text"
      name="image"
      value=""
      placeholder="Enter a toy's image URL..."
      class="input-text"
    />
```

* We can access these html nodes by calling the name off of the parent node. You can think of it as accessing a key in a hash

```javascript
  // ----------- Get the form values by accessing their name attribute ----------
  // ----------- In this example, order DOESN'T MATTER ----------
  const bodyInfo = {
    name: event.target.name.value,
    image: event.target.image.value,
    likes: 0
  }
```

-------------------------------------------------------------------------------

You've got a friend in need! Your friend Andy recently misplaced all their toys!
Help Andy recover their toys and get the toys back in the toy collection.

## Create Your Server

All of the toy data is stored in the `db.json` file. You'll want to access this
data using a JSON server. In order to do this, run the following two commands:

   * `npm install -g json-server`
   * `json-server --watch db.json`
   
This will create a server storing all of our lost toy data with restful routes
at `http://localhost:3000/toys`. You can also check out
`http://localhost:3000/toys/:id`

## Fetch Andy's Toys

On the `index.html` page, there is a `div` with the `id` "toy-collection."

When the page loads, make a 'GET' request to fetch all the toy objects. With the
response data, make a `<div class="card">` for each toy and add it to the
toy-collection `div`.

## Add Toy Info to the Card

Each card should have the following child elements:

  * `h2` tag with the toy's name
  * `img` tag with the `src` of the toy's image attribute and the class name "toy-avatar"
  * `p` tag with how many likes that toy has
  * `button` tag with a class "like-btn"

After all of that, the toy card should resemble:

```html
  <div class="card">
    <h2>Woody</h2>
    <img src=toy_image_url class="toy-avatar" />
    <p>4 Likes </p>
    <button class="like-btn">Like <3</button>
  </div>
```

## Add a New Toy

* When a user clicks on the add new toy button, a `POST` request is sent to `http://localhost:3000/toys` and the new toy is added to Andy's Toy Collection.
* The toy should conditionally render to the page.
* In order to send a POST request via Fetch, give the Fetch a second argument of an object. This object should specify the method as `POST` and also provide the appropriate headers and the JSON-ified data for the request. If your request isn't working, make sure your header and keys match the documentation.

```
POST http://localhost:3000/toys
headers: 
{
  "Content-Type": "application/json",
  Accept: "application/json"
}

body: JSON.stringify({
  "name": "Jessie",
  "image": "https://vignette.wikia.nocookie.net/p__/images/8/88/Jessie_Toy_Story_3.png/revision/latest?cb=20161023024601&path-prefix=protagonist",
  "likes": 0
})
```

* For examples, refer to the [documentation](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#Supplying_request_options).

## Increase Toy's Likes

When a user clicks on a toy's like button, two things should happen:

  * Conditional increase to the toy's like count without reloading the page
  * A patch request sent to the server at `http://localhost:3000/toys/:id` updating the number of likes that the specific toy has
  * Headers and body are provided below (If your request isn't working, make sure your header and keys match the documentation.)
  
```
PATCH http://localhost:3000/toys/:id
headers: 
{
  "Content-Type": "application/json",
  Accept: "application/json"
}

body: JSON.stringify({
  "likes": <new number>
})
```
