// let obj = {
//   id: "speak",
//   title: "speak",
//   contexts: ["selection"],
// };
// console.log("speak");

chrome.runtime.onMessage.addListener((data) => {
  console.log("krishna");
  if (data.type === "speaking") {
    console.log("speak", data.options);
    chrome.contextMenus.create(data.options);
    chrome.contextMenus.onClicked.addListener((clickData) => {
      console.log("lll", clickData);
      if (clickData.menuItemId == "speak" && clickData.selectionText) {
        console.log("speak it");
        chrome.tts.speak(clickData.selectionText, { rate: 0.5 });
      }
    });
  }
});
