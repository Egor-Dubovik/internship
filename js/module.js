import {moduleData} from "./modules/data.js";

const main = document.querySelector(".main");
const moduleContainer = document.querySelector(".current-module__container");




const ff = (event) => {
    event.preventDefault();
    // console.log(event.target);
    if(event.target.classList.contains("_part")) {
        moduleContainer.innerHTML = moduleData.module1.theory;
    }
    
}

main.addEventListener("click", ff);


