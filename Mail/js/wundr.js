function addTask() {
    var newTaskInput = document.getElementById("newTask");
    var newTaskText = newTaskInput.value;
    
    if (newTaskText !== "") {
        var taskList = document.getElementById("taskList");
        var newTaskElement = document.createElement("li");
        newTaskElement.className = "task";
        newTaskElement.appendChild(document.createTextNode(newTaskText));
        taskList.appendChild(newTaskElement);
        
        newTaskInput.value = "";
    }
}
