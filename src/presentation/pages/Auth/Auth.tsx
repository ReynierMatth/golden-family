import {MovingBackground} from "../../../core/molecule/MovingBackground";
import React from "react";
import {Signin} from "./Signin/Signin";
import {Signup} from "./Signup/Signup";


export const Auth = () => {

    const [isSignUp, setIsSignUp] = React.useState(true)

    return (
        <div className={"relative"}>

            <MovingBackground images={["images/card1.jpg", "images/card2.jpg", "images/card3.jpg", "images/card4.jpg", "images/card1.jpg", "images/card2.jpg", "images/card3.jpg",]}
                              imagesClassName={"w-96 h-96 mx-6 rounded-lg shadow-lg"}
                              wrapperClassName={"z-0 top-50 w-full h-1/2 blur absolute"}></MovingBackground>
            {isSignUp ? <Signup setIsSignup={setIsSignUp}/> : <Signin setIsSignup={setIsSignUp}/>}

        </div>
    )
}