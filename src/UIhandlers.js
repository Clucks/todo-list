import { Element, Projects } from "./classes";
import { sumbitVerify } from "./submitButton/submitVerify";
import { formatDistance } from "date-fns";

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
                    document.querySelector(".projectform").toggleAttribute("hidden");
                    const inputs = document.querySelectorAll(".projectinput")
                    const title = inputs[0].value.trim();
                    const desc = inputs[1].value.trim();
                    const project = new Projects(title, desc)
                    appendProjectToList(title, desc);

                }
            }))
    const promptdom = prompt.buildElement();
    content.appendChild(promptdom);
}

//Function to append project to displayList
function appendProjectToList(title, desc) {
    const parent = document.querySelector("#project-list")
    const container = new Element('div')
    container
        .setAttributes({ id: "list1" })
        .addChild(new Element('div')
            .addChild(new Element('div')
                .addChild(new Element('span')
                    .setTextContent(title))
                .addChild(new Element('span')
                    .setTextContent(desc)))
            .addChild(new Element('span')
                .setTextContent("Due date")))
        .addChild(new Element('div').setAttributes({ id: "border" }))
        .addChild(new Element('div').setTextContent('Add new Todo +')
            .appendEventListener('click', function () {
                console.log("Inside of new Todo event listener");
            }))
        .addChild(new Element('div').setAttributes({ id: "border" }))
    const containerdom = container.buildElement();
    parent.appendChild(containerdom)
}
//Loads the dom to display projects and todo
export const displayList = () => {
    const projectlist = new Element('div')
    projectlist
        .setAttributes({ id: "project-list" })

    const projectlistdom = projectlist.buildElement();
    content.appendChild(projectlistdom)
}

//Loads the dom to display the form to create new Todos 
export const loadTodoForm = () => {
    const prompt = new Element('div')
    prompt
        .setAttributes({ class: "todoform", hidden: false})
        .addChild(new Element('div')
            .setTextContent("Todo Name"))
        .addChild(new Element('input')
            .setAttributes({
                type:"text",
                required: true,
                class: "todoinput",
                placeholder: "Enter Todo title"
            }))
        .addChild(new Element('div')
            .setTextContent("Todo Date"))
        .addChild(new Element('input')
            .setAttributes({
                type:"date",
                required: true,
                class: "todoinput",
            }))
        .addChild(new Element('div')
            .setTextContent("Todo Priority"))
        .addChild(new Element('input')
            .setAttributes({
                required: true,
                class: "todoinput",
                placeholder: "Enter Todo title"
            }))
        .addChild(new Element('div')
            .setTextContent("todo Completion"))
            w 
        .addChild(new Element('input')
            .setAttributes({
                required: true,
                class: "todoinput",
                placeholder: "Enter todo desc"
            }))
        .addChild(new Element('button')
            .setTextContent("Create")
            .setAttributes({ type: "sumbit", value: "sumbit" })
            .appendEventListener("click", function (event) {
                if (sumbitVerify(event)) {
                    document.querySelector(".todoform").toggleAttribute("hidden");
                    const inputs = document.querySelectorAll(".todoinput")
                    const title = inputs[0].value.trim();
                    const desc = inputs[1].value.trim();
                    const todo = new todos(title, desc)
                    appendtodoToList(title, desc);

                }
            }))
    const promptdom = prompt.buildElement();
    content.appendChild(promptdom);
}