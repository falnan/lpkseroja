export default function Program() {
    const features = [
        {
            icon: (
                <svg
                    className="size-4 fill-indigo-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 512"
                >
                    <path d="M160 64c0-11.8-6.5-22.6-16.9-28.2s-23-5-32.8 1.6l-96 64C-.5 111.2-4.4 131 5.4 145.8s29.7 18.7 44.4 8.9L96 123.8V416H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h96 96c17.7 0 32-14.3 32-32s-14.3-32-32-32H160V64z" />
                </svg>
            ),
            title: "Tatarias Pengantin",
            desc: "Adapun sub kategorinya adalah: Gaun panjang, gaun panjang berkerudundg, modifikasi rias pengantin muslim, modifikasi rias pengantin melayu, bridal make up artist.",
        },
        {
            icon: (
                <svg
                    className="size-4 fill-indigo-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                >
                    <path d="M142.9 96c-21.5 0-42.2 8.5-57.4 23.8L54.6 150.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L40.2 74.5C67.5 47.3 104.4 32 142.9 32C223 32 288 97 288 177.1c0 38.5-15.3 75.4-42.5 102.6L109.3 416H288c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9L200.2 234.5c15.2-15.2 23.8-35.9 23.8-57.4c0-44.8-36.3-81.1-81.1-81.1z" />
                </svg>
            ),
            title: "Tata Kecantikan Kulit",
            desc: "Adapun sub kategorinya adalah: facial, make up, body massage, eyelash extantion, manicure pedicure, nail art.",
        },
        {
            icon: (
                <svg
                    className="size-4 fill-indigo-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                >
                    <path d="M0 64C0 46.3 14.3 32 32 32H272c13.2 0 25 8.1 29.8 20.4s1.5 26.3-8.2 35.2L162.3 208H184c75.1 0 136 60.9 136 136s-60.9 136-136 136H105.4C63 480 24.2 456 5.3 418.1l-1.9-3.8c-7.9-15.8-1.5-35 14.3-42.9s35-1.5 42.9 14.3l1.9 3.8c8.1 16.3 24.8 26.5 42.9 26.5H184c39.8 0 72-32.2 72-72s-32.2-72-72-72H80c-13.2 0-25-8.1-29.8-20.4s-1.5-26.3 8.2-35.2L189.7 96H32C14.3 96 0 81.7 0 64z" />
                </svg>
            ),
            title: "Tata Kecantikan Rambut",
            desc: "Adapun sub kategorinya adalah: level II dan level III.",
        },
    ];

    return (
        <section className="py-14">
            <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
                <div className="max-w-xl space-y-3 text-center mx-auto">
                    <h3 className="text-indigo-600 font-semibold">
                        LPK Seroja
                    </h3>
                    <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        Program LPK Seroja
                    </p>
                    <p>
                        LPK Seroja memiliki beberapa program kursus dan
                        pelatihan yang bisa diikuti, program reguler, private
                        class dan pelatihan banper/bantuan pemerintah (S&K
                        berlaku sesuai kriteria).
                    </p>
                </div>
                <div className="mt-12">
                    <ul className="grid gap-x-12 divide-y sm:grid-cols-2 sm:gap-y-8 sm:divide-y-0 lg:divide-x lg:grid-cols-3 lg:gap-x-0">
                        {features.map((item, idx) => (
                            <li
                                key={idx}
                                className={`feature-${
                                    idx + 1
                                } space-y-3 py-8 lg:px-12 sm:py-0 flex flex-col items-center text-center`}
                            >
                                <div className="w-12 h-12 border text-indigo-600 rounded-full flex items-center justify-center">
                                    {item.icon}
                                </div>
                                <h4 className="text-lg text-gray-800 font-semibold">
                                    {item.title}
                                </h4>
                                <p>{item.desc}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
