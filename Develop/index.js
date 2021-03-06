// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const path = require('path');
// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'What is your projects title?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please describe your project',
      },
      {
        type: 'input',
        name: 'userStory',
        message: 'What is the user story',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'What are the instructions for installation to your project?',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'What is your project used for?',
      },
      {
        type: 'input',
        name: 'acceptanceCriteria',
        message: 'What are the acceptance criteria for your project?',
      },
      
    {
      type: 'checkbox',
      message: 'What license do you want for the project?',
      name: 'license',
      choices: ['GPL', 'Common Development and Distribution License', 'Mozilla Public License 2.0', 'Node', 'MIT license', 'No license'],
    },
    {
      type: 'input',
      name: 'github',
      message: 'What is your github user name',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email to contact you for further questions?',
    },
    // github and email questions
  ];

  
      
    //   else {
          
    //   }
    // const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;

    // fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
    //   err ? console.log(err) : console.log('Success!')
    // );
  

// TODO: Create a function to write README file fs doc google
function writeToFile(fileName, data) {

  const content = generateMarkdown(data);

  fs.writeFile(fileName, content, (err) =>

  err ? console.log(err) : console.log('README created')
  );
}

// TODO: Create a function to initialize app call inquirer 
function init() {

  inquirer
  .prompt(questions)
  .then((response) => {

    writeToFile('A_README.md', response)
  })
}

// Function call to initialize app
init();
