//Type Annotation
//exports.forModule=3;
export const forModule = 3;

function multiply(x: number, y: number) {
    return x * y;
}

let numbers = multiply(3, 6);
//const strings = multiply('a', 'b');
console.log(numbers);
//console.log(strings);

//Interfaces
interface IPerson {
    name: string;
    gender: string;
}

interface IEmployee extends IPerson {
    evaluateSalary(): number;
}

class Employee implements IEmployee {
    name: string;
    gender: string;
    private static employeeNumber: number = 0; //static property
    constructor(name: string, gender: string) {
        this.name = name;
        this.gender = gender;
        Employee.employeeNumber++;
    }
    evaluateSalary(): number {
        return this.name.length * 10000 + this.gender.length * 50000;
    }
    static getEmployeeNumber(): number {
        //static method
        return Employee.employeeNumber;
    }
}

const employeeUsingObject: IEmployee = {
    name: 'Tom',
    gender: 'male',
    evaluateSalary: function (): number {
        return this.name.length * 10000 + this.gender.length * 50000;
    },
}; //Employee 생성자로 호출되지 않음.

const employeeUsingClass: IEmployee = new Employee('Sharon', 'female');

console.log(
    `employee name:  ${employeeUsingClass.name} 
employee gender:${employeeUsingClass.gender}
employee number: ${Employee.getEmployeeNumber()}`,
);

//Class
class Boss extends Employee {
    //inheritance
    private stockPercentage; //private
    constructor(name: string, gender: string, stockPercentage: number) {
        super(name, gender);
        this.stockPercentage = stockPercentage;
    }
    evaluateSalary(): number {
        //overriding
        return 100000000;
    }
    getStockPercentage(): number {
        return this.stockPercentage;
    }
}

const boss = new Boss('Brian', 'male', 20);
console.log(`boss name: ${boss.name}
boss gender: ${boss.gender}
boss salary: ${boss.evaluateSalary()}
employee number: ${Employee.getEmployeeNumber()}
stockPercentage: ${boss.getStockPercentage()}`);
