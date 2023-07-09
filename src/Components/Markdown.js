import React from 'react'
import './Markdown.css'
export default function Markdown() {
  return (
    <div className="container">
      <div className="editor-box">
          <p className="heading-editor ">Editor</p>
          <textarea name="editor" id="editor" cols="64" rows="10" onkeyup="updatePreview()"
            className="textarea"/>
      </div>
      <div className="preview-box">
        <p className="heading-preview">Output</p>
        <div id="preview"></div>
      </div>
  </div>
  )
}



