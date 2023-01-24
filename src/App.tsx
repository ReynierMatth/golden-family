import './App.css'
import {Navbar} from "./core/organism/Navbar";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Landing} from "./presentation/pages/Landing/Landing";
import {MyProfile} from "./presentation/pages/MyProfile/MyProfile";
import {About} from "./presentation/pages/About/About";

function App() {

    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route index element={<Landing />}/>
                <Route path={'/my-profile'} element={<MyProfile />}/>
                <Route path={'/about'} element={<About />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
