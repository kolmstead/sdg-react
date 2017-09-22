//try to get a random pair generating in React; start by just getting a random image maybe.


export function testMe(){
  getAllProps()
    .then(getNewPair)
    .then(renderNewPair)
}

function getAllProps() {
  let props = getStuff('focusAreasJSON');
  let considerLater = getStuff('considerLater');
  return Promise.all([props, considerLater]);
}

function getNewPair([props,considerLater]) {
    let unPick = [];
    let propsList = Object.keys(props);
    let i=0;
  for (i=0; i<2; i++) {
    pickRandom([props,considerLater,propsList, unPick]);
  }
  saveStuff('unPick', unPick)
  return ([props, considerLater, unPick])
}

// runs inside getNewPair()
function pickRandom([props,considerLater,propsList, unPick]) {
  let pick = props[propsList[getRandom(0, propsList.length - 1)]].slug;
  if ( considerLater.includes(pick) || unPick.includes(pick)) {
    pickRandom([props,considerLater,propsList, unPick]);
  } else {
    unPick.push(pick);
    saveStuff('unPick', unPick);
  }
  return ([props, considerLater, propsList, unPick])
}

function renderNewPair([props, considerLater, unPick]) {
  
  // document.getElementById('p1imgBox').innerHTML = `<img id="p1img" src=${props[unPick[0]].image}>`;
  // document.getElementById('info1').innerHTML = `${props[unPick[0]].info}`;

  // document.getElementById('p2imgBox').innerHTML = `<img id="p2img" src=${props[unPick[1]].image}>`;
  // document.getElementById('info2').innerHTML = `${props[unPick[1]].info}`;
  
  // document.getElementById('p1x').addEventListener('click', pickConsiderLater);
  // document.getElementById('p2x').addEventListener('click', pickConsiderLater);
  console.log("unPick is", unPick);

  
}

function saveStuff(id, doc) {
  return Promise.resolve()
    .then( () => localStorage.setItem(id, JSON.stringify(doc)));
}

// get a random integer in a range
function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getStuff(id) {
  return Promise.resolve()
    .then(()=>JSON.parse(localStorage.getItem(id)));
}
