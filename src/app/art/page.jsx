"use client";
import { getArt } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import React from "react";

const headers = ["ID", "ART", "TITLE", "PRICE", "SELLER", "DETAILS"];

export default function Art() {
    const { data: tableData } = useQuery({
        queryKey: ["art"],
        queryFn: getArt,
    });
    return (
        <div className="space-y-5">
            <p className="text-2xl lg:text-3xl text-gray-800 font-medium">
                Art: {tableData?.length}
            </p>
            <table className={`text-sm text-gray-500 border w-full mx-auto`}>
                <thead className="text-teal-600 uppercase bg-teal-100">
                    <tr>
                        {headers.map((header, index) => (
                            <th key={index} className="px-4 py-3">
                                {header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {tableData?.map((data, index) => (
                        <tr key={index} className="border-b text-center">
                            <td className="px-4 py-2 font-bold text-gray-800 whitespace-nowrap">
                                {data.id}
                            </td>
                            <td className="py-2 flex justify-center">
                                <Image
                                    className="w-10 h-10 object-cover rounded-md"
                                    src={data.image}
                                    alt={data.title}
                                    width={"200"}
                                    height={"200"}
                                />
                            </td>
                            <td className="px-4 py-2 font-medium text-gray-800 whitespace-nowrap">
                                {data.title}
                            </td>
                            <td className="px-4 py-2 font-medium text-gray-800 whitespace-nowrap">
                                ${data.price}
                            </td>
                            <td className="px-4 py-2 font-medium text-gray-800 whitespace-nowrap">
                                ${data.seller_name}
                            </td>
                            <td className="px-4 py-2 font-medium text-gray-800 whitespace-nowrap">
                                <button className="border border-teal-500 text-teal-600 px-1 rounded-sm">
                                    View Details
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
