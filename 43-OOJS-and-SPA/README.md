# OOJS and SPAs
- How can we use OOJS when building out Single Page Applications?

### Remember that Pokemon Teams lab?
- Image having an App class, a Trainer class, and a Pokemon class.

- We will create 1 instance of App when the DOM loads
- App will create 8 instances of Trainer
- Each Trainer will create many instance of Pokemon

App => Trainer => Pokemon

break up our app instance by creating:

we have an ARRAY of object
{}
so we can't call .render() on any of them

## next goal:
- TRANSFORM this array of objects
to an array of instances

[{}, {}, {}, {}, ...]
[Trainer{}, Trainer{}, Trainer{}, Trainer{}, ...]

- instances of Trainer
   trainer = new Trainer()
   trainer.render()
- instances of Pokemon
   pokemon = new Pokemon()
   pokemon.render()

#### We have to make sure we pass the correct data to each instance!

```
 <header>
  <h2>Pokemon Teams!</h2>
 </header>
 <main>
  <div class="card" data-id="1"><p>Prince</p>
    <button data-trainer-id="1">Add Pokemon</button>
    <ul>
      <li>Mittie (Farfetch'd) <button class="release" data-pokemon-id="149">Release</button></li>
      <li>Rosetta (Eevee) <button class="release" data-pokemon-id="150">Release</button></li>
      <li>Rod (Beedrill) <button class="release" data-pokemon-id="151">Release</button></li>
    </ul>
  </div>
</main>
```


## Tips going into Mod 4
- Spread operator to create a copy of an array or object
- Enhanced Object Literals/Object Initializer
- Object destructuring
