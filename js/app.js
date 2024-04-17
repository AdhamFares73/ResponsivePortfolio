const header =document.querySelector("header");
const first_skill = document.querySelector(".skill:first-child");
const toggle_btn =document.querySelector(".toggle-btn");
const ml_counter = document.querySelectorAll(".number span")


let firstThemes = localStorage.getItem("dark");
themes( + firstThemes);
toggle_btn.addEventListener("click",()=>{
    themes(!document.body.classList.contains("dark"))
})

function themes (isDark) {
    if(isDark){
        document.body.classList.add("dark");
        toggle_btn.classList.replace("uil-moon","uil-sun")
        localStorage.setItem("dark",1)
    }
    else{
        document.body.classList.remove("dark")
        toggle_btn.classList.replace("uil-sun","uil-moon")
        localStorage.setItem("dark",0)

    }
}



function stickyNavbar(){
    header.classList.toggle("scrolled",window.pageYOffset > 0);
}
stickyNavbar();
window.addEventListener('scroll' , ()=>{
    stickyNavbar();
    if(!mlplayed) counter();
});

// Reveal Animation 

let sr = ScrollReveal({
    duration :2500,
    distance: "60px",
});
/** animation of section one  */
sr.reveal(".showcase-info",{delay:600});
sr.reveal(".showcase-image" , {origin:"top" , delay :700})


/*service section animation */

let mlplayed =false;
function Updata(num , maxNum) {
    let current = +num.innerText;
    if(current <maxNum){
        num.innerText = current+1;
        setTimeout(()=>{
            Updata(num , maxNum);
        },12)
    }
}
function counter(){
    mlplayed = true;
     ml_counter.forEach(element => {
        let ele = +element.dataset.target;
        setTimeout(()=>{
            Updata(element , ele)
        },400)
    });
}

