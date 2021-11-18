
let taskBtn = document.querySelector(".task-button");
let modalCont = document.querySelector(".task-modal");
let cancelBtn = document.querySelector(".cancel-btn");
let priorityColor = document.querySelectorAll(".priority-color");
let doneBtn = document.querySelector(".done-btn");
let mainCont = document.querySelector(".task-cont");
let textArea = document.querySelector(".text-area");
let colors = ['red','yellow','blue','black'];
let selectColor = colors[3];
console.log(selectColor);




// ===========================Modal======================//
taskBtn.addEventListener("click", (e) => {
    // Display modal
    console.log("Clicked on the button");
    modalCont.style.display = "flex";

})

cancelBtn.addEventListener("click", (e) => {
    // hide modal
    modalCont.style.display = "none";
})

// Select priority
priorityColor.forEach((element,idx) => {
    // priorityColor.forEach(element)

    element.addEventListener("click", (e) => {
        priorityColor.forEach(em => {
            em.classList.remove("active");

        })
        selectColor=colors[idx];
        e.target.classList.add("active");

    })
});

// ==========================Create tasks=======================//
doneBtn.addEventListener("click", (e) =>{
    createTask(selectColor,textArea.value);
    modalCont.style.display = "none";

})

function createTask(selectColor,task) {
    let taskCont = document.createElement("div");
    taskCont.setAttribute("class", "task-item");
    taskCont.innerHTML = `<div class="priority-color-task">
                            </div>
                            <div class="task">
                                ${task}
                            </div>`;
    let priorityColor = document.querySelectorAll(".priority-color-task");
    // priorityColor.style.backgroundColor = "black";
    console.log(priorityColor);
}