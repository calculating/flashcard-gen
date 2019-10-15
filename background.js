chrome.commands.onCommand.addListener(function(command) {
  console.log('Command:', command);
  if (command == "toggle-add-words") {
    console.log('all good');
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      console.log('all gooder');
      let msg = {
        txt: "toggle"
      }
      chrome.tabs.sendMessage(tabs[0].id, msg);
      });
  }
});
