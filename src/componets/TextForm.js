import React, { useState } from "react";

export default function TextForm(props) {
  const convertUpListener = () => {
    console.log("clicked");
    const newTextUpper = text.toLocaleUpperCase();
    setText(newTextUpper);
    props.showAlert("Changed To Upper Case", " Success");
  };

  const toLowerCase = () => {
    console.log("lowerCase clicked");
    const newTextLower = text.toLowerCase();
    setText(newTextLower);
    props.showAlert("Changed To Lower Case", " Success");
  };

  const clearText = () => {
    console.log("deleted");
    const deletion = " ";
    setText(deletion);
    props.showAlert("Text Cleared", " Success");
  };

  const clicktOnchange = (event) => {
    console.log("clicked at text");
    setText(event.target.value);
  };
  const[text,setText]=useState("Enter text here");

  
  //text="enter the name"  WRONG way
  //setText("enter the name")  RIGHT way

  return (
    <>
      <div className="container my-4" style={{color:props.mode==="dark"?"white":"black"}} >
      
        <div className="mb-3">
          <h1>{props.heading}</h1>
          <textarea
            className="form-control"
            value={text}
            onChange={clicktOnchange}
           style={{backgroundColor:props.mode==="dark"?"grey":"white",color:props.mode==="dark"?"white":"black" }}
            
            id="boxId"
            rows="8"
          ></textarea>
        </div>
        <button
          type="button"
          className="btn btn-primary mx-3"
          onClick={convertUpListener}
        >
          Convert into UpperCase
        </button>
        <button
          type="button"
          className="btn btn-primary mx-3"
          onClick={toLowerCase}
          
        >
          Convert into LowerCase
        </button>
        <button type="button" className="btn btn-primary " onClick={clearText}>
          Clear
        </button>
      </div>

      <div className="container my-3 " style={{color:props.mode==="dark"?"white":"black"}} >
        <h2>Your Text Summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters.
        </p>
        <p>{0.008 * text.split(" ").length} words reads per minute.</p>

        <h2>Text Summary</h2>
        <p>{text.length > 0 ? text : "Enter your text"}</p>

        
      </div>
    </>
  );
}
