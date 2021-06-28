function sayHello()
{
    console.log('Hello World');
}

function makeAStudent()
{
    return {
        name: "X",
        age: "Y"
    }
}


exports.sayHello = sayHello;
exports.makeAStudent = makeAStudent;