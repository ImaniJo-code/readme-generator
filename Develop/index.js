// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the name of your application? (Required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
            console.log('Please enter the name of your application!');
            return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the application. (Required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
            console.log('Please enter a description for your application!');
            return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Provide info for installing your application. (Required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
            console.log('Please provide info for installing your application!');
            return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide info for using your application. (Required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
            console.log('Please provide info for using your application!');
            return false;
            }
        } 
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Provide license info. (Required)',
        choices: ['Apache', 'Common-Development-and Distribution', 'GNU-General-Public', 'MIT', 'Mozilla-Public', 'None'],
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
            console.log('Please provide licensing info for your application!');
            return false;
            }
        }
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Provide info for how other can contribute to the application. (Required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
            console.log('Please provide info for contributing to your application!');
            return false;
            }
        }
    },
    {
        type: 'input',
        name: 'test',
        message: 'Provide info for how to test your application. (Required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
            console.log('Please provide info for testing your application!');
            return false;
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your Github Username. (Required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
            console.log('Please provide your Github username!');
            return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address. (Required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
            console.log('Please provide your email address!');
            return false;
            }
        }
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}


// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();