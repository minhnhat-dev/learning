### Your first component
1. ReactJs just js function -> where you can sprinkle with markup
2. export default, defined the function, embed markup in JS
3. wrap it in a pair of parentheses -> nest it inside other component
4. Recap
    1. ReactJS let you create component -> reuseable UI elements for your app
    2. In ReactJS every pice of UI is component
    3. Their name always begin with capital letter
    4. They return a JSX markup
    5. 

### Importing and Exporting component
1. default exports
    1. export default function A() {} -> import A from '/directory'
    2. use for case file only one component
2. named exports
    1. export function A(){} -> import { A } from '/directory'
    2. the name has to match both side import and export -> why they are called named export
    3. use for case file multi export component
3. A file only one export default but multi named export

### Writing markup with JSX 
1. JSX syntax extension -> look like HTML but stricter and dynamic information
2. JSX roles
    1. wrap them with single parent tag
    2. Why do multiple JSX tag wrapped ?
        -> transform JSX to plain object JS -> You can't return multiple objects without wrapped it into array.
3. ReactJS group render logic together with markup because they're related

### Javascript with curly braces
1. {{}} -> basic pass object here

### Passing prop to a component
1. {..props}
2. every render receive new version of props
3. 

### State as snap short
```
  const [number, setNumber] = useState(0)
  useEffect(() => {
    setNumber(number + 5)
    setTimeout(() => {
      console.log("number", number)
    }, 3000)
  }, [])
```
-> đoạn code này vẫn log ra number bằng 0 nhé mặc dù đã chờ 3s cho setNumber() run  -> tại sao vây chứ
-> A state variable's value never changes within a render -> mặc dù mình call setNumber() để trigger render nhưng number vẫn không thay đổi -> tức là nó never change in a render
-> tức là trước khi mình trigger re-render thì ReactJs luôn take a snap short nó fixed các value lại
-> vậy câu hỏi đặt ra nếu mà timeout 10s trong time đó mình change state thì nó ảnh hưởng không ? -> Vẫn không -> React kêu họ sẽ fixed value state within one render's event handler

### Queuing a series of state updates
1. Event handler là gì -> onClick(), onMouse() đồ á
2. Khi start process update state -> ReactJS wait for all code in event handler has run
3. wait for all code in event handler has run -> known as batching -> avoid dealing with "half finish" -> not much re-render
4. setState(newState) or setState(() => {}) truyền dô 1 function để nói với reactJS rằng làm gì đó tính toán gì đó thay vì chỉ replacing it.
5. Vậy đoạn code này thì sao
```
setNumber(n => n + 1);
setNumber(n => n + 1);
setNumber(n => n + 1);
```
-> React sẽ đẩy vào queue để xử lý -> nên ham setNumber() sẽ lấy value state từ kết quả trước để tính toán tiếp theo.
```
  setNumber(number + 5);
  setNumber(n => n + 1);
```
-> đẩy vào queue setState đầu tiên return 5 -> setState() thứ 2 lấy 5 + 1 nữa là 6 nhé

### Updating Object in State
1. treat any JS object that you put into state as read-only -> immutable
2. ... spread object only copy a level deep
3. Immer library -> use Proxy -> still created new object -> but code like mutate object -> cho phép mình handle mấy case mà update state nó lồng nhau nhiều object qá mà ...(spread object) nó chỉ copy 1 level thì sài immer nó sẽ concise(ngắn gọn) code hơn.
```
updatePerson(draft => {
    draft.artwork.city = e.target.value;
});
```
4. Why is mutation not recommended in React
    1. Debugging -> easy to see changes between renders
    2. Optimization -> you not mutate object -> reactjs not check -> faster 
    3. Use new feature -> because ReactJS build on not mutate -> treated like a snap short

### Updating Arrays in State
1. Just like a object -> you don't mutate array like 
```
arr[0] = 1
method mutate objet: push(), pop(), shift(), splice()
```
2. To do that, instead prefer -> use method un-mutate array like -> map(), filter(), slice()
3. Push item in first or end array
```
    setArray([
        ...array,
        { item } -> push in end
    ])
    setArray([
        { item } -> push in first
        ...array,
    ])
```
4. Replacing items in array
```
    use map((value, index)) -> nó có index -> check index -> rồi replace chứ mình không sài arr[index] = 5
```
5. Inserting into array -> use .slice() -> spread array before handle
6. Making other change of array -> reserve() sort() -> they're mutate original array
    1. Spread them before change them
    ```
    function handleClick() {
        const nextList = [...list];
        nextList.reverse();
        setList(nextList);
    }
    ```
    2. However event you copy a array, you can't mutate existing items inside of it directly -> Why? -> Because spread is copy shallow, new array will contain the same items á the original one -> so if you modify -> it wil mutate to existing state.
    ```
    const nextList = [...list];
    nextList[0].seen = true; // Problem: mutates list[0]
    setList(nextList);
    ```
    + How to resolve it: The same problem with object -> each items spread them, instead mutate them, {...{}} and map()
    ```
    setMyList(myList.map(artwork => {
        if (artwork.id === artworkId) {
            // Create a *new* object with changes
            return { ...artwork, seen: nextSeen };
        } else {
            // No changes
            return artwork;
        }
    }));
    ```
    + delete by id -> use filter()
    + delete by index -> [...slice(), ...slice()]
7. You can use Immer to handle shortly
## Managing State
### Reacting input with state
1. How UI changes in response user actions, (imperative programming) -> cách cũ tức là mình tương tác trực tiếp vs UI
2. (Declarative programming) Mình sẽ không tương tác trực tiếp vs UI mà nhờ React tương tác.

#### Step 1: Identify your component's difference visual state
+ Hãy thử "mock up" giả data trước khi mình triển khai logic -> cố gắng mock nhiều visual state có thể, gắn nó làm component thử, ví dụ lỗi thì sẽ hiện gì, thành công sẽ hiện gì, state này thì sao, mình sẽ thể hiện all UI ra trước, rồi mới add logic vào sao.

#### Step 2: Determine what trigger those state changes
+ We have two of kind inputs
    1. Human input: like clicking input, navigating link, typing in a field
    2. Computer input: network responding arriving, a timeout completing, an image loading
    3. Both We need care, and special care when
        1. Changing text input (human) -> change form's state from "empty" to "typing"
        2. Clicking button (human) -> change state to "Submitting"
        3. Success network response  -> switch status is "success"
        4. Fail network response -> switch status is "error"
        5. Human input usually need event handler
    4. cố vẽ ra follow sẽ help mình clear và hạn chế error

#### Step 3: Represent the state in memory with useState
1. Each pice of state -> moving in pice . càng phức tạp càng nhiều bugs
2. Nếu bị struggle thì cứ define ra all process của page rồi refactor lại sau
#### Step 4: Remove any non-essential state variables
1. Sau khi defined all state mình sẽ refactor và hỏi 1 số câu hỏi xem có nên dolf state đó hay remove
    1. Does this state case paradox? -> isTyping vs isSubmitting both not is true, or combine all into one status
    2. Is the same information available in another state variable already? 
    3. Can you get the same information from the inverse of another state variable? 
#### Step 5: Connect the event handlers to set state  

### Principles for structuring state
    1. Group related state: If you always update two or more state variables at the same time, you need to consider merging them into single state variable.
        - If two variable update together -> it a good ideal to unify them into single state variable.
        - You don't known how many pieces of state you'll need -> helpfull in form you can add custom fields.
        ```
            const [position, setPosition] = useState({
                x: 0,
                y: 0
            })
        ```
    2. Avoid contradiction in state.
        - isSend and isSending -> not be true at the same time -> it better to replace them with one status state variable with 3 status -> typing, sending, sent
    3. Avoid redundant state:
        - fistName, lastName -> fullName -> not create state fullName
        - Don't mirror props in state. 
    4. Avoid duplication in state
        ```
            const [items, setItems] = useState(initialItems);
            const [selectedItem, setSelectedItem] = useState(
                items[0]
            );
            -> 
            const [selectedId, setSelectedId] = useState(0);
            const selectedItem = items.find(id === selectedId)
        ```
    5. Don't mirror status
        ```
            function Message({ messageColor }) {
            const [color, setColor] = useState(messageColor);
            }
            -> color just only initial first time
        ```
    6. Avoid nested place
        - Nested object complexity -> make it normally -> from hold array list -> just hold array ids
        -> And need to flat state -> [{
       ```
          children: [
            {
                id
                children: [
                    {
                      id
                    }
                ]
            }
         ]
        }]
       ```
      - "flat" tức băm nhỏ ra và đặt tụi nó cùng cấp
    7. Tips from exercise
        1. When item occurs in state -> we've totalItem and if need to count some status, example packed -> we can calculate use filter() -> not necessary create totalItem or something like countStatus


### useCallback(() => {}, []), useMemo(() => {}, [])
1.
```
const A = {
    a: a'(() => {})
}
function App() {
    const [count, setCount] = useState(0)
    const onClick = useCallback(() => {}, [])
    <ComponentB onClick/>
    <ComponentB onClick/>
    <ComponentB onClick/>
}
function ComponentB({ onClick }){}
React.momo(ComponentB)

const B = {
    a: a'(() => {})
}
function App() {
    const [count, setCount] = useState(0)
    const onClick = useCallback(() => {}, []) 
    const user = useMemo(() => users.find(), [])
    (cùng output thì trả về cùng input)
    <ComponentB onClick/>
    <ComponentB onClick/>
    <ComponentB onClick/>
}
function ComponentB({ onClick }){}
React.momo(ComponentB)
```

useCallback ([], a)

const a = {name: "name"}
a.name = "Ád" -> change trực tiếp dô vùng nhớ lun