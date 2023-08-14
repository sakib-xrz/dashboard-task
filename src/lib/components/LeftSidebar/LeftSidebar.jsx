"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

export const menus = [
    { route: "Dashboard", path: "/" },
    { route: "Teacher", path: "/teacher" },
    { route: "Student", path: "/student" },
    { route: "Art", path: "/art" },
];

export default function LeftSidebar() {
    const pathname = usePathname();
    const [expand, setIsExpand] = useState(false)
    return (
        <aside>
            <ul className="hidden lg:block space-y-1 md:w-48 lg:w-60 md:min-h-screen sticky top-0 p-3 md:py-10 border-r">
                {menus.map((e, i) => (
                    <li key={i} className="list-none w-full">
                        <Link
                            className={`inline-block w-full py-2 px-4 text-teal-700  rounded-md cursor-pointer font-medium text-lg ${pathname === e.path
                                ? " hover:bg-teal-100 bg-teal-100"
                                : "hover:bg-gray-50"
                                }`}
                            href={e.path}
                        >
                            {e.route}
                        </Link>
                    </li>
                ))}
            </ul>
            <div className="p-3 lg:hidden">
                <button onClick={() => setIsExpand(!expand)}
                    className="w-full bg-transparent text-teal-600 border border-teal-600 font-medium rounded-lg text-sm px-5 py-2.5 flex items-center justify-between "
                    type="button"
                >
                    {pathname === "/" ? "Dashboard" : pathname === "/teacher" ? "Teacher" : pathname === "/student" ? "Student" : "Art"}
                    <ChevronDownIcon className="h-5 w-5" />
                </button>

                <div className={`z-10 ${expand ? "" : "hidden"} bg-white divide-y divide-gray-100 rounded-lg shadow w-full`}>
                    <ul className="text-sm text-gray-700">
                        {menus.map((e, i) => (
                            <li key={i}>
                                <Link
                                    onClick={() => setIsExpand(!expand)}
                                    href={e.path}
                                    className={`block px-4 py-2 ${pathname === e.path
                                        ? " hover:bg-teal-100 bg-teal-100"
                                        : "hover:bg-gray-50"
                                        }  text-teal-700 `}
                                >
                                    {e.route}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </aside>
    );
}
