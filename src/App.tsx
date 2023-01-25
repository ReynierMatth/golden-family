import './App.css'
import {Navbar} from "./core/organism/Navbar";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Landing} from "./presentation/pages/Landing/Landing";
import {MyProfile} from "./presentation/pages/MyProfile/MyProfile";
import {About} from "./presentation/pages/About/About";
import {Signup} from "./presentation/pages/Signup/Signup";

function App() {

    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route index element={<Landing />}/>
                <Route path={'/my-profile'} element={<MyProfile />}/>
                <Route path={'/about'} element={<About />}/>
                <Route path={'/signup'} element={<Signup />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
