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
    if(action=="+"){
        document.write(`Summa chisel: ${sum(int1,int2)}`)
    }
    else if(action=="-"){
        document.write(`Raznica chisel: ${minus(int1,int2)}`)
    }
    else if(action=="*"){
        document.write(`Umnozhenije chisel: ${multiply(int1,int2)}`)
    }
    else if(action=="/"){
        document.write(`Delenije chisel: ${divide(int1,int2)}`)
    }else{
        document.write(`Takogo delatj ne umejem`);
    }


}


count(30,67,"-");

// calc + - * / 