# Single Page Applications

### Building out the frontend (Deliverables)
X As a user, I can see all Pokemon sprites
X As a user, I can create Pokemon
X As a user, I can click a pokemon to delete it






- When <some event> happens, I want to make a <what kind of> fetch call to the API, and manipulate the DOM <how?>

- When the page loads, I want to make a GET request to get ALL my pokemon, and then render ALL pokemon to the DOM
- When a user submits the form, I want to make a POST fetch to add the pokemon resource to the backend data, and manipulate the DOM by rendeing a new pokemon card inside #pokemon-container
- When a pokemon is clicked, I want to make a DELETE fetch, and that pokemon card should dissapear from the DOM


### Mocking your own API
```
json-server --watch db.json
```

### JSON Server Routes
```
GET    /pokemon
GET    /pokemon/1
POST   /pokemon
PUT    /pokemon/1
PATCH  /pokemon/1
DELETE /pokemon/1
```
To POST a new Pokemon:
```
body: JSON.stringify({
  "name": "charmeleon",
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png"
})
```

### Notes:
- [Documentation of using Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
- `body` of a fetch HAS to be a string!!
- Hassle-Free APIs: https://github.com/public-apis/public-apis/blob/master/README.md
