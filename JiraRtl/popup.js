let changeDirection = document.getElementById('changeDirection');

chrome.storage.sync.get('jiraClass', function (data) {
    changeDirection.setAttribute('value', data.jiraClass);
});

changeDirection.onclick = function (element) {
    let cls = element.target.value;
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.executeScript(
            tabs[0].id,
            { code: 'var all = document.getElementsByClassName("' + cls + '"); for (var i = 0; i < all.length; i++) { all[i].style.direction = all[i].style.direction == "rtl" ? "" : "rtl"; }' });
    });
};