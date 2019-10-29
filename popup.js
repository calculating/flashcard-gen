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
  chrome.tabs.sendMessage(tabs[0].id, msg);
  console.log('sent');
}

/*
document.getElementById("onOff").addEventListener("click", toggleOnOff);

function toggleOnOff () {
  chrome.storage.sync.set({toggle: "on"})
  console.log('toggled');
  chrome.storage.sync.get('toggle', function(data) {
    console.log(data);
  });
}
*/
