import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import Header from './components/header';
import List from './components/archiveList';


const RouterIndex = () => {

    
    const RenderComponent = ({children}) => {
        return <div>
            <Header/>
            {children}
        </div>
    }

    return <Router>
        <Routes>
            <Route path="/"  element={<RenderComponent><Home/></RenderComponent>} />
            <Route path="/blog-list"  element={<RenderComponent><List/></RenderComponent>}/>
        </Routes>

    </Router>
}

export default RouterIndex;