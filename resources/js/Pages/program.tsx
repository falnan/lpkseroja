import Contact from "@/Components/contact";
import Navbar from "@/Components/navbar";

const program = [
    {
        add: "Program 1",
        title: "Mengelola Bisnis Tatarias",
        picture: "/img/program1.jpeg",
        desc: "",
    },
    {
        add: "Program 2",
        title: "Digital Marketing",
        picture: "/img/program2.jpg",
        desc: "",
    },
];

export default function Program() {
    return (
        <>
            <Navbar />
            <section className="py-8">
                <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                    <div className="flex justify-between">
                        <h1 className="inline-block border-b-2 border-slate-700 text-2xl font-bold text-slate-700">
                            Program
                        </h1>
                    </div>
                    <ul className="grid gap-x-8 gap-y-10 mt-8 grid-cols-2">
                        {program.map((items: any, key: any) => (
                            <li className="w-full mx-auto group" key={key}>
                                <div>
                                    <img
                                        src={items.picture}
                                        loading="lazy"
                                        alt={items.title}
                                        className="w-full rounded-lg"
                                    />
                                    <div className="mt-3 space-y-2">
                                        <span className="block text-indigo-600 text-sm">
                                            {items.add}
                                        </span>
                                        <h3 className="text-lg text-gray-800 duration-150 group-hover:text-indigo-600 font-semibold">
                                            {items.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm duration-150 group-hover:text-gray-800">
                                            {items.desc}
                                        </p>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
            <Contact />
        </>
    );
}
