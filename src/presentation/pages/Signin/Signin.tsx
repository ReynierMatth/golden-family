import React, {useContext, useState} from "react";
import {UserContext} from "../../../core/_contexts/UserContext";
import {useNavigate} from "react-router-dom";
import {LoginUseCase} from "../../../domain/usecase/user/login.usecase";
import {ImageCarousel} from "../../../core/molecule/Carousel";




export const Signin: React.FC = () => {

    const userRepository = useContext(UserContext);
    const loginUseCase: LoginUseCase = new LoginUseCase(userRepository)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()


    const emailChange = (e: any) => {
        setEmail(e.target.value)
    }





    const passwordChange = (e: any) => {
        setPassword(e.target.value)
    }


    const handleSubmit =async (e: any) => {
        e.preventDefault()
        loginUseCase.handle(email, password)

    }


    return (
        <>
        <ImageCarousel
            images={["/card1.jpg", "/card2.jpg", "/card3.jpg", "/card4.jpg"]}
            carouselClassName="absolute z-10 top-50 h-96 w-60"
            imageClassName="rounded-lg shadow-lg h-80 absolute w-60"
        />
        <form className={"bg-navi-800 z-20 flex justify-center  min-h-screen w-full h-full p-5"} onSubmit={handleSubmit}>
            <div className={"h-full flex p-5 flex-col items-center justify-center  border-2 rounded bg-navi-900 border-gray-400 "}>
                <h1 className={"pt-5 text-2xl text-gray-400"}>Welcome back to Deckerr</h1>

                <div className={"relative mt-10"}>
                    <label htmlFor="with-corner-hint"
                           className="block  ml-1 text-sm font-medium mb-2 dark:text-white">Email</label>

                    <input type="email"
                           className="py-3 px-4 w-96 block w-full border focus:ring-gray-200 dark:focus:ring-gray-200 dark:border-gray-200  rounded-md text-sm dark:bg-navi-900  dark:text-gray-400"
                           placeholder="Email" onChange={emailChange}/>
                </div>
                <div className={"relative mt-5"}>
                    <label htmlFor="with-corner-hint"
                           className="block   ml-1 text-sm font-medium mb-2 dark:text-white">Password</label>
                    <input type="password"
                           className="py-3 px-4 w-96 block w-full border focus:ring-gray-200 dark:focus:ring-gray-200 dark:border-gray-200  rounded-md text-sm dark:bg-navi-900  dark:text-gray-400"
                           placeholder="Password" onChange={passwordChange}/>
                </div>


                <div className={"relative mt-2 ml-1 mr-auto text-white text-sm font-medium mb-2 underline hover:no-underline "}>
                    <a onClick={() => navigate('/signup')}>Not registered yet ?</a>
                </div>
                <button
                    type="submit"
                    className="mt-5 py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border-2 border-yellow-200 font-semibold text-yellow-500 hover:text-white hover:bg-yellow-500 hover:border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-200 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
                    Sign in
                </button>
            </div>
        </form>
        </>
    )
}