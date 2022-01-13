let fs = require('fs');

// let data = fs.readFileSync('example.txt');
// console.log(data.toString());
// console.log("EndOfProgram")

fs.readFile('example.txt', (error, data) => 
{
    if(error)
    {
        return console.log(error)
    }
    else
    {
        console.log(data.toString());
    }
});