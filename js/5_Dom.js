/*
1. Window Object 
    The window object represents an open window in a browser. 
    It is browser’s object (not JS’s)& is automatically created by browser.
    It is a global object with lots of properties & methods.
2. Document Object Model (DOM)
    When a web page is loaded, the browser creates a DOM of the page.
    It is way accessing HTML in js
    * DOM Manipulation
        1. Selecting with id : document.getElementById(“myId”)
        2. Selecting with class: document.getElementsByClassName(“myClass”)
        3. Selecting with tag: document.getElementsByTagName(“p”)
        4. Query Selector : 
            document.querySelector(“#myId / .myClass / tag”)//returns first element
            document.querySelectorAll(“#myId / .myClass / tag”)//returns a NodeList
    * Properties 
        1. tagName : returns tag for element nodes
        2. innerText : returns the text content of the element and all its children
        3. innerHTML : returns the plain text or HTML contents in the element
        4. textContent : returns textual content even for hidden elements
    * Attributes 
        1. getAttribute( attr ) //to get the attribute value
        2. setAttribute( attr, value ) //to set the attribute value
    * Style 
        1. Node.style.attr.. eg. para.style.fontSize = "30px";
    * Insert Elements: let el = document.createElement(“div“)
        1. node.append( el ) //adds at the end of node (inside)
        2. node.prepend( el ) //adds at the start of node (inside)
        3. node.before( el ) //adds before the node (outside)
        4. node.after( el ) //adds after the node (outside)
        
*/

let heading  = document.getElementById("heading1");

let headings = document.getElementsByClassName("heading");

let heading1 = document.getElementsByTagName("h1")

let headingss = document.querySelector(".heading");

let headingsss = document.querySelectorAll(".heading");

console.log(heading);
console.dir(heading);

console.log(headings);
console.dir(headings);

console.log(heading1);
console.dir(heading1);

console.log(headingss);
console.dir(headingss);

console.log(headingsss);
console.dir(headingsss);

console.log(headingsss[0].innerHTML);
console.log(headingsss[1].innerText);
console.log(headingsss[2].tagName);
console.log(headingsss[3].textContent);

let para = document.querySelector("p");

para.innerText = para.innerText + "EFGH";
console.log(para);

let id = 1;
for (let head of headingsss) {
    head.innerText = head.innerText + ` Head ID ${id}` ;
    id++;
}

console.log(para.getAttribute("class"));
para.setAttribute("id","p1");
console.log(para.getAttribute("id"));

para.style.fontSize = "30px";
para.style.color = "red";

let elem =  document.createElement("button");
elem.innerText = "Click me! "
//one element used only once last woulde be saved to browser
headingss.append(elem);
para.prepend(elem);
headingsss[2].before(elem);
para.after(elem);   

// elem.remove();

elem.style.color = "white";
elem.style.backgroundColor = "red";

para.after(elem);