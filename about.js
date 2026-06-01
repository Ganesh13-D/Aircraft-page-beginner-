const about = document.getElementById("aboutbtn");
const dropdown = document.querySelector(".about-dropdown");

about.addEventListener("click", function(e){
    e.preventDefault();

    if(dropdown.style.display === "block"){
        dropdown.style.display = "none";
    }

    else{
        dropdown.style.display = "block";
    }
});

