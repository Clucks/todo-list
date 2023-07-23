import { submitVerify } from "./submitButton/submitVerify";
import { ProjectList, Project, Todo } from "./classes"
import {
    handleAppendingProject,
    handleAppendingTodo,
    handleAppendingTodoForm,
    reloadAllTodos,
    handleProjectsTab
} from "./loadpage";


export function printAllProjects() {
    const projects = ProjectList.getAllProjects();

    console.log('--- All Projects ---');
    projects.forEach((project, index) => {
        console.log(`Project ${index + 1}:`);
        console.log(`Title: ${project._name}`);
        console.log(`Description: ${project._desc}`);
        console.log('Todos:');
        project._todos.forEach((todo, todoIndex) => {
            console.log(`  Todo ${todoIndex + 1}:`);
            console.log(`  Title: ${todo._title}`);
            console.log(`  Date: ${todo._date}`);
            console.log(`  Priority: ${todo._priority}`);
            console.log(`  Completion: ${todo._completion}`);
        });
        console.log('-------------------');
    });
}

export function changeCurrentProject(title) {
    const allProjects = ProjectList.getAllProjects();

    // Find the current project and change its _current value to false
    const currentProject = allProjects.find(project => project._current === true);
    if (currentProject) {
        currentProject.current = false;
    }

    // Find the project with the given title and change its _current value to true
    const newCurrentProject = allProjects.find(project => project._name === title);
    if (newCurrentProject) {
        newCurrentProject.current = true;
    }
}


//This function will delete the existing form.
export function deleteForm() {
    const form = document.querySelector("#form");
    form.remove();
}

export function deleteProjectList() {
    const projectList = document.querySelector('#project-list');
    while (projectList.firstChild) {
        projectList.removeChild(projectList.firstChild);
    }
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
export function deleteProject(title) {
    console.log("Deleting a project from the side bar");
    deleteProjectList();
    const project = ProjectList.getProjectByName(title)
    ProjectList.deleteProject(project);

    document.querySelector("#project-sidebar").innerHTML = "";
    handleProjectsTab();
}