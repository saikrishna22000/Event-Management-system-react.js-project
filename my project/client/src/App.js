import './App.css';
import H1 from './components/Home';
import R1 from './components/Register';
import { Route, Routes } from 'react-router-dom';
import SH from './components/Show';
import AppBar  from './components/Appbar';
import D1 from './components/Delete1';
import U1 from './components/Update';
import L1 from './components/Login1';
import { BrowserRouter } from 'react-router-dom';
import E1 from './components/Error';
import E2 from './components/Eventregister';
import EL from './components/Eventlist';


function App({store}) {
  function Page({store}){

      if (store.getState().Navreducer == "Login")
     return <L1 store={store}/>
     else if (store.getState().Navreducer == "Registration")
     return <R1 />
     else if (store.getState().Navreducer == "Show")
     if (localStorage.getItem("role") === "1" || localStorage.getItem("role") === "2")
     return <SH />
     else
       return <E1 />
     else if (store.getState().Navreducer == "Update")
     if (localStorage.getItem("role")== 1 )
     return <U1 />
     else
     return(<E1 />)
     if (store.getState().Navreducer == "Delete")
     if (localStorage.getItem("role")== 1 )
     return <D1 />
     else
     return(<E1 />)
     if (store.getState().Navreducer == "Eventregister")
     return <E2 />
     if (store.getState().Navreducer == "Eventlist")
     if (localStorage.getItem )
     return <EL />
    
       else
          return(<L1/>)
      
    
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={"image1.png"} className="App-logo" alt="logo" />
        &nbsp; &nbsp; &nbsp; &nbsp;
        <h3>
         Event Management System
        </h3>
              </header>
              <div className="App-body">
              <AppBar store={store} />
              <Page store={store} />
              </div>
    </div>
  );
}

export default App;