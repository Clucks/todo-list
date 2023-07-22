import { appendProjectToList, displayList, loadHeader, loadProjectForm, loadSidebar, loadTodoForm } from "./UIhandlers"

const content = document.querySelector('#content')


//Handles loading the dom page for all the forms and UI
export const loadpage = () => {

    loadHeader();
    loadSidebar();
    displayList();
}

export const handleAppendingProjectForm = () => {
    if (loadProjectForm() !== undefined) {
        console.log("Handle appending project form");
        const form = loadProjectForm();
        content.appendChild(form)
    }
}

export const handleAppendingProject = (title, desc) => {
    if (appendProjectToList(title, desc) !== undefined) {

        console.log("Handle appending project to dom");
        const project = appendProjectToList(title, desc);
        document.querySelector("#project-list").appendChild(project)
    }

}

export const handleAppendingTodoForm = (event) => {
    if(loadTodoForm() !== undefined){
        console.log("Handle appending todo form for a project");
        const form = loadTodoForm();
        content.appendChild(form);
    }
    console.log("Processing new todo for the project");
    if (submitVerify(event, ".todoinput")) {
        const inputs = document.querySelectorAll(".todoinput");
        const title = inputs[0].value.trim();
        const date = inputs[1].value.trim();
        const todo = new Todo(title, date);
        ProjectList.getProjectById(0).appendToDo(todo)
        //Creates a new dom element that holds the todo into the project 
        handleNewTodoIntoProject(title, date);

    }

}