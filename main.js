/* function todolist(){
   var item =document.getElementById("todoinput").value;
   var text =document.createTextNode(item);
   var newitem = document.createElement("li");
   newitem.appendChild(text);
   document.getElementById("todolist").appendChild(newitem);*/
   // Create a new list item when clicking on the "Add" button
/* function todolist(){
   var item =document.getElementById("todoinput").value;
   var text =document.createTextNode(item);
   var newitem = document.createElement("li");
   newitem.appendChild(text);
   document.getElementById("todolist").appendChild(newitem);*/
   // Create a new list item when clicking on the "Add" button
   let list =[];
   function AddToDo(){
    var item =document.getElementById("text").value;
    var inputValueObj =[{value : document.getElementById("text").value , check : false }];
    var newtext =document.createTextNode(item);
    var newitem = document.createElement("li");
    newitem.appendChild(newtext);
    document.getElementById("list").appendChild(newitem);
    
       list.push(item );
       list.forEach((item, i) => {
       item.id = i + 1;
            });
console.log(list);
console.log(list.length);
}
/* function AddToDo(){
var li = document.createElement("li");
var inputValue = document.getElementById("text").value;
var t = document.createTextNode(inputValue);
li.appendChild(t);
if (inputValue === '') {
alert("You must write something!");
} else {
document.getElementById("list").appendChild(li);
}
}
document.getElementById("text").value = "";*/
/* function AddToDo(){
var li = document.createElement("li");
var inputValue = document.getElementById("text").value;
var t = document.createTextNode(inputValue);
li.appendChild(t);
if (inputValue === '') {
alert("You must write something!");
} else {
document.getElementById("list").appendChild(li);
}
}
document.getElementById("text").value = "";*/