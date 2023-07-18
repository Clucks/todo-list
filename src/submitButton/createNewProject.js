import { Element, Projects } from "../classes";

export const createNewProject = () => {
    document.querySelector(".projectform").toggleAttribute("hidden");
    const parent = document.querySelector("#project-list")
    const inputs = document.querySelectorAll(".projectinput")
    const title = inputs[0].value.trim();
    const desc = inputs[1].value.trim();
    const project = new Projects(title, desc)

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
            .appendEventListener('click', function(){

            }))
        .addChild(new Element('div').setAttributes({ id: "border" }))
    const containerdom = container.buildElement();
    parent.appendChild(containerdom)


}