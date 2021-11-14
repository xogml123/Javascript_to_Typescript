//Type Annotation
//exports.forModule=3;
function multiply(x, y) {
    return x * y;
}
let numbers = multiply(3, 6);
//const strings = multiply('a', 'b');
console.log(numbers);
class Employee {
    constructor(name, gender) {
        this.name = name;
        this.gender = gender;
        Employee.employeeNumber++;
    }
    evaluateSalary() {
        return this.name.length * 10000 + this.gender.length * 50000;
    }
    static getEmployeeNumber() {
        //static method
        return Employee.employeeNumber;
    }
}
Employee.employeeNumber = 0; //static property
const employeeUsingObject = {
    name: 'Tom',
    gender: 'male',
    evaluateSalary: function () {
        return this.name.length * 10000 + this.gender.length * 50000;
    },
}; //Employee 생성자로 호출되지 않음.
const employeeUsingClass = new Employee('Sharon', 'female');
console.log(`employee name:  ${employeeUsingClass.name} 
employee gender:${employeeUsingClass.gender}
employee number: ${Employee.getEmployeeNumber()}`);
//Class
class Boss extends Employee {
    constructor(name, gender, stockPercentage) {
        super(name, gender);
        this.stockPercentage = stockPercentage;
    }
    evaluateSalary() {
        //overriding
        return 100000000;
    }
    getStockPercentage() {
        return this.stockPercentage;
    }
}
const boss = new Boss('Brian', 'male', 20);
console.log(`boss name: ${boss.name}
boss gender: ${boss.gender}
boss salary: ${boss.evaluateSalary()}
employee number: ${Employee.getEmployeeNumber()}
stockPercentage: ${boss.getStockPercentage()}`);
