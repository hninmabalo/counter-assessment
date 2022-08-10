console.log("assessment");

const add = document.getElementById("add");
const subtract = document.getElementById("subtract");
const input = document.getElementById("input");
const output = document.getElementById("output");


input.value = 1;

function added() {
    result = parseInt(input.value) + parseInt(output.innerHTML);

    output.textContent = result;

    if (result > 0) {
        output.style.color = "black";
    }
};
   

function sub() {
    result = parseInt(output.innerHTML) - parseInt(input.value);

    output.textContent = result;

    if (result < 0) {
        output.style.color = "red";
    }
};

add.addEventListener("click", added);
subtract.addEventListener("click", sub);