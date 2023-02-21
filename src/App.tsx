import './App.css'
import {Navbar} from "./core/organism/Navbar";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Landing} from "./presentation/pages/Landing/Landing";
import {MyProfile} from "./presentation/pages/MyProfile/MyProfile";
import {About} from "./presentation/pages/About/About";
import {Signup} from "./presentation/pages/Signup/Signup";
import {Signin} from "./presentation/pages/Signin/Signin";
import {UserContext} from "./core/_contexts/UserContext";
import {SupabaseUserRepositoryImpl} from "./data/repository/supabase/SupabaseUserRepositoryImpl";

const userRepositoryImpl = new SupabaseUserRepositoryImpl();

function App() {

    return (
        <UserContext.Provider value={userRepositoryImpl}>
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route index element={<Landing />}/>
                <Route path={'/my-profile'} element={<MyProfile />}/>
                <Route path={'/about'} element={<About />}/>
                <Route path={'/signup'} element={<Signup />}/>
                <Route path={'/signin'} element={<Signin />}/>
            </Routes>
        </BrowserRouter>
        </UserContext.Provider>
    )
}

export default App
