$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/TF_Login.feature");
formatter.feature({
  "line": 2,
  "name": "validate Techfios functionality",
  "description": "",
  "id": "validate-techfios-functionality",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@LoginFeature"
    },
    {
      "line": 1,
      "name": "@smoke"
    }
  ]
});
formatter.before({
  "duration": 3229960300,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "comments": [
    {
      "line": 5,
      "value": "#\tGiven User is on the Techfios login page"
    },
    {
      "line": 6,
      "value": "#\tGiven User is on the \"Techfios\" login page"
    }
  ],
  "line": 7,
  "name": "User is on the \"Techfios\" login page",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "Techfios",
      "offset": 16
    }
  ],
  "location": "LoginStepDef.User_is_on_the_login_page(String)"
});
formatter.result({
  "duration": 4104575100,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "1 User should be able to login with the valid credentials",
  "description": "",
  "id": "validate-techfios-functionality;1-user-should-be-able-to-login-with-the-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@scenario1"
    },
    {
      "line": 9,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "comments": [
    {
      "line": 11,
      "value": "#\tAnd user clicks signin button"
    },
    {
      "line": 12,
      "value": "#\tWhen user enters password as \"abc123\""
    }
  ],
  "line": 13,
  "name": "user enters username as \"demo@techfios.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "user enters password as \"abc123\"",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "user clicks signin button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user will land on the Dashboard page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "demo@techfios.com",
      "offset": 25
    }
  ],
  "location": "LoginStepDef.user_enters_username_as(String)"
});
formatter.result({
  "duration": 2122929200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 25
    }
  ],
  "location": "LoginStepDef.user_enters_password_as(String)"
});
formatter.result({
  "duration": 2124829700,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.user_clicks_signin_button()"
});
formatter.result({
  "duration": 3700552800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.user_will_land_on_the_Dashboard_page()"
});
formatter.result({
  "duration": 811316100,
  "status": "passed"
});
formatter.after({
  "duration": 811839900,
  "status": "passed"
});
});