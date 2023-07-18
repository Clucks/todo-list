import { displayList, loadHeader, loadProjectForm, loadSidebar } from "./initialdom"

export const loadpage = () => {
    loadHeader();
    loadSidebar();
    displayList();
    loadProjectForm();
}