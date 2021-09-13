import React,{useState} from 'react';

export default function Textform(props) {
    const handleUpClick = () =>
    {
        console.log("Upper case was clicked");
        let newText=text.toUpperCase();
        setText(newText);

    }
    const handleloClick = () =>
    {
        console.log("Upper case was clicked");
        let newText=text.toLowerCase();
        setText(newText);

    }
    const handleClearClick = () =>
    {
        console.log("Upper case was clicked");
        let newText='';
        setText(newText);

    }
    const handleOnChange=(event)=>
    {
        
        console.log("on change");
        setText(event.target.value);
    }
    const handleCopy=()=>
    {
        console.log("I am copy");
        var text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const handleExtraSpace=()=>
    {
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
    }
    const [text, setText] = useState('');
    return (
        <>
        <div className="container" style={{color:props.mode===`light`?`#042743`:`white`}}>
            <h1>{props.heading}</h1>
        <div className="mb-3">
        
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode===`light`?`white`:`grey`,color:props.mode===`light`?`black`:`white`}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert To Upper Case</button>
        <button className="btn btn-primary mx-1" onClick={handleloClick}>Convert To Lower Case</button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear</button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpace}>Remove Extra Space</button>
        </div>
        <div className="container my-4" style={{color:props.mode===`light`?`#042743`:`white`}}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words,{text.length} charcters </p>
        <p>{0.008*text.split(" ").length} Minutes read </p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something to preview it here"}</p>
        </div>
        </>
    )
}
