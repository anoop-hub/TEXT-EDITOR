import { useState } from "react";
import "./App.css";
import Navbar from "./componets/Navbar";
import TextForm from './componets/TextForm' 
import Alert from "./componets/Alert";
//import About from "./componets/About";



function App() {

  const [mode,setMode]=useState("light")



  const[btn,setBtn]=useState("Enable Dark Mode")

  const[alert,setAlert]=useState(null);

  const showAlert=(msg,typ)=>{
    setAlert({
      message:msg,
      type:typ
    })

    setTimeout(() => {
      setAlert(null)
    }, 1200);
  }

  const toggle=()=>{
    if(mode==="light"){
      setMode("dark")
      document.body.style.backgroundColor="#143F6B";
      setBtn("Enable Light Mode");
      showAlert("Dark mode has been Enabled","Success");
      
    }
    else{
      setMode("light")
      document.body.style.backgroundColor="white";
      setBtn("Enable Light Mode");
      showAlert("Light mode has been Enabled","Success");
    
    }
  }

  

  return (
    <>
      <Navbar title="Text Editor" mode={mode} toggle={toggle} btn={btn}     />
      <div className="container my-3">
       <Alert alert={alert}/>
        <TextForm heading="Enter Something to write" mode={mode} showAlert={showAlert} />
        
      </div>
     
    </>
  );
}

export default App;
