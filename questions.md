# Questions

**What is the difference between Component and PureComponent? give an example where it might break my app.**

In React functional programming, components are functions. So we can address this question by explaining the difference into a function and a pure function. A pure function is one that has no dependency on another function, a basic example can be the following:

```typescript
//Example of a pure function
const product = (a, b) => a * b;

//Example of a non pure function
const squaredPow = (n) => product(n, n);
```

- `product` is a pure function because only depends of the arguments `a` and `b` for running it's inner logic for computing a result. On the other hand `squaredPow` depends of `product`, a function that needs to be defined previously in order to `squaredPow` can compute it's result.

Passing this concept to React, an example of a pure component is the one that is atomic like a `<Button />` or `<Input />` and of a non pure component can be a `<SearchBar />` which combines the input and button components. So basically the search bar needs that the smaller components to be stable, if no, it will break and crash the app.

**Context + ShouldComponentUpdate might be dangerous. Can think of why is that?.**

It can bring performance problems if we abuse of re-updating a context that wraps a large set of sub-components. If we need to observe an state change and re-send this to the context, is very important to be aware that context re-renders everything it's wrapping. So for this reason we need to try minimize the number of times information is sent to a context. Some good examples, where context must be used, are for avoid prop-drilling between nested components and HoCs definitions for giving communication to the children with the HoC. But using context as a state manager is not a good idea.

**Describe 3 ways to pass information from a component to its PARENT.**

- Using react context, where the parent defines a provider and its setters are put as values inside the provider to be consumed by the children and grandchildren components.
- By passing a parent setter directly to the children component as a prop, so the children can consume this setter function to update the parent's state.
- By passing a callback function, which inside it's logic has a setter, so the parent pass it as a prop to the children which consumes it, then the argument of this function returns the new information to be set at parent component.

**Give 2 ways to prevent components from re-rendering.**

- By using `React.memo` hook, we can also add custom logic to evaluate `prevState` vs `currentState` in order to consider if is necessary to trigger a re-render.
- To work with a state manager like `redux` or `mobx` being very strict with following the best practices when using this libraries.

**What is a fragment and why do we need it? Give an example where it might break my app.**

- A fragment is represented with this syntax `<></>` and is very useful for wrapping components without the need of creating an extra html tag that can impact our layout (commonly if we use css specificity). `<></>` is not rendered on the browser.

With fragment:

```tsx
<>
  <div>1<div>
  <div>2<div>
<>
{/*Output on browser*/}
<div>1<div>
<div>2<div>

```

Without fragment:

```tsx
<div>
  <div>1<div>
  <div>2<div>
</div>

{/*Output on browser*/}
<div>
  <div>1<div>
  <div>2<div>
</div>
```

React fragment can cause problems on the following scenario:

```tsx
const Component1: React.FC<Props> = (props) => {
  <React.Fragment {...props}>
    <div>1</div>
    <div>2</div>
  </React.Fragment>;
};

const Component2: React.FC<Props> = (props) => {
  const ref = useRef();

  return <>
    <div>1</div>
    <Component1 ref={ref}>
  </>
}
```

Ref will not be taken because fragments are not rendered on the dom.

**Give 3 examples of the HOC pattern.**

- React Material UI System API:

```tsx
//Adds padding and margin props to a Card by component composition through hocs
withPadding(withMargin(Card));
```

- HoC for reusable logic of form input validations

```tsx
withControlledField(Input);
withControlledField(Select);
withControlledField(Checkbox);
```

- HoC for wrapping with a context a child component that needs to consume apis of a parent component.

```tsx
withFormActions(FormLayout);
```

**what's the difference in handling exceptions in promises, callbacks and async...await.**

- Promises: Multiple errors can happen at same time because they occur inside of async functions.

```ts
  apiCall1().then(...).catch(error => ...);
  apiCall2().then(...).catch(error => ...);
```

- Callback: error must be thrown inside the callback function for being catch.

```ts
try {
runCallback(() => {
  ...
  throw 'An error happened'
  ...
})
} catch (error) {
  setErrorMessage(handleError(error));
}
```

- Async - await: (Promises syntax sugar) more sequential and easier control of the code flow.

```ts
try {
  const response1 = await apiCall1(); //If it fails, immediately is catch.
  const response2 = await apiCall2();
} catch (error) {
  setErrorMessage(handleError(error));
}
```

**How many arguments does setState take and why is it async.**

- It accepts 2, the second argument is a callback function that is run when the state update has finished. setState needs to be async to avoid ui get frozen while there are many operations at frontend level.

**List the steps needed to migrate a Class to Function Component.**

- To have a good understanding of the class lifecycles.
- Rewrite each lifecycle into a useEffect hook.
- Rewrite state setters with useState hook.
- Pass props as function parameters.

**List a few ways styles can be used with components.**

- By working with normal css classes and importing a .css file on the component.
- Programmatically by using the style object prop.
- Third party libraries for making styles from material ui and styled components.
- ClassNames conditionally rendering.

**How to render an HTML string coming from the server.**

- By using the built in solution dangerouslySetInnerHTML or a third party library like react html parser.
