const select_bx = document.querySelector(".select-bx"),
  O_btn = select_bx.querySelector(".playerO"),
  X_btn = select_bx.querySelector(".playerX"),
  allBox = document.querySelectorAll("section span"),
  players = document.querySelector(".players"),
  result_bx = document.querySelector(".result-bx"),
  won_txt = result_bx.querySelector(".result-txt"),
  replay_btn = result_bx.querySelector(".btn"),
  playBoard = document.querySelector(".play-board");
  

window.onload = () => {

    allBox.forEach((box) =>{ 
        box.onclick = () =>{
            clickedBox(box)
        };
    });

    X_btn.onclick = () => {
        playBoard.classList.add("show"); //Show Playboard
        select_bx.classList.add("hide"); //Hide Select Box on click
    }
    O_btn.onclick = () => {
      select_bx.classList.add("hide"); //Hide Select Box on click
      playBoard.classList.add("show"); //Show Playboard
      players.setAttribute("class", "players active player");
    }
}

let x_icon = "fa fa-times";
let o_icon = "far fa-circle";
let playerSign = "X";
let runBot = true;

// user function
function clickedBox(ele) {
    if (players.classList.contains("player")) {
        playerSign = "O";
        ele.setAttribute("id",playerSign);
        ele.innerHTML = `<i class="${o_icon}"></i>`;
        players.classList.add("active");
    }else{
        ele.innerHTML = `<i class="${x_icon}"></i>`;
        players.classList.add("active");
        ele.setAttribute("id",playerSign);
    }
    checkWinner();
    playBoard.style.pointerEvents = "none";
    ele.style.pointerEvents = "none";
    let randomDelay = ((Math.random() * 1000) + 200).toFixed();
    setTimeout(() => {
        bot(runBot);
    }, randomDelay);
}

// bot Function

function bot(runBot) {
  if (runBot) {
    playerSign = "O";
    let array = [];
    for (let i = 0; i < allBox.length; i++) {
      if (allBox[i].childElementCount == 0) {
        array.push(i);
      }
    }
    let randomIndex = array[Math.floor(Math.random() * array.length)];
    if (array.length > 0) {
      if (players.classList.contains("player")) {
        allBox[randomIndex].innerHTML = `<i class="${x_icon}"></i>`;
        players.classList.remove("active");
        playerSign = "X";
        allBox[randomIndex].setAttribute("id", playerSign);
      } else {
        allBox[randomIndex].innerHTML = `<i class="${o_icon}"></i>`;
        players.classList.remove("active");
        allBox[randomIndex].setAttribute("id", playerSign);
      }
      checkWinner();
    }
    allBox[randomIndex].style.pointerEvents = "none";
    playBoard.style.pointerEvents = "auto";
    playerSign = "X";
    // console.log(randomIndex);

    // let emptyBoxes = [...allBox].filter(box => box.childElementCount == 0);

    // if(emptyBoxes.length > 0) {
    //     // Get a random index within available boxes
    //     let randomIndex = Math.floor(Math.random() * emptyBoxes.length);
    //     console.log(randomIndex);
    // }
  }
}

// winner function

function getId(idname){
    return document.querySelector(".box" + idname).id;
}

function checkId(val1, val2, val3, sign){
    if (getId(val1)== sign && getId(val2)== sign && getId(val3)== sign){
        return true;
    }
}
let sadEmojies = ['😑' ,'🙄','😫','😕','😤'];
let emojies = ['😎','😉','😁','🤑'];

function getEmoji(emojiType) { 
    return emojiType[Math.floor(Math.random() * emojiType.length)];
}
function checkWinner(){
    let emoji;
    if(checkId(1,2,3,playerSign) || checkId(4,5,6,playerSign) || checkId(7,8,9,playerSign) || checkId(1,4,7,playerSign) || checkId(2,5,8,playerSign) || checkId(3,6,9,playerSign) || checkId(1,5,9,playerSign) || checkId(3,5,7,playerSign)){
        runBot = false;
        bot(runBot);
        setTimeout(() => {
          playBoard.classList.remove("show");
          result_bx.classList.add("show");
        }, 700);
         emoji = getEmoji(emojies);
        won_txt.innerHTML = `Player <strong>${playerSign} ${emoji}</strong> won the game!`;
    }else{
        if (getId(1) != "" && getId(2) != "" && getId(3) != "" && getId(4) != "" && getId(5) != "" && getId(6) != "" && getId(7) != "" && getId(8) != "" && getId(9) != "") {
             runBot = false;
             bot(runBot);
             setTimeout(() => {
               playBoard.classList.remove("show");
               result_bx.classList.add("show");
             }, 700);
             emoji = getEmoji(sadEmojies);
             won_txt.textContent = `Match has been drawn! ${emoji}`;
        }
    }
}

replay_btn.onclick = () => {
    window.location.reload(); // reload page
}