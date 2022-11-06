import React from 'react';
import ReactDOM from 'react-dom';
//import browser from 'webextension-polyfill';
import './index.css';
/*global chrome*/
function Content() {
  // const goToPage =()=> {
  //   let newUrl = "https://www.opera.com/zh-cn?utm_campaign=%2300%20-%20WW%20-%20Search%20-%20EN%20-%20Branded&gclid=Cj0KCQiAys2MBhDOARIsAFf1D1c3O4rlDgDfiACBEKmllzqeTS1ZutDHQ7A1wyA7I-EG6VxNb0adW98aAm4JEALw_wcB";
  //   browser.tabs.create({url:newUrl});
  // }
  
  return (
    <div className="content">
      Content
    </div>
  );
}

const app = document.createElement('div')
app.id = 'content'
document.html.appendChild(app)

ReactDOM.render(<Content />, app)

try {
    let insertScript = document.createElement('script')
    insertScript.setAttribute('type', 'text/javascript')
    insertScript.src = window.chrome.extension.getURL('insert.js')
    document.body.appendChild(insertScript)
    console.log("???")
} catch (err) {}

//browser.runtime.onMessage.addListener()
//browser.runtime.sendMessage("sfdsfs")