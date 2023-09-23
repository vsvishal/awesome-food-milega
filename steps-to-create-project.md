## Steps to create new react project using parcel

1. Create App.js, index.html, index.css
2. npm init
3. npm install -D parcel

## 👨‍🚀 To ingnite app using parcel package use below cmd

```javascript
    npx parcel build index.html - for prod build
    npx parcel index.html - for dev build
```

## 👨‍🚀 Higher Order component

- It is a function which takes in a component and it enhances received component and retuns back
- It is Pure function, means it does not change any behaviour of received component
- It just enhances the component (adds something on top of it) and returns back

## 👨‍🚀 Can I modify state variable of Parent from Children (Lifting the state up)

https://react.dev/learn/sharing-state-between-components#lifting-state-up-by-example

- Its not possible directly
- We can create a state handler function in the parent component and pass it as a prop of the child component. After that, we can use the child component function to set the parent component's state. In such a way, we can manage the state of the parent component from the child component.

## 👨‍🚀 To avoid prop drilling (passing props from top level component to way down to component) use React context()

## 👨‍🚀 Redux is not a mandatory tool to use in React, application state also can be managed without Redux in React. Mostly use Redux for very large application. Use "Redux Toolkit" instead of native "React-Redux", its simplifies.

## 👨‍🚀 There are various external libraries like Redux

- Redux (One advantage of Redux is application becomes easier to debug)
- zustand

## 👨‍🚀 Redux

- Redux store is a big javascript object which is kept in a Global central space
- To avoid Redux store to become very large, clumsy there is slices in redux store (e.g loggedIn users slice, cart slice)
- [For Write Data] e.g When you click on button => Redux dispatches an "Action" => Action calls the "Function" (Reducer) => then this Function updates the slice of Redux store [modies the required thing (e.g Cart)]
- For Reading Data we use "Selector" als known as "Subscribing to store" (If data in store changes, the component updates automatically). React Subscribe through selector

![Redux theory](https://github.com/vsvishal/react-projects/blob/09c1bc54a9ad14192b406e4f7570dbd58ed2d7f8/images/redux-theory.jpg)
