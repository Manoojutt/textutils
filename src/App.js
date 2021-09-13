import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
//import About from './components/About';
import Alert from './components/Alert';
import React, { useState } from 'react'
//import {
 // BrowserRouter as Router,
  //Switch,
 // Route,
  
//} from "react-router-dom";

function App() {
 const [mode, setMode] = useState('light');
 const [alert, setAlert] = useState(null);
 const showAlert=(message,type)=>
 {
setAlert(
  {
    msg:message,
    type:type
  }
)
 }
 const toggleMode=()=>
 {
   if(mode==='light')
   {
     setMode('dark');
     document.body.style.backgroundColor='#042743';
     showAlert("Dark Mode has been Enable","Success"); 
   }
   else{
     setMode('light');
     document.body.style.backgroundColor='white';
     showAlert("light Mode has been Enable","Success"); 
   }
 }
  return (
    <>
{/*<Router>*/}
<Navbar title="Textutils" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>

<div className="container my-3">
      {/*<Switch>*/}
                  {/*<Route path="/about">*/}
                   {/* <About />*/}
                 {/* </Route>*/}
                  {/*<Route path="/">*/}
                  <Textform heading="Enter the text to analyze" mode={mode}/>
                  {/*</Route>*/}
        {/*</Switch>*/}
        </div>
        {/*</Router>*/}


    </>
    
  );
}

export default App;
