"use client"
import Link from "next/link";
import { usePathname } from 'next/navigation'

export const menus = [
    { route: "Dashboard", path: "/" },
    { route: "Teacher", path: "/teacher" },
    { route: "Student", path: "/student" },
];


export default function LeftSidebar() {
    const pathname = usePathname()
    return (
        <ul className="space-y-1 lg:w-60 lg:min-h-screen sticky top-0 p-3 lg:py-10">
            {menus.map((e, i) =>
                <li key={i} className="list-none w-full">
                    <Link className={`inline-block w-full py-2 px-4 text-teal-700  rounded-md cursor-pointer font-medium text-lg ${pathname === e.path ? " hover:bg-teal-100 bg-teal-100" : "hover:bg-gray-50"}`}
                        href={e.path} >
                        {e.route}
                    </Link>
                </li>
            )}
        </ul>
    )
}
