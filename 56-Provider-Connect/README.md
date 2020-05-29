## Problems we still have
- Everything in one file! How do we organize our code?
- Referencing store/state in different files


- store.subscribe(() => this.forceUpdate())
  - Re-rendering components automatically
    - Decide which state each component needs


Problem:
- getting our component to re-render when the store's state changes
  - Components only re-render if there's a change in props
  - Trick the components into thinking store's state = it's props
- use React-Redux
- map the Store's State to props in the component 

## Redux dev tools
- [Chrome Extension](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en)


### React-redux
- [Documentation](https://github.com/reduxjs/react-redux/blob/master/docs/api.md)
js```npm install react-redux```


- Provider and connect


### Provider
- appears once
- wrap our app in a <Provider> component
- takes in store prop

### Higher Order Components
- a function that takes in a component and returns a new component (usually with additional props)
js```
const withCount = (SomeComponent) => {
  class WrappedComponent extends React.Component {
    render(){
      return <SomeComponent count={store.getState().count} {...this.props} />
    }
  }
  return WrappedComponent
}
const ConnectedHeader = withCount(Header)
```

### connect
- Dependent on Provider component
- Used to connect the state inside store to the props inside a Component
- Use Case:
  - Header components needs state.count js```store.getState().count```
  - It'd be nice if we could pass that data was props to Header component
  - js```this.props.count```

- Takes in a function and returns a Higher Order Component


### Using connect
- js
```
const withCount = connect((state) => {
    return {count: state.count}
})
const ConnectedHeader = withCount(Header)
```

## mapStateToProps
js```
const mapStateToProps = (state) => {
    return {count: state.count}
}
const withCount = connect(mapStateToProps)
const ConnectedHeader = withCount(Header)
```
js```
export default connect(mapStateToProps)(Header)
```
