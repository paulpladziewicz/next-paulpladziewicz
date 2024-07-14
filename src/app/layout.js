import { Inter } from "next/font/google";
import "./globals.css";
import SideBar from "@/app/SideBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Paul Pladziewicz - Software Engineer",
  description: "Proven track record delivering quality software solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex">
          <div className="w-3/12">
            <SideBar />
          </div>
          <div className="w-9/12">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
