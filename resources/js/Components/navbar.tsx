import { Link, router } from "@inertiajs/react";
import { useEffect, useState } from "react";
import Button from "./button";

const navigation = [
    {
        title: "Home",
        path: "/",
        isDrapdown: false,
    },
    {
        title: "Profil",
        path: "/profil",
        isDrapdown: false,
    },
    { title: "Program", path: "/program", isDrapdown: false },
    { title: "Fasilitas", path: "/fasilitas", isDrapdown: false },
];

export default function Navbar(props: any) {
    const [state, setState] = useState(false);
    const [drapdownState, setDrapdownState] = useState({
        isActive: false,
        idx: null,
    });

    useEffect(() => {
        document.onclick = (e: any) => {
            const target = e.target;
            if (!target.closest(".nav-menu"))
                setDrapdownState({ isActive: false, idx: null });
        };
    }, []);

    return (
        <>
            <nav
                className={`shadow-md relative z-20 bg-white w-full md:static md:text-sm md:border-none ${
                    state ? "shadow-lg rounded-b-xl md:shadow-none" : ""
                }`}
            >
                <div className="items-center gap-x-14 px-4 max-w-screen-xl mx-auto md:flex md:px-8">
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <div className="flex flex-row items-center">
                            <Link href="/">
                                <img
                                    className="size-16"
                                    src="/img/logo.jpeg"
                                    alt="Float UI logo"
                                />
                            </Link>
                            <div className="ml-1 font-bold text-slate-600 text-2xl leading-5">
                                LPK <br />
                                <span> Seroja</span>
                            </div>
                        </div>
                        <div className="md:hidden">
                            <button
                                className="text-gray-500 hover:text-gray-800"
                                onClick={() => setState(!state)}
                            >
                                {state ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="w-6 h-6"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm8.25 5.25a.75.75 0 01.75-.75h8.25a.75.75 0 010 1.5H12a.75.75 0 01-.75-.75z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                    <div
                        className={`nav-menu flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                            state ? "block" : "hidden"
                        }`}
                    >
                        <ul className="space-y-6 md:flex md:justify-end md:space-x-4 md:space-y-0 ">
                            {navigation.map((item: any, idx: any) => {
                                return (
                                    <li key={idx}>
                                        <Link
                                            href={item.path}
                                            className="block p-2 rounded-md hover:bg-slate-300 text-gray-700 hover:text-white"
                                        >
                                            {item.title}
                                        </Link>
                                    </li>
                                );
                            })}
                            {/* <div className="flex-1 items-center justify-end gap-x-6 space-y-3 md:flex md:space-y-0">
                                <li>
                                    <Button
                                        onClick={() => router.get("/daftar")}
                                    >
                                        Daftar
                                    </Button>
                                </li>
                            </div> */}
                        </ul>
                    </div>
                </div>
            </nav>
            {state ? (
                <div
                    className="z-10 fixed top-0 w-screen h-screen bg-black/20 backdrop-blur-sm md:hidden"
                    onClick={() => setState(false)}
                ></div>
            ) : (
                ""
            )}
        </>
    );
}
