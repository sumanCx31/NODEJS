// const num = [1,2,3,4]
// num[100]=70
// console.log(num);

// console.log(typeof(typeof(num[2])));


students=[
    {
        name:"Sachin",
        Rank:1,
        Rn:37
    },
    {
        name:"Dustin",
        Rank:6,
        Rn:9
    },
    {
        name:"Peter",
        Rank:5,
        Rn:27
    },
    {
        name:"Mike",
        Rank:2,
        Rn:18
    },
    {
        name:"Sam",
        Rank:8,
        Rn:32
    },
    {
        name:"Virat",
        Rank:2,
        Rn:41
    }
]
let student = students.find(student => student.Rank === 1);

console.log(student);
