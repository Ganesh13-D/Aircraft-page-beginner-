const aircraftBtn = document.getElementById("aircraftBtn");
const links = document.querySelector(".links");

aircraftBtn.addEventListener("click", function () {
    if (links.style.display === "block") {
        links.style.display = "none";
    } else {
        links.style.display = "block";
    }
});


 let speed = 0;

    function takeOff(){
        document.getElementById("status").textContent = "Aircraft Status: IN AIR";
    }

    function land(){
        document.getElementById("status").textContent = "Aircraft Status: LANDED";
        speed = 0;
        document.getElementById("speed").textContent = "Speed: 0 km/h";
    }

    function increaseSpeed(){
        speed += 100;
        document.getElementById("speed").textContent = "Speed: " + speed + " km/h";
    }
