const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

const employees = [];

function initApp() {
    startHtml();
    addMember();
}

function addMember() {
    inquirer.prompt ([{
        message: "What is the team member's name",
        name: "name"
},
{
    type: "list",
    message: "What position does the team member hold",
    choices: [
        "Manager",
        "Engineer",
        "Intern"
    ],
    name: "position"
},
{
    message: "What is their ID",
    name: "ID"
},
{
    message:"What is the team member's email address",
    name: "email"
}])

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

.then(function({name, role, id, email}) {
    let roleInfo = "";
    if (role ==="Engineer") {
        roleInfo = "Github username";
    } else if (role === "Intern") {
        roleInfo = "school name";
    } else {
        roleInfo = "office phone number";
    }
    inquirer.prompt([{
        message: 'What is the team members ${roleInfo}',
        name: "roleInfo"
    },
    {
        type: "list",
        message: "Any more team members to add?",
        choices: [
            "yes",
            "no"
        ],
        name: "additionalMembers"
    
    }])

    .then(function({roleInfo,additionalMembers}){
        let newMember;
        if (role === "Engineer") {
            newMember = new Engineer (name, id, email, roleInfo);
        } else if (role === "Intern") {
            newMember = new Intern (name, id, email, roleInfo);
        } else {
            newMember = new Manager (name, id, email, roleInfo);
        }
        employees.push(newMember);
        addHtml(newMember)
        .then(function() {
            if (additionalMembers === "yes") {
                addMember();
            } else {
                finishHtml();
            }
    });


// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.



// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
