### The implicit "Any" type error
1. Annotations important to understand Typescript, default -> "any"
2. Must to defined types to contact with typescript

### Working with object params
1. Use cully braces to present the object types inline -> { a: type; b: type }
2. Named type -> use type keyword provide the name and define the object
3. define the interface
    #### Choosing Inline vs Type vs Interface
    1.Inline Got error -> provide verbose error message
    2. Named type -> just stay consistent
    3. Interface -> just stay consistent

### Set properties as optional
1. Add the ?(question mark) before colon -> that define optional for field

### Assigning Types to variable
1. : User -> use : to assign type for variable

### Constraining value types
1. `{role: 'admin' | 'user' | AdminType }`
2. union types
3. use | (pipe) to delineate types

### Working with arrays
1. Post[]
2. Array<Post>

### Typing Promises and Async Request
1. Use Promise<Type>
2. const data: Type = await fetch()
3. Cast data as a type: data as Type -> least safe

### Passing a type argument
1. Set<T>() -> T -> type argument
2. Map<K, V>() -> type argument key and value

### Assigning Dynamic Keys to an Object
1. Use Record utility Record<key_type, value_type>
2. Use index signature
3. Use type/interface signature
- interface A {
    [id: string]: string
}

### Narrowing down union types
1. typeof
2. 'key' in value
3. value instanceof Type

### Typing error in a Try-catch
1. user error intanceof Error

### Inheriting Interface Properties
1. multiple extends TypeA, TypeB 
2. single extends TypeA

### Combining type to a new type
1. use & (and mark) User & {posts: Post[]}
2. define type return of function
    type TypeReturn = User & { posts: Post[] }

### Selectively Construct types from other types
1. use Omit -> Omit<Type, 'key'>, Omit<Type, 'key1' | 'key2'>
2. use Pick -> Pick<Type, 'key_1' | 'key_2'>

### Typing a function
1. Declare a function use syntax
    (params: Type) => void
2. Extract to own type -> type Func = (params: A) => void