import {useNavigate} from "react-router-dom";

export const Navbar = () => {

    const session =  JSON.parse(localStorage.getItem('session'))
    const navigate = useNavigate()

    console.log(session)

    return (
        <header
            className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-rosewood-300 text-sm py-4 dark:bg-rosewood-900 border-b-2 border-gray-400">
            <nav className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between"
                 aria-label="Global">
                <div className="flex items-center justify-between">
                    <a className="flex-none text-xl font-semibold dark:text-amber-400" href="#">Golden Family</a>
                    <div className="sm:hidden">
                        <button type="button"
                                className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                                data-hs-collapse="#navbar-collapse-with-animation"
                                aria-controls="navbar-collapse-with-animation" aria-label="Toggle navigation">
                            <svg className="hs-collapse-open:hidden w-4 h-4" width="16" height="16" fill="currentColor"
                                 viewBox="0 0 16 16">
                                <path fillRule="evenodd"
                                      d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                            </svg>
                            <svg className="hs-collapse-open:block hidden w-4 h-4" width="16" height="16"
                                 fill="currentColor" viewBox="0 0 16 16">
                                <path
                                    d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                            </svg>
                        </button>
                    </div>
                </div>
                <div id="navbar-collapse-with-animation"
                     className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block">
                    <div
                        className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:pl-5">
                        <a className="font-medium text-white" href="#" aria-current="page" onClick={() => {
                            navigate('/')
                        }}>Landing</a>
                        <a className="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500"
                          onClick={() => {
                              navigate('/my-profile')
                          }}>Mon profil</a>
                        {
                            session ? (
                                <div>Bonjour {session.user.email}</div>
                            ):(<button type="button"
                                       className="py-3 px-4 py-3 px-4 inline-flex justify-center
                                 items-center gap-2 rounded-md border font-medium bg-white
                                 text-grey-400 shadow-sm align-middle hover:bg-rosewood-900
                                  focus:outline-none transition-all text-sm
                                   dark:bg-rosewood-900 dark:hover:bg-rosewood-800 dark:border-gray-400 dark:text-gray-400
                                   dark:hover:text-white dark:hover:border-white"
                                       onClick={() => {
                                           navigate('/signup')
                                       }}>
                                Signup
                                <svg className="w-2.5 h-auto" width="17" height="16" viewBox="0 0 17 16" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd"
                                          d="M1 7C0.447715 7 -3.73832e-07 7.44771 -3.49691e-07 8C-3.2555e-07 8.55228 0.447715 9 1 9L13.0858 9L7.79289 14.2929C7.40237 14.6834 7.40237 15.3166 7.79289 15.7071C8.18342 16.0976 8.81658 16.0976 9.20711 15.7071L16.0303 8.88388C16.5185 8.39573 16.5185 7.60427 16.0303 7.11612L9.20711 0.292893C8.81658 -0.0976318 8.18342 -0.0976318 7.79289 0.292893C7.40237 0.683417 7.40237 1.31658 7.79289 1.70711L13.0858 7L1 7Z"
                                          fill="currentColor"/>
                                </svg>
                            </button>)
                        }


                    </div>
                </div>
            </nav>
        </header>
    )

}