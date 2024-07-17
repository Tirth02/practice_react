import React, { useState } from 'react'

const TextForm = (props) => {
    const [text,setText] = useState("");
    const handleUpClick= () =>{
            
            let newText = text.toUpperCase();
            setText(newText);
    }
    const handleLowClick = () =>{
        let lowText = text.toLowerCase();
        setText(lowText);
    }
    const handleOnChange= (event) =>{
        
        setText(event.target.value);
}

const handleClearClick= () =>{
    setText("");
}
  return (
    <>
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea value={text}  onChange={handleOnChange} className="form-control" id="exampleFormControlTextarea1" rows="8"></textarea>
        </div>  
        <button onClick={handleUpClick} className='btn btn-primary mx-2'>Convert to Uppercase</button>
        <button onClick={handleLowClick} className='btn btn-primary mx-2'>Convert to Lowercase</button>
        <button onClick={handleClearClick} className='btn btn-primary mx-2'>clear </button>
    </div>
    <div className="container my-2">
        <h2>Your Text Sumaary</h2>
        <p>{text.split(' ').length} words, {text.length} characters</p>
        <p>{0.008 * text.split(' ').length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}

export default TextForm
