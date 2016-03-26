var panelCount = 0;

   function addTask()
  {
    if(document.getElementById("input").value == "") return;         // If input text box is empty, do not create task

    var newPanel = document.createElement("div");                    // Creates a new div 
    
    newPanel.className += "well well-sm";                            // Adds class name to apply Bootstrap theme
    
    newPanel.id =  panelCount++ ;                                    // Sets id for the current panel based on panelCount , and increments panelCount

    newP = document.createElement("p");                              // Creates a p tag
    
    newP.innerText = document.getElementById("input").value;         // Gets content from input box and applies to newP

    newPanel.appendChild(newP);                                      // Adds the p tag  to the panel
    
    var newBtn = document.createElement("button");                   // Creates a new button
                                        
    newBtn.className += "btn btn-xs btn-danger";                     // Sets button's class to apply Boostrap theme                 
    
    newSpanIcon = document.createElement("span");                    // Creates a span to recieve the "X" icon
    
    newSpanIcon.className += "glyphicon glyphicon-remove";           // Adds the "X" icon to the span
    
    newBtn.appendChild(newSpanIcon);                                 // Adds the icon to the button
    
    newBtn.addEventListener("click", deleteTask);                    // Sets "deleteTask" to click event for this button
    
    newPanel.appendChild(newBtn);                                    // 
    
    document.getElementById("taskList").appendChild(newPanel); // Adds new panel to the row 
    }


  function deleteTask()
  {
    var id = this.parentNode.id;
    document.getElementById(id).remove();
  }

  function setTaskAsDone()
  {
    var id = this.parentNode.id;
    var currentText = document.getElementById(id).innerText;
    document.getElementById(id).innerText = currentText.del();
  }

  function testeInput(e)
  {
    if(document.getElementById("input").value == "" || e.keyCode != 13) return;         // If input text box is empty or pressed key is not "enter", do not create task

    var newPanel = document.createElement("div");                    // Creates a new div 
    
    newPanel.className += "well well-sm";                            // Adds class name to apply Bootstrap theme
    
    newPanel.id =  panelCount++ ;                                    // Sets id for the current panel based on panelCount , and increments panelCount

    newP = document.createElement("p");                              // Creates a p tag
    
    newP.innerText = document.getElementById("input").value;         // Gets content from input box and applies to newP

    newPanel.appendChild(newP);                                      // Adds the p tag  to the panel
    
    var newBtn = document.createElement("button");                   // Creates a new button
                                        
    newBtn.className += "btn btn-xs btn-danger";                     // Sets button's class to apply Boostrap theme                 
    
    newSpanIcon = document.createElement("span");                    // Creates a span to recieve the "X" icon
    
    newSpanIcon.className += "glyphicon glyphicon-remove";           // Adds the "X" icon to the span
    
    newBtn.appendChild(newSpanIcon);                                 // Adds the icon to the button
    
    newBtn.addEventListener("click", deleteTask);                    // Sets "deleteTask" to click event for this button
    
    newPanel.appendChild(newBtn);                                    // 
    
    document.getElementById("taskList").appendChild(newPanel); // Adds new panel to the row 
  }