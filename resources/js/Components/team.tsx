export default function Team(props: any) {
    return (
        <section className="py-16 lg:-mt-20">
            <div className="max-w-screen-xl mx-auto px-4 text-center md:px-8">
                <div className="max-w-xl mx-auto">
                    <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        Tim LPK Seroja
                    </h3>
                    <p className="text-gray-600 mt-3">
                        LPK Seroja berupaya menghadirkan orang-orang yang
                        berkompeten di bidangnya masing-masing agar terwujudnya
                        Lembaga Pelatihan Kerja yang berkualitas.
                    </p>
                </div>
                <div className="mt-12">
                    <ul className="grid gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                        {props.team.map((item: any, idx: any) => (
                            <li key={idx}>
                                <div className="w-20 h-20 mx-auto">
                                    <img
                                        src={item.avatar}
                                        className="w-full h-full rounded-full"
                                        alt=""
                                    />
                                </div>
                                <div className="mt-2">
                                    <h4 className="text-gray-700 font-semibold sm:text-lg">
                                        {item.name}
                                    </h4>
                                    <p className="text-indigo-600">
                                        {item.title}
                                    </p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
