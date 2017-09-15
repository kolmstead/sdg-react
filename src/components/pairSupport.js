//try to get a random pair generating in React; start by just getting a random image maybe.


function testMe(){
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
  for (i=0; i<2; i++) {
    pickRandom2([props,considerLater,propsList, unPick]);
  }
  saveStuff('unPick', unPick)
  return ([props, considerLater, unPick])
}

// runs inside getNewPair()
function pickRandom2([props,considerLater,propsList, unPick]) {
  let pick = props[propsList[getRandom(0, propsList.length - 1)]].slug;
  if ( considerLater.includes(pick) || unPick.includes(pick)) {
    pickRandom2([props,considerLater,propsList, unPick]);
  } else {
    unPick.push(pick);
    saveStuff('unPick', unPick);
  }
  return ([props, considerLater, propsList, unPick])
}

function renderNewPair([props, considerLater, unPick]) {
  
  document.getElementById('p1imgBox').innerHTML = `<img id="p1img" src=${props[unPick[0]].image}>`;
  document.getElementById('info1').innerHTML = `${props[unPick[0]].info}`;

  document.getElementById('p2imgBox').innerHTML = `<img id="p2img" src=${props[unPick[1]].image}>`;
  document.getElementById('info2').innerHTML = `${props[unPick[1]].info}`;
  
  document.getElementById('p1x').addEventListener('click', pickConsiderLater);
  document.getElementById('p2x').addEventListener('click', pickConsiderLater);
  
}

function saveStuff(id, doc) {
  return Promise.resolve()
    .then( () => localStorage.setItem(id, JSON.stringify(doc)));
}
