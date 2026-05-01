
function handleYN(event) { 
    if (event.key === "Enter") { //when y or n is submitted
        const response = event.target.value.trim().toLowerCase(); //so it doeesnt matter if its capital or not
        const text = document.getElementById("text"); 
        const ynInput = document.getElementById("yn");

        if (response === "y" || response === "yes") {
            
            text.style.opacity = "0.3";// fades out the text above so it's easier on the eyes
            text.classList.add('text-paused'); // stops the text cursor from blinking

            ynInput.style.display = "none"; // hides the answering box
            document.getElementById("text1").style.display = "block"; //shows the second text asking for password
            document.getElementById("answer").style.display = "block";  //makes another answer box 
            document.getElementById("answer").classList.add('visible'); //makes it visible
            answerInput.focus();

        } else if (response === "n" || response === "no") { //if the answer was N
            text.style.opacity = "0.3"; 
            text.classList.add('text-paused'); 

            ynInput.style.display = "none"; 
            document.getElementById("yno").style.display = "block"; 
        }
    }
}

function handlePassword(event) { // this is the password question
    if (event.key === "Enter") { 
        const text1 = document.getElementById("text1");
        const answerInput = document.getElementById("answer");
        const password = event.target.value.trim();  // gets the entered password

        // Fade out previous question
        text1.style.opacity = "0.3";
        text1.classList.add('text-paused'); // pauses the text cursor

        answerInput.style.display = "none";

        if (password === "meowsilly123") { //if the correct password is entered
            document.getElementById("live").style.display = "block"; 
            document.getElementById("dead").style.display = "none";
            setTimeout(() => { // i wanted it to take a little bit so users can read the success message
            window.location.href = "HOME.html";  //takes you to the homepage
          }, 5500);

        } else {  // if anything else is entered
            document.getElementById("live").style.display = "none"; //hides the success text
            document.getElementById("dead").style.display = "block"; //shows the rejection text
        }
    }
}
