Feature: Registration

This feature deals with the Register functionality of the application


@positivescenario
Scenario Outline: Verification of Registration

Given the user navigates to react login page
When the user clicks on the Register link
And the user enters the <FirstName> in the FirstName Field
And the user enters the <LastName> in the LastName Field
And the user enters the <UserName> in the UserName Field
And the user enters the <Password> in the Password Field
And the user clicks on Register button
Then the user verify the Registration 

Examples:
|FirstName |LastName |UserName |Password|
|Mohana    |  Rao    |MohanaRao|mohanoct28|



