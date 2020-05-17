chrome.runtime.onInstalled.addListener(function () {
    chrome.storage.sync.set({ jiraClass: 'ak-renderer-document' }, function () {
        console.log("ak-renderer-document");
    });
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
        chrome.declarativeContent.onPageChanged.addRules([{
            conditions: [new chrome.declarativeContent.PageStateMatcher({
                pageUrl: { hostSuffix: 'atlassian.net' },
            })],
            actions: [new chrome.declarativeContent.ShowPageAction()]
        }]);
    });
});