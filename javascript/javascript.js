// Type Annotation
// exports.forModule=3;
exports.forModule = 3;
function multiply(x, y) {
    return x * y;
}
const numbers = multiply(3, 6);
const strings = multiply('a', 'b');
console.log(numbers);
console.log(strings);

// Interfaces

const Employee = (function () {
    function Employee(name, gender) {
        this.name = name;
        this.gender = gender;
        Employee.employeeNumber++;
    }
    Employee.prototype.evaluateSalary = function () {
        return this.name.length * 10000 + this.gender.length * 50000;
    };
    Employee.getEmployeeNumber = function () {
        // static method
        return Employee.employeeNumber;
    };
    Employee.employeeNumber = 0; // static property
    return Employee;
})();
const employeeUsingObject = {
    name: 'Tom',
    gender: 'male',
    evaluateSalary() {
        return this.name.length * 10000 + this.gender.length * 50000;
    },
}; // Employee 생성자로 호출되지 않으므로 employeeNumber증가하지 않음.

const employeeUsingClass = new Employee('Sharon', 'female');

console.log(
    `employee name:  ${employeeUsingClass.name} 
employee gender:${employeeUsingClass.gender}
employee number: ${Employee.getEmployeeNumber()}`,
);
// Class, inheritance
const Boss = (function () {
    let stockPercentage;
    function Boss(name, gender, stockPer) {
        Object.create(new Employee(name, gender));
        stockPercentage = stockPer;
    }
    Boss.prototype.evaluateSalary = function () {
        return 100000000;
    };
    Boss.prototype.getStockPercentage = function () {
        return stockPercentage;
    };

    return Boss;
})();
const boss = new Boss('Brian', 'male', 20);
console.log(`boss name: ${boss.name}
boss gender: ${boss.gender}
boss salary: ${boss.evaluateSalary()}
employee number: ${Employee.getEmployeeNumber()}
stockPercentage: ${boss.getStockPercentage()}`);

// namespace

let StringUtility;
(function (StringUtility) {
    function toCapital(str) {
        return str.toUpperCase();
    }
    StringUtility.toCapital = toCapital;
    function SubString(str, from, length) {
        if (length === void 0) {
            length = 0;
        }
        return str.substr(from, length);
    }
    StringUtility.SubString = SubString;
})(StringUtility || (StringUtility = {}));

const testNamespace = StringUtility.toCapital('aPple');
console.log(`testNamespace: ${testNamespace}`);

// generics
// generic function

function getArray(items) {
    return new Array().concat(items);
}
const myNumArr = getArray([100, 200, 300]);
const myStrArr = getArray(['Hello', 'World']);
myNumArr.push(400);
myStrArr.push('Hello TypeScript');

// generic class
const Pair = (function () {
    function Pair() {}
    Pair.prototype.setKeyValue = function (first, second) {
        this.first = first;
        this.second = second;
    };
    Pair.prototype.display = function () {
        console.log(`first = ${this.first}, second = ${this.second}`);
    };
    return Pair;
})();
const kvp1 = new Pair();
kvp1.setKeyValue(1, 'Steve');
kvp1.display(); // Output: Key = 1, Val = Steve
const kvp2 = new Pair();
kvp2.setKeyValue('CEO', 'Bill');
kvp2.display(); // Output: Key = CEO, Val = Bill
