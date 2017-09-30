//try to get a random pair generating in React; start by just getting a random image maybe.


// export function testMe(){
//   getAllProps()
//     .then(getNewPair);
//     // .then(renderNewPair);
// }

// function getAllProps() {
//   let props = getStuff('focusAreasJSON');
//   let considerLater = getStuff('considerLater');
//   return Promise.all([props, considerLater]);
// }

export function tryGetState() {
  let c = getStuff('considerLater');
  let uP = getStuff('unPick');
  return Promise.all([uP, c]);
  
}



// function getNewPair([props,considerLater]) {
//     let unPick = [];
//     let propsList = Object.keys(props);
//     let i=0;
//   for (i=0; i<2; i++) {
//     pickRandom([props,considerLater,propsList, unPick]);
//   }
//   saveStuff('unPick', unPick);
//   return ([props, considerLater, unPick]);
// }

// runs inside getNewPair()
// export function pickRandom([props,considerLater,propsList, unPick]) {
//   let pick = props[propsList[getRandom(0, propsList.length - 1)]].slug;
//   if ( considerLater.includes(pick) || unPick.includes(pick)) {
//     pickRandom([props,considerLater,propsList, unPick]);
//   } else {
//     unPick.push(pick);
//     saveStuff('unPick', unPick);
//   }
//   return ([props, considerLater, propsList, unPick]);
// }

// function renderNewPair([props, considerLater, unPick]) {
//   console.log("testMe unPick is", unPick);
// }

// saveStuff() is in stuff.js and that's were App.js is calling it from
function saveStuff(id, doc) {
  return Promise.resolve()
    .then( () => localStorage.setItem(id, JSON.stringify(doc)));
}

// get a random integer in a range
export function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getStuff(id) {
  return Promise.resolve()
    .then(()=>JSON.parse(localStorage.getItem(id)));
}


// runs inside of changeUnPick3 when we need to get a pair of new picks
export function getNewPick2(unList, unPick, considerLater, newPair) {
  let oldPair = unPick;
  let pick = unList[getRandom(0, unList.length - 1)];
  if ( considerLater.includes(pick) || oldPair.includes(pick) || newPair.includes(pick)  ) {
    console.log("Problem Houston, get another. Pick was", pick);
    getNewPick2(unList, unPick, considerLater, newPair);
  } else {
    console.log("inner pick is", pick);
    newPair.push(pick);
    saveStuff('newPair', newPair);
    console.log("newPair is", newPair);
    saveStuff('unPick', newPair);
    return ([newPair, unPick]);
  }
}

// used now to get a single pick inside of replaceConsiderLater function
export function getNewPick(unList, unPick, considerLater) {
  console.log("I'm running getNewPick");
  console.log("at getNewPick-not2- clList is", considerLater);
  let pick = unList[getRandom(0, unList.length - 1)];
  if ( considerLater.includes(pick) || unPick.includes(pick) ) {
    console.log("Problem Houston, get another. Pick was", pick);
    getNewPick(unList, unPick, considerLater);
  } else {
    unPick.push(pick);
    console.log("Inside unp is", unPick);
    return unPick;
  }
}


