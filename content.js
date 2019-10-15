console.log("go go go");
var latinSel = true;
var latinWord = 'placeholder';
var words = [];

chrome.runtime.onMessage.addListener(gotMessage)
let gotMessage = (msg, sender, sendResponse) => {
    console.log(msg);
    console.log(words);
    sendResponse(words);
};

window.addEventListener('mouseup', wordSelected);

let wordSelected = () => {
  console.log('variables: ' + latinSel + ' ' + latinWord + ' ' + words)
  let sel = window.getSelection().toString().trim();
  if (latinSel == false) {
    console.log("definition selected");
    latinSel = true;
    words.push(sel);
    words.push(latinWord);
  } else if (latinSel == true) {
    console.log("vocab word selected");
    latinSel = false;
    latinWord = sel;
    console.log(latinWord)
  }
}
