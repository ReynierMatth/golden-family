import {Game} from "../../domain/model/Game";

type Props = {
    game: Game
}

export const Card = ({game}: Props) => {
    return (
        <a className="flex flex-col group max-h-64 bg-white border shadow-sm rounded-xl overflow-hidden hover:shadow-lg transition dark:bg-navi-900 dark:border-gray-700 dark:shadow-slate-700/[.7]"
           href="#">
            <div className="relative pt-[50%] sm:pt-[60%] lg:pt-[80%] rounded-t-xl overflow-hidden">
                <img
                    className="w-full h-full  absolute top-0 left-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-t-xl"
                    src={game.img} alt="Image Description"/>
            </div>
            <div className="p-4 md:p-5">
                <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                    {game.name}
                </h3>
                <p className="mt-1 text-gray-800 dark:text-gray-400">
                    {game.description}
                </p>
            </div>
        </a>
    )
}