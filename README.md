# Traffic Light

Objectives:

- Creating and nest Components
- Passing props and how to using them in JSX
- Importing and setting up state
- Updating state and re-rendering the Component

## Working Version

Here is a [working CodeSandBox solution](https://zhtbi.csb.app/) of the app so you can examine the components in React DevTools.

## Starter CodeSandbox

Here is our [Starter CodeSandbox](https://codesandbox.io/s/traffic-light-single-app-component-starter-pqrpw)

### Instructions


#### TrafficLight Component

- Examine the working live solution and determine the functionality needed
- Examine the HTML provided in `public/index.html` as this contains the HTML elements needed for the design (You'll be cutting the HTML and pasting it into App.js)
- All the CSS has been included in `styles.css`
- Determine how best to organize the code needed to create the control panel and traffic bulbs
- Create a file called `bulbData.js` that contains the data and organize it as you see fit. 
  
<details><summary>A suggested way to organize bulbData.js</summary>

```javascript
 const bulbData = [
  {id: 'stop', color: 'red'},
  {id: 'slow', color: 'yellow'},
  {id: 'go', color: 'green'},
]
```
</details>

- Create a `TrafficLight` Component (this component will only receive data)

- Work out the remaining logic needed to implement the design


#### App Component

- Import `bulbData.js` and set it 
- Import `useState` into `App`
- Import the `TrafficLight` Component
- Loop over the bulbData and return a `TrafficLight` Component and pass it the data it needs

### Bonus - Bulb Component

- Create a new `Bulb` Component that will render the a single bulb
- Pass the `Bulb` Component the color it needs based the state of the application
  
