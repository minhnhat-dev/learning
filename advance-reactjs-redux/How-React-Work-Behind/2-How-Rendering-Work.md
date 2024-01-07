# How component are displayed on screen?
- A new render is triggered
- render is trigger -> render phase (React call component function and figures out how DOM should be update) -> commit phase(React actually writes in the DOM, creating , updating, inserting, deleting) -> browser paint
- Explain steps:
    - (1) render triggered:
        - two situation that trigger rendering
        - 1. Initial render app
        - 2. State updated by one or more component instances (re-render)
- rendering happen internally inside REACT not produce any visual changes.
# The virtual DOM (React Element Tree)
- 1. Virtual DOM: Tree of all React elements created from all instances in the component tree
- Virtual DOM just plain object -> that cheap and fast to create multiple trees
- Rendering a component will cause all of its child component rendered as well (no matter props changes or not) -> this is necessary because React don't know whether children  affected
- Rerendering not mean re-render all DOM -> just recreated Virtual DOM(plain object react element trees)
- after new Virtual DOM created -> phase conciliation + different -> called "Fiber" -> updated Fiber trees

# Why need Reconciliation and why do we need it?
- Why not update entire DOM whenever state somewhere changes in the app?
- That would be inefficient and wasteful
    - Because write to the DOM is low
    - Usually a small of part in DOM needs to be update
- ReactJS reuses as much as DOM as possible
- Reconciliation decided which DOM actually need to be inserted, updated, deleted

# Reconciler "Fiber"
- 'Fiber' based on VirtualDom -> to build another tree -> Fiber tree
- Fiber not re-created on every render -> it's mutable data structure -> it's mutated over and over in reconciliation steps -> perfect place for keeping track (current state, hooks, props. more, queue of work todo)
- Actual state of element instance, you see on screen that stored internally corresponding Fiber in Fiber tree
- Process split into small chunk, work can be paused, reused, thrown away.
- Component instance that triggered re-render -> run React elements -> create new Virtual Dom -> Reconciliation and Different -> Update current Fiber tree -> List of DOM update

# Commit phrase
- [List of DOM updates] -> UPDATE DOM -> browser update UI
# Browser paint
# Recap put all together
- The whole process of rendering and displaying in React application on the screen -> start with a trigger -> which can be either initial render of the app or the state update in one of component instance -> this trigger [render phrase] which don't show any visual output -> this phrase starts with rendering all component instance -> rendering in React basically means to call component instance -> this create or updated which will placed in Virtual DOM -> which actually simple tree of React element. That's really important to remember -> when rendering the component -> cause(/kɔːz/) all child the components to be rendered as well no matter props changed or not -> This because React doesn't know whether the children have been effected by parent re-render or not --> NEW Virtual DOM need reconciled(reconciliation + different) with current Fiber (this step find update, insert, delete...) -> Fiber tree reflect each Element component and hold (state, props, queue of work...) -> updated Fiber tree -> after reconciliation --> create list DOM updated for that element -> Update DOM -> React will be update real DOM element -> BROWSER paint UI