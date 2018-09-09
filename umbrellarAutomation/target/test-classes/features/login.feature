Feature: LoginForm
This feature deals with the login functionality of the React+Redux application

@validloginScenario
Scenario Outline:Verification of login using the correct credentials
Given the user navigates to react login page
When the user enters the <username> and <password>
And the user clicks on Login button
Then verify the user <FirstName> is correctly displayed once logged in
And verify the user <FullName> appears under the Allregisteredusers list

Examples:

|username|password|FirstName|FullName|
|mohanrao|mohan|Mohana   |Mohana rao|