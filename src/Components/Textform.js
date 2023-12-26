import React, {useState} from 'react'

export default function Textform(props) {
   const[text,setText]=useState("Enter your text here");
  const handleUpClick=()=>{
    let newText=text.toUpperCase()
    setText(newText)
    props.ShowAlert("Converted to UpperCase!","success")
  }
  const handleLwClick=()=>{
    let newText=text.toLowerCase()
    setText(newText)
    props.ShowAlert("Converted to LowerCase!","success")
  }
  const handleClearClick=()=>{
    let newText=""
    setText(newText)
    props.ShowAlert("Text Cleared","success")
  }
  const handleOnChange=(event)=>{
    setText(event.target.value)
  }
  const handleCopy=()=>{
    var text=document.getElementById("mybox")
    text.select()
      navigator.clipboard.writeText(text.value)
      props.ShowAlert("Copied to Clipboard","success")
  }
  const handleExtraSpaces=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "));
    props.ShowAlert("Extra Spaces Removed","success")
  }
  return (
    <>
    <div className='Container' style={{color: props.mode==='dark'?'white':'black'}}>
     <h1>{props.heading}</h1>
      <div className="mb-3">
          <label htmlFor="myBox" className="form-label"></label>
           <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black' }} id="mybox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick} >Convert to Uppercase</button>
      <button className="btn btn-primary mx-2" onClick={handleLwClick} >Convert to LowerCase</button>
      <button className="btn btn-primary mx-2" onClick={handleClearClick} >Clear</button>
      <button className="btn btn-primary mx-2" onClick={handleCopy} >Copy text</button>
      <button className="btn btn-primary mx-2" onClick={handleExtraSpaces} >Remove Extra Spaces</button>
    </div>

    <div className="conatainer my-3" style={{color: props.mode==='dark'?'white':'black'}}>
      <h1>Your text Summary</h1>
      <p>{text.split(" ").length} Words and {text.length} Characters</p>
      <p>{0.008* text.split(" ").length} Minutes to read this</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
  )
}
