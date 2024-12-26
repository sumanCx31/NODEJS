function abc(num1)
{
   return num1
}

console.log(abc(5));

function abc1(...num2){
    return num2
}
console.log(abc1(100,200,300,50)); // output:[ 100, 200, 300, 50 ]

const array = abc1(20,30,50)
let sum = array[0]+array[1]
console.log(sum);


