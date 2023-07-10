import { Element } from "./classes";
//Loads the inital dom of the todo list
export const initialdom = () => {
    const content = document.querySelector('#content');

    const header = new Element('div');
    header
        .setAttributes({id: "header"})
        .addChild(new Element('span')
            .setAttributes({id: "logo"}))
        .addChild(new Element('span')
            .setTextContent('When2do')
            .setAttributes({id: "title"}))

    const headerdom = header.buildElement(); 
    content.appendChild(headerdom);
    





}