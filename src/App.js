import React from 'react';
import './App.css';
import RouterIndex from '../src/router';
import { Provider } from "react-redux";
import store from "./redux/store"
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';


function App() {
  return (
    <div className='h-100 gradient-custom-2'>
       <Provider store={store}>
        <RouterIndex/>
      </Provider>
   </div>
  );
}

export default App;
