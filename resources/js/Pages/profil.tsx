import Contact from "@/Components/contact";
import Navbar from "@/Components/navbar";
import { title } from "process";

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

const profil = [
    {
        title: "Nama Lembaga",
        descNav: false,
        desc: "Lembaga Pelatihan Kerja Seroja Bengkalis.",
    },
    {
        title: "Gambaran Umum",
        descNav: false,
        desc: "Lembaga Seroja merupakan lembaga yang bergerak di bidang layanan kursus seperti tatarias pengantin, tata kecantikan rambut dan tata kecantikan kulit.",
    },
    {
        title: "Visi",
        descNav: false,
        desc: "Menjadi LKP Tatarias Pengantin Terbaik di Riau Pada Tahun 2025",
    },
    {
        title: "Misi",
        descNav: true,
        desc: [
            "Memberikan pelatihan yang berkualitas pada perserta didik",
            "Menanamkan jiwa profesional, mandiri, dan bertanggung jawab pada peserta didik",
            "Meningkatkan hubungan kemitraan dengan berbagai pihak.",
            "Berpartisipasi aktif dalam berbagai ajang perlombaan.",
            "Memberikan Pelauanan Terbaik pada berbagai pihak.",
        ],
    },
    {
        title: "Nomor Induk Berusaha/ Tanggal Terbit",
        descNav: false,
        desc: "1002230072629/ 10 Februari 2023",
    },
    {
        title: "SIO SatPen Non Formal dan Informal",
        descNav: false,
        desc: "500.16.7.4/02/DPMPTSP-LPK/2023",
    },
    {
        title: "Izin Dinas Tenaga Kerja Bengkalis",
        descNav: false,
        desc: "10022300726290001",
    },
    {
        title: "Nomor Induk Lembaga Kursus",
        descNav: false,
        desc: "NPSN K5667197 ",
    },
];

export default function Profil() {
    return (
        <>
            <Navbar />
            <section className="py-8">
                <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                    <div className="flex justify-between">
                        <h1 className="inline-block pb-2 border-b-2 border-slate-700 text-2xl font-bold text-slate-700">
                            Profil
                        </h1>
                    </div>
                    <div className="max-w-screen-md mx-auto bg-white  rounded shadow-md border border-slate-300 mt-8 p-8">
                        {profil.map((i: any) => (
                            <div className=" md:px-8 mb-8" key={i.title}>
                                <h2 className="text-slate-700 text-center font-bold text-xl">
                                    {i.title}
                                </h2>
                                {i.descNav == false ? (
                                    <p className="text-center">{i.desc}</p>
                                ) : (
                                    i.desc.map((a: any, idx: any) => (
                                        <div>
                                            <p>
                                                {idx + 1}
                                                {". "}
                                                <span> {a}</span>
                                            </p>
                                        </div>
                                    ))
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <Contact />
        </>
    );
}
