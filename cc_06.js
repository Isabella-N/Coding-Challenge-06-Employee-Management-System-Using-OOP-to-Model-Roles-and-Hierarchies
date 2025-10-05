//Step 2: a base class for Employees 
class Employee {
    constructor (name, department) {
        this.name = name;
        this.department = department;
    }

describe() {
    return `${this.name} works in the ${this.department} department.`;
    }
}