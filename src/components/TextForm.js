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
        <h1 className={`text-${props.mode === 'light' ? 'dark': 'light'}`}>{props.heading}</h1>
        <div className="mb-3">
            <textarea className={`form-control text-${props.mode === 'light' ? 'dark': 'light'} bg-${props.mode}` } value={text}  onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
        </div>  
        <button onClick={handleUpClick} className='btn btn-primary mx-2 '>Convert to Uppercase</button>
        <button onClick={handleLowClick} className='btn btn-primary mx-2'>Convert to Lowercase</button>
        <button onClick={handleClearClick} className='btn btn-primary mx-2'>clear </button>
    </div>
    <div className="container my-2">
        <h2 className={`text-${props.mode === 'light' ? 'dark': 'light'}`}>Your Text Sumaary</h2>
        <p className={`text-${props.mode === 'light' ? 'dark': 'light'}`}>{text.split(' ').join('').length} words, {text.length} characters</p>
        <p className={`text-${props.mode === 'light' ? 'dark': 'light'}`}>{0.008 * text.split(' ').length} Minutes to read</p>
        <h2 className={`text-${props.mode === 'light' ? 'dark': 'light'}`}>Preview</h2>
        <p className={`text-${props.mode === 'light' ? 'dark': 'light'}`}>{text}</p>
    </div>
    </>
  )
}

export default TextForm
