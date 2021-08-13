@otherFeature @smoke
Feature: Other validate Techfios functionality 

Background: 
#	Given User is on the Techfios login page       
#	Given User is on the "Techfios" login page        
	Given User is on the "Techfios" login page    
	
@other1	
Scenario Outline: User should be able to login with the valid credentials
	 When User enters "<username>" and "<password>"  
	 And user clicks signin button 
	Then user will land on the Dashboard page
	Examples:
	    |         username| password|
	    |demo@techfios.com| abc123  |
	    |demo@techfios.com| abc124  |
	    |demo2@techfios.com| abc123  |
	    |demo2@techfios.com| abc124  |

	
#@other1	@smoke
#Scenario: 1 User should be able to login with the valid credentials 
##	And user clicks signin button 
##	When user enters password as "abc123" 
#	When user enters username as "demo@techfios.com" 
#	When user enters password as "abc123"           
#	And user clicks signin button 
#	Then user will land on the Dashboard page 

#@other2	@smoke
#Scenario: 2 User should be able to login with the valid credentials 
#	When user enters username as "demo@techfios.com" 
#	When user enters password as "abc124"           
#	And user clicks signin button 
#	Then user will land on the Dashboard page
#
#@other3	
#Scenario: 3 User should be able to login with the valid credentials 
#	When user enters username as "demo2@techfios.com" 
#	When user enters password as "abc123"           
#	And user clicks signin button 
#	Then user will land on the Dashboard page	
#
#@other4	
#Scenario: 4 User should be able to login with the valid credentials 
#	When user enters username as "demo2@techfios.com" 
#	When user enters password as "abc124"           
#	And user clicks signin button 
#	Then user will land on the Dashboard page		  