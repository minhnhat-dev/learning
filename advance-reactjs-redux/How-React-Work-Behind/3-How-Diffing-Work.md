# Diffing
- That process comparing step by step
1. Same position but different Element
```
<div>
    <Search/> 
</div>
```
```
<header>
    <Search/>
</header>
```
- React assumes entire sub-tree is no longer valid.
- Old components are destroyed and removed in DOM, including state.
2. Same position and same element
- kept in DOM
- tree stay and will preserve state
- mutate React Element and pass in new props
- change key -> will re-created react component