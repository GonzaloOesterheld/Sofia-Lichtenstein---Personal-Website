var loader = document.getElementById("preloader");
window.addEventListener("load", function(){
    loader.style.display = "none";
})

document.getElementById('backtrackButton').addEventListener('click', function() {
    window.history.back();
}
);
