let textInput = document.querySelector('#textInput');

let output = document.querySelector('.result');


let reg = /([a-z]{3,5})/g
let reg2 = /.+\@.+\..+/g
let reg3 = /^(\+371)+[\d]{8}$/g

function checkInput(){
    textInput.value.match(reg3)?output.innerHTML = `Value is OK`:
    output.innerHTML = `Value is not OK`;

// console.log(textInput.value.match(reg2));


}