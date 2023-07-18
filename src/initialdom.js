import { Element, Projects } from "./classes";
import { createNewProject } from "./submitButton/createNewProject";
import { sumbitVerify } from "./submitButton/submitVerify";
//Loads the inital dom of the todo list
export const initialdom = () => {
    const content = document.querySelector('#content');

    // creates the header for the initial DOM
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
        




//creates the projects tab to create a new list
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

const projectlist = new Element('div')
projectlist
    .setAttributes({ id: "project-list" })

//appends and builds all the doms
const headerdom = header.buildElement();
const sidebardom = sidebar.buildElement();
const projectlistdom = projectlist.buildElement();
const promptdom = prompt.buildElement();
content.appendChild(promptdom);
content.appendChild(headerdom);
content.appendChild(sidebardom)
content.appendChild(projectlistdom)
}