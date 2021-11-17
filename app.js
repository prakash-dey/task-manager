let taskBtn = document.querySelector(".task-button");
let modalCont = document.querySelector(".task-modal");
let cancelBtn = document.querySelector(".cancel-btn");
let priorityColor = document.querySelectorAll(".priority-color");






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
priorityColor.forEach(element => {
    // priorityColor.forEach(element)

    element.addEventListener("click",(e)=>{
        priorityColor.forEach(em=>{
            console.log("remove called");
            em.target.classList.add("active");
            em.target.classList.remove("active");

        })
        e.target.classList.add("active");
    })    
});

