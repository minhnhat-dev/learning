### Navigating JSX Types
1. all of props, they just objects

### Ensure props are present and defined
1. Use type or interface to define props type

### Typing a component as a Function
1. React.FC
2. React.FC<PropType>

### Solving the any problem with children
1. React.ReactNode

### Typing Event Handler
1. Hover over it
2. Pass directly (e) => {}

### Using HTML Props Component
1. ComponentProps<"button">

### Overriding and remove component props
1. Omit<ComponentProps<"input">, "onChange">
2. defined your type: 
type OverrideProps<T, TOverride> = Omit<T, keyof TOverride> & TOverride

### Extracting props from custom components
1. ComponentProps<typeof ComponentA>

