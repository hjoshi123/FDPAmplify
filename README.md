# AWS Amplify Demo (Faculty Development Program 2019)

A chatbot with auth service using AWS Amplify. AWS Amplify provides a framework to use many AWS services like cognito auth and lex with just few lines of code. Demonstrated and explained during the Faculty Development Program 2019 conducted by MSRIT.

## Installation

### Pre-requisites

* Node.JS
* npm
* create-react-app (for easier templates)

### Steps for install

* Install amplify cli initially using the command **`npm i -g @aws-amplify/cli`**.
* Clone the project using the following command: `git clone https://github.com/hjoshi123/FDPAmplify`
* Next Install the dependencies mentioned in the app using: **`npm install`**
* If you are using AWS Amplify for the **first time**, configure the cli using **`amplify configure`**. This step takes you through a series of steps, which inclues logging in to the console, creating the user, giving permissions etc.
* Once this is done, run **`amplify init`**, which setups your environment etc.
* Add the required libraries like **interactions, auth** using **`amplify add <libary-name>`**.
* Run the app using: **`npm start`**.

## Contributors

* [Hemant Joshi](https://github.com/hjoshi123/)
* [V R Karthik](https://github.com/vrkarthik14)
* Dr. Mydhili.K. Nair (Professor, Dept of ISE)

## Learn More

[Check out the slides here](https://docs.google.com/presentation/d/1pk99cfzZY_rjMsBGo66Sm2XY_y9CuNjUcCPFgt05wbo/edit?usp=sharing)
