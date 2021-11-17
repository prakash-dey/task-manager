let taskBtn = document.querySelector(".task-button");
let modalCont = document.querySelector(".task-modal");
let cancelBtn = document.querySelector(".cancel-btn");
let priorityColor = document.querySelector(".priority-color");






// ===========================Modal======================//
taskBtn.addEventListener("click", (e) => {
    // Display modal
    console.log("Clicked on the button");
    modalCont.style.display = "flex";

})

cancelBtn.addEventListener("click",(e)=>{
    // hide modal
    modalCont.style.display = "none";
})

// Select priority
priorityColor.addEventListener("click",(e)=>{
    console.log(e);
})