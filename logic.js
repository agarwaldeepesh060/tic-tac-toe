let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#resetbtn");
let newgame = document.querySelector("#newgame");

const resetGame = () => {
  turn0 = true;
  count = 0;
  enableboxes();
};

const disableboxes = ()  => {
  for (let box of boxes){
    box.disabled = true;
  }
}

const enableboxes = ()  => {
  for (let box of boxes){
    box.disabled = false;
    box.innerText = "";
  }
};

let msg = document.querySelector(".msg");
const showWinner = (winner) => {
  msg.innerText = `congratulation winner is  ${winner}`;
  disableboxes();
};
let turn0 = true;
let count = 0;

const winpatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

boxes.forEach((box) =>{
  box.addEventListener("click", () => {
   console.log("box was click");
   if(turn0){
    box.innerText = "0";
    turn0 = false;
   } else{
    box.innerText = "x";
    turn0 = true;
   }
   box.disabled = true;
   checkWinner();
  });
}  );

const checkWinner = () => {
  for (let pattern of winpatterns) {
    let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;

    if (pos1val !="" && pos2val !="" && pos3val !="")  {
      if (pos1val === pos2val && pos2val === pos3val) {
          console.log("winner", pos1val);
          showWinner(pos1val);
          return true;
     }
   }
  }
};
newgame.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);