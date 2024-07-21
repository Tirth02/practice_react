import React, { useState } from 'react'

const TextForm = (props) => {
    const [text,setText] = useState("");
    const handleUpClick= () =>{
            
            let newText = text.toUpperCase();
            setText(newText);
            props.showAlert("Converted to Uppercase","success");
    }
    const handleLowClick = () =>{
        let lowText = text.toLowerCase();
        setText(lowText);
        props.showAlert("Converted to Lowercase","success");
    }
    const handleCopy = () =>{
        var text = document.getElementById("#myBox");
        text.select();
        text.setSelectionRange(0,9999);
        navigator.clipboard.writeText(text.value);
        props.showAlert("Coped to ClipBoard","success");
    }
    const handleOnChange= (event) =>{
        
        setText(event.target.value);
    }

const handleClearClick= () =>{
    setText("");
    props.showAlert("All text cleared","success");
}
  return (
    <>
    <div>
        <h1 className={`text-${props.mode === 'light' ? 'dark': 'light'} mb-4`}>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} style={{backgroundColor: props.mode === 'dark'?'#13466e':'white',color: props.mode==="dark"?'white':'#042743'}} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>  
        <button disabled={text.length===0} onClick={handleUpClick} className='btn btn-primary mx-2 '>Convert to Uppercase</button>
        <button disabled={text.length===0} onClick={handleLowClick} className='btn btn-primary mx-2'>Convert to Lowercase</button>
        <button disabled={text.length===0} onClick={handleClearClick} className='btn btn-primary mx-2'>clear </button>
        <button disabled={text.length===0} onClick={handleCopy} className='btn btn-primary mx-2' id='myBox'>Copy </button>
    </div>
    <div className="container my-2">
        <h2 className={`text-${props.mode === 'light' ? 'dark': 'light'}`}>Your Text Sumaary</h2>
        <p className={`text-${props.mode === 'light' ? 'dark': 'light'}`}>{text.split(' ').join('').length} words, {text.length} characters</p>
        <p className={`text-${props.mode === 'light' ? 'dark': 'light'}`}>{0.008 * text.split(' ').length} Minutes to read</p>
        <h2 className={`text-${props.mode === 'light' ? 'dark': 'light'}`}>Preview</h2>
        <p className={`text-${props.mode === 'light' ? 'dark': 'light'}`}>{text.length>0?text:"Nothing to Preview"}</p>
    </div>
    </>
  )
}

export default TextForm
