import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import About from'./Components/About';
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {

  const [alert,setAlert]=useState(null)
  function showAlert(message,type)
{setAlert(
 { msg:message,type:type})
} //msg me message kr re h pass or type m type

  const[mode,setMode]= useState('light');
  
const toggleMode=()=>
{
if(mode==='light')
{
setMode('dark')
document.body.style.backgroundColor='black' 
showAlert("Light Mode has been enabled","danger")
setTimeout(()=>{setAlert(null);},1000)
document.title="TextUtils-Start" //blink hoga title is se
setInterval(()=>{document.title='TextUtils-Random'},1000)
setInterval(()=>{document.title='TextUtils-Hahah'},1500)

}
else
{
  setMode('light')
  document.body.style.backgroundColor='white'
  showAlert("Dark Mode has been enabled","success")
  setTimeout(()=>{setAlert(null)},1000)
}
}

  return (<>
      <Navbar title="Atamjeet" mode={mode} toggleMode={toggleMode}/>
    <div className="container my-3">
   <TextForm showAlert={showAlert} setAlert={setAlert} />
   <Alert alert={alert}/>
        </div>
        
   </>
  );
}
export default App;
