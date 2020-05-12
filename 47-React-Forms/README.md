### What is the new state?
- single source of truth!
- State should always be complete but minimal!!

state => things in the DOM that is changing
- inputValue


state = {
  inputValue: ""
}

//we have this global paintingsData
derived value:   shownPaintingsList => filter the paintingsData[] using state.inputValue


## Controlled Forms and Event Callback handlers
- State represent things on your DOM that can change
- Forms are things on the DOM that can change


A good practice is to:
 - have all forms/inputs control state
 - and in turn, the state should control the form!
 - no more document.querySelector to get values because data is always in the state!




### Mod 3 Thinking:
 - When <some event> happens, I want to manipulate the DOM <how>?

### Mod 4 Thinking:
 - When <some event> happens, I want to manipulate state in order to manipulat the DOM



## On Your Own
- practice working with other input types (textarea, select, checkbox, radio button)
- https://reactjs.org/docs/forms.html

## Upcoming Lab Review - Animal Lab (Combining It All)





















`<div className="right menu">
  <div className="item">
    <input className="ui search" placeholder="Search..." />
  </div>
</div>`
