const argv = require('./config/yargs').argv;
const toDo = require("./to-do/to-do");
require("colors");

let command = argv._[0];

switch (command) {
    case "create":
        let task = toDo.create(argv.d);
        console.log("Created:", task);
        break;
    case "update":
        let updated = toDo.update(argv.d, argv.complete);
        if (updated) {
            console.log("Updated succesfully!".green);
        } else {
            console.log("Couldn't find that task".red);
        }
        break;
    case "list":
        let tasks = toDo.list();
        console.log("==========TO DO============".green);
        for (let task of tasks) {
            console.log("Task:".yellow, task.description);
            if (task.complete)
                console.log("Complete:".blue, `${task.complete}`.green);
            else
                console.log("Complete:".blue, `${task.complete}`.red);
        }
        console.log("===========================".green);
        break;
    case "remove":
        let removed = toDo.remove(argv.d);
        if (removed) {
            console.log("Removed succesfully!".green);
        } else {
            console.log("Couldn't find that task".red);
        }
        break;
    default:
        console.log("Command not recognized".red);
}