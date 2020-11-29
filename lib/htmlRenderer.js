const fs = require("fs");
const card = require("../templates/card");
const html = require("../templates/html");

class TeamPage {
  constructor(team) {
    this.team = team;
  }

  generate(){
    let cards = '';
    for (let employee of this.team) {
      let name = employee.getName();
      let id = employee.getId();
    }
  }
}