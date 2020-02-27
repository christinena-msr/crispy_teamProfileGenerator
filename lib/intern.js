const Employee = require("./employee.js");

class Intern extends Employee {
    constructor(school) {
        super(this.name, this.id, this.email);
        this.school = school;
    }
    getSchool() {
        return this.school;
    }
    getRole() {
        return "Intern";
    }
}