const Employee = require("./employee.js");

class Engineer extends Employee {
    constructor(username) {
        super(this.name, this.id, this.email);
        this.gitHub = username;
    }
    getGithub() {
        return this.gitHub;
    }
    getRole() {
        return "Engineer";
    }
}