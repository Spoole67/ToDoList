/* Function that connect span button click and task note with updating the list*/
function newElement(){
  var li = document.createElement("li");                        /* Create a new li element, EMPTY*/
  var element = document.getElementById("input_value").value;   /* Get the input value written in the box */
  var text = document.createTextNode(element);                  /* Convert the input value to text */

  var span_1 = document.createElement("span");                   /* Add a circle */
  var txt_1 = document.createTextNode(" ");
  span_1.className = "list_circle";
  span_1.appendChild(txt_1);
  span_1.id = "remove";
  /* When clicking on circle <li> is not displayed and moved to right <ul>*/
  span_1.onclick = function() {
    this.parentElement.style.display = 'none';
    var ul_right = document.getElementById("finished_task_list");
    var something = this.parentElement.innerText;
    var li_inside = document.createElement("li");
    var text_2 = document.createTextNode(something);
    li_inside.appendChild(text_2);
    ul_right.appendChild(li_inside);
    }
  li.appendChild(span_1);

  var div_2 = document.createElement("span");                   /* Add a "checkmark" emtpy until hover*/
  var txt_2 = document.createTextNode("\u2713");
  div_2.className = "checkmark";
  div_2.appendChild(txt_2);
  li.appendChild(div_2);

  text_3 = document.createTextNode(" ")                         /* Add a empty string for the looks*/
  li.appendChild(text_3)

  li.appendChild(text);                                         /* Add the test element to the LI element*/
  if (element === "") {
    alert("You must write something!");
  } else {
    var ul_left = document.getElementById("task_list");              /* Get the left <ul> */
    ul_left.appendChild(li);                                         /* add the <li> to the <ul> */
  }
  document.getElementById("input_value").value = "";            /* Assign the input_value to " " again*/

}

/* When clicking on the white circle the <li> element is moved */

