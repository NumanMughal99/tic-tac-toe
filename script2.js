let buttons = document.querySelectorAll(".box");

const comp = ()=>{
    let array = ["p","s","f"];
    let arayind = Math.floor(Math.random()*3);
    return array[arayind];


}
let playgame = (user)=>{
    console.log("userchoice",user);
const compchoice = comp();
 console.log("computer :", compchoice);
 if(compchoice === user){
    console.log("draw");
 }
 if(user === "p"){
    console.log("you losse");
 }else if(user === "r"&& compchoice==="p" && compchoice==="s"){
    console.log("you win");
 }
};
buttons.forEach((box)=>{
     box.addEventListener("click",()=>{
     const user = box.getAttribute("id");
    playgame(user);

     })
})

