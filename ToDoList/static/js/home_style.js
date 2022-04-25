/* Function that connect span button click and task note with updating the list*/
function newElement(){
  var li = document.createElement("li");               /* Copy the current HTML list */
  var element = document.getElementById("input_value") /* Get the input value */
  var text = document.createTextNode(element)          /* Convert the input value to text */
  li.appendChild(text);   /* Add the test element to the list*/
  if (element === "") {
    alert("You must write something!");
  } else {
    document.getElementById("list").appendChild(li);
  }
  document.getElementById("input_value").value = "";

  var span = document.createElement("span");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }

}