/*global chrome*/
/*global browser*/
// chrome.tabs.query({currentWindow:true,url:"https://www.baidu.com/"},function(tabs){
//   chrome.pageAction.show(tabs[0].id);
// })
var browser = require("webextension-polyfill");
// Tabs.query({currentWindow:true,url:"https://www.baidu.com/"},function(tabs){
//   browser.pageAction.show(tabs[0].id);
// })
alert(browser.browserAction);
browser.browserAction.setBadgeText({text: "1234"});
browser.browserAction.setBadgeBackgroundColor({color: "red"});
chrome.runtime.onInstalled.addListener(function () {
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
      chrome.declarativeContent.onPageChanged.addRules([{
          // 运行插件运行的页面URL规则
          conditions: [
              new chrome.declarativeContent.PageStateMatcher({ pageUrl: { urlContains: 'https://www.baidu.com/' }}),
          ],
          actions: [new window.chrome.declarativeContent.ShowPageAction()]
  }])
  })
})