import { BrowserRouter, Routes, Route } from 'react-router-dom';
import R1 from './Register';
import Login from './Delete1';
import SH from './Show';
import H1 from './Home';
import Error from "./Error";
function Page({store}) {
     if (store.getState().Navreducer == "Login")
        return <Login  store={store} />
     else if (store.getState().Navreducer == "Registeration")
     return <R1 />
     else if (store.getState().Navreducer == "Show")
     if (localStorage.getItem("role")== 1 )
     return <SH /> 
     else
     return <Error /> 
     else
       return(<Login />)

  }
  <Route path='/log' element={<Login store={store}/>} />
  </Routes>

  export default Page