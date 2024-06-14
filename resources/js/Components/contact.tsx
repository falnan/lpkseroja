import { Link } from "@inertiajs/react";

export default () => {
    const contactMethods = [
        {
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                </svg>
            ),
            contact:
                "Jl. Utama Pangkalan Batang, RT 001, RW 001, Desa Pangkalan Batang Barat, Kecamatan Bengkalis, Kabupaten Bengkalis.",
            title: "Alamat",
        },
        {
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                </svg>
            ),
            contact: "+62 896 6778 9303",
            title: "Whatsapp",
        },
        {
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                </svg>
            ),
            contact: "lembagaserojabengkalis@gmail.com",
            title: "Email",
        },
    ];

    return (
        <main className="py-14 bg-gradient-to-tr from-indigo-700 to-indigo-600">
            <div className="max-w-screen-xl mx-auto px-4 text-white md:px-8">
                <div className="max-w-xl space-y-3">
                    <h3 className="text-white font-semibold">Kontak</h3>
                    <p className="text-white text-3xl font-semibold sm:text-4xl">
                        Butuh Bantuan?
                    </p>
                    <p>
                        Untuk informasi lebih lanjut, kunjungi kantor LPK Seroja
                        atau dengan menghubungi nomor di bawah.
                    </p>
                </div>
                <div>
                    <ul className="mt-12 flex flex-wrap gap-x-12 gap-y-6 lg:gap-x-24">
                        {contactMethods.map((item, idx) => (
                            <li key={idx}>
                                <h4 className="text-white text-lg font-medium">
                                    {item.title}
                                </h4>
                                <div className="mt-3 flex  gap-x-3">
                                    <div className="flex-none text-gray-400">
                                        {item.icon}
                                    </div>
                                    <p className="w-72">{item.contact}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className="border-t mt-8 -mb-2"></div>
                    <div className="flex flex-col mt-8 -mb-8 lg:flex-row lg:justify-between sm:flex content-center">
                        <div className="">
                            &copy; Copyright 2024{" "}
                            <span className="font-bold">
                                LPK Seroja Bengkalis,
                            </span>{" "}
                            Design by{" "}
                            <span className="font-bold">Falna Techno.</span>
                        </div>
                        <div className="flex gap-2">
                            <p> Syarat dan ketentuan</p>{" "}
                            <Link
                                className="font-bold"
                                href="/kebijakan-privasi"
                            >
                                {" "}
                                Kebijakan Privasi
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};
