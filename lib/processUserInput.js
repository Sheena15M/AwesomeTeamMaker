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
                
            }
        }
    }
}