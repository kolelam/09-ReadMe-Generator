// TODO: Include packages needed for this application
// calls inquirer package to begin prompts
const inquirer = require('inquirer');
const fs = require('fs');

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
function writeToFile (data)
{
    const genFile = "./outPut/ReadMeGen.md"
    fs.writeFileSync(genFile,generateMarkdown(data),{encoding:'utf8',flag:'w'}, function(err){
                   err ? console.log(err) : console.log("GREAT! " + genFile + " created.")
             })
     fs.writeFile(
         genFile, generateMarkdown(data),{}, function(err){
             err ? console.log(err) : console.log("GREAT! " + genFile + " created.")
         });
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
