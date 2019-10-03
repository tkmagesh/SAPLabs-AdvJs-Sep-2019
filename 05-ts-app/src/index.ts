/*
/// <reference path="Employees.ts" />
/// <reference path="Customers.ts" />
*/


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

function testDec(){

}


function myLog(beforeMsg, afterMsg){
    return function (constructor, attrName, descriptor){
        console.log('[@MyLogDec] descriptor.value', descriptor.value.name)
        let method = descriptor.value;
        //console.log(constructor);
        descriptor.value = function MyLogDec(){
            console.log(beforeMsg);
            method.apply(this, arguments);
            console.log(afterMsg);
        }
    }
}

function Role(roleName){
    return function (constructor, attrName, descriptor){
        console.log('[@RoleDec] descriptor.value', descriptor.value.name)
        let method = descriptor.value;
        descriptor.value = function RoleDec(...args){
            //console.log(typeof constructor);
            console.log(this);
             if (this.role !== roleName)
                 throw new Error(`Invalid operation, user role must be [${roleName}]), but the current user role is ${this.role}`);
             return method(...args);
        }
    }
}

//@myLog
class Employee{

    role = '';
    
    constructor(role){
        this.role = role;
    }
    

    @myLog('before invocation', 'after invocation')
    @Role('admin')
    m1(){
        console.log('m1 - original implementation')
    }

    @myLog('before...', 'after...')
    m2(){

    }
}

//console.log('prototype=', Employee.prototype);

try{
    var adminEmp = new Employee('admin');
    adminEmp.m1();

    // var userEmp = new Employee('user');

    // userEmp.m1();

   
} catch (err){
    console.log(err);
}

//emp.m2();
//Employee.m1();



//myLog(Employee)
//var emp = new Employee();




