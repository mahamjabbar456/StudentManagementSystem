#! /usr/bin/env node
import inquirer from "inquirer";
let condition = true;
class Student {
    name;
    id;
    courses;
    balance;
    constructor(name, id, course, balance) {
        this.name = name;
        this.id = id;
        this.courses = course;
        this.balance = balance;
    }
    show() {
        console.log(`Student name is ${this.name} \n Student id is ${this.id}\n Student courses is ${this.courses} \n Student balance is ${this.balance}`);
    }
}
let GenerateID = Math.floor(Math.random() * 100000) + 1;
while (condition) {
    let answer = await inquirer.prompt([
        {
            name: "StudentName",
            type: "input",
            message: "Enter the name of Student : "
        },
        {
            name: "StudentCourses",
            type: "list",
            message: "Choose the course which you want to study : ",
            choices: ["HTML", "CSS", "Javacript", "Typescript"]
        },
        {
            name: "StudentBalance",
            type: "number",
            message: "Enter your balance : "
        },
        {
            name: "quit",
            type: "input",
            message: "Do you want to add another Student Data : (Y/N)"
        }
    ]);
    let Student1 = new Student(answer.StudentName, GenerateID, answer.StudentCourses, answer.StudentBalance);
    Student1.show();
    if (answer.quit === "y" || answer.quit === "Y") {
        condition = true;
    }
    else {
        condition = false;
    }
}
