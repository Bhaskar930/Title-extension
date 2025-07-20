document.getElementById("get-title").addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, ([tab]) => {
    if (tab && tab.title) {
      document.getElementById("title").textContent = tab.title;
    } else {
      document.getElementById("title").textContent = "No title found";
    }
  });
});
