import './App.css'
import {Navbar} from "./core/organism/Navbar";
import {BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom';
import {Landing} from "./presentation/pages/Landing/Landing";
import {MyProfile} from "./presentation/pages/MyProfile/MyProfile";
import {About} from "./presentation/pages/About/About";
import {UserContext} from "./core/_contexts/UserContext";
import {LocalUserRepositoryImpl} from "./data/repository/local/LocalUserRepositoryImpl";
import {Auth} from "./presentation/pages/Auth/Auth";
import {useEffect} from "react";

const userRepositoryImpl = new LocalUserRepositoryImpl();

const CheckAuth: React.FC = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const user = localStorage.getItem('user');
        console.log("TROP DROLE", user)
        if (user !== null && user !== undefined) {
            navigate('/auth');
        }
    }, []);

    return null;
}

function App() {

    return (
        <UserContext.Provider value={userRepositoryImpl}>
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route index element={<Landing />}/>
                <Route path={'/my-profile'} element={<MyProfile />}/>
                <Route path={'/about'} element={<About />}/>
                <Route path={'/auth'} element={<Auth />}/>
            </Routes>
        </BrowserRouter>
        </UserContext.Provider>
    )
}

export default App
