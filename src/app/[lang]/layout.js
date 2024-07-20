import { Inter } from "next/font/google";
import "./globals.css";
import SideBar from "@/app/[lang]/SideBar";
import {getDictionary} from "@/app/[lang]/dictionaries";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Paul Pladziewicz - Software Engineer",
  description: "Proven track record delivering quality software solutions.",
};

export default async function RootLayout({ params: { lang }, children }) {
  const dict = await getDictionary(lang)
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex">
          <div className="w-3/12">
            <SideBar dict={dict} />
          </div>
          <div className="w-9/12">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
