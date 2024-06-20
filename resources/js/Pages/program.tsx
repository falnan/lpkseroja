import Contact from "@/Components/contact";
import Footer from "@/Components/footer";
import Navbar from "@/Components/navbar";
import { Link, router } from "@inertiajs/react";
import { useState } from "react";

export default function Program({ program }: any) {
    const [values, setvalues] = useState({ search: "" });
    function handleSubmit(e: any) {
        e.preventDefault();
        router.get("/artikel", values);
    }
    return (
        <>
            <Navbar />
            <section className="py-8">
                <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                    <div className="flex justify-between">
                        <h1 className="inline-block border-b-2 border-slate-700 text-2xl font-bold text-slate-700">
                            Artikel
                        </h1>
                        <form
                            onSubmit={handleSubmit}
                            className="items-center justify-center gap-3 sm:flex"
                        >
                            <div className="relative">
                                <input
                                    onChange={(e: any) =>
                                        setvalues(() => ({
                                            search: e.target.value,
                                        }))
                                    }
                                    id="search"
                                    type="text"
                                    placeholder="Ketik di sini"
                                    className="w-full pl-4 pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg sm:max-w-xs"
                                />
                            </div>
                            <button className="block w-full mt-3 py-3 px-6 font-medium text-sm text-center text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 active:shadow-none rounded-lg shadow sm:mt-0 sm:w-auto">
                                Cari
                            </button>
                        </form>
                    </div>
                    {/* <div className="space-y-5 sm:text-center sm:max-w-md sm:mx-auto">
                        <h1 className="text-gray-800 text-3xl font-extrabold sm:text-4xl">
                            Artikel LPK Seroja
                        </h1>
                        <p className="text-gray-600">
                            Blogs that are loved by the community. Updated every
                            hour.
                        </p>
                        <form
                            onSubmit={(e) => e.preventDefault()}
                            className="items-center justify-center gap-3 sm:flex"
                        >
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Ketik di sini"
                                    className="w-full pl-4 pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg sm:max-w-xs"
                                />
                            </div>
                            <button className="block w-full mt-3 py-3 px-6 font-medium text-sm text-center text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 active:shadow-none rounded-lg shadow sm:mt-0 sm:w-auto">
                                Cari
                            </button>
                        </form>
                    </div> */}
                    <ul className="grid gap-x-8 gap-y-10 mt-8 sm:grid-cols-2 lg:grid-cols-3">
                        {program.data.map((items: any, key: any) => (
                            <li
                                className="w-full mx-auto group sm:max-w-sm"
                                key={key}
                            >
                                <Link
                                    href={`artikel/${items.id}/${items.slug}`}
                                >
                                    <img
                                        src={`img/article/${items.picture}.jpg`}
                                        loading="lazy"
                                        alt={items.title}
                                        className="object-fill h-60 w-96 rounded-lg"
                                    />
                                    <div className="mt-3 space-y-2">
                                        <span className="block text-indigo-600 text-sm">
                                            {items.author}
                                        </span>
                                        <h3 className="text-lg text-gray-800 duration-150 group-hover:text-indigo-600 font-semibold">
                                            {items.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm duration-150 group-hover:text-gray-800">
                                            {items.body}
                                        </p>
                                    </div>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
            <Contact />
        </>
    );
}
