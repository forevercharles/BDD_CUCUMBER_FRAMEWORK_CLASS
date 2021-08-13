@LoginFeature @smoke
Feature: validate Techfios functionality 

Background: 
#	Given User is on the Techfios login page       
#	Given User is on the "Techfios" login page        
	Given User is on the "Techfios" login page        

@scenario1	@smoke
Scenario: 1 User should be able to login with the valid credentials 
#	And user clicks signin button 
#	When user enters password as "abc123" 
	When user enters username as "demo@techfios.com" 
	When user enters password as "abc123"           
	And user clicks signin button 
	Then user will land on the Dashboard page 

#@scenario2	@smoke
#Scenario: 2 User should be able to login with the valid credentials 
#	When user enters username as "demo@techfios.com" 
#	When user enters password as "abc124"           
#	And user clicks signin button 
#	Then user will land on the Dashboard page
#
#@scenario3	
#Scenario: 3 User should be able to login with the valid credentials 
#	When user enters username as "demo2@techfios.com" 
#	When user enters password as "abc123"           
#	And user clicks signin button 
#	Then user will land on the Dashboard page	
#
#@scenario4	
#Scenario: 4 User should be able to login with the valid credentials 
#	When user enters username as "demo2@techfios.com" 
#	When user enters password as "abc124"           
#	And user clicks signin button 
#	Then user will land on the Dashboard page		  