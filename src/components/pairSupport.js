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

// function getStuff(id) {
//   return Promise.resolve()
//     .then(()=>JSON.parse(localStorage.getItem(id)));
// }


// runs inside of changeUnPick3 when we need to get a pair of new picks
export function getNewPick2(unList, unPick, considerLater, newPair) {
  let oldPair = unPick;
  let pick = unList[getRandom(0, unList.length - 1)];
  if ( considerLater.includes(pick) || oldPair.includes(pick) || newPair.includes(pick)  ) {
    getNewPick2(unList, unPick, considerLater, newPair);
  } else {
    newPair.push(pick);
    saveStuff('newPair', newPair);
    saveStuff('unPick', newPair);
    return ([newPair, unPick]);
  }
}

// used now to get a single pick inside of replaceConsiderLater function
export function getNewPick(unList, unPick, considerLater) {
  let pick = unList[getRandom(0, unList.length - 1)];
  if ( considerLater.includes(pick) || unPick.includes(pick) ) {
    getNewPick(unList, unPick, considerLater);
  } else {
    unPick.push(pick);
    return unPick;
  }
}


