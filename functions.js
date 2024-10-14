let a = 20,b=30; //Global
function sum(int1,int2){

// let a=10,b=5  //Local

    // console.log(int1+int2)
    return int1+int2;
}

sum(2,6);

sum(100,500);
sum(12,56);


let sum2 = (a,b)=>{
    console.log(a-b)
}

sum2(100,50);
sum2(20,56);

function showAnswer(answer){
    document.write(`Result is: ${answer}`);
}

showAnswer(sum(10,40))