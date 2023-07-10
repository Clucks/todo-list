import { Element } from "./classes";
//Loads the inital dom of the todo list
export const initialdom = () => {
    const content = document.querySelector('#content');

    //creates the header for the inital dom
    const header = new Element('div');
    header
        .setAttributes({id: "header"})
        .addChild(new Element('span')
            .setAttributes({id: "logo"}))
        .addChild(new Element('span')
            .setTextContent('When2do')
            .setAttributes({id: "title"}))


    //creates the projects tab to create a new list
    const container = new Element('div');
    container
        .setAttributes({id: "container"})
        .addChild(new Element('span')
            .setTextContent("Projects"))
        .addChild(new Element('button')
            .setTextContent("Add new project")
                .appendEventListener("click", function(){
                //Should create a new todo in the project

                })) 
        .addChild(new Element('div'))
    
    //appends and builds all the doms
    const headerdom = header.buildElement(); 
    const containerdom = container.buildElement();
    content.appendChild(headerdom);
    content.appendChild(containerdom)
    





}