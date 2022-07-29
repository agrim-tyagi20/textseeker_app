
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';

function App() {

    const [mode, setMode] = useState('light');

    const [alert, setAlert] = useState(null);

    const [setRed, reSet] = useState('light');

    const redTest = () =>{
         
        if(setRed ==='light'){
        reSet('dark');
     
        }
        else{
            setRed('Light');  
           
        }
    }

    const showAlert = (message, type) => {
        setAlert({
            msg: message,
            type: type
        })
        setTimeout(() => {
            setAlert(null);
        }, 1800);
    }

    const switchMode = () => {
        if (mode === 'light') {
            setMode('dark');
            document.body.style.backgroundColor = '#042743';
            showAlert("Dark mode has been enabled!", "success");
        }

        else {
            setMode('light');
            document.body.style.backgroundColor = 'white';
            showAlert("Light mode has been enabled!", "success");
        }
    }
    return (
        <>
            <Navbar title="TextSeeker" aboutText="About us" mode={mode} switchMode={switchMode} setRed={setRed} redTest={redTest} />
            <Alert alert={alert} />
            <div className="container my-3">
                <TextForm showAlert={showAlert} heading="Enter the text below" mode={mode}  />
            </div>

        </>

    );
}

export default App;
