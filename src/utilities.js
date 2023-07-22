import { submitVerify } from "./submitButton/submitVerify";
import { ProjectList, Project } from "./classes"
import { appendProjectToList } from "./UIhandlers";
import { handleAppendingProject } from "./loadpage";



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
