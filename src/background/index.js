/*global chrome*/
/*global browser*/
// chrome.tabs.query({currentWindow:true,url:"https://www.baidu.com/"},function(tabs){
//   chrome.pageAction.show(tabs[0].id);
// })
// 事件
// onChanged
// chrome.cookies.onChanged.addListener(function(object changeInfo) {...});
// 当一个cookie被设置或者删除时候触发。

import browser from 'webextension-polyfill';
import cookie from 'react-cookies';
document.cookie = "name=33sss3"
chrome.cookies.set({"name":"Sample1","url":"http://developer.chrome.com/extensions/cookies.html","value":"Dummy Data"},function (cookie){ 
     console.log(JSON.stringify(cookie)); 
     console.log(chrome.extension.lastError); 
     console.log(chrome.runtime.lastError); 
}); 
document.body.style.border = "5px solid red";
chrome.cookies.getAll({},function (cookie){ 
  console.log("ddd");
  console.log("www",cookie.length); 
  for(let i=0;i<cookie.length;i++){ 
   console.log(JSON.stringify(cookie[i])); 
  } 
 }); 
 chrome.cookies.getAllCookieStores(function (cookiestores){ 
  for(let i=0;i<cookiestores.length;i++){ 
   console.log(JSON.stringify(cookiestores[i])); 
  } 
 });
document.cookie = "username=Daisy Green";
//chrome.cookies.set({cool:'dd'}, function(cookie) {console.log(cookie)});
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
});
browser.runtime.onMessage.addListener((request) => {
  if (request.open) {
    return new Promise(resolve => {
      chrome.browserAction.getPopup({}, (popup) => {
        return resolve(popup)
      })
    })
  }
})