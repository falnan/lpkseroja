import Contact from "@/Components/contact";
import Footer from "@/Components/footer";
import Navbar from "@/Components/navbar";

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

export default function Documentation() {
    const number = [];
    for (let i = 0; i < 8; i++) {
        number.push(i);
    }
    return (
        <>
            <Navbar />
            <section className="py-8">
                <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                    <div className="flex justify-between">
                        <h1 className="inline-block pb-2 border-b-2 border-slate-700 text-2xl font-bold text-slate-700">
                            Fasilitas
                        </h1>
                    </div>
                    <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {number.map((i: any) => (
                            <img
                                key={i}
                                className="rounded-xl"
                                src={"/img/sapras/" + (i + 1) + ".jpg"}
                                alt=""
                            />
                        ))}
                    </div>
                </div>
            </section>
            <Contact />
        </>
    );
}
