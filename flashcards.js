var slides = [];
var slide = 0;
window.addEventListener('DOMContentLoaded', (event) => {
        chrome.storage.sync.get('flash', function(data) {
          console.log(data.flash);
          slides = data.flash;
        });
      });
document.getElementById("click").addEventListener("click", nextSlide);
function nextSlide() {
  mouse = handleMousePos(event);
  if(mouse) {
    slide--
  } else {
    slide++
  }
  myMove(mouse)
  if (slides[slide] == undefined) {
    document.getElementById("text").innerHTML = "Flashcards";
  } else {
    document.getElementById("text").innerHTML = slides[slide];
  }
}

function handleMousePos(event) {
  console.log(event.clientX);
  console.log(window.innerWidth);
  if(event.clientX < window.innerWidth/2) {
    return true;
  } else {
    return false;
  }
}


function myMove(dir) {
  var elem = document.getElementById("text");
  var pos = window.innerWidth/2;
  if (dir) {
    var id = setInterval(frame, 1);
    function frame() {
      console.log('moving');
      if (pos == window.innerWidth/2 -20) {
        elem.style.left = window.innerWidth/2 + 'px';
        clearInterval(id);
      } else {
        pos--;
        elem.style.left = pos + 'px';
      }
    }
  } else {
    var id = setInterval(frame, 1);
    function frame() {
      console.log('moving');
      if (pos == window.innerWidth/2 +20) {
        elem.style.left = window.innerWidth/2 + 'px';
        clearInterval(id);
      } else {
        pos++;
        elem.style.left = pos + 'px';
      }
    }
  }
}
