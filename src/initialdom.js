import { Element, Projects } from "./classes";
//Loads the inital dom of the todo list
export const initialdom = () => {
    const content = document.querySelector('#content');

    // creates the header for the initial DOM
    const header = new Element('div');
    header
        .setAttributes({ id: "header" })
        .addChild(new Element('span')
            .setAttributes({ id: "logo" }))
        .addChild(new Element('span')
            .setAttributes({ id: "title" })
            .addChild(new Element('span')
                .setTextContent('When'))
            .addChild(new Element('span')
                .setTextContent('2')
                .setAttributes({ style: "color: #42A4EB;" }))
            .addChild(new Element('span')
                .setTextContent('do')))




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
    // .addChild(new Element('span')
    //     .setTextContent("Projects List:"))
    //     .setAttributes({id})
    // .addChild(new Element('button')
    //     .setTextContent("Add new project")
    //     .appendEventListener("click", function () {
    //         const projectlist = document.querySelector("#project-list")
    //         //ask for the name of the project
    //         const name = prompt("What is the name of the new project?");

    //         //makes the project object
    //         const project = new Projects(name);

    //         //uploads the project to the dom
    //         const projectTab = new Element('div');
    //         projectTab
    //             .addChild(new Element('h1')
    //                 .setTextContent(name))
    //             .addChild(new Element('button')
    //                 .setTextContent("new todo")
    //                 .appendEventListener('click',function(){
    //                     console.log("hi");

    //                 }))


    //         const projectTabDom = projectTab.buildElement();
    //         projectlist.appendChild(projectTabDom)
    //     }))

    const prompt = new Element('div')
    prompt
        .setAttributes({ class: "projectform", hidden: true})
        .addChild(new Element('div')
            .setTextContent("Project Name"))
        .addChild(new Element('input')
            .setAttributes({ class: "projectinput" }))
        .addChild(new Element('div')
            .setTextContent("Project Description"))
        .addChild(new Element('input')
            .setAttributes({ class: "projectinput" }))
        .addChild(new Element('button')
            .setTextContent("Create")
            .setAttributes({ type: "sumbit", value: "sumbit" })
            .appendEventListener("click", function () {
                document.querySelector(".projectform").classList.toggle("hidden")
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