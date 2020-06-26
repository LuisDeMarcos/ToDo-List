const fs = require("fs");

let toDoList = [];

const saveDB = () => {
    let data = JSON.stringify(toDoList);
    fs.writeFile("db/data.json", data, (err) => {
        if (err) throw new Error("Couldn't save task", err);
    });
}

const loadDB = () => {
    try {
        toDoList = require("../db/data.json");
    } catch (error) {
        toDoList = [];
    }
}

const create = (desc) => {
    loadDB();
    let task = {
        description: desc,
        complete: false
    }
    toDoList.push(task);
    saveDB();
    return task;
}

const list = () => {
    loadDB();
    return toDoList;
}

const update = (desc, complete = true) => {
    loadDB();
    let index = toDoList.findIndex(task => task.description === desc);
    if (index >= 0) {
        toDoList[index].complete = complete;
        saveDB();
        return true
    } else {
        return false
    }
}

const remove = (desc) => {
    loadDB();
    let removed = toDoList.filter(task => task.description !== desc);
    if (removed.length === toDoList.length) {
        return false
    } else {
        toDoList = removed;
        saveDB();
        return true
    }
}

module.exports = {
    create,
    list,
    update,
    remove
}