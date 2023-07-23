import { submitVerify } from "./submitButton/submitVerify";
import { ProjectList, Project, Todo } from "./classes"
import {
    handleAppendingProject,
    handleAppendingTodo,
    handleAppendingTodoForm,
    reloadAllTodos,
} from "./loadpage";



//This function will delete the existing form.
export function deleteForm() {
    const form = document.querySelector("#form");
    form.remove();
}

export function deleteProjectList() {
    document.querySelector('#project-list').innerHTML = "";
}

//Handles the creation of a new project after clicking the submit button
export function handleProjectFormSubmition(e) {
    if (submitVerify(e, ".projectinput")) {
        // document.querySelector(".projectform").toggleAttribute("hidden");
        //grabs the input values
        const inputs = document.querySelectorAll(".projectinput");
        const title = inputs[0].value.trim();
        const desc = inputs[1].value.trim();

        //Creates a new project obj
        const project = new Project(title, desc, true);

        //Apends to the dom
        handleAppendingProject(title, desc);
        //Appends to the project list
        ProjectList.addProject(project)

        //handled the project form submitio
        console.log("handled project form submition");
        deleteForm();
        return project;
    } else {
        console.log("Could not handle project form submition");
        return undefined;
    }
}

//Handles the creation of a new todo after clicking the submit button
export function handleTodoFormSubmition(e) {
    if (submitVerify(e, ".todoinput")) {
        //grabs the input values
        const inputs = document.querySelectorAll(".todoinput");
        const title = inputs[0].value.trim();
        const date = inputs[1].value.trim();
        const priority = inputs[2].checked;
        const completion = inputs[3].checked;


        //Creates a new project obj
        const todo = new Todo(title, date, priority, completion);

        //Apends to the dom
        handleAppendingTodo(title, date, priority, completion);

        //append todo to current project
        ProjectList.getProjectByCurrent().appendToDo(todo)


        //handled the project form submitio
        console.log("handled project form submition");
        deleteForm();
        return todo;
    } else {

    }

    console.log("Could not handle project form submition");
    return undefined;
}

//This function will clear all todos
export function clearTodos() {
    document.querySelector("#project-todo").innerHTML = "";
}


export function editTodo(project, title) {
    handleAppendingTodoForm();
    deleteTodo(project, title);
    clearTodos(project, title);
    reloadAllTodos(project);
    console.log(ProjectList.getAllProjects());
}
// delete a todo 
export function deleteTodo(targetProject, title) {
    const foundIndex = ProjectList.getProjectByCurrent().todos
        .findIndex(todo => todo.title === title);
    if (foundIndex !== -1) {
        ProjectList.getProjectByCurrent().todos.splice(foundIndex, 1);
        console.log("Todo removed successfully.");
        clearTodos();
        reloadAllTodos();
    } else {
        console.log("Todo not found.");
    }

}
export function checkCompletion(title) {
    const currentProject = ProjectList.getProjectByCurrent();
    const todo = currentProject.getTodoByName(title);

    console.log("Title:", title);
    console.log("Todo found:", todo);

    if (todo) {
        console.log("Current Todo's Completion Status Before Toggle:", todo._completion);
        todo.toggleCompletion(); // Toggle the completion status using the new method
        console.log("Current Todo's Completion Status After Toggle:", todo._completion);
    } else {
        console.log("Todo not found.");
    }
}


//This function will delete a project

// const desc = ProjectList.getProjectByName(title).desc();