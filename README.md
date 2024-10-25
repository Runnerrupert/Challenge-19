# Quiz-Testing

![Static Badge](https://img.shields.io/badge/MIT%20License-blue)

### Table of Contents
- [Description](#description)
- [How to Install](#how-to-install)
- [Usage](#usage)
- [License](#license)
- [Contributors](#contributors)
- [Questions](#questions)
- [Application Images](#application-images)


---

## Description

This website is a simple quiz on Python. You have 4 answer prompts to choose from. Upon finishing the quiz, you can see your score. The main purpose behind this repository is to showcase component and e2e testing. Using cypress, you can visually see tests being run and what the test is doing. Each test has a corrisponding success or failure. Each test for this website run successfully. 

Test Demo Video - https://drive.google.com/file/d/1zg1Dmp0yTMrFkydY-sbLV1M88CYKPKc9/view 

## How to Install

These steps are used to install and start the application:

1. **Clone the Repository**:

   ```bash
   git clone git@github.com:Runnerrupert/Quiz-Testing.git
   ```

2. **Navigate to the Project Directory**:

   ```bash
   cd your-repository
   ```

3. **Install Dependencies**:

   ```bash
   npm install
   ```
4. **Build Application**:

   ```bash
   npm run build
   ```
   
5. **Start the Application**:
   ```bash
   npm run start:dev
   ```
6. **Check the webpage with this URL**:

   ```bash
   http://localhost:3001
   ```

## Usage

**Start Cypress for Component Testing**:

   ```bash
   npm run cypress
   ```

   - You will be given two options, E2E Testing and Component Testing .
   - Select Component Testing.
   - Choose whichever browser you desire.
   - Select "Quiz" under cypress\component
   - Each test will run and you will see a corrisponding result, success or failure.
   - You can also view each test by selecting each respectively.

**Start Cypress for E2E Testing**:

   You will need two terminals open for end to end testing.  
      
   In the first console, run this command: 
   ```bash
   npm run start:dev
   ```  
   In the second console, run this command:  
   ```bash
   npm run cypress
   ```
   - Leave the server running in http://localhost:3001. This is needed for E2E Testing.
   - Within the Cypress GUI, select E2E Testing.
   - Choose whichever browser you desire.
   - Select "Quiz" under cypress\component
   - Each test will run and you will see a corrisponding result, success or failure.
   - You can also view each test by selecting each respectively.


## License

For more information about the MIT license, use this link!
 https://memgraph.com/blog/what-is-mit-license

For a better understanding, I give you permission to use, copy, modify, distribute and sell copies at your own discretion.

---

## Contributors

University Of Utah Coding Bootcamp and Cameron Barfuss

Specifically, The coding bootcamp has taught different code practices to use to be able to create a functioning testing environment, I wrote the code for all of the testing, the actual website alongside any functionality was written by the University of Utah Coding Bootcamp.

---

## Questions

My Github: https://github.com/Runnerrupert

My Email Address: Cameron.barfuss@gmail.com

You can contact me using my Github link or via Email if you have any questions about Quiz-Testing.

--

## Application Images

![Cypress Image](./assets/images/Cypress%20Component%20Testing.PNG)