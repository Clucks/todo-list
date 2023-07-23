import { ProjectList } from "./classes";
import {
    appendProjectToList,
    appendTodoToProject,
    displayList,
    loadHeader,
    loadProjectForm,
    loadProjectTabToSidebar,
    loadSidebar,
    loadTodoForm
} from "./UIhandlers"
import { deleteProjectList } from "./utilities";

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

//Handles appending the project
export const handleAppendingProject = (title, desc) => {
    if (appendProjectToList(title, desc) !== undefined) {
        console.log("Handle appending project to dom");
        const project = appendProjectToList(title, desc);
        document.querySelector("#project-list").appendChild(project)
    }
    handleProjectTab(title);
}

//Handles appending the todo form
export const handleAppendingTodoForm = () => {
    if (loadTodoForm() !== undefined) {
        console.log("Handle appending todo form for a project");
        const form = loadTodoForm();
        content.appendChild(form);
    }

};

//Handles appending the todo to the project
export const handleAppendingTodo = (title, date, priority, completion) => {
    console.log("Handle appending todo to the project");
    const todo = appendTodoToProject(title, date, priority, completion);
    console.log(completion);
    document.querySelector("#project-todo").appendChild(todo)
}

const handleProjectTab = (title) => {
    console.log("Handling appending project to sidebar");
    const tab = loadProjectTabToSidebar(title);
    document.querySelector("#project-sidebar").appendChild(tab)

}
//This function will append all todos in a project
export function reloadAllTodos() {
    const todosArray = ProjectList.getProjectByCurrent().todos;
    todosArray.forEach(todo => {
        handleAppendingTodo(todo._title, todo._date, todo._priority, todo._completion)
    });
}

export const handleProjectSwitch = (title) => {
    //Clean the main container
    deleteProjectList();
    //append header
    const project = ProjectList.getProjectByCurrent
    (title);

    handleAppendingProject(title, project.desc);
    //append todos
    reloadAllTodos(project)


}