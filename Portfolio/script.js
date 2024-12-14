// Initializing the required variables

let link_lists=document.querySelectorAll(".link-list")
let icon=document.querySelector(".navbar li i");


//=======================================================================

// When the mouse hovers overs the links remove the glayscale, indicating that it works.
link_lists.forEach((x)=>{
    x.addEventListener("mouseover", ()=>{
        let images=x.querySelectorAll("img");
        images.forEach((x)=>{
            x.style.filter="grayscale(0%)";
        })
    })
})
link_lists.forEach((x)=>{
    x.addEventListener("mouseout", ()=>{
        let images=x.querySelectorAll("img");
        images.forEach((x)=>{
            x.style.filter="grayscale(100%)";
        })
    })
})

// LIGHT MODE AND DARK MODE FOR JUST THE HERO SECTION.

icon.addEventListener("click", ()=>{
    if (icon.classList.contains("fa-sun")){
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
        document.body.style.backgroundColor="#fff";
    }
    else {
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
        document.body.style.backgroundColor="#000";


    }
})

// ======================================================================


