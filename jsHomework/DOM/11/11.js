let section = document.getElementById("todoList");
let ol = document.getElementById("list");
let input = document.getElementsByClassName("input-subject");
let btn = document.getElementsByClassName("btn-add");

btn[0].onclick = add;


function add() {
    var x = input[0].value;
    var li = document.createElement('li');
    li.innerText = x;
    var btn1 = document.createElement("button")
    btn1.innerText = "remove";
    li.appendChild(btn1);
    ol.appendChild(li);
    btn1.addEventListener("click", () => {
        ol.removeChild(li)
    });
    input[0].value = " ";
}