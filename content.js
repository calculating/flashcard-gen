console.log("go go go");
var latinSel = true;
var latinWord = 'placeholder';
var words = [];
var toggled = false;

chrome.runtime.onMessage.addListener(gotMessage)
function gotMessage(msg, sender, sendResponse) {
  if(msg.txt == "toggle") {
    if(!toggled) {
      toggled = true;
    } else {
      toggled = false;
    }
    console.log('toggled = ' + toggled);
    grabWords(toggled);
  } else {
    console.log(msg);
    console.log(words);
    sendResponse(words);
  }
};

var obj = document.getElementsByTagName('p');
var allParagraphs = obj.length;
console.log(obj);
for ( var l = 0; l < allParagraphs; l++) {
  if (obj[l]) {
    var text = obj[l].textContent;
    text = text.split(/\s{3}|\–|(?: - )/);
    len = text.length;
    result = [];
    for( var i = 0; i < len; i++ ) {
      result[i] = "<span>" + text[i] + ' ' + '</span>';
    }
    obj[l].innerHTML = result.join("–");
  }
}


function grabWords(tog) {
  console.log('----------------' + tog + '--------------')
  if (tog == true){
    console.log('1');
    var pars = document.getElementsByTagName('p');
    var allParagraphs = pars.length;
    for ( var i = 0; i < allParagraphs; i++) {
      var obj = pars[i].getElementsByTagName('*');
      var allWords = obj.length;
      console.log('!!!!!!!!!!!')
      result = [];
      for ( var l = 0; l < allWords; l++) {
        var text = obj[l].textContent;
        console.log(text + l);
        result[l] = "<span onmouseover= this.style.color='orange' onmouseout= this.style.color='black' id='clickable'>" + text + '</span>' + ' – ';
      }
      pars[i].innerHTML = result.join(" ");
    }
  } else {
    console.log('2');
    var pars = document.getElementsByTagName('p');
    var allParagraphs = pars.length;
    for ( var i = 0; i < allParagraphs; i++) {
      var obj = pars[i].getElementsByTagName('*');
      var allWords = obj.length;
      console.log('!!!!!!!!!!!')
      result = [];
      for ( var l = 0; l < allWords; l++) {
        var text = obj[l].textContent;
        console.log(text + l);
        result[l] = "<span>" + text + '</span>' + ' – ';
      }
      pars[i].innerHTML = result.join(" ");
    }
  }

  if (tog==true) {
    console.log('3');
    var clicks = document.getElementsByTagName('span');
    console.log(clicks);
    for ( var l = 0; l < clicks.length; l++) {
      clicks[l].addEventListener("click", function wordSelected() {
        let sel = this.textContent;
        if (latinSel == false) {
          console.log("definition selected");
          console.log(sel);
          latinSel = true;
          words.push(sel);
          words.push(latinWord);
        } else if (latinSel == true) {
          console.log("vocab word selected");
          latinSel = false;
          latinWord = sel;
          console.log(latinWord)
        }
      })
    }
  } else {
    console.log('4');
    var clicks = document.getElementsByTagName('span');
    console.log(clicks);
    for ( var l = 0; l < clicks.length; l++) {
      clicks[l].removeEventListener("click", function wordSelected() {
        let sel = this.textContent;
        if (latinSel == false) {
          console.log("definition selected");
          console.log(sel);
          latinSel = true;
          words.push(sel);
          words.push(latinWord);
        } else if (latinSel == true) {
          console.log("vocab word selected");
          latinSel = false;
          latinWord = sel;
          console.log(latinWord)
        }
      })
    }
  }
}
