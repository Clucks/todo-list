import { displayList, loadHeader, loadProjectForm, loadSidebar, loadTodoForm } from "./UIhandlers"

const content = document.querySelector('#content')


//Handles loading the dom page for all the forms and UI
export const loadpage = () => {

    loadHeader();
    loadSidebar();
    displayList();
}

export const handleAppendingProjectForm = () => {
    console.log("Handle appending project form");
    const form = loadProjectForm();
    content.appendChild(form)
}