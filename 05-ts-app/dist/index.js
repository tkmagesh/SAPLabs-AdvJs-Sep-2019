"use strict";
/*
/// <reference path="Employees.ts" />
/// <reference path="Customers.ts" />
*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/*
let emps = new Models.Employees();
let customers = new Models.Customers();

let add = (x : number, y : number) : number => x + y;
console.log(add(10,20));

class Employee{
    private id : number = 0;
    name : string = '';

    constructor(id : number , name : string){
        this.id = id;
        this.name = name;
    }
}
*/
function testDec() {
}
function myLog(beforeMsg, afterMsg) {
    return function (constructor, attrName, descriptor) {
        console.log('[@MyLogDec] descriptor.value', descriptor.value.name);
        var method = descriptor.value;
        //console.log(constructor);
        descriptor.value = function MyLogDec() {
            console.log(beforeMsg);
            method.apply(this, arguments);
            console.log(afterMsg);
        };
    };
}
function Role(roleName) {
    return function (constructor, attrName, descriptor) {
        console.log('[@RoleDec] descriptor.value', descriptor.value.name);
        var method = descriptor.value;
        descriptor.value = function RoleDec() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            //console.log(typeof constructor);
            console.log(this);
            if (this.role !== roleName)
                throw new Error("Invalid operation, user role must be [" + roleName + "]), but the current user role is " + this.role);
            return method.apply(void 0, args);
        };
    };
}
//@myLog
var Employee = /** @class */ (function () {
    function Employee(role) {
        this.role = '';
        this.role = role;
    }
    Employee.prototype.m1 = function () {
        console.log('m1 - original implementation');
    };
    Employee.prototype.m2 = function () {
    };
    __decorate([
        myLog('before invocation', 'after invocation'),
        Role('admin')
    ], Employee.prototype, "m1", null);
    __decorate([
        myLog('before...', 'after...')
    ], Employee.prototype, "m2", null);
    return Employee;
}());
//console.log('prototype=', Employee.prototype);
try {
    var adminEmp = new Employee('admin');
    adminEmp.m1();
    // var userEmp = new Employee('user');
    // userEmp.m1();
}
catch (err) {
    console.log(err);
}
//emp.m2();
//Employee.m1();
//myLog(Employee)
//var emp = new Employee();
//# sourceMappingURL=index.js.map