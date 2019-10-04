let calculator = {
    add(x,y){
        return x + y;
    },
    subtract(x,y){
        return x - y;
    },
    multiply(x,y){
        return x * y;
    },
    divide(x,y){
        return x / y;
    }
}

//ES6 Modules
//export default calculator

//CommonJS
module.exports = calculator;

