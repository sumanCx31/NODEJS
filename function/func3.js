const obj1={
    name:"Aarif",
    id:22123,
    moreInfo:{class:"12",room:"209",section:"P7"}
}

function abc(obj1)
{
   return `Welcome ${obj1.name} sir!`
    //return obj1;
}
console.log(abc(obj1));  // output:Welcome Aarif Sir!