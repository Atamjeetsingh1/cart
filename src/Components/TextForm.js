import React,{useState} from 'react'
function TextForm(props) {
  const[text,settext]=useState('');  
  function add(event)
{
  settext(event.target.value);
}
function updateh()
{
  settext(text.toUpperCase()); 
  props.showAlert("Converted to UpperCase","success");
  setTimeout(()=>{props.setAlert(null);},1000)
}function updatel()
{
  settext(text.toLowerCase());
  props.showAlert("Converted to lower Case","success")
  setTimeout(()=>{props.setAlert(null);},1000);
}function updatec()


{
  settext('');
  props.showAlert("Text Cleared","success")
  setTimeout(()=>{props.setAlert(null)},1000)
}
  return (
    <>   
  <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
  <h1>{props.heading} </h1>
   <div className="my-3">    
<textarea className="form" onChange={add} style={{backgroundColor:props.mode==='dark'?'dimgray':'white',color:props.mode==='dark'?'white':'black'}} value={text}id="exampleFormControlTextarea1" rows="8" > 
</textarea></div>
<button className='btn btn-outline-primary' onClick={updateh}>Convert to Uppercase</button>
<button className='btn btn-outline-secondary ' onClick={updatel}>Convert to Lowerercase</button>
<button className='btn btn-outline-tertiary ' onClick={updatec}>Clear</button>
</div>
<div className="container my-2" style={{color:props.mode==='dark'?'white':'black'}}>
  <h1 style={{color:'white'}}>Your text summary</h1>
  <p style={{color:'white'}}>{text.split(" ").length} words and {text.length} characters</p>
  <p style={{color:'white'}}>Time to read one word is {0.008*text.split(" ").length}Minutes </p>
  <h1>Preview</h1>
  <p style={{color:'white'}}>{text.length>0?text:'Enter something to preview it here'}</p>
</div>
</>
  )
}
export default TextForm
