import React, { useState } from 'react'

export default function TextForm(props) {

    //function to handle click
    const handleUpClick = () => {
        //  console.log("Uppercase was clicked" + text);   //here we are getting text by user in console
        let newText = text.toUpperCase();              //converting it to uppercase in console
        setText(newText)
        props.showAlert("Converted to uppercase ", "success")                               //passing converted text to setText
    }

    const handleLowClick = () => {
        //  console.log("Uppercase was clicked" + text);   //here we are getting text by user in console
        let newText = text.toLowerCase();              //converting it to Lowercase in console
        setText(newText)                               //passing converted text to setText
    }

    const handleClearClick = () => {
        //  console.log("Uppercase was clicked" + text);   //here we are getting text by user in console
        let newText = "";              //converting it to Lowercase in console
        setText(newText)                               //passing converted text to setText
    }

    const handleCapitalClick = () => {
        //  console.log("Uppercase was clicked" + text);          
            let words = text.split(' ');  
            let newText =[] ;  
            words.forEach(element => {  
                newText.push(element[0].toUpperCase() + element.slice(1, element.length));  
            });  
            setText(newText.join(' '))
        }           

    const handleOnChange = (event) => {
        //  console.log("On Change");
        setText(event.target.value)
    }
     

    //State for textArea
    const [text, setText] = useState('Enter text here');

    return (
        <>
            <div className={`container text-${props.mode === 'light' ? '#212529' : 'light' }`}>
                {/*Setting props for heading*/}
                <h1>{props.heading} </h1>
                <div className="mb-3">
                    {/*setting State to textArea using text state and handle on click */}
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor :props.mode === 'dark' ? '#212529' : 'white', color : props.mode === 'light' ? '#212529' : 'white'}} id="myBox" rows="8"></textarea>
                </div>
                {/*Button*/}
                <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-1" onClick={handleCapitalClick}>Captalize text</button>
                <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear</button>
            </div>
            <div className={`container my-3 text-${props.mode === 'light' ? '#212529' : 'light'}`}>
                <h1>Your text Summary</h1>
                <p>{text.split(" ").length} words {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length > 0?text:"Enter text to preview it here"}</p>
            </div>
        </>
    )
}
 