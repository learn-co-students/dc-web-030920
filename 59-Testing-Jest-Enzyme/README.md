# Testing with Jest and Enzyme

## SWBAT

* Use Test Driven Development to build a React App
* Understand the different roles Jest and Enzyme play in React tests
* Test a React application with Jest and Enzyme
  * Include and install Enzyme in a create-react-app application
  * Write unit tests for Redux reducers
  * Write unit tests for React components
  * Utilize Snapshot and add it to your own project
  * Write tests to test for different user interactions (if time)

## Resources

* [Jest](https://jestjs.io/docs/en/getting-started)
* [Enzyme](https://airbnb.io/enzyme/)
* [Create React App Testing Tips](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#running-tests)
* [Helpful React Testing Tutorial](https://testdriven.io/tdd-with-react-jest-and-enzyme-part-one)

### What is TDD

* Development method that utilizes a short development lifecycle: red-green-refactor
  * Red: write the tests, run the test suite, watch tests fail
  * Green: write the code to pass the test, run test suite, watch test pass
  * Refactor: refactor code while keeping the tests green

* Pros:

  *Making sure things work the way you intende them to work
  *When your app breaks, you know what is breaking it
  *Helps you formulate what it is you're trying to accomplish
  *Refactor with confidence

  * Forces you to design before implementing
  * Module code is easier to test, so it forces good architecture
  * Increase confidence that code behaves as expected
  * Easier collaboration (team members can edit code with confidence)
  * Intentional changes only; refactoring is easier
  * Good documentation

* Cons:

  * TIME! It takes forEEEEEEvar
  * Tests can change if the project changes, so you have to re-write both the test and the code

  * Difficult to write
  * Takes time and slows down development (initially)
  * Difficult to learn best practices (know what to test)
  * Mocking data can be hard
  * Forces you to think about the expected outcome before implementing

### Different Types of Testing

* Unit Tests:
  * Individual units or components are tested
  * Can be an entire module, but most commonly an individual function or procedure
  * Each test case should essentially be "pure" and tested independently
    * Mock objects can be used to assist testing a module in isolation

* Integration Tests:
  * Individual unit tests are combined and tested as a group
  * The purpose is to expose faults in interaction between unit tests

* Validation Tests:
  * Evaluates the software at the end of the development process
  * Determines whether or not the client's needs have been met
  * Also referred to as software Quality Control

* Regression Testing:
  * Main purpose is to confirm a new feature, added functionality, or bug fix has not caused a new bug in the system
  * Goal is to ensure existing functionality is working as expected

* Smoke Testing:
  * Also known as "Bulid Verification Testing"
  * A selection of test cases are run to ensure the most important functions work
  * The results determine in the build is stable enough to proceed with full testing

### Classifications of Testing Software

* Test Runners
  * A library or tool that picks up the source code that contains unit tests, test settings, and then executes them and writes their results to the console or log files
  * Renders fake server so you don't interact with a real database
  * Test code with real/fake requests and responses
  * E.g. Rspec

* Test Frameworks
  * Rules for writing test cases
  * Provides the structure to write test cases
  * Used to organize and execute tests
  * E.g. Mocha

* Assertion Library
  * Establishes the condition for the test to complete and render true or false
  * Gives you functions to declare that some condition should be true
  * E.g. Chai

* Testing Plugin
  * Additional features you need to fully test the entire app
  * E.g. Sinon plugin includes spies, stubs, and mocks

## What are Jest and Enzyme

### Jest

* Built by Facebook and included in React
* Is a framework, runner, and assertion library all packaged up
* Doesn't require any configuration experience
* Can be used with other libraries and testing frameworks
* Comes built in when you use `create-react-app`
* To run the test suites, type `npm test` in the terminal

[To the DOCS 🚀](https://jestjs.io/docs/en/getting-started)

* Matchers are probably the most common functions used with the Jest library

### Enzyme

* A plugin developed by AirBnB
* Allows you to render your app without actually rendering your app
* Must be installed and configured separately

[To the DOCS 🚀](https://airbnb.io/enzyme/docs/installation/react-16.html)

In your project directory execute:

```bash
npm i --save-dev enzyme enzyme-adapter-react-16
```

Create a file `src/setupTests.js`

```javascript
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });
```

## Writing Tests

### Unit Testing Simple Functions

* Pure functions are easy to test because we just need to call them and check their return value
* We'll test our reducers for each action
* These tests look similar to rspec with `describe` creating the test suite and `it` creating a single test

By convention, we put the tests in the same folder as the component you are testing (it makes imports easier). We'll create `src/reducers/manageBand.test.js` file and because Jest is built into React, we only need two imports:

```javascript
import React from 'react';
import manageBand from './manageBand';
```

After that, we declare our suite with a name and an arrow function

```javascript
describe('manageBand', () => {
  /* Test will go here */
})
```

Each test will need a name and an arrow function. If we look at the switch statement in our reducer, we see we have three actions we can test, so we'll write a test for each

```javascript
describe('manageBand`, () => {
  it ('handles @@INIT'), () => {
    // code
  });

  it ('handles ADD_BAND', () => {
    // code
  });

  it ('handles DELETE_BAND', () => {
    // code
  });
});
```

The body will also follow a consistent pattern. Jest will mark a test as passed if all assertions are true

```javascript
it ('initializes state.band to empty array', () => {
  const action = { type: '@@INIT' };
  expect(manageBand(undefined, action)).toEqual({ bands: [] });
});
```

### Testing Container Components

* A bit more tricky as these are meant to be seen in the browser
* With Enzyme's `shallow` function, we can mock render one component at a time instead of the entire React app. It will return a JSX object describing the result we can then use our matchers on

The `Bands` component only takes in an array of `band` objects and renders a `Band` component for each. We will need some mock band data to simulate this.

```javascript
describe('Bands', () => {
  it('should render Band components', () => {
    const mockBands = [
        { id: 1, name: 'The Beatles' },
        { id: 2, name: '*NSYNC' }
    ];

    const wrapper = shallow(<Bands bands={mockBands}/>);
    expect(wrapper.find(Band).length).toBe(mockBands.length);
  });
});
```

This test does not render all the children. Instead it lets us look for what we care about: did the data get mapped? To figure out if it has displayed correctly, we will need to use `Snapshot`

### Snapshot Testing

* Once we get the component looking the way we want, we can take a `snapshot` of it to make sure it never changes again (or fails the tests if it does so)
* This description gets saved to a file, where all subsequent tests are tested against it

First we need dummy data:

```javascript
const mockProps = {
  id: 1,
  name: 'Pat the Bunny',
  deleteBand: jest.fn()
};
```

Next we need to shallow render the component, then we expect that it matches the snapshot:

```javascript
describe('Band', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Band {...mockProps} />);
    expect(wrapper).toMatchSnapshot();
  });
});
```

The first time we run it, a snapshot will be created which will be used for any further test runs.

### Mocking Functions

* Mock functions give us a way to test to make sure a function was called correctly
* The `mockProps` object included a `deleteBand` key with the value set to `jest.fn()`. This is a mock function. It doesn't do anything expect remember it was called, so we can use Jest matchers on it

We want `deleteBand()` to be called when a button in the `Band` component is clicked. We can test this with Enzyme's `simulate` function:

```javascript
wrapper.find('button').simulate('click');
```

Then we just need to make our assertions:

```javascript
expect(mockProps.deleteBand).toBeCalledWith(mockProps.id);
```
