
let container = document.querySelector(".container")

let para = document.createElement("p");
para.textContent = "Hey I’m red!";
para.style.color = "red";

container.append(para);

let heading3 = document.createElement("h3")
heading3.textContent = "I’m a blue h3!";
heading3.style.color="blue";
container.append(heading3);

let container2 = document.createElement("div")
let h1 = document.createElement("h1");
let para2 = document.createElement("p");
para2.textContent = "ME TOO!";
container2.style.border = "2px solid black";
container2.style.backgroundColor = "pink";
container.append(container2)
container2.append(h1);
container2.append(para2);

