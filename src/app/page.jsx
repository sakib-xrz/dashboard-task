"use client";
import Link from "next/link";
import { UsersIcon, UserGroupIcon, BookOpenIcon } from "@heroicons/react/24/solid";
import { teacherData } from "./teacher/page";
import { studentData } from "./student/page";

export default function Home() {
    return (
        <div className="space-y-5">
            <h2 className="text-3xl lg:text-5xl font-medium text-teal-600 text-center">
                Welcome to our Dashboard
            </h2>

            <p className="text-2xl lg:text-3xl text-gray-800 font-medium">
                Summary
            </p>

            <div className="grid lg:grid-cols-3 gap-10">
                <Link
                    href={"/teacher"}
                    className="flex justify-between items-center w-full p-6 rounded-md cursor-pointer shadow"
                >
                    <div className="space-y-1">
                        <h5 className="text-md font-medium text-teal-600">
                            Total Teacher
                        </h5>{" "}
                        <h2 className="text-5xl font-bold">
                            {teacherData.length}
                        </h2>
                    </div>
                    <UsersIcon className="h-14 w-14 p-2 rounded-full bg-blue-500 text-white" />
                </Link>
                <Link
                    href={"/student"}
                    className="flex justify-between items-center w-full p-6 rounded-md shadow"
                >
                    <div className="space-y-1">
                        <h5 className="text-md font-medium text-teal-600">
                            Total Student
                        </h5>{" "}
                        <h2 className="text-5xl font-bold">
                            {studentData.length}
                        </h2>
                    </div>
                    <UserGroupIcon className="h-14 w-14 p-2 rounded-full bg-pink-500 text-white" />
                </Link>
                <div className="flex justify-between items-center w-full p-6 rounded-md shadow">
                    <div className="space-y-1">
                        <h5 className="text-md font-medium text-teal-600">
                            Total Course
                        </h5>{" "}
                        <h2 className="text-5xl font-bold">7</h2>
                    </div>
                    <BookOpenIcon className="h-14 w-14 p-2 rounded-full bg-green-500 text-white" />
                </div>
            </div>
        </div>
    );
}
