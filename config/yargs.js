const description = {
    demand: true,
    alias: "d",
    desc: "Describes the to-do task"
}

const argv = require("yargs")
    .command("create", "Creates a ToDo task", {
        description
    }).command("remove", "Deletes a ToDo task", {
        description
    }).command("update", "Updates a ToDo task", {
        description,
        complete: {
            default: true,
            alias: "c",
            desc: "Checks if task is complete"
        }
    }).command("list", "Lists all ToDo tasks", {}).help().argv;

module.exports = {
    argv
}