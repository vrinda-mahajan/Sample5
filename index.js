var readlineSync = require ("readline-sync");
var info = [];

for (i=0;i<5;i++){
    var obj ={
        username:'',
        unitMarks:'',
        preFinal:'',
        final:''
    }
    console.log("Enter details for student "+ (i+1));
    var username = readlineSync.question("What is your name? ");
    obj.username=username;
    var unitMarks = readlineSync.question("Enter your unit test marks ");
    obj.unitMarks = unitMarks;
    var preFinal = readlineSync.question("Enter your pre final marks ");
    obj.preFinal = preFinal;
    var final = readlineSync.question("Enter your final marks ");
    obj.final = final;

    info.push(obj);
}
//console.log(info);
var highest = 0;
var topper = '';
for (let i in info){
    var student = info[i];
    var totalMarks =Number(student.unitMarks)+Number(student.preFinal)+Number(student.final)
    if (highest<totalMarks){
        highest=totalMarks;
        topper = student.username;
    }
    console.log("Average marks of "+ student.username + " = "+((totalMarks/3).toFixed(2)))
}
console.log(topper+" has the highest marks = " + highest);

