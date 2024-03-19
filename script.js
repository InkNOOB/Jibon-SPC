const aboutT = document.querySelector(".about_title li:first-child")
const MainS = document.querySelector(".main_skills")
aboutT.addEventListener("click", () =>{
    MainS.classList.toggle("closed");
    aboutT.classList.toggle("open");
})
