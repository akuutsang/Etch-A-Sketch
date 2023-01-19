let color = "black";


function styleBoard(size){
    let board = document.querySelector(".board");
    let squares = board.querySelectorAll("div");
    squares.forEach((div) => div.remove());
    let amount = size * size;
    for (let i = 0; i < amount; i++) {
        let square = document.createElement("div")
        square.addEventListener("mouseover", ()=> {
            square.style.backgroundColor = "black";
        });
        square.style.backgroundColor = "white"
        board.insertAdjacentElement("beforeend", square)
    }
}
styleBoard(16);


function changeSize(input){
    if (input >= 2 || input <= 100){
        styleBoard(input);
    } else{
        console.log("too many squares")
    } 
}

function colorSquare(){
    square.addEventListener("mouseover", ()=> {
        square.style.backgroundColor = color;
    });
}