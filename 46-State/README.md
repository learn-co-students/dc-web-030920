## Imperative Programming
- Explicitly tell your program every step it needs to execute

## Declarative Programming
- Tells the program 'what' the webpage should be/should look like
- The 'how' is abstracted

## State
- The "state" of the app
- Represents things that change about the DOM
- State is similar to props, but it is private and fully managed by the class component (can't be functional)

##Planning:
- The state of our application is:

		state = { selectedPainting: object }
		PaintingDetail needs to use this state in order to display the selectedPainting
		Painting compoennt needs to UPDATE this state in order to display a NEW selected painting

## Where to Put State?
- Single Source of truth
	- A comment ancestor between all components that 'touch' on this state
	- data can only flow from parent to child, not sibling components
- Set up the state object using this.state in the constructor (need to call super())
	- or outside the constructor

## Informational Flow
- Parent communicates to child by passing props
- How does child communicate with parent?
	- State Changing Callback!!
- Don't modify state directly, use this.setState({})
  - works asynchronously


- When does the DOM get re-rendered?, when there is a new state 




#### When <some event> happens?
- I want to change the DOM by manipulating state
 - and state changes will propagate as props to update all components

 When some event happen => change the state => REACT will change DOM




`<div class="ui card">
	<div>
		<img src="https://d32dm0rphc51dk.cloudfront.net/pVc7CubFzVlPhbErTAqyYg/medium.jpg">
	</div>
	<p>Portrait of a Carthusian by Petrus Christus</p>
	<p>Height: 11.5 x Width: 8.5</p>
</div>`
