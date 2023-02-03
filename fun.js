function newElement() {
    var li = document.createElement("li");
    var inputvalueitem = document.getElementById("myinput").value;
    var inputvaluedays = document.getElementById("days").value;
    var t = document.createTextNode(inputvalueitem);
    var d = document.createTextNode(inputvaluedays);

    li.append(d);
    li.append(" -> ");
    li.append(t);

    if(inputvalueitem === '') {
        alert("you must write something");
    }
    else {
        document.getElementById("myul").appendChild(li);
    }

    document.getElementById("myinput").value = " ";
}