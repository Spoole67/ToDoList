/* Function that connect span button click and task note with updating the list*/
function newElement(){
  var li = document.createElement("li");                        /* Create a new li element, I guees empty?*/
  var element = document.getElementById("input_value").value;   /* Get the input value written in the box */
  var text = document.createTextNode(element);                   /* Convert the input value to text */
  li.appendChild(text);                                         /* Add the test element to the LI element*/
  if (element === "") {
    alert("You must write something!");
  } else {
    var ul = document.getElementById("task_list");              /* Get the current <ul> */
    ul.appendChild(li);                                         /* add the <li> to the <ul> */
  }
  document.getElementById("input_value").value = "";            /* Assign the input_value to " " again*/

}