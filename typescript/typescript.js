"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.forModule = void 0;
//Type Annotation
//exports.forModule=3;
exports.forModule = 3;
function multiply(x, y) {
    return x * y;
}
var numbers = multiply(3, 6);
//const strings = multiply('a', 'b');
console.log(numbers);
var Employee = /** @class */ (function () {
    function Employee(name, gender) {
        this.name = name;
        this.gender = gender;
        Employee.employeeNumber++;
    }
    Employee.prototype.evaluateSalary = function () {
        return this.name.length * 10000 + this.gender.length * 50000;
    };
    Employee.getEmployeeNumber = function () {
        //static method
        return Employee.employeeNumber;
    };
    Employee.employeeNumber = 0; //static property
    return Employee;
}());
var employeeUsingObject = {
    name: 'Tom',
    gender: 'male',
    evaluateSalary: function () {
        return this.name.length * 10000 + this.gender.length * 50000;
    }
}; //Employee 생성자로 호출되지 않음.
var employeeUsingClass = new Employee('Sharon', 'female');
console.log("employee name:  " + employeeUsingClass.name + " \nemployee gender:" + employeeUsingClass.gender + "\nemployee number: " + Employee.getEmployeeNumber());
//Class
var Boss = /** @class */ (function (_super) {
    __extends(Boss, _super);
    function Boss(name, gender, stockPercentage) {
        var _this = _super.call(this, name, gender) || this;
        _this.stockPercentage = stockPercentage;
        return _this;
    }
    Boss.prototype.evaluateSalary = function () {
        //overriding
        return 100000000;
    };
    Boss.prototype.getStockPercentage = function () {
        return this.stockPercentage;
    };
    return Boss;
}(Employee));
var boss = new Boss('Brian', 'male', 20);
console.log("boss name: " + boss.name + "\nboss gender: " + boss.gender + "\nboss salary: " + boss.evaluateSalary() + "\nemployee number: " + Employee.getEmployeeNumber() + "\nstockPercentage: " + boss.getStockPercentage());
//namespace
var StringUtility;
(function (StringUtility) {
    function toCapital(str) {
        return str.toUpperCase();
    }
    StringUtility.toCapital = toCapital;
    function SubString(str, from, length) {
        if (length === void 0) { length = 0; }
        return str.substr(from, length);
    }
    StringUtility.SubString = SubString;
})(StringUtility || (StringUtility = {}));
var testNamespace = StringUtility.toCapital("aPple");
console.log("testNamespace: " + testNamespace);
//generics
//generic function
function getArray(items) {
    return new Array().concat(items);
}
var myNumArr = getArray([100, 200, 300]);
var myStrArr = getArray(["Hello", "World"]);
myNumArr.push(400); // OK
myStrArr.push("Hello TypeScript"); // OK
//myNumArr.push("Hi"); //error
//myStrArr.push(500); //error
//generic class
var Pair = /** @class */ (function () {
    function Pair() {
    }
    Pair.prototype.setKeyValue = function (first, second) {
        this.first = first;
        this.second = second;
    };
    Pair.prototype.display = function () {
        console.log("first = " + this.first + ", second = " + this.second);
    };
    return Pair;
}());
var kvp1 = new Pair();
kvp1.setKeyValue(1, "Steve");
kvp1.display(); //Output: Key = 1, Val = Steve 
var kvp2 = new Pair();
kvp2.setKeyValue("CEO", "Bill");
kvp2.display(); //Output: Key = CEO, Val = Bill
