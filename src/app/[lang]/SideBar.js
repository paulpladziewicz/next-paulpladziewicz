import Link from "next/link";

export default function SideBar({lang, dict}) {
    return (
        <header className="bg-gray-100 p-4 flex flex-col justify-between h-screen">
            <div>
                <img className="rounded-full" style={{width: '175px'}}
                     src="https://d1qy7lc15wxwmt.cloudfront.net/images/profilepicture.jpg" alt="profile image"/>
                <span>Paul Pladziewicz</span>
                <span>{dict.sidebar.profession}</span>
                <span>Current working at InRhythm, consulting at E*TRADE/Morgan Stanley</span>
            </div>
            <ul>
                <li><Link href={`/${lang}/about`}>About</Link></li>
                <li><a href="">Posts</a></li>
                <li><a href="">Projects</a></li>
                <li><a href="">Presentations</a></li>
            </ul>
            <div>
                Copyright Paul Pladziewicz 2024
            </div>
        </header>
    );
}