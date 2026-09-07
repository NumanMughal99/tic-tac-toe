let boxes = document.querySelectorAll(".box");
let winner = document.querySelector(".winner");
let newgame = document.querySelector(".new-game");
let rest = document.querySelector(".reset");
let turn = true;
const wining =
 [
  [0,1,2],
  [0,3,6],
  [0,4,8],
  [1,4,7],
  [2,5,8],
  [2,4,6],
  [3,4,5],
  [6,7,8]
];

boxes.forEach((box) => {
   box.addEventListener("click",()=>{
    if(turn === true){
        box.innerText = "o";
        turn = false;
        box.classList.add("clor-x");
        box.classList.remove("box");
    }else{
        box.innerText ="x";
        box.classList.add("box");
        box.classList.remove("clor-x");
        turn = true;
        
    }
    box.disabled = true;
     checkwineer();
   } )
   
});
// reset button
let resetgame = ()=>{
  turn = true;
  enabledbtn();
  winner.classList.add("hide");
}
// disable button
const disabledbtn = ()=>{
  for(box of boxes){
    box.disabled = true;
  }
}
// enable button
const enabledbtn = ()=>{
  for(box of boxes){
    box.disabled = false;
    box.innerText = "";
  }
}

const showwinner = (winer)=>{
  winner.innerText ="congratulation Winner is, "+winer;
  winner.classList.remove("hide");
  disabledbtn();

}

const checkwineer = function fun(){
    for(pattren of wining){
      let posval1 = boxes[pattren[0]].innerText;
      let posval2 = boxes[pattren[1]].innerText;
      let posval3 = boxes[pattren[2]].innerText;
       if(posval1 != "" && posval2 != "" && posval3 !=""){
        if( posval1 === posval2 && posval2===posval3){
      console.log("win",posval1);
      showwinner(posval1);
    }
   
        }
    }
}
 newgame.addEventListener("click",resetgame);
 rest.addEventListener("click",resetgame);