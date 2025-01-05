// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector("#add-employees-btn");

/* 
Get user input to create and return an array of employee objects
User inputs strings for first name, last name and salar
Function returns array of employee objects using user inputs
*/
const collectEmployees = function () {
  // declare empty array for employee objects
  let employees = [];

  // collect data at least once so user gets the chance to continue adding employees or cancel
  do {
    // collect string from user
    firstName = prompt("Enter first name:");
    // if user clicks cancel then exit loop immediatley
    if (firstName == null) {
      break;
    }
    lastName = prompt("Enter last name:");
    if (lastName == null) {
      break;
    }
    // request salary from user until they enter a number
    do {
      // convert user input from string to number type
      salary = parseInt(prompt("Enter salary:"));
      // if user clicks cancel then exit loop immediatley
      if (salary == null) {
        break;
      }
      // continue loop as long as user does not enter a number
    } while (isNaN(salary));
    if (salary == null) {
      break;
    }
    // create and add current employee object into employees array
    employees.push({
      firstName: firstName,
      lastName: lastName,
      salary: salary,
    });
    // continue loop as long as user clicks OK
  } while (confirm("Do you want to add another employee?"));
  // console.log(employees);
  // sort employees array based on return from compare method
  employees.sort(function (a, b) {
    // sort by last names if they are different
    if (a.lastName != b.lastName) {
      return a.lastName.localeCompare(b.lastName);
      // sort by first names if last names are the same
    } else {
      return a.firstName.localeCompare(b.firstName);
    }
  });
  return employees;
};

// Display the average salary
const displayAverageSalary = function (employeesArray) {
  // TODO: Calculate and display the average salary
};

// Select a random employee
const getRandomEmployee = function (employeesArray) {
  // TODO: Select and display a random employee
};

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector("#employee-table");

  // Clear the employee table
  employeeTable.innerHTML = "";

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
};

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log("==============================");

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
};

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener("click", trackEmployeeData);
