import { submitVerify } from "./submitButton/submitVerify";
import { ProjectList, Project, Todo } from "./classes"
import { handleAppendingProject, handleAppendingTodo, handleAppendingTodoForm } from "./loadpage";
import { appendProjectToList } from "./UIhandlers";
import { compareAsc } from "date-fns";



//This function will delete the existing form.
export function deleteForm() {
    const form = document.querySelector("#form");
    form.remove();
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
        const project = new Project(title, desc);

        //Apends to the dom
        handleAppendingProject(title, desc);
        ProjectList.addProject(project)

        //handled the project form submitio
        console.log("handled project form submition");
        deleteForm();
        return project;
    } else {

    }

    console.log("Could not handle project form submition");
    return undefined;
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
        //Need to fix.
        //Project should be selected
        //each project should have its own id
        //Project selection from side bar
        ProjectList.getProjectById(0).appendToDo(todo)

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
export function deleteAllTodos() {
    document.querySelector("#project-todo").innerHTML = "";
}

//This function will append all todos in a project
export function reloadAllTodos(project) {
    const todosArray = ProjectList.getProjectById(0).todos;
    todosArray.forEach(todo => {
        handleAppendingTodo(todo.title, todo.date, todo.priority, todo.completion)
    });


}

export function editTodo(todo) {
    deleteTodo(1, todo);
    handleAppendingTodoForm();
    reloadAllTodos();
}

export function deleteTodo(targetProject, title) {
    const foundIndex = ProjectList.getProjectById(0).todos
        .findIndex(todo => todo.title === title);

    if (foundIndex !== -1) {
        ProjectList.getProjectById(0).todos.splice(foundIndex, 1);
        console.log("Todo removed successfully.");
        deleteAllTodos();
        reloadAllTodos();
    } else {
        console.log("Todo not found.");
    }

}
