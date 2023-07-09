import React from 'react'
import './Markdown.css'
import { marked } from 'marked';



export default function Markdown() {
    
    const onTyping = () =>{
        const editorText = document.getElementById("editor")
        const previewText = document.getElementById("preview")
        previewText.innerHTML = marked.parse(editorText.value)
        
        console.log()
    }
    



  return (
    <div className="container">
      <div className="editor-box">
          <p className="heading-editor ">Editor</p>
          <textarea name="editor" id="editor" cols="64" rows="10" 
            className="textarea" onKeyUp={onTyping}/>
      </div>
      <div className="preview-box">
        <p className="heading-preview">Output</p>
        <div id="preview"></div>
      </div>
  </div>
  )
}



