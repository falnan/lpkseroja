import AfterHero from "@/Components/afterHero";
import Blog from "@/Components/blog";
import Contact from "@/Components/contact";
import Footer from "@/Components/footer";
import Graduated from "@/Components/graduated";
import Hero from "@/Components/hero";
import { IconArrowForward, IconFile } from "@/Components/icons";
import Navbar from "@/Components/navbar";
import Program from "@/Components/program";
import Team from "@/Components/team";
import Toast from "@/Components/toast";
import { Link, usePage } from "@inertiajs/react";
import { useState } from "react";
import Swal from "sweetalert2";

const stats = [
    {
        data: "400+",
        title: "2016-2020",
    },
    {
        data: "600+",
        title: "2021-2023",
    },
    {
        data: "1000+",
        title: "Total",
    },
];

const information = [
    {
        name: "Kebijakan dan Privasi",
        link: "https://drive.google.com/file/d/1g_Y1iHLqQA5B44znswi5--Dmux156K94/view?usp=sharing",
    },
    {
        name: "Struktur Organisasi",
        link: "#",
    },
    {
        name: "Persyaratan Mengikuti Pelatihan",
        link: "#",
    },
    {
        name: "Pengumuman",
        link: "#",
    },
];

const team = [
    {
        avatar: "/img/person/tina.png",
        name: "Titin Agustina, S.Pd.I",
        title: "Pimpinan",
    },
    {
        avatar: "/img/person/sekretaris.jpg",
        name: "Santi Nurul Fianti, M.Kom",
        title: "Sekretaris",
    },
    {
        avatar: "/img/person/bendahara.jpg",
        name: "Zakiatul Munawaroh, A.Md",
        title: "Bendahara",
    },
    {
        avatar: "/img/person/ridho.jpeg",
        name: "Muhammad Ridho Nosa, S.T, M.Kom",
        title: "Instruktur Kewirausahaan",
    },
    {
        avatar: "/img/person/elly.jpeg",
        name: "Ellyonora, S.E",
        title: "Instruktur Tata Rias Pengantin",
    },
    {
        avatar: "/img/person/erik.jpeg",
        name: "Erik Maunanta",
        title: "Instruktur Tata Rias Pengantin",
    },

    {
        avatar: "/img/avatar.png",
        name: "Eka Fajri, S.Pd",
        title: "Instruktur Tata Rias Pengantin",
    },
    {
        avatar: "/img/avatar.png",
        name: "Ernawati",
        title: "Instruktur Tata Rias Pengantin",
    },
    {
        avatar: "/img/person/ayu.jpeg",
        name: "Ayu Masitoh",
        title: "Asisten Instruktur",
    },
    {
        avatar: "img/avatar.png",
        name: "Muhammad Iqbal",
        title: "Asisten Instruktur",
    },
    {
        avatar: "img/avatar.png",
        name: "Zaid Al Afif",
        title: "Operator",
    },
    {
        avatar: "img/avatar.png",
        name: "Sri Rezeki Maharani",
        title: "Operator",
    },
];

export default function Home({ blog }: any) {
    const { flash }: any = usePage().props;
    {
        flash == "success" &&
            Swal.fire({
                title: "Berhasil Mendaftar!",
                text: "Kami akan segera menghubungi!",
                icon: "success",
            });
    }

    const [view, setView] = useState(true);

    return (
        <>
            {view && (
                <Toast clickForClose={() => setView(false)}>
                    Lembaga Pelatihan Kerja Seroja berkolaborasi pemerintah
                    menyediakan pelatihan gratis untuk masyarakat. Tertarik?
                    <Link
                        href="/"
                        className="ml-2 font-semibold underline duration-150 hover:text-indigo-100"
                    >
                        Klik di sini
                    </Link>
                </Toast>
            )}
            <Navbar />
            <div className="pt-8 pb-16">
                <Hero>
                    <div className="flex-none space-y-5 px-4 sm:max-w-lg md:px-0 lg:max-w-xl">
                        <h2 className=" text-4xl text-slate-700 font-extrabold md:text-6xl">
                            LPK SEROJA
                        </h2>
                        <p>
                            Lembaga Pelatihan Kerja Seroja bergerak dibidang
                            layanan kursus dan pelatihan kecantikan seperti
                            tatarias pengantin, tata kecantikan rambut dan tata
                            kecantikan kulit.
                        </p>
                        <div className="items-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
                            <Link
                                href="/daftar"
                                className="block py-2 px-4 text-center text-white font-medium bg-indigo-600 duration-150 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg shadow-lg hover:shadow-none"
                            >
                                Daftar
                            </Link>
                            <Link
                                href="/informasi"
                                className="flex items-center justify-center gap-x-2 py-2 px-4 text-gray-700 hover:text-gray-500 font-medium duration-150 active:bg-gray-100 border rounded-lg md:inline-flex"
                            >
                                Dapatkan Informasi
                                <IconArrowForward fillColor="fill-slate-700" />
                            </Link>
                        </div>
                    </div>
                </Hero>
            </div>

            <Graduated stats={stats} />
            <Program />
            <div className="grid lg:grid-cols-3">
                <div className="lg:col-span-2">
                    <Blog blog={blog.data} />
                </div>
                <div className="flex flex-col gap-8 lg:mt-8 mx-8 lg:mr-8">
                    <div className="p-4 border border-gray-300 bg-white shadow-md rounded-md">
                        <img src="/img/kegiatan.jpg" alt="" />
                    </div>

                    <div className="p-10 border border-gray-300 bg-white shadow-md rounded-md">
                        <p className="mb-4 text-xl font-bold">Informasi</p>
                        {information.map((i: any, index: any) => (
                            <div
                                key={index}
                                className="items-center flex gap-3 border-b border-gray-400 py-4"
                            >
                                <IconFile fillColor="fill-gray-400" />
                                <a href={i.link}>
                                    <p>{i.name}</p>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Team team={team} />
            <Contact />
        </>
    );
}
