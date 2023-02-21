import React, {useContext, useEffect, useState} from "react";
import {UserContext} from "../../../core/_contexts/UserContext";




export const Signup: React.FC = () => {

    const userRepository = useContext(UserContext);

    const [email, setEmail] = useState('')
    const [validEmail, setValidEmail] = useState(false)
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [passwordMatch, setPasswordMatch] = useState(false)
    const [validPassword, setValidPassword] = useState(false)


    const emailChange = (e: any) => {
        setEmail(e.target.value)
        validEmailFormat(e.target.value)
    }

    const validEmailFormat = (email:string) => {
        //regex verify email format
        const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        setValidEmail(regex.test(email))

    }

    const validPasswordChange = (password:string) => {
        setValidPassword(password.length > 8)
    }

    const passwordChange = (e: any) => {
        setPassword(e.target.value)
        validPasswordChange(e.target.value)
    }

    const confirmPasswordChange = (e: any) => {
        setConfirmPassword(e.target.value)
    }

    const handleSubmit =async (e: any) => {
        e.preventDefault()
        if (validEmail && passwordMatch) {
            console.log('valid')
            userRepository.signup(email, password)
        } else {
            console.log('invalid')
        }
    }

    useEffect(() => {
        setPasswordMatch(password === confirmPassword && password !== '' && confirmPassword !== '')
    }, [confirmPassword, password])

    return (
        <form className={"bg-rosewood-800 flex justify-center  min-h-screen w-full h-full p-5"} onSubmit={handleSubmit}>
            <div className={"h-full flex p-5 flex-col items-center justify-center  border-2 rounded bg-rosewood-900 border-gray-400 "}>
                <h1 className={"pt-5 text-2xl text-gray-400"}>Welcome to Golden Family</h1>

                <div className={"relative mt-10"}>
                    <label htmlFor="with-corner-hint"
                           className="block  ml-1 text-sm font-medium mb-2 dark:text-white">Email</label>

                    <input type="email"
                       className="py-3 px-4 w-96 block w-full border focus:ring-gray-200 dark:focus:ring-gray-200 dark:border-gray-200  rounded-md text-sm dark:bg-rosewood-900  dark:text-gray-400"
                       placeholder="Email" onChange={emailChange}/>
                    {!validEmail ? (
                        <div className="absolute top-7 inset-y-0 right-0 flex items-center pointer-events-none pr-3">
                            <svg className="h-5 w-5 text-red-500" width="16" height="16" fill="currentColor"
                                 viewBox="0 0 16 16" aria-hidden="true">
                                <path
                                    d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                            </svg>
                        </div>) : (<>
                        <div className="absolute top-7 inset-y-0 right-0 flex items-center pointer-events-none pr-3">
                            <svg className="h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" width="16"
                                 height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path
                                    d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
                            </svg>
                        </div>
                    </>)
                    }
                </div>
                <div className={"relative mt-5"}>
                    <label htmlFor="with-corner-hint"
                           className="block   ml-1 text-sm font-medium mb-2 dark:text-white">Password</label>
                <input type="password"
                       className="py-3 px-4 w-96 block w-full border focus:ring-gray-200 dark:focus:ring-gray-200 dark:border-gray-200  rounded-md text-sm dark:bg-rosewood-900  dark:text-gray-400"
                       placeholder="Password" onChange={passwordChange}/>
                    {!validPassword ? (
                        <div className="absolute top-7 inset-y-0 right-0 flex items-center pointer-events-none pr-3">
                            <svg className="h-5 w-5 text-red-500" width="16" height="16" fill="currentColor"
                                 viewBox="0 0 16 16" aria-hidden="true">
                                <path
                                    d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                            </svg>
                        </div>) : (<>
                        <div className="absolute top-7 inset-y-0 right-0 flex items-center pointer-events-none pr-3">
                            <svg className="h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" width="16"
                                 height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path
                                    d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
                            </svg>
                        </div>
                    </>)
                    }
                </div>

                <div className={"relative mt-5"}>
                    <label htmlFor="with-corner-hint"
                           className="block ml-1 text-sm font-medium mb-2 dark:text-white">Confirm password</label>
                <input type="password"
                       className="py-3 px-4 w-96 block w-full border focus:ring-gray-200 dark:focus:ring-gray-200 dark:border-gray-200  rounded-md text-sm dark:bg-rosewood-900  dark:text-gray-400"
                       placeholder="Confirm Password" onChange={confirmPasswordChange}/>
                    {!passwordMatch ? (
                        <div className="absolute top-7 inset-y-0 right-0 flex items-center pointer-events-none pr-3">
                            <svg className="h-5 w-5 text-red-500" width="16" height="16" fill="currentColor"
                                 viewBox="0 0 16 16" aria-hidden="true">
                                <path
                                    d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                            </svg>
                        </div>) : (<>
                        <div className="absolute top-7 inset-y-0 right-0 flex items-center pointer-events-none pr-3">
                            <svg className="h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" width="16"
                                 height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path
                                    d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
                            </svg>
                        </div>
                    </>)
                    }
                </div>
                {
                    (passwordMatch && validPassword) ? (
                            <button
                                type="submit"
                                    className="mt-5 py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border-2 border-yellow-200 font-semibold text-yellow-500 hover:text-white hover:bg-yellow-500 hover:border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-200 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
                                Validate
                            </button>
                        )
                        :  (
                            <button  disabled type="button"
                                    className=" cursor-not-allowed mt-5 py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border-2 border-yellow-200 font-semibold text-yellow-500 hover:text-white hover:bg-yellow-500 hover:border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-200 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
                                Validate
                            </button>
                        )
                }

            </div>
        </form>
    )
}