import React, { useEffect } from 'react'
import './Markdown.css'
import { marked } from 'marked';



export default function Markdown() {

    marked.use({
      breaks: true
    })
    
    const onTyping = () =>{
        const editorText = document.getElementById("editor")
        const previewText = document.getElementById("preview")
        previewText.innerHTML = marked.parse(editorText.value)
        }

    useEffect(()=>{
        

            function setDefault() {
      const defaultText = `## Project by [Deepak-Pal](https://github.com/Deepakpal-007)
      
# Welcome to my React Markdown Previewer!


## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == \'\`\`\`\' && lastLine == '\`\`\`\'\) {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
      - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)`
          
          let editorText = document.getElementById('editor')
          let previewText = document.getElementById('preview')
          editorText.value = defaultText
          previewText.innerHTML = marked.parse(defaultText)
              }

    document.onload = setDefault()

            
        
    },[])



    



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



