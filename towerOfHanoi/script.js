let moves = 0;
let md = false;
let selection = null;
let flagDiv = null;

let score = document.getElementById('score')

function disc1 (div) {
  return div.getElementsByTagName('div')[0]
}

function size (divOne, divTwo) {
  return disc1(divOne).dataset.size > divTwo.dataset.size
}

function info (div) {
  return div.getElementsByTagName('div').length === 0
}

function movement () {
  md = !md
}

function selectDock (div) {
  selection = disc1(div)
  if (!selection) return
  flagDiv = div
  div.className += ' selected'
  movement()
}

function movePos (div) {
  if (info(div) || size(div, selection)) {
    moves++
    div.insertBefore(selection, div.firstChild)
    console.log(score)
    score.innerHTML = moves
  }
  flagDiv.classList.remove('selected')
  movement()
}

function handleClick (e) {
  md ? movePos(this) : selectDock(this)
}

Array.from(document.getElementsByClassName('dock')).forEach(dock => {
  dock.addEventListener('click', handleClick)
})

let timer = 0;
let v = -1;
function setTimer() {
    timer++
    document.getElementById("time").innerHTML = timer;
    ratings(timer);
}

function start() {
    if(v == -1){
        v = setInterval(setTimer, 1000);
    }
}

function stopT() {
    if(v != -1){
        clearInterval(v)
        v = -1
    }
}

function reset() {
    stopT();
    timer = -1;
    setTimer()
}
function ratings(x){
    let s=0;
    s=x;
    if(s<30){
    document.getElementById("ratings").innerHTML = 3;
  }
    else if(s>30 && s<40){
        document.getElementById("ratings").innerHTML = 2;
    }
    else if(s>40 && s<60){
        document.getElementById("ratings").innerHTML = 1;
    }
    else if(s>60){
        document.getElementById("ratings").innerHTML = 0;
    }


}
function showhide(id) {
  let i = document.getElementById(id);
  i.style.display = (i.style.display == 'block') ? 'none' : 'block';}

  
  