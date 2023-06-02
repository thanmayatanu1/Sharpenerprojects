//get Elemment by id
var headerTitle= document.getElementById("header-title");
console.log(headerTitle);
headerTitle.textContent="Hello";
headerTitle.innerText="hi";
headerTitle.innerHTML="<h3>Goodday</h3>";
headerTitle.style.background="red";

//get Element by classname
var items= document.getElementsByClassName("list-group-item");
console.log(items);
console.log(items[1]);
items[1].textContent="newItem"
items[0].style.fontWeight="bold";
items[2].style.backgroundColor="yellow";

for(var i=0;i<items.length;i++)
{
    items[3].style.backgroundColor="blue";
}

//get element by tagname
var li= document.getElementsByTagName("li");
console.log(li);
console.log(li[1]);
li[1].textContent="newItem"
li[0].style.fontWeight="bold";
li[2].style.backgroundColor="yellow";

for(var i=0;i<li.length;i++)
{
    li[3].style.backgroundColor="blue";
}

//query selector
var header= document.querySelector("#main-header");
header.style.backgroundColor="black";

var input=document.querySelector('input');
input.value="input";

var submit=document.querySelector('input[type="submit"]');
submit.value="send";

