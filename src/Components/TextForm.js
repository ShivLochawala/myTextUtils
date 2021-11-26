import React, {useState} from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {
    const [text, setText] = useState('')
    const handleUpperClick = () =>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert('Converted to Upper Case!','success');
    }
    const handleLowerClick = () => {
        let newText = text.toLocaleLowerCase();
        setText(newText)
        props.showAlert('Converted to Lower Case!','success');
    }
    const handleCapitalizedClick = () => {
        let newText = text.replace(/\b(\w)/g, s => s.toUpperCase());
        setText(newText)
        props.showAlert('Converted to Capitalized Case!','success');
    }
    const handleCopyClick = () => {
        navigator.clipboard.writeText(text);
        props.showAlert('Copy on Clipboard!','success');
    }
    const handleRemoveSpaceClick = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(' '))
        props.showAlert('Removed Extra Spaces!','success');
    }
    const handleRemoveClick = () => {
        let newText = '';
        setText(newText);
        props.showAlert('Remove All Text!','success');
    }
    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    return (
        <>
        <div className="container my-2">
            <h1 className={`text-${props.mode === 'light'?'dark':'light'}`} >{props.heading}</h1>
            <div className="mb-3">
                <textarea className={`form-control bg-${props.mode === 'light'?'light':'dark'} text-${props.mode === 'light'?'dark':'light'}`} onChange={handleOnChange} id="myTextBox" rows="9" value={text} ></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpperClick} >Upper Case</button>
            <button disabled={text.length===0} className="btn btn-secondary mx-2 my-2" onClick={handleLowerClick} >Lower Case</button>
            <button disabled={text.length===0} className="btn btn-info mx-2 my-2" onClick={handleCapitalizedClick} >Capitalized Case</button>
            <button disabled={text.length===0} className="btn btn-success mx-2 my-2" onClick={handleCopyClick} >Copy Text</button>
            <button disabled={text.length===0} className="btn btn-warning mx-2 my-2" onClick={handleRemoveSpaceClick} >Remove Extra Spaces</button>
            <button disabled={text.length===0} className="btn btn-danger mx-2 my-2" onClick={handleRemoveClick} >Remove Text</button>
        </div>
        <div className={`container text-${props.mode === 'light'?'dark':'light'}`}>
            <h2>You text Summary</h2>
            {/* <p>{text.split(' ').length>1?text.split(' ').length:'0'} Words and {text.length} Characters</p> */}
            <p>{text.split(' ').length>1?text.match(/(\w+)/g).length:'0'} Words and {text.length} Characters</p>
            <p>{0.008 * text.split(' ').length} Minutes takes to read</p>
            <h3>Preview</h3>
            <p className="text-justify">{text.length>0?text:'Nothing to preview'}</p>
        </div>
        </>
    )
}
TextForm.propTypes = {
    heading:PropTypes.string,
    mode: PropTypes.string
}