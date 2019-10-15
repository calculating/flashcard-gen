console.log("go go go");
var latinSel = true;
var latinWord = 'word';
var words = [];

chrome.runtime.onMessage.addListener(gotMessage)
function gotMessage(msg, sender, sendResponse) {
    console.log(msg);
    sendResponse({wordResponse: words});
};

window.addEventListener('mouseup', wordSelected);

function wordSelected() {
    let sel = window.getSelection().toString().trim();
    if (latinSel = false) {
        latinSel = true;
        words.push({question: latinWord, answer: sel});
        
    } else if (latinSel = true) {
        latinSel = false;
        latinWord = 'sel';
    }
}
