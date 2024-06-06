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

// Advanced Exercise 1: Book List

// Create an external JSON file that will contain the data( e.g.
// `{'title': 'Javascript for Dummies',
// 'author': 'Dummy Dumb Dumb',
// 'read': 'false'
// }`

let bookList = `
[{
    "title": "JavaScript for Dummies",
    "author": "T. H. Kirk",
    "pages": 230,
    "read": false,
    "cover": "bookcover.jpg"
},
{
    "title": "Node.js for Dummies",
    "author": "Adam Young",
    "pages": 200,
    "read": true,
    "cover": "bookcover.jpg"
},
{
    "title": "HTML5/CSS3 for Dummies",
    "author": "Michael Jackson",
    "pages": 450,
    "read": false,
    "cover": "bookcover.jpg"
},
{
    "title": "Python for Dummies",
    "author": "Neil Skern",
    "pages": 320,
    "read": true,
    "cover": "bookcover.jpg"
},
{
    "title": "Java for Dummies",
    "author": "Jabba da Hut",
    "pages": 670,
    "read": false,
    "cover": "bookcover.jpg"
}]`;

let parsedBooklist = JSON.parse(bookList);
console.log(parsedBooklist);
// 1. Iterate through the array of books. For each book, create a <p>
// element with the book title and author and append it to the page.

// 2. Each book should have an image cover.

for (const book of parsedBooklist) {
  let para = book.read ? "<p class='bg-success'>Reading completed</p>" : "";

  // color = book.read ? "success" : "danger";
  document.getElementById("booklist").innerHTML += `
<div class="m-2 border border-dark border-2">
<p><img src="${book.cover}" alt="" class="me-3"</img> ${book.title} (${book.author}, ${book.pages} pages)</p>
${para}
</div>
`;
}

// 3. Change the style of the book depending on whether you have read it or not
// const books = document.querySelectorAll(".read");
// console.log(books);

// books.forEach((element, index) => {
//   if (parsedBooklist[index].read == true) {
//     element.textContent = "Reading completed";
//   }
// });
