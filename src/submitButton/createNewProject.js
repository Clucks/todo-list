import { Projects } from "../classes";

export const createNewProject = () => {
    const inputs = document.querySelector(".projectinput")
    const title = inputs[0]
    const desc = inputs[1]
    const project = new Project(title, desc)
    Projects.buildProject();
    console.log((project));

}