// alert("");
// console.log("");

{

}

// typescript
// типы данных

// int,float,bigInt

let int1 = 12345;
let int2 = 6789.678;


let int4 = 3,
    int5 = 8;


// string

let text1 = "Hello world!",
    text2 = "<h1 class=\"main_text\">This is JS</h1>",
    text3 = "#787878";


// Boolean

let boolean1 = true; //1
let boolean2 = false; //0



// Array  - Массивы
let array1 = [
                12,34.56,
                "txt5",
                false,
                ["red","green","blue"]
            ];
// object - Объекты

let object1  = {
    marka:"BMW",
    model:"320d",
    colors:["red","green","blue"],
    year:2020,
    price:{
        latvia:12500,
        estonia:11500,
        lithuania:13500
    }
};




console.log(int1,int2,int4,int5);
document.write(int1,int2,int4,int5);

document.write(text2);   
document.body.style.background = text3;

document.write(boolean2==true?text1:text2);


// document.write(array1);
document.write(array1[4][1]);
console.log(array1);

document.write(object1.marka,object1.colors[1],object1.price.latvia);
console.log(object1);





