console.log("hello");

document.querySelector("body").addEventListener("mousedown", () => {
  chrome.runtime.sendMessage("", {
    type: "speaking",
    options: {
      id: "speak",
      title: "speakIt",
      contexts: ["selection"],
    },
  });
});
