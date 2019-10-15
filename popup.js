window.addEventListener('DOMContentLoaded', (event) => {
  let params = {
        active: true,
        currentWindow: true
      }
      chrome.tabs.query(params, gotTabs);

      function gotTabs(tabs) {
        console.log("got tabs");
        console.log(tabs);
        // send a message to the content script
        let msg = {
          txt: "give me words"
        };
        chrome.tabs.sendMessage(tabs[0].id, msg, function(response) {
            words = response
            console.log(words);
        });
        console.log('sent');
      }
    document.getElementById("nextSlide").addEventListener("click", nextSlide);
    document.getElementById("flip").addEventListener("click", flip);
});
function nextSlide() {
    document.getElementById("p1").innerHTML = "blipblop";
}
function flip() {
    document.getElementById("p1").innerHTML = "blorp";
}