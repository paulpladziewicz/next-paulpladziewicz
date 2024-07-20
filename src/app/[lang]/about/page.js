import {getDictionary} from "@/app/[lang]/dictionaries";

export default async function About({params: {lang}}) {
    const dict = await getDictionary(lang)
    return (
        <main className="p-4">
            <h2 className="text-6xl font-bold mb-2">{dict.about.title}</h2>
        </main>
    );
}
