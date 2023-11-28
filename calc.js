function sub(x,y){
    var sum = x-y
    return sum;
}

function mul(x,y){
    var mul = x*y
    return mul;
}

function add(x,y){
    var add=  x+y;
    return add;

}
function calculator(fun,x,y){
if(fun=="add"){
return add(x,y);
}

} 


// module.exports=calculator
module.exports = calculator;