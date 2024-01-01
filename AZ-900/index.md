- AZ test -> knowledge of cloud services, how those services are provided.
	- Microsoft AZ Fundamentals
		○ Describe cloud concept
		○ Architecture and services
		○ Management and governance
	- Cloud
		○ Rent computer resources on demand
		○ Unlimited file storage, 
	- Quick look into AZ
	- Link AZ of Nab: Collections | Microsoft Learn

	1. AZ-900 Requirements: Study guide for Exam AZ-900: Microsoft Azure Fundamentals | Microsoft Learn
		- Describe cloud concept (25-30%)
			§ Define cloud computing?
				□ Define cloud computing?
				□ Describe shared responsibility model?
				□ Defined cloud models, public, private, and hybrid
				□ Identify appropriate use case for each models
				□ Describe consumption-based model
				□ Compare cloud pricing model 
				□ Describe Serverless
			§ Describe benefit of using cloud services
				□ High availability and scalability
				□ High reliability and predictability( co the du doan truoc )
				□ Security and governance
				□ Manageability (kha nang quan ly)
			§ Describe service types
				□ IaaS
				□ PaaS
				□ SaaS
				□ Identify appropriate use case for each (IaaS, PaaS, SaaS)
			
		- AZ Architecture and service (35-40%)
			§ Describe core architectural component of AZ
				□ Regions, region pair, sovereign region(toan chu quyen tren region)
				□ Availability zones
				□ Data centers
				□ Resource and resource group
				□ Subscriptions
				□ Management groups
				
		- AZ management and goverance(30-35%)

	1. Describe cloud concept
		a. Define cloud computing.
			§ AZ portal: portal.azure.com
			§ What is cloud computing?
				□ "The cloud" just someone else's computer
				□ In case Microsoft billions dollars invested in data center, fiber topic cables(cap quang quoc te), satellites (ve tinh), all sort of infrastructure around the world.
				□ What's makes cloud computing special?
					® The ability to rent computing resources on demand.
		b. Shared responsible model
			- You need full manage but Microsoft extra mile to protect
			- Between models will different responsibility for customers and Microsoft
			- 
			
			- 
			1. Information data, Devices, Account and identities -> all service type -> responsibility always retained by customers.
			2. Identity and directory infrastructure(SaaS + PaaS -> shared responsibility half blue, half grey, IaaS On-prem -> all by service type ) , -> responsibility varies by service type
			3. Physical hosts, network, datacenter -> only On-prem responsibility retained by customers.
		c. Public Cloud, Private Cloud, Hybrid Cloud.
			1. What are cloud models?
				- Cloud models define deployment types of cloud resources
				- Three main: public, private, hybrid
			2. Public
				1) General for public
				2) Computing services -> offered by third party providers -> over public Internet -> make them available for everyone wants to purchase them.
				3) Azure own their hardware and infrastructure
			3. Private
				1) Computing services -> offered either over internet or private internal network -> only select users instead generally public
				2) Microsoft prodive HCI
				3) Expect customer owns or leases or has exclusive access to hardware
				4) More cost
			4. Hybrid
				1) Mixture between public and private, computing enviroment that combines public and private cloud
				2) Run own your service  on your private cloud and scale out public cloud when need those additional resources
			5. Compare and contrast
				- Public -> for every on sign in vs Microsoft and credit purchase for  services -> licensing
				- Private -> need invite -> own hardware, lease(thue) the hardware, exclusive access
				- Hybrid: use benefit a both types -> save own data in private cloud and scale public information data on public cloud
		d. Define consumption-base model
			1. Capital expenditure(CapEx)
				- One-time, up-front expenditure, purchase or secure, tangible resources (new building, parking lot, vehicle, new datacenter)
			2. Operation Expenditure (OpEx)
				- Spending money on services or products over time (rent convention center, rent cloud, lease vehicle…)
			3. Consumption-based model -> fall under -> OpEx -> don't pay for physical infrastructure, security, maintaining datacenter -> you pay for IT resources you use
				- Benefit of consumption-based model
					- No upfront code
					- No need to purchase and manage for costly infrastructure
					- Ability pay for more resources when needed
					- The ability stop paying resources when no longer needed
		e. Compare cloud pricing models
			- Pay-as-you-use -> helps you
				- Plan and manage operating cost
				- Run your infrastructure more efficiently
				- Scale as your bussinees need changes
					

	1. Describe the benefits of using cloud services.
	- Describe the benefits of high availability and scalability in cloud.
		1. High availability
		- Focus on maximum availability regardless of disruptions or events can occur.
		- Uptime, service availability guarantees.
		2. Scalability
		- The ability to adjust resources to meet demand.
		- Suddenly experience peak traffic -> add more resources to handle
		- Vertical and horizontal
			§ Vertical: focus on increasing or decreasing capabilities of resources.
				□ Add more RAM or CPU to virtual machines
			§ Horizontal: focus on adding or subtracting of resources.
				□ Add virtual machines or containers or scale out
	- Describe of reliability and predictability in cloud.
		1. Reliability.
			- Ability to recover from failures and continue to function
			- Decentralized design -> naturally support reliable and resilient -> app deployed around the world
		2. Predictability
			- Focus on performance predictability and cost predictability
			- Performance:
				□ Predicting the resources needed to deliver positive experience for customers: autoscaling, load balancing,…
				□  Cost: forecasting the cost of cloud spend, help customer use cost more efficient, monitor cost
	- Describe the benefits security and governance in the cloud
		○ Ensure that all your deployed resources meet corporate standards and government regulatory requirements
		○ Security: based-on models you implement -> control by customer or provider
	- Describe the benefits of manageability in cloud.
		○ Automatically scale resources, deployment based on need
		○ Preconfigure template
		○ Monitoring health resources and replacing falling resources
		○ Receive alert from configured metrics -> aware of performance in real time

	2. Describe Cloud Service type.
		- "As a Service"
			§ Rent it for short time, if you wish
			§ No commitment if you wish
			§ Pay for What you use (time,GB,other…)
			§ Provider take care of in buying, developing, maintaining it
		1. Describe Infrastructure as a Service
		- Provider: maintain hardware, network connectivity(physical), physical security
		- Customer: operating system installation, configuration, maintenance, database, …  
		- Scenarious:
			§ Standing up cloud resources similor on-prem datacenter -> simply move on running on IaaS Infrastructor
			§ Testing and development: stand up or shutdown difference environment
		2. Describe Platform as Service 
		- Provides more than Infrastructure
		- Include service on top of IaaS - Computing - Networking - Storage
			§ Computing: Simple upload your code and configuration to AZ, and run your code without needing to worry about VM underneath
				□ Include scaling feature, CI/CD , containers, staging, development environment…
			§ Storage: Managed storage, AZ Database, Freed about VM, hard disk itself
			§ Networking: deal with load blancer, firewall, networking task
		- Middleware - Development Tools, more…
		- PaaS middle group between renting space in datacenter(infrastructure as a service) and paying for a complete and deployed solution(software as a service)
		- Provider: maintain physical infrastructure, physical security and connection to internet, OS, middleware, development tools, business intelligence service  -> don’t worry about licensing, patching for OS, database
		- Customer or provider: network setting and connectivity within your cloud environment network and app security and app infrastructure
		- Scenarios:
			§ Cloud feature scalability, high-available… -> reduce amount of coding developers must do
			§ Analytics and business intelligence:
		3. Describe Software as a Service
			- Apps
			- Microsoft Office, One Driver,
			- Just only setup and use it
			- Renting or use full developed application
		4. Serverless
			- There are servers offering options, use can pick and rent, don't worry about underneath -> pay for what you use

	3. Azure Architectures and Service
		1. Core AZ architectures
			1. Region
			- Buildings, data center -> combined make it a region
			- Region pair: region connected to region 
			- When you create resources you can choice a region where to deploy it
			- Sovereign region AZ: not public top connect, need create subscription, adhere compliance government at regions.
			2. Availability Zone.
				- Set of data centre, physically separate
				- Not every region support AZ
				- 3 types of AZ Services
					1. Zonal Services
						- Can choose a specific zone to deploy 
						- Deploy to another zone -> achieve resiliency 
						- Eg: virtual machines -> can deploy az one or az two
					2. Zone redundant-services
						- Automatically deploy on multiple AZ
						- You don’t have configurate it
						- Eg: MySql DATABASE
					3. Always global Service
						- Non-region service
						- Global
						- AZ Portal, AZ Active Directory, AZ Front Door
			3. AZ Resources & Groups & Subcription
				- Resources of AZ: generic word any services you can access to (Virtual machine, Storage Account, Database,…)
				- We can create resource many ways
				- Resource groups: 
					® Resource groups connect with a region -> it can be difference than resource it contains
					® All resource group should have a same lifecycle -> delete or deploy together.
				- Subscriptions
					® Subscription is billing logic of AZ
					® Always a payment method associated with a subscription
				- Multi-subscription 
					® Can choose multi subscription -> separate billing
				- Management groups
					
					
					
			
				

	4. AZ Compute Service
		- Virtual Machines (VM), EC2
			§ Infrastructure as a Service (IaaS)
			§ Take exist machine from your environment into a cloud - a copy.
			§ Window or Linux operating - several of each
			§ A slices of physical machine share with customers.
			§ Full control over it, as if it was your machine.
			§ Types:
				□ Over 700 to choose from
				□ CPU cores, CPU Speed, RAM size, temporary disk size, IOPS
			
		- VM Scale Sets (VMSS)
			§ Elasticity 
			§ Two or more virtual machines running the exact same code.
			§ Auto scaling
			§ Can create more VM Sets
		- App services (Web apps)
			§ A new paradigm for running code in cloud
			§ Give your code and configuration for AZ and you will run it
			§ PaaS
			§ Performance but not control hardware
		- Azure Container Instance()
			§ Fast and easiest to deploy 
			§ ACI: single instances
			§ AZ Container App: advanced features
			§ AKS: run on cluster, enterprise-grade
		- Azure Kubernetes Service (AKS)
		- Window Virtual Desktop
			§ Desktop version -> availability run window on Cloud
			§ No matter where you are -> can work many places -> you can login into your laptop and get your files, your setup
