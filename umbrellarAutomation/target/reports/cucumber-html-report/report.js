$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Registration.feature");
formatter.feature({
  "line": 1,
  "name": "Registration",
  "description": "\r\nThis feature deals with the Register functionality of the application",
  "id": "registration",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 7,
  "name": "Verification of Registration",
  "description": "",
  "id": "registration;verification-of-registration",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@positivescenario"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "the user navigates to react login page",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "the user clicks on the Register link",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "the user enters the \u003cFirstName\u003e in the FirstName Field",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "the user enters the \u003cLastName\u003e in the LastName Field",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "the user enters the \u003cUserName\u003e in the UserName Field",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "the user enters the \u003cPassword\u003e in the Password Field",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "the user clicks on Register button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "the user verify the Registration",
  "keyword": "Then "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "registration;verification-of-registration;",
  "rows": [
    {
      "cells": [
        "FirstName",
        "LastName",
        "UserName",
        "Password"
      ],
      "line": 19,
      "id": "registration;verification-of-registration;;1"
    },
    {
      "cells": [
        "Mohana",
        "Rao",
        "MohanaRao",
        "mohanoct28"
      ],
      "line": 20,
      "id": "registration;verification-of-registration;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 41154980833,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Verification of Registration",
  "description": "",
  "id": "registration;verification-of-registration;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@positivescenario"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "the user navigates to react login page",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "the user clicks on the Register link",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "the user enters the Mohana in the FirstName Field",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "the user enters the Rao in the LastName Field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "the user enters the MohanaRao in the UserName Field",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "the user enters the mohanoct28 in the Password Field",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "the user clicks on Register button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "the user verify the Registration",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageStepDefinition.the_user_navigates_to_react_login_page()"
});
formatter.result({
  "duration": 8062116519,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageStepDefinition.the_user_clicks_on_the_Register_link()"
});
formatter.result({
  "duration": 335618043,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mohana",
      "offset": 20
    }
  ],
  "location": "RegistrationPageStepDefinition.the_user_enters_the_FirstName_in_the_FirstName_Field(String)"
});
formatter.result({
  "duration": 116655349,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Rao",
      "offset": 20
    }
  ],
  "location": "RegistrationPageStepDefinition.the_user_enters_the_LastName_in_the_LastName_Field(String)"
});
formatter.result({
  "duration": 64891868,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MohanaRao",
      "offset": 20
    }
  ],
  "location": "RegistrationPageStepDefinition.the_user_enters_the_UserName_in_the_UserName_Field(String)"
});
formatter.result({
  "duration": 97776984,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mohanoct28",
      "offset": 20
    }
  ],
  "location": "RegistrationPageStepDefinition.the_user_enters_the_Password_in_the_Password_Field(String)"
});
formatter.result({
  "duration": 78386312,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationPageStepDefinition.the_user_clicks_on_Register_button()"
});
formatter.result({
  "duration": 262647299,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationPageStepDefinition.the_user_verify_the_Registration()"
});
formatter.result({
  "duration": 2064748183,
  "status": "passed"
});
formatter.after({
  "duration": 2187663250,
  "status": "passed"
});
formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "LoginForm",
  "description": "This feature deals with the login functionality of the React+Redux application",
  "id": "loginform",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Verification of login using the correct credentials",
  "description": "",
  "id": "loginform;verification-of-login-using-the-correct-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@validloginScenario"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "the user navigates to react login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "the user enters the \u003cusername\u003e and \u003cpassword\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "the user clicks on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "verify the user \u003cFirstName\u003e is correctly displayed once logged in",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "verify the user \u003cFullName\u003e appears under the Allregisteredusers list",
  "keyword": "And "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "loginform;verification-of-login-using-the-correct-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "FirstName",
        "FullName"
      ],
      "line": 14,
      "id": "loginform;verification-of-login-using-the-correct-credentials;;1"
    },
    {
      "cells": [
        "mohanrao",
        "mohan",
        "Mohana",
        "Mohana rao"
      ],
      "line": 15,
      "id": "loginform;verification-of-login-using-the-correct-credentials;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 36331140708,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Verification of login using the correct credentials",
  "description": "",
  "id": "loginform;verification-of-login-using-the-correct-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@validloginScenario"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "the user navigates to react login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "the user enters the mohanrao and mohan",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "the user clicks on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "verify the user Mohana is correctly displayed once logged in",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "verify the user Mohana rao appears under the Allregisteredusers list",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStepDefinition.the_user_navigates_to_react_login_page()"
});
formatter.result({
  "duration": 6712394652,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mohanrao",
      "offset": 20
    },
    {
      "val": "mohan",
      "offset": 33
    }
  ],
  "location": "LoginPageStepDefinition.the_user_enters_the_username_and_password(String,String)"
});
formatter.result({
  "duration": 713669859,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageStepDefinition.the_user_clicks_on_Login_button()"
});
formatter.result({
  "duration": 282877417,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mohana",
      "offset": 16
    }
  ],
  "location": "LoginPageStepDefinition.verify_the_user_s_firstname_is_correctly_displayed_once_logged_in(String)"
});
formatter.result({
  "duration": 373468853,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mohana rao",
      "offset": 16
    }
  ],
  "location": "LoginPageStepDefinition.verify_the_user_fullname_appears_under_the_Allregisteredusers_list(String)"
});
formatter.result({
  "duration": 535521056,
  "status": "passed"
});
formatter.after({
  "duration": 1889559040,
  "status": "passed"
});
});