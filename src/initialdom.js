import { Element, Projects } from "./classes";
//Loads the inital dom of the todo list
export const initialdom = () => {
    const content = document.querySelector('#content');

    //creates the header for the inital dom
    const header = new Element('div');
    header
        .setAttributes({ id: "header" })
        .addChild(new Element('span')
            .setAttributes({ id: "logo" }))
        .addChild(new Element('span')
            .setTextContent('When2do')
            .setAttributes({ id: "title" }))


    //creates the projects tab to create a new list
    const container = new Element('div');
    container
        .setAttributes({ id: "container" })
        .addChild(new Element('span')
            .setTextContent("Projects List:"))

        .addChild(new Element('button')
            .setTextContent("Add new project")
            .appendEventListener("click", function () {
                const projectlist = document.querySelector("#project-list")
                //ask for the name of the project
                const name = prompt("What is the name of the new project?");

                //makes the project object
                const project = new Projects(name);

                //uploads the project to the dom
                const projectTab = new Element('div');
                projectTab
                    .addChild(new Element('h1')
                        .setTextContent(name));


                const projectTabDom = projectTab.buildElement();
                projectlist.appendChild(projectTabDom)
            }))

    const projectlist = new Element('div')
    projectlist
        .setAttributes({ id: "project-list" })
        
    //appends and builds all the doms
    const headerdom = header.buildElement();
    const containerdom = container.buildElement();
    const projectlistdom = projectlist.buildElement();
    content.appendChild(headerdom);
    content.appendChild(containerdom)
    content.appendChild(projectlistdom)
}