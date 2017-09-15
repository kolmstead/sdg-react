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
    )
}

export function saveStuff(id, doc) {
  return Promise.resolve()
    .then( () => localStorage.setItem(id, JSON.stringify(doc)));
}

export function clickHandler(id, doc) {
  saveStuff(id,doc);
  console.log("print some props:",id,doc);
}
