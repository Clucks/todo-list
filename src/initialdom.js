import { Element } from "./classes";
//Loads the inital dom of the todo list
export const initialdom = () => {
    const content = document.querySelector('#content');

    const header = new Element('div');
    header
        .setAttributes("#header")
        .addChild(new Element("img"))
    const headerdom = header.buildElement(); 
    content.appendChild(headerdom);
    





}