var list = [];
function AddToDo(){
   var li = document.createElement('LI');
   var text =document.getElementById("text").value;
   var inputValueObj =[{value : document.getElementById('text').value , check : false }];
   var t = document.createTextNode(text);
   list.push(inputValueObj);
   list.forEach((item, i) => {
 item.id = i + 1;
});
console.log(list);
li.appendChild(t);
li.setAttribute("class", "task");
li.setAttribute("id", "task");
document.getElementById("list").appendChild(li);
document.getElementById("text").value="";
// add IMG at first
var mylist = document.getElementsByTagName("li");
var i;
for (i = li.length-1; i < li.length; i++) {
    var img3 = document.createElement("IMG");
    img3.setAttribute("src", "panorama_fish_eye-24px.svg");
    img3.setAttribute("class", "img3");
    img3.setAttribute("id", "uncheched");
    img3.setAttribute("alt", "");
    mylist[i].appendChild(img3);
}
// add IMG at last
for (i = mylist.length-1; i < mylist.length; i++) {
   var img4 = document.createElement("IMG");
   img4.setAttribute("src", "highlight_off-24px.svg");
   img4.setAttribute("class", "img4");
   img4.setAttribute("id", "close");
   img4.setAttribute("alt", "");
   mylist[i].appendChild(img4);
}
// close LI element on click
}