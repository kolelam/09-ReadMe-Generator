// TODO: Include packages needed for this application
// calls inquirer package to begin prompts
const inquirer = require('inquirer');
const fs = require('fs');
const licenses = ["Apache 2.0", "BSD 3-Clause", "GPL 3.0", "ISC", "MIT", "N/A"];
const generateMarkdown = require('./generateMarkdown');
const path = require('path');
// will prevent user from leaving input blank
function validateInput(input){
    if (input != "") {
        return true;
    }
    else {
        return "Input cannot be left blank.";
    }
}
// TODO: Create an array of questions for user input
// List of array of licenses to choose from, some classmates used the prompt function to do this but I chose to stick with the const questions array
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is your prject name?",
        validate: validateInput
    },

    {
        type: "input",
        name: "description",
        message: "What is your project description?",
        validate: validateInput
    },

    {
        type: "input",
        name: "installation",
        message: "Steps to install your project?",
        validate: validateInput
    },

    {
        type: "input",
        name: "credit",
        message: "Any third party services or collaborators?",
        validate: validateInput
    },

    {
        type: "list",
        name: "licenses",
        message: "Please select the license applicable to your project:",
        choices: licenses,
        validate: validateInput
    },

    {
        type: "input",
        name: "github",
        message: "What's your GitHub username?",
        validate: validateInput
    },

    {
        type: "input",
        name: "email",
        message: "Good email to be reached at if anyone wants to contact you?",
        validate: validateInput
    },

    {
        type: "input",
        name: "usage",
        message: "How will this project be used?",
        validate: validateInput
    },

    {
        type: "input",
        name: "test",
        message: "What test, if any, were used for this project",
        validate: validateInput
    },
];

// TODO: Create a function to write README file
function writeToFile(data) {
    const outputDir = path.join(__dirname, 'output');
    const genFile = path.join(outputDir, 'generateMarkdown.md');
  
    console.log('Data:', data); // Check the value of the data variable
  
    try {
      if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir);
      }
  
      const markdownContent = generateMarkdown(data);
      console.log('Generated Markdown Content:', markdownContent); // Check the generated markdown content
  
      fs.writeFileSync(genFile, markdownContent, { encoding: 'utf8', flag: 'w' });
      console.log("SUCCESS! " + genFile + " created.");
    } catch (err) {
      console.error(err);
    }
  }
    //  fs.writeFile(
    //      genFile, generateMarkdown(data),{}, function(err){
    //          err ? console.log(err) : console.log("GREAT! " + genFile + " created.")
    //      });
    //  }


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(data => writeToFile(data))
}

// Function call to initialize app
init();
