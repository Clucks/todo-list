import { Element } from "./classes";
import { createNewProject } from "./submitButton/createNewProject";
import { sumbitVerify } from "./submitButton/submitVerify";

//Loads the inital dom of the todo list
const content = document.querySelector('#content');


//Loads the header content
export const loadHeader = () => {
    const header = new Element('div');
    header
        .setAttributes({ id: "header" })
        .addChild(new Element('div')
            .addChild(new Element('div')
                .setAttributes({ id: "logo" }))
            .addChild(new Element('span')
                .setTextContent('When'))
            .addChild(new Element('span')
                .setTextContent('2')
                .setAttributes({ style: "color: #42A4EB;" }))
            .addChild(new Element('span')
                .setTextContent('do')))
        .addChild(new Element('div')
            .addChild(new Element('div')
                .setTextContent("Hello, example12345@gmail.com"))
            .addChild(new Element("button")))
    const headerdom = header.buildElement();
    content.appendChild(headerdom)
}

//Loads the sidebar content
export const loadSidebar = () => {
    const sidebar = new Element('div');
    sidebar
        .setAttributes({ id: "container" })
        .addChild(new Element('div')
            .setTextContent('Home')
            .setAttributes({ class: "tab" }))
        .addChild(new Element('div').setTextContent('Projects').setAttributes({ class: "tab" }))
        .addChild(new Element('div').setAttributes({ id: "projects" })
            .addChild(new Element('div')
                .setTextContent('Add New Project +').appendEventListener("click", function (event) {
                    event.preventDefault
                    document.querySelector(".projectform").toggleAttribute('hidden');
                })))
        .addChild(new Element('div')
            .setTextContent('Settings')
            .setAttributes({ class: "tab" }))
    const sidebardom = sidebar.buildElement();
    content.appendChild(sidebardom);
}

//Creates the form to create a new project
export const loadProjectForm = () => {
    const prompt = new Element('div')
    prompt
        .setAttributes({ class: "projectform", hidden: true })
        .addChild(new Element('div')
            .setTextContent("Project Name"))
        .addChild(new Element('input')
            .setAttributes({
                required: true,
                class: "projectinput",
                placeholder: "Enter project title"
            }))
        .addChild(new Element('div')
            .setTextContent("Project Description"))
        .addChild(new Element('input')
            .setAttributes({
                required: true,
                class: "projectinput",
                placeholder: "Enter project desc"
            }))
        .addChild(new Element('button')
            .setTextContent("Create")
            .setAttributes({ type: "sumbit", value: "sumbit" })
            .appendEventListener("click", function (event) {
                if (sumbitVerify(event)) {
                    createNewProject();
                }
            }))
    const promptdom = prompt.buildElement();
    content.appendChild(promptdom);
}

//Loads the dom to display projects and todo
export const displayList = () => {
    const projectlist = new Element('div')
    projectlist
        .setAttributes({ id: "project-list" })

    const projectlistdom = projectlist.buildElement();
    content.appendChild(projectlistdom)
}

