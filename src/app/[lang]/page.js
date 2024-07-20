import {getDictionary} from "@/app/[lang]/dictionaries";

export default async function Home({ params: { lang } }) {
  const dict = await getDictionary(lang)
  return (
    <main className="p-4">
        {lang}
        <h2 className="text-6xl font-bold mb-2">Delivering quality software solutions.</h2>
        <p className="text-4xl font-light">Based out of Fremont, MI. 5+ experience working on the frontend and backend of web solutions</p>
    </main>
  );
}
