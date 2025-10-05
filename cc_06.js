//Step 2: a base class for Employees 
class Employee {
    constructor (name, department) {
        this.name = name
        this.department = department
    }

describe() {
    return `${this.name} works in the ${this.department} department.`
    }
}

//Step 3: Create a Manager Subclass
class Manager extends Employee {
    constructor (name, department, teamSize) {
        super(name, department)
        this.teamSize = teamSize
    }
    
    describe () {
        return `${this.name} manages the ${this.department} department with a team of ${this.teamSize} people.`
    }
}

//Step 4: Create a smaple of employees and managers 
const emp1 = new Employee("Kenzie", "sales")
const emp2 = new Employee("Nicole", "Marketing")
const mgr1 = new Manager("Shira", "Engineering", 8)
const mgr2 = new Manager("Guilia", "Finance", 5)

//Step 5: Create a Company Class
class Company {
    constructor() {
        this.employees = []; 
    }
    addEmployee(employee) {
        this.employees.push(employee)
    }
    listEmployees() {
        this.employees.forEach(emp => {
            console.log(emp.describe());
        });
    }
}

//Step 6: Instantiate a company and test 
const myCompany = new Company()

myCompany.addEmployee(emp1)
myCompany.addEmployee(emp2)
myCompany.addEmployee(mgr1)
myCompany.addEmployee(mgr2)

myCompany.listEmployees()