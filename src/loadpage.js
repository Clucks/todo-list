import { appendProjectToList, displayList, loadHeader, loadProjectForm, loadSidebar, loadTodoForm } from "./UIhandlers"

const content = document.querySelector('#content')


//Handles loading the dom page for all the forms and UI
export const loadpage = () => {

    loadHeader();
    loadSidebar();
    displayList();
}

//Handles loading the project form
export const handleAppendingProjectForm = () => {
    if (loadProjectForm() !== undefined) {
        console.log("Handle appending project form");
        const form = loadProjectForm();
        content.appendChild(form)
    }
}

//Handles appending the project form
export const handleAppendingProject = (title, desc) => {
    if (appendProjectToList(title, desc) !== undefined) {

        console.log("Handle appending project to dom");
        const project = appendProjectToList(title, desc);
        document.querySelector("#project-list").appendChild(project)
    }

}

//Handles appending the todo form
export const handleAppendingTodoForm = (event) => {
    if (loadTodoForm() !== undefined) {
        console.log("Handle appending todo form for a project");
        const form = loadTodoForm();
        content.appendChild(form);
    }
}

//Handles appending the todo to the project