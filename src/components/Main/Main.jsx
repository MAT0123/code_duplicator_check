import React from 'react'
import * as monaco from 'monaco-editor'
import { useState , useRef , useEffect } from 'react';
import { toast , Toaster} from 'react-hot-toast';
import './Main.css'

function Main() {
    const [language, setLanguage] = useState('python')
    const originalModel = monaco.editor.createModel(
        `Paste some code here...`,
        language
    );
    const modifiedModel = monaco.editor.createModel(
        `Paste some code here...`,
        language
    );
     const [theme , setTheme] = useState('vs-dark')
    const editorRef = useRef(null)
    const allLanguage = monaco.languages.getLanguages()

    
    useEffect(() => {
        const editor = monaco.editor.createDiffEditor(editorRef.current , {
            languages : "javascript",
            originalEditable: true,
            automaticLayout: true,
            theme: theme,
        })
        
        const model = editor.setModel({
            original: originalModel,
            modified: modifiedModel
        })
        const decoration = editor.createDecorationsCollection([
            {
                range : new monaco.Range(1 , 1 , 1 , 1),
                options: {
                    isWholeLine: false,
                    linesDecorationsClassName : 'gutter',
                }
            }

        ])
    } , [theme , language , window.height])
  return (
    <div className='main'>
       <select className='languages' onChange={(e) => setLanguage(e.target.value)} value={language}>
             {
                  allLanguage.map(item => <option value={item.id} key={item.id}>{item.id.toUpperCase()}</option>)
             }
         </select>
         <select className='theme' onChange={(e) => setTheme(e.target.value)} value={theme}>
            
                  <option value='light'>Light</option>
                  <option value='vs-dark'>Dark</option>
         </select>

         <div ref={editorRef} style={{height : "90vh"}}>
         </div>
        

    </div>
    
  )
}

export default Main