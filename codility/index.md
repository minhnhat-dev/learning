### Problems solving approach
- What is algorithms?
	- A process or set of steps to accomplish a certain task
- Why do I need to known this?
	- It's the foundation for being successful problem solving and developer
	- How do you improve ?
		1. Devise a plan for solving problems (non-technical)
			- How do you approach problems
			- Strategies for breaking it down
		2. Master common problems solving patterns
	- Problems solving strategies.
### Problem solving
- Understand the problems
	- Ask your self these questions
		1. Can I restate the problem in my own words?
			- Make sure you can restate it back -> not word for word -> resate by your own words
		2. What are the inputs go into the problem
		3. What about outputs look like?
			- That should return from my function
		4. Can the inputs determined(dc xac dinh) from output
			- The information you have
		5. How should I label for important pices of data that are a part of problem?
		6. Example: Write a function take two numbers and return their sum
			1. Can I restate the problems in my own words?
				- "implement addition"
			2. What are the input go into the problem
				- Input look like, maximum, minimun, valid or not, what happen someone leaves an input off?
				- Add more input?, …
			3. What the output? Int, float, string?
					
### Explore Concrete example
- Thing like user stories.
	- Unit tests
	- Explore example
		1. Make Simple example -> progress to more complex example
		2. Explore ex with empty inputs, invalid input, 
		3. Ex: charCount("hello") -> {h:1, e:1, l: 2, o: 1}
		4. "Hello hi" -> upercase or lowercase
		5. "Hi there I twenty year old"
	- Break it down
		- Don't write code immediatly
		- Write down steps you need to take
		- // detail step by step event you're not acomplish it, you still competent
	- Solve/Simplify
		- Write code by simple way, and after incorprate harder part back in
		- Simplify:
			- Find the core difficulty what's you trying to do
			- Temporarily ignore that difficulty
				® You don't known method lowercase -> just ignore that -> just deal with that later -> out loud I don’t know exactly how do this
			- Write simplifed solution
			- Then incorporate difficulty part back in
	- Look back and refactor
		- Strive(co gang, no luc) goals make code better
		- Reflect on it (suy ngam ve no)
		- Refactoring questions:
			- Can you check the result?
			- Can you drive a different result ?
			- Can you understand it in a glance?
			- Can you improve performance ?
			- Can you make them another way?
			- How have other people solved this problem?
				
### Problem solving pattern
1. Frequency counter pattern
	- This pattern uses object or set to collect values, frequencies of values
	- Avoid nested loops O(n^2) in arrays or string
	- An Example: write a function accept two arrays, The function should return the true, if every in the arrays it has corresponding value squared in the second array
2. Multiple pointers.
	- Create a pointers or value correspond with a index or position towards at the beginning or end, middle base on a certain condition
	- Very efficient for solving problem with minimal space complexity as well
	- An example: Write a function call sumZero(), which accepts a sorted array of integers. The funtion should find thr first pair where the sum is 0. Return an array that include the both values , and return undefined if pair not exists
3. Sliding window
	- This pattern involves creating a window which can either be an array or number from one position to another
	- Depending an certain condition, the window either increase or closes(and a new window is created)
	- Very useful for keeping track subset data in array/string.
	- Step
		1. Calculate max temp
		2. Subtract before and add next
		3. Math -> max, min with current
	- An Example:
		- Write a function called sumSubarraySum which accept an integer and a number called n, The function should calculate the maximum sum of n consecutive elements in array.
		- sumSubarraySum ([1,2,3,7,2,3,4], 2) => 9
		- sumSubarraySum ([9,2,1,7,2,9,5,4], 4) => 23

4. Divide and conquer
	1. This pattern dividing a data set into smaller chunks and repeating a process with subset of data
	2. This pattern can tremendously decrease time complexity
### Binary Search
- Binary search pseudo code
	1. This function accept a shorted array and a value
	2. Create a left point at the start of the array, and a right pointer at the end of the array
	3. While the left pointer comes before the right pointer
		- Create pointer in the middle
		- If you find the value you want, return the index
		- If the value too small, move the left pointer up.
		- If the value too large, move the right pointer down
	4. If you never find out the value return -1
- Binary search Big(O) -> O(log n) ~ O(1)
	- O(n^2) -> O(n log n) -> O(n) -> O(log n) -> O(1)

### Sorting
- What is sorting?
	- is process of rearrange items in collection (array), the items some kind of order.
#### Comparison.
	- Bubble sort O(n^2)
	- Insertion sort O(n^2)
	- Selection sort O(n^2)
	- Quick sort O(n log(n))
	- Merge sort O(n log(n))
	- Radix sort O(n) but only use for number integer
### Data Structure
- 