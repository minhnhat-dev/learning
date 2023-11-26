# 1. What is micro-frontend ?
    - Divide monolithic app into smaller
    - Each smaller app responsible for distinct feature of the product
    - Prevent direct communication 
## 2. Benefit
    - Multiple engineering cans works isolations 
    - Independent, no dependency 
    - Build these feature separate for each team, different technical decides 
    - Each smaller app easier to understand and makes decide changes
## 3. Integration
### 1. Build time
    - Developer team build -> npm package -> Container re-deployed when has changes
    - Tempting to tightly together Container + Product List
### 2. Run time
    - Engineering develop Product List -> time deploy -> deployed at http://my-app/product-list.js
    - Navigation to http://my-app -> Container app loaded -> container app load product-list.js and execute it
    - Product-List is deployed independently 
    - Multi version, container can pick which one to use
### Webpack
    - Collect these dependencies and file code -> combine into one file -> generate bundle/main.js
    - devServe
    - HTMLWebpackPlugin
### Module Federation
#### Low-level concepts
- local module: current build
- remote module: not current build but it's loaded and run time from remote container
#### Implement module federation
- Design one app as host(CONTAINER) and one as remote (PRODUCTS)
- In Remote decide which modules(files) you want to available to another projects
- Setup Webpack Federation to expose these files
- In the HOST decide which file want to get from Remote
- In CONTAINER need to refactor (bootstrap.js) and import source entry from remote(product)
- Fix to load content from Remote
#### Understand of Module Federation
- Base ModuleFederationPlugin webpack will emitting these file -> help HOST (CONTAINER) can load source from remote into host
- Why need bootstrap.js file: tell to Host need to load some files/dependencies required
