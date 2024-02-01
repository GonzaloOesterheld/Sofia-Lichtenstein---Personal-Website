var loader = document.getElementById("preloader");
window.addEventListener("load", function(){
    loader.style.display = "none";
})


const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if(entry.isIntersecting) {
      entry.target.classList.add("show");
    }else {
      entry.target.classList.remove("show");
    }
  })
  
});

const mainName = document.querySelectorAll(".main-name");
mainName.forEach((el) => observer.observe(el));

const secName = document.querySelectorAll(".main-title");
secName.forEach((el) => observer.observe(el));
