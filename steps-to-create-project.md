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
