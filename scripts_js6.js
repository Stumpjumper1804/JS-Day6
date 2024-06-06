// Basic Exercise 1

// Based on the following two Objects definitions:
// let sandwiches = `{ "sandwich": "hamburger", "calories": "260" }`;
// let fries = `{ "fries_size": "Large French Fries", "calories": "570" }`;

// // Print the following message within the browser:
// const parsedSandwiches = JSON.parse(sandwiches);
// const parsedFries = JSON.parse(fries);

// console.log(parsedSandwiches);
// console.log(parsedFries);

// document.write(
//   `My favorite sandwich is a ${parsedSandwiches.sandwich} which has approx. ${parsedSandwiches.calories} calories, along with it I enjoy eating ${parsedFries.fries_size} which have even more calories (about ${parsedFries.calories}).`
// );

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Intermediate Exercise 1

// Create a JSON file which contains the following details per employee:

// ● Unique ID
// ● First Name
// ● Last Name
// ● Email address
// ● Job Title
// ● Salary

// Fill the JSON file with meaningful data for 10 Employees.

let employees = `
    [{
        "uniqueID": "1",
        "firstName": "Albert",
        "lastName": "Karsai",
        "email": "something@somedomain.at",
        "jobTitle": "Developer",
        "salary": "4.000"
    },
    {
        "uniqueID": "2",
        "firstName": "John",
        "lastName": "Malcom",
        "email": "something@somedomain.at",
        "jobTitle": "Accountant",
        "salary": "3.000"
    },
    {
        "uniqueID": "3",
        "firstName": "Yvonne",
        "lastName": "Berger",
        "email": "something@somedomain.at",
        "jobTitle": "Marketing Manager",
        "salary": "4.500"
    },
    {
        "uniqueID": "4",
        "firstName": "Helmut",
        "lastName": "Meyer",
        "email": "something@somedomain.at",
        "jobTitle": "CEO",
        "salary": "6.000"
    },
    {
        "uniqueID": "5",
        "firstName": "Sandra",
        "lastName": "Mulloy",
        "email": "something@somedomain.at",
        "jobTitle": "Developer",
        "salary": "4.000"
    },
    {
        "uniqueID": "6",
        "firstName": "Eva",
        "lastName": "Stern",
        "email": "something@somedomain.at",
        "jobTitle": "Backend office",
        "salary": "2.500"
    },
    {
        "uniqueID": "7",
        "firstName": "Mark",
        "lastName": "Miles",
        "email": "something@somedomain.at",
        "jobTitle": "Business Development",
        "salary": "4.300"
    },
    {
        "uniqueID": "8",
        "firstName": "Nicole",
        "lastName": "Lolly",
        "email": "something@somedomain.at",
        "jobTitle": "Logistics",
        "salary": "3.200"
    },
    {
        "uniqueID": "9",
        "firstName": "Thomas",
        "lastName": "Colm",
        "email": "something@somedomain.at",
        "jobTitle": "Backend developer",
        "salary": "5.000"
    },
    {
        "uniqueID": "10",
        "firstName": "Brittney",
        "lastName": "Howard",
        "email": "something@somedomain.at",
        "jobTitle": "Controlling",
        "salary": "4.150"
    }]`;

let parsedEmployees = JSON.parse(employees);
console.log(parsedEmployees);

// Print each
// employee's details in a table which will look representative and easily
// readable for the management team.

const tableBody = document.getElementById("table-anchor");

for (const emp of parsedEmployees) {
  tableBody.innerHTML += `
            <tr>
                <td>${emp.uniqueID}</td>
                <td>${emp.firstName}</td>
                <td>${emp.lastName}</td>
                <td>${emp.email}</td>
                <td>${emp.jobTitle}</td>
                <td>${emp.salary}</td>
            </tr>
    `;
}

/////////////////////////////////////////////////////////////////////////////////////////
