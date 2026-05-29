const airBtn = document.getElementById("airbtn");

airBtn.addEventListener("click", function(e){

    e.preventDefault();

    const commentBoxes = document.querySelectorAll(".comment-box");

    commentBoxes.forEach(function(box){

        if(box.style.display === "block"){
            box.style.display = "none";
        } 
        
        else {
            box.style.display = "block";
        }

    });

});

function addComment(btn){
    let card = btn.closest(".gridmain");
    let input = card.querySelector(".input");
    let commentBox = card.querySelector(".comments");
    if(input.value.trim() !== ""){

        commentBox.style.display = "block";
        commentBox.innerHTML = "";
        let p = document.createElement("p");
        p.innerText = input.value;
        commentBox.appendChild(p);
        input.value = "";
    }
}