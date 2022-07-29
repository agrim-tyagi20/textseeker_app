import React, { useState } from 'react';


export default function TextForm(props) {

  const handleUpClick = () => {

    //console.log("Uppercase was clicked")
    let newText = tst.toUpperCase();
    setText(newText)
    props.showAlert("Converted to uppercase!", "success");
  }

  const handleLowClick = () => {
    let loText = tst.toLowerCase();
    setText(loText)
    props.showAlert("Converted to lowercase!", "success");

  }

  const handleOnClear = () => {
    let clt = '';
    setText(clt)
    props.showAlert("Text Cleared!", "success");
  }

  const handleOnCopy = () => {
    let newText = document.getElementById("myBox");
    newText.select();
    navigator.clipboard.writeText(newText.value);
    props.showAlert("Text Copied!", "success");
  }

  const isOnChange = (event) => {

    //console.log("on change")
    setText(event.target.value);
  }


    /*let newText =tst.charAt(0).toUpperCase() + tst.slice(1);

    setText(newText);
  }*/
 
  const handleOnSpace = () => {
    let newText = tst.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces Removed!", "success");
  }
  const [tst, setText] = useState('');
  //setText ("vfhjvhvvhjjh");
  return (
    <>
      <div className="container" style={{ color: props.mode === 'light' ? '#042743' : 'white' }}>
        <h1>{props.heading}  </h1>
        <div className="mb-3">

          <textarea className="form-control" value={tst} onChange={isOnChange} style={{
            backgroundColor: props.mode === 'dark' ? '#03121e' : 'white',
            color: props.mode === 'dark' ? 'white' : '#042743'
          }} id="myBox" rows="9"></textarea>
        </div>
        <button  className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button  className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleOnSpace}>Remove Extra Spaces</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleOnClear}>Clear Text</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleOnCopy}>Copy Text</button>
        
     
     





      </div>
      <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
        <h1>Text Summary</h1>
        <p> {tst.split(" ").filter((element)=>{return element.length!==0}).length} words and {tst.length} characters</p>
        <h2>Preview</h2>
        <p>{tst}</p>
      </div>
    </>
  )
}
