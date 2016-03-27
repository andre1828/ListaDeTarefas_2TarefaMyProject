
   function addTask(e)
  {
    if(document.getElementById("inputTask").value == "" ) return;    // If input text box is empty or pressed key is not "enter", do not create task

    var newPanel = document.createElement("div");                    // Creates a new div 
    
    newPanel.className += "panel panel-info";                        // Adds class name to apply Bootstrap theme

    panelHeading = document.createElement("div");                    // Creates panel's heading                   

    panelHeading.className += "panel-heading";                       // Adds class to apply Bootstrap theme

    var h4 = document.createElement("h4");                           // Creates h4 for heading text

    h4.className += "panel-title";                                   // Adds class to apply Bootstrap theme

    h4.innerText = document.getElementById("taskTitle").value;       // Adds content from input to body of task
 
    var deleteBtn =  document.createElement("button");               // Creates button

    deleteBtn.className += "btn btn-xs btn-danger";                  // Adds class to apply Bootstrap theme

    SpanIcon = document.createElement("span");                       // Creates span to store "X" icon

    SpanIcon.className += "glyphicon glyphicon-remove";              // Applies icon

    deleteBtn.appendChild(SpanIcon);                                 // Adds icon to button

    panelHeading.appendChild(h4);                                    // Adds heading to panelHeading

    panelHeading.appendChild(deleteBtn);                             // Adds delete button to panelHeading

    newPanel.appendChild(panelHeading);                              // Adds panelHeading to panel
 
    deleteBtn.addEventListener("click", deleteTask);                 // Sets "deleteTask" to click event for this button

    newP = document.createElement("p");                              // Creates a p tag
    
    newP.innerText = document.getElementById("inputTask").value;     // Gets content from input box and applies to newP

    newPanel.appendChild(newP);                                      // Adds the p tag  to the panel
                                      
    document.getElementById("taskList").appendChild(newPanel);       // Adds newPanel to the list
    
    }


  function deleteTask()
  {
    this.parentNode.parentNode.remove(); 
  }

  function setTaskAsDone()   /* TODO */
  {
    var task = this.parentNode.parentNode;
    var currentText = document.getElementById(task).innerText;
    task.innerText = currentText.del();
  }
