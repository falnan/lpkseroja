export default function Graduated(props: any) {
    return (
        <section className="py-16 bg-gradient-to-tr from-indigo-700 to-indigo-600">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="max-w-2xl mx-auto text-center">
                    <h3 className="text-white text-3xl font-semibold sm:text-4xl">
                        Lulusan LPK Seroja
                    </h3>
                    <p className="mt-3 text-gray-300">
                        LPK Seroja telah meluluskan lebih dari 1000 alumni yang
                        telah bekerja di berbagai tempat.
                    </p>
                </div>
                <div className="mt-12">
                    <ul className="flex flex-col gap-4 items-center justify-center sm:flex-row">
                        {props.stats.map((item: any, idx: any) => (
                            <li
                                key={idx}
                                className="w-full text-center bg-indigo-500 px-12 py-4 rounded-lg sm:w-auto"
                            >
                                <h4 className="text-4xl text-white font-semibold">
                                    {item.data}
                                </h4>
                                <p className="mt-3 text-gray-100 font-medium">
                                    {item.title}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
