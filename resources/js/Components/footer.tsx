import { Link } from "@inertiajs/react";
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
    { title: "Artikel", path: "/artikel", isDrapdown: false },
    { title: "Dokumentasi", path: "/dokumentasi", isDrapdown: false },
];

export default function Footer(props: any) {
    return (
        <footer className="mx-auto text-white bg-indigo-600 px-4 pt-10 pb-5 md:px-8">
            <div className="max-w-lg sm:mx-auto sm:text-center">
                <img
                    src="https://www.floatui.com/logo.svg"
                    className="w-32 sm:mx-auto bg-white rounded-lg pl-2"
                />
                <p className="leading-relaxed mt-2 text-[15px]">
                    Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s, when an unknown printer took a galley of
                    type and scrambled it to make a type specimen book.
                </p>
            </div>
            <ul className="items-center justify-center mt-8 space-y-5 sm:flex sm:space-x-4 sm:space-y-0">
                {navigation.map((item: any, idx: any) => (
                    <li key={idx} className=" hover:text-gray-800">
                        <Link href={item.href}>{item.title}</Link>
                    </li>
                ))}
            </ul>
            <div className="border-t mt-6 -mb-2"></div>
            <div className="flex mt-8 justify-between sm:flex content-center">
                <div className="mt-4 sm:mt-0">
                    &copy; Copyright 2024{" "}
                    <span className="font-bold">LPK Seroja Bengkalis,</span>{" "}
                    Design by <span className="font-bold">Falna Techno.</span>
                </div>
                <div className="mt-6 sm:mt-0"></div>
            </div>
        </footer>
    );
}
