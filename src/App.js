// import logo from './logo.svg';
import React,{useState} from 'react'
import './App.css';
import Alert from './Components/Alert';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
// import {
//   BrowserRouter as Router,
//   Routes, // Change Switch to Routes
//   Route,
//  // Link
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)
  const showAlert=(message,type)=>{
      setAlert({
        msg:message,
        type:type
      })
      setTimeout(()=>{
         setAlert(null)
      },1500)
  }
  const toggleMode=()=>{
      if(mode === 'light'){
        setMode('dark')
        document.body.style.backgroundColor='#042743'
        showAlert("DarkMode has been Enabled","success")
        document.title="TextUtils-DarkMode"
        // setInterval(()=>{
        //      document.title="TextUtils is Amazing"
        // },2000)
        // setInterval(()=>{
        //   document.title="Download TextUtils now"
        //  },2000)
      }
      else{
        setMode('light')
        document.body.style.backgroundColor='white'
        showAlert("LightMode has been Enabled","success")
        document.title="TextUtils-LightMode"
      }
  }
  return (
   <>
      {/* <Router>
      </Router> */}
       <Navbar title="Textutils" Abouttext="About" mode={mode} toggleMode={toggleMode}/>
       <Alert alert={alert}/>
       <div className="container">
         
       {/* <Routes>
          <Route exact path="/about" element={<About />} />
           <Route exact path="/" element={<Textform ShowAlert={showAlert} heading="Enter the text to analyze" mode={mode} />} />
        </Routes> */}

        <Textform ShowAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>
        {/* <About /> */}
       </div>
       
   </>
  );
}

export default App;
