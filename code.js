const map = [
  "WWWWWWWWWWWWWWWWWWWWW",
  "W   W     W     W W W",
  "W W W WWW WWWWW W W W",
  "W W W   W     W W   W",
  "W WWWWWWW W WWW W W W",
  "W         W     W W W",
  "W WWW WWWWW WWWWW W W",
  "W W   W   W W     W W",
  "W WWWWW W W W WWW W F",
  "S     W W W W W W WWW",
  "WWWWW W W W W W W W W",
  "W     W W W   W W W W",
  "W WWWWWWW WWWWW W W W",
  "W       W       W   W",
  "WWWWWWWWWWWWWWWWWWWWW",
];

const mazeContainer= document.getElementById("maze")
const mazeFunction= function(createMap){

  for(let row =0; row <createMap.length; row ++){
    const rowCreator = createMap[row]
    let blockDiv = "";
  

  for(let col =0; col <rowCreator.length; col ++){
    const colCreator = rowCreator[col]
    if(colCreator === "W"){
      blockDiv += '<div class = "wall" id="' + row + "-" + col + '"></div>'
     }
     else if(colCreator === "S"){
       blockDiv += '<div class = "start" id="' + row + "-" + col + '"></div>'
     }
     else if(colCreator === "F"){
       blockDiv += '<div class = "finish" id="' + row + "-" + col + '"></div>'
      }
      else{
        blockDiv += '<div class = "space" id="' + row + "-" + col + '"></div>'
      }
    }
    
console.log(blockDiv)
  mazeContainer.innerHTML += `<div class = "row"> ${blockDiv}</div>`
}
}
mazeFunction(map)

let boxTop = 200;
let boxLeft = 200;



document.addEventListener("keydown", logKey); 
function logKey(e){
  const player = document.getElementById("boxPlayer");
  let location = player.parentElement.id
  let test = location.split("-")
  let y = parseInt(test[0]);
  let x = parseInt(test[1]);
  e.preventDefault()
  
  //log.textContent += ` ${e.code}`; TESTING FOR ARROWS TO MOVE TILES.  TESTING ON KEYBOARDING ASSIGNMENT WORKS
  
  if(e.code === "ArrowUp"){
    let nextUp = document.getElementById(`${y-1}-${x}`)
    console.log(nextUp)
    if(nextUp.className !== "wall"){
      y-=1
      
      //boxTop = boxTop + 10;
      //document.getElementById("boxPlayer").style.top = boxTop + "px";  
    }
  }
  
  
  if(e.code === "ArrowDown"){
    let nextDown = document.getElementById(`${y+1}-${x}`)
    
    if(nextDown.className !== "wall"){
      y+=1
      // boxTop = boxTop - 10;
      //document.getElementById("boxPlayer").style.top = boxTop + "px";
    }
  }  
  
  if(e.code === "ArrowLeft"){
    let nextLeft = document.getElementById(`${y}-${x-1}`)
    if(nextLeft.className !== "wall"){
      x-=1
      // boxLeft = boxLeft - 10;
      //document.getElementById("boxPlayer").style.left = boxLeft + "px";
    }
  }
  
  if(e.code === "ArrowRight"){
    let nextRight = document.getElementById(`${y}-${x+1}`)
    
    if(nextRight.className !== "wall"){
      x+=1  
      
    }
    
  }
 
  movePlayer(y,x)
  winner(y,x)
 
}
function movePlayer(x,y){
  const player = document.getElementById("boxPlayer");
    document.getElementById(x+"-"+y).appendChild(player);
    
  }
  movePlayer(9,0)
  
  function winner(y,x){
    let winElm = document.getElementById(`${y}-${x}`)
    if(winElm.className === "finish"){
      let printWin = document.getElementById("winner");     
      printWin.innerHTML = "Congratulations!  You found the missing kid."
      document.body.appendChild(printWin); 
      console.log(winElm)
    } 
  }