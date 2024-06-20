import { Link } from "@inertiajs/react";
import { IconArrowForward } from "./icons";

export default function Blog(props: any) {
    return (
        <section className="pt-0 pb-8">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <ul className="grid gap-x-8 gap-y-10 mt-8 md:grid-cols-2">
                    {props.blog.map((items: any, key: any) => (
                        <li
                            className="w-full mx-auto group sm:max-w-sm"
                            key={key}
                        >
                            <Link href={`/artikel/${items.id}/${items.slug}`}>
                                <img
                                    src={`/img/article/${items.picture}.jpg`}
                                    loading="lazy"
                                    alt={items.title}
                                    className="w-full h-72 object-fill rounded-lg"
                                />
                                <div className="mt-3 space-y-2">
                                    <span className="block text-indigo-600 text-sm">
                                        {items.author}
                                    </span>
                                    <h3 className="text-lg text-gray-800 duration-150 group-hover:text-indigo-600 font-semibold">
                                        {items.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm duration-150 group-hover:text-gray-800">
                                        {items.body}
                                    </p>
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <Link
                href="/artikel"
                className="mt-8 mr-10 flex justify-end items-center gap-2"
            >
                <p className="text-indigo-600">Lihat lebih banyak artikel</p>
                <IconArrowForward fillColor="fill-indigo-600" />
            </Link>
        </section>
    );
}
