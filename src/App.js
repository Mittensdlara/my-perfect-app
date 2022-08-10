import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Weather from './Weather';


export default function App() {
  return (
    <div className="App">
      <div className='container'>
        
        <Weather />
         <footer>
           This project is coded by Del and it is
           <a href='https://github.com/mittensdlara/my-perfect-app' rel="noreferrer" target="_blank">Open source on Github</a>


        </footer>
       </div>
     </div>
  );
}


