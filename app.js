const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const inquirer = require("inquirer");
// const path = require("path");
// const fs = require("fs");

// const OUTPUT_DIR = path.resolve(__dirname, "output")
// const outputPath = path.join(OUTPUT_DIR, "team.html");
​
// const render = require("./lib/htmlRenderer");

let team = [];

inquirer
    .prompt([{
        message: "To create a team, add the manager's name",
        name: "name"
    },
    {
        message: "Add ID Number",
        name: "id"
    },
    {
        message: "Add email",
        name: "email"
    },
    {
        message: "Add office number",
        name: "officeNumber"
    }
    ])
    .then(res => {
        console.log(res);
        const manager = new Manager(res.name, res.id, res.email, res.officeNumber);
        console.log(manager);
        team.push(manager);
        console.log(team);
        addMember();
    });

    const addMember = () => {
        inquirer
        .prompt([
            {
                type: "confirm",
                message: "Add a team member?",
                name: "addMember"
            }
        ])
        .then(answer => {
            if(answer.addMember === true) {
                inquirer.prompt([
                    {
                        message: "Enter team member's name",
                        name: "name"
                    },
                    {
                        message: "Enter team member's id",
                        name: "id"
                    },
                    {
                        message: "Enter team member's email",
                        name: "email"
                    },
                    {
                        type: "list",
                        message: "What is the role of this team member?",
                        choices: ["engineer", "intern"],
                        name: "role"
                }]).then(newMember => {
                    if(newMember.role === "engineer") {
                        inquirer.prompt([{
                            message: "Enter the engineer's GitHub username",
                            name: "github"
                        }]).then(engineerData => {
                            const engineer = new Engineer(newMember.name, newMember.id, newMember.email, engineerData.github);
                            team.push(engineer);
                            addMember();
                        });
                    }
                    if(newMember.role === "intern") {
                        inquirer.prompt([{
                            message: "Enter the intern's school",
                            name: "school"
                        }]).then(internData => {
                            const intern = new Intern(newMember.name, newMember.id, newMember.email, internData.school);
                            team.push(intern);
                            addMember();
                        });
                    }
                });
            }
            if(answer.addMember === false) {
                console.log(team);
                // const profile = render.render(team);
                // console.log(profile);
                // fs.writeFileSync(outputPath, profile, OUTPUT_DIR);
            };
        });
    };