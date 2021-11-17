/*global chrome*/
/*global browser*/
// chrome.tabs.query({currentWindow:true,url:"https://www.baidu.com/"},function(tabs){
//   chrome.pageAction.show(tabs[0].id);
// })
import browser from 'webextension-polyfill';
browser.notifications.create({
  type: "basic",
  iconUrl: "./images/logo.png",
  title: "Tabs reloaded",
  message: "Your tabs have been reloaded",
});
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