import React from "react";
import {Card} from "../../../core/molecule/Card";
import {Game} from "../../../domain/model/Game";

export const Landing: React.FC = () => {

    const game1: Game = {
        id: "1",
        name: "AnythingV3",
        description: "AnythingV3 game 1",
        img: "/images/anythingv3.png"
    }

    const game2: Game = {
        id: "2",
        name: "AnythingV3",
        description: "AnythingV3 game 2",
        img: "/images/anythingv3-2.png"
    }

    return (
        <div className={"w-full h-full min-h-screen flex justify-evenly pt-10 bg-rosewood-800"}>
            <Card game={game1}/>
            <Card game={game2}/>
        </div>
    )
}