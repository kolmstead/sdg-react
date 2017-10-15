export function getStuff(id) {
  return Promise.resolve()
    .then(()=>JSON.parse(localStorage.getItem(id)));
}

export const comment = {
  date: new Date(),
  text: "did I make anything yet or later",
  text2: "not figuring this out bobby",
  author: {
    name: 'Kenton Olmstead',
    avatarUrl: 'http://placekitten.com/g/64/64'
  }
}; 

export const fred = "Joe Montana III";

export function showConsiderLaterList(id) {
  getStuff(id)
    .then(showList);
}

function showList(considerLaterList) {
  document.getElementById('later').innerHTML = `<p>ConsiderLaterList: ${considerLaterList}</p>`;
  console.log(considerLaterList);
  return (considerLaterList);
}

export function getTheObj(id) {
  getStuff(id)
    .then((myObj)=>{
    console.log("myObj?", myObj);
    return myObj;}
    );
}

export function saveStuff(id, doc) {
  return Promise.resolve()
    .then( () => localStorage.setItem(id, JSON.stringify(doc)));
}

export function clickHandler(id, doc) {
  saveStuff(id,doc);
  console.log("print some props:",id,doc);
}

export function joesThing() {
  const fabio = "fred";
  console.log("Can I get what I want?", fabio);
}

// runs inside of changeMatch in MatchContainer
export function getNewPickInMatch(unList, unPick, considerLater, newPair) {
    let oldPair = unPick;
    let pick = unList[getRandom(0, unList.length - 1)];
    if ( considerLater.includes(pick) || oldPair.includes(pick) || newPair.includes(pick)  ) {
      getNewPickInMatch(unList, unPick, considerLater, newPair);
    } else {
      newPair.push(pick);
      saveStuff('newPair', newPair);
      // console.log("newPair is", newPair);
      saveStuff('unPick', newPair);
      console.log("are newPair and unPick saved? --inside getNewPick...", newPair, unPick)
      return ([newPair, unPick]);
    }
  } 
  
// repeat of in the one in pairSupport  
export function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
  

