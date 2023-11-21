const skills = document.getElementById("skills")
const skill_header = document.getElementById("skill_header")
const skill_header2 = document.getElementById("skill_header2")
const skill_header3 = document.getElementById("skill_header3")
const skill_header4 = document.getElementById("skill_header4")
const drop_experience = document.getElementById("drop_experience")
const contact = document.getElementById("contact")

// Show Python information code
skill_header.addEventListener("click",()=>{
    skill_header.classList.toggle("active_color")
    var skill_desc = document.getElementById("skill_desc")
    skill_desc.classList.toggle("skill_desc")
    
    // Close everything else
    var skill_desc2 = document.getElementById("skill_desc2")
    var skill_desc3 = document.getElementById("skill_desc3")
    var skill_desc4 = document.getElementById("skill_desc4")
    if(skill_desc2.className===""){
        skill_desc2.classList.toggle("skill_desc2")
    } else if(skill_desc3.className===""){
        skill_desc3.classList.toggle("skill_desc3")
    } else if(skill_desc4.className===""){
        skill_desc4.classList.toggle("skill_desc4")
    }
})

// Show Javascript information code
skill_header2.addEventListener("click",()=>{
    skill_header2.classList.toggle("active_color")
    var skill_desc2 = document.getElementById("skill_desc2")
    skill_desc2.classList.toggle("skill_desc2")

    // Close everything else
    var skill_desc = document.getElementById("skill_desc")
    var skill_desc3 = document.getElementById("skill_desc3")
    var skill_desc4 = document.getElementById("skill_desc4")
    if(skill_desc.className===""){
        skill_desc.classList.toggle("skill_desc")
    } else if(skill_desc3.className===""){
        skill_desc3.classList.toggle("skill_desc3")
    } else if(skill_desc4.className===""){
        skill_desc4.classList.toggle("skill_desc4")
    }
    
})

// Show PHP information code
skill_header3.addEventListener("click",()=>{
    skill_header3.classList.toggle("active_color")
    var skill_desc3 = document.getElementById("skill_desc3")
    skill_desc3.classList.toggle("skill_desc3")

    // Close everything else
    var skill_desc = document.getElementById("skill_desc")
    var skill_desc2 = document.getElementById("skill_desc2")
    var skill_desc4 = document.getElementById("skill_desc4")
    if(skill_desc.className===""){
        skill_desc.classList.toggle("skill_desc")
    } else if(skill_desc2.className===""){
        skill_desc2.classList.toggle("skill_desc2")
    } else if(skill_desc4.className===""){
        skill_desc4.classList.toggle("skill_desc4")
    }

    
})

// Show SQL information code
skill_header4.addEventListener("click",()=>{
    skill_header4.classList.toggle("active_color")
    var skill_desc4 = document.getElementById("skill_desc4")
    skill_desc4.classList.toggle("skill_desc4")

    // Close everything else
    var skill_desc = document.getElementById("skill_desc")
    var skill_desc2 = document.getElementById("skill_desc2")
    var skill_desc3 = document.getElementById("skill_desc3")
    if(skill_desc.className===""){
        skill_desc.classList.toggle("skill_desc")
    } else if(skill_desc2.className===""){
        skill_desc2.classList.toggle("skill_desc2")
    } else if(skill_desc3.className===""){
        skill_desc3.classList.toggle("skill_desc3")
    }
})

// Untoggle showing the descriptions
skills.addEventListener("mouseleave",()=>{
    skill_desc.className="skill_desc"
    skill_desc2.className="skill_desc2"
    skill_desc3.className="skill_desc3"
    skill_desc4.className="skill_desc4"

//Remove such sticky color to the headings
    skill_header.classList.remove("active_color")
    skill_header2.classList.remove("active_color")
    skill_header3.classList.remove("active_color")
    skill_header4.classList.remove("active_color")
})


// SECTION 2

// Hover line moving animation

// --- --- -- Experience
const line = document.getElementById("line");
const resume_heading_1 = document.getElementById("resume_heading_1");
let isLineMoved = false;

resume_heading_1.addEventListener("mouseover", () => {

    if (!isLineMoved) {
        line.style.top = "50px"; // Move the line down
    } else {
        line.style.top = "0"; // Move the line back up
    }

    isLineMoved = !isLineMoved; // Toggle the state

});

resume_heading_1.addEventListener("mouseout", () => {
    if (isLineMoved === true) {
        line.style.top = "0px"; // Move the line down
        isLineMoved = !isLineMoved; // Toggle the state
    }    
});

// --- ---- ---- Education
const line2 = document.getElementById("line_2");
const resume_heading_2 = document.getElementById("resume_heading_2");
resume_heading_2.addEventListener("mouseover", () => {

    if (!isLineMoved) {
        line2.style.top = "100px" // Move the line down
        // line22.style.top = "200px" // Move the line down
    } else {
        line2.style.top = "0"; // Move the line back up
        line22.style.top = "0"; // Move the line back up
    }

    isLineMoved = !isLineMoved; // Toggle the state

});

resume_heading_2.addEventListener("mouseout", () => {
    if (isLineMoved === true) {
        line2.style.top = "0px"; // Move the line down
        isLineMoved = !isLineMoved; // Toggle the state
    }    
});

// ---- ---- --- Career
const line22 = document.getElementById("line2_2");
const resume_heading_3 = document.getElementById("resume_heading_3");
resume_heading_3.addEventListener("mouseover", () => {

    if (!isLineMoved) {
        line22.style.top = "50px"; // Move the line down
    } else {
        line22.style.top = "0"; // Move the line back up
    }

    isLineMoved = !isLineMoved; // Toggle the state

});

resume_heading_3.addEventListener("mouseout", () => {
    if (isLineMoved === true) {
        line22.style.top = "0px"; // Move the line down
        isLineMoved = !isLineMoved; // Toggle the state
    }    
});

// Scroll to contact form

contact.addEventListener("click",()=>{
    window.scrollBy(0,1250)
    
})
