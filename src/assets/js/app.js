const main_practice_wrapper = document.getElementsByClassName("")[0];

const database = [
    { title: "warm up" }
];

database.forEach(function(data) {});

function createElement(tag)
{
    return document.createElement(tag);
}

function createElementWithAttribute(tag, name, value)
{
    const setElement = document.createElement(tag);
    setElement.setAttribute(name, value);

    return setElement;
}