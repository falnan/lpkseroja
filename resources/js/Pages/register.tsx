import Navbar from "@/Components/navbar";
import { Link, router } from "@inertiajs/react";
import { useState } from "react";

export default function Register() {
    const [values, setvalues] = useState({
        name: "a",
        email: "d",
        phone: "f",
    });

    function handleSubmit(e: any) {
        e.preventDefault();
        router.post("/daftar", values);
    }
    return (
        <>
            <Navbar />
            <main className="py-14">
                <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
                    <div className="max-w-lg mx-auto space-y-3 sm:text-center">
                        <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                            Formulir Pendaftaran
                        </p>
                        <p>
                            We’d love to hear from you! Please fill out the form
                            bellow.
                        </p>
                    </div>
                    <div className="mt-12 max-w-lg mx-auto">
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div className="flex flex-col items-center gap-y-5 gap-x-6 [&>*]:w-full sm:flex-row">
                                <div>
                                    <label className="font-medium">
                                        First name
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                                    />
                                </div>
                                <div>
                                    <label className="font-medium">
                                        Last name
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="font-medium">Email</label>
                                <input
                                    id="email"
                                    type="email"
                                    required
                                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                                />
                            </div>
                            <div>
                                <label className="font-medium">
                                    Phone number
                                </label>
                                <div className="relative mt-2">
                                    <input
                                        type="number"
                                        required
                                        className="w-full  pr-3 py-2 appearance-none bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="font-medium">Message</label>
                                <textarea
                                    required
                                    className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                                ></textarea>
                            </div>
                            <button className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150">
                                Submit
                            </button>

                            <a
                                href="https://wa.me/+6289667789303"
                                className="flex flex-row justify-center gap-2 w-full px-4 py-2 text-slate-700 font-medium border border-gray-400 hover:bg-gray-100 rounded-lg duration-150"
                            >
                                <img
                                    src="/img/whatsapp.svg"
                                    className="size-6"
                                    alt=""
                                />

                                <p>Daftar Via Whatsapp</p>
                            </a>
                        </form>
                    </div>
                </div>
            </main>
        </>
    );
}
