import { displayList, loadHeader, loadProjectForm, loadSidebar, loadTodoForm } from "./UIhandlers"
import { Projects, ProjectsList } from "./classes";



//Handles loading the dom page for all the forms and UI
export const loadpage = () => {
    loadHeader();
    loadSidebar();
    displayList();
    loadProjectForm();
    loadTodoForm();
}