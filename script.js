var panelCount = 0;

   function addTask(e)
  {
    if(document.getElementById("input").value == "" ) return;        // If input text box is empty or pressed key is not "enter", do not create task

    var newPanel = document.createElement("div");                    // Creates a new div 
    
    newPanel.className += "panel panel-info";                        // Adds class name to apply Bootstrap theme
    
    newPanel.id =  panelCount++ ;                                    // Sets id for the current panel based on panelCount , and increments panelCount

    panelHeading = document.createElement("div");                    // Creates panel's heading                   

    panelHeading.className += "panel-heading";                       // Adds class to apply Bootstrap theme

    var h4 = document.createElement("h4");                           // Creates h4 for heading text

    h4.className += "panel-title";                                   // Adds class to apply Bootstrap theme

    h4.innerText = "Task " + panelCount ;                            // Adds Task + number as title of task
 
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
    
    newP.innerText = document.getElementById("input").value;         // Gets content from input box and applies to newP

    newPanel.appendChild(newP);                                      // Adds the p tag  to the panel
                                      
    document.getElementById("taskList").appendChild(newPanel);       // Adds newPanel to 
    
    }


  function deleteTask()
  {
    var id = this.parentNode.parentNode.id;                          // Gets id of panel
    document.getElementById(id).remove();                            // Deletes the panel
    panelCount--;                                                    // decreases panelCount
  }

  function setTaskAsDone()   /* TODO */
  {
    var id = this.parentNode.id;
    var currentText = document.getElementById(id).innerText;
    document.getElementById(id).innerText = currentText.del();
  }
