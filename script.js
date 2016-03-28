  var taskList = [] ; 

   function addTask(e)
  {
    if(document.getElementById("inputTask").value == "" ) return;    // If input text box is empty or pressed key is not "enter", do not create task

    var inputTaskValue = document.getElementById("inputTask").value;

    var taskTitleValue = document.getElementById("taskTitle").value;

    var newTask = createTask(inputTaskValue, taskTitleValue );
                                      
    document.getElementById("taskList").appendChild(newTask);       // Adds newPanel to the list
    
    storeTaskLocally(taskTitleValue, inputTaskValue);

    }

  function createTask(inputTask, taskTitle)
  {
    var newPanel = document.createElement("div");                    // Creates a new div 
    
    newPanel.className += "panel panel-info";                        // Adds class name to apply Bootstrap theme

    panelHeading = document.createElement("div");                    // Creates panel's heading                   

    panelHeading.className += "panel-heading";                       // Adds class to apply Bootstrap theme

    var h4 = document.createElement("h4");                           // Creates h4 for heading text

    h4.className += "panel-title";                                   // Adds class to apply Bootstrap theme

    h4.innerText = taskTitle;                                        // Adds content from input to body of task
 
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
    
    newP.innerText = inputTask;                                      // Gets content from input box and applies to newP

    newPanel.appendChild(newP);                                      // Adds the p tag  to the panel

    return newPanel;
  }


  function deleteTask()
  {
    this.parentNode.parentNode.remove(); 

  }

  function setTaskAsDone()   /* TODO */
  {
    var task = this.parentNode.parentNode;
    task.innerText = currentText.del();
  }

  function loadTasks()
  {
    var JSONtaskList = localStorage.getItem('JSONtaskList');
    var taskList = JSON.parse(JSONtaskList);

    if (!taskList) return;

    if(taskList.length > 0)
    {
      for (var i = 0; i < taskList.length; i++) 
      {
        newTask = JSON.parse(taskList[i]);

        var newTask = createTask(newTask.body, newTask.title);

        document.getElementById("taskList").appendChild(newTask);
      }
    }
  }

  function storeTaskLocally(title, body)
  {
    var task = {title : title, body : body};
    
    var JSONtask = JSON.stringify(task);
  
    taskList.push(JSONtask);
   
    var JSONtaskList = JSON.stringify(taskList);

    localStorage.setItem('JSONtaskList', JSONtaskList);
  }

  /*function clearLocalStorage()   //JUST FOR DEV PURPOSES
  {
      localStorage.clear();
  }*/