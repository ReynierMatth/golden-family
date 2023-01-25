import {useEffect, useState} from "react";

export const Signup: React.FC = () => {

    const supabaseApi: string = import.meta.env.VITE_SUPABASE_API_URL
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    return (
        <div className={"bg-rosewood-800 flex justify-center  min-h-screen w-full h-full p-5"}>
            <div className={"h-full flex p-1 flex-col items-center justify-center  border-2 rounded bg-rosewood-900 border-gray-700 "}>
                <input type="text"
                       className="py-3 px-4 w-96 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                       placeholder="This is placeholder"/>
                <input type="text"
                       className="py-3 mt-5 px-4 w-96 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                       placeholder="This is placeholder"/>
            </div>
        </div>
    )
}