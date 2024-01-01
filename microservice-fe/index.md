	1. What is micro-frontend ?
		- Divide monolithic app into smaller
		- Each smaller app responsible for distinct feature of the product
		- Prevent direct communication 
	2. Benefit
		- Multiple engineering cans works isolations 
		- Independent, no dependency 
		- Build these feature separate for each team, different technical decides 
		- Each smaller app easier to understand and makes decide changes
	3. Integration
		1. Build time
			- Developer team build -> npm package -> Container re-deployed when has changes
			- Tempting to tightly together Container + Product List
		2. Run time
			- Engineering develop Product List -> time deploy -> deployed at http://my-app/product-list.js
			- Navigation to http://my-app -> Container app loaded -> container app load product-list.js and execute it
			- Product-List is deployed independently 
			- Multi version, container can pick which one to use
			