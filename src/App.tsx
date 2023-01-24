import './App.css'
import {Navbar} from "./core/organism/Navbar";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route index element={<div>Home</div>}/>
                <Route path={'/my-profile'} element={<div>Mon profil</div>}/>
                <Route path={'/about'} element={<div>About</div>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
