## AJAX, Promises, and Fetch (Communicating with APIs)
- What is AJAX? Async JavaScript and XML
- What is blocking (sync) vs non-blocking code (async)?

### Welcome Fetch: the non blocking way to communicate with servers
- Built in web api
- Get JSON data
- Returns a promise object
- Practice with:  https://animal-farm-api.herokuapp.com/animals
  - Goal: make a webpage that requests animal data
     from an API and renders that data on the DOM

### Promises and what are they
- [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- Practice with: http://localhost:3000/hello/1
- pending
- fulfilled (resolved/rejected)
- How to unwrap a promise using `.then`
- At Flatiron, we will work with promises via Fetch rather than creating our own Promises

### Promise chaining
- `.then().then()`
- Easier to read, easier to manage

