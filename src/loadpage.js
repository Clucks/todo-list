import { displayList, loadHeader, loadProjectForm, loadSidebar, loadTodoForm } from "./UIhandlers"



//Handles loading the dom page for all the forms and UI
export const loadpage = () => {
    loadHeader();
    loadSidebar();
    displayList();
    loadProjectForm();
    loadTodoForm();
}