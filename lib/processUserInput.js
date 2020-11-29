const inquirer = require("inquirer");

class UserInput {
    constructor(){
        this.allAnswers = [];
        this.counter = 1;
    }
    
    async requestInput() {
        let type = "Manager";
        let manager = await this.askQuestions(type);
        manager.type = type;
        this.allAnswers.push(manager);
        let c = true;
        while (c === true) {
            let newRecord = await inquirer.prompt({
                type: "list",
                message: "Please choose a team member or would you like to exit the app:",
                choices: ["Engineer", "Intern", "Exit"],
                name: "type"
            });
            type = newRecord.type;
            if (type === "Exit") {
                c = false;
            }
            else {
                let employee = await this.askQuestions(type);
                employee.type = type;
                this.allAnswers.push(employee);
            }
        }
    }

    async askQuestions(type) {
        let param = "";
        switch(type) {
            case "Manager": param = 'office number'; break
            case "Engineer": param = 'git hub'; break
            case "Intern": param = 'school'; break
        }

        let answer = await inquirer.prompt([{
            //when you have to use ' as an apstrophy, you have to use `` to complete the prompt
            type: 'input',
            message: `What is ${type}'s name:`,
            name: 'name'

        },
        {
            type: 'input',
            message: `Please enter ${type}'s email:`,
            name: 'email'
        },
        {
            type: 'input',
            message: `What is ${type}'s ID number:`,
            name: 'id'
        },
        {
            type: 'input',
            message: `Please enter ${type}'s ${param}:`,
            name: 'addParam'
        }
    ])
    return answer;
    }
}

module.exports.UserInput = UserInput;