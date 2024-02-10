import React, {useContext, useState} from "react";
import {UserContext} from "../../../../core/_contexts/UserContext";
import {useNavigate} from "react-router-dom";
import {LoginUseCase} from "../../../../domain/usecase/user/login.usecase";
import {MovingBackground} from "../../../../core/molecule/MovingBackground";


type SignInProps = {
    setIsSignup: (bool: boolean) => void
}

export const Signin: React.FC<SignInProps> = ({setIsSignup}) => {

    const userRepository = useContext(UserContext);
    const loginUseCase: LoginUseCase = new LoginUseCase(userRepository)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

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

        <form className={"bg-navi-800 z-10 flex justify-center  min-h-screen w-full h-full p-5"} onSubmit={handleSubmit}>
            <div className={"h-full z-10 flex p-5 flex-col items-center justify-center  border-2 rounded bg-navi-900 border-gray-400 "}>
                <h1 className={"pt-5 text-2xl text-gray-400"}>Welcome back to Deckerr</h1>

                <div className={"relative z-10 mt-10"}>
                    <label htmlFor="with-corner-hint"
                           className="block  ml-1 text-sm font-medium mb-2 dark:text-white">Email</label>

                    <input type="email"
                           className="py-3 px-4 w-96 block w-full border focus:ring-gray-200 dark:focus:ring-gray-200 dark:border-gray-200  rounded-md text-sm dark:bg-navi-900  dark:text-gray-400"
                           placeholder="Email" onChange={emailChange}/>
                </div>
                <div className={"relative z-10 mt-5"}>
                    <label htmlFor="with-corner-hint"
                           className="block   ml-1 text-sm font-medium mb-2 dark:text-white">Password</label>
                    <input type="password"
                           className="py-3 px-4 w-96 block w-full border focus:ring-gray-200 dark:focus:ring-gray-200 dark:border-gray-200  rounded-md text-sm dark:bg-navi-900  dark:text-gray-400"
                           placeholder="Password" onChange={passwordChange}/>
                </div>


                <div className={"relative mt-2 ml-1 mr-auto text-white text-sm font-medium mb-2 underline hover:no-underline "}>
                    <a onClick={() => setIsSignup(true)}>Not registered yet ?</a>
                </div>
                <button
                    type="submit"
                    className="z-10 mt-5 py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border-2 border-yellow-200 font-semibold text-yellow-500 hover:text-white hover:bg-yellow-500 hover:border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-200 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
                    Sign in
                </button>
            </div>
        </form>
    )
}