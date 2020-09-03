const inquirer = require("inquirer");
const axios = require ("axios");
const fs = require ("fs");
const path = require ("path");
const Engineer = require ("./lib/Engineer");
const Intern = require ("./lib/Intern");
const Manager = require ("./lib/Manager");

const employees = [];

function initIndex() {
    startHtml();
    addMember();
}

function addMember() {
    inquirer.prompt([{
        message: "Team member's name",
        name: "name"
    }])
} 