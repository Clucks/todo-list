import { displayList, loadHeader, loadProjectForm, loadSidebar, loadTodoForm } from "./UIhandlers"

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
    console.log("Form already created");
}