const program = [
    {
        add: "Program 1",
        title: "Kewirausahaan",
        picture: "/img/program2.jpg",
        desc: "",
    },
    {
        add: "Program 2",
        title: "Mengelola Bisnis Tatarias",
        picture: "/img/program1.jpeg",
        desc: "",
    },
];

export default function Blog() {
    return (
        <section className="pt-0 pb-8">
            <div className="max-w-screen-xl px-4 md:px-8">
                <ul className=" grid gap-y-10 mt-8 md:grid-cols-1">
                    {program.map((items: any, key: any) => (
                        <li className="w-full " key={key}>
                            <div className="">
                                <img
                                    src={items.picture}
                                    loading="lazy"
                                    alt={items.title}
                                    className="w-full object-fill rounded-lg"
                                />
                                <div className="mt-3 space-y-2">
                                    <span className="block text-indigo-600 text-sm lg:text-lg lg:font-bold">
                                        {items.add}
                                    </span>
                                    <h3 className="text-lg lg:text-2xl text-gray-800 duration-150 group-hover:text-indigo-600 font-semibold">
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
    );
}
