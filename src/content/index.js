import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
function Content() {
  return (
    <div className="content">
      Content
    </div>
  );
}

const app = document.createElement('div')
app.id = 'content'
document.body.appendChild(app)

ReactDOM.render(<Content />, app)

try {
    let insertScript = document.createElement('script')
    insertScript.setAttribute('type', 'text/javascript')
    insertScript.src = window.chrome.extension.getURL('insert.js')
    document.body.appendChild(insertScript)
} catch (err) {}
