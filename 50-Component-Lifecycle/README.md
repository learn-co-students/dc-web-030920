# React Component Lifecycle
- For class components that extend React.Component

## Available Methods
- http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
- https://reactjs.org/docs/react-component.html

## Task Lister
- Walk through

App* {state of tasksList, formText}
 |- Form
 |- TaskList
      |- Task* {state of color}

## Lifecycle Methods only for class components
- Goals:
 X read our tasks from an API
 X implement feature to add task and have is persists
 X deleting task and have that persists


### Creation
- `componentDidMount()`
 - fetch
 - add extra event listeners
 - set up timers
 - things that require the DOM

### Update
- `render()`
 - has a return value
 - don't update state here
- `componentDidUpdate()`
 - fetch maybe?

### Deletion
 - `componentWillUnmount()`
  - called right before element is removed from DOM
  - clean up things from componentDidMount

#### Where to put fetch?
- ComponentDidMount
- ComponentDidUpdate
- Event handlers

### React Hooks?

### Less used methods
- `shouldComponentUpdate()`
- `getDerivedStateFromProps()`
- `getSnapshotBeforeUpdate()`

### Deprecated Methods
- `componentWillMount()`
- `componentWillReceiveProps()`
- `componentWillUpdate()`
