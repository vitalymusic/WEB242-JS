let showText = false;
let str1 = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
`;
console.log(str1.length>10);
console.log(showText);

if(showText){
    document.write(str1);
}else{
    document.write(`Text is disabled`);
}


// calculator

document.write("<br>");

let int1 = 30,int2 = 45;

let sum = (a,b)=>{return a+b};
let minus = (a,b)=>{return a-b};
let multiply = (a,b)=>{return a*b};
let divide = (a,b)=>{return a/b};


function count(int1,int2,action){
    switch (action){
        case "+":output(`Summa chisel: ${sum(int1,  int2)}`);break;
        case "-":output(`Raznica chisel: ${minus(int1,int2)}`);break;
        case "*":output(`Umnozhenije chisel: ${multiply(int1,int2)}`);break;
        case "/":output(`Umnozhenije chisel: ${divide(int1,int2)}`);break;
        default:  output(`Takogo delatj ne umejem!`)
    }











    // if(action=="+"){
    //     output(`Summa chisel: ${sum(int1,int2)}`)
    // }
    // else if(action=="-"){
    //     output(`Raznica chisel: ${minus(int1,int2)}`)
    // }
    // else if(action=="*"){
    //     output(`Umnozhenije chisel: ${multiply(int1,int2)}`)
    // }
    // else if(action=="/"){
    //     output(`Delenije chisel: ${divide(int1,int2)}`)
    // }else{
    //     output(`Takogo delatj ne umejem`);
    // }


}

function output(text){

    // if(text.length>0){
    //     document.querySelector(".result").innerHTML = text;
    // }else{
    // alert("error")
    // }
    text.length>0?document.querySelector(".result").innerHTML = text:console.error("Error");
    
    // Ternate aperator
}

output("");

function countHandler(){
    let int1 = +document.querySelector("input[name='int1']").value,
        int2 = +document.querySelector("input[name='int2']").value,
        action = document.querySelector("select[name='action']").value;
    count(int1,int2,action);
}

// calc + - * / 