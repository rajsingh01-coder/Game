
let boxes = document.querySelectorAll(".box"); // Select all boxes
let resetbtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; // Initialize the turnO variable

let winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if (box.innerText === "") { // Check if the box is empty
            if (turnO) {
                box.innerText = "O";
                turnO = false;
            } else {
                box.innerText = "X";
                turnO = true;
            }
            checkWinner(); // Check for a winner after each move
        }
    });
});

const showWinner = (winner) => {
    msg.innerText = `Congratulations, ${winner} is Winner `; // Update the message
    msgContainer.classList.remove("hide"); // Show the message container
    msgContainer.classList.add("show"); // Add the show class for animation
}

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos1Va2 = boxes[pattern[1]].innerText;
        let pos1Va3 = boxes[pattern[2]].innerText;

        if (pos1Val !== "" && pos1Va2 !== "" && pos1Va3 !== "") {
            if (pos1Val === pos1Va2 && pos1Va2 === pos1Va3) {
                console.log("winner, pos1Val");
                showWinner(pos1Val); // Show the winner
                return; // Exit the function after finding a winner
            }
        }
    }
};



const resetGame = () => {
    boxes.forEach((box) => {
        box.innerText = ""; // Clear the box
    });
    msgContainer.classList.remove("show"); // Remove the show class
    msgContainer.classList.add("hide"); // Add the hide class
    turnO = true; // Reset the turn
};

resetbtn.addEventListener("click", resetGame);
newGameBtn.addEventListener("click", resetGame);