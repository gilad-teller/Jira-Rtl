let cls = document.getElementById('jiraClass');
let btn = document.getElementById('btnSave');
chrome.storage.sync.get('jiraClass', function (data) {
    cls.setAttribute('value', data.jiraClass);
});
btn.addEventListener('click', function () {
    chrome.storage.sync.set({ jiraClass: cls.value }, function () {
        console.log(cls.value);
    })
});