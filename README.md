# Lab8_Starter

## Check your understanding q's (FILL OUT)
1. In your own words: Where would you fit your automated tests in your Bujo project development pipeline? (just write the letter)
    1. Within a github action...

2. Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.
  No, because I assume that the message feature interacts with several other features, especially since messaging is the main function of the app and likely involves network interaction.

3. Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters
  Yes, because this is a small feature that can be tested relatively easily without involving any other aspects of the app.

4. What do you expect to happen if we run our puppeteer tests with the field “headless” set to true?
    The tests will run in the terminal/background but we won't really be able to see what is going on.

5. What would your beforeAll callback look like if you wanted to start from the settings page before every test case?
replace "page.goto('http://127.0.0.1:5500');" with "page.click(header.img);"
