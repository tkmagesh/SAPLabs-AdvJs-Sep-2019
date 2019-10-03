/// <reference path="Employees.ts" />
/// <reference path="Customers.ts" />



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

let emp = new Employee(100, 'Magesh');

